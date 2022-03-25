const $buttonAdd = document.querySelector("#add");
const $buttonRemove = document.querySelector("#remove");
const $div = document.querySelector('#input-form');

function AddClick(event) {
    event.preventDefault();
    var br = document.createElement("br");

    var novoEndereco = document.createElement("input");
    novoEndereco.setAttribute("type", "text");
    novoEndereco.setAttribute("name", "address");
    novoEndereco.setAttribute("required", "");
    novoEndereco.setAttribute("placeholder", "Digite um endereço");

    var buttonRemv = document.createElement("button");
    var text = document.createTextNode(" - ");
    buttonRemv.appendChild(text);
    buttonRemv.setAttribute("id", "remove");
    buttonRemv.setAttribute("type", "button");

    buttonRemv.onclick = RemoveClick;
    $div.appendChild(novoEndereco);
    $div.appendChild(buttonRemv);
    $div.appendChild(br);
}

function RemoveClick(event) {
    event.preventDefault();
    $div.removeChild(this.previousElementSibling);
    $div.removeChild(this.previousElementSibling);
    $div.removeChild(this);

}

$buttonAdd.addEventListener("click", AddClick);
$buttonRemove.addEventListener("click", RemoveClick);