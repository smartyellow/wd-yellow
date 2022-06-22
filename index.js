'use strict';

module.exports = {

  // Friendly name
  name: 'Yellow theme',

  // Brief description of this plugin
  purpose: 'A modern GUI theme for Webdesq 5',

  // Version of this plugin
  version: '1.0.0',

  // Name of the plugin author
  author: 'Romein van Buren',

  // Name of vendor of this plugin
  vendor: 'Smart Yellow',

  // Array of plugins this plugin depends on
  requires: [ 'webdesq/themes' ],

  // Features this plugin offers
  features: {},

  icon: '<path d="M271 462h128v306H271zm0 0M621 103V54c0-30-24-54-54-54H103C73 0 49 24 49 54v144c0 29 24 54 54 54h464c30 0 54-25 54-54v-49h52v120l-361 69v78h46v-40l361-69V103zm0 0"/>',

  gui: {
    themes: [
      { name: 'Yellow',
        path: __dirname + '/theme/yellow.less',
        purpose: 'Yellow theme',
        mandatory: true,
      },
      { name: 'Yellow XL',
        path: __dirname + '/theme/yellowxl.less',
        purpose: 'Yellow theme (large)',
      },
      { name: 'Yellow XXL',
        path: __dirname + '/theme/yellowxxl.less',
        purpose: 'Yellow theme (very large)',
      },
      { name: 'Yellow XXXL',
        path: __dirname + '/theme/yellowxxxl.less',
        purpose: 'Yellow theme (ridiculously large)',
      },
    ],
  },

};
