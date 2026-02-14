import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Email is ", email);
    console.log("Password is ", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className=" flex justify-center items-center h-screen w-screen">
      <div className="border-2 p-10 border-red-500 rounded-2xl">
        <form
          action=""
          className=" flex flex-col gap-5"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Enter Your Email"
            className=" bg-amber-50 rounded-full placeholder:text-gray-500 px-5 py-3 w-full outline-none text-black border-2 border-red-400 "
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter Your Password"
            className=" bg-amber-50 rounded-full placeholder:text-gray-500 px-5 py-3 w-full outline-none text-black border-2 border-red-400"
          />
          <button className="w-full bg-red-500 px-5 py-3 rounded-full hover:bg-red-400 cursor-pointer">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
