import React from "react";

export default function Home() {
    return (
        <div>
            <div className="text-center md: mt-20 mx-auto:text-justify px-8 text-4xl font-semibold">
                <h1>WELCOME BACK USER!</h1>
            </div>
            <div>              
                <form className="mx-auto mt-8 px-4">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm border-2 border-stone-600 rounded-2xl" placeholder="Token" required></input>
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600">Search</button>
                    </div>
                </form>
            </div>

            <div className="flex flex-col items-center justify-center">
                <button className="mt-5 -mb-2 mr-48  bg-orange-400 hover:bg-orange-600 text-white font-bold py-8 px-4 rounded-md">
                    See Form Responds
                </button>

                <button className="-mt-20 ml-48 bg-orange-400 hover:bg-orange-600 text-white font-bold py-8 px-6 rounded-md">
                    Create New Form
                </button>
            </div>

            <div class="mt-6 ml-3 max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-200 dark:border-gray-300">
                <h3 className="text-center text-gray-500 py-48">No public Forms At The Moment</h3>
            </div>
        </div>
    )
}