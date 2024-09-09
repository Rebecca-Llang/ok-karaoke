import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="container">
      <nav className="grid grid-cols-3 justify-evenly justify-items-center gap-3">
        <ul>
          <li className="navLink">
            <NavLink to="/home" className="col-span-1">
              Home
            </NavLink>
          </li>

          <li className="navLink">
            <NavLink to="/addNewSong" className="col-span-1">
              Add New Song
            </NavLink>
          </li>

          {/* <li className="navLink">
            <NavLink to="" className="col-span-1">
              All Songs
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
