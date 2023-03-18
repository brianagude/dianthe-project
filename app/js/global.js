document.addEventListener("DOMContentLoaded", function () {

  // HEADER TOGGLE ==============================================================
  const checkbox = document.getElementById('checkbox')
  const mainContent = document.getElementById("mainContent");

  checkbox.addEventListener('change', (e) => {
    mainContent.classList.toggle("slide");
  })

  // CAROUSEL TEXT ==============================================================
  const carouselText = [
    {text: "Welcome to the Dianthe Project!", color: "#be4310"},
    {text: "( pronounced dye / ANN / thee )", color: "#82b8d4"},
    {text: "Our mission is to provide single mothers that are living on the margins with the resources, training, and support they need to pursue careers in the tech industry. ", color: "#120f02"},
    {text: "We believe that by empowering these women to acquire in-demand skills and secure stable, well-paying jobs, we can help them build a brighter future for themselves and their families.", color: "#120f02"},
    {text: "This summer, we will be opening our doors to moms in Atlanta, GA.", color: "#e3b722"},
    {text: "Please join our mailing list or follow us on Instagram to learn more.", color: "#120f02"}
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

  // DETECT WHICH BROWSER IS BEING USED ================================
  function fnBrowserDetect(){
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
      browserName = "chrome";
    }else if(userAgent.match(/firefox|fxios/i)){
      browserName = "firefox";
    }  else if(userAgent.match(/safari/i)){
      browserName = "safari";
    }else if(userAgent.match(/opr\//i)){
      browserName = "opera";
    } else if(userAgent.match(/edg/i)){
      browserName = "edge";
    }else{
      browserName="No browser detection";
    }
    
    document.querySelector("body").classList.add(browserName);         
  }

  fnBrowserDetect()
});