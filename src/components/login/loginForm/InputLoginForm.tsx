import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { auth } from "@/lib/slices/loginSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";

function InputLoginForm() {
  const [dataForm, setdataForm] = useState({ username: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [showError, setShowError] = useState(true);
  const message = useAppSelector((state) => state.loginState.message);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const clickHandlerError = () => {
    setShowError(false);
  };

  useEffect(() => {
    message === "fulfilled" ? router.push("/admin") : null;
  }, [message, router]);
  const clickHandler = () => {
    dispatch(auth(dataForm));
  };
  return (
    <>
      <div className="flex flex-col gap-3 w-full">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={dataForm.username}
            onChange={(e) =>
              setdataForm({ ...dataForm, username: e.target.value })
            }
            className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px] placeholder-white focus:placeholder:opacity-0"
          />
        </div>
        <div>
          <input
            type={showPass ? "text" : "password"}
            placeholder="password"
            value={dataForm.password}
            onChange={(e) =>
              setdataForm({ ...dataForm, password: e.target.value })
            }
            className="w-full rounded-lg bg-[#73879c] outline-[#eca8a4] p-1 text-[15px]  placeholder-white focus:placeholder:opacity-0"
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
      {message === "error" && showError === true ? (
        <Error onclick={() => clickHandlerError()} errorText="Your Username or Password Is wrong"/>
      ) : (
        ""
      )}
    </>
  );
}

export default InputLoginForm;
