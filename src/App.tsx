import { createContext, useState} from "react";
import {Dialog, DialogProvider}  from "./component/Dialog";
import Test from "./component/Test";

function App() {
  return (
    <DialogProvider>
      <div className="App">
          <Test></Test>
          <Dialog></Dialog>
      </div>
    </DialogProvider>
  );
}

export default App;
