<template>
  <div class="form-container">
    <div>
      <h3>{{ message }}</h3>
    </div>

    <div class="container text-left form">
      <el-form ref="form" :model="form" label-width="120px">

        <!-- Event location selection -->
        <el-form-item label="Alternatives">
          <el-select v-model="form.timeslot" placeholder="Select alternative timeslot">
            <el-option
              v-for="item in (data.timeslots || [])"
              :key="item.start + ' - ' + item.end"
              :label="item.start + ' - ' + item.end"
              :value="item.start + ' - ' + item.end">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- Actions -->
        <el-form-item label-width="120px">
          <el-button type="primary" @click="submitForm">Confirm</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'confirmationform',
  props: ['data'],
  data() {
    return {
      message: 'Please select an alternative',
      form: {
        timeslot: null,
      },
    };
  },
  methods: {
    /**
     * Submit the form
     */
    submitForm() {
      this.$emit('send', {
        data: this.form,
      });
    },
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
