import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './home.css';


export default function Home() {
const navigate = useNavigate();

const [user , /*setUser*/] = React.useState({
        name: "JOHN DOE",
    });

    const [token, setToken] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (token === "") {
            alert("Token cannot be empty");
        } else {
        }
        console.log(token);
    }
    

    const [form, setForm] = React.useState([]);
    

    React.useEffect(() => {
        setForm([
            {
                id: 1,
                expired: "2021-10-10",
                title: "Form 1",
                description: "lorem ipsum dolor sit amet and so on and so forth etc etc etc",
            },
            {
                id: 2,
                expired: "2021-10-10",
                title: "Form 2",
                description: "lorem ipsum dolor sit amet and so on and so forth etc etc etc",
            },
            {
                id: 3,
                expired: "2021-10-10",
                title: "Form 3",
                description: "lorem ipsum dolor sit amet and so on and so forth etc etc etc",
            },
            {
                id: 4,
                expired: "2021-10-10",
                title: "Form 4",
                description: "lorem ipsum dolor sit amet and so on and so forth etc etc etc",
            },
            {
                id: 5,
                expired: "2021-10-10",
                title: "Form 5",
                description: "lorem ipsum dolor sit amet and so on and so forth etc etc etc",
            },

        ]);
    }, []);

    return (
        <div className="font-inte">
        <div className="container text-center md:text-left mt-20 px-8 text-4xl font-bold text-[#2F76FF] tx">  
                <h1>WELCOME BACK <span className="font-inte text-transparent bg-clip-text bg-gradient-to-bl from-green-700 via-green-400 to-blue-500">{user.name}!</span></h1>
            </div>
            <div>              
                <form className="mx-auto mt-8 px-4">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <input type="text" id="default-search" class="block w-full p-4 pl-10 text-sm border-2 focus:outline-none border-stone-600 rounded-2xl" placeholder="Token" required value={token} onChange={(e) => setToken(e.target.value)}></input>
                        <button type="submit" class="text-black absolute right-2.5 bottom-2.5 "
                        onClick={handleSubmit}
                        >
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex flex-col items-center justify-center">
                <button className="mt-5 -mb-2 mr-48  bg-stone-300 hover:bg-orange-600 text-black font-bold py-8 px-4 rounded-md" onClick={() => navigate ("/checkingForm")}>
                    See Form Responds
                </button>

                <button className="-mt-20 ml-48 bg-stone-300 hover:bg-orange-600 text-black font-bold py-8 px-10 rounded-md" onClick={() => navigate ("/createForm")}>
                    <span className="tx">Create Form</span>
                </button>
            </div>  
                <div className="mx-2 grid grid-cols-2 gap-4 mt-10 mb-10 p-3 overflow-y-auto h-[33rem] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-200 dark:border-gray-300">
                        {/* map form list */}
                        {form.map((item) => (
                            <Link to="/answerForm" className="" onClick={() => navigate ("/answerForm", {state: item})}>
                            <div className="bg-white rounded-lg shadow-lg p-4">
                            <div className="flex justify-end items-end mb-4">
                                <span className="flex justify-end items-end"></span>
                                <span className="md:px-2 md:py-1 text-blue-800 font-bold rounded ">
                                {item.expired}</span>
                            </div>
                            <p className="font-bold text-gray-800">{item.title}</p>
                            <p className="mt-2 text-gray-600">{item.description.substring(0, 30)}...</p>
                            </div>
                            </Link>
                        ))}
                    {form.length === 0 && (
                        <div className="  bg-white rounded-lg shadow-lg p-4 flex justify-center items-center">
                            <h3 className="text-center text-gray-500 px-28 py-48">No public Forms At The Moment</h3>
                        </div>
                    )}
                </div>
        </div>
    )
}