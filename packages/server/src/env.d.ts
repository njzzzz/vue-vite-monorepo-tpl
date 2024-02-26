declare namespace NodeJS {
  interface ProcessEnv {
    DB_PASSWORD: string
    DB_PORT: string
    DB_HOST: string
    DB_USERNAME: string
    DB_DATABASE: string
    REDIS_HOST: string
    REDIS_PORT: string
    REDIS_PASSWORD: string
    PORT: string
  }
}
