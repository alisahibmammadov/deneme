// const ad =document.getElementById('ad')
// const soyad =document.getElementById('soyad')
// const mail =document.getElementById('mail')

// const form = document.getElementById('form-rehber')
// const kisiListesi = document.querySelector('.kisi-listesi')


// form.addEventListener('submit', kaydet)
// kisiListesi.addEventListener('click', kisiIslemleriniYap)




// const tumKisilerDizisi = []
// let secilenSatir = undefined

// function kisiIslemleriniYap(event){
    
//     if(event.target.classList.contains('btn--delete')){
//         const silinecekTR = event.target.parentElement.parentElement
//         const silinecekMail = event.target.parentElement.previousElementSibling.textContent
//         rehberdenSil(silinecekTR,silinecekMail)
//     }else if(event.target.classList.contains('btn--edit')){
//         document.querySelector('.kaydetGuncelle').value = 'Guncelle'
//         const secilenTR = event.target.parentElement.parentElement
//         const guncellenecekMail = secilenTR.cells[2].textContent
//         ad.value = secilenTR.cells[0].textContent
//         soyad.value = secilenTR.cells[1].textContent
//         mail.value = secilenTR.cells[2].textContent

//         secilenSatir = secilenTR
//         console.log(tumKisilerDizisi)
//     }
// }

// function rehberdenSil(silinecekTrElement,silinecekMail){
//     silinecekTrElement.remove()

//     // tumKisilerDizisi.forEach((kisi,index)=>{
//     //     if(kisi.mail === silinecekMail){
//     //         tumKisilerDizisi.splice(index, 1)
//     //     }
//     // })
//     const silinmeyecekKisiler = tumKisilerDizisi.filter(function(kisi,index){
//         return kisi.mail !== silinecekMail
//     })

//     tumKisilerDizisi.length = 0
//     tumKisilerDizisi.push(...silinmeyecekKisiler)
//     alanlariTemizle()
//     document.querySelector('.kaydetGuncelle').value = 'kaydet'

// }

// function kaydet(e){
//     e.preventDefault()
//     const eklenecekVeYaGuncellenecekKisi = {
//         ad: ad.value,
//         soyad: soyad.value,
//         mail: mail.value
//     }
//     const sonuc = verileriKontrolEt(eklenecekVeYaGuncellenecekKisi)
//     if(sonuc.durum){
//         if(secilenSatir){

//             kisiyiGuncelle(eklenecekVeYaGuncellenecekKisi)
//         }else{
//             kisiyiEkle(eklenecekVeYaGuncellenecekKisi)
//         }
//     }else{
//         bilgiOlustur(sonuc.mesaj, sonuc.durum)
//     }
//     // console.log(eklenecekKisi);
// }

// function kisiyiGuncelle(kisi){
//     for(let i=0;i<tumKisilerDizisi.length;i++){
//         if(tumKisilerDizisi[i.mail] === secilenSatir.cells[2].textContent){
//             tumKisilerDizisi[i] = kisi
//             break
//         }
//     }
//     secilenSatir.cells[0].textContent= kisi.ad
//     secilenSatir.cells[1].textContent= kisi.soyad
//     secilenSatir.cells[2].textContent= kisi.mail
//     document.querySelector('.kaydetGuncelle').value = 'Kaydet'
//     secilenSatir = undefined
// }

// function kisiyiEkle(eklenecekKisi){
//     const olusturlanTrElemnti = document.createElement('tr')
//     olusturlanTrElemnti.innerHTML = `<td>${eklenecekKisi.ad}</td>
//     <td>${eklenecekKisi.soyad}</td>
//     <td>${eklenecekKisi.mail}</td>
//     <td>
//         <button class="btn btn--edit"><i class="fa-sharp fa-solid fa-edit"></i></button>
//         <button class="btn btn--delete"><i class="fa-sharp fa-solid fa-trash"></i></button>
//     </td>`
//     kisiListesi.appendChild(olusturlanTrElemnti)
//     tumKisilerDizisi.push(eklenecekKisi)
//     bilgiOlustur('Kisi rehbere kaydedildi', true)
// }

// function verileriKontrolEt(kisi){
//     for(const deger in kisi){
//         if(kisi[deger]){
//             console.log(kisi[deger]);
//         }else{
//             const sonuc = {
//                 durum: false,
//                 mesaj:'bos alan birakmayiniz'
//             }
//             return sonuc
//         }
//     }
//     alanlariTemizle()
//     return {
//         durum : true,
//         mesaj: 'Kaydedildi'
//     }
// }

// function bilgiOlustur(mesaj,durum){
//     const olusturularbilgi = document.createElement('div')
//     olusturularbilgi.className = 'bilgi'
//     olusturularbilgi.textContent = mesaj
//     // if(durum){
//     //     olusturularbilgi.classList.add('bilgi--success')
//     // }else{
//     //     olusturularbilgi.classList.add('bilgi--error')
//     // }
//     olusturularbilgi.classList.add(durum ? 'bilgi--succes' : 'bilgi--error')

//     document.querySelector('.container').insertBefore(olusturularbilgi,form)
//     setTimeout(function(){
//         const silinecekDiv = document.querySelector('.bilgi')
//         if(silinecekDiv){
//             silinecekDiv.remove()
//         }
//     },2000)
// }

// function alanlariTemizle(){
//     ad.value = ''
//     soyad.value = ''
//     mail.value = ''
// }











class Kisi{
    constructor(ad,soyad,mail){
        this.ad = ad
        this.soyad = soyad
        this.mail = mail
    }
}

class Ekran{
    constructor(){
        this.ad = document.getElementById('ad')
        this.soyad = document.getElementById('soyad')
        this.mail = document.getElementById('mail')
        this.ekleGuncelleButon = document.querySelector('.kaydetGuncelle')
        this.depo = new Depo()
    }
}

class Depo{
    constructor(){
        this.tumKisiler = []
    }
    kisileriGetir(){
        let tumKisilerLocal
        if(localStorage.getItem('tumKisiler') === null){
            tumKisilerLocal = []
        }else{
            tumKisilerLocal = JSON.parse(localStorage.getItem('tumKisiler'))
        }
        this.tumKisiler = tumKisilerLocal
        return tumKisilerLocal
    }
    kisiEkle(kisi){
       const tumKisilerLocal = this.kisileriGetir()
       tumKisilerLocal.push(kisi)
       localStorage.setItem('tumkisiler', JSON.stringify(tumKisilerLocal))
    }
    
}

