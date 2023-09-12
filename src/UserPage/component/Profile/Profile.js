// import React from "react";
// import Container from "../Container/Container";
// import ProfileImage from "../ProfileImage/ProfileImage";
// import UserInfoForm from "../UserInfoForm/UserInfoForm";
// import TitleAndSubTitle from "../TitleAndSubTitle/TitleAndSubTitle";
// import BasicInfoForm from "../BasicInfoForm/BasicInfoForm";

// const Profile = (props) => {
//   return (
//     <Container>
//       <div className="flex md:flex-row flex-col my-14 gap-x-20 lg:gap-x-36">
//         <div className="mb-1">
//           <ProfileImage profileImage={props.profileInfo.pendingAvatar} />
//         </div>

//         <div>
//           <div className="flex items-center gap-5 mb-10">
//             <p className="text-3xl font-semibold">{props.profileInfo.name}</p>
//             <UserInfoForm profileInfo={props.profileInfo} show={true} />
//           </div>

//           <div className="grid grid-cols-3 gap-10">
//             <TitleAndSubTitle
//               title="First Name"
//               subTitle={props.profileInfo.firstName}
//               className=""
//               classNameOfTitle="text-xl text-blue-600 !w-full"
//               classNameOfSubTitle="text-xl !w-full"
//             />
//             <TitleAndSubTitle
//               title="Last Name"
//               subTitle={props.profileInfo.lastName}
//               className="border-l-2 border-blue-200 pl-2"
//               classNameOfTitle="text-xl text-blue-600"
//               classNameOfSubTitle="text-xl"
//             />
//             <TitleAndSubTitle
//               title="Company Name"
//               className="border-l-2 border-blue-200 pl-2"
//               subTitle={props.profileInfo.companyName}
//               classNameOfTitle="text-xl text-blue-600"
//               classNameOfSubTitle="text-xl"
//             />
//             <TitleAndSubTitle
//               title="Phone"
//               subTitle={props.profileInfo.phoneNumber}
//               className="col-span-3"
//               classNameOfTitle="text-xl text-blue-600"
//               classNameOfSubTitle="text-xl"
//             />
//             <TitleAndSubTitle
//               title="Email"
//               className="col-span-3"
//               subTitle={props.profileInfo.email}
//               classNameOfTitle="text-xl text-blue-600"
//               classNameOfSubTitle="text-xl"
//             />
//           </div>

//           <div className="flex items-center gap-5 my-10">
//             <p className="text-3xl font-semibold"> Basic Info</p>
//             <BasicInfoForm profileInfo={props.profileInfo} />
//           </div>

//           <div className="grid grid-cols-3 gap-10">
//             <TitleAndSubTitle
//               title="Location"
//               subTitle={props.profileInfo.city}
//               classNameOfTitle="text-xl text-blue-600"
//               classNameOfSubTitle="text-xl"
//             />
//             <TitleAndSubTitle
//               title="Age"
//               subTitle={`${
//                 2023 -
//                 Number(
//                   props.profileInfo.dob.split("T").shift().split("-").shift()
//                 )
//               } years`}
//               className="border-l-2 border-blue-200 pl-2"
//               classNameOfTitle="text-xl text-blue-600"
//               classNameOfSubTitle="text-xl"
//             />
//             <TitleAndSubTitle
//               title="Gender"
//               subTitle={props.profileInfo.gender}
//               className="border-l-2 border-blue-200 pl-2"
//               classNameOfTitle="text-xl text-blue-600"
//               classNameOfSubTitle="text-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Profile;

import React from "react";

function Profile() {
  const userProfileData = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userProfileData.name}</p>
      <p>Email: {userProfileData.email}</p>
      {/* Add more profile information as needed */}
    </div>
  );
}

export default Profile;
