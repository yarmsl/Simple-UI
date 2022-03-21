import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      primary: IColorsTypes;
      secondary: IColorsTypes;
    };
    shape: {
      radius: string;
    };
  }
}

interface IColorsTypes {
  dark: string;
  main: string;
  light: string;
  text: string;
}
