"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rule = {
    meta: {
        type: 'suggestion',
    },
    create(context) {
        return {
            Literal(node) {
                context.report({
                    node,
                    message: 'some-error',
                });
            },
        };
    },
};
exports.default = rule;
