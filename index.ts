import type { Plugin, PluginImpl } from 'rollup';

export default <PluginImpl>function notMicrosoft(options?: Object): Plugin {
    return {
        name: 'not-microsoft',
        transform(code) {
            return code.replace(
                /\/\*+\s*Copyright\s\(c\)\sMicrosoft\sCorporation\.[\w./\s",]+\*+\s?\*\//gm,
                ''
            );
        },
    };
};
