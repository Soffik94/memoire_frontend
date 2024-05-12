import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginHandler({ isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return null;
}

export default LoginHandler;
