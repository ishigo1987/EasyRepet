function Popup(title,contenuPopup,typeOfRequest)
 {
     "use strict";
     const body = document.getElementById("body");
     const constructPopUp = `
        <div id="overlay">
              <div class="popup_widget animated bounceIn" id="popup_widget">
                <div class="headingPopup">
                  <a href="#close" class="closePopup" id="closePopup"></a>
                  <div id="titlePopup">${title}</div>
                </div>
                <div id="wrapperBodyPopup">${contenuPopup}</div>
            </div>
     `;
    body.insertAdjacentHTML("beforeend", constructPopUp);
    const overlay = document.getElementById("overlay");
    let execClosePopup;
    const popup_widget = document.getElementById("popup_widget");
          popup_widget.onclick = (e) =>
           {
             if(e.target !== e.currentTarget)
              {
                  let targetId = e.target.id;
                  if(targetId === "closePopup")
                   {
                     // la fonction ClosePopup(param) se trouve dans le fichier js/helpers_public_functions/closePopup.js
                     execClosePopup = new ClosePopup(overlay);
                   }
                  else
                   {
                       e.stopPropagation();
                       return false;
                   }
              }
           },{passive:true};
    // la fonction ClosePopUpWithEscKeyboard(param) se trouve dans le fichier js/helpers_public_functions/closePopup.js
    new ClosePopUpWithEscKeyboard(overlay);
 }