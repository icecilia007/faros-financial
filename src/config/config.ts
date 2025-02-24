import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT || '3000',
    BRAPI_TOKEN: process.env.BRAPI_TOKEN || '',
};
