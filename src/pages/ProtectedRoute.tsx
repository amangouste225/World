import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuth";
import { TChildrenProps } from "../lib/types";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: TChildrenProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}
