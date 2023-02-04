import { useDispatch, useSelector } from "react-redux";
import { logautInitiate } from "../redux/reducers/authReducer";
import {useNavigate} from "react-router-dom"

function HomePage() {
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate("")

  const logout = () => {
    if (user) {
      dispatch(logautInitiate());
      navigate("/login")
    }
  }

  return (
    <div>
      <h2>Home Page</h2>
      <button type="action" onClick={logout}>Выйти</button>
    </div>
  );
}

export default HomePage;