import { createContext } from "react";
type Type1 = {
    fn: () => void;
}

export const DialContext = createContext<Type1 | null>(null);


const Dialog = ({children}: { children: React.ReactNode }) => {
    const fn=():void=>{
        alert('test');
    }
    return (
        <DialContext.Provider value={{fn}}>
            {children}
        </DialContext.Provider>
    )
}

export default Dialog;