import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({length = 4 , OtpSubmit=()=>{}}) => {

    const [otp , setOtp] = useState(new Array(length).fill(""));

    const inputRefs = useRef([]);
    console.log(otp);


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
    }
    const handleClick = ()=>{}
    const handleKeyDown = ()=>{}

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