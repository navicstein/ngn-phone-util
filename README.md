# ngn-phone-util

> Nigerian Phone Number Utility

This module is used validate and test for nigerian phone numbers

### Usage

```bash
npm install ngn-phone-util
```

### Features

- Auto detect phone number provider and..
- Auto test and validate phone number

### Importing library from nodejs

You can import the generated bundle to use the whole library generated by script:

```javascript
import { test, detect } from 'ngn-phone-util';

let phone = '09031844110';
test(phone); // => true | throws "Error"

// Detect a phone number
let ph = '09031844110';
detect(ph); // => "MTN"
```

### Importing library for the browser

```html
<script src="https://cdn.jsdelivr.net/navicstein/ngn-phone-util/dist/ngn-phone-util.umd.js"></script>

<script>
  let phoneIsValid = ngnPhoneUtil.test('09031844110');
  if (phoneIsValid) {
    // do something with phone
  }
</script>
```

Additionally, you can import the transpiled modules from `dist/lib` in case you have a modular library:

```typescript
import validate from 'ngn-phone-util/dist/lib/validate';
validate(phone: string)
```

### NPM scripts

- `npm t`: Run test suite
- `npm start`: Run `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings, create docs
- `npm run lint`: Lints code
- `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

### Todo

- Add a `.format()` function to auto add `+234` to numbers as a serialized argin.
- Add a `generator` function to randomly generate specific provider numbers.

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!
