function _indexFooter()
 {
     "use strict";
     let matchMedia = window.matchMedia("(min-width: 1024px)").matches;
     const footer = document.querySelector("footer");
     let createFooter;
     if(matchMedia === true)
      {
        // La ca signifie que la résolution d'ecran de l'utilisateur est supérieur ou egale a 1024px(Tablettes,desktop,laptop)
        createFooter = `
          <div id="further_information">
            <ul>
              <li><span>Conditions d'utilisation</span></li>
              <li><span>Qui sommes nous</span></li>
            </ul>
           </div>
           <div id="social_network">
            <ul>
              <li><span>2017 EasyRepet. Tous droits r&eacute;serv&eacute;s</span></li>
              <li><a href="#" target="_blank"><svg version="1.1" id="Capa_1" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 96.124 96.123" style="enable-background:new 0 0 96.124 96.123;" xml:space="preserve">
                <g>
                 <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" fill="#757575"/>
                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
              </a></li>
              <li><a href="#" target="_blank">
                <svg version="1.1" id="Capa_1" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" xml:space="preserve">
                 <g>
                  <path d="M512.002,97.211c-18.84,8.354-39.082,14.001-60.33,16.54c21.686-13,38.342-33.585,46.186-58.115   c-20.299,12.039-42.777,20.78-66.705,25.49c-19.16-20.415-46.461-33.17-76.674-33.17c-58.011,0-105.042,47.029-105.042,105.039   c0,8.233,0.929,16.25,2.72,23.939c-87.3-4.382-164.701-46.2-216.509-109.753c-9.042,15.514-14.223,33.558-14.223,52.809   c0,36.444,18.544,68.596,46.73,87.433c-17.219-0.546-33.416-5.271-47.577-13.139c-0.01,0.438-0.01,0.878-0.01,1.321   c0,50.894,36.209,93.348,84.261,103c-8.813,2.399-18.094,3.687-27.674,3.687c-6.769,0-13.349-0.66-19.764-1.888   c13.368,41.73,52.16,72.104,98.126,72.949c-35.95,28.176-81.243,44.967-130.458,44.967c-8.479,0-16.84-0.496-25.058-1.471   c46.486,29.807,101.701,47.197,161.021,47.197c193.211,0,298.868-160.062,298.868-298.872c0-4.554-0.104-9.084-0.305-13.59   C480.111,136.775,497.92,118.275,512.002,97.211z" fill="#757575"/>
                  </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
              </a></li>
            </ul>
           </div>
         `;
      }
     else
      {

      }
     footer.innerHTML = createFooter;

 }