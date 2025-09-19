import z from 'zod';
import * as dotenv from 'dotenv';
dotenv.config();
export const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(1),
  DASHBOARD_URL: z.string().min(1),
  WHATSAPP_API_URL: z.string().min(1),
  SECRET_KEY: z.string().min(1),
  SERVER_KEY: z.string().min(1),
  REDIS_HOST: z.string().min(1),
  REDIS_USERNAME: z.string().min(1),
  REDIS_PASSWORD: z.string().min(1),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
});

export const ENV = envSchema.parse(process.env);

export const getEnvIssues = (): z.ZodIssue[] | void => {
  const result = envSchema.safeParse(process.env);
  if (result.success === false) return result.error.issues;
};
