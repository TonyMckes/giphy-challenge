import InputField from "components/InputField";
import SourceCodeLink from "components/SourceCodeLink";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userSignUp from "services/userSignUp";

function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { email, password, passwordConfirm } = formState.errors;
  const navigate = useNavigate();
  const { state } = useLocation();
  const { pathname, search } = state || {};

  const onSubmit = (formValues) => {
    if (formValues.password !== formValues.passwordConfirm) {
      return setErrorMessage("Passwords do not match");
    }

    setLoading(true);

    userSignUp(formValues)
      .then(() => {
        navigate(pathname ? `${pathname}${search}` : "/", { replace: true });
      })
      .catch(setErrorMessage)
      .finally(() => setLoading(false));
  };

  return (
    <div className="absolute top-0 flex flex-col items-center justify-center w-full min-h-full space-y-2 ">
      <div className="w-full max-w-xs p-4 rounded-md bg-zinc-700">
        <div>
          <h2 className="text-xl font-bold text-center">
            SignUp to get started
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
              error={email}
              errorText="A email is required"
              handler={register("email", { required: true })}
              text="Email"
              type="text"
            />
            <InputField
              error={password}
              errorText="A password is required"
              handler={register("password", { required: true, minLength: 6 })}
              text="Password"
              type="password"
            />
            <InputField
              error={passwordConfirm}
              errorText="The password is required"
              handler={register("passwordConfirm", {
                required: true,
                minLength: 6,
              })}
              text="Verify password"
              type="password"
            />
            <div className="flex justify-between w-full">
              <SourceCodeLink />
              <button
                className="px-4 py-1 text-black transition-all bg-green-500 rounded-md disabled:cursor-not-allowed hover:bg-green-400 hover:shadow hover:shadow-green-400"
                disabled={loading}
              >
                SignUp
              </button>
            </div>
          </form>
          <div className="mt-5">
            <p className="text-xs text-center text-neutral-400">
              Already have an account?{" "}
              <Link
                className="transition hover:text-green-400 hover:underline hover:underline-offset-1"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
