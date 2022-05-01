function InputField({ error, errorText, handler, text, type }) {
  const validationStyles = error
    ? "focus:ring-red-400 focus:!ring-2 ring-2 ring-red-400"
    : "";

  return (
    <div className="relative ">
      {error && (
        <span className="absolute ml-2 text-xs text-red-400 -top-2">
          {errorText}
        </span>
      )}
      <input
        {...handler}
        className={`${validationStyles} w-full px-3 py-1 mt-3 rounded-md placeholder-neutral-600 focus:placeholder-neutral-400 bg-zinc-800 focus:ring-1 focus:ring-green-400 focus-visible:outline-none`}
        placeholder={text}
        type={type}
      />
    </div>
  );
}

export default InputField;
