"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvIssues = exports.ENV = exports.envSchema = void 0;
const zod_1 = require("zod");
const dotenv = require("dotenv");
dotenv.config();
exports.envSchema = zod_1.default.object({
    DATABASE_URL: zod_1.default.string().min(1),
    JWT_SECRET: zod_1.default.string().min(1),
    DASHBOARD_URL: zod_1.default.string().min(1),
    WHATSAPP_API_URL: zod_1.default.string().min(1),
    SECRET_KEY: zod_1.default.string().min(1),
    SERVER_KEY: zod_1.default.string().min(1),
    NODE_ENV: zod_1.default
        .enum(['development', 'test', 'production'])
        .default('development'),
});
exports.ENV = exports.envSchema.parse(process.env);
const getEnvIssues = () => {
    const result = exports.envSchema.safeParse(process.env);
    if (result.success === false)
        return result.error.issues;
};
exports.getEnvIssues = getEnvIssues;
//# sourceMappingURL=env.js.map