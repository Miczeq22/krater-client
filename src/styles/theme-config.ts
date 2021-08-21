export const MOBILE_DEVICE_BREAKPOINT = 768;
export const TABLET_DEVICE_BREAKPOINT = 992;
export const DESKTOP_CONTAINER_WIDTH = 1410;

export type FontFamily = 'primary' | 'secondary';

export type DeviceBreakpoint = 'xsmall' | 'mobile' | 'tablet';

export type Color =
  | 'primary'
  | 'fontPrimary'
  | 'fontSecondary'
  | 'error'
  | 'errorLight'
  | 'grey'
  | 'white'
  | 'fontGrey';

export type Spacing = 'large' | 'base' | 'xbase' | 'medium' | 'xmedium' | 'small' | 'xsmall';

export type FontSize =
  | 'xsmall'
  | 'small'
  | 'regular'
  | 'medium'
  | 'xmedium'
  | 'xbig'
  | 'big'
  | 'large';

export type FontWeight = 'bold' | 'semibold' | 'normal' | 'light' | 'regular';

export type Radius = 'default' | 'medium';

export type UI =
  | 'menuWidth'
  | 'chartHeight'
  | 'feedIndent'
  | 'feedIndentSmall'
  | 'inputHeight'
  | 'messagingHeight'
  | 'minMessagingHeight'
  | 'desktopContainerWidth'
  | 'notificationOverlayHeight'
  | 'notificationOverlayWidth';

export type ApplicationGlobalMargin = 'default' | 'mobile';

export interface Theme {
  fontFamily: { [key in FontFamily]: string };
  color: { [key in Color]: string };
  spacing: { [key in Spacing]: string };
  deviceBreakpoint: { [key in DeviceBreakpoint]: string };
  fontSize: { [key in FontSize]: string };
  fontWeight: { [key in FontWeight]: number };
  radius: { [key in Radius]: string };
  ui: { [key in UI]: string };
  appGlobalMargin: { [key in ApplicationGlobalMargin]: string };
}

export const progressColor = {
  light: {
    from: '#3B5AF7',
    to: '#8AACFF',
    trail: '#ECF1FF',
  },
};

export const theme: Theme = {
  fontFamily: {
    primary: 'Montserrat',
    secondary: 'Raleway',
  },
  color: {
    primary: '#1977F2',
    fontPrimary: '#160647',
    fontSecondary: '#574B7A',
    error: '#C9596E',
    errorLight: '#E2A4B1',
    grey: '#F4F4F4',
    white: '#FFFFFF',
    fontGrey: '#C4C4C4',
  },
  radius: {
    default: '5px',
    medium: '10px',
  },
  fontSize: {
    xsmall: '12px',
    small: '14px',
    regular: '16px',
    xmedium: '18px',
    medium: '20px',
    xbig: '27px',
    big: '34px',
    large: '48px',
  },
  fontWeight: {
    bold: 700,
    semibold: 600,
    normal: 500,
    regular: 400,
    light: 300,
  },
  ui: {
    menuWidth: '200px',
    chartHeight: '170px',
    feedIndent: '60px',
    feedIndentSmall: '50px',
    inputHeight: '50px',
    messagingHeight: '680px',
    minMessagingHeight: '400px',
    desktopContainerWidth: `${DESKTOP_CONTAINER_WIDTH}px`,
    notificationOverlayHeight: '485px',
    notificationOverlayWidth: '360px',
  },
  spacing: {
    xsmall: '5px',
    small: '10px',
    xmedium: '15px',
    medium: '20px',
    xbase: '30px',
    base: '40px',
    large: '60px',
  },
  deviceBreakpoint: {
    xsmall: '480px',
    mobile: `${MOBILE_DEVICE_BREAKPOINT}px`,
    tablet: `${TABLET_DEVICE_BREAKPOINT}px`,
  },
  appGlobalMargin: {
    default: '40px',
    mobile: '20px',
  },
};
