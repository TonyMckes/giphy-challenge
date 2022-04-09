function UserInfo({ avatar_url, display_name }) {
  return (
    display_name && (
      <>
        <img
          className="inline-block w-8 h-8 m-1 rounded-full"
          src={avatar_url}
          alt={display_name}
        />
        <p className="inline-block text-sm font-medium truncate align-middle">
          {display_name}
        </p>
      </>
    )
  );
}
export default UserInfo;
