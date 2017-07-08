// Fonction de fermeture de popup avec la croix ou bien toute action autre que le boutton echap
function ClosePopup(domNodeRemovePopUp)
 {
    const body = document.getElementById("body");
          body.style.overflow = "visible";
    // on annule l'evenement keydown sur le document pour liberer de la memoire
    document.onkeydown = null;
    let removePopUp = body.removeChild(domNodeRemovePopUp);
        removePopUp = null;
 }
// Cette fonction sert a fermer une popUp avec le boutton escape du clavier
function ClosePopUpWithEscKeyboard(domNodeRemovePopUp)
 {
    document.onkeydown = function(e)
      {
        if(e.which === 27 || e.keyCode === 27)
          {
            let execClosePopUp =  new ClosePopup(domNodeRemovePopUp);
          } 
      },{passive:true};
 }