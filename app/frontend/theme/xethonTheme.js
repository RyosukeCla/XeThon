import * as colors from 'material-ui/styles/colors';
import {
  wetasphalt, bluegray50, midnightblue, clouds,
} from './xethonColors';

var colorManipulator = require('material-ui/utils/colorManipulator');

const Theme = {
  topBar: {
    bg: midnightblue,
    col: colors.pinkA200,
  },
  tabMenu: {
    bg: midnightblue,
    col: colors.pinkA200,
    colHidden: (0, colorManipulator.fade)(colors.pinkA400, 0.5),
  },
  tabBox: {
    bg: midnightblue,
    col: colors.pinkA200,
  },
  statusDialog: {
    bg: midnightblue,
    col: colors.pinkA200,
    col2: colors.pinkA400,
    buttonBG: colors.grey50,
    buttonCol: colors.pinkA200,
  },
  orderedFileMenu: {
    bg: midnightblue,
    addBG: midnightblue,
    addCol: colors.pinkA200,
    listBG: midnightblue,
    listBGHover: wetasphalt,
    listBGSelected: wetasphalt,
    listPlaceholderBG: wetasphalt,
    listCol: colors.pinkA200,
    listNumCol: colors.pinkA200,
    listBorderCol: colors.pink200,
    saveCol: colors.pinkA400,
    contextBG: midnightblue,
    contextCol: colors.pinkA200,
  },
};

export default Theme;
