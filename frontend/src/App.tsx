import { useState } from 'react'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NotificationButton from './components/NotificationButton'
import SalesCard from './components/SalesCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
    <Header/>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
