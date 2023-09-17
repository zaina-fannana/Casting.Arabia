// import React, { useState } from "react";
// import "./App.css";
// import HomePage from "./pages/HomePage/HomePage";
// import UserPage from "./UserPage/userPage";
// import "./axiosConfig";

// function App() {
//   return (
//     <div className="App" style={{ background: "#f5f5f5" }}>
//       {/* <HomePage /> */}
//       <UserPage/>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";
import UserPage from "./UserPage/userPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = (e) => {
    e.preventDefault();
    console.log(email, password);
    const userData = {
      email,
      password,
    };
    localStorage.setItem("token-info", JSON.stringify(userData));
    setIsLoggedin(true);
    setEmail("");
    setPassword("");
  };

  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
  };

  return (
    <>
      <div className="App" style={{ background: "#f5f5f5" }}>
        {" "}
        {!isLoggedin ? (
          <>
            <form action="">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
              <button type="submit" onClick={login}>
                GO
              </button>
            </form>
            <HomePage />
          </>
        ) : (
          <>
            <button onClickCapture={logout}>logout user</button>
            <UserPage />
          </>
        )}
      </div>
    </>
  );
}

export default App;
