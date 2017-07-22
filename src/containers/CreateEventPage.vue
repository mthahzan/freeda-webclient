<template>
  <div id="createEventsPage">
    <div>
      <CreateEventForm @send="onSubmit" :form-data="formData"></CreateEventForm>
    </div>

    <!-- Sticky Footer  -->
    <footer class="footer">
      <div class="container">
        <p class="text-thrively">Powered by Calcey Technologies LLC</p>
      </div>
    </footer>
  </div>
</template>

<script>
// import urls from '../services/urlFactory';
// import {get, post} from '../services/request';

import CreateEventForm from '../components/CreateEventForm';

// Hackathon data lol
const data = {
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
  }],
};

/**
 * Create request configurations
 * @return {object} The request config object
 */
// const createRequestConfig = () => {
//   const token = window.location.href.split('ref=').pop() || '';
//
//   return {
//     headers: {
//       'Authorization': `Bearer: ${token}`,
//     },
//   };
// };

const createEmptyDataObject = () => {
  return {
    currentUser: data.currentUser,

    otherUsers: data.otherUsers,
  };
};

export default {
  name: 'leadpage',
  // beforeMount() {
  //   this.overlayActive = true;
  //
  //   get(urls.validateURL(), createRequestConfig())
  //     .then(() => {
  //       this.$data.overlayActive = false;
  //       this.$data.pageValid = true;
  //     })
  //     .catch(() => {
  //       this.$data.error = true;
  //       this.$data.pageValid = false;
  //       this.$data.message = 'Page not found';
  //       this.$data.overlayActive = false;
  //     });
  // },
  data() {
    return {
      pageValid: false,
      formSubmitted: false,
      overlayActive: false,
      formData: createEmptyDataObject(),
      error: false,
      message: null,
    };
  },
  components: {
    CreateEventForm,
  },
  methods: {
    reset() {
      if (this.$data.pageValid) {
        this.$data.formData = createEmptyDataObject();
        this.$data.formSubmitted = false;
        this.$data.error = false;
        this.$data.message = null;
      }
    },
    onSubmit(params) {
      // const token = window.location.href.split('ref=').pop() || '';

      // this.overlayActive = true;
      // post(urls.leadUrl(), params, {
      //   headers: {
      //     'Authorization': `Bearer: ${token}`,
      //   },
      // })
      //   .then(() => {
      //     window.fbq('track', 'CompleteRegistration');
      //     this.$data.overlayActive = false;
      //     this.$data.message = `Thanks for sharing your details.
      //       We will get in touch with you.`;
      //     this.$data.formSubmitted = true;
      //     this.$data.error = false;
      //   })
      //   .catch(() => {
      //     this.$data.overlayActive = false;
      //     this.$data.message = 'Oops, something went wrong!';
      //     this.$data.error = true;
      //   });
    },
  },
};
</script>

<style>
.overlay {
  display: none;
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(../assets/ajax-loader.gif);
  background-position: center;
  z-index: 100;
  background-repeat: no-repeat;
}

.overlay.active {
  display: block;
}

.navbar {
  min-height: 80px;
}

.navbar-brand{
  float: none;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  margin-left: 0;
}

.navbar-brand > img {
  height: 50px;
}

.navbar-thrively {
  background-color: #5a4184;
}

body {
  margin-bottom: 70px;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #5a4184;
}

.text-thrively {
  color: #f9a825;
  padding-top: 10px;
}

p.text-thrively {
  display: inline-block;
}

.text-thrively > a {
  text-decoration: none;
  font-weight: bold;
  color: #ffb132;
  cursor: pointer;
}

.img-thrively > img {
  height: 25px;
  display: inline-block;
}

.msg{
  padding:30px;
  background:#dddddd;
  border:solid 1px #bbbbbb;
  border-radius: 2px;
  max-width: 600px;
  margin:50px auto 0px;

}

.btn-submit {
  border-color: #5a4184;
  background-color: #5a4184;
  min-width: 145px;
  outline: 0;
  padding: 13px 40px;
  font-style: normal;
  font-weight: 700;
  font-family: Poppins,sans-serif;
  font-size: 14px;
  line-height: 1.7em;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  -webkit-transition: color .25s ease-out,background-color .25s ease-out,border-color .25s ease-out;
  -moz-transition: color .25s ease-out,background-color .25s ease-out,border-color .25s ease-out;
  transition: color .25s ease-out,background-color .25s ease-out,border-color .25s ease-out;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0;
  color:#ffffff !important;
  margin-top:20px;
  display: inline-block;
}

</style>
