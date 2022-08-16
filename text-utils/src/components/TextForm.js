import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here");

  const handleUpClick = ()=>{
    const newText = text.toUpperCase();
    setText(newText);
    text.length=== 0? props.showAlert("Please write something","warning"):props.showAlert("Converted to Uppercase","success");
}

const handleLoClick = ()=>{ 
    const newText = text.toLowerCase();
    setText(newText);
    text.length=== 0? props.showAlert("Please write something","warning"):props.showAlert("Converted to Lowercase","success");

}

const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    text.length=== 0? props.showAlert("Please write something","warning"):props.showAlert("Capitalized text","success");

}
  
const handleClearClick = ()=>{
    const newText = '';
    setText(newText);
    text.length=== 0? props.showAlert("Please write something","warning"):props.showAlert("Text cleared","success");



  }

  
  const handleOnChange = (event)=>{
    setText(event.target.value);      
    //   console.log(text);
  }

  const countWords = (text)=>{
        text = text.split(' ');
        text = text.filter(word => word !== '').length;
        return text;    
  }
  const noOfWords = countWords(text);

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea  className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="Textarea" rows="8" value = {text} onChange = {handleOnChange} required ></textarea>
            </div>
            <button  className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Uppercase</button>
            <button  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>

        <p>You have {noOfWords} words and {text.length} characters.</p>
        <p> {text.length=== 0? 0: 0.008 * noOfWords} minutes read. </p>
        <h2>Preview</h2>
        <p>{text.length === 0? "Enter the text above to Preview": text}</p>


    </div>
    </>
  )
}
