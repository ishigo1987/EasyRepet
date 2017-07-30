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
           if(targetId === "connexion")
            {
              // La fonction handleConnectionToEasyRepet() se trouve dans le fichier modules/connection.js
              handleConnectionToEasyRepet();
            }
           else if(targetId === "inscription")
            {
              // La fonction handleInscriptionToEasyRepet() se trouve dans le fichier modules/inscription.js
              handleInscriptionToEasyRepet();
            }
           else
            {
              e.stopPropagation();
              return false;
            }
         }
      },{passive:true};

 }