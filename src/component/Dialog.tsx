import { useState, useContext, createContext } from "react";

const DialogContext = createContext(null);

export const useDialog = ({children}) => {
    
    const defaults = useContext(DialogContext);
    return (
        <DialogContext.Provider value={{'test'}}>
            {children}
        </DialogContext>
    );
}

export function Dialog(props:any){
    return (
        <div>
           <div>
                <div>title</div>
                <div>des</div>
                <div>
                    <span>btn</span>
                </div>
           </div>
        </div>
    )
}