import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginInitiate } from "../redux/reducers/authReducer";
import {useNavigate} from "react-router-dom"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    navigate("/home")
  }

  return (
    <div>
      <h2>Страница входа</h2>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"></input>
        <button type={"submit"}>Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;