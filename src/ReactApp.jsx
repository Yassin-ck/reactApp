import { useState } from "react"

 function MyApp () {


  const [curr,change] = useState("");
  const [alpha,count] = useState(0);
  const [word,tote] = useState(0);
  const [isDarkMode,setIsDarkMode] = useState(false);

 


  function trans (ele) {
     const x = ele.target.value
     change(x)
     count(x.length)
     count(x.split(" ").join("").length)
     tote(x.trim().split(/\s+/).length)

  }

  const upper = () => {
      change(curr.toUpperCase())
  }
  const lower = () => {                          
      change(curr.toLowerCase())
  }

  function toggleDarkMode(){
    setIsDarkMode(!isDarkMode);
}


const backgroundColor = isDarkMode ?'#222':'#fff';
const color = isDarkMode?'#fff':'#222';


  return (
    <div style={{backgroundColor,color}} id="shoib">
<input type="text" id="area" onChange={trans} value={curr}  /><br/>
<div id="flex">
<button onClick={upper}>To<br></br>Uppercase</button>
<button onClick={lower}>To<br></br>Lowercase</button>
</div>
<p>Total letters {alpha}</p>
<p>Total Words {word}</p>

   <button onClick={toggleDarkMode}>
    {isDarkMode? 'Light mode':'Dark mode'}</button>
    </div>
  )
}

export default MyApp