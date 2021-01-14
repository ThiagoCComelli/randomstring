const charset = require('../utils/chars')

const generateDefault = (length) => {
    var string = ""

    for (let i = 0; i < length; i++) {
        string += charset.alphanumeric().charAt(Math.floor(Math.random() * charset.alphanumeric().length))
    }

    return string
}

const generateCustom = (object) => {
    var string = ""
    var charSet

    if(object.charset in ['alphanumeric','alphabetic','numeric','hex']){
        charSet = charset[object.charset()]
    }else if(object.charset === undefined){
        charSet = charset.alphanumeric()
    }else{
        charSet = object.charset
    }

    for (let i = 0; i < (object.length ? object.length : 32); i++) {
        string += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }

    return string
}


module.exports = {
    randomstring: (options=32) => {
        var string

        if(typeof options === 'number'){
            string = generateDefault(options)
        }else if(typeof options === 'object'){
            string = generateCustom(options)
        }

        return string
    }   
}