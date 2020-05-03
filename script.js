function onLoadData() {
    fetch("https://api.covid19india.org/data.json")
        .then((response) => {
            return response.json();
        }).then((data) => {
            createDiv(data);
        })
}

function createDiv(data) {
    var mainDiv = document.getElementById('infoDiv')
    data.statewise.forEach(element => {
        mainDiv.appendChild(createCard(element));
    });
}

function createCard(element){
    var divCard = document.createElement('div');
    divCard.className = "col-sm-12 col-lg-4 col-md-4 border border-secondary rounded m-1 bg-warning";
    divCard.appendChild(headingDiv(element.state));
    divCard.appendChild(horizontalLine());
    var divActive = createDivElement();
    divActive.appendChild(createSpanElement("ACTIVE CASE"));
    divActive.appendChild(createSpanElement(element.active));
    divCard.appendChild(divActive);
    divCard.appendChild(horizontalLine());
    var divConfirm = createDivElement();
    divConfirm.appendChild(createSpanElement("CONFIRMED CASE"));
    divConfirm.appendChild(createSpanElement(element.confirmed));
    divCard.appendChild(divConfirm)
    divCard.appendChild(horizontalLine());
    var divRecover = createDivElement();
    divRecover.appendChild(createSpanElement("RECOVERED CASE"));
    divRecover.appendChild(createSpanElement(element.recovered));
    divCard.appendChild(divRecover);
    divCard.appendChild(horizontalLine());
    var divDeath = createDivElement();
    divDeath.appendChild(createSpanElement("DEATH"));
    divDeath.appendChild(createSpanElement(element.deaths));
    divCard.appendChild(divDeath);
    divCard.appendChild(horizontalLine());
    divCard.appendChild(updateTimeDiv(element.lastupdatedtime));
    return divCard;
}


function horizontalLine(){
    var hrline = document.createElement('hr');
    return hrline;
}


function headingDiv(data){
    var divHead = document.createElement('div');
    divHead.className = "row d-flex justify-content-center text-danger font-weight-bold";
    divHead.innerHTML = data;
    return divHead;
}


function createDivElement(){
    var divElement = document.createElement('div');
    divElement.className = "row d-flex justify-content-between text-black m-1 font-italic";
    return divElement;
}


function createSpanElement(data){
    var spanElement = document.createElement('span');
    spanElement.innerHTML = data;
    return spanElement;
}

function updateTimeDiv(data){
    var divTime = document.createElement('div');
    divTime.className = "row d-flex justify-content-end text-danger font-weight-normal m-1";
    divTime.innerHTML = data;
    return divTime;
}