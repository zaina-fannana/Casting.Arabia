// import ImgCrop from "antd-img-crop";
// import React, { useState } from "react";
// import { Upload } from "antd";

// const ProfileImage = (props) => {
//   const [fileList, setFileList] = useState([
//     {
//       uid: "-1",
//       name: "image.png",
//       status: "done",
//       url: props.profileImage,
//     },
//   ]);

//   const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//     console.log(newFileList);

//     (async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const url =
//           "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/upload/get-upload-url";

//         const requestBody = JSON.stringify({ fileName: fileList[0].url });

//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: requestBody,
//         });

//         if (!response.ok) {
//           throw new Error(`Request failed with status: ${response.status}`);
//         }

//         const responseData = await response.json();
//         console.log(responseData);
//       } catch (error) {
//         console.error("An error occurred:", error);
//       }
//     })();
//   };

//   const onPreview = async (file) => {
//     let src = file.url;
//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow?.document.write(image.outerHTML);
//   };

//   return (
//     <ImgCrop rotationSlider>
//       <Upload
//         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//         listType="picture-card"
//         fileList={fileList}
//         onChange={onChange}
//         onPreview={onPreview}
//       >
//         {fileList.length < 1 && "+ Upload Photo"}
//       </Upload>
//     </ImgCrop>
//   );
// };

// export default ProfileImage;
