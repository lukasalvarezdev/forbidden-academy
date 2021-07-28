import dotenv from 'dotenv';
dotenv.config();

const env = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing: process.env['${name}'].`);
  }

  return value;
};

export interface Config {
  port: number;
  mongoURI: string;
  isDev: boolean;
}

export const config: Config = {
  port: +env('PORT'),
  mongoURI: env('MONGODB_URI'),
  isDev: env('NODE_ENV') === 'dev',
};
