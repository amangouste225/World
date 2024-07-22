import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function ButtonBack() {
  const navigate = useNavigate();
  return (
    <Button
      onclick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      type="back"
    >
      &larr; Back
    </Button>
  );
}
