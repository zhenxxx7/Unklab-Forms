import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useState, useRef } from "react";

export default function InputCard(){
    // const [pitcure, setPicture] = useState(null);
    // const img = useRef(null);

    return(
        <div className="">
            <div class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <input type="text" id="small-input" class="block w-full font-medium text-lg text-black  placeholder:text-black" placeholder="Untitled Question"></input>
                <hr className="mt-3 h-0 rounded bg-black " />

                <span className="text-red-600 hidden">This field needs to be filled</span>
                <input type="file" class="mt-4 block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-stone-200 file:text-black
                    hover:file:bg-violet-100
                "/>
                
                <div class="flex items-center mt-6 mb-4">
                    <input id="radio" type="radio" value="" name="-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</label>
                </div>
                <div class="flex items-center">
                    <input checked id="radio-2" type="radio" value="" name="-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 2</label>
                </div>

            {/* <input ref={img} type="file" hidden accept="image/*" onClick={(e) =>{
                let pic = URL.createObjectURL(e.target.files[0]);
                setPicture(pic);
            }}/> */}

            </div> 
        </div>
    )
}