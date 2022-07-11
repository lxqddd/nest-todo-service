import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { AppModule } from './app.module'
import { TransformInterceptor } from './common/interceptors/transform.interceptor'
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter'
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter'

async function bootstrap() {
  // 使用express
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // 开启静态资源访问
  app.useStaticAssets(join(__dirname, '../public'), { prefix: '/static' })
  app.useGlobalInterceptors(new TransformInterceptor())
  // 添加全局的路由前缀
  app.setGlobalPrefix('dev')
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter)
  await app.listen(3000)
}
bootstrap()
