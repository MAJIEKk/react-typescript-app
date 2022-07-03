import { Description } from "@mui/icons-material";
import { useState } from "react";

interface fields {
    title: string;
    description: string;
}

export const iniErrors = {
    title: false,
    description: false,
}

export const useAddPost = (handleClose:()=>void) => {
    const[errors,SetErrors] = useState(iniErrors);

    const resetErrors = () => SetErrors(iniErrors);

    const validate = (fields:fields) =>{
        let isValid = false;
        resetErrors();

        const newErrors = {...iniErrors};

        if(fields.title.length<5){
            newErrors.title =true;
            isValid =true;
        } 
        
        if(fields.description.length<20){
            newErrors.description =true;
            isValid =true;

        }

        SetErrors(newErrors);

        return isValid;
    }

    const onSubmitAddPost = (event: any) => {
        event.preventDefault();
const user ={};
        const dataSend={
            userId:1,
            title: event.target.title.value,
            description: event.target.description.value,
        }

    if (validate(dataSend)) return;

    fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataSend),
          })
          .then(res => res.json())
          .then((data)=>{handleClose();});
    };
    return{
        onSubmitAddPost,
        errors,
    }
}
