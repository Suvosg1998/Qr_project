import React,{ useState } from 'react'
import QRCode from 'qrcode'
import './Qr.css'

const Qr = () => {
    const [url,setUrl]=useState('')
    const [qrcode,setQrcode]=useState('')

    const GenerateQrcode =()=>{
        QRCode.toDataURL(url, {
            width:800,
            margin:2,
            color:{

            }
        },(err,url)=>{
            if(err) return console.error(err)

            console.log(url);
            setQrcode(url)
        })
    }
  return (
    <div>
        <h1>Qr Code Generator</h1>
        <input type="text"
               placeholder='Put any link'    
               value={url}
               onChange={(e)=>setUrl(e.target.value)}    
        />
        <button onClick={GenerateQrcode}>Generate</button>
        {qrcode && <>
            <img src={qrcode} alt="QR" />
            <a href={qrcode} download='qrcode.png'>Download</a>
        </>}
    </div>
  )
}

export default Qr