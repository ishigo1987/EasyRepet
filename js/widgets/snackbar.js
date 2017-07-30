// Fonction qui affiche une Snackbar
 function Snackbar(image,message, timeToHide, actionMessage, callback)
  {   
  if(allowSnackbar === true)
   {
    allowSnackbar = false;
    let execCloseSnackbar;
    const body = document.getElementById("body");
    if(actionMessage === undefined)
     {
       actionMessage = "";
     }
      let constructSnackbar = `<div id="snackbar"><img src="${image}" id="snackbarImg" />${message}<span id="actionSnackbar">${actionMessage}</span></div>`;
      body.insertAdjacentHTML("beforeend", constructSnackbar);
     const actionSnackbar = document.getElementById("actionSnackbar");
      requestAnimationFrame( () =>
       {
          snackbar.style.transition = "transform ease 0.3s";
          snackbar.style.transform = "scale3d(1,1,1)";
       }, snackbar);
     if(timeToHide !== "infinite")
     {
      setTimeout( () =>
       {
         execCloseSnackbar = new CloseSnackbar();
       },timeToHide);
     }
     function CloseSnackbar()
     {
       requestAnimationFrame( () =>
        {
          snackbar.style.transform = "scale3d(0,0,0)";
          snackbar.addEventListener("transitionend", () =>
           {   
             let removeSnackbar = body.removeChild(snackbar);
                 removeSnackbar = null;
                 allowSnackbar = true;
           });
        }, snackbar);
     }
     actionSnackbar.addEventListener("click", () =>
      {
        callback();
        execCloseSnackbar = new CloseSnackbar();
      },{passive:true});
   }
 }