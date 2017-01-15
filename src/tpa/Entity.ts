export const TPA_TABLE = Symbol("tpa:table")

export function Entity(config: Object = {}) {
  return (constructor: Function)=> {
    let tableName = config['name'] || constructor['name'];
    Reflect.defineMetadata(TPA_TABLE, tableName, constructor);
  }
}