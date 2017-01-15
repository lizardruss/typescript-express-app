import 'reflect-metadata';

export const TPA_TABLE_ID = Symbol("tpa:table:id")

export function Id(): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor)=> {
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
    Reflect.defineMetadata(TPA_TABLE_ID, columnSettings, target, propertyKey);
  }
}