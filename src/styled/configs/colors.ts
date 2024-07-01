export interface MissionColors {
  blurpuple: string;
  green: string;
  orange: string;
  accent: string;
}
export const missionColors: MissionColors = {
  blurpuple: '#272760',
  green: '#7EB95E',
  orange: '#f69527',
  accent: '#4a4ab5',
};

const darkStatusColors: StatusColors = {
  success: '#28A745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#0070e0',
  none: '#bdc1c6',
  primary: '#007bff',
  secondary: '#FFF',
};

const colors: StatusColors = {
  success: '#28A745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#0070e0',
  none: '#bdc1c6',
  primary: missionColors.blurpuple,
  secondary: missionColors.blurpuple,
};

const lightStatusColors: StatusColors = {
  success: '#28A745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#0070e0',
  none: '#bdc1c6',
  primary: '#007bff',
  secondary: missionColors.blurpuple,
};

interface NeutralsType {
  white: string;
  black: string;
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  lights: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

export const neutrals: NeutralsType = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  lights: {
    50: '#ffffff',
    100: '#fefefe',
    200: '#fcfcfc',
    300: '#fafafa',
    400: '#f7f7f7',
    500: '#f5f5f5',
    600: '#f2f2f2',
    700: '#f0f0f0',
    800: '#ededed',
    900: '#ebebeb',
  },
};

export interface BrandColors {
  primary: string;
  secondary: string;
}

const brandColors = {
  primary: '#007bff',
  secondary: '#6c757d',
};

export const accent: string = '#007bff';
export interface StatusColors {
  success: string;
  error: string;
  warning: string;
  info: string;
  none: string;
  primary: string;
  secondary: string;
}

export const statusColors = {
  success: colors.success,
  error: colors.error,
  warning: colors.warning,
  info: colors.info,
  none: colors.none,
  primary: colors.primary,
  secondary: colors.secondary,
};

// TODO: Implement these colors seperately
export interface ButtonColors extends StatusColors {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
}

export const buttonColors: ButtonColors = {
  success: colors.success,
  error: colors.error,
  warning: colors.warning,
  info: colors.info,
  none: colors.none,
  primary: brandColors.primary,
  secondary: brandColors.secondary,
  light: '#f8f9fa',
  dark: '#343a40',
};

export interface SharedColors {
  accent: string;
  statusColors: StatusColors;
  missionColors: MissionColors;
  darkStatusColors: StatusColors;
  lightStatusColors: StatusColors;
  buttonColors: ButtonColors;
  neutrals: typeof neutrals;
}

export const sharedColors: SharedColors = {
  accent: accent,
  statusColors: statusColors,
  missionColors: missionColors,
  darkStatusColors: darkStatusColors,
  lightStatusColors: lightStatusColors,
  buttonColors: buttonColors,
  neutrals: neutrals,
};
