import dotenv from 'dotenv'
dotenv.config()

export const development = {
    client: process.env.DB_DRIVER,
    connection: {
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    },
    migrations: {
        directory: './migrations'
    },
    seeds: {
        directory: './seeds'
    }
};

export const production = {
    client: process.env.DB_DRIVER,
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: './migrations'
    },
    seeds: {
        directory: './seeds'
    }
};
