import React, {useState} from 'react'

export default function Textbox(props) {
  const clickUpCase = ()=>{
    const upperCase = text.toUpperCase();
    setText(upperCase)
  }
  const clickLowCase = ()=>{
    const lowerCase = text.toLowerCase();
    setText(lowerCase)
  }
  const Clear = () =>{
    setText("")
  }
  const revers = () =>{
    const word=text.split(" ").reverse().join(" ");
    setText(word);
  }
  // const camelCase = () =>{
  //   var sen='';
  //   var hook = ''
  //   var i;
  //   for(i=0; i<= text.length;i++){
  //     if (text[i]==='.'){
  //       sen+=hook+text[i];
  //       sen+=' '+ text[i+1].toUpperCase();
  //     }
  //     else{
  //       hook = hook+text[i];
  //     }
  //   }
  //   sen=hook+'.';
  //   setText(sen)
  // }
  const changeText = (event)=>{
   setText( event.target.value)
  }

  const [text, setText]= useState("");
  return (
    <div>
      <div className="container"  >
        <div className="mybox mt-5 ">
          <h2>{props.heading}</h2>
          <textarea 
            style = {{border:"2px solid black",backgroundColor:`${props.textArea}`,color:`${props.textArea==="white"?"black":"white"}`}}
            className="form-control"
            value={text}
            onChange={changeText}
            id="mybox"
            rows="8"
          ></textarea>
          <button type="button" onClick={clickUpCase} className="btn btn-danger my-2 mx-1">Uppercase</button>
          <button type="button" onClick={clickLowCase} className="btn btn-danger my-2 mx-1">Lowercase</button>
          <button type="button" onClick={Clear} className="btn btn-danger my-2 mx-1">Clear Box</button>
          <button type="button" onClick={revers} className="btn btn-danger my-2 mx-1">Revers words</button>
          {/* <button type="button" onClick={camelCase} className="btn btn-danger my-2 mx-1">camelcase</button> */}
        </div>
        <div className='featuresText'>
        <p>Number of letter : {text.length}</p>
        <p>Words Count : {text=== ""?0:text.split(" ").length}</p>
        </div>
      </div>
    </div>
  ); 
}