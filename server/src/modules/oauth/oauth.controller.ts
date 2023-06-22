import { Controller, Get,  Query } from "@nestjs/common";
import axios from "axios";
import { ConfigService } from "@nestjs/config";

interface GithubLoginSuccess {
  access_token: string;
  expires_in:number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

@Controller('/oauth')
export class OauthController {

  constructor(
    private configService: ConfigService,
  ) {
  }

  @Get('/callback')
  async githubCallback(@Query('code') code: string): Promise<GithubLoginSuccess> {
    const body = {
      client_id: await this.configService.get('GITHUB_CLIENT_ID'),
      client_secret: await this.configService.get('GITHUB_SECRET_KEY'),
      code
    }
    const {data} = await axios.post(`https://github.com/login/oauth/access_token`, body, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const dataSplit = data.split('&');
    const obj: GithubLoginSuccess = {
      access_token: '',
      expires_in: 0,
      refresh_token: '',
      refresh_token_expires_in: 0,
      scope: '',
      token_type: '',
    }
    dataSplit.forEach(value => {
      const resData = value.split('=');
      obj[resData[0]] = resData[1]
    });
    const headers = {
      Authorization: `token ${obj.access_token}`,
      'Content-Type': 'application/json',
    }
    const { data: user } = await axios.get('https://api.github.com/user', {headers})
    console.log(user);
    return obj;
  }
}