import userLogin from "services/userLogin";

async function login({ user }) {
  try {
    const usersInDB = await userLogin();

    const authUser = usersInDB.find(
      ({ username, password }) =>
        username === user.username && password === user.password,
    );

    if (!authUser) throw new Error("Invalid username or password");

    return authUser;
  } catch (error) {
    throw error.message;
  }
}

export default login;
