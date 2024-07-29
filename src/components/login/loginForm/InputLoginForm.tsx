import InputComponent from "@/components/InputComponent";
import Loading from "@/components/Loading";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { auth } from "@/lib/slices/loginSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

function InputLoginForm() {
  const [dataForm, setdataForm] = useState({ username: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const message = useAppSelector((state) => state.loginState.message);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (message === "fulfilled") {
      setTimeout(() => {
        router.push("/admin");
      }, 500);
    }
  }, [message, router]);
  const clickHandler = () => {
    dispatch(auth(dataForm));
  };
  return (
    <>
    <div className='text-[35px] text-[#2a3f54] font-extrabold'>
      Login User
    </div>
      <div className="flex flex-col gap-3 w-full">
        <div>
          <InputComponent
            type="text"
            placeholder="Username"
            value={dataForm.username}
            onchange={(e) =>
              setdataForm({ ...dataForm, username: e.target.value })
            }
          />
        </div>
        <div>
          <InputComponent
            type={showPass ? "text" : "password"}
            placeholder="password"
            value={dataForm.password}
            onchange={(e) =>
              setdataForm({ ...dataForm, password: e.target.value })
            }
          />
        </div>
      </div>
      <div className=" w-full flex justify-between text-[12px]">
        <div className="flex justify-center items-center gap-1 cursor-pointer">
          <input
            className="cursor-pointer"
            type="checkbox"
            id="showPass1"
            onClick={() => setShowPass(!showPass)}
          />
          <label className="cursor-pointer" htmlFor="showPass1">
            Show Password
          </label>
        </div>
        <div>Forget Password</div>
      </div>
      <button
        onClick={clickHandler}
        className="bg-[#73879c] text-black p-1 rounded-md hover:text-white text-[15px]"
      >
        log in
      </button>
      {message === "loading" ? <Loading /> : ""}
    </>
  );
}

export default InputLoginForm;
