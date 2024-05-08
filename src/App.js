import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utilis/appStore";

const App = ()=> {
  return (
    <div className="App">
     <Provider store={appStore}>
     <Body/>
     </Provider>
    </div>
  );
}

export default App;
