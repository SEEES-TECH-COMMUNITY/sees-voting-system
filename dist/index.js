"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/validateEnv");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const env_1 = require("./config/env");
const forbidden_exception_filter_1 = require("./shared/filters/forbidden.exception-filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: '1',
    });
    app.enableCors({
        origin: [env_1.ENV.DASHBOARD_URL],
        methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'PATCH'],
        credentials: true,
    });
    app.useGlobalFilters(new forbidden_exception_filter_1.ForbiddenExceptionFilter());
    app.use(session({
        secret: 'vgz0WHhVlip359/LZmFVZZGVhXAceaJ1vRBhBxlpQ/w=',
        saveUninitialized: false,
        proxy: true,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
    }));
    app.use(cookieParser());
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=index.js.map