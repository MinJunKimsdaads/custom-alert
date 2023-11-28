import {DialogContext} from "./Dialog";
import {useContext} from "react";

function Test(){
    const dialog = useContext(DialogContext);

    const object ={
        title: "testTitle",
        des: "testDes",
        styles: {
            dialogShadow:'',
            dialogColor:'',
            dialogWhith:'',
            dialogHeight:'',
            dialogRadius:'',
            dialogTitleFont:'',
            dialogTitleColor:'',
            dialogDesFont:'',
        },
        btn :{
            
        }
    }
    
    return(
        <div>
            <h1>TEST</h1>
            <span onClick={()=>{dialog.createDialogOption(object)}}>alert btn</span>
        </div>
    )
}

export default Test;