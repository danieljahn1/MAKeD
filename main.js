$('document').ready(function() {

var beerApi = "http://redwoodbeerapi.azurewebsites.net/api/beers";
var beerArr;
var currentPage = 0; 

function appendItemsToPage(beerArr) {
    $('#list-of-beers').empty();

    for(var i = currentPage*54 ; i < currentPage*54 +54 && i < beerArr.length; i++) {

        if (beerArr[i].styleId == -1){
            beerArr[i].styleId = "Ale";
        }
        if (beerArr[i].styleId == 1){
            beerArr[i].styleId = "Classic English-Style Pale Ale";
        }
        if (beerArr[i].styleId == 2){
            beerArr[i].styleId = "English-Style Pale Ale";
        }
        if (beerArr[i].styleId == 3){
            beerArr[i].styleId = "Ordinary Bitter";
        }
        if (beerArr[i].styleId == 4){
            beerArr[i].styleId = "Special Bitter or Best Bitter";
        }
        if (beerArr[i].styleId == 5){
            beerArr[i].styleId = "Extra Special Bitter";
        }
        if (beerArr[i].styleId == 6){
            beerArr[i].styleId = "English-Style Summer Ale";
        }
        if (beerArr[i].styleId == 7){
            beerArr[i].styleId = "Scottish-Style Light Ale";
        }
        if (beerArr[i].styleId == 8){
            beerArr[i].styleId = "Scottish-Style Heavy Ale";
        }
        if (beerArr[i].styleId == 9){
            beerArr[i].styleId = "Scottish-Style export Ale";
        }
        if (beerArr[i].styleId == 10){
            beerArr[i].styleId = "English-Style Pale Mild Ale";
        }
        if (beerArr[i].styleId == 11){
            beerArr[i].styleId = "English-Style Dark Mild Ale";
        }
        if (beerArr[i].styleId == 12){
            beerArr[i].styleId = "English-Style Brown Ale";
        }
        if (beerArr[i].styleId == 13){
            beerArr[i].styleId = "Old Ale";
        }
        if (beerArr[i].styleId == 14){
            beerArr[i].styleId = "Strong Ale";
        }
        if (beerArr[i].styleId == 15){
            beerArr[i].styleId = "Scotch Ale";
        }
        if (beerArr[i].styleId == 16){
            beerArr[i].styleId = "British-Style Imperial Stout";
        }
        if (beerArr[i].styleId == 17){
            beerArr[i].styleId = "British-Style Barley Wine Ale";
        }
        if (beerArr[i].styleId == 18){
            beerArr[i].styleId = "Robust Porter";
        }
        if (beerArr[i].styleId == 19){
            beerArr[i].styleId = "Brown Porter";
        }
        if (beerArr[i].styleId == 20){
            beerArr[i].styleId = "Sweet Stout";
        }
        if (beerArr[i].styleId == 21){
            beerArr[i].styleId = "Oatmeal Stout";
        }
        if (beerArr[i].styleId == 22){
            beerArr[i].styleId = "Irish-Style Red Ale";
        }
        if (beerArr[i].styleId == 23){
            beerArr[i].styleId = "Classic Irish-Style Dry Stout";
        }
        if (beerArr[i].styleId == 24){
            beerArr[i].styleId = "Foreign(Export)-Style Stout";
        }
        if (beerArr[i].styleId == 25){
            beerArr[i].styleId = "Porter";
        }
        if (beerArr[i].styleId == 26){
            beerArr[i].styleId = "American-Style Pale Ale";
        }
        if (beerArr[i].styleId == 27){
            beerArr[i].styleId = "Fresh Hop Ale";
        }
        if (beerArr[i].styleId == 28){
            beerArr[i].styleId = "Pale American-Belgo-Style-Ale";
        }
        if (beerArr[i].styleId == 29){
            beerArr[i].styleId = "Dark American-Belgo-Style-Ale";
        }
        if (beerArr[i].styleId == 30){
            beerArr[i].styleId = "American-Style Strong Pale Ale";
        }
        if (beerArr[i].styleId == 31){
            beerArr[i].styleId = "American-Style India Pale Ale";
        }
        if (beerArr[i].styleId == 32){
            beerArr[i].styleId = "Imperial or Double India Pale Ale";
        }
        if (beerArr[i].styleId == 33){
            beerArr[i].styleId = "American-Style Amber/Red Ale";
        }
        if (beerArr[i].styleId == 34){
            beerArr[i].styleId = "Imperial or Double Red Ale";
        }
        if (beerArr[i].styleId == 35){
            beerArr[i].styleId = "American-Style Barley Wine Ale";
        }
        if (beerArr[i].styleId == 36){
            beerArr[i].styleId = "American-Style Wheat Wine Ale";
        }
        if (beerArr[i].styleId == 37){
            beerArr[i].styleId = "Golden or Blonde Ale";
        }
        if (beerArr[i].styleId == 38){
            beerArr[i].styleId = "American-Style Brown Ale";
        }
        if (beerArr[i].styleId == 39){
            beerArr[i].styleId = "Smoke Porter";
        }
        if (beerArr[i].styleId == 40){
            beerArr[i].styleId = "American-Style Sour Ale";
        }
        if (beerArr[i].styleId == 41){
            beerArr[i].styleId = "American-Style India Black Ale";
        }
        if (beerArr[i].styleId == 42){
            beerArr[i].styleId = "American-Style Stout";
        }
        if (beerArr[i].styleId == 43){
            beerArr[i].styleId = "American-Style Imperial Stout";
        }
        if (beerArr[i].styleId == 44){
            beerArr[i].styleId = "Specialty Stouts";
        }
        if (beerArr[i].styleId == 45){
            beerArr[i].styleId = "American-Style Imperial Porter";
        }
        if (beerArr[i].styleId == 46){
            beerArr[i].styleId = "Porter";
        }
        if (beerArr[i].styleId == 47){
            beerArr[i].styleId = "German-Style Kolsch";
        }
        if (beerArr[i].styleId == 48){
            beerArr[i].styleId = "Berliner-Style Weisse";
        }
        if (beerArr[i].styleId == 49){
            beerArr[i].styleId = "Leipzig-Style Gose";
        }
        if (beerArr[i].styleId == 50){
            beerArr[i].styleId = "South German-Style Hefeweizen";
        }
        if (beerArr[i].styleId == 51){
            beerArr[i].styleId = "South German-Style Kristal Weizen";
        }
        if (beerArr[i].styleId == 52){
            beerArr[i].styleId = "German-Style Leichtes Weizen";
        }
        if (beerArr[i].styleId == 53){
            beerArr[i].styleId = "South German-Style Bernsteinfarbenes Weizen";
        }
        if (beerArr[i].styleId == 54){
            beerArr[i].styleId = "South German-Style Dunkel Weizen";
        }
        if (beerArr[i].styleId == 55){
            beerArr[i].styleId = "South German-Style Weizenbock";
        }
        if (beerArr[i].styleId == 56){
            beerArr[i].styleId = "Bamberg-Style Weiss Rauchbier";
        }
        if (beerArr[i].styleId == 57){
            beerArr[i].styleId = "German-Style Brown Ale/Altbier";
        }
        if (beerArr[i].styleId == 58){
            beerArr[i].styleId = "Kellerbier-Ale";
        }
        if (beerArr[i].styleId == 59){
            beerArr[i].styleId = "Belgian-Style Flanders/Oud Bruin";
        }
        if (beerArr[i].styleId == 60){
            beerArr[i].styleId = "Belgian-Style Dubbel";
        }
        if (beerArr[i].styleId == 61){
            beerArr[i].styleId = "Belgian-Style Tripel";
        }
        if (beerArr[i].styleId == 62){
            beerArr[i].styleId = "Belgian-Style Quadrupel";
        }
        if (beerArr[i].styleId == 63){
            beerArr[i].styleId = "Belgian-Style Blonde Ale";
        }
        if (beerArr[i].styleId == 64){
            beerArr[i].styleId = "Belgian-Style Pale Ale";
        }
        if (beerArr[i].styleId == 65){
            beerArr[i].styleId = "Belgian-Style Pale Strong Ale";
        }
        if (beerArr[i].styleId == 66){
            beerArr[i].styleId = "Belgian-Style Dark Strong Ale";
        }
        if (beerArr[i].styleId == 67){
            beerArr[i].styleId = "Belgian-Style White";
        }
        if (beerArr[i].styleId == 68){
            beerArr[i].styleId = "Belgian-Style Lambic";
        }
        if (beerArr[i].styleId == 69){
            beerArr[i].styleId = "Belgian-Style Gueuze Lambic";
        }
        if (beerArr[i].styleId == 70){
            beerArr[i].styleId = "Belgian-Style Fruit Lambic";
        }
        if (beerArr[i].styleId == 71){
            beerArr[i].styleId = "Belgian-Style Table Beer";
        }
        if (beerArr[i].styleId == 72){
            beerArr[i].styleId = "Other Belgian-Style Ales";
        }
        if (beerArr[i].styleId == 73){
            beerArr[i].styleId = "French-Style Biere de Garde";
        }
        if (beerArr[i].styleId == 74){
            beerArr[i].styleId = "French & Belgian-Style Saison";
        }
        if (beerArr[i].styleId == 75){
            beerArr[i].styleId = "International-Style Pale Ale";
        }
        if (beerArr[i].styleId == 76){
            beerArr[i].styleId = "Australasian-Style Pale Ale";
        }
        if (beerArr[i].styleId == 77){
            beerArr[i].styleId = "German-Style Pilsener";
        }
        if (beerArr[i].styleId == 78){
            beerArr[i].styleId = "Bohemian-Style Pilsener";
        }
        if (beerArr[i].styleId == 79){
            beerArr[i].styleId = "European Low-Alcohol Lager";
        }
        if (beerArr[i].styleId == 80){
            beerArr[i].styleId = "Munchner-Style Helles";
        }
        if (beerArr[i].styleId == 81){
            beerArr[i].styleId = "Dortmunder/European-Style Export";
        }
        if (beerArr[i].styleId == 82){
            beerArr[i].styleId = "Vienna-Style Lager";
        }
        if (beerArr[i].styleId == 83){
            beerArr[i].styleId = "German-Style Marzen";
        }
        if (beerArr[i].styleId == 84){
            beerArr[i].styleId = "German-Style Oktoberfest";
        }
        if (beerArr[i].styleId == 85){
            beerArr[i].styleId = "European-Style Dark";
        }
        if (beerArr[i].styleId == 86){
            beerArr[i].styleId = "German-Style Schwarzbier";
        }
        if (beerArr[i].styleId == 87){
            beerArr[i].styleId = "Bamberg-Style Marzen";
        }
        if (beerArr[i].styleId == 88){
            beerArr[i].styleId = "Bamberg-Style Helles Rauchbier";
        }
        if (beerArr[i].styleId == 89){
            beerArr[i].styleId = "Bamberg-Style Bock Rauchbier";
        }
        if (beerArr[i].styleId == 90){
            beerArr[i].styleId = "Traditional German-Style Bock";
        }
        if (beerArr[i].styleId == 91){
            beerArr[i].styleId = "German-Style Heller Bock/Maibock";
        }
        if (beerArr[i].styleId == 92){
            beerArr[i].styleId = "German-Style Doppelbock";
        }
        if (beerArr[i].styleId == 93){
            beerArr[i].styleId = "German-Style Eisbock";
        }
        if (beerArr[i].styleId == 94){
            beerArr[i].styleId = "Kellerbier-Lager";
        }
        if (beerArr[i].styleId == 95){
            beerArr[i].styleId = "American-Style Lager";
        }
        if (beerArr[i].styleId == 96){
            beerArr[i].styleId = "American-Style Light Lager";
        }
        if (beerArr[i].styleId == 97){
            beerArr[i].styleId = "American-Style Low-Carb Light Lager";
        }
        if (beerArr[i].styleId == 98){
            beerArr[i].styleId = "American-Style Amber Lager";
        }
        if (beerArr[i].styleId == 99){
            beerArr[i].styleId = "American-Style Premium Lager";
        }
        if (beerArr[i].styleId == 100){
            beerArr[i].styleId = "American-Style Pilsener";
        }
        if (beerArr[i].styleId == 101){
            beerArr[i].styleId = "American-Style Ice Lager";
        }
        if (beerArr[i].styleId == 102){
            beerArr[i].styleId = "American-Style Malt Liquor";
        }
        if (beerArr[i].styleId == 103){
            beerArr[i].styleId = "American-Style Amber Lager";
        }
        if (beerArr[i].styleId == 104){
            beerArr[i].styleId = "American-Style Marzen/Oktoberfest";
        }
        if (beerArr[i].styleId == 105){
            beerArr[i].styleId = "American-Style Dark Lager";
        }
        if (beerArr[i].styleId == 106){
            beerArr[i].styleId = "Baltic-Style Porter";
        }
        if (beerArr[i].styleId == 107){
            beerArr[i].styleId = "Australasian-Style Light Lager";
        }
        if (beerArr[i].styleId == 108){
            beerArr[i].styleId = "Latin American-Style Light Lager";
        }
        if (beerArr[i].styleId == 109){
            beerArr[i].styleId = "Tropical-Style Light Lager";
        }
        if (beerArr[i].styleId == 110){
            beerArr[i].styleId = "International-Style Pilsener";
        }
        if (beerArr[i].styleId == 111){
            beerArr[i].styleId = "Dry Lager";
        }
        if (beerArr[i].styleId == 112){
            beerArr[i].styleId = "Session Beer";
        }
        if (beerArr[i].styleId == 113){
            beerArr[i].styleId = "American-Style Cream Ale or Lager";
        }
        if (beerArr[i].styleId == 114){
            beerArr[i].styleId = "California Common Beer";
        }
        if (beerArr[i].styleId == 115){
            beerArr[i].styleId = "Japenese Sake-Yeast Beer";
        }
        if (beerArr[i].styleId == 116){
            beerArr[i].styleId = "Light American Wheat Ale or Lager";
        }
        if (beerArr[i].styleId == 117){
            beerArr[i].styleId = "Fruit Wheat Ale or Lager";
        }
        if (beerArr[i].styleId == 118){
            beerArr[i].styleId = "Dark American Wheat Ale or Lager";
        }
        if (beerArr[i].styleId == 119){
            beerArr[i].styleId = "American Rye Ale or Lager";
        }
        if (beerArr[i].styleId == 120){
            beerArr[i].styleId = "German-Style Rye Ale";
        }
        if (beerArr[i].styleId == 121){
            beerArr[i].styleId = "Fruit Beer";
        }
        if (beerArr[i].styleId == 122){
            beerArr[i].styleId = "Field Beer";
        }
        if (beerArr[i].styleId == 123){
            beerArr[i].styleId = "Pumpkin Beer";
        }
        if (beerArr[i].styleId == 124){
            beerArr[i].styleId = "Chocolate/Cocoa-Flavored Beer";
        }
        if (beerArr[i].styleId == 125){
            beerArr[i].styleId = "Coffee-Flavored Beer";
        }
        if (beerArr[i].styleId == 126){
            beerArr[i].styleId = "Herb and Spice Beer";
        }
        if (beerArr[i].styleId == 127){
            beerArr[i].styleId = "Specialty Beer";
        }
        if (beerArr[i].styleId == 128){
            beerArr[i].styleId = "Specialty Honey Lager or Ale";
        }
        if (beerArr[i].styleId == 129){
            beerArr[i].styleId = "Gluten-Free Beer";
        }
        if (beerArr[i].styleId == 130){
            beerArr[i].styleId = "Smoke Beer";
        }
        if (beerArr[i].styleId == 131){
            beerArr[i].styleId = "Experimental Beer";
        }
        if (beerArr[i].styleId == 132){
            beerArr[i].styleId = "Out of Category";
        }
        if (beerArr[i].styleId == 133){
            beerArr[i].styleId = "Wood- and Barrel-Aged Beer";
        }
        if (beerArr[i].styleId == 134){
            beerArr[i].styleId = "Wood- and Barrel-Aged Pale to Amber Beer";
        }
        if (beerArr[i].styleId == 135){
            beerArr[i].styleId = "Wood- and Barrel-Aged Dark Beer";
        }
        if (beerArr[i].styleId == 136){
            beerArr[i].styleId = "Wood- and Barrel-Aged Strong Beer";
        }
        if (beerArr[i].styleId == 137){
            beerArr[i].styleId = "Wood- and Barrel-Aged Sour Beer";
        }
        if (beerArr[i].styleId == 138){
            beerArr[i].styleId = "Aged Beer";
        }
        if (beerArr[i].styleId == 139){
            beerArr[i].styleId = "Other Strong Ale or Lager";
        }
        if (beerArr[i].styleId == 140){
            beerArr[i].styleId = "Non-Alcoholic Beer";
        }
        if (beerArr[i].styleId == 141){
            beerArr[i].styleId = "Winter Warmer";
        }

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

fullLoad();

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
        .done(function (response) {
            beerArr = response;
            appendItemsToPage(beerArr);
        });
    } 
    else {
        $.ajax({
            url: beerApi + "?minAbv=" + minAbv + "&maxAbv=" + maxAbv,
            method: 'GET',
        })
        .done(function (response) {
            beerArr = response;
            appendItemsToPage(beerArr);
        });
    }    
};

var keyUpEvent = function () {
    if ($(".search-text-box").get(0).value.length > 2) {
        if (globalTimeout != null) clearTimeout(globalTimeout);
        globalTimeout = setTimeout(search, 750);
    } 
    else if ($(".search-text-box").get(0).value == "") {
        if (globalTimeout != null) clearTimeout(globalTimeout); {
        globalTimeout = setTimeout(search, 750);
        }
    }
};

$("#search-button").mouseup(search);

$(".search-text-box").keyup(keyUpEvent);

function appendAdditionalItemsToPage(beerArr) {
    for(var i = currentPage*54 ; i < currentPage*54 +54 && i < beerArr.length; i++) {

        if (beerArr[i].styleId == -1){
            beerArr[i].styleId = "Ale";
        }
        if (beerArr[i].styleId == 1){
            beerArr[i].styleId = "Classic English-Style Pale Ale";
        }
        if (beerArr[i].styleId == 2){
            beerArr[i].styleId = "English-Style Pale Ale";
        }
        if (beerArr[i].styleId == 3){
            beerArr[i].styleId = "Ordinary Bitter";
        }
        if (beerArr[i].styleId == 4){
            beerArr[i].styleId = "Special Bitter or Best Bitter";
        }
        if (beerArr[i].styleId == 5){
            beerArr[i].styleId = "Extra Special Bitter";
        }
        if (beerArr[i].styleId == 6){
            beerArr[i].styleId = "English-Style Summer Ale";
        }
        if (beerArr[i].styleId == 7){
            beerArr[i].styleId = "Scottish-Style Light Ale";
        }
        if (beerArr[i].styleId == 8){
            beerArr[i].styleId = "Scottish-Style Heavy Ale";
        }
        if (beerArr[i].styleId == 9){
            beerArr[i].styleId = "Scottish-Style export Ale";
        }
        if (beerArr[i].styleId == 10){
            beerArr[i].styleId = "English-Style Pale Mild Ale";
        }
        if (beerArr[i].styleId == 11){
            beerArr[i].styleId = "English-Style Dark Mild Ale";
        }
        if (beerArr[i].styleId == 12){
            beerArr[i].styleId = "English-Style Brown Ale";
        }
        if (beerArr[i].styleId == 13){
            beerArr[i].styleId = "Old Ale";
        }
        if (beerArr[i].styleId == 14){
            beerArr[i].styleId = "Strong Ale";
        }
        if (beerArr[i].styleId == 15){
            beerArr[i].styleId = "Scotch Ale";
        }
        if (beerArr[i].styleId == 16){
            beerArr[i].styleId = "British-Style Imperial Stout";
        }
        if (beerArr[i].styleId == 17){
            beerArr[i].styleId = "British-Style Barley Wine Ale";
        }
        if (beerArr[i].styleId == 18){
            beerArr[i].styleId = "Robust Porter";
        }
        if (beerArr[i].styleId == 19){
            beerArr[i].styleId = "Brown Porter";
        }
        if (beerArr[i].styleId == 20){
            beerArr[i].styleId = "Sweet Stout";
        }
        if (beerArr[i].styleId == 21){
            beerArr[i].styleId = "Oatmeal Stout";
        }
        if (beerArr[i].styleId == 22){
            beerArr[i].styleId = "Irish-Style Red Ale";
        }
        if (beerArr[i].styleId == 23){
            beerArr[i].styleId = "Classic Irish-Style Dry Stout";
        }
        if (beerArr[i].styleId == 24){
            beerArr[i].styleId = "Foreign(Export)-Style Stout";
        }
        if (beerArr[i].styleId == 25){
            beerArr[i].styleId = "Porter";
        }
        if (beerArr[i].styleId == 26){
            beerArr[i].styleId = "American-Style Pale Ale";
        }
        if (beerArr[i].styleId == 27){
            beerArr[i].styleId = "Fresh Hop Ale";
        }
        if (beerArr[i].styleId == 28){
            beerArr[i].styleId = "Pale American-Belgo-Style-Ale";
        }
        if (beerArr[i].styleId == 29){
            beerArr[i].styleId = "Dark American-Belgo-Style-Ale";
        }
        if (beerArr[i].styleId == 30){
            beerArr[i].styleId = "American-Style Strong Pale Ale";
        }
        if (beerArr[i].styleId == 31){
            beerArr[i].styleId = "American-Style India Pale Ale";
        }
        if (beerArr[i].styleId == 32){
            beerArr[i].styleId = "Imperial or Double India Pale Ale";
        }
        if (beerArr[i].styleId == 33){
            beerArr[i].styleId = "American-Style Amber/Red Ale";
        }
        if (beerArr[i].styleId == 34){
            beerArr[i].styleId = "Imperial or Double Red Ale";
        }
        if (beerArr[i].styleId == 35){
            beerArr[i].styleId = "American-Style Barley Wine Ale";
        }
        if (beerArr[i].styleId == 36){
            beerArr[i].styleId = "American-Style Wheat Wine Ale";
        }
        if (beerArr[i].styleId == 37){
            beerArr[i].styleId = "Golden or Blonde Ale";
        }
        if (beerArr[i].styleId == 38){
            beerArr[i].styleId = "American-Style Brown Ale";
        }
        if (beerArr[i].styleId == 39){
            beerArr[i].styleId = "Smoke Porter";
        }
        if (beerArr[i].styleId == 40){
            beerArr[i].styleId = "American-Style Sour Ale";
        }
        if (beerArr[i].styleId == 41){
            beerArr[i].styleId = "American-Style India Black Ale";
        }
        if (beerArr[i].styleId == 42){
            beerArr[i].styleId = "American-Style Stout";
        }
        if (beerArr[i].styleId == 43){
            beerArr[i].styleId = "American-Style Imperial Stout";
        }
        if (beerArr[i].styleId == 44){
            beerArr[i].styleId = "Specialty Stouts";
        }
        if (beerArr[i].styleId == 45){
            beerArr[i].styleId = "American-Style Imperial Porter";
        }
        if (beerArr[i].styleId == 46){
            beerArr[i].styleId = "Porter";
        }
        if (beerArr[i].styleId == 47){
            beerArr[i].styleId = "German-Style Kolsch";
        }
        if (beerArr[i].styleId == 48){
            beerArr[i].styleId = "Berliner-Style Weisse";
        }
        if (beerArr[i].styleId == 49){
            beerArr[i].styleId = "Leipzig-Style Gose";
        }
        if (beerArr[i].styleId == 50){
            beerArr[i].styleId = "South German-Style Hefeweizen";
        }
        if (beerArr[i].styleId == 51){
            beerArr[i].styleId = "South German-Style Kristal Weizen";
        }
        if (beerArr[i].styleId == 52){
            beerArr[i].styleId = "German-Style Leichtes Weizen";
        }
        if (beerArr[i].styleId == 53){
            beerArr[i].styleId = "South German-Style Bernsteinfarbenes Weizen";
        }
        if (beerArr[i].styleId == 54){
            beerArr[i].styleId = "South German-Style Dunkel Weizen";
        }
        if (beerArr[i].styleId == 55){
            beerArr[i].styleId = "South German-Style Weizenbock";
        }
        if (beerArr[i].styleId == 56){
            beerArr[i].styleId = "Bamberg-Style Weiss Rauchbier";
        }
        if (beerArr[i].styleId == 57){
            beerArr[i].styleId = "German-Style Brown Ale/Altbier";
        }
        if (beerArr[i].styleId == 58){
            beerArr[i].styleId = "Kellerbier-Ale";
        }
        if (beerArr[i].styleId == 59){
            beerArr[i].styleId = "Belgian-Style Flanders/Oud Bruin";
        }
        if (beerArr[i].styleId == 60){
            beerArr[i].styleId = "Belgian-Style Dubbel";
        }
        if (beerArr[i].styleId == 61){
            beerArr[i].styleId = "Belgian-Style Tripel";
        }
        if (beerArr[i].styleId == 62){
            beerArr[i].styleId = "Belgian-Style Quadrupel";
        }
        if (beerArr[i].styleId == 63){
            beerArr[i].styleId = "Belgian-Style Blonde Ale";
        }
        if (beerArr[i].styleId == 64){
            beerArr[i].styleId = "Belgian-Style Pale Ale";
        }
        if (beerArr[i].styleId == 65){
            beerArr[i].styleId = "Belgian-Style Pale Strong Ale";
        }
        if (beerArr[i].styleId == 66){
            beerArr[i].styleId = "Belgian-Style Dark Strong Ale";
        }
        if (beerArr[i].styleId == 67){
            beerArr[i].styleId = "Belgian-Style White";
        }
        if (beerArr[i].styleId == 68){
            beerArr[i].styleId = "Belgian-Style Lambic";
        }
        if (beerArr[i].styleId == 69){
            beerArr[i].styleId = "Belgian-Style Gueuze Lambic";
        }
        if (beerArr[i].styleId == 70){
            beerArr[i].styleId = "Belgian-Style Fruit Lambic";
        }
        if (beerArr[i].styleId == 71){
            beerArr[i].styleId = "Belgian-Style Table Beer";
        }
        if (beerArr[i].styleId == 72){
            beerArr[i].styleId = "Other Belgian-Style Ales";
        }
        if (beerArr[i].styleId == 73){
            beerArr[i].styleId = "French-Style Biere de Garde";
        }
        if (beerArr[i].styleId == 74){
            beerArr[i].styleId = "French & Belgian-Style Saison";
        }
        if (beerArr[i].styleId == 75){
            beerArr[i].styleId = "International-Style Pale Ale";
        }
        if (beerArr[i].styleId == 76){
            beerArr[i].styleId = "Australasian-Style Pale Ale";
        }
        if (beerArr[i].styleId == 77){
            beerArr[i].styleId = "German-Style Pilsener";
        }
        if (beerArr[i].styleId == 78){
            beerArr[i].styleId = "Bohemian-Style Pilsener";
        }
        if (beerArr[i].styleId == 79){
            beerArr[i].styleId = "European Low-Alcohol Lager";
        }
        if (beerArr[i].styleId == 80){
            beerArr[i].styleId = "Munchner-Style Helles";
        }
        if (beerArr[i].styleId == 81){
            beerArr[i].styleId = "Dortmunder/European-Style Export";
        }
        if (beerArr[i].styleId == 82){
            beerArr[i].styleId = "Vienna-Style Lager";
        }
        if (beerArr[i].styleId == 83){
            beerArr[i].styleId = "German-Style Marzen";
        }
        if (beerArr[i].styleId == 84){
            beerArr[i].styleId = "German-Style Oktoberfest";
        }
        if (beerArr[i].styleId == 85){
            beerArr[i].styleId = "European-Style Dark";
        }
        if (beerArr[i].styleId == 86){
            beerArr[i].styleId = "German-Style Schwarzbier";
        }
        if (beerArr[i].styleId == 87){
            beerArr[i].styleId = "Bamberg-Style Marzen";
        }
        if (beerArr[i].styleId == 88){
            beerArr[i].styleId = "Bamberg-Style Helles Rauchbier";
        }
        if (beerArr[i].styleId == 89){
            beerArr[i].styleId = "Bamberg-Style Bock Rauchbier";
        }
        if (beerArr[i].styleId == 90){
            beerArr[i].styleId = "Traditional German-Style Bock";
        }
        if (beerArr[i].styleId == 91){
            beerArr[i].styleId = "German-Style Heller Bock/Maibock";
        }
        if (beerArr[i].styleId == 92){
            beerArr[i].styleId = "German-Style Doppelbock";
        }
        if (beerArr[i].styleId == 93){
            beerArr[i].styleId = "German-Style Eisbock";
        }
        if (beerArr[i].styleId == 94){
            beerArr[i].styleId = "Kellerbier-Lager";
        }
        if (beerArr[i].styleId == 95){
            beerArr[i].styleId = "American-Style Lager";
        }
        if (beerArr[i].styleId == 96){
            beerArr[i].styleId = "American-Style Light Lager";
        }
        if (beerArr[i].styleId == 97){
            beerArr[i].styleId = "American-Style Low-Carb Light Lager";
        }
        if (beerArr[i].styleId == 98){
            beerArr[i].styleId = "American-Style Amber Lager";
        }
        if (beerArr[i].styleId == 99){
            beerArr[i].styleId = "American-Style Premium Lager";
        }
        if (beerArr[i].styleId == 100){
            beerArr[i].styleId = "American-Style Pilsener";
        }
        if (beerArr[i].styleId == 101){
            beerArr[i].styleId = "American-Style Ice Lager";
        }
        if (beerArr[i].styleId == 102){
            beerArr[i].styleId = "American-Style Malt Liquor";
        }
        if (beerArr[i].styleId == 103){
            beerArr[i].styleId = "American-Style Amber Lager";
        }
        if (beerArr[i].styleId == 104){
            beerArr[i].styleId = "American-Style Marzen/Oktoberfest";
        }
        if (beerArr[i].styleId == 105){
            beerArr[i].styleId = "American-Style Dark Lager";
        }
        if (beerArr[i].styleId == 106){
            beerArr[i].styleId = "Baltic-Style Porter";
        }
        if (beerArr[i].styleId == 107){
            beerArr[i].styleId = "Australasian-Style Light Lager";
        }
        if (beerArr[i].styleId == 108){
            beerArr[i].styleId = "Latin American-Style Light Lager";
        }
        if (beerArr[i].styleId == 109){
            beerArr[i].styleId = "Tropical-Style Light Lager";
        }
        if (beerArr[i].styleId == 110){
            beerArr[i].styleId = "International-Style Pilsener";
        }
        if (beerArr[i].styleId == 111){
            beerArr[i].styleId = "Dry Lager";
        }
        if (beerArr[i].styleId == 112){
            beerArr[i].styleId = "Session Beer";
        }
        if (beerArr[i].styleId == 113){
            beerArr[i].styleId = "American-Style Cream Ale or Lager";
        }
        if (beerArr[i].styleId == 114){
            beerArr[i].styleId = "California Common Beer";
        }
        if (beerArr[i].styleId == 115){
            beerArr[i].styleId = "Japenese Sake-Yeast Beer";
        }
        if (beerArr[i].styleId == 116){
            beerArr[i].styleId = "Light American Wheat Ale or Lager";
        }
        if (beerArr[i].styleId == 117){
            beerArr[i].styleId = "Fruit Wheat Ale or Lager";
        }
        if (beerArr[i].styleId == 118){
            beerArr[i].styleId = "Dark American Wheat Ale or Lager";
        }
        if (beerArr[i].styleId == 119){
            beerArr[i].styleId = "American Rye Ale or Lager";
        }
        if (beerArr[i].styleId == 120){
            beerArr[i].styleId = "German-Style Rye Ale";
        }
        if (beerArr[i].styleId == 121){
            beerArr[i].styleId = "Fruit Beer";
        }
        if (beerArr[i].styleId == 122){
            beerArr[i].styleId = "Field Beer";
        }
        if (beerArr[i].styleId == 123){
            beerArr[i].styleId = "Pumpkin Beer";
        }
        if (beerArr[i].styleId == 124){
            beerArr[i].styleId = "Chocolate/Cocoa-Flavored Beer";
        }
        if (beerArr[i].styleId == 125){
            beerArr[i].styleId = "Coffee-Flavored Beer";
        }
        if (beerArr[i].styleId == 126){
            beerArr[i].styleId = "Herb and Spice Beer";
        }
        if (beerArr[i].styleId == 127){
            beerArr[i].styleId = "Specialty Beer";
        }
        if (beerArr[i].styleId == 128){
            beerArr[i].styleId = "Specialty Honey Lager or Ale";
        }
        if (beerArr[i].styleId == 129){
            beerArr[i].styleId = "Gluten-Free Beer";
        }
        if (beerArr[i].styleId == 130){
            beerArr[i].styleId = "Smoke Beer";
        }
        if (beerArr[i].styleId == 131){
            beerArr[i].styleId = "Experimental Beer";
        }
        if (beerArr[i].styleId == 132){
            beerArr[i].styleId = "Out of Category";
        }
        if (beerArr[i].styleId == 133){
            beerArr[i].styleId = "Wood- and Barrel-Aged Beer";
        }
        if (beerArr[i].styleId == 134){
            beerArr[i].styleId = "Wood- and Barrel-Aged Pale to Amber Beer";
        }
        if (beerArr[i].styleId == 135){
            beerArr[i].styleId = "Wood- and Barrel-Aged Dark Beer";
        }
        if (beerArr[i].styleId == 136){
            beerArr[i].styleId = "Wood- and Barrel-Aged Strong Beer";
        }
        if (beerArr[i].styleId == 137){
            beerArr[i].styleId = "Wood- and Barrel-Aged Sour Beer";
        }
        if (beerArr[i].styleId == 138){
            beerArr[i].styleId = "Aged Beer";
        }
        if (beerArr[i].styleId == 139){
            beerArr[i].styleId = "Other Strong Ale or Lager";
        }
        if (beerArr[i].styleId == 140){
            beerArr[i].styleId = "Non-Alcoholic Beer";
        }
        if (beerArr[i].styleId == 141){
            beerArr[i].styleId = "Winter Warmer";
        }

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

$("#load-more-btn").mouseup(function(event) {
    currentPage ++ ;
    appendAdditionalItemsToPage(beerArr);
});

var newBeerName = "";
var newBeerAbv = "";

$('.submit-new-beer').mouseup(function(event) {
    newBeerName = $('#newBeerName')[0].value;
    newBeerAbv = $('#newBeerAbv')[0].value;
    // console.log(newBeerName);
    // console.log(newBeerAbv);

    loadNewBeer();   
});

function loadNewBeer (event) {

    var newBeerObj = {
        'breweryId': 0,
        'name': newBeerName,
        'catId': 1,
        'styleId': -1,
        'abv' : newBeerAbv,
        'ibu' : 0,
        'srm' : 0,
        'upc' : 0,
        'filepath': '',
        'descript' : '',
        'addUser' : 0,
        'lastMod' : '2000-01-01T00:00:00'  
    };
    $.ajax({
        url: beerApi,
        type: "POST",
        data: JSON.stringify(newBeerObj),
        contentType: "application/json",
    })
    .done(function (response) {
        newPageLoad ()
    })
};

var beerId;

function newPageLoad () {
    $.ajax({
        url: beerApi + '?name=' + newBeerName,
        method: "GET"
    })
    .done(function (response) {
        beerArr = response;
        appendItemsToPage(beerArr)
        beerId = (beerArr[0].id);
        $(".beer-content0").append("<button class='btn btn-danger btn-xs pull-right delete-button'>Delete</button>")
        $(".delete-button").mouseup(deleteNewBeer)
    });
};

var deleteNewBeer = function () {
    $.ajax({
        url:  beerApi + "/" + beerId,
        type: "DELETE"
    })
    .done(function (response) {
        alert("Beer was Deleted")
        fullLoad()
    })
};

})