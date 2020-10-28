import React,{useState, useEffect} from 'react'
import useWindowDimensions from './useWindowDimensions'
const Faq = ()=>{
    const {width} = useWindowDimensions();
   
    const [contentClass, setContentClass] = useState('')
    useEffect(()=>{
        if(width > 800){
            setContentClass('content--wide')
        }else{
            setContentClass('content--narrow')
        }
    },[width])
    
    return(
      <div className={contentClass} >
          FAQ
      </div>
    )
}

export default Faq