import { Link } from "react-router-dom"
import routes from "../routes"

const Login = () => {
  return (
    <div>
        Login
        <p>
            <Link to={routes.REGISTER}>Register</Link>
        </p>
    </div>
  )
}

export default Login