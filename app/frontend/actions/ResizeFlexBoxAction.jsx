'use strict';

const ResizeFlexBoxAction = {
  startFunction: function(position) {
    return {
      type: "START_RESIZE",
      position: position,
    }
  }
};

module.exports = ResizeFlexAction;
