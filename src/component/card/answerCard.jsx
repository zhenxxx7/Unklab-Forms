import React from "react";

export default function AnswerCard({question, options}) {

    return (
        <div className="">
            <div class=" max-w-lg w-screen p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div id="previewImage" className="relative flex flex-col items-center mb-4 ">
                    <img src="https://picsum.photos/200/300" alt="preview" className="w-96 h-52 rounded-lg" />
                </div>
                <p className="block w-full font-medium text-lg text-black focus:outline-none">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus quaerat sint temporibus repudiandae, vero consequatur dolorem excepturi dolorum eveniet fugiat, consectetur, porro corporis placeat. Provident consectetur molestias nostrum praesentium.
                </p>
                <hr className="mt-3 h-0 rounded bg-black mb-8" />

                
                {options.map((option) => (
                    <div className="flex flex-col mt-4">
                        <div className="flex flex-row items-center justify-start">
                            <input type="radio" id={option.value} name="option" value={option.value} />
                            <p className=" ml-2 block w-full font-medium text-lg text-black focus:outline-none">
                                {option.text}
                            </p>
                        </div>
                        <div className="relative flex flex-row items-center justify-center">
                        {option.img && (
                            <img src={option.img} alt="preview" className="w-64 h-44 mt-4  rounded-lg" />
                        )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
    