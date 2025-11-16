import React, { Suspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ServerPreview from './Pages/ServerPreview'
import Rules from './Pages/Rules'
import NotFound from './Pages/NotFound'
import Loading from './components/Loading'

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/server-preview" element={<ServerPreview />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
