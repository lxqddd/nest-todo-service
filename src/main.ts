import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { AppModule } from './app.module'

async function bootstrap() {
  // 使用express
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // 开启静态资源访问
  app.useStaticAssets(join(__dirname, '../public'), {prefix: '/static'})
  await app.listen(3000)
}
bootstrap()
