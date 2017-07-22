import Vue from 'vue';

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

export {get, post};
