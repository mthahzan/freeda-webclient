export default {
  message(field) {
    return `The ${field} field must be a valid ${field}.`;
  },
  validator(fieldValue, args) {
    let regEx = {
      'email': /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
    };
    let result = false;

    if(fieldValue && ('' + fieldValue).length) {
      result = regEx[args[0]].test(('' + fieldValue));
    }

    return result;
  },
};
