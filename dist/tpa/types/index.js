"use strict";
const VARCHAR_1 = require("./VARCHAR");
const BOOLEAN_1 = require("./BOOLEAN");
exports.Types = {
    VARCHAR: VARCHAR_1.VARCHAR,
    BOOLEAN: BOOLEAN_1.BOOLEAN
};
let TypeMap = new Map();
TypeMap.set(String, exports.Types.VARCHAR);
