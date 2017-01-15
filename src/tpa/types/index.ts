import {VARCHAR} from './VARCHAR';
import {BOOLEAN} from './BOOLEAN';

export let Types = {
  VARCHAR: VARCHAR,
  BOOLEAN: BOOLEAN
};

let TypeMap = new Map();
TypeMap.set(String, Types.VARCHAR);