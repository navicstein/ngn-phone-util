export default function validate(phone: string) {
  // Check if no value is passed
  if (!phone) {
    throw new Error('Invalid entry, enter a telephone number');
  }

  let firstChar;
  let numb;
  let pattern = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7,8})$/g;

  if (!phone || phone.length < 5) return false;

  if (typeof phone === 'number') {
    // numbs never begin with 0, force this to become a string
    numb = '0' + phone;
  } else if (typeof phone === 'string') {
    firstChar = phone.substring(0, 1);

    // user may supply 0 before the numb or not
    // e.g 0703 or 703 (two types of people ¯\_(ツ)_/¯)
    // either way supply missing leading 0
    numb = firstChar === '0' ? phone : '0' + phone;
  } else {
    return false;
  }

  // Check if phone numb contains unwanted characters
  if (phone.match(/[^0-9]/)) {
    throw new Error('Numb contains unwanted characters');
  }

  if (phone.length < 11) {
    throw new Error('Numb must not be lesser than 11 digits but got ' + phone.length);
  }

  if (phone.length > 11) {
    throw new Error('Numb must not be greater than 11 digits but got ' + phone.length);
  }

  // remove all whitespace(s) before running test
  return pattern.test(numb.replace(/\s+/g, ''));
}
