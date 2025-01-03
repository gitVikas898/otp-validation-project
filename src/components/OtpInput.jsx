import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({length = 4 , OtpSubmit=()=>{}}) => {

    const [otp , setOtp] = useState(new Array(length).fill(""));

    const inputRefs = useRef([]);
 


    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[])

    const handleChange = (index,e)=>{
        const value = e.target.value;
        if(isNaN(value))return;

        const newOtp = [...otp];

        newOtp[index] = value.substring(value.length-1);
        setOtp(newOtp);

        const combinedOtp = newOtp.join("");
        if(combinedOtp.length === length) OtpSubmit(combinedOtp);

        //move the cursor to next input when current field is filled automatically


    if(value && index<length-1 && inputRefs.current[index+1]){
        inputRefs.current[index + 1].focus();
    }

    }
    const handleClick = (index)=>{
        inputRefs.current[index].setSelectionRange(1,1);

        if(index>0 && !otp[index-1]){
            inputRefs.current[otp.indexOf("")].focus();
        }
    }
    const handleKeyDown = (index,e)=>{
        if(e.key === "Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]){
            inputRefs.current[index - 1].focus();
        }
    }

  return (
    <div className='otp-cmp'>
        {
            otp.map((value,index)=>{
                return (
                <input key={index}
                    ref={(input)=>(inputRefs.current[index]=input)}
                    type='text'
                    value={value}
                    onChange={(e)=>handleChange(index,e)}
                    onClick={()=>handleClick(index)}
                    onKeyDown={(e)=>handleKeyDown(index,e)}
                    className='otp'
                    >
                </input>
                )
            })
        }
    </div>
  )
}

export default OtpInput