import { Logger } from '@nestjs/common'
import { z } from 'zod'

const envSchema = z.object({
  // App config
  TZ: z.string({ message: 'Insira um fuso horário válido' }),
  NODE_ENV: z.string({ message: 'Insira um ambiente válido' }),
  APP_PORT: z.string({ message: 'Insira uma porta válida' }),
  APP_PORT_HOST: z.string({
    message: 'Insira uma porta válida para comunicação do container',
  }),

  // Tracking Log Config
  TRACK_LOG_PATH: z.string({
    message: 'Insira um caminho válido para os arquivos de log',
  }),
  ELASTIC_PORT: z.string({
    message: 'Insira uma porta válida para o Elasticsearch',
  }),
  LOGSTASH_PORT: z.string({
    message: 'Insira uma porta válida para o Logstash',
  }),

  // Netfactor database
  AFA_BD_HOST: z.string({ message: 'Insira um host válido' }),
  AFA_BD_PORT: z.string({ message: 'Insira uma porta válida' }),
  AFA_BD_USERNAME: z.string({ message: 'Insira um usuário válido' }),
  AFA_BD_PASSWORD: z.string({ message: 'Insira uma senha válida' }),
  AFA_BD_NAME: z.string({ message: 'Insira um nome de banco válido' }),

  // Postgres database
  POSTGRES_HOST: z.string({ message: 'Insira um host válido' }),
  POSTGRES_USER: z.string({ message: 'Insira um usuário válido' }),
  POSTGRES_PASSWORD: z.string({ message: 'Insira uma senha válida' }),
  POSTGRES_DB: z.string({ message: 'Insira um nome de banco válido' }),
  POSTGRES_PORT: z.string({
    message: 'Insira uma porta válida par o Postgresql',
  }),

  // Redis config
  REDIS_HOST: z.string({ message: 'Insira um Redis host válido' }),
  REDIS_USER: z.string({ message: 'Insira um Redis usuário válido' }),
  REDIS_PASSWORD: z.string({ message: 'Insira uma senha válida para o Redis' }),
  REDIS_PORT: z.string({ message: 'Insira uma porta válida para o Redis' }),

  // Mail config
  MAIL_HOST: z.string({ message: 'Insira um host válido' }),
  MAIL_PORT: z.string({ message: 'Insira uma porta válida' }),
  MAIL_BOX_CONTACT: z
    .string({ message: 'Insira um e-mail válido' })
    .email({ message: 'Insira um email válido' }),
  MAIL_BOX_BILLING: z.string().email(),
  MAIL_USER: z.string().email(),
  MAIL_PASS: z.string(),

  // GOOGLE API
  GOOGLE_ACCOUNT_TYPE: z.string({
    message: 'GOOGLE_ACCOUNT_TYPE não foi definido no arquivo .env',
  }),
  GOOGLE_ACCOUNT_PROJECT_ID: z.string({
    message: 'GOOGLE_ACCOUNT_PROJECT_ID não foi definido no arquivo .env',
  }),
  GOOGLE_ACCOUNT_PRIVATE_KEY_ID: z.string({
    message: 'GOOGLE_ACCOUNT_PRIVATE_KEY_ID não foi definido no arquivo .env',
  }),
  GOOGLE_ACCOUNT_PRIVATE_KEY: z.string({
    message: 'GOOGLE_ACCOUNT_PRIVATE_KEY não foi definido no arquivo .env',
  }),
  GOOGLE_ACCOUNT_PRIVATE_KEY_BASE64: z.string({
    message:
      'GOOGLE_ACCOUNT_PRIVATE_KEY_BASE64 não foi definido no arquivo .env',
  }),
  GOOGLE_ACCOUNT_CLIENT_EMAIL: z.string({
    message: 'GOOGLE_ACCOUNT_CLIENT_EMAIL não foi definido no arquivo .env',
  }),
  GOOGLE_ACCOUNT_CLIENT_ID: z.string({
    message: 'GOOGLE_ACCOUNT_CLIENT_ID não foi definido no arquivo .env',
  }),
  GOOGLE_ACCOUNT_CLIENT_X509_CERT_URL: z.string({
    message:
      'GOOGLE_ACCOUNT_CLIENT_X509_CERT_URL não foi definido no arquivo .env',
  }),

  // GOOGLE DRIVE API
  GOOGLE_DRIVE_PARENT_FOLDER_ID: z.string({
    message: 'GOOGLE_DRIVE_PARENT_FOLDER_ID não foi definido no arquivo .env',
  }),

  // JWT config
  JWT_SECRET: z.string({ message: 'Insira um segredo válido para o JWT' }),

  // AFA Urls Web
  AFA_CRED_URL: z
    .string({ message: 'Insira a URL para AFA_CRED_URL' })
    .url({ message: 'Insira uma URL válida para AFA_CRED_URL' }),
  AFA_ADMIN_URL: z
    .string({ message: 'Insira a URL para AFA_ADMIN_URL' })
    .url({ message: 'Insira uma URL válida para AFA_ADMIN_URL' }),

  // AFA Ursl Local
  AFA_CRED_URL_LOCAL: z
    .string({ message: 'Insira a URL para AFA_CRED_URL_LOCAL' })
    .url({ message: 'Insira uma URL válida para AFA_CRED_URL_LOCAL' }),
  AFA_ADMIN_URL_LOCAL: z
    .string({ message: 'Insira a URL para AFA_ADMIN_URL_LOCAL' })
    .url({ message: 'Insira uma URL válida para AFA_ADMIN_URL_LOCAL' }),

  // Slack
  SLACK_SIGNING_SECRET: z.string({
    message: 'Insira um segredo válido para o Slack',
  }),
  SLACK_BOT_TOKEN: z.string({ message: 'Insira um token válido para o Slack' }),
  SLACK_APP_TOKEN: z.string({
    message: 'Insira um token de aplicativo válido para o Slack',
  }),
  SLACK_WEBHOOK_CHANNEL_AFABOT: z
    .string({ message: 'Insira um webhook para o canal do Slack AFABOT' })
    .url({
      message: 'Insira uma URL válida para o webhook do canal do Slack AFABOT',
    }),
  SLACK_WEBHOOK_CHANNEL_WEBCRED: z
    .string({ message: 'Insira um webhook para o canal do Slack WEBCRED' })
    .url({
      message: 'Insira uma URL válida para o webhook do canal do Slack WEBCRED',
    }),
  SLACK_CHANNEL_NEW_LEAD_NOTIFICATION: z.string({
    message: 'Insira um canal válido para notificação de novos leads',
  }),
  SLACK_IS_NOTIFY: z
    .enum(['true', 'false'], {
      message: 'Insira um valor booleano para SLACK_IS_NOTIFY',
    })
    .transform((val) => val === 'true'),

  VADU_URL: z.string({ message: 'Insira uma URL válida para o VADU' }),
  VADU_URL_V2: z.string({ message: 'Insira uma URL válida para o VADU' }),
  VADU_API_KEY: z.string({
    message: 'Insira uma chave de API válida para o VADU',
  }),
  VADU_API_ID: z.string({ message: 'Insira um ID de API válido para o VADU' }),
  VADU_APP_SECRET: z.string({
    message: 'Insira um segredo de aplicativo válido para o VADU',
  }),

  // API CNPJ WS config
  CNPJ_WS_PUBLIC_URL: z
    .string({ message: 'Insira uma URL válida para a API CNPJ WS' })
    .url({ message: 'Insira uma URL válida para a API CNPJ WS' }),
  CNPJ_WS_COMMERCIAL_URL: z
    .string({ message: 'Insira uma URL válida para a API CNPJ WS' })
    .url({ message: 'Insira uma URL válida para a API CNPJ WS' }),
  CNPJ_WS_TOKEN: z.string({
    message: 'Insira um token válido para a API CNPJ WS',
  }),
  CNPS_WS_COMMERCIAL_ACTIVE: z
    .enum(['true', 'false'], {
      message: 'Insira um valor booleano para CNPS_WS_COMERCIAL_ACTIVE',
    })
    .transform((val) => val === 'true'),

  // API SERASA config
  SERASA_PUBLIC_URL: z
    .string({ message: 'Insira uma URL válida para a API SERASA' })
    .url({ message: 'Insira uma URL válida para a API SERASA' }),

  // Prisma database
  DATABASE_URL: z
    .string({ message: 'Insira uma url do banco de dados válida' })
    .url({ message: 'Insira uma URL válida' }),
})

const loggerEnv: Logger = new Logger('env')

try {
  envSchema.parse(process.env)
} catch (error) {
  JSON.parse(error).map((err: any) => {
    const { code, expected, path, message } = err
    loggerEnv.error(
      `EnvVar inválida: ${path[0]} | ${message} - ${code} (${expected})`,
    )
  })

  process.exit(1)
}

const env = envSchema.parse(process.env)

export default env
