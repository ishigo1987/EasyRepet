function handleConnectionToEasyRepet()
 {
     "use strict";
     let createPopupContain = `
       <div id="area_connection" class="first_item_inside_popup">
       <div id="intro_connection_text">Connectez vous sur votre espace utilisateur EasyRepet</div>
       <input type="tel" id="phone_user_connection" placeholder="Entrez votre numéro de telephone" />
       <input type="password" id="phone_user_connection" placeholder="Entrez votre mot de passe" />
       <span id="forgotten_password">Mot de passe oubli&eacute;?</span>
       <span id="connection_btn">Se connecter</span>
       </div>
       <div id="area_forgotten_password" class="first_item_inside_popup" style="background:red;text-align:center;border:2px solid yellow;">kdfkdnfnd
       </div>
        `;
      // la fonction Popup(params) se trouve dans le fichier js/widgets/popup.js
      let returnContainOverlayPopup = new Popup("Connexion", createPopupContain);
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
                  else if(targetId === "forgotten_password")
                   {

                   }
                  else if(targetId === "connection_btn")
                   {
                      return handleFormConnection();
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
 // Fonction de gestion du formulaire de connexion a EasyRepet
 function handleFormConnection()
  {
      alert("you");
  }