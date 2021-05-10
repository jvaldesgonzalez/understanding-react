import { init, propsModule } from "snabbdom";

const diff = init([propsModule]);

let rootVNode;

const render = (el, rootElement) => {
  rootVNode = rootVNode || rootElement;
  diff(rootVNode, el);
};

const JexDom = {
  render,
};

export default JexDom;
