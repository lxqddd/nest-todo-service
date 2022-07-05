import { Injectable } from "@nestjs/common"

@Injectable()
export class CatsService {
  getCatInfo(query) {
    console.log(query)
    return query
  }
}