import React,{useState} from 'react'



export default function TextForm(props) {
  const[text,setText]=useState("enter the text");
 
  const handleUpClick= ()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleOnChange= (event)=>{
    setText(event.target.value)
  }
  
  return (
    <div>
      <h2>{props.heading}</h2>
     <div className="mb-3">
  <textarea className="form-control" id="Box" value={text}  onChange={handleOnChange} rows="3"></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={handleUpClick}>convert to upper case</button>
    </div>
  )
}
