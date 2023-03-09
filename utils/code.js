var random_code = require('random-number');

const getCode = () => {
    var options = {
        min:  0, max:  1000, integer: true
    }
    
    return random_code(options);
}

exports.getCode = getCode
