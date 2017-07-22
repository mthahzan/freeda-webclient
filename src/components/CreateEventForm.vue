<template>
  <div class="form-container">
    <div>
      <h3>Create you event, invite your friends</h3>
    </div>

    <div class="container text-left form">
      <form @submit.prevent="validateBeforeSubmit">
        <div>
          <br>
          <vue-recaptcha
            ref="recaptcha"
            :sitekey="siteKey"
            @verify="onVerify"
            >
          </vue-recaptcha>
          <small v-show="formData.recaptcha.warning" :class="{'form-text': true, 'text-danger':true}">Please verify the reCAPTCHA</small>
          <br>
        </div>
        <button type="submit" :class="{'btn': true, 'btn-primary':true, 'btn-submit': true}">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

// import validators from '../services/validatorFactory.js';

// Validator.extend('customEmail', {
//   getMessage: validators.message,
//   validate: validators.validator,
// });

Vue.use(VeeValidate);

export default {
  name: 'eventCreateForm',
  props: ['formData'],
  data() {
    const otherUsers = this.formData.otherUsers;
    console.log(otherUsers);

    return {
      siteKey: process.env.siteKey,
    };
  },
  components: {},
  methods: {
    validateBeforeSubmit(e) {
      this.$validator.validateAll();
    },
    submitForm() {
      this.errors.clear();
      this.$emit('send', {
        data: {
          company: this.formData.company,
          contact: this.formData.contact,
          contactNumber: this.formData.phone,
          email: this.formData.email,
          webUrl: this.formData.url,
          message: this.formData.message,
        },
        recaptcha: this.formData.recaptcha,
      });
    },
    onVerify(response) {},
  },
};
</script>

<style>
body {
  font-family: Raleway,sans-serif;
  font-size: 15px;
  line-height: 26px;
  color: grey;
  font-weight: 400;
  overflow-x: hidden!important;
  -webkit-font-smoothing: antialiased;
}

.form-container{
  margin-top:30px;
}

.container.form{
  padding-top:30px;
  max-width: 600px;
}

.container {
  margin:0 auto;
}

label {
  margin-bottom: 0;
  font-weight: 400;
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
}

.btn-submit:hover, .btn-submit:active, .btn-submit:focus {
  border-color: #5a4184;
  background-color: #5a4184;
}

.btn-submit.disabled:hover, .btn-submit.disabled:active, .btn-submit.disabled:focus {
  border-color: #5a4184;
  background-color: #5a4184;
}

input[type="text"], textarea[type="text"] {
  width: 100%;
  margin-bottom: 0;
  padding: 5px 15px;
  border: 1px solid #f2f2f2;
  outline: 0;
  font-family: inherit;
  font-size: 13px;
  background-color: #fff;
  color: #969696;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0;
  box-shadow: none;
  line-height: 1em;
  margin-bottom:10px;
}
textarea[type="text"] {
  height: 4em;
}
input[type="text"]:focus, textarea[type="text"]:focus {
  border-color: #5a4184;
  box-shadow: none;
}

.form-group {
  margin-bottom: 0px;
}
.form-group:last-of-type {
  padding-bottom: 10px;
}

</style>
