import {Routes} from "nest-router";
import { OauthModule } from "@src/modules/oauth/oauth.module";

export const ROUTES: Routes = [
  {
    path: '/oauth',
    module: OauthModule,
  },
]