import { useState } from "react"
import './assets/CSS/QrCode.css';

export const Qrcodegenerator= () => {
    const [img, setimg] = useState("")
    const [loading, setloading] = useState(false);
    const [qrData, setqrdata] = useState("www.linkedin.com/in/dharanidharan-sakthivel")
    const [qrsize, setqrsize] = useState('150')
     function generateQR(params) {
        setloading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrData)}`;
            setimg(url)
        } catch (error) {
            console.error("Error generation QR code", error);
        } finally {
            setloading(false);
        }
    }
    function downloadQR(params) {
        fetch(img)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob)
                link.download = "qrcode.png"
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link)

            });

    }


    return (
        <>
            <div className="app-container">
                <h1>QR CODE GENERATOR</h1>
                {loading && <p>please wait...</p>}
                {img && <img src={img} className="qr-code-img" />}

                <div>
                    <label htmlFor="dataInput" className="input-label" >Data for QR code:</label>
                    <input type="text" id="dataInput" value={qrData} placeholder="Enter data of QR Code" onChange={(e) => setqrdata(e.target.value)} />
                    <label htmlFor="SizeInput" className="input-label"  >Image Size (eg..,150): </label>
                    <input type="text" id="SizeInput" value={qrsize} placeholder="Enter QR Size" onChange={(e) => setqrsize(e.target.value)} />
                    <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
                    <button className="download-button" onClick={downloadQR}>Download QR Code</button>
                </div>


            </div>
        </>
    )
}
