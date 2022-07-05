import { Controller, Get, Param, Query, Req } from '@nestjs/common'
import { Request } from 'express'

interface ICat {
  name: string
}
@Controller('cats')
export class CatsController {
  // @Get(':id')
  // findAll(@Param('id') id: string): ICat {
  //   console.log(id)
  //   return {
  //     name: '小橘'
  //   }
  // }

  @Get('/query')
  useQuery(@Query() query) {
    return query
  }
}
