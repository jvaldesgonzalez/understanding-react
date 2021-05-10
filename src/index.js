import Jex from "./jex";
import JexDom from "./jex-dom";

console.log("hello rollup");

const App = <h1 class="Primary">Hello</h1>;

JexDom.render(App, document.getElementById("main"));
