"use strict";
require("reflect-metadata");
exports.TPA_TABLE_ID = Symbol("tpa:table:id");
function Id() {
    return (target, propertyKey, descriptor) => {
        let propertyType = Reflect.getMetadata("design:type", target, propertyKey);
        let columnSettings = {
            columnDefinition: "PRIMARY KEY",
            insertable: true,
            length: 255,
            nullable: false,
            precision: 0,
            scale: 0,
            unique: true,
            updatable: false,
            type: propertyType
        };
        console.log(columnSettings);
        Reflect.defineMetadata(exports.TPA_TABLE_ID, columnSettings, target, propertyKey);
    };
}
exports.Id = Id;
