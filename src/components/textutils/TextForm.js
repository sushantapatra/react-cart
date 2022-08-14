import React,{useState}  from 'react'
import dbounce from '../../functions/UtilityFunction.js';

const TextForm = (props) => {
    const [text, setText] =useState('')

    const handleUpClick=()=>{
        dbounce(()=>{
            setText(text.toUpperCase())
        },200)
    }
    const handleLwClick=()=>{
        dbounce(()=>{
            setText(text.toLowerCase())
        },200)
       
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text)
    }
    const handleUpClick2=()=>{
        console.log(text.toLowerCase());
    }
   
    

  return (
    <>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" rows="5" value={text} onChange={(e)=>setText(e.target.value)}> </textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLwClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy</button>
        <button className='btn btn-primary mx-1' onClick={handleUpClick2}>Convert to </button>

        <div className='card my-4'>
            <h1>Your Text Summary</h1>
            <p><strong>{text.split(" ").length}</strong> words and <b>{text.length}</b> characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
            
        </div>
    </>
  )
}

export default TextForm