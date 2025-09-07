import z from 'zod';
export declare const envSchema: z.ZodObject<{
    DATABASE_URL: z.ZodString;
    JWT_SECRET: z.ZodString;
    DASHBOARD_URL: z.ZodString;
    WHATSAPP_API_URL: z.ZodString;
    NODE_ENV: z.ZodDefault<z.ZodEnum<["development", "test", "production"]>>;
}, "strip", z.ZodTypeAny, {
    DATABASE_URL?: string;
    JWT_SECRET?: string;
    DASHBOARD_URL?: string;
    WHATSAPP_API_URL?: string;
    NODE_ENV?: "development" | "test" | "production";
}, {
    DATABASE_URL?: string;
    JWT_SECRET?: string;
    DASHBOARD_URL?: string;
    WHATSAPP_API_URL?: string;
    NODE_ENV?: "development" | "test" | "production";
}>;
export declare const ENV: {
    DATABASE_URL?: string;
    JWT_SECRET?: string;
    DASHBOARD_URL?: string;
    WHATSAPP_API_URL?: string;
    NODE_ENV?: "development" | "test" | "production";
};
export declare const getEnvIssues: () => z.ZodIssue[] | void;
