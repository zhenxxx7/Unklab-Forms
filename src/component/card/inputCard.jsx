import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function InputCard(){
    // const [pitcure, setPicture] = useState(null);
    const img = useRef(null);
    const img2 = useRef(null);
    const [Option, setOption] = useState([{Option: ""}]);
    const addOption = () => {
        setOption([...Option, {Option: ""},]);
    };

    const handleOptionChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...Option];
        list[index][name] = value;
        setOption(list);
    };

    const handleRemoveClick = (index) => {
        const list = [...Option];
        list.splice(index, 1);
        setOption(list);
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

    console.log(preview);

    const [image2, setImage2] = useState([]);
    const [preview2, setPreview2] = useState(null);

    useEffect(() => {
        if (!preview2) {
            setImage2([]);
            return;
        }

        const objectUrl = URL.createObjectURL(preview2);
        setImage2((image2) => [...image2, objectUrl]);

        return () => URL.revokeObjectURL(objectUrl);
    }, [preview2]);

    const handleFileChange2 = (e) => {
        const fileUploaded = e.target.files[0];
        setPreview2(fileUploaded);
    };

    return(
        <div className="">
            <div class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <input type="text" id="small-input" class="block w-full font-medium text-lg text-black focus:outline-none placeholder:text-black" placeholder="Untitled Question"
                value={Option.Option} onChange={e => handleOptionChange({Option: e.target.value})}
                ></input>
                <hr className="mt-3 h-0 rounded bg-black " />

                

                <span className="text-red-600 hidden">This field needs to be filled</span>
                {/* <input type="file" class="mt-4 block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-stone-200 file:text-black
                    hover:file:bg-violet-100
                "/> */}

                {!preview && (
                    
                <div class="mt-4">
                    {/* <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Add image</label> */}
                    <div class="mt-2 flex items-center">
                        <button id="addImage1"
                        className=" bg-stone-200 hover:bg-stone-400 font-inte text-sm text-black font-medium py-2 px-4 rounded"
                        onClick={() => img.current.click()}
                        >
                            Add image
                        </button>
                        <input ref={img} type="file"  /* class="mt-4 block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-stone-200 file:text-black
                    hover:file:bg-violet-100"*/ hidden onChange={handleFileChange} />
                    </div>
                </div>
                        )}

                <div id="previewImage" className="mt-4 flex flex-col items-center ">
                    {image.map((img, index) => (
                        <img key={index} src = {img} alt="preview" />
                    ))}
                    {preview && (
                        <div id="img-remove1" class="absolute flex ">
                            <button id="img-remove1" class="flex m-l[10%] w-full px-4 py-2 text-sm font-normal text-stone-400"
                                onClick={() => setPreview(null)}>
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    )}

                </div>

                {/* if no image then remove button not showing */}
                
                
                {/* <div class="flex items-center mt-6 mb-4">
                    <input id="radio" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</label>
                </div>
                <div class="flex items-center mt-6 mb-4">
                    <input checked id="radio" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</label>
                </div>
                <div class="flex items-center mt-6 mb-4">
                    <input checked id="radio" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</label>
                </div> */}
                <div class="">
                    {Option.map((opti, index) => {
                        return(
                            <div key={index} class="flex items-center mt-6 mb-4">
                                <input id="radio" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"></input>
                                <label for="radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                <input type="text" id="small-input" class="bg-transparent block focus:outline-none w-full p-2 text-black " placeholder="Option 1"></input>
                                </label>
                                {!preview2 && (
                                    <div>
                                        <button id="addImage2" className="block ml-28"
                                        onClick={() => img2.current.click()}
                                        >
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </button>
                                        <input ref={img2} type="file" hidden 
                                        onChange={handleFileChange2}
                                        />
                                    </div>
                                )}
                                {Option.length !== 1 && 
                                <button className="block ml-4"
                                onClick = {() => handleRemoveClick(index)}
                                >
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                                }

                                {preview2 && (
                                    <div class="flex items
                                    center mt-6">
                                        <button class="flex w-full px-4 py-2 text-sm font-normal text-stone-400"
                                            onClick={() => setPreview2(null)}>
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        </button>
                                    </div>
                                )}


                                <div id="previewImage2" className="mt-4 flex flex-col items-center">
                                    {image2.map((img, index) => (
                                        <img key={index} src = {img} alt="preview" />
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                    <div>
                        
                    </div>
                </div>
                {Option.length !== 10 &&
                <div class="flex items center mt-6">
                    <button class="flex w-full px-4 py-2 text-sm font-normal text-stone-400"
                        onClick={addOption}
                    >
                        <span>add option</span>
                    </button>
                </div>
                }

            </div> 
        </div>
    )
}