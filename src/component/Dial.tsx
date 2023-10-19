import { createContext } from "react";
type Type1 = {
    fn: (a: void) => void;
}
// const DialContext = createContext<Type1>();

const Dialog = ({children}: { children: React.ReactNode }) => {
    const DialContext = createContext<Type1>(void:con);
    const test=()=>{
        alert('test');
    }
    return (
        <DialContext.Provider value={{test}}>
            {children}
        </DialContext.Provider>
    )
}