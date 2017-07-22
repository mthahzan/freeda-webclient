<template>
  <div class="form-container">
    <div>
      <h3>Please fill in your details below to create an event!</h3>
    </div>

    <div class="container text-left form">
      <el-form ref="form" :model="form" label-width="120px">

        <!-- Event date selection -->
        <el-form-item label="Event date">
          <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="Pick a day"
            @change="onEventDateChange">
          </el-date-picker>
        </el-form-item>

        <!-- Event time selection -->
        <el-form-item label="Event time">
          <el-col :span="11">
            <el-time-select
              v-model="form.fromTime"
              placeholder="From"
              @change="onEventStartTimeChange"
              :picker-options="timePickerOptions">
            </el-time-select>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-select
              v-model="form.toTime"
              placeholder="To"
              @change="onEventStartEndChange"
              :picker-options="timePickerOptions">
            </el-time-select>
          </el-col>
        </el-form-item>

        <!-- Guest selection -->
        <el-form-item label="Event guests">
          <el-select v-model="form.guests" multiple placeholder="Select guests">
            <el-option
              v-for="item in (otherUsers.data || [])"
              :key="item.id"
              :label="item.firstName + ' ' + item.lastName"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- Event location selection -->
        <!-- <el-form-item label="Event location">
          <el-select v-model="form.location" placeholder="Select location">
            <el-option
              v-for="item in (locations || [])"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item> -->

        <!-- Actions -->
        <el-form-item label-width="120px">
          <el-button type="primary" @click="submitForm">Create</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'leadform',
  props: ['otherUsers'],
  data() {
    return {
      timePickerOptions: {
        start: '08:00',
        step: '00:30',
        end: '20:00',
      },

      form: {
        date: null,
        fromTime: null,
        toTime: null,
        guests: [],
      },
    };
  },
  methods: {
    /**
     * Change event handler
     * @param  {any} event Change event data
     */
    onEventDateChange(event) {
      console.log(event);
    },

    /**
     * Change event handler
     * @param  {any} event Change event data
     */
    onEventStartTimeChange(event) {
      console.log('Start', event);
    },

    /**
     * Change event handler
     * @param  {any} event Change event data
     */
    onEventStartEndChange(event) {
      console.log('End', event);
    },

    /**
     * Submit the form
     */
    submitForm() {
      const data = {
        ...this.form,

        guests: (this.otherUsers.data || [])
          .filter((guest) => {
            return guest && (this.form.guests || []).indexOf(guest.id) > -1;
          }),
      };

      this.$emit('send', {data});
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
