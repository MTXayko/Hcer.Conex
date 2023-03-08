var reqConCounter = 2;
var yourConCounter = 500;

function changeProfile() {
    let profileNameElement = document.querySelector('.article main header h2');
    profileNameElement.innerText = 'Garfield';
}

function deleteConReq(idx) {
    let element = document.querySelector('#req'+idx);
    element.remove();
    let cirleElement = document.querySelector('.circle');
    cirleElement.innerText = --reqConCounter;
}

function addConnection(idx) {
    deleteConReq(idx);
    let ovalElement = document.querySelector('.oval');
    ovalElement.innerText = ++yourConCounter + '+';
    console.log(ovalElement.innerText);
}