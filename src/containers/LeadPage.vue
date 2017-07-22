<template>
  <div id="leadpage">
    <div :class="{'overlay': true, 'active': overlayActive}"></div>

    <div v-if="formSubmitted || error" class="msg success-msg">
      <h1 class="formSubmitted">{{ message }}</h1>
    </div>

    <div v-if="!formSubmitted && pageState === 0">
      <LeadForm @send="onEventCreateSubmit" :other-users="otherUsers"></LeadForm>
    </div>

    <div v-if="!formSubmitted && pageState === 1">
      <ConfirmationForm @send="onConfimationSubmit" :data="confirmationData"></ConfirmationForm>
    </div>

    <footer class="footer">
      <div class="container">
        <p class="text-thrively">Powered by Team Half Baked!</p>
      </div>
    </footer>
  </div>
</template>

<script>
import {getAllUsers, checkAvailability, confirm} from '../services/request';
import LeadForm from '../components/LeadForm';
import ConfirmationForm from '../components/ConfirmationForm';

const createEmptyDataObject = () => {
  return {
    otherUsers: [],
    company: '',
    contact: '',
    phone: '',
    email: '',
    url: '',
    message: '',
    recaptcha: {
      verified: false,
      warning: false,
      response: null,
    },
  };
};

export default {
  name: 'leadpage',
  beforeMount() {
    this.overlayActive = true;

    getAllUsers()
      .then((otherUsers) => {
        this.$data.otherUsers = otherUsers;

        this.$data.overlayActive = false;
      });
  },
  data() {
    return {
      pageState: 0,

      formSubmitted: false,
      overlayActive: false,

      otherUsers: [],
      locations: [],
      confirmationData: {},

      error: false,
      message: null,
    };
  },
  components: {
    LeadForm,
    ConfirmationForm,
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
    onEventCreateSubmit(params) {
      this.overlayActive = true;

      const data = params.data;
      const startTime = (params.data.fromTime || '').split(':');
      const endTime = (params.data.toTime || '').split(':');

      const startTimeStamp = new Date(data.date);
      startTimeStamp.setHours(startTime[0]);
      startTimeStamp.setMinutes(startTime[1]);

      const endTimeStamp = new Date(data.date);
      endTimeStamp.setHours(endTime[0]);
      endTimeStamp.setMinutes(endTime[1]);

      const payload = {
        ...data,

        fromTime: startTimeStamp,
        toTime: endTimeStamp,
      };

      checkAvailability(payload)
        .then((response) => {
          this.$data.pageState = 1;

          this.$data.confirmationMessage = 'Please select an alternative';
          this.$data.confirmationData = response.data;
          this.$data.overlayActive = false;
        });
    },

    onConfimationSubmit(params) {
      this.overlayActive = true;

      const data = {
        timeslot: params.data.timeslot,
      };

      confirm(data)
        .then((response) => {
          console.log('RESPONSE', response);

          this.$data.formSubmitted = true;
          this.$data.message = 'All done';
          this.$data.overlayActive = false;
        });
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
