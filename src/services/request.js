import Vue from 'vue';

import urlFactory from './urlFactory';

/**
 * Make a POST request
 * @param  {string} url    The URL to POST to
 * @param  {object} params Params to be POSTed in the request body
 * @param  {object} config Any configurations to use
 * @return {Promise}       Request promise object
 */
const post = (url, params, config) => {
  return Vue.axios.post(url, params, config);
};

/**
 * Make a GET request
 * @param  {string} url    The URL to GET from
 * @param  {object} config Any configurations to use
 * @return {Promise}       Request promise object
 */
const get = (url, config) => {
  return Vue.axios.get(url, config);
};

/**
 * Gets all users
 * @return {Promise}
 */
const getAllUsers = () => get(urlFactory.getUsersURL());

/**
 * Check event availaability
 * @param  {Object} data Request body
 * @return {Promise}
 */
const checkAvailability = (data) => {
  // return post(urlFactory, data);
  return new Promise((resolve) => {
    const data = {
      status: 'conflict',
      timeslots: [{
        start: '05.00',
        end: '06:00',
      }, {
        start: '08:00',
        end: '09.00',
      }],
    };

    setTimeout(() => {
      resolve({data});
    }, 1000);
  });
};

/**
 * Confirm event creation
 * @param  {Object} data Request body
 * @return {Promise}
 */
const confirm = (data) => {
  // return post(urlFactory, data);
  return new Promise((resolve) => {
    const response = {
      status: 'ok',
      timeslot: data.timeslot,
    };

    setTimeout(() => {
      resolve({response});
    }, 1000);
  });
};

export {get, post, getAllUsers, checkAvailability, confirm};
