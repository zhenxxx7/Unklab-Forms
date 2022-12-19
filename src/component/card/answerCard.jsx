import React from "react";

export default function AnswerCard({props}) {

const [option, /*setOption*/] = React.useState([
        {
            id: 1,
            value: "A",
            text: "Jawaban A",
            isCorrect: false,
        },
        {
            id: 2,
            value: "B",
            text: "Jawaban B",
            isCorrect: false,
        },
        {
            id: 3,
            value: "C",
            text: "Jawaban C",
            isCorrect: false,
            img: "https://picsum.photos/200/300",
        },

    ]);

    

    return (
        <div className="">
            <div class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <p className="block w-full font-medium text-lg text-black focus:outline-none">
                    untuk pertanyaan 1
                </p>
                <hr className="mt-3 h-0 rounded bg-black " />

                <div id="previewImage" className="relative mt-4 flex flex-col items-center ">
                    <img src="https://picsum.photos/200/300" alt="preview" className="w-64 h-64 rounded-lg" />

                    
                </div>
                
                {option.map((item) => (
                    <div className="flex flex-row items-center justify-start mt-4">
                        <div className="flex flex-col items-center justify-center">
                            <input type="radio" id={item.value} name="option" value={item.value} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="block w-full font-medium text-lg text-black focus:outline-none">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
    