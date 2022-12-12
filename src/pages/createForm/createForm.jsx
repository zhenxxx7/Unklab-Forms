import React from "react";
import { useNavigate } from "react-router-dom";
import InputCard from "../../component/card/inputCard";

export default function CreateForm() {
    const navigate = useNavigate();
    return (
        <div className="bg-stone-200">
            <div className="bg-white rounded-2xl -mt-3 ">
                <div className="md:flex md:flex-col md:items-center md:justify-center">
                    <button type="button" class="mt-4 ml-2 text-stone-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2  dark:text-stone-800 dark:focus:ring-orange-400" onClick={() => navigate ("/home")}>
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Icon description</span>
                    </button>
                </div>
                    
                <div className="max-md:mt-6 md:flex md:flex-col md:items-center md:justify-center">
                    <div className="md: mx-auto:text-justify px-8 text-4xl font-medium">
                        <input type="text" id="small-input" class="block w-full p-2 text-black placeholder:text-black" placeholder="Untitled Form"></input>
                    </div>
                    <div className="mx-auto:text-justify px-8">
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 " placeholder="add a description"></textarea>
                    </div>
                </div>
            </div>

            <div className="md:flex md:flex-col md:items-center md:justify-center ">
                <div className="m-3 md:mb-1">
                    <InputCard />
                </div>
                <div className="m-3 md:mb-1">
                    <InputCard />
                </div>
                <div className="m-3 md:mb-1">
                    <InputCard />
                </div>
            </div>
            
            
            {/* call card with button */}

            <button type="button" class="flex float-right sticky bottom-8 right-3 text-black bg-stone-100 hover:bg-stone-200 drop-shadow-md  font-medium rounded-full text-sm p-2.5 text-center items-center mr-2 ">
                <svg aria-hidden="true" class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            
        </div>
    );
}