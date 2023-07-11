import '@emotion/react';
import { Colors, FontSize } from '@styles/Theme';

declare module '@emotion/react' {
  export interface Theme {
    fontSizes: FontSize;
    colors: Colors;
  }
}
