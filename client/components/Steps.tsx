import { Link } from 'react-router-dom'

export default function Steps() {
  return (
    <div className="container">
      <div className="grid  grid-rows-4 justify-center">
        <h2>Step By Step:</h2>
        <div className="paragraph">
          <p>Step 1: Add New Song</p>
          <p>Step 2: Choose Playlist</p>
          <p>Step 3: OK, let&apos;s karaoke!</p>
        </div>
        <Link to={`/AddNewSong`}>
          <button>Let&apos;s go!</button>
        </Link>
      </div>
    </div>
  )
}
