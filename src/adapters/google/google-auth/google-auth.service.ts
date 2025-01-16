import { Injectable, Logger } from '@nestjs/common'
import { google } from 'googleapis'
import { googleCredentialsConfig } from '@/config/google-credentials.config'

@Injectable()
export class GoogleAuthService {
  private readonly logger: Logger = new Logger(GoogleAuthService.name)

  async authorize(scopes: string[]) {
    try {
      const jwtClient = new google.auth.JWT({
        email: googleCredentialsConfig.client_email,
        key: googleCredentialsConfig.private_key,
        scopes: scopes,
      })

      await jwtClient.authorize()
      this.logger.log('Autenticação bem-sucedida')
      return jwtClient
    } catch (error) {
      this.logger.error(`Erro na autenticação: ${error.message}`)
      this.logger.error(`Stack trace: ${error.stack}`)
      throw error
    }
  }
}
