document.addEventListener("DOMContentLoaded", () =>
 {
   "use strict";
  if(localStorage.navigatorCheckVersion === undefined)
    {
    var navigatorUA = navigator.userAgent;
    var isChromium = !!window.chrome;
    var isFirefox = !!window.sidebar;
    var isSafari = /constructor/i.test(window.HTMLElement);
    // let isEdge =document.documentMode || /Edge/.test(navigator.userAgent);
    var linkDownload;
    var updateMessageTemplate = "";
    var execCreateMessage;
    var updateMessage = document.getElementById("updateMessage");
    if(isChromium )
     {
       var regxChrome = /Chrom(e|ium)\/([0-9]+)\./;
       var chromeVersion = navigatorUA.match(regxChrome)[2];
       if(chromeVersion < 53)
        {
          execCreateMessage= new CreateMessage('Chrome ou Chromium', 'https://www.google.com/chrome/browser/mobile/index.html');
        }
       else
         {
          localStorage.navigatorCheckVersion = btoa("true");
          // J'utilise window.location.href pour pallier au fait qu'il faille que l'utilisateur recharge la page une nouvelle fois pour que le 
          //localStorage detecte que le navigateur est bon
          window.location.href = "index.php";
         }
     }
     else if(isFirefox)
     {
        var regxFirefox = /Firefox\/([0-9]+)\./;
        var firefoxVersion = navigatorUA.match(regxFirefox)[1];
        if(firefoxVersion < 45)
         {
          execCreateMessage = new CreateMessage('Firefox', 'https://www.mozilla.org/fr/firefox/new/');
         }
        else
         {
          localStorage.navigatorCheckVersion = btoa("true");
          // J'utilise window.location.href pour pallier au fait qu'il faille que l'utilisateur recharge la page une nouvelle fois pour que le 
          //localStorage detecte que le navigateur est bon
          window.location.href = "index.php";
         }
     }
    else if(isSafari === true)
     {
      execCreateMessage = new CreateMessage('Safari', 'https://support.apple.com/fr-cm/HT204416');
     }
    else if(isSafari === false)
     {
      localStorage.navigatorCheckVersion = btoa("true");
      // J'utilise window.location.href pour pallier au fait qu'il faille que l'utilisateur recharge la page une nouvelle fois pour que le 
      //localStorage detecte que le navigateur est bon
      window.location.href = "index.php";
     }
    else
     {
       execCreateMessage = new CreateMessage('Navigateur', 'https://www.google.com/chrome/browser/desktop/');
       return false;
     }
    
    function CreateMessage(nomNavigateur, linkDownload)
     {
        var updateMessage = document.getElementById("updateMessage");
        updateMessageTemplate += "<span>La version de "+nomNavigateur+" que vous utilisez est obsol&eacute;te veuillez la mettre a jour</span><a href="+linkDownload+" target='_blank'>Mettre a jour "+nomNavigateur+"</a>";
        updateMessage.innerHTML = updateMessageTemplate;
        updateMessage.style.display = "block";
     }

   }
  else
   {
     // Le test de version de navigateur a été passé avec succes on peut initialiser les fonctions internes de Saar.com
     _displayHtmlBody();
      // La fonction _indexHeader() se trouve dans le fichier js/uiComposite/indexHeader.js
     _indexHeader();
     // La fonction _handleSlider() se trouve dans le fichier js/slider.js
     _handleSlider();
     // La fonction _indexFooter se trouve dans le fichier js/uiComposite/indexFooter.js
     _indexFooter();
   }
  // Fonction qui rends visible le contenu HTML
  function _displayHtmlBody()
  {
   const wrapperhtml = document.getElementById("wrapperhtml");
         wrapperhtml.style.display = "block";
  }
 },{passive:true,capture:false});