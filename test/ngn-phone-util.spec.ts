import { detect, test } from '../src/ngn-phone-util';
import { networks } from '../src/misc';
import { Providers } from '../src/ngn-phone-util';

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */

function generate(n: number): string {
  var add = 1,
    max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
  if (n > max) {
    return generate(max) + generate(n - max);
  }
  max = Math.pow(10, n + add);
  var min = max / 10; // Math.pow(10, n) basically
  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  return ('' + number).substring(add);
}

describe('Validate', () => {
  it('Validate yields true with a valid phone', () => {
    expect(test('0802' + generate(7))).toBe(true);
  });

  // Loop through all the networks
  for (let network in networks) {
    let phonePrefixes = networks[network];
    network = network.toUpperCase();
    describe(network, () => {
      it(`Should output "${network}" when fed with an "${network}" phone number`, () => {
        // expect(detect())
      });
    });
    // loop through all the mobile prefixes in array
    for (let prefix of phonePrefixes) {
      let randomNumberFromPrefix = String(prefix) + generate(String(prefix).length > 4 ? 6 : 7);
      describe('Validate', () => {
        it(`Should pass "${prefix}" with decrepancy of "${network}" with ${randomNumberFromPrefix}`, () => {
          expect(detect(randomNumberFromPrefix)).toBe(Providers[network.toLowerCase()]);
        });
      });
    }
  }
});
