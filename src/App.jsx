import { useState } from "react";

const App = () => {
    const [users, setusers] = useState([]);

    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("male");
    const [city, setCity] = useState("mumbai");
    const [desc, setDesc] = useState("");
    const [accept, setAccept] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault();

        const newuser = { username, gender, city, desc };

        const copyuser = [...users];
        copyuser.push(newuser);
        setusers(copyuser);

        // setusers([...users, newuser])

        setUsername("");
        setCity("mumbai");
        setGender("male");
        setDesc("");
        setAccept(false);
    };

    let listrender =
        users.length > 0 ? (
            users.map((user, index) => {
                return (
                    <div key={index}>
                        <h1>{user.username}</h1>
                        {user.city}
                    </div>
                );
            })
        ) : (
            <h1>no data present</h1>
        );

    return (
        <div>
            <h1>Two Way Binding</h1>
            <form onSubmit={SubmitHandler}>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    placeholder="username"
                />
                <br /> <br />
                <input
                    onChange={(e) => setGender(e.target.value)}
                    value="male"
                    checked={gender === "male" ? true : false}
                    type="radio"
                    name="gender"
                />
                Male
                <input
                    onChange={(e) => setGender(e.target.value)}
                    value="female"
                    checked={gender === "female" ? true : false}
                    type="radio"
                    name="gender"
                />
                Female
                <br /> <br />
                <select
                    defaultValue={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="delhi">Delhi</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="kolkata">Kolkata</option>
                </select>
                <br /> <br />
                <textarea
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    placeholder="enter text here"
                ></textarea>
                <br /> <br />
                <input
                    // value="Option 1"
                    checked={accept ? true : false}
                    onChange={(e) => setAccept(e.target.checked)}
                    type="checkbox"
                />
                Accept
                <br />
                <br />
                <button>Submit</button>
            </form>
            <hr />
            {listrender}
        </div>
    );
};

export default App;