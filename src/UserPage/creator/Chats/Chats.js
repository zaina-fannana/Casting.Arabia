import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { Button } from "antd";
import "./chat.css";
function Chats() {
  const [status, setStatus] = useState("Connected");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStatus(value);
  };

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    // Add  messages
  ]);

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage("");
    console.log(messages);
  };

  return (
    <div style={{minHeight:"73vh"}}>
      <p className="text-4xl text-blue-600 font-semibold mt-[40px]">Messages</p>
      <div
        style={{
          background: "white",
          color: "#262e3b",
          direction: "ltr",
          padding: "16px",
          margin: "30px",
          maxWidth: "1355px",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "Segoe UI",
          borderRadius: "10px",
        }}
      >
        <div className="bg-white rounded-xl border-[1px] border-blue-400 w-full min-h-[436px] my-8 flex flex-col-reverse sm:grid sm:grid-cols-7">
          <div className=" sm:h-full sm:col-span-5 flex flex-col">
            {/* <p className="text-lg h-full flex items-center justify-center">
            Select a conversation...
          </p> */}

            <div className="sm:w-[98%] h-60 overflow-y-scroll flex flex-col items-end gap-1 py-2 border-t-[1px] border-b-[1px] border- blue-400">
              {messages.map((item, index) => (
                <div key={index}>
                  <p className="bg-blue-600 inline-block p-2 mx-2 rounded-xl text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-12 flex gap-5 !w-full items-center">
              <div className="w-full">
                <input
                  value={message}
                  onChange={handleChangeMessage}
                  type="text"
                  title="."
                  className="outline-none h-full text-xl !w-full"
                  placeholder="Message"
                />
              </div>
              <div>
                <Button
                  onClick={handleSubmitMessage}
                  className="text-3xl text-blue-600 mr-2 border-none pb-1"
                  style={{ marginTop: 10 }}
                >
                  <IoSendSharp />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
