import { Module } from "@nestjs/common";
import { OauthController } from "@src/modules/oauth/oauth.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  controllers: [OauthController],
})

export class OauthModule {}