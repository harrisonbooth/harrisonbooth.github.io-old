import setupCopyElement from "./emailFooter";

const windowOnLoad = () => {
  const emailContainer = document.getElementsByClassName("footer-email-container")[0];
  const emailText = document.getElementById("footer-email-text");

  setupCopyElement(emailContainer, emailText, "harrisonboothh@gmail.com");
}

window.addEventListener("load", windowOnLoad);
