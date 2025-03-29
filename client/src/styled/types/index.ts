import 'styled-components';
import { StatusColors, MissionColors } from '../configs/colors';
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
export interface SharedTheme {
  colors: {
    statusColors: StatusColors;
    missionColors: MissionColors;
    accent: string;
  };
  spacing: {
    unit: number;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  typography: {
    fontSizeSmall: string;
    fontSizeMedium: string;
    fontSizeLarge: string;
    fontSizeXLarge: string;
    lineHeightSmall: string;
    lineHeightMedium: string;
    lineHeightLarge: string;
    fontFamily: string;
  };
  components: {
    button: {
      text: string;
      borderRadius: string;
      padding: string;
      boxShadow: string;
      borderColor: string;
    };
    inputBorderRadius: string;
    inputPadding: string;
    inputShadow: string;
    panelPadding: string;
    panelBorderRadius: string;
    panelShadow: string;
    popover: {
      borderRadius: string;
      shadow: string;
    };
  };
}

export interface Theme extends SharedTheme {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    borderColor: string;
    statusColors: StatusColors;
    missionColors: MissionColors;
    surfaces: {
      headerContainer: string;
      subHeaderContainer: string;
      navBg: string;
      mainBg: string;
      sectionBg: string;
      articleBg: string;
      layerBg: string;
      cardBg: string;
      buttonBg: string;
      buttonText: string;
      inputBg: string;
      inputText: string;
    };
    buttons: {
      none: string;
    };
    //TODO: Each component from the components directory should have their own unique color object that references the theme specific colors
    components: {
      logo: {
        fill: string;
        textFill: string;
      };
      icon: {
        color: string;
      };
      indicator: {
        background: string;
        text: string;
      };
      menu: {
        background: string;
        text: string;
        border: string;
        shadow: string;
        hover: string;
        accent: string;
      };
      sidebar: {
        background: string;
        text: string;
        borderColor: string;
        indicator: string;
        accent: string;
      };
      scrollbar: {
        track: string;
        thumb: string;
      };
      slider: {
        track: string;
        thumb: string;
        progress: string;
      };
      textInput: {
        background: string;
        text: string;
        border: string;
        placeholder: string;
        focus: string;
      };
      controlButton: {
        background: {
          start: string;
          end: string;
        };
        text: string;
        stroke: string;
        border: string;
      };
      timelineItem: {
        background: string;
        hover: string;
        text: string;
        border: string;
      };
      dropdown: {
        background: string;
        text: string;
        border: string;
        shadow: string;
        hoverBg: string;
        hoverText: string;
        active: string;
      };
      tooltip: {
        background: string;
        text: string;
      };
      card: {
        background: string;
        text: string;
        border: string;
      };
      separator: {
        background: string;
        text: string;
      };
      button: {
        primary: {
          background: string;
          text: string;
          border: string;
        };
        secondary: {
          background: string;
          text: string;
          border: string;
        };
        tertiary: {
          background: string;
          text: string;
          border: string;
        };
        success: {
          background: string;
          text: string;
          border: string;
        };
        warning: {
          background: string;
          text: string;
          border: string;
        };
        error: {
          background: string;
          text: string;
          border: string;
        };
        info: {
          background: string;
          text: string;
          border: string;
        };
        none: {
          background: string;
          text: string;
          border: string;
        };
      };
    };
  };
}
