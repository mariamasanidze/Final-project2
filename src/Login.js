// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Dummy authentication data
//     const dummyUser = { username: 'user123', password: 'pass123' };

//     if (username === dummyUser.username && password === dummyUser.password) {
//       navigate('/home'); // Redirect to the Home page
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <div>
//         <label>Username</label>
//         <input 
//           type="text" 
//           value={username} 
//           onChange={(e) => setUsername(e.target.value)} 
//         />
//       </div>
//       <div>
//         <label>Password</label>
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//         />
//       </div>
//       <button onClick={handleLogin}>Login</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Dummy authentication data
//     const dummyUser = { username: "user123", password: "pass123" };

//     if (username === dummyUser.username && password === dummyUser.password) {
//       navigate("/home"); // Redirect to the Home page
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 flex items-center justify-center">
//       <div className="w-full max-w-sm bg-transparent p-8 rounded-lg shadow-lg">
//         <div className="flex justify-center mb-6">
//           <div className="w-16 h-16 bg-gray-800 text-white flex items-center justify-center rounded-full">
//             <span className="text-4xl font-bold">D</span>
//           </div>
//         </div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleLogin();
//           }}
//         >
//           <div className="mb-4">
//             <label
//               htmlFor="username"
//               className="block text-gray-300 font-medium mb-2"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               placeholder="Username"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-gray-300 font-medium mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               placeholder="Password"
//             />
//           </div>
//           {error && (
//             <p className="text-red-500 text-sm mb-4">{error}</p>
//           )}
//           <button
//             type="submit"
//             className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
//           >
//             Log In
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <a href="#" className="text-pink-400 hover:underline text-sm">
//             Forgot your password?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import dummyUsers from "./dummyData"; // Import the dummy users

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Check if the entered credentials match any user in dummyUsers
//     const user = dummyUsers.find(
//       (user) => user.username === username && user.password === password
//     );

//     if (user) {
//       navigate("/home"); // Redirect to the Home page if valid
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 flex items-center justify-center">
//       <div className="w-full max-w-sm bg-transparent p-8 rounded-lg shadow-lg">
//         <div className="flex justify-center mb-6">
//           <div className="w-16 h-16 bg-gray-800 text-white flex items-center justify-center rounded-full">
//             <span className="text-4xl font-bold">D</span>
//           </div>
//         </div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleLogin();
//           }}
//         >
//           <div className="mb-4">
//             <label
//               htmlFor="username"
//               className="block text-gray-300 font-medium mb-2"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               placeholder="Username"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-gray-300 font-medium mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               placeholder="Password"
//             />
//           </div>
//           {error && (
//             <p className="text-red-500 text-sm mb-4">{error}</p>
//           )}
//           <button
//             type="submit"
//             className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
//           >
//             Log In
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <a href="#" className="text-pink-400 hover:underline text-sm">
//             Forgot your password?
//           </a>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default Login;


//the one which works


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dummyUsers from "./dummyData"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    
    const user = dummyUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate("/home"); 
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 flex items-center justify-center">
      <div className="w-full max-w-xl bg-transparent p-16 rounded-lg shadow-lg"> 
        <div className="flex justify-center mb-12"> 
          <div className="w-32 h-32 bg-gray-800 text-white flex items-center justify-center rounded-full"> 
            <span className="text-6xl font-bold">D</span> 
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-8"> 
            <label
              htmlFor="username"
              className="block text-gray-300 font-medium mb-6" 
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-6 py-4 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" 
              placeholder="Username"
            />
          </div>
          <div className="mb-12"> 
            <label
              htmlFor="password"
              className="block text-gray-300 font-medium mb-6" 
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" 
              placeholder="Password"
            />
          </div>
          {error && (
            <p className="text-red-500 text-lg mb-8">{error}</p> 
          )}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2" 
          >
            Log In
          </button>
        </form>
        <div className="mt-8 text-center"> 
          <h6 className="text-pink-400 hover:underline text-lg"> 
            Forgot your password?
            </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;

//end here 
