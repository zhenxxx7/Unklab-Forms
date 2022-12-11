import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="text-center md: mt-20 mx-auto:text-justify px-8 text-4xl font-semibold">
                <h1>WELCOME TO UNKLAB FORMS</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src=".\assets\login-img1.png" className="" alt="illustration" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded-md" onClick={() => navigate ("/home")}>
                    Login Here 
                </button>
                <h3 className="text-center md: mt-2 mx-auto:text-justify px-8 text-1xl font-medium">
                    Login with your Unklab account
                </h3>
            </div>
        </div>
    );
}
