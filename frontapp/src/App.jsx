import "./App.css";
import Root from "./components/Root";
import { store } from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Root />
      </Provider>
    </div>
  );
}

export default App;
