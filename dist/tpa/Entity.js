"use strict";
exports.TPA_TABLE = Symbol("tpa:table");
function Entity(config = {}) {
    return (constructor) => {
        let tableName = config['name'] || constructor['name'];
        Reflect.defineMetadata(exports.TPA_TABLE, tableName, constructor);
    };
}
exports.Entity = Entity;
