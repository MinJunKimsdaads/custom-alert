import { useState,createContext } from "react";
{}

interface Defaults{
    type:string|null; //alert or confirm or prompt
    title:string|null;
    des:string|null;
    btn1:string|null;
    btn2:string|null;
    style:object|null;
}

export const DialContext = createContext<Defaults | null>(null);


const Dialog = ({children}: { children: React.ReactNode }) => {
    const initial:Defaults={
        type:'', //alert or confirm or prompt
        title:'',
        des:'',
        btn1:'',
        btn2:'',
        style:{
        }
    }

    const [defaults, setDefaults] = useState<Defaults>(initial);

    return (
        <DialContext.Provider value={defaults}>
            {children}
            
            {defaults.type == 'alert' ? <div>alert</div> : null}
            {defaults.type == 'confirm' ? <div>confirm</div> : null}
            {defaults.type == 'prompt' ? <div>prompt</div> : null}
        </DialContext.Provider>
    )
}

export default Dialog;