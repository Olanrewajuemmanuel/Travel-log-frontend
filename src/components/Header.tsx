import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="w-full  shadow-md p-5 flex items-center justify-between">
        <Link to="/">
            <span className="text-2xl text-red-600 font-medium uppercase">Travel Log</span>
        </Link>
        <ul>
            <li>
                <button className="rounded-full bg-red-600 hover:bg-red-800 text-gray-100 px-5 py-2">Login</button>
            </li>
        </ul>
    </div>
  )
}
