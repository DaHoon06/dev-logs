import { IsNumber, IsString } from "class-validator";

export class GithubAccessDto {
  @IsString()
  access_token: string;

  @IsNumber()
  expires_in:number;
  @IsString()
  refresh_token: string;

  @IsNumber()
  refresh_token_expires_in: number;

  @IsString()
  scope: string;

  @IsString()
  token_type: string;
}