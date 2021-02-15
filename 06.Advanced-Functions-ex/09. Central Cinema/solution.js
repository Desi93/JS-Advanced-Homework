function solve() {
    const input = Array.from(document.getElementById('container').children);

    const addBtn = document.querySelector('form div button');
    addBtn.addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault();

        let name = input[0].value;
        let hall = input[1].value;
        let price = input[2].value;

        let moviesList = document.querySelector('section ul');

        if (name != '' && hall != '' && price != '' && !isNaN(price)) {
            let newLi = document.createElement('li');
            let newSpan = document.createElement('span');
            let spanText = document.createTextNode(name);
            newSpan.appendChild(spanText);

            let newStrong = document.createElement('strong');
            let strongText = document.createTextNode(`Hall: ${hall}`);
            newStrong.appendChild(strongText);
            newLi.appendChild(newSpan);
            newLi.appendChild(newStrong);
            
            let newDiv = document.createElement('div');
            let divStrong = document.createElement('strong');
            let strongContent = document.createTextNode(price);
            divStrong.appendChild(strongContent);
            
            
            let newInput = document.createElement('input');
            newInput.setAttribute('placeholder', 'Tickets Sold');
            let newBtn = document.createElement('button');
            let btnText = document.createTextNode('Archive');
            newBtn.appendChild(btnText);
            newBtn.addEventListener('click', archive);
            
            newLi.appendChild(newDiv);
            newDiv.appendChild(divStrong);
            newDiv.appendChild(newInput);
            newDiv.appendChild(newBtn);
            moviesList.appendChild(newLi);
        }

        input[0].value = '';
        input[1].value = '';
        input[2].value = '';
    }

    function archive(e) {
        let ticketsSold = e.target.parentNode.children[1];
        let row = e.target.parentNode.parentNode;
        let rowParent = row.parentNode;
        let name = e.target.parentNode.parentNode.children[0];
        let price = e.target.parentNode.children[0];

        if (ticketsSold.value != '' && !isNaN(ticketsSold.value)) {
            let archiveUl = document.querySelector('#archive ul');
            let newLi = document.createElement('li');
            let newSpan = document.createElement('span');
            let spanContent = document.createTextNode(name.textContent);
            newSpan.appendChild(spanContent);

            let newStrong = document.createElement('strong');
            let totalPrice = Number(price.textContent) * Number(ticketsSold.value);
            let strongContent = document.createTextNode(`Total amount: ${totalPrice.toFixed(2)}`);
            newStrong.appendChild(strongContent);

            let newBtn = document.createElement('button');
            let btnText = document.createTextNode('Delete');
            newBtn.appendChild(btnText);

            newBtn.addEventListener('click', deleteMovie);

            newLi.appendChild(newSpan);
            newLi.appendChild(newStrong);
            newLi.appendChild(newBtn);
            archiveUl.appendChild(newLi);
            rowParent.removeChild(row);
        }
    }

    function deleteMovie(e) {
        let row = e.target.parentNode;
        let rowParent = row.parentNode;
        rowParent.removeChild(row);
    }

    const clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', (e) => {
        let ul = e.target.previousElementSibling;
        ul.innerHTML = '';
        
    });
}
