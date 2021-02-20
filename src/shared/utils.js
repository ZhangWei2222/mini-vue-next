export const isArray = Array.isArray;

export const isString = (val) => typeof val === "string";
export const isSymbol = (val) => typeof val === "symbol";

export const isObject = (val) => typeof val === "object" && val !== null;

export function isFunction(val) {
  return typeof val === "function";
}

export const hasOwn = (target, key) =>
  Object.prototype.hasOwnProperty.call(target, key);

export const hasChanged = (newVal, oldVal) => newVal !== oldVal;

export const isOn = (key) => key[0] === "o" && key[1] === "n";
