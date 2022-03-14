import "./components/Assets/Styles/global.css";
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./utils/redux/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
