import React from 'react';
import Remote from "./components/Remote/Remote";
import Main from "./containers/Main";
import {Route, Switch} from "react-router-dom";
import GetMessageById from "./containers/GetMessageById";

function App() {
  return (
    <div className="App">
      <Remote/>
      <Switch>
          <Route path="/" exact  component={Main}/>
          <Route path="/messages/:id" component={GetMessageById}/>
      </Switch>
    </div>
  );
}

export default App;
