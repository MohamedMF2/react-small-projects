import "./App.css";
import { Accordion } from "./components/accordion";
import { ColorChanger } from "./components/colorChanger/ColorChanger";
import { TreeView } from "./components/tree-view/TreeView";
import { menus } from "./components/tree-view/data";

function App() {
  return (
    <div className="w-100">
      <Accordion />
      <ColorChanger />
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
