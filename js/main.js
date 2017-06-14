'use strict';

console.log('elo');

function oblicz() {

    var wplata = document.getElementById('wplata').value;

    wplata = parseInt;

    var okres = document.getElementById('okres-kapitalicazji').value;

    okres = parseInt;

    var iloscLat = document.getElementById('ilosc-lat').value;

    iloscLat = parseInt;

    var oprocentowanie = document.getElementById('oprocentowanie').value / 100;

    oprocentowanie = parseInt;

    var podatekBelki = document.getElementById('podatek');

    podatekBelki = zaznaczony;

    var wynik = document.getElementById('wynik');
    
    var button = document.getElementById('button');
    
    var rezultat;

    function obliczWplate() {
        
        var oprocentowanieOpodatkowane = 0.19;
        
            if (podatekBelki.checked === true) {
                wynik = wynik - oprocentowanieOpodatkowane * wynik;
            }
        
        rezultat = wplata * Math.pow(( 1 + (oprocentowanieOpodatkowane / okres ) ), (okres * iloscLat) );
        
        

    }
    
    button.onclick = function() {
    wynik.innerHTML = rezultat;
}
    
    
}

