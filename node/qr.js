const QRCode = require("qrcode");

const url = "https://youtube.com/@coffee4193";

QRCode.toDataURL(url, (err, dataUrl) => {
    if (err){
        console.error(err);
        return;
    }
    console.log(dataUrl);
})
