import {Routes} from "nest-router";
import { OauthModule } from "@modules/oauth/oauth.module";

export const ROUTES: Routes = [
  {
    path: '/oauth',
    module: OauthModule,
  },
]