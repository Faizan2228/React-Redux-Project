import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeContainer from './Components/CakeContainer'
import store from './redux/store'
import { Provider } from 'react-redux'
import HooksCakeContainers from './Components/HooksCakeContainers'
import IceCreamContainer from './Components/IceCreamContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <div>
        <HooksCakeContainers />
        <CakeContainer />
        <IceCreamContainer />
       </div>
       </Provider>
    </>
  )
}

export default App
