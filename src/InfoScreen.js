import React,{useState, useEffect} from 'react'
import useWindowDimensions from './useWindowDimensions'

const InfoScreen = ()=>{
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
          Hello world
      </div>
    )
}

export default InfoScreen