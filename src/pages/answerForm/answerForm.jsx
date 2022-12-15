// import React from "react";
// import { Link } from "react-router-dom";

// export default function AnswerForm() {
//     const [form, setForm] = React.useState([]);

//     React.useEffect(() => {
//         setForm([
//             {
//                 id: 1,
//                 title: "Form 1",
//                 token: "1da2ad",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nunc aliquam massa, sit amet aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl nunc aliquam massa, sit amet aliquam nisl nunc vel mauris.",
//             },
//             {
//                 id: 2,
//                 title: "Form 2",
//                 token: "1da23d",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nunc aliquam massa, sit amet aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl nunc aliquam massa, sit amet aliquam nisl nunc vel mauris.",
//             },

//         ]);
//     }, []);
    
//     return (
//         <div className="flex flex-col items-center justify-center">
//             {form.map((item) => (
//             <div className="">
//                 <div class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//                     <h1>
//                       ({item.id}) {item.title})  
//                     </h1>
//                 </div>

//                 <div class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//                     <p>
//                         {item.description}
//         </div>
//     );
// }