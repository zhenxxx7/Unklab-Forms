import React from "react";

export default function AnswerCard({question, options}) {

    return (
        <div className="">
            <div class=" max-w-lg w-screen p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <p className="block w-full font-medium text-lg text-black focus:outline-none">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus quaerat sint temporibus repudiandae, vero consequatur dolorem excepturi dolorum eveniet fugiat, consectetur, porro corporis placeat. Provident consectetur molestias nostrum praesentium.
                </p>
                <hr className="mt-3 h-0 rounded bg-black " />

                <div id="previewImage" className="relative mt-4 flex flex-col items-center ">
                    <img src="https://picsum.photos/200/300" alt="preview" className="w-72 h-48 rounded-lg" />
                </div>
                
                {options.map((option) => (
                    <div className="flex flex-row items-center justify-start mt-4">
                        <div className="flex flex-col items-center justify-center">
                            <input type="radio" id={option.value} name="option" value={option.value} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="block w-full font-medium text-lg text-black focus:outline-none">
                                {option.text}
                            </p>
                        </div>
                        {/* if option.img = null then not showing */}
                        <div className="relative flex flex-col items-center">
                        {option.img && (
                            <img src={option.img} alt="preview" className="w-40 h-28 rounded-lg" />
                        )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
    