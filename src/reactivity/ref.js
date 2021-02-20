import { isObject, hasChanged } from "../shared/utils.js";
import { reactive } from './reactive.js'
import { track, trigger } from './effect.js'
import { TriggerOpTypes, TrackOpTypes } from './operation.js'

export function ref(value) {
  return createRef(value)
}

function convert(rawValue) {
  return isObject(rawValue) ? reactive(rawValue) : rawValue
}

function createRef(rawValue) {
  let value = convert(rawValue)
  
  let r = {
    __v_isRef: true, // 标识是ref类型
    get value() {
      // 取值依赖收集
      track(r, TrackOpTypes.GET, 'value')
  console.log('convert', value);

      return value
    },
    set value(newVal) {
      // 设置时触发更新
      if (hasChanged(newVal, rawValue)) {
        rawValue = newVal
        value = newVal
        trigger(r, TriggerOpTypes.SET, 'value')
      }
    },
  }
  return r
}