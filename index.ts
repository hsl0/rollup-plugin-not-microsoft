import type { Plugin, PluginImpl } from 'rollup';
import { createFilter, FilterPattern } from '@rollup/pluginutils';
import MagicString from 'magic-string';

const regex =
    /\/\*+\s*Copyright\s\(c\)\sMicrosoft\sCorporation\.[\w./\s",]+\*+\s?\*\//gm;

export interface Options {
    include?: FilterPattern;
    exclude?: FilterPattern;
}

export default <PluginImpl>function notMicrosoft(options?: Options): Plugin {
    const filter = createFilter(options?.include, options?.exclude);

    return {
        name: 'not-microsoft',
        transform(code, id) {
            if (filter(id)) {
                const ms = new MagicString(code);
                ms.replace(regex, '');
                return {
                    code: ms.toString(),
                    map: ms.generateMap({
                        hires: true,
                    }),
                };
            }
        },
    };
};
