"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function notMicrosoft(options) {
    return {
        name: 'not-microsoft',
        transform(code) {
            return code.replace(/\/\*+\s*Copyright\s\(c\)\sMicrosoft\sCorporation\.[\w./\s",]+\*+\s?\*\//gm, '');
        },
    };
});
