# randomstring-js

[![Download Stats](https://img.shields.io/npm/dt/randomstring-js?style=plastic)](https://github.com/ThiagoCComelli/randomstring)

Libary to create random strings.

## Installation

You need to use [npm](https://www.npmjs.com/) to install randomstring-js:
```
npm install randomstring-js
```

## Usage

```javascript
import {randomstring} from 'randomstring-js'

randomstring()
>> "9Cey30r31oLyvWHWXZO0fDAdWN7kf6uw"

randomstring(10)
>> "kybqes7eJt"

randomstring({
  length: 16,
  charset: 'alphanumeric'
})
>> "v82ntOfiwi3u0V1P"

randomstring.generate({
  charset: 'thiago'
})
>> "gohgoogiaoigthiitaatiitgotatoogh"
```

## OPTIONS

`randomstring-js`

- `randomstring(options)`
  - `length` - default: 32
  - `charset` - default: 'alphanumeric'
    - `custom` - any given characters from a word or phrase
    - `alphanumeric` - [0-9 a-z A-Z]
    - `alphabetic` - [a-z A-Z]
    - `numeric` - [0-9]
    - `binary` - [0-1]
    - `hex` - [0-9 a-f]

## LICENSE

randomstring-js is licensed under the MIT license
