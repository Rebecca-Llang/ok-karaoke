import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <NavLink to="/home">
        <h1 className="text-indigo-50">OK KARAOKE</h1>
      </NavLink>

      <nav className="grid grid-cols-2 justify-evenly justify-items-center gap-3 text-white">
        <ul>
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
