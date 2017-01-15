"use strict";
require("reflect-metadata");
exports.TPA_TABLE_COLUMN = Symbol("tpa:table:column");
function Column(settings = {}) {
    return (target, propertyKey, descriptor) => {
        let propertyType = Reflect.getMetadata("design:type", target, propertyKey);
        let columnSettings = Object.assign({
            columnDefinition: "",
            insertable: true,
            length: 255,
            nullable: true,
            precision: 0,
            scale: 0,
            unique: false,
            updatable: true,
            type: propertyType
        }, settings);
        console.log(columnSettings);
        Reflect.defineMetadata(exports.TPA_TABLE_COLUMN, columnSettings, target, propertyKey);
    };
}
exports.Column = Column;
