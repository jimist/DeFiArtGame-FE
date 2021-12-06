import { React } from "react";
import { createStore, action, StoreProvider, persist } from "easy-peasy";

// import components
import MainRouter from "./routes";

const store = createStore(
  persist({
    wallet: {
      account: "",
      update: action((state, payload) => {
        state.account = payload;
      }),
      clear: action((state) => {
        state.account = "";
      }),
    },
  })
);

const App = () => {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <StoreProvider store={store}>
        <MainRouter />
      </StoreProvider>
    </div>
  );
};

export default App;
