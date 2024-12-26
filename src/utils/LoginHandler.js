import { useApiRequestMutation } from "../reducers/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../reducers/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const HandleLogin = async ({ email, password, setError }) => {
  const [apiRequest] = useApiRequestMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
