   import { useState } from 'react';
import Navbar from "./Navbar";
import { UserContext } from "./UserContext";
import { LoginContext } from './LoginContext';
import { ThemeProvider } from './ThemeContext';
import Countdisplay from './Countdisplay';
import { useReducer } from 'react';
import { countcontext } from './countcontext';
import Inputx from './Inputx';

function App() {
    const [lastname, setlastname] = useState("Dhiman");
    const username = "Akhil";
    const [password, setPassword] = useState("0011222");
    const [email, setEmail] = useState("DhimanAkhil1298@gmail.com");

    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return state + 1;

            case "decrement":
                return state - 1;

            case "doublevalue":
                return state * 2;

            case "plus5":
                return state + 5;

            default:
                return state;
        }
    }


function formreducer(state, action) {
    switch (action.type) {
        case "changeemail":
            return {
                ...state,
                email: action.value
            };
        case "changepassword":
            return {
                ...state,
                password: action.value
            };

        case "changename":
            return {
                ...state,
                name: action.value
            };

        case "changeage":
            return {
                ...state,
                age: action.value
            };

        default:
            return state;
    }
}

    const [count, dispatch] = useReducer(reducer, 0);

    const [formdata, setformdata] = useState({
        email: "",
        password: "",
        name: "",
        age: ""
    });

    const [error, setError] = useState({});

    function handleemail(e) {
        const name = e.target.name;
        const value = e.target.value;

        setformdata({
            ...formdata,
            [name]: value
        });
    }

    function validation() {
        const newerror = {};

        if (!formdata.email.trim()) {
            newerror.email = "Email is required";
        }

        if (!formdata.password.trim()) {
            newerror.password = "Password is required";
        }
        else if (formdata.password.length < 8) {
            newerror.password = "Password must have at least 8 characters";
        }

        setError(newerror);

        return Object.keys(newerror).length === 0;
    }

    function handlesubmit(e) {
        e.preventDefault();

        if (validation()) {
            console.log(formdata.email);
            console.log(formdata.password);
            console.log(formdata.name);
            console.log(formdata.age);
        }
    }

    return (
        <>
            <ThemeProvider>
                <countcontext.Provider value={[count, dispatch]}>
                    <LoginContext.Provider value={[email, password]}>
                        <UserContext.Provider value={[username, lastname]}>

                            <h1>App component</h1>

                            <h2>{count}</h2>

                            <button onClick={() => dispatch({ type: "increment" })}>
                                increase
                            </button>

                            <button onClick={() => dispatch({ type: "decrement" })}>
                                decrease
                            </button>

                            <Navbar />

                            <form onSubmit={handlesubmit}>

                                <Inputx
                                    lable="Email"
                                    typex="email"
                                    namex="email"
                                    placeholderx="Enter Your Email"
                                    valuex={formdata.email}
                                    onChangex={handleemail}
                                    errorx={error.email}
                                />

                                <Inputx
                                    lable="Password"
                                    typex="password"
                                    namex="password"
                                    placeholderx="Enter Your Password"
                                    valuex={formdata.password}
                                    onChangex={handleemail}
                                    errorx={error.password}
                                />

                                <Inputx
                                    lable="Name"
                                    typex="text"
                                    namex="name"
                                    placeholderx="Enter Your Name"
                                    valuex={formdata.name}
                                    onChangex={handleemail}
                                />

                                <Inputx
                                    lable="Age"
                                    typex="number"
                                    namex="age"
                                    placeholderx="Enter Your Age"
                                    valuex={formdata.age}
                                    onChangex={handleemail}
                                    minx={0}
                                    maxx={50}
                                />

                                <button type="submit">Submit it</button>

                            </form>

                            <Countdisplay />

                        </UserContext.Provider>
                    </LoginContext.Provider>
                </countcontext.Provider>
            </ThemeProvider>
        </>
    );
}

export default App;
