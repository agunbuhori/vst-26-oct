import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../services/authService";

const LoginPage: FC = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [authenticating, setAuthenticating] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAuthenticate = async () => {
    setAuthenticating(true);
    const { email, password } = credentials;
    try {
      const request = await authenticate(email, password);

      if (request) {
        setIsError(false);
        navigate("/dashboard", { replace: true });
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setAuthenticating(false);
    }
  };

  return (
    <div>
      <div>
        <label>Email</label>
        <input type="text" name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      {isError && <p style={{ color: "red" }}>The credentials is wrong</p>}
      <button disabled={authenticating} onClick={handleAuthenticate}>
        {authenticating ? "Loading..." : "Login"}
      </button>
    </div>
  );
};

export default LoginPage;
