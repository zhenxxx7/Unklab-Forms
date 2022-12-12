import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="container md:grid md:grid-rows-1 md:grid-flow-col md:gap-1">
            <div className="bg-secondary row-span-6  max-md:hidden lgo">
                <img src=".\assets\login-img2.png" className="py-32 px-32" alt="illustration" />
            </div>
            <div className="  relative top-28 left-32 ml-6  flex flex-col items-center justify-center  max-md:hidden">
                <img src=".\assets\logo.png" className="" alt="illustration" />
            </div>
            <div className="  md:mt-52 md:ml-2 md:left-28 md:-mr-48 md:text-6xl row-span-2 col-span-1 text-center max-md:mt-20  max-md:px-8 text-4xl font-bold font-inte text-primary wt">
                <h1 className="">WELCOME TO UNKLAB FORMS</h1>
            </div>
            <div className="md:hidden max-md:flex flex-col items-center justify-center">
                <img src=".\assets\login-img1.png" className="" alt="illustration" />
            </div>
            <div className=" row-span-2 col-span-1 md:ml-64 md:mb-52 flex flex-col items-center justify-center">
                <button className="bg-stone-200 md:rounded-3xl hover:bg-stone-400 text-black font-inte font-bold text-4xl leading-10  py-3 px-10 rounded-xl" onClick={() => navigate ("/home")}>
                    Login Here
                </button>
                <h3 className="md:hidden text-center max-md:flex mt-2 mx-auto:text-justify px-8 text-sm font-normal">
                    Login with your Unklab account
                </h3>
            </div>
        </div>
    );
}
