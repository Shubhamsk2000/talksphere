import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox.jsx";
import { useState } from "react";
import  useSignup  from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })
    const { signup, loading } = useSignup();
    const handleGenderChange = (gender) =>{
        setInputs({...inputs, gender : gender});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    }
    return (
        <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
            <div className='w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='p-2 label'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type='text' className='w-full h-10 input input-bordered'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='p-2 label '>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} className='w-full h-10 input input-bordered'
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            className='w-full h-10 input input-bordered'
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            className='w-full h-10 input input-bordered'
                        />
                        <p>{ inputs.password !== inputs.confirmPassword ? "Password does not Match" : null}</p>
                    </div>
                        <GenderCheckBox handleGenderChange={handleGenderChange} selectedGender={inputs.gender}/>

                    <Link className='inline-block mt-2 text-sm hover:underline hover:text-blue-600' to='/login'>
                        Already have an account?
                    </Link>

                    <div>
                        <button disabled={loading} className='mt-2 border btn btn-block btn-sm border-slate-700'>
                            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignUp;

// import sign from "../../assets/signup1.jpg";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   return (
//     <div className="w-8/12 p-4 bg-[#2c2638] flex gap-2">
//       <div className="w-1/2">
//         <img src={sign} className="w-full" alt="Sign Up" />
//       </div>
//       <div className="w-1/2">
//         <h2 className="mb-4 text-2xl font-bold text-white">Create an Account</h2>
//         <div className="mb-4 text-white">
//           <p className="inline">Already have an account? </p>
//           <Link to="/login" className="text-[#6d54b5] hover:underline">
//             Log in
//           </Link>
//         </div>
//         <form>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full h-10 input input-bordered bg-[#3c364c] text-white placeholder-gray-400"
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full h-10 input input-bordered bg-[#3c364c] text-white placeholder-gray-400"
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full h-10 input input-bordered bg-[#3c364c] text-white placeholder-gray-400"
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full h-10 input input-bordered bg-[#3c364c] text-white placeholder-gray-400"
//             />
//           </div>

//           <div className="mb-4">
//             <span className="mr-4 text-white">Gender:</span>
//             <label className="mr-4 text-white">
//               <input type="checkbox" className="mr-2 checkbox checkbox-primary" />
//               Male
//             </label>
//             <label className="text-white">
//               <input type="checkbox" className="mr-2 checkbox checkbox-primary" />
//               Female
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="mt-2 btn btn-block btn-sm border-none bg-[#6d54b5] text-white hover:bg-[#5a3ea3]"
//           >
//             Create an Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
