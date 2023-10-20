import {useContext} from 'react';
import { DialContext } from './Dialog';
type Type1 = {
    fn: () => void;
}
function Test(){
    const test = useContext(DialContext);
    
    if(test){
        return(
            <div>
                <h1>TEST</h1>
                <button onClick={test.fn}>test</button>
            </div>
        )
    }else{
        return(
            <></>
        )
    }
}

export default Test;