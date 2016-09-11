
# Locale-Manager - Simplified Localization

[![npm package](https://nodei.co/npm/locale-manager.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/locale-manager)

## Super simple to use

Locale-Manager is designed to be the simplest way possible to localize content while keeping an organized, scalable project structure.

```js
var localeManager = require("locale-manager");

var locale = "en-US";
console.log(localeManager[locale].hello); // Hello

locale = "es-MX";
console.log(localeManager[locale].hello); // Hola
```


## Table of contents

- [Setup](#setup)
- [Examples](#examples)

---

## Setup:
- Create a locales directory in the root of your Node.js project.
  - ```mkdir locales```
- Create all supported locale files within the locales directory
- Enjoy!

---

## Examples:
#### Usage:
```js
  var localeManager = require("locale-manager");

  var locale = "en-US";
  console.log(localeManager[locale].hello); // Hello
  console.log(localeManager[locale].greet("Bob"); // Hello Bob

  locale = "es-MX";
  console.log(localeManager[locale].hello); // Hola
  console.log(localeManager[locale].greet("Bob"); // Hola Bob
```

##### Locales:
###### myNodeProject/locales/english.js
```js
  var english = {
    // locale
    locale: "en-US",
    // Hello
    hello: "Hello",
    greet: function(name) { return "Hello " + name; }
  };
  module.exports = english;
```

###### myNodeProject/locales/spanish.js
```js
  var spanish = {
    // locale
    locale: "es-MX",
    // Hello
    hello: "Hola",
    greet: function(name) { return "Hola " + name; }
  };
  module.exports = spanish;
```

[back to top](#table-of-contents)