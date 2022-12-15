import React from "react";
import { useNavigate } from "react-router-dom";
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
            // show form by token
        }
        console.log(token);
    }
    

    const [form, setForm] = React.useState([]);
    

    // set form data
    React.useEffect(() => {
        setForm([
            {
                id: 1,
                title: "Form 1",
                token: "1da2ad",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 2,
                title: "Form 2",
                token: "1da23d",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 3,
                title: "Form 3",
                token: "ahsdbas",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 4,
                title: "Form 4",
                token: "bhsdbas",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                id: 5,
                title: "Form 5",
                token : "123456",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },

        ]);
    }, []);

    return (
        <div className="font-inte">
            <div className="container text-center md:text-left mt-20 px-8 text-4xl font-bold text-primary tx">  
                <h1>WELCOME BACK <span className="font-inte text-transparent bg-clip-text bg-gradient-to-bl from-green-700 via-green-400 to-blue-500">{user.name}</span></h1>
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

            {/* create grid form list */}
            

                <div className="mx-10 grid grid-cols-2 gap-4 mt-20 mb-10 p-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-200 dark:border-gray-300">
                    {form.map((item) => (
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-gray-800">{item.title}</span>
                                <span className="md:px-2 md:py-1 bg-green-600 text-white font-bold rounded">{item.token}</span>
                            </div>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-stone-300 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-md" onClick={() => navigate ("/answerForm", {state: item})}>
                                    <span className="tx">View Form</span>
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* if null set not form to display */}
                    {form.length === 0 && (
                        <div className="  bg-white rounded-lg shadow-lg p-4 flex justify-center items-center">
                            <h3 className="text-center text-gray-500 px-28 py-48">No public Forms At The Moment</h3>
                        </div>
                    )}

                    {/* search by token */}
                    {/* {form.filter((item) => {
                        if (token === "") {
                            return item
                        } else if (item.token.toLowerCase().includes(token.toLowerCase())) {
                            return item
                        }
                    }).map((item) => (
                        <div className="hidden bg-white rounded-lg shadow-lg p-4">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-gray-800">{item.title}</span>
                                <span className="px-2 py-1 bg-green-600 text-white font-bold rounded">{item.token}</span>
                            </div>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-stone-300 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-md"
                                // navigate to answer form by token
                                onClick={() => navigate ("/answerForm", {state: token})}
                                >
                                    <span className="tx">View Form</span>
                                </button>
                            </div>
                        </div>
                    ))} */}
                </div>
        </div>
    )
}