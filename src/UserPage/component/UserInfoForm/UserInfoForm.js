// import React, { useState } from "react";
// // import TextField from "@mui/material/TextField";
// // import { schema } from "@/constants/Register";
// // import { useRouter } from "next/router";
// import { MdOutlineModeEdit } from "react-icons/md";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
// } from "@mui/material";

// const UserInfoForm = (props) => {
//   const [errors, setErrors] = useState({});
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     firstName: props.profileInfo.firstName,
//     lastName: props.profileInfo.lastName,
//     companyName: props.profileInfo.companyName,
//     email: props.profileInfo.email,
//     phoneNumber: props.profileInfo.phoneNumber,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     const token = localStorage.getItem("token");

//     event.preventDefault();

//     try {
//       await schema.validate(formData, { abortEarly: false });
//       const res = await fetch(
//         "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/me",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       const profileInfo = await res.json();
//       if (profileInfo) {
//         setError(profileInfo.code);
//         router.push("/creator/profile");
//       }
//     } catch (error) {
//       // Handle validation errors or network errors here
//     }
//   };

//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={handleClickOpen}>
//         {""}
//         <MdOutlineModeEdit className=" text-4xl text-blue-600 hover:bg-blue-50 rounded-full   duration-200" />
//       </button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Account Info</DialogTitle>
//         <DialogContent className=" sm:w-[570px] md:w-[600px]">
//           <form onSubmit={handleSubmit} className="w-[95%] mx-auto mt-5">
//             <div>
//               <TextField
//                 value={formData.firstName}
//                 name="firstName"
//                 label="First Name"
//                 title="First Name"
//                 onChange={handleInputChange}
//                 className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
//               />
//               <p className="text-sm  text-red-500  p-2 inline-block ">
//                 {errors.firstName && errors.firstName}
//               </p>
//             </div>
//             <div className="">
//               <TextField
//                 value={formData.lastName}
//                 name="lastName"
//                 label="Last Name"
//                 title="Last Name"
//                 onChange={handleInputChange}
//                 className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
//               />
//               <p className="text-sm  text-red-500  p-2 inline-block ">
//                 {errors.lastName}
//               </p>
//             </div>

//             <div className="col-span-2">
//               <TextField
//                 value={formData.companyName}
//                 name="companyName"
//                 label="Company Name"
//                 title="Company Name"
//                 onChange={handleInputChange}
//                 className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
//               />
//               <p className="text-sm  text-red-500  p-2 inline-block ">
//                 {errors.companyName}
//               </p>
//             </div>

//             <div className="col-span-2">
//               <TextField
//                 value={formData.email}
//                 name="email"
//                 label="Email"
//                 title="Email"
//                 onChange={handleInputChange}
//                 className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
//               />
//               <p className="text-sm  text-red-500  p-2 inline-block ">
//                 {errors.email}
//               </p>
//             </div>

//             <div className="col-span-2">
//               <TextField
//                 value={formData.phoneNumber}
//                 name="phoneNumber"
//                 label="Phone Number"
//                 title="Phone Number"
//                 onChange={handleInputChange}
//                 className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg "
//               />
//               <p className="text-sm  text-red-500  p-2 inline-block ">
//                 {errors.phoneNumber}
//               </p>
//             </div>
//             {error ? (
//               <p className="text-lg  text-red-500  p-2 inline-block lowercase">
//                 {error}
//               </p>
//             ) : (
//               ""
//             )}
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <button
//             onClick={handleClose}
//             className="text-lg font-semibold text-red-500 border-2 border-red-500 w-20 h-10 rounded-lg duration-200 hover:bg-red-50"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="text-lg font-semibold text-white border-2 bg-blue-500 border-blue-500 w-16 h-10 rounded-lg duration-200 hover:bg-blue-700"
//           >
//             Save
//           </button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default UserInfoForm;
