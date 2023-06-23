import { Controller, Get, HttpStatus, Query, Redirect, Res } from "@nestjs/common";
import { OauthService } from "@modules/oauth/oauth.service";
import { Response } from 'express';

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