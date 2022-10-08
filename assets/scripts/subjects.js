function defaultSubject(){
    const contents = document.querySelectorAll('.about')
    contents.forEach((cont, i) => {if (i != 0) cont.style.display = "none"})
    
    document.querySelector('.subj').style.background = "var(--pink)"
}

function subjectContent(btn){
    const contents = document.querySelectorAll('.about')
    const subjects = document.querySelectorAll('.subj')

    contents.forEach((cont) =>{
        if (cont.id == (btn.id + "-content")) cont.style.display = ""
        else cont.style.display = "none"
    })
    subjects.forEach((subj) =>{
        if (subj != btn) subj.style.background = ""
        else subj.style.background = "var(--pink)"
    })
}