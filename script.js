var data = null;

(function () {
    fetch("https://api.covid19india.org/data.json")
        .then((response) => {
            return response.json();
        }).then((jsondata) => {
            data = jsondata;
        })
})();


function createDiv() {
    var dashBoard = document.getElementById('dashboardStyle');
    dashBoard.innerHTML = "<u>Click here to View as Table</u>";
    dashBoard.className = "row d-flex justify-content-center text-primary"
    dashBoard.setAttribute('onclick','createTable()');
    dashBoard.style = "cursor:pointer";
    var mainDiv = document.getElementById('infoDiv')
    mainDiv.innerHTML = "";
    mainDiv.className ="row d-flex justify-content-between"
    data.statewise.forEach(element => {
        mainDiv.appendChild(createCard(element));
    });
    
}


function createCard(element){
    var divCard = document.createElement('div');
    divCard.className = "col-sm-12 col-lg-4 col-md-4 border border-secondary rounded m-1 bg-white";
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
    divHead.className = "row d-flex justify-content-center text-danger text-uppercase m-2";
    var heading = document.createElement('h4');
    heading.innerHTML = data;
    divHead.appendChild(heading);
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
    divTime.className = "row d-flex justify-content-end text-danger font-weight-normal m-1 p-1";
    divTime.innerHTML = data;
    return divTime;
}


function createTable() {
    var dashBoard = document.getElementById('dashboardStyle');
    dashBoard.innerHTML = "<u>Click here to View as Card</u>";
    dashBoard.className = "row d-flex justify-content-center text-primary"
    dashBoard.setAttribute('onclick','createDiv()');
    dashBoard.style = "cursor:pointer";
    var mainDiv = document.getElementById('infoDiv')
    mainDiv.innerHTML = "";
    var tdKeys = ["active","confirmed","recovered","deaths","lastupdatedtime"]
    // var mainDiv = document.getElementById('infoDiv');
    mainDiv.className = "table-responsive";
    var table = document.createElement('table');
    table.className = "table table-bordered table-light table-striped";
    var thead = document.createElement('thead');
    thead.className = "bg-warning"
    var th1 = document.createElement('th');
    th1.innerHTML = 'STATE';
    thead.appendChild(th1);
    var th2 = document.createElement('th');
    th2.innerHTML = 'ACTIVE';
    thead.appendChild(th2);
    var th3 = document.createElement('th');
    th3.innerHTML = 'CONFIRMED';
    thead.appendChild(th3);
    var th4 = document.createElement('th');
    th4.innerHTML = 'RECOVERED';
    thead.appendChild(th4);
    var th5 = document.createElement('th');
    th5.innerHTML = 'DEATH';
    thead.appendChild(th5);
    var th6 = document.createElement('th');
    th6.innerHTML = 'LAST UPDATED';
    thead.appendChild(th6);
    table.appendChild(thead);
    var tBody = document.createElement('tbody');
    tBody.id = "tableInfo";
    data.statewise.forEach(element => {
        console.log(element)
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.setAttribute('scope','row')
        th.className = "text-uppercase"
        th.innerHTML = element.state;
        tr.appendChild(th)
        tdKeys.forEach((key)=>{
            var td = document.createElement('td');
            td.innerHTML = element[key];
            tr.appendChild(td)
        })
        tBody.appendChild(tr);
    });
    table.appendChild(tBody);
    mainDiv.appendChild(table);
}

function createTD(tddata){
    console.log(tddata)
    var td = document.createElement('td');
    td.innerHTML = tddata;
}