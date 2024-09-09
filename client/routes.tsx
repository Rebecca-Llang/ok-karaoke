import { createRoutesFromElements, Route } from 'react-router-dom'

import Steps from './components/Steps'
import App from './components/App'
import AddNewSong from './components/AddNewSong'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Steps />} />
    <Route path="/home" element={<Steps />} />
    <Route path="/addnewsong" element={<AddNewSong />} />
  </Route>,
)
