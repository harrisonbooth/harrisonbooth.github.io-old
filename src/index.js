const windowOnLoad = () => {
  const emailContainer = document.getElementsByClassName("footer-email-container")[0]
  const emailText = document.getElementById("footer-email-text")

  emailContainer.addEventListener("click", (event) => {
    var stringTextArea = document.createElement("textarea")
    stringTextArea.style.position = "fixed"
    stringTextArea.value = "harrisonboothh@gmail.com"

    document.body.appendChild(stringTextArea)

    stringTextArea.focus()
    stringTextArea.select()
    document.execCommand("copy")

    document.body.removeChild(stringTextArea)
    emailText.innerText = "Email coped to clipboard!"

    setTimeout(() => {
      emailText.innerText = "harrisonboothh@gmail.com"
    }, 1000)
  })
}

window.addEventListener("load", windowOnLoad)