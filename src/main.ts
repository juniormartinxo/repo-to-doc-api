import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import fastifyCsrfProtection from '@fastify/csrf-protection'
import helmet from '@fastify/helmet'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: {
        level: 'debug', // Especifica o nível de detalhe dos logs
      },
    }),
    {
      rawBody: true,
      bufferLogs: true,
    },
  )

  // Importa o módulo de CSRF
  await app.register(fastifyCsrfProtection)

  // Importa o módulo de segurança Helmet
  await app.register(helmet)

  // Habilita o CORS
  app.enableCors()

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
