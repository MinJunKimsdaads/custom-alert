import {DialogContext} from "./Dialog";
import {useContext} from "react";

function Test(){
    const dialog = useContext(DialogContext);

    // const testFn = () => {
    //     console.log('test');
    // }

    const object ={
        title: "testTitle",
        des: "testDes",
        // styles: {
        //     dialogShadow:'',
        //     dialogColor:'',
        //     dialogWhith:'',
        //     dialogHeight:'',
        //     dialogRadius:'',
        //     dialogTitleFont:'',
        //     dialogTitleColor:'',
        //     dialogDesFont:'',
        // },
        // btn:{
        //     btn1:{
        //         name:'테스트',
        //         action:testFn
        //     },
        //     btn2:{
        //         name:'테스트2',
        //         action:testFn
        //     },
        // }
    }
    
    return(
        <div>
            <h1>TEST</h1>
            <span onClick={()=>{dialog.createDialogOption(object)}}>alert btn</span>
        </div>
    )
}

export default Test;