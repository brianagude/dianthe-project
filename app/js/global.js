document.addEventListener("DOMContentLoaded", function () {
  // const iframe = document.getElementById('toast-3b9f5dd9-6a47-4827-a65e-0e0e8e97fb18')
  // const funraise = document.getElementById('funraise-btn')


  const checkbox = document.getElementById('checkbox')
  const mainContent = document.getElementById("mainContent");

  checkbox.addEventListener('change', (e) => {
    mainContent.classList.toggle("slide");
  })

  const carouselText = [
    {text: "You have reached the Dianthe Project.", color: "#be4310"},
    {text: "( pronounced dye / ANN / thee )", color: "#82b8d4"},
    {text: "We are a non-profit organization that inspires, supports, and trains single black mothers living on the margins to pursue professional and entrepreneurial careers in the tech industry.", color: "#120f02"},
    {text: "This summer, we will be opening our doors to moms in Atlanta, GA.", color: "#120f02"},
    {text: "Please join our mailing list or follow us on Instagram to learn more.", color: "#e3b722"}
  ]

  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }

  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }

  async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
  }

  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
    $('.input-cursor').css('background-color', color);
  }

  carousel(carouselText, '#sentence')
});