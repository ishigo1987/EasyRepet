function Popup(title,contenuPopup)
 {
     "use strict";
     const body = document.getElementById("body");
     const constructPopUp = `
        <div id="overlay">
              <div class="popup_widget animated bounceIn" id="popup_widget">
                <div class="headingPopup">
                  <span class="closePopup" id="closePopup"></span>
                  <div id="titlePopup">${title}</div>
                </div>
                <div id="wrapperBodyPopup">${contenuPopup}</div>
            </div>
     `;
    body.insertAdjacentHTML("beforeend", constructPopUp);
    const overlay = document.getElementById("overlay");
    return overlay;
 }