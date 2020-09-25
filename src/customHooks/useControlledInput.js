import {useState} from 'react'
// handle any onChange input that need to be controlled

export default (initValue)=>{
    const[ value, setValue ] =  useState(initValue);
    return{
        value: value,
        onChange: (e)=>{
            setValue(e.target.value);
        }
    }
}