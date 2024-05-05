import { useState } from "react"


const App=()=>{
  const [username, setUsername] = useState(""); 
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [description,setText]=useState("");
  const [checkedBox,setCheckBox]=useState("");
  const[accept, setAccept] = useState("");


  const SubmiteHandler=(e)=>{e.preventDefult();
    console.log(username)
    console.log(gender)
    console.log(city)
    console.log(description)
    console.log(checkedBox)
    }

return(
<div>
  <h1>TWO WAY BINDINNG</h1>
  <form onSubmit={SubmiteHandler} >
   <input type="text"onChange={(e)=>{setUsername(e.target.value)}}
    value={username} placeholder="username" id="username" />
     <br /> <br />
       <input type="radio"onChange={(e)=>setGender(e.target.value)}checked={gender=="male"?true:false } 
       name="gender"value="male"/>male
       <input type="radio"onChange={(e)=>setGender(e.target.value)}checked={gender=="female"?true:false } 
       name="gender"value="female" />female
  <br /> <br />
     <select defaultValue={city}onChange={(e)=>setCity(e.target.value)}>
     <option value="delhi">delhi</option>
    <option value="kolkata">kolkata</option>
    <option value="mumbai">mumbai</option>
    <option value="pune">pune</option>
    </select>
   <br /> <br />
     <textarea placeholder="Enter text here" onChange={(e)=>setText(e.target.value)} value={description} ></textarea>
   <br /> <br />
     <input type="checkbox" onChange={(e)=>{setCheckBox(e.target.checked)}} value={checkedBox} checked={checkedBox?true:false}  />Select All
   <br /> <br />
    <input type="submit" value="submit" />
  </form>
</div>
)}
export default App