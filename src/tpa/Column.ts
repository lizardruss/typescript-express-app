import 'reflect-metadata';

export const TPA_TABLE_COLUMN = Symbol("tpa:table:column")

interface ColumnSettings {
  columnDefinition?: string;
  insertable?: boolean;
  length?: number;
  name?: string;
  nullable?: boolean;
  precision?: number;
  scale?: number;
  type?: any;
  unique?: boolean;
  updatable?: boolean;
}

export function Column(settings : ColumnSettings = {}): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor)=> {
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
    Reflect.defineMetadata(TPA_TABLE_COLUMN, columnSettings, target, propertyKey);
  }
}