function handleInscriptionToEasyRepet()
 {
     "use strict";
      let createPopupContain = `
       <div id="area_inscription" class="first_item_inside_popup">
       <div id="intro_inscription_text">Cr&eacute;ez votre compte en 1 minute chrono</div>
       <input type="text" id="name_user_inscription" placeholder="Entrez votre nom" />
       <input type="text" id="surname_user_inscription" placeholder="Entrez votre prenom" />
       <input type="tel" id="phone_user_inscription" placeholder="Entrez votre num&eacute;ro de telephone ex:699999999" />
       <input type="password" id="password_user_inscription" placeholder="Entrez votre mot de passe" />
       <input type="password" id="verif_password_user_inscription" placeholder="Confirmez votre mot de passe" />
       <span id="inscription_btn">S'inscrire</span>
       </div>
       <div id="area_forgotten_password" class="first_item_inside_popup" style="background:red;text-align:center;border:2px solid yellow;">kdfkdnfnd
       </div>
        `;
      // la fonction Popup(params) se trouve dans le fichier js/widgets/popup.js
      let returnContainOverlayPopup = new Popup("Inscription", createPopupContain);
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
                  else if(targetId === "inscription_btn")
                   {
                      return handleFormInscription();
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
 function handleFormInscription()
  {
     const name_user_inscription_value = document.getElementById("name_user_inscription").value;
     const surname_user_inscription_value = document.getElementById("surname_user_inscription").value;
     const phone_user_inscription_value = document.getElementById("phone_user_inscription").value;
     const password_user_inscription_value = document.getElementById("password_user_inscription").value;
     const verif_password_user_inscription_value = document.getElementById("verif_password_user_inscription").value;
     let regexNumber = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
     let verifFirstDigit = phone_user_inscription_value.charAt(0);
 	   let verifLengthNumber = phone_user_inscription_value.length;
     let execSnackbar;
     if(name_user_inscription_value === "" || surname_user_inscription_value === "" || phone_user_inscription_value === "" || password_user_inscription_value === "" || verif_password_user_inscription_value === "")
        {
          execSnackbar = new Snackbar("icons/snackbarInfo.svg","Veuillez remplir tout les champs", 1500);
        }
     else if(!regexNumber.test(phone_user_inscription_value) || verifFirstDigit !== "6" || verifLengthNumber !== 9)
      {
         execSnackbar = new Snackbar("icons/snackbarInfo.svg","Veuillez entrer un num&eacute;ro correct", 1500);
      }
     else if(password_user_inscription_value !== verif_password_user_inscription_value)
      {
         execSnackbar = new Snackbar("icons/snackbarInfo.svg","Les mots de passe ne correspondent pas", 1500);
      }
     else
      {
        let urlToSend = "https://www.easyrepet.com/api/apiEntryPoint.php";
        let formdata = new FormData();
            formdata.append("request_name", "Inscription");
            formdata.append("nom", name_user_inscription_value);
            formdata.append("prenom", surname_user_inscription_value);
            formdata.append("telephone", phone_user_inscription_value);
            formdata.append("mot_de_passe", password_user_inscription_value);
            formdata.append("confirmation_mot_de_passe", verif_password_user_inscription_value);
        let xhrInscription = new XMLHttpRequest();
            xhrInscription.addEventListener("loadstart",()=>
             {
                 execSnackbar = new Snackbar("icons/snackbarInfo.svg","Envoi du formulaire en cours", 1000);
             });
            xhrInscription.addEventListener("load", ()=>
             {
                let response = JSON.parse(xhrInscription.responseText);
                console.log(response);
             });
            xhrInscription.addEventListener("error",()=>
             {
               
             });
            xhrInscription.responseType = "text";
            xhrInscription.open('POST', urlToSend, true);
            xhrInscription.send(formdata);

      }
  }