# MAKeD: World of Beers

## Summary
Some text some text. Some more text here.

### appendItemsToPage(beerArr)
Function that loops through an array and uses jQuery to create and append HTML elements to an existing div element.
```
function appendItemsToPage(beerArr) {
    $('#list-of-beers').empty();

    for(var i = currentPage*54 ; i < currentPage*54 +54 && i < beerArr.length; i++) {

        if (beerArr[i].styleId == 1){
            beerArr[i].styleId = "Classic English-Style Pale Ale";
        }
        if (beerArr[i].styleId == 2){
            beerArr[i].styleId = "English-Style Pale Ale";
        }
        if (beerArr[i].styleId == 3){
            beerArr[i].styleId = "Ordinary Bitter";

        var beerCard = "<div id=beer-card" + i + " class='col-md-2 beer-card'></div>";
        var beerContent = "<div class=beer-content" + i + "></div>";

        var nameContent = "<div id=name" + i + "></div>";
        var name = "<h5 class='name-content' >" + beerArr[i].name + "</h5>";

        var imageContent = "<div id=image" + i + " class='beer-image'></div>";
        var image = "<img id='beer-image' src='./images/beer.png'>"

        var styleContent = "<div id=style" + i + " class='style'></div>";
        var styleHeader = "<span class='style-header'>  Style: </span>";
        var style = "<span>" + beerArr[i].styleId + "</span>";

        var abvContent = "<div id=abv" + i + " class='abv'></div>";
        var abvHeader = "<span class='abv-header'>  ABV: </span>";
        var abv = "<span>" + beerArr[i].abv + "</span>";

        $('#list-of-beers').append(beerCard);
        $('#beer-card' + i).append(beerContent);        

        $('.beer-content' + i).append (nameContent);
        $('#name' +i).append(name);

        $(".beer-content" + i).append (imageContent);
        $("#image" + i).append(image);

        $('.beer-content' + i).append (styleContent);
        $('#style' +i).append(styleHeader);
        $('#style' +i).append(style);
       
        $('.beer-content' + i).append (abvContent);
        $('#abv' +i).append(abvHeader);
        $('#abv' +i).append(abv);
    }        
};
```

### fullLoad()
GET Request as a function retrieving all beer objects from the database as an array.
```
var fullLoad = function () {
    $.ajax({
        url: beerApi,
        method: "GET"
    })
    .done(function(response){
        beerArr = response;
        appendItemsToPage(beerArr)
    });
};
```

### search()
GET Request as a function using 'name', 'minAbv', and 'maxAbv' as query parameters. Search request is triggered by a 'mouseup' event or a 'keyup' with setTimeout() method.
```
var globalTimeout;

var search = function() {
    clearTimeout(globalTimeout);
    var searchText = $('.search-text-box').get(0).value;
    var minAbv = $('#minAbv').get(0).value;
    var maxAbv = $('#maxAbv').get(0).value;
    if (searchText != "") {
        $.ajax({
            url: beerApi + "?name=" + searchText + "&minAbv=" + minAbv + "&maxAbv=" + maxAbv,
            method: 'GET',
        })
        .done(function(response) {
            beerArr = response;
            appendItemsToPage(beerArr);
        });
    } 
    else {
        $.ajax({
            url: beerApi + "?minAbv=" + minAbv + "&maxAbv=" + maxAbv,
            method: 'GET',
        })
        .done(function(response) {
            beerArr = response;
            appendItemsToPage(beerArr);
        });
    }    
};

var keyUpEvent = function() {
    if ($(".search-text-box").get(0).value.length > 2 || ($(".search-text-box").get(0).value == "")) {
        if (globalTimeout != null) clearTimeout(globalTimeout); {
        globalTimeout = setTimeout(search, 750);
        }
    } 
};

$("#search-button").mouseup(search);

$(".search-text-box").keyup(keyUpEvent);
```

### loadNewBeer()
POST Request as a function to add a new beer object to the database.
```
var newBeerName = "";
var newBeerAbv = "";

function loadNewBeer(event) {
    var newBeerObj = {
        'breweryId': 0,
        'name': newBeerName,
        'catId': 1,
        'styleId': -1,
        'abv': newBeerAbv,
        'ibu': 0,
        'srm': 0,
        'upc': 0,
        'filepath': '',
        'descript': '',
        'addUser': 0,
        'lastMod': '2000-01-01T00:00:00'  
    };
    $.ajax({
        url: beerApi,
        type: "POST",
        data: JSON.stringify(newBeerObj),
        contentType: "application/json",
    })
    .done(function(response) {
        newPageLoad();
        $('#newBeerName')[0].value = "";
        $('#newBeerAbv')[0].value = "";
    })
};

$('.submit-new-beer').mouseup(function(event) {
    newBeerName = $('#newBeerName')[0].value;
    newBeerAbv = $('#newBeerAbv')[0].value;    
    loadNewBeer();   
});
```

### newPageLoad()
GET Request as a function that retrieves and displays the new beer object created with loadNewBeer(). Function also adds a delete button to the beer card.
```
var beerId;

function newPageLoad() {
    $.ajax({
        url: beerApi + '?name=' + newBeerName,
        method: "GET"
    })
    .done(function (response) {
        beerArr = response;
        appendItemsToPage(beerArr);
        beerId = (beerArr[0].id);
        $(".beer-content0").append("<button class='btn btn-danger btn-xs pull-right delete-button'>Delete</button>");
        $(".delete-button").mouseup(deleteNewBeer);
    });
};
```

### deleteNewBeer()
DELETE Request as a function to delete the new beer object from the database.
```
var deleteNewBeer = function() {
    $.ajax({
        url:  beerApi + "/" + beerId,
        type: "DELETE"
    })
    .done(function (response) {
        alert(newBeerName + " has been deleted.");
        fullLoad();
    })
};
```
