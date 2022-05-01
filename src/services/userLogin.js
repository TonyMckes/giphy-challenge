import axios from "axios";

async function userLogin() {
  try {
    const { data } = await axios({ url: "users.json" });

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default userLogin;
