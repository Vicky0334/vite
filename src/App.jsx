import { useState } from "react"


const App=()=>{
  // const [age, setAge] = useState(12);
  // const Agechange=()=>{
  //   setAge(13);
  //   console.log(age);}
  const [username, setUsername] = useState(""); 
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const[accept, setAccept] = useState("");
  const SubmiteHandler=(e)=>{
      e.preventDefult();
      console.log({username});
    }

return(
<div>
  {/* <h1>{Age}</h1>
  <button onClick={Agechange}>change Age</button> */}

  <h1>TWO WAY BINDINNG</h1>
  <form >
    <input type="text"  onChange={(e)=>
     setUsername(e.target.value)
    } 
    value={username}
     placeholder="username" id="name" />
     <br />
      <input type="radio"
      onChange={(e)=>setGender(e.target.value)} 
      checked={gender=="male"?true:false } 
      name="gender" 
      value="male"/>
      male
    <input type="radio"
    onChange={(e)=>setGender(e.target.value)} 
      checked={gender=="female"?true:false } 
       name="gender"
       value="female" />
     female
  <br />
  <select defaultValue={city}
  onChange={(e)=>setGender(e.target.value)}>
    <option value="delhi">delhi</option>
    <option value="kolkata">kolkata</option>
    <option value="mumbai">mumbai</option>
    <option value="pune">pune</option>
  </select>
  <br /> <br />
   <input type="checkbox"
  //  value={ option1}
  checked={accept}
   onChange={(e)=>setAccept(e.target.checked)} 
 />  Accept
 <br /> <br />
  <input type="submit" value="submit" />
  </form>
</div>
)}
export default App