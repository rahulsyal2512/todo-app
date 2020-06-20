import React from "react";
import WrapperComponent from "./modules/components/WrapperComponent";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules/reducers/rootReducer";

const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem("todo", JSON.stringify(store.getState().todos));
});

const App = () => {
  return (
    <Provider store={store}>
      <WrapperComponent />
    </Provider>
  );
};

export default App;
