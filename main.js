let input = document.querySelector(`input`)
let saveInputBtn = document.querySelector(`.saveInput`)
let saveTabBtn = document.querySelector(`.saveTab`)
let deleteBtn = document.querySelector(`.delete`)
let ul = document.querySelector(`ul`)
let links = [];
let counter = 0; 


if (localStorage.getItem("links")) {
    links = JSON.parse(localStorage.getItem("links"));
    links.forEach(link => createLi(link));
}

input.addEventListener('keydown', (e) => {
    if (e.code == "Enter")
        saveInputBtn.click()
})

saveInputBtn.addEventListener('click', () => {
    if (input.value !== "") {
        createLi(input.value)
        links.push(input.value)
        // localStorage.setItem(`links ${counter}:`, links)
        localStorage.setItem("links", JSON.stringify(links))
        counter++
        input.value = ""
    }
})

saveTabBtn.addEventListener('click', () => {
    createLi(window.location.href)
    links.push(window.location.href)
    // localStorage.setItem(`links ${counter}:`, links)
    localStorage.setItem("links", JSON.stringify(links))
    counter++
})

deleteBtn.addEventListener('dblclick', () => {
    ul.innerHTML = ""
    localStorage.clear()
})

function createLi(link) {
    let li = document.createElement(`li`)
    let span = document.createElement(`span`)
    let a = document.createElement(`a`)
    span.textContent = "Link:"
    a.setAttribute('href', link)
    a.setAttribute('target', '_blank');
    a.textContent = link
    li.appendChild(span)
    li.appendChild(a)
    ul.appendChild(li)
}

function saveLinks() {
    localStorage.setItem("links", JSON.stringify(links));
}
