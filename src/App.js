import React, { useReducer } from "react";
import "./Styles.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleMovie";
// import HooksTrail from "./Components/Hooks/HooksTrail";
// import HookCounterTwo from "./Components/Hooks/HookCounterTwo";
// import DataFetching from "./Components/Hooks/DataFetching";

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment1":
//       return state + 1;
//     case "decrement1":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>
          Count - {count}
          <HooksTrail />
          <hr />
          <HookCounterTwo />
        </div>
      </CountContext.Provider> */}

      {/* <UserContext.Provider value={"Mert"}>
          <ChannelContext.Provider value={"Codevolution"}>
            <DataFetching />
          </ChannelContext.Provider>
        </UserContext.Provider> */}

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug/:num" component={SingleMovie} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
