import React,{useState} from 'react'
   
export default function Uppercaasee(props) {
  const handeler=()=>{
    // console.log("you clicked button"+text);
    let upper=text.toUpperCase();
    setText(upper)
  }
  const handelerlo=()=>{
    console.log("you clicked button"+text);
    let upper=text.toLowerCase();
    setText(upper)
  }
  const onchangeclick=(event)=>{
    console.log("clicked onchange button");
    setText(event.target.value)
  }
  const chandelerlo=(event)=>{
    console.log(" ");
    setText(event.target.value)
  }
  const aFunction=()=>{
    setText("Sunday to chuti hendal mara chara ki r kono kaj nei gudmarani")

  }
  const bFunction=()=>{
    setText("ajk mohadeber jonmo din ajk gar na mariye baba k dak khanki chele")

  }
  const cFunction=()=>{
    setText("ajk parle ram nam job korbo khali")

  }
  const dFunction=()=>{
    setText("aj budbar aj mane gudbar")

  }
  const eFunction=()=>{
    setText("ki vebechis gudmarani ajk kono kharap kichu ache nki na ajk  ma lokhi bar")

  }
  const fFunction=()=>{
    setText("tue bara randy giri ta bondho kor")

  }
  const gFunction=()=>{
    setText("ajk hedl mara khub eche hoche")

  }

  const ExtraSpeaces=()=>{
    let texts=text.split(/[ ]+/);
    setText(texts.join(" "))
  }
  const copyFunction=()=>{
    let textss=document.getElementById('mybox');
    textss.select();
    navigator.clipboard.writeText(textss.value);
  }
  const [text,setText ] = useState('');
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h1>{props.headding}</h1>
  <div>
{/* <textarea classNameName="form-control" id="mybox" rows="10" value={text} onChange={onchangeclick} ></textarea> */}
<textarea className="form-control mx-3" id="mybox" rows="10" value={text} onChange={onchangeclick} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
</div>
<div className=" mb-1 my-3" >
   <button disabled={text.length===0}className="btn btn-primary mx-3 my-3" onClick={handeler} >Convert Uppercase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handelerlo} >Convert Lowercase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={chandelerlo} >Clear All</button>
   <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={ExtraSpeaces} >Delete ExtraSpeaces</button>
   <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={copyFunction} >Copy Text </button>
   
   </div>



    
          <div  className="btn-toolbar my-4 mx-3" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mx-4" role="group" aria-label="First group ">
          <button  type="button" onClick={aFunction} className="btn btn-primary">Sunday</button>
          <button  type="button"onClick={bFunction} className="btn btn-primary">Monday</button>
          <button  type="button" onClick={cFunction}className="btn btn-primary">Tuesday</button>
          <button  type="button" onClick={dFunction} className="btn btn-primary">Wednesday</button>
        <button  type="button"onClick={eFunction} className="btn btn-primary">Thursday</button>
          <button  type="button"onClick={fFunction} className="btn btn-primary">Friday</button>
          <button  type="button"onClick={gFunction} className="btn btn-primary">Saturday</button>
          
    

  
  <div>
    
  </div>
</div>
</div>


   </div>
  <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>your Total Word Is {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
      <p>Your Total Charecter Is {text.length}</p>
      <p>You read Total {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minites</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Your Textbox Is Empty Please Enter Your Text"}</p>
  </div>
  
  </>

  )
}


