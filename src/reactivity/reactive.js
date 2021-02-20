import { track, trigger } from "./effect.js";
const reactiveHandler = {
  get(target, key, receiver) {
    const result = Reflect.get(target, key, receiver)
    track(target, key)
    return result
  },
  set(target, key, value, receiver) {
    const oldVal = target[key]
    const result = Reflect.set(target, key, value, receiver)
    if (oldVal !== result) {
      trigger(target, key)
    }
    return result
  }
}

export function reactive(target) {
  return new Proxy(target, reactiveHandler)
}