import { createFilter } from '@rollup/pluginutils';
import MagicString from 'magic-string';
const regex = /\/\*+\s*Copyright\s\(c\)\sMicrosoft\sCorporation\.[\w./\s",]+\*+\s?\*\//gm;
export default (function notMicrosoft(options) {
    const filter = createFilter(options === null || options === void 0 ? void 0 : options.include, options === null || options === void 0 ? void 0 : options.exclude);
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
});
