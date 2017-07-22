/**
 * The base URL of the API endpoint
 * @type {string}
 */
const BASE = process.env.apiURL;

export default {
  /**
   * Factory method to generate the URL to check the token validity
   * @return {string} URL to check the token validity
   */
  validateURL: () => {
    return `${BASE}lead/public/validity`;
  },

  /**
   * Factory method to generate the URL to create a new lead
   * @return {string} URL to create a new Lead
   */
  leadUrl: () => {
    return `${BASE}lead/public`;
  },
};
