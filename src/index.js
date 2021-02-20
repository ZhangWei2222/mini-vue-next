import { reactive, effect, computed, ref } from "./reactivity";

import { h, mount } from "./compiler";

// const MyComponent = {
//   render() {},
// };
// const vdom = h(
//   "div",
//   {
//     class: "red",
//   },
//   [h("p", null, "hello"), h("p", null, null), h(MyComponent)]
// );

// console.log(vdom);

const MyComponent = {
  render() {
    return h("div", null, "stateful component");
  },
};

function MyFunctionalComponent() {
  return h("div", null, "function component");
}

const vdom = h(
  "div",
  {
    class: "red",
  },
  [
    h("p", null, "text children"),
    h("p", null, null),
    h(MyComponent),
    h(MyFunctionalComponent),
  ]
);

console.log(vdom);
mount(vdom, document.querySelector("#app"));
