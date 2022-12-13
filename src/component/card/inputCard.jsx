import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function InputCard(){
    // const [pitcure, setPicture] = useState(null);
    // const img = useRef(null);
    const [Option, setOption] = useState([{Option: ""}]);
    const addOption = () => {
        setOption([...Option, {Option: ""}]);
    };

    const [image, setImage] = useState([]);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (!preview) {
            setImage([]);
            return;
        }

        const objectUrl = URL.createObjectURL(preview);
        setImage((image) => [...image, objectUrl]);

        return () => URL.revokeObjectURL(objectUrl);
    }, [preview]);

    const handleFileChange = (e) => {
        const fileUploaded = e.target.files[0];
        setPreview(fileUploaded);
    };

    return(
        <div className="">
            <div class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <input type="text" id="small-input" class="block w-full font-medium text-lg text-black  placeholder:text-black" placeholder="Untitled Question"></input>
                <hr className="mt-3 h-0 rounded bg-black " />

                <span className="text-red-600 hidden">This field needs to be filled</span>
                {/* <input type="file" class="mt-4 block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-stone-200 file:text-black
                    hover:file:bg-violet-100
                "/> */}

                <div class="mt-4">
                    {/* <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Add image</label> */}
                    <div class="mt-2 flex items-center">
                        <input type="file" class="mt-4 block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-stone-200 file:text-black
                    hover:file:bg-violet-100" onChange={handleFileChange} />
                    </div>
                </div>

                <div id="previewImage" className="mt-4 flex flex-col items-center">
                    {image.map((img, index) => (
                        <img key={index} src = {img} alt="preview" />
                    ))}
                </div>

                {/* if no image then remove button not showing */}
                {preview && (
                    <div class="flex items
                    center mt-6">
                        <button class="flex w-full px-4 py-2 text-sm font-normal text-stone-400"
                            onClick={() => setPreview(null)}>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                )}

                
                <div class="flex items-center mt-6 mb-4">
                    <input id="radio" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</label>
                </div>
                <div class="flex items-center mt-6 mb-4">
                    <input checked id="radio-2" type="radio" value="" name="-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</label>
                </div>
                <div class="flex items-center mt-6 mb-4">
                    <input checked id="radio-2" type="radio" value="" name="-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</label>
                </div>
                <div class="">
                    {Option.map((opti, index) => {
                        return(
                            <div key={index} class="flex items-center mt-6 mb-4">
                                <input id="radio" type="radio" value="" name="-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</label>
                            </div>
                        )
                    })}
                </div>
                <div class="flex items center mt-6">
                    <button class="flex w-full px-4 py-2 text-sm font-normal text-stone-400"
                        onClick={addOption}
                    >
                        <span>add option</span>
                    </button>
                </div>

            </div> 
        </div>
    )
}