import { Controller, Get, Query } from "@nestjs/common";
import { OauthService } from "@modules/oauth/oauth.service";

@Controller('/oauth')
export class OauthController {

  constructor(
    private oauthService: OauthService,
  ) {}


  @Get('/callback')
  async githubCallback(
    @Query('code') code: string,
  ): Promise<any> {
    return this.oauthService.getUserInfoByGithub(code);
  }
}