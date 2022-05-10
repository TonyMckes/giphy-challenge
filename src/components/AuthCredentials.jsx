export function AuthCredentials() {
  return (
    <div className="w-full max-w-xs p-4 text-sm rounded-md bg-zinc-700/50">
      <h2 className="mb-4 font-semibold text-neutral-400">
        You can log in with one of these...
      </h2>
      <table className="w-full border text-neutral-500 border-neutral-700 ">
        <thead>
          <tr className="bg-neutral-700">
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-1">root</td>
            <td className="px-1">root</td>
          </tr>
          <tr className="bg-neutral-700">
            <td className="px-1">admin</td>
            <td className="px-1">admin</td>
          </tr>
          <tr>
            <td className="px-1">username</td>
            <td className="px-1">password</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
