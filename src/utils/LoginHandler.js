import { setCredentials } from "../reducers/auth/authSlice";

export const HandleLogin = async ({
  email,
  password,
  setError,
  apiRequest,
  dispatch,
  navigate,
}) => {
  try {
    const response = await apiRequest({
      path: "/login",
      body: { email, password },
    }).unwrap();

    dispatch(
      setCredentials({
        userId: response.userId,
        accessToken: response.token,
        userData: response.userData,
      })
    );

    navigate("/jobs");
  } catch (error) {
    setError("Invalid email or password");
    console.error("Failed to login:", error);
  }
};
