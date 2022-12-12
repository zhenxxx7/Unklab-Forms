import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';


export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="text-center md:text-left mt-20 mx-auto:text-justify px-8 text-4xl font-bold text-primary tx">
                <h1>WELCOME BACK USER!</h1>
            </div>
            <div>              
                <form className="mx-auto mt-8 px-4">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm border-2 border-stone-600 rounded-2xl" placeholder="Token" required></input>
                        <button type="submit" class="text-black absolute right-2.5 bottom-2.5 ">
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

            <div class="md:flex md:flex-col md:items-end mt-6 ml-3 max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-200 dark:border-gray-300">
                <h3 className="text-center text-gray-500 py-48">No public Forms At The Moment</h3>
            </div>
        </div>
    )
}