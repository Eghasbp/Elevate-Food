import axios from "axios";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

function Login() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = ({e}) => {
    const payload = {
      username: email,
      password: password,
    };
    console.log(payload);
    axios
      .post(`https://api.mudoapi.tech/login`, payload)
      .then((res) => {
        console.log("sucess", res);
        localStorage.setItem("token", res.data?.data?.token);
        navigate("/");
        console.log(res.data?.data?.token);
        // localStorage.getItem('token', res.token)
        // localStorage.removeItem('token', res.token)
        // localStorage.clear('token', res.token)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    
    // untuk Background
    <div
      className="bg-cover  font-sans bg-no-repeat relative z-0 bg-center h-screen"
      style={{
        backgroundImage: `url(${"/src/images/miti-qYreP9QOdrk-unsplash.jpg"})`,
      }}
    >
      {/* untuk shading bg */}
      <div className="absoulte top-0 left-0 w-full h-screen -z-20">
        {/* card login */}
        <div className=" flex items-center justify-center h-screen flex-col gap-10">
          <div className=" p-8 text-white bg-transparent md:border border-gray-400 rounded-lg shadow-lg w-96">
            <h1 className="text-4xl font-semibold text-center font-mono">
              Login
            </h1>
            <div className="w-full flex flex-col">
              <input
                onChange={handleEmail}
                type="email"
                className="w-full text-white py-2 my-2 bg-transparent border-b border-primary outline-none focus:outline-none"
                placeholder="Username"
              />

              <input
                onChange={handlePassword}
                type="password"
                className="w-full text-white py-2 my-2 bg-transparent border-b border-primary outline-none focus:outline-none"
                placeholder="Password"
              />
            </div>
            <div className="mt-2 w-full flex justify-between items-center">
              <div className="w-full flex py-2 items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2 cursor-pointer"
                />
                <p className="text-xs font-light text-gray-200">Remember Me</p>
              </div>
              <p className="text-xs text-gray-300 font-medium whitespace-nowrap cursor-pointer  ">
                Forgot Password ?
              </p>
            </div>
            <div className="flex items-center justify-center">
              {/* onClick={handleSubmit} */}
              {/* onClick={() => setShowModal(true)} */}
              <div className="mt-8">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-primary w-80 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
              >
                Login
              </button>
              {/* <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
              <AnimatePresence isOpen={isOpen} setIsOpen={setIsOpen}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: "12.5deg" }}
                      animate={{ scale: 1, rotate: "0deg" }}
                      exit={{ scale: 0, rotate: "0deg" }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-gradient-to-br from-primary to-red text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                      <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                      <div className="relative z-10">
                        <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-primary grid place-items-center mx-auto">
                          <FiAlertCircle />
                        </div>
                        <h3 className="text-3xl font-bold text-center mb-2">
                          One more thing!
                        </h3>
                        <p className="text-center mb-6">
                          Check your username and password again to make sure it's correct, never too late to come back dude !
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setIsOpen(false)}
                            className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                          >
                            Nah, go back
                          </button>
                          <button
                            onClick={handleSubmit}
                            className="bg-white hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded"
                          >
                            Understood!
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            </div>
            <div className="flex justify-center my-5">
            <p className="font-poppins font-semibold">or</p>
            </div>
            <div className="flex mt-5 md:w-auto  text-white rounded-md text-center border border-slate-400 items-center  justify-center ">
              <div className="flex items-center gap-4 hover:scale-">
               
                  <svg className="w-6 h-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  </svg>
           
                <p className="font-poppins font-normal">
                  <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fpixabay.com%3Fid%3Dauth972001&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=575185734362.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fpixabay.com&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow">
                  continue with google
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-20 text-xs">
              <Link to={"/Register"}>
                <label className="cursor-pointer font-poppins">Dont have an account ? <label className="cursor-pointer font-poppins text-primary">Register</label></label>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
