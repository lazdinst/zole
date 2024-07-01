import { Theme } from '../types';
import { shared } from '../configs/shared';
import {
  accent,
  missionColors,
  statusColors,
  neutrals,
} from '../configs/colors';

// TODO: Move all the colors to a reference object
// const darkColors = {};

// Populate the theme with the colors from the color system
const darkTheme: Theme = {
  ...shared,
  colors: {
    ...shared.colors,
    background: '#36393F',
    text: '#bdc1c6',
    primary: '#ededed',
    secondary: '#80848e',
    borderColor: '#424242',
    accent: accent,
    surfaces: {
      headerContainer: '#202225',
      subHeaderContainer: '#2b2d31',
      navBg: '#1e1f22',
      mainBg: '#2b2d31',
      sectionBg: '#202225',
      articleBg: '#36393f',
      layerBg: '#2b2e32',
      cardBg: '#2b2d31',
      buttonBg: '#7289da',
      buttonText: '#ffffff',
      inputBg: '#202225',
      inputText: '#ffffff',
    },
    // TODO: Expand this to be nest components with their own colors
    buttons: {
      none: '#80848e',
    },
    components: {
      logo: {
        fill: missionColors.green,
        textFill: missionColors.green,
      },
      icon: {
        color: '#bdc1c6',
      },
      indicator: {
        background: statusColors.info,
        text: '#ffffff',
      },
      menu: {
        background: '#36393f',
        text: '#bdc1c6',
        border: '#424242',
        shadow: '#000000',
        hover: 'rgb(0, 0, 0, 0.1)',
        accent: statusColors.info,
      },
      sidebar: {
        background: neutrals.gray[900],
        text: '#bdc1c6',
        borderColor: '#424242',
        indicator: '#80848e',
        accent: statusColors.info,
      },
      scrollbar: {
        track: neutrals.gray[700],
        thumb: neutrals.gray[600],
      },
      slider: {
        track: neutrals.gray[700],
        thumb: neutrals.gray[50],
        progress: statusColors.info,
      },
      textInput: {
        background: neutrals.gray[800],
        text: '#bdc1c6',
        border: '#424242',
        placeholder: '#6c757d',
        focus: accent,
      },
      controlButton: {
        text: neutrals.gray[50],
        stroke: neutrals.gray[900],
        border: neutrals.gray[800],
        background: {
          start: neutrals.gray[800],
          end: neutrals.gray[900],
        },
      },
      timelineItem: {
        background: neutrals.gray[800],
        hover: accent,
        text: '#bdc1c6',
        border: '#424242',
      },
      dropdown: {
        background: neutrals.gray[800],
        text: '#bdc1c6',
        border: '#424242',
        shadow: '#000000',
        hoverText: statusColors.info,
        hoverBg: 'rgb(0, 0, 0, 0.1)',
        active: neutrals.gray[700],
      },
      tooltip: {
        background: '#000000',
        text: '#ffffff',
      },
      card: {
        background: '#2b2e32',
        text: '#bdc1c6',
        border: neutrals.gray[800],
      },
      separator: {
        background: neutrals.gray[700],
        text: '#495057',
      },
      button: {
        primary: {
          background: statusColors.info,
          text: '#ffffff',
          border: missionColors.blurpuple,
        },
        secondary: {
          background: '#6c757d',
          text: '#ffffff',
          border: '#6c757d',
        },
        tertiary: {
          background: '#ffffff',
          text: missionColors.blurpuple,
          border: missionColors.blurpuple,
        },
        success: {
          background: statusColors.success,
          text: '#ffffff',
          border: statusColors.success,
        },
        warning: {
          background: statusColors.warning,
          text: '#ffffff',
          border: statusColors.warning,
        },
        error: {
          background: statusColors.error,
          text: '#ffffff',
          border: statusColors.error,
        },
        info: {
          background: statusColors.info,
          text: '#ffffff',
          border: statusColors.info,
        },
        none: {
          background: neutrals.gray[700],
          text: neutrals.gray[500],
          border: neutrals.gray[800],
        },
      },
    },
  },
};

export default darkTheme;
