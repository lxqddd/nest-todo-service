import { Controller, Get, Param, Query, Req } from '@nestjs/common'
import { Request } from 'express'
import { CatsService } from './cats.service'

interface ICat {
  name: string
}
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }
  // @Get(':id')
  // findAll(@Param('id') id: string): ICat {
  //   console.log(id)
  //   return {
  //     name: '小橘'
  //   }
  // }

  @Get('/query')
  useQuery(@Query() query) {
    return this.catsService.getCatInfo(query)
  }
}
