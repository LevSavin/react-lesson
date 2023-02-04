import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerInitiate } from "../redux/reducers/authReducer";
import {useNavigate} from "react-router-dom"

function RegisterPage() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return
    }
    dispatch(registerInitiate(email, password, displayName));
    navigate("/login")
  }

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Имя"></input>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"></input>
        <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="Повторите пароль"></input>
        <button type={"submit"}>Sign In</button>
      </form>
    </div>
  );
}

export default RegisterPage;