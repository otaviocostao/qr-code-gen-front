import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import InputModal from './components/InputModal'
import QrCodePreview from './components/QrCodePreview'

function App() {

  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-gray-950">
      <HeaderComponent/>
      <h1 className='text-4xl font-semibold text-center p-8'>Transforme seu link em um QrCode em poucos cliques!</h1>
      <div className='w-full flex justify-center gap-5 p-4'>
        <InputModal />
        <QrCodePreview />
      </div>
    </div>
  )
}

export default App
