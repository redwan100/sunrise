import React, { useState } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useLoginMutation } from '../../../redux/features/auth/authApi';
import { setUser } from '../../../redux/features/auth/authSlice';
import { verifyToken } from '../../../utils/verifyToken';

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({});
  const submitHandler = async (e) => {
    const id = toast.loading('Login...');
    e.preventDefault();
    try {
      const res = await login(userInfo).unwrap();

      if (res.success) {
        const user = verifyToken(res.data.accessToken);

        dispatch(
          setUser({
            token: res.data.accessToken,
            user
          })
        );

        toast.success('login success', { id });
        navigate('/dashboard/all-news');
      }
    } catch (error) {
      toast.error('something went wrong', { id });
      console.log(error);
    }
  };

  const onChangeValue = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen h-full w-full grid  place-items-center md:min-h-[100vh -10rem">
      <form
        onSubmit={submitHandler}
        className="space-y-2 max-w-[26rem] w-full mx-auto bg-white p-4 rounded-md border border-neutral-200">
        <h3 className="pb-4 text-3xl font-semibold text-neutral-700 text-center">Login</h3>
        <div className="relative">
          <label htmlFor="email" className="block text-neutral-500 text-sm mb-1">
            Email
          </label>
          <input
            onChange={onChangeValue}
            type="text"
            name="email"
            className="w-full px-2 py-1 rounded-sm focus-within:outline-neutral-200 bg-slate-50 hover:bg-neutral-300/20"
          />
          <MdOutlineMailOutline className="absolute top-8 right-2 text-neutral-400" />
        </div>

        <div className="relative pb-4">
          <label htmlFor="password" className="block text-neutral-500 text-sm mb-1">
            Password
          </label>
          <input
            onChange={onChangeValue}
            type="text"
            name="password"
            className="w-full px-2 py-1 rounded-sm focus-within:outline-neutral-200 bg-slate-50 hover:bg-neutral-300/20"
          />
          <BiLockAlt className="absolute top-8 right-2 text-neutral-400" />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white w-full rounded-md p-1 uppercase hover:bg-green-600 transition-all">
          {!isLoading ? 'submit' : 'submitting...'}
        </button>
      </form>
    </div>
  );
};

export default Login;
