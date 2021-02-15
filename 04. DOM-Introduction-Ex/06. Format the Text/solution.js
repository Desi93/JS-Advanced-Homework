function solve() {
  let output = document.getElementById('output');
  let text = document.getElementById('input');
  let content = text.value;
  let paragraph = Array.from(content.split('.'));
  let counter = 0;
  let currP = document.createElement('p');

  for(let i = 0; i < paragraph.length; i++){
    counter++;
    if(paragraph[i] != ''){
      currP.innerText += paragraph[i];
    }
    if(counter == 3){
      output.appendChild(currP);
      currP = document.createElement('p');
      counter = 0;
    }
  }

  output.appendChild(currP);
}