'use strict';

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

    function obliczWplate() {
        
        var oprocentowanieOpodatkowane = 0.19;
        
        var rezultat;
        
            if (podatekBelki.checked === true) {
                rezultat = rezultat - (oprocentowanieOpodatkowane * rezultat);
            }
        
        rezultat = wplata * Math.pow(( 1 + (oprocentowanieOpodatkowane / okres ) ), (okres * iloscLat) );
        
        return rezultat;

    };
    
    

            
    button.onclick = function () {
    obliczWplate();
    console.log('test');
    wynik.innerHTML = rezultat;

};
    
    
};

oblicz();