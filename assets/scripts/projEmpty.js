function projEmpty(){
    const titles = document.querySelectorAll(".title-proj")
    const imgs = document.querySelectorAll(".banner-img")
    const descs = document.querySelectorAll(".desc-proj")
    const links = document.querySelectorAll(".projlinks a")

    var h = 0
    titles.forEach((title, i) => {
        i -= h
        if (title.innerText == ""){
            if (i == 0) title.innerText = "Em desenvolvimento.."
            else if (i != 0) title.innerText = "Em breve.."
            h = 0
        }
        else h += 1
    })

    imgs.forEach((img) => {
        if (img.getAttribute("src") == "") img.setAttribute("src", "assets/images/proj-load.png")
    })

    descs.forEach((desc, i) => {
        i -= h
        if (desc.innerText == "" ){
            if (i == 0) desc.innerText = "Olá, este projeto está em desenvolvimento, volte em breve para vê-lo completo."
            else if (i != 0) desc.innerText = "Em breve.."
            h = 0
        }
        else h += 1
    })

    links.forEach((link) => {
        if (link.getAttribute("href") == "") link.style.display = 'none'
    })
}