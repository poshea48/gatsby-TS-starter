import '@emotion/react';

type ThemeObjectType = {
  [key: string]: string;
};
type ColorsType = {
  [key: string]: ThemeObjectType;
};

type TransitionType = {
  duration: string;
  timing: string;
  transition: string;
};

type BreakPointsType = {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
};

type FontFamilyType = {
  body: string;
  heading: string;
};

type BorderRadiusType = {
  default: string;
  round: string;
};

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
    breakpoints: BreakPointsType;
    fontFamily: FontFamilyType;
    borderRadius: BorderRadiusType;
    transitions: {
      default: TransitionType;
      boom: TransitionType;
    };
  }
}
