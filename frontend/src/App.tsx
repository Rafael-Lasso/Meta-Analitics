import { useState } from 'react'

import NotificationButton from './components/NotificationButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NotificationButton/>
    </>
  )
}

export default App
