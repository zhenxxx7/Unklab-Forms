import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputCard from "../../component/card/inputCard";
import Modal from "../../component/modal/modal";

export default function CreateForm() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);
    const [cards, setCards] = useState([{cards: ""}]);
    console.log(cards);
    const addCard = () => {
        setCards([...cards, {cards: ""}]);
    };

    const handleOnChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...cards];
        list[index][name] = value;
        setCards(list);
    };


    const handleRemoveClick = (index) => {
        const list = [...cards];
        list.splice(index, 1);
        setCards(list);
    };


    if(showModal) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }
    
    return (
        <div className=" bg-[#94BBFF]">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-2xl -mt-3  ">
                    <div className="md:flex md:flex-col md:items-start md:justify-center">
                        <button type="button" class="mt-4 ml-2 text-stone-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2  dark:text-stone-800 " onClick={() => navigate ("/home")}>
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </button>
                    </div>
                        
                    <div className="max-md:mt-6 md:flex md:flex-col md:items-start  md:justify-center">
                        <div className="md: mx-auto:text-justify px-8 text-4xl font-medium">
                            <input type="text" id="small-input" class="bg-transparent block w-full p-2 focus:outline-none  text-black  placeholder:text-black" placeholder="Untitled Form"></input>
                        </div>
                        <div className="md: mx-auto:text-justify px-8 mb-10">
                            <input type="text" id="small-input" class="bg-transparent block w-full p-2 focus:outline-none text-black " placeholder="add a description"></input>
                        </div>
                    </div>
                </div>
                <div className=" relative flex flex-col items-center justify-center ">
                    {/* <div className="m-3 md:mb-1">
                        <InputCard />
                    </div> */}

                    <div className="" id="cards">
                        {cards.map((card, index) =>
                                <div >
                                    <div id="cards" className="m-3 md:mb-1"
                                    
                                    onChange={e => handleOnChange(e, index)}                                    
                                    >
                                        {cards.length >  1 && 
                                            <button id="remove" className="relative float-right right-4 top-3"
                                            onClick={() => handleRemoveClick(index)}
                                                >
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                        }
                                        <InputCard value={card.cards} key={index} />
                                    </div>
                                </div>
                        )}
                    </div>
                </div>
                

            <div class="mt-3 flex flex-col items-center justify-center">
                <div class=" max-w-lg w-screen py-10 md:px-[12.5rem] px-44 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-md">
                    <button id="add"
                    onClick={addCard}
                    >
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </button>
                </div>
            </div>
            
        </div>
            <div className="md:flex md:flex-col md:items-center md:justify-center pt-[1vh] ">
                <button type="button" class=" max-md:hidden text-dark bg-white hover:bg-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:hover:bg-stone-300 " onClick={() => setShowModal(true)}>
                    Done
                </button>
            </div>


            <button type="button" class="md:hidden flex float-right sticky bottom-8 right-3 md:right-96 text-black bg-stone-100 hover:bg-stone-200 drop-shadow-md  font-medium rounded-full text-sm p-2.5 text-center items-center mr-2 " onClick={() => setShowModal(true)}>
                <svg aria-hidden="true" class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            
            <Modal onClose={handleOnClose} visible={showModal} />
            </div>
    );
}