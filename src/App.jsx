import React from 'react';

import { useState } from "react";
import css from "./App.module.css";
const App = () => {
    const [users, setusers] = useState([]);

    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("male");
    const [city, setCity] = useState("mumbai");
    const [desc, setDesc] = useState("");
    const [accept, setAccept] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault();
        const newuser = { username, gender, city, desc,accept};
        const copyuser = [...users];
        copyuser.push(newuser);
        setusers(copyuser);
       // setusers([...users, newuser])
        // setUsername("");
        setCity("mumbai");
        setGender("male");
        setDesc("");
        setAccept(false);
    };
    // const x={fontSize:"70px",color:"tomato"}
     let listrender =users.length > 0 ?(users.map((user, index) => {
                return (
                    <div key={index}>
                        <h1>{user.username}</h1>
                        <p>{user.gender}</p>
                        <h2>{user.city}</h2>
                        <h2>{user.desc}</h2>
                    </div>
                );})) : 
             (
            <h1 className="">no data present</h1>
            );

    // const y={ width:"600px",backgroundColor:"salmon"}
    return (
        <div>
            <h1 className={css.heading}>Two Way Binding</h1>
            <form onSubmit={SubmitHandler}>
               <input onChange={(e) =>setUsername(e.target.value)}value={username}
                    type="text"
                    placeholder="username"
                />
                <br /> <br />
                <input onChange={(e) => setGender(e.target.value)}
                   checked={gender === "male" ? true : false}
                   value="male"
                    type="radio"
                    name="gender"/>Male
                <input onChange={(e) => setGender(e.target.value)}
                    checked={gender === "female" ? true : false}
                    value="female"
                    type="radio"
                    name="gender"/>Female
                <br /> <br />
                <select defaultValue={city}
                onChange={(e) => setCity(e.target.value)}>
                    <option value="delhi">Delhi</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="kolkata">Kolkata</option>
                </select>
                <br /> <br />
                <textarea onChange={(e) => setDesc(e.target.value)}
                   value={desc}
                    placeholder="enter text here"
                ></textarea>
                <br /> <br />
                <input checked={accept ? true : false}
                    onChange={(e) => setAccept(e.target.checked)}
                    type="checkbox"
                /> Accept
                <br /><br />
                <button>Submit</button>
            </form>
            <hr />
            {listrender}
        </div>
    );
};

export default App;