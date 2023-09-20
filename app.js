// const language = document.getElementById('language')

// const changeLanguage = () => {
    // const languageImg = document.querySelector('.header__nav-text-img')
    // let selected = language.options[language.selectedIndex].value

//     if (selected === 'GER') {
//         languageImg.setAttribute('img', 'eng.png')
//         alert('yeah')
//     }
// }

// language.addEventListener('change', changeLanguage())





function start(){
    document.getElementById("language").addEventListener("change", addActivityItem, false);
    }

function addActivityItem(){
    const languageImg = document.querySelector('.header__nav-text-img')
    let selected = language.options[language.selectedIndex].value
    if (selected === 'GER') {
        languageImg.setAttribute('src', 'img/png/ger.png')
    } else {
        languageImg.setAttribute('src', 'img/png/eng.png')
    }
}

window.addEventListener("load", start, false);