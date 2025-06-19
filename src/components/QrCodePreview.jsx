import React from 'react'

const QrCodePreview = () => {
  return (
    <div className='flex flex-col w-120 h-100 p-5 bg-gray-800 rounded-xl justify-around items-center'>
        <h3 className='text-2xl text-center'>Seu Qr-Code:</h3>
        <img src="/public/qrcode-example.png" alt="" />     
        <button className='bg-blue-500 p-2 rounded-lg mt-2 cursor-pointer hover:bg-blue-600 transition-colors'>Download</button>
    </div>
  )
}

export default QrCodePreview