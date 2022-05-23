
$(document).ready(function () {

});

function mainHome() {
    locationSearch();
    location.href = "/" + locationSearch();
}

function businessInfo() {
    locationSearch();
    location.href = "/businessInfo" + locationSearch();
}

function directions() {
    locationSearch();
    location.href = "/directions" + locationSearch();
}

function unit() {
    locationSearch();
    location.href = "/unit" + locationSearch();
}

function amenity() {
    locationSearch();
    location.href = "/amenity" + locationSearch();
}

function concierge() {
    locationSearch();
    location.href = "/concierge" + locationSearch();
}

function premiumInfra() {
    locationSearch();
    location.href = "/premiumInfra" + locationSearch();
}

function plan() {
    locationSearch();
    location.href = "/plan" + locationSearch();
}

function contactUs() {
    locationSearch();
    location.href = "/contactUs" + locationSearch();
}

function locationSearch() {
    return  location.search;
}

