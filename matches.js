// write js code here corresponding to matches.html
var matchArr=JSON.parse(localStorage.getItem("matchList"));

displayData(matchArr);

var favouriteArr=JSON.parse(localStorage.getItem("favorites")) || [];

function displayData(matchArr){
    matchArr.forEach(function(element){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerText=element.Name;

        var td2=document.createElement("td");
        td2.innerText=element.TeamA;

        var td3=document.createElement("td");
        td3.innerText=element.TeamB;

        var td4=document.createElement("td");
        td4.innerText=element.Date;

        var td5=document.createElement("td");
        td5.innerText=element.Venue;

        var td6=document.createElement("td");
        td6.innerText="Favourites"
        td6.style.color="Green"
        td6.style.cursor="pointer"

        td6.addEventListener("click",function(){
            favouriteFunction(element)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
    })
}
function favouriteFunction(element){
    favouriteArr.push(element)
    localStorage.setItem("favourites",JSON.stringify(favouriteArr))
}