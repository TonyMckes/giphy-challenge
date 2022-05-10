import InputField from "components/InputField";
import SourceCodeLink from "components/SourceCodeLink";
import { useAuthContext } from "context/AuthProvider";
import login from "helpers/login";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthCredentials } from "./../components/AuthCredentials";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState } = useForm();
  const { username, password } = formState.errors;
  const { setAuthState } = useAuthContext();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { pathname, search } = state || {};

  const onSubmit = (formValues) => {
    login(formValues)
      .then(({ username }) => {
        setAuthState({ isAuth: true, username });
        navigate(`${pathname}${search}` || "/", { replace: true });
      })
      .catch(setErrorMessage);
  };

  return (
    <div className="absolute top-0 flex flex-col items-center justify-center w-full min-h-full space-y-2 ">
      <div className="w-full max-w-xs p-4 rounded-md bg-zinc-700">
        <div>
          <h2 className="text-xl font-bold text-center">
            Login to your account
          </h2>
        </div>
        <div className="relative mt-6">
          {errorMessage && (
            <span className="absolute ml-2 text-xs text-red-400 -top-5">
              {errorMessage}
            </span>
          )}
          <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
            <InputField
              error={username}
              errorText="A username is required"
              handler={register("username", { required: true, minLength: 5 })}
              text="Username"
              type="text"
            />
            <InputField
              error={password}
              errorText="A password is required"
              handler={register("password", { required: true, minLength: 5 })}
              text="Password"
              type="password"
            />
            <div className="flex justify-between w-full">
              <SourceCodeLink />
              <button className="px-4 py-1 text-black transition-all bg-green-500 rounded-md hover:bg-green-400 hover:shadow hover:shadow-green-400">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <AuthCredentials />
    </div>
  );
}

export default Login;
