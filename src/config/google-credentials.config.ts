import env from '@/env'

export const googleCredentialsConfig = {
  type: env.GOOGLE_ACCOUNT_TYPE,
  project_id: env.GOOGLE_ACCOUNT_PROJECT_ID,
  private_key_id: env.GOOGLE_ACCOUNT_PRIVATE_KEY_ID,
  private_key: env.GOOGLE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
  //private_key: Buffer.from(env.GOOGLE_ACCOUNT_PRIVATE_KEY_BASE64, 'base64').toString('ascii'),
  client_email: env.GOOGLE_ACCOUNT_CLIENT_EMAIL,
  client_id: env.GOOGLE_ACCOUNT_CLIENT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: env.GOOGLE_ACCOUNT_CLIENT_X509_CERT_URL,
  universe_domain: 'googleapis.com',
}
