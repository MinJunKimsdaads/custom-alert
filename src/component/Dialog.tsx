import { useState, useContext, createContext} from "react";
import any from "react/jsx-runtime";

interface State {
    dialogOption:DefaultState;
    createDialogOption:any;
}

interface DialogBtn {
    btn1:{name:string, action:()=>any}|null,

    // btn1:{name:string|null};
    // btn2:{name:string|null};
}

interface Test {
    btn1:{name:string}|null
    
}



interface DefaultState {
    title:string|null;
    des:string|null;
    styles:DialogStyles;
    btn:DialogBtn;
}

interface DialogStyles {
    dialogShadow:string|null,
    dialogColor:string|null,
    dialogWhith:string|null,
    dialogHeight:string|null,
    dialogRadius:string|null,
    dialogTitleFont:string|null,
    dialogTitleColor:string|null,
    dialogDesFont:string|null,
}

export const DialogContext = createContext<State>({
    dialogOption: any,
    createDialogOption: any,
});

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
    const fn = () =>{
        console.log('fn');
    }
    const defaults = {
        title:'',
        des:'',
        styles:{
            dialogShadow:'',
            dialogColor:'',
            dialogWhith:'',
            dialogHeight:'',
            dialogRadius:'',
            dialogTitleFont:'',
            dialogTitleColor:'',
            dialogDesFont:'',
        },
        btn:{
            btn1:{
                name:'321',
                action:function(){
                    console.log('fn1');
                }
                
            },
           
        }
    }

    const [dialogOption, setDialogOption] = useState<DefaultState>(defaults);

    const createDialogOption = (defaults:DefaultState) => {
        setDialogOption(defaults);
        console.log('함수 실행');
    }
    
    return (
        <DialogContext.Provider value={{dialogOption, createDialogOption}}>
            {children}
        </DialogContext.Provider>
    );
}

export function Dialog(){
    const dialog = useContext(DialogContext);
    const value = dialog.dialogOption;
    const style = {
        dialogWrap:{
            position: 'fixed' as 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '99999999',
            fontFamily: 'inherit',
            overflow: 'hidden',
            perspective: '400px',
            backgroundColor: value.styles ? value.styles.dialogShadow ? value.styles.dialogShadow : 'rgba(68,68,68,0.3)':'rgba(68,68,68,0.3)', //state dialogShadow
        },
        dialogBox:{
            position:'relative' as 'relative',
            backgroundColor: value.styles ? value.styles.dialogColor ? value.styles.dialogColor : 'white':'white', //state dialogColor
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            top: '50%',
            left: '50%',
            transform:'translate(-50%, -50%)',
            width: value.styles ? value.styles.dialogWhith ? value.styles.dialogWhith : '400px':'400px', //state dialogWhith
            height: value.styles ? value.styles.dialogHeight ? value.styles.dialogHeight : '200px':'200px',//state dialogHeight
            borderRadius: value.styles ? value.styles.dialogRadius ? value.styles.dialogRadius : '5px':'5px', //state dialogRadius
            padding:'15px',
        },
        dialogTitleBox:{
            width:'100%',
            fontSize: value.styles ? value.styles.dialogTitleFont ? value.styles.dialogTitleFont : '22px':'22px', //state dialogTitleFont
            color: value.styles ? value.styles.dialogTitleColor ? value.styles.dialogTitleColor : 'black':'black', //state dialogTitleColor
            fontWeight:'bold',
        },
        dialogDesBox:{
            marginTop:'15px',
            fontSize: value.styles ? value.styles.dialogDesFont ? value.styles.dialogDesFont : '18px':'18px', //state dialogDesFont
        },
        dialogBtnBox:{
            
        }
    }

    const btn1 = value.btn ? value.btn.btn1 ? value.btn.btn1 : {name:'ok',action:function(){console.log('none')}} : {name:'ok',action:function(){console.log('none')}};

    console.log(btn1);

    if(value.title || value.des){
        return (
            <div style={style.dialogWrap}>
               <div style={style.dialogBox}>
                    <div style={style.dialogTitleBox}>{value.title}dsadsadasd    asdasdddddddddddddd ddddddad</div>
                    <div style={style.dialogDesBox}>{value.des}</div>
                    <div>
                        <span>{btn1.name}</span>
                    </div>
               </div>
            </div>
        )
    }else{
        return null;
    }
}

