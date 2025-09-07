"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
const zod_error_1 = require("zod-error");
const issues = (0, env_1.getEnvIssues)();
if (issues) {
    console.error('Invalid environment variables, check the errors below!');
    console.error((0, zod_error_1.generateErrorMessage)(issues, {
        delimiter: { error: '\\n' },
    }));
    process.exit(-1);
}
console.log('The environment variables are valid!');
//# sourceMappingURL=validateEnv.js.map