//ÖDEV-5
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren arrow function algoritmasını yazalım switch-case   new Date().getDay() 0=pazar 1=pazartesi
//ÖDEV-7
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Immedia function algoritmasını yazalım switch-case   new Date().getDay()
// ()()
//ÖDEV-8
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Arrow function algoritmasını yazalım switch-case   new Date().getDay()
// let deneme= ()=>{ }
//ÖDEV-9
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Anonymous function algoritmasını yazalım switch-case   new Date().getDay()
// let deneme= function (){ }

//Arrow function (Odev5 ve Odev8)
var dayWithArrowFunction = () => {
    document.write("<br><br>Arrow Function<br>")
    switch(new Date().getDay()){
        case 1:
            document.write("Bugün günlerden pazartesi.");
            break;
        case 2:
            document.write("Bugün günlerden salı.");
            break;
        case 3:
            document.write("Bugün günlerden çarşamba.");
            break;
        case 4:
            document.write("Bugün günlerden perşembe.");
            break;
        case 5:
            document.write("Bugün günlerden cuma.");
            break;
        case 6:
            document.write("Bugün günlerden cumartesi.");
            break;
        case 0:
            document.write("Bugün günlerden pazar.");
            break;
    }
};

//Immedia function (Odev7)
(function(){
    document.write("<br><br>Immedia Function<br>")
    switch(new Date().getDay()){
        case 1:
            document.write("Bugün günlerden pazartesi.");
            break;
        case 2:
            document.write("Bugün günlerden salı.");
            break;
        case 3:
            document.write("Bugün günlerden çarşamba.");
            break;
        case 4:
            document.write("Bugün günlerden perşembe.");
            break;
        case 5:
            document.write("Bugün günlerden cuma.");
            break;
        case 6:
            document.write("Bugün günlerden cumartesi.");
            break;
        case 0:
            document.write("Bugün günlerden pazar.");
            break;
    }
})()

//Anonymous function (Odev9)
var dayWithAnonymousFunction = function () {
    document.write("<br><br>Anonymous Function<br>")
    switch(new Date().getDay()){
        case 1:
            document.write("Bugün günlerden pazartesi.");
            break;
        case 2:
            document.write("Bugün günlerden salı.");
            break;
        case 3:
            document.write("Bugün günlerden çarşamba.");
            break;
        case 4:
            document.write("Bugün günlerden perşembe.");
            break;
        case 5:
            document.write("Bugün günlerden cuma.");
            break;
        case 6:
            document.write("Bugün günlerden cumartesi.");
            break;
        case 0:
            document.write("Bugün günlerden pazar.");
            break;
    }
};

dayWithArrowFunction();
dayWithAnonymousFunction();