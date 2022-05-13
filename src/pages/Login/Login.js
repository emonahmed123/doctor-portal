import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
// import { useform } from "react-hook-form";
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loding from '../Shared/Loding';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate ,  useLocation,} from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm( );
   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location =useLocation();   
   const navigate =useNavigate()
    let from = location.state?.from?.pathname || "/ ";
    let loginerrorMessage;
   useEffect(()=>{
    if (user || guser) {
        console.log(user || guser)
        navigate(from, { replace: true });
        
    }

   },[user,guser, from, navigate])


    if (loading || gloading) {
        return <Loding></Loding>
    }
    if (error ||  gerror) {
        loginerrorMessage = <p className='text-red-500' >{error?.message}|| {gerror?.message}</p>
    }


    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email ,data.password)

    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Email</span>
                            </label>
                            <input
                                      type="email" placeholder="Your Email"
                                      className="input input-bordered w-full max-w-xs"
                              {...register("email", {
                                    required: {
                                        value: true,
                                        message: " Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email '
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-bold">Password</span>
                            </label>
                          
                          <input
                                  type="password" placeholder="You password"
                                  className="input input-bordered w-full max-w-xs"
  
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: " Password   is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>

                        {/* {errors.firstName?.type === 'required' && "First name is required"}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"} */}

                     <input className='btn w-full max-w-xs' type="submit" value='LOGIN' />
                    </form>
                    <p> <small>New to Doctors Portal  <Link className='text-primary' to="/sigup">Create New Account</Link>  </small> </p>
                     {loginerrorMessage}

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">  CONTINUE WITH GOOGLE  </button>
                </div>
            </div>

        </div>
    );
};

export default Login;