import React from 'react'

const InputModal = () => {
  return (
    <div className='w-180 h-100 p-5 bg-gray-800 rounded-xl'>
        <h3 className='text-2xl'>Cole o link que deseja transformar em QrCode:</h3>
        <form>
            <input type="text" className='mt-5 p-2 bg-gray-900 rounded-lg w-150' placeholder='Ex: "Https://youtube.com"'/>
            <button type='submit' className='bg-blue-500 p-2 rounded-lg mt-5 cursor-pointer hover:bg-blue-600 transition-colors'>Gerar Qr-Code</button>
        </form>
    </div>
  )
}

export default InputModal