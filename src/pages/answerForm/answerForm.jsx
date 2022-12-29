import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AnswerCard from "../../component/card/answerCard";

export default function AnswerForm() {
    const navigate = useNavigate();
    const [form, setForm] = React.useState([]);

    React.useEffect(() => {
        setForm([
            {
                id: 1,
                title: "Form 1",
                token: "1da2ad",
                description: "lorem ipsum dolor sit amet and so on and so forth etc etc etc",
                questions: [
                    {
                        id: 1,
                        questiontxt: "Question 1",
                        type: "radio",
                        options: [
                            {
                                id: 1,
                                option: "Option 1",
                                value: "option1",
                                optionType: "radio",
                                text: "petanyaan a",
                                img: "https://picsum.photos/200/300",
                            },
                            {
                                id: 2,
                                option: "Option 2",
                                value: "option2",
                                optionType: "radio",
                                text: "petanyaan a",
                                img: "https://picsum.photos/200/300",
                            },
                            {
                                id: 3,
                                option: "Option 3",
                                value: "option3",
                                optionType: "radio",
                                text: "petanyaan a",
                                img: "https://picsum.photos/200/300",
                            }
                        ]
                    },
                    {
                        id: 2,
                        questiontxt: "Question 2",
                        type: "radio",
                        options: [
                            {
                                id: 1,
                                option: "Option 1",
                                value: "option1",
                                optionType: "radio",
                                text: "petanyaan a",
                                img: "https://picsum.photos/200/300",
                            },
                            {
                                id: 2,
                                option: "Option 2",
                                value: "option2",
                                optionType: "radio",
                                text: "petanyaan a",
                            }
                        ]
                    }
                ]
            },

        ]);
    }, []);
    
    return (
        <div className=" bg-[#94BBFF]">
        <div className="flex flex-col items-center justify-center">
            {form.map((item) => (
            <div className="">
                <div className="max-w-lg bg-white rounded-2xl -mt-3  ">
                    <div className="md:flex md:flex-col md:items-start md:justify-center">
                        <button type="button" class="mt-4 ml-2 text-stone-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2  dark:text-stone-800 " onClick={() => navigate ("/home")}>
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </button>
                    </div>
                        
                    <div className="max-md:mt-6 md:flex md:flex-col md:items-start  md:justify-center">
                        <div className="md: mx-auto:text-justify px-8 text-4xl font-medium">
                            <h1 className="block w-full p-2 focus:outline-none  text-black">
                                {item.title}
                            </h1>
                        </div>
                        <div className="md: mx-auto:text-justify px-8 mb-10">
                            <p className="block w-full p-2 pr-10 focus:outline-none  text-black">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col items-center justify-center">
                    {item.questions.map((question) => (
                        <div className="my-3">
                            <AnswerCard 
                                questions={question.questions}
                                options={question.options}
                            />
                        </div>
                    ))}
                </div>
            </div>
            ))}
            <button
                type="button"
                className="mt-4 bg-slate-500 text-stone-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm p-2.5 text-center inline-flex mr-96  dark:text-stone-800 "
                onClick={() => navigate("/home")}
            >close</button>
        </div>
        </div>
    );
}