import React from "react";
// import { useNavigate } from "react-router-dom";

export default function FinishPage() {
    // const navigate = useNavigate();
    function getRandomString(length) {
        let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' /*'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'*/;
        let result = '';
        for ( let i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

  return (
    <div>
        <div className="flex flex-col items-center justify-center h-[87vh]">
            <h1 id="" className="py-[20%] flex flex-col items-center justify-center text-center text-4xl font-bold font-inte text-[#434343]">YOUR FORM HAS SUCCESFULLY BEEN MADE</h1>
            <p id="token" className="flex flex-col items-center justify-center text-center text-4xl font-bold font-inte text-[#434343]">{getRandomString(8)}</p>

            <div id="copybtn" className="">
                <button
                    className="mb-10 mt-5 bg-stone-200 hover:bg-stone-400 font-inte text-xl text-black font-medium py-2 px-4 rounded"
                    onClick={() => navigator.clipboard.writeText(getRandomString(8))}
                >
                    Copy
                </button>

            </div>
            {/* <button id="homebtn"
                className=" text-black font-normal font-inte py-2 px-4 "
                onClick={() => navigate("/home")}
                >
                tap here to return to home page
            </button> */}
            <a href="/home" className=" text-black font-normal font-inte py-2 px-4 ">tap here to return to home page</a>
        </div>
    </div>
  );
}