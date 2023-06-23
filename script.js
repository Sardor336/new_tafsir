



function btnSearch() {
    let input1 = [...document.querySelectorAll('input')]
    let abtn = document.querySelector('form')
    var xhr = new XMLHttpRequest()
    xhr.open(
        'GET',
        'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-muhammadsodikmu.json',
        true
    )
    xhr.send()

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {
            return
        }

        if (xhr.status === 200) {
            // console.log(input1[1].value);
            let userSura = +input1[0].value
            let userOyat = +input1[1].value
            // console.log('result', xhr.responseText)
            // sura = JSON.parse(xhr.responseText).quran.userSura.chapter
            // oyat = JSON.parse(xhr.responseText).quran.userOyat.verse
            // if (JSON.parse(xhr.responseText).quran.chapter == userSura && JSON.parse(xhr.responseText).quran.verse == userOyat) {
            //     text = JSON.parse(xhr.responseText).quran.text
            //     console.log('result', JSON.parse(xhr.responseText).quran.text)

            //     abtn.insertAdjacentHTML('afterEnd', `<p>${text}</p>`)
            // }

            console.log( userOyat);
            console.log( userSura);

            let lst = JSON.parse(xhr.responseText).quran
            lst.forEach(key => {
                // console.log(key);
                if(key.chapter == userSura && key.verse == userOyat) {
                    console.log('ishladi');
                    console.log('result', key.text)
                    abtn.insertAdjacentHTML('afterEnd', `<p>${key.text}</p>`)
                }
            });

            
        } else {
            console.log('err', xhr.responseText)
        }
    }

    // console.log('salom', typeof +input1.value);
}

// const form = document.querySelector('.my')

// console.log(form);