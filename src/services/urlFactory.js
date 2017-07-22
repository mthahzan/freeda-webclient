/**
 * The base URL of the API endpoint
 * @type {string}
 */
const BASE = 'http://thahsan.me:9090/freedacore';

export default {
  /**
   * Factory method to generate the URL to GET the users
   * @return {string} URL to GET the users
   */
  getUsersURL: () => `${BASE}/user`,

  /**
   * Factory method to generate the URL to check availability
   * @return {string} URL to check availability
   */
  checkAvailability: () => `${BASE}/checkAvailability`,

  /**
   * Factory method to generate the URL to confirm event
   * @return {string} URL to Confirm event
   */
  confirm: () => `${BASE}/createMeeting`,
};
