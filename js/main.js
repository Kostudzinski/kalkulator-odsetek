'use strict';



function oblicz() {

    var wplata = document.getElementById('wplata').value;
    var okres = document.getElementById('okres-kapitalizacji').value;
    var iloscLat = document.getElementById('ilosc-lat').value;
    var oprocentowanie = document.getElementById('oprocentowanie').value;
    var podatekBelki = document.getElementById('podatek').checked;
    var wynik = document.getElementById('wynik');
    
    var rezultat = wplata * Math.pow(((1 + (oprocentowanie/100)/okres)), okres * iloscLat);
    
    if(podatekBelki){
        rezultat = rezultat - (rezultat * 0.19);
    }
    
    wynik.innerHTML = rezultat.toFixed(2);
};





    
    