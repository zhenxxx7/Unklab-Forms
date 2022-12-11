import React from "react";
import { useNavigate } from "react-router-dom";

export default function CheckingF() {
    const navigate = useNavigate();

    return (
        <div>
            <div>
            <button type="button" class="mt-2 text-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2  dark:text-stone-800 dark:focus:ring-orange-400" onClick={() => navigate ("/home")}>
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Icon description</span>
            </button>
            </div>
            <div class="mt-6 ml-3 max-w-sm p-10 bg-slate-50">
                <h3 className="text-center text-gray-500 py-80">You Haven’t Create Any Forms Yet</h3>
            </div>
        </div>
    );
}