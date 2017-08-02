const setupCopyContainer = (container, element, text) => {
  container.addEventListener("click", (event) => {
    var stringTextArea = document.createElement("textarea")
    stringTextArea.style.position = "fixed"
    stringTextArea.value = text

    document.body.appendChild(stringTextArea)

    stringTextArea.focus()
    stringTextArea.select()
    document.execCommand("copy")

    document.body.removeChild(stringTextArea)
    element.innerText = "Email copied to clipboard!"

    setTimeout(() => {
      element.innerText = "harrisonboothh@gmail.com"
    }, 1000)
  })
}

export default setupCopyContainer
