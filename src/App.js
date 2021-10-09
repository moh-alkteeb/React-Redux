import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "./state/index";
function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const AC = bindActionCreators(actionCreators, dispatch);
  console.log(AC);
  return (
    <div className="App">
      <p>{account}</p>
      <button onClick={() => AC.depositMony(1000)}>dispatch</button>
      <button onClick={() => AC.withdrawhMony(500)}>withdraw</button>
    </div>
  );
}

export default App;
