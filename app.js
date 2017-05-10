/* 2010 US CENSUS DATA */
var statePopulation = [[4779736, 'Alabama'], [710231, 'Alaska'], [6392017, 'Arizona'], [2915918, 'Arkansas'], [37253956, 'California'], [5029196, 'Colorado'], [3574097, 'Connecticut'], [3574097, 'Delaware'], [601723, 'District of Columbia'], [18801310, 'Florida'], [9687653, 'Georgia'], [1360301, 'Hawaii'], [1567582, 'Idaho'], [12830632, 'Illinois'], [6483802, 'Indiana'], [3046355, 'Iowa'], [2853118, 'Kansas'], [4339367, 'Kentucky'], [4533372, 'Louisiana'], [1328361, 'Maine'], [5773552, 'Maryland'], [6547629, 'Massachusetts'], [9883640, 'Michigan'], [5303925, 'Minnesota'], [2967297, 'Mississippi'], [5988927, 'Missouri'], [989415, 'Montana'], [1826341, 'Nebraska'], [2700551, 'Nevada'], [1316470, 'New Hampshire'], [8791894, 'New Jersey'], [2059179, 'New Mexico'], [19378102, 'New York'], [9535483, 'North Carolina'], [672591, 'North Dakota'], [11536504, 'Ohio'], [3751351, 'Oklahoma'], [3831074, 'Oregon'], [12702379, 'Pennsylvania'], [1052567, 'Rhode Island'], [4625364, 'South Carolina'], [814180, 'South Dakota'], [6346105, 'Tennessee'], [25145561, 'Texas'], [2763885, 'Utah'], [625741, 'Vermont'], [8001024, 'Virginia'], [6724540, 'Washington'], [1852994, 'West Virginia'], [5686986, 'Wisconsin'], [563626, 'Wyoming'], [3725789, 'Puerto Roci']];

/* GLOBAL VARIABLES FOR DOM ELEMENTS */
var dropDown = document.getElementById('dropdown_content');
var enteredCity = document.getElementById('enteredCity');

/* KEY EVENT LISTENTER */
var n = 0;
window.addEventListener("keyup", function(event) {
    event.preventDefault();
    var numberOfItems = dropDown.childNodes.length;
    if (numberOfItems > 1) {
        for (var i = 1; i < numberOfItems; i++) {
            dropDown.childNodes[i].classList.remove('keySelected');
        }
    }
    switch (event.key) {
        case "ArrowDown":
            n++;
            if (n === 0) {
                enteredCity.value = '';
            } else if (n > (dropDown.childNodes.length - 1)) {
                n = 1;
                enteredCity.value = dropDown.childNodes[1].innerHTML;
                dropDown.childNodes[1].className += ' keySelected';
            } else {
                enteredCity.value = dropDown.childNodes[n].innerHTML;
                enteredCity.className += ' capitalize';
                dropDown.childNodes[n].className += ' keySelected';
            }
            break;
        case "ArrowUp":
            n--;
            if (n === 0) {
                enteredCity.value = '';
            } else if (n <= 0) {
                enteredCity.value = '';
                n = 0;
            } else {
                enteredCity.value = dropDown.childNodes[n].innerHTML;
                enteredCity.className += ' capitalize';
                dropDown.childNodes[n].className += ' keySelected';
            }
            break;
        case "Enter" :
            listStateAndPop();
            break;
        default :
            n = 0;
            autofillState();
    }
});

/* USE MOUSE TO PICK STATE */
    function clickState(pickedState) {
    enteredCity.value = pickedState;
    enteredCity.className += ' capitalize';
    dropDown.className += ' removeBorder';
    dropDown.innerHTML = '';
}

/* AUTOFILL */
function autofillState() {
    dropDown.innerHTML = ' ';
    dropDown.classList.add('removeBorder');
    var enteredInfo = enteredCity.value.toLowerCase();
        if (enteredInfo.length > 1) {
            for (var i = 0; i < statePopulation.length; i++) {
                var listStates = statePopulation[i][1].toLowerCase();
                var results = listStates.search(enteredInfo);
                if (results > -1) {
                    dropDown.innerHTML += "<li class='added' onclick='clickState(\"" + statePopulation[i][1] + "\");'>" + statePopulation[i][1] + "</li>";
                    dropDown.classList.remove('removeBorder');
                    dropDown.className += ' addBorder';
                    dropDown.className += ' capitalize';
            }
        }
    }
 }

/* LISTS STATE AND JOINS POPULATION */
function listStateAndPop() {
    var stateAndPop = getStateAndPop();
    var newNode = document.createElement("P"); textNode = document.createTextNode('You chose '); newNode.appendChild(textNode);
    newNode.innerHTML += '<span class="capitalize">' + stateAndPop[0] + '</span><br /> pop. of ' + stateAndPop[1];
    var list = document.getElementById('section_two_child'); list.insertBefore(newNode, list.childNodes[0]);
    enteredCity.value = '';
    dropDown.className += ' removeBorder';
    dropDown.innerHTML = '';
    enteredCity.classList.remove('capitalize');
    /* GETS STATE AND FINDS POPULATION */
    function getStateAndPop() {
       var enteredText = [];
       enteredText[0] = enteredCity.value;
       var pickedCity = enteredText[0].toString().toLowerCase();
       for (var i = 0; i < statePopulation.length; i++) {
           var listStates = statePopulation[i][1].toLowerCase();
           var results = listStates.search(pickedCity);
           if (enteredText[0] !== '' && results > -1) {
                var noCommaNumber = statePopulation[i][0];
                enteredText[1] = noCommaNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return enteredText;
                console.log(enteredText[1]);
            } else {
                enteredText[1] = '- not found';
            }
       }
       return enteredText;
   }
}