function create(words) {
   const content = document.getElementById('content');

   for(let i = 0; i < words.length; i++){
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = words[i];
      divElement.appendChild(pElement);
      content.appendChild(divElement);
   }

   content.addEventListener('click', function(e){
      if(e.target.tagName == 'DIV' || e.target.tagName == 'P'){
         const tar = e.target.children[0] || e.target;
         const isVisible = tar.style.display == 'block';

         tar.style.display = isVisible ? 'none' : 'block';
      }
   });
}