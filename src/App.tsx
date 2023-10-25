import { createContext, useState} from "react";
import {Dialog, useDialog}  from "./component/Dialog";
import Test from "./component/Test";

const DialogContext = createContext(null);

function App() {
 
  return (
    <DialogContext.Provider value={{'test'}}>
      <div className="App">
        <Test></Test>
        <Dialog></Dialog>
      </div>
    </DialogContext.Provider>
  );
}

export default App;
