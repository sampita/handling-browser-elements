console.log("Life is beautiful")

const inputField = document.querySelector(".textInput")

const articleEl1 = document.getElementById("firstArticleEl")
const articleEl2 = document.getElementById("secondArticleEl")


let mirrorText = function (event) {
    articleEl1.textContent = inputField.value.style.wordWrap
    articleEl2.textContent = inputField.value.style.wordWrap
}

inputField.addEventListener("keyup", mirrorText)




