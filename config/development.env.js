var merge = require('webpack-merge');
var prodEnv = require('./production.env');

module.exports = merge(prodEnv, {
  // Node ENV
  NODE_ENV: '"development"',

  // API URL base
  apiURL: '"http://www.dashboard.com:1337/"',

  // Vaptcha key
  siteKey: '"6LfqbRIUAAAAABZmk7Sk1JCzB_Q_40Wm3Afr5DP_"',

  // Hackathon data lol
  data: {
    /**
     * Current user
     * @type {Object}
     */
    currentUser: {
      id: 1,
      name: 'Mohomed Thahsan',
      avatar: '', // TODO: Add avatar URL
      googleCalendarAccessKey: '', // TODO: Add Access key
    },

    /**
     * User options
     * @type {Array}
     */
    otherUsers: [{
      id: 2,
      name: 'Chomal Meguntenna',
      avatar: '', // TODO: Add avatar URL
      googleCalendarAccessKey: '', // TODO: Add Access key
    }, {
      id: 3,
      name: 'Dhammika Sriyananda',
      avatar: '', // TODO: Add avatar URL
      googleCalendarAccessKey: '', // TODO: Add Access key
    }, {
      id: 4,
      name: 'Thilina Lokuge',
      avatar: '', // TODO: Add avatar URL
      googleCalendarAccessKey: '', // TODO: Add Access key
    }],

    /**
     * Meeting location options
     * @type {Array}
     */
    locations: [{
      id: 1,
      name: 'Main Conference Room',
      avatar: '', // TODO: Add avatar URL
      googleCalendarAccessKey: '', // TODO: Add Access key
    }, {
      id: 2,
      name: 'Lobby Area',
      avatar: '', // TODO: Add avatar URL
      googleCalendarAccessKey: '', // TODO: Add Access key
    }]
  },
});
