
export const ShapeFlags = {
  // html 或 svg 标签
  ELEMENT: 1,
  // 函数式组件
  FUNCTIONAL_COMPONENT: 1 << 1,
  // 普通有状态组件
  STATEFUL_COMPONENT: 1 << 2,
  // 子节点是纯文本
  TEXT_CHILDREN: 1 << 3,
  // 子节点是数组
  ARRAY_CHILDREN: 1 << 4,
  // 子节点是 slots
  SLOTS_CHILDREN: 1 << 5,
  // Portal
  PORTAL: 1 << 6,
  // Suspense
  SUSPENSE: 1 << 7,
  // 需要被keepAlive的有状态组件
  COMPONENT_SHOULD_KEEP_ALIVE: 1 << 8,
  // 已经被keepAlive的有状态组件
  COMPONENT_KEPT_ALIVE: 1 << 9,
  // 有状态组件和函数式组件都是“组件”，用 COMPONENT 表示
  // COMPONENT: ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}

ShapeFlags.COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT

