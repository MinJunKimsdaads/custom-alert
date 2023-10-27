import { useState, useContext, createContext } from "react";

interface State {
    type:string|null;
    title:string|null;
    des:string|null;
    styles:object|null;
}

const DialogContext = createContext<State | null>(null);

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
    const defaults = {
        type:'',
        title:'',
        des:'',
        styles:{
            background:'black',
            DialogBackground:'',
            btn1:{
                fontSize:'',
                borderRadius:'',
                background:'',
            }
        }
    }
    const [dialogOption, setDialogOption] = useState<State>(defaults) 
    return (
        <DialogContext.Provider value={dialogOption}>
            {children}
        </DialogContext.Provider>
    );
}

export function Dialog(){
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

