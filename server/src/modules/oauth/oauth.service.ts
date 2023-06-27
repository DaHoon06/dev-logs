import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { GithubAccessDto } from '@modules/oauth/dto/github/github.access.dto';
import { IOauth } from '@interfaces/IOauth';

@Injectable()
export class OauthService {
  constructor(private configService: ConfigService) {}

  async getUserInfoByGithub(code: string) {
    const tokenInfo = await this.verifyCodeByGithub(code);
    const { access_token } = tokenInfo;
    return this.getUserDataByGithub(access_token);
  }

  async verifyCodeByGithub(code: string): Promise<GithubAccessDto> {
    const body = {
      client_id: await this.configService.get('GITHUB_CLIENT_ID'),
      client_secret: await this.configService.get('GITHUB_SECRET_KEY'),
      code,
    };
    const { data } = await axios.post(
      `https://github.com/login/oauth/access_token`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const dataSplit = data.split('&');
    const obj: IOauth.GithubLoginSuccess = {
      access_token: '',
      expires_in: 0,
      refresh_token: '',
      refresh_token_expires_in: 0,
      scope: '',
      token_type: '',
    };
    dataSplit.forEach((value) => {
      const resData = value.split('=');
      obj[resData[0]] = resData[1];
    });
    return obj;
  }

  async getUserDataByGithub(accessToken: string): Promise<any> {
    const headers = {
      Authorization: `token ${accessToken}`,
      'Content-Type': 'application/json',
    };
    const { data } = await axios.get('https://api.github.com/user', {
      headers,
    });
    return {
      ...data,
      accessToken,
    };
  }
}
