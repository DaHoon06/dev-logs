import { Module } from "@nestjs/common";
import { OauthController } from "@modules/oauth/oauth.controller";
import { OauthService } from "@modules/oauth/oauth.service";

@Module({
  controllers: [OauthController],
  providers: [OauthService]
})

export class OauthModule {}