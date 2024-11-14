
const suraNomlari = [
    "Fotiha - Ochuvchi",
    "Baqara - Sigir",
    "Oli Imron - Imron oilasi",
    "Niso - Ayollar",
    "Moida - Dasturhon",
    "An'om - Chorvalar",
    "A'rof - Jannat bilan Do‘zaxni ajratuvchi devor",
    "Anfol - O‘ljalar",
    "Tavba - Tavba",
    "Yunus - Yunus (nom) alayhissalam",
    "Hud - Hud (nom) alayhissalam",
    "Yusuf - Yusuf (nom) alayhissalam",
    "Ra'd - Momaqaldiroq",
    "Ibrohim - Ibrohim (nom) alayhissalam",
    "Hijr - Madina va Shom ortasidagi vodiy",
    "Nahl - Asalari",
    "Isro - Tungi sayr",
    "Kahf - G‘or",
    "Maryam - Maryam (nom) roziAllahu anxo",
    "Toho - Toxo harf",
    "Anbiyo - Payg‘ambarlar",
    "Haj - Haj",
    "Muminun - Mo‘minlar",
    "Nur - Nur",
    "Furqon - Haq bilan nohaqni ajratib berguvchi",
    "Shuaro - Shoirlar",
    "Naml - Chumoli",
    "Qasas - Qissa",
    "Ankabut - O‘rgimchak",
    "Rum - Rum (davlat nomi)",
    "Luqman - Luqmon",
    "Sajda - Sajda",
    "Ahzab - Firqalar",
    "Saba - Saba' (qabila nomi)",
    "Fatir - Ilk Yaratguvchi",
    "Yasin - Yasin, harf",
    "Vas-saffat - Saf tortib turguvchilar",
    "Sod - Sod, harf",
    "Zumar - Guruhlar",
    "G'ofir - Mag‘firat qilguvchi",
    "Fussilat - Mufassal bayon qilingan",
    "Sho'ro - Maslahat",
    "Zuhruf - Zeb ziynat",
    "Duxon - Tutun",
    "Jasiya - Tiz cho‘kuvchilar",
    "Ahqof - Qumtepalar",
    "Muhammad - Muhammad solallahu alayhi vasallam",
    "Fath - G'alaba",
    "Hujurot - Hujralar",
    "Qof - Qof, harf",
    "Vazzariyat - Surib ketuvchi shamollar",
    "Tur - Tur tog'i",
    "Najm - Yulduz",
    "Qomar - Oy",
    "Rohman - Mehribon",
    "Vaqea - Voqea",
    "Hadid - Temir",
    "Mujadala - Munozara",
    "Hashr - Jamlab surgun qilish",
    "Mumtahana - Imtihon qilinguvchi ayol",
    "Saf - Saf, qator",
    "Juma - Juma kuni",
    "Munafiqun - Munofiqlar",
    "Tag'obun - Bir birini aldash- ziyon keltirish kuni",
    "Talaq - Taloq",
    "Tahrim - Harom qilib olish",
    "Mulk - Boylik",
    "Qolam - Qalam, yozuv asbobi",
    "Alhaqqo - Aniq ro‘y berguvchi",
    "Maa'rij - Osmon qavatlari",
    "Nuh - Nuh (nom) alayhisalam",
    "Jin - Jinlar",
    "Muzzammil - Kiyimlariga o‘ralib olgan zot",
    "Muddassir - Liboslariga burkanib olgan zot",
    "Qiyamat - Qiyamat",
    "Inson - Inson",
    "Mursalat - Yuborilgan shamollar",
    "Naba - Habar",
    "Naziyat - Jon olguvchi farishtalar",
    "Abasa - Qoshini chimirdi, yuzini burishtirdi",
    "Takvir - O‘ralish",
    "Infitor - Yorilish",
    "Mutaffifun - Boshqalar haqqidan urib qolguvchi",
    "Inshiqoq - Yorilish",
    "Buruj - Osmondagi burjlar",
    "Toriq - Tungi yo‘lchi",
    "Ala - Eng oliy zot",
    "G'oshia - O‘rab olguvchi",
    "Fajr - Tong",
    "Balad - Shahar",
    "Shams - Quyosh",
    "Layl - Kecha, tun",
    "Zuxo - Choshgoh vaqti",
    "Sharh - Ochmoq, keng qilmoq",
    "Tiyn - Anjir",
    "Alaq - Lahta qon",
    "Qodr - Qadrli kecha",
    "Bayyina - Aniq hujjat",
    "Zalzala - Zilzila",
    "Adiyat - Chopqir otlar",
    "Qoria - Qalblarni qattiq qo‘rqituvchi, qiyomat",
    "Takasur - To‘plab ko‘paytirishga berilmoq",
    "Asr - Asr namoz vaqti",
    "Humaza - Bo‘htonchi",
    "Fil - Fil, hayvon",
    "Quroysh - Quraysh, qabila",
    "Ma'un - Idish tavoq",
    "Kavsar - Kavsar, Xovuz",
    "Kafirun - Kofirlar",
    "Nasr - Yordam",
    "Masad - Pishiq tola",
    "Ihlas - Ihlos qilish",
    "Falaq - Tong",
    "Nas - Odamlar"
];

const suraNomi = document.getElementById('sura');

suraNomlari.forEach((key, index) => {
    suraNomi.insertAdjacentHTML('beforeEnd', `<option value="${index + 1}">${index + 1} ${key}</option>`)
})


function showTafsiri() {
    const sura = document.getElementById('sura').value;
    const ayat = document.getElementById('ayat').value;
    const tafsirContainer = document.getElementById('tafsir');

    fetch('./tafsir.json')
        .then(response => response.json())
        .then(data => {
           
            for(const key in data.quran) {
                
                if(data.quran[key].chapter == sura) {
                    if(data.quran[key].verse == ayat) {
                        console.log(data.quran[key].text);
                        tafsirContainer.innerHTML = `<h3>Tafsir:</h3><p>${data.quran[key].text}</p>`;
                    }else if(data.quran[key].verse < ayat){
                        tafsirContainer.innerHTML = `<p>Tafsir topilmadi, ${ayat} oyat yo'q!!!.</p>`;
                    }
                }
                
            }

        })
        .catch(error => {
            console.error('Xato yuz berdi:', error); 
        });

    // }
}


