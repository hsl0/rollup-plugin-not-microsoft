"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pluginutils_1 = require("@rollup/pluginutils");
const magic_string_1 = __importDefault(require("magic-string"));
const regex = /\/\*+\s*Copyright\s\(c\)\sMicrosoft\sCorporation\.[\w./\s",]+\*+\s?\*\//gm;
exports.default = (function notMicrosoft(options) {
    const filter = (0, pluginutils_1.createFilter)(options === null || options === void 0 ? void 0 : options.include, options === null || options === void 0 ? void 0 : options.exclude);
    return {
        name: 'not-microsoft',
        transform(code, id) {
            if (filter(id)) {
                const ms = new magic_string_1.default(code);
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
