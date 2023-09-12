// import React, { useState } from "react";
// import { schema } from "@/constants/Register";
// import DropDownList from "../Shared/DropDownList/DropDownList";
// import AdapterDayjs from "@mui/x-date-pickers/AdapterDayjs";
// import LocalizationProvider from "@mui/x-date-pickers/LocalizationProvider";
// import DatePicker from "@mui/x-date-pickers/DatePicker";
// import { countries } from "@/constants/countries";
// import { useRouter } from "next/router";
// import { MdOutlineModeEdit } from "react-icons/md";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
// } from "@mui/material";

// const BasicInfoForm = (props) => {
//   const [errors, setErrors] = useState({});
//   const router = useRouter();
//   const [open, setOpen] = React.useState(false);
//   const [formData, setFormData] = useState({
//     dob: props.profileInfo.dob,
//     country: props.profileInfo.country,
//     city: props.profileInfo.city,
//     gender: props.profileInfo.gender,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleDateChange = (e) => {
//     const selectedDate = new Date(e.$y, e.$M, e.$D);
//     const isoDate = selectedDate.toISOString();
//     setFormData({
//       ...formData,
//       dob: isoDate,
//     });
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
//         router.push("/creator/profile");
//         if (
//           (formData.city &&
//             formData.country &&
//             formData.dob &&
//             formData.gender) !== ""
//         ) {
//           setOpen(false);
//         }
//       }
//     } catch (error) {
//       // Handle validation errors or network errors here
//     }
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <div>
//         <button onClick={handleClickOpen}>
//           {""}
//           <MdOutlineModeEdit className=" text-4xl text-blue-600 hover:bg-blue-50 rounded-full   duration-200" />
//         </button>
//         <Dialog open={open} onClose={handleClose}>
//           <DialogTitle>Basic Info</DialogTitle>
//           <DialogContent className=" sm:w-[570px] md:w-[600px]">
//             <form onSubmit={handleSubmit} className="w-[95%] mx-auto mt-5">
//               <div className="grid grid-cols-2 gap-1 mt-5 w-full">
//                 <div className="col-span-2">
//                   <DropDownList
//                     options={["male", "female"]}
//                     name="gender"
//                     label="Gender"
//                     value={formData.gender}
//                     onChange={handleInputChange}
//                   />
//                   <p className="text-sm  text-red-500  p-2 inline-block ">
//                     {errors.gender}
//                   </p>
//                 </div>
//                 <div className="col-span-2">
//                   <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DatePicker
//                       label="Date Of Birth"
//                       className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg mb-6"
//                       onChange={handleDateChange}
//                     />
//                   </LocalizationProvider>
//                 </div>
//                 <div className="col-span-2">
//                   <DropDownList
//                     options={countries}
//                     name="country"
//                     label="Country"
//                     value={formData.country}
//                     onChange={handleInputChange}
//                   />
//                   <p className="text-sm  text-red-500  p-2 inline-block ">
//                     {errors.country}
//                   </p>
//                 </div>
//                 <div className="col-span-2">
//                   <DropDownList
//                     options={["Jalālābād جلال آباد", "Gaza"]}
//                     name="city"
//                     label="City"
//                     value={formData.city}
//                     onChange={handleInputChange}
//                   />
//                   <p className="text-sm  text-red-500  p-2 inline-block ">
//                     {errors.city}
//                   </p>
//                 </div>
//               </div>
//             </form>
//           </DialogContent>
//           <DialogActions>
//             <button
//               onClick={handleClose}
//               className="text-lg font-semibold text-red-500 border-2 border-red-500 w-20 h-10 rounded-lg duration-200 hover:bg-red-50"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="text-lg font-semibold text-white border-2 bg-blue-500 border-blue-500 w-16 h-10 rounded-lg duration-200 hover:bg-blue-700"
//             >
//               Save
//             </button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </>
//   );
// };

// export default BasicInfoForm;
