import appendBeforeExt from "helpers/appendBeforeExt";

function UserInfo({ avatar_url: avatarUrl, display_name: displayName }) {
  const avatarUrlMaxHeight = appendBeforeExt(avatarUrl, "/80h");

  return (
    displayName && (
      <>
        <img
          className="inline-block object-cover w-8 h-8 m-1 rounded-full"
          src={avatarUrlMaxHeight}
          alt={displayName}
        />
        <p className="inline-block text-sm font-medium truncate align-middle">
          {displayName}
        </p>
      </>
    )
  );
}
export default UserInfo;
