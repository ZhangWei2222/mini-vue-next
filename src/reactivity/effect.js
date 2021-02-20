const targetMap = new WeakMap();
let activeEffect = null
export function effect(eff) {
  activeEffect = eff
  activeEffect()
  activeEffect = null
}

export function track(target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      targetMap.set(target, depsMap = new Map())
    }

    let dep = depsMap.get(key)
    if (!dep) {
      depsMap.set(key, dep = new Set());
    }
    dep.add(activeEffect)
  }
}

export function trigger(target, key) {
  let depsMap = targetMap.get(target)
  if (depsMap) {
    let dep = depsMap.get(key)
    console.log(dep)
    if (dep) {
      dep.forEach(effect => effect())
    }
  }
}