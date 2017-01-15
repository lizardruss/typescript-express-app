"use strict";
class VarChar {
    constructor({ size = 255, binary = false } = {}) {
        this.size = size;
        this.binary = binary;
    }
}
let VARCHAR = function (size) {
    return new VarChar({ size: size });
};
exports.VARCHAR = VARCHAR;
VARCHAR.BINARY = new VarChar({ binary: true });
console.log(VARCHAR);
console.log(VARCHAR(1234));
console.log(VARCHAR.BINARY);
