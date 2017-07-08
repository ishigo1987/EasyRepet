function _indexHeader()
 {
     "use strict";
     let matchMedia = window.matchMedia("(min-width: 1024px)").matches;
     const header = document.querySelector("header");
     let createHeader;
     if(matchMedia === true)
      {
        // La ca signifie que la résolution d'ecran de l'utilisateur est supérieur ou egale a 1024px(Tablettes,desktop,laptop)
        createHeader = `
          <img src="img/logo.png" id="logo" />
          <div id="user_area">
            <span id="connexion">Connexion</span>
            <span id="inscription">Inscription</span>
          </div>
         `;
      }
     else
      {

      }
     header.innerHTML = createHeader;
     const user_area = document.getElementById("user_area");
     user_area.onclick = (e) =>
      {
        if(e.target !== e.currentTarge)
         {
           let targetId = e.target.id;
           let execPopup;
           let createPopupContain;
           if(targetId === "connexion")
            {
              createPopupContain = `
                 <div id="intro_connection_text">Connectez vous sur votre espace utilisateur EasyRepet</div>
                 <input type="tel" id="phone_user_connection" placeholder="Entrez votre numéro de telephone" />
                 <input type="password" id="phone_user_connection" placeholder="Entrez votre mot de passe" />
                 <span id="forgotten_password">Mot de passe oubli&eacute;?</span>
                 <span id="connection_btn">Connexion</span>
               `;
              // la fonction Popup(params) se trouve dans le fichier js/widgets/popup.js
              execPopup = new Popup("Connexion", createPopupContain,null);
            }
           else if(targetId === "inscription")
            {

            }
           else
            {
              e.stopPropagation();
              return false;
            }
         }
      },{passive:true};

 }