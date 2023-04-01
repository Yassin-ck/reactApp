import { useState } from "react"

 function MyApp () {


  const [curr,change] = useState("");
  const [alpha,count] = useState(0);
  const [word,tote] = useState(0);


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


  return (
    <div>
<input type="text" id="area" onChange={trans} value={curr}  /><br/>
<div id="flex">
<button onClick={upper}>To Uppercase</button>
<button onClick={lower}>To Lowercase</button>

<p>Total letters {alpha}</p>
<p>Total Words {word}</p>

</div>
    </div>
  )
}

export default MyApp