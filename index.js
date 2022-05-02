// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",formatch)
var array;
if(JSON.parse(localStorage.getItem("matchList"))==null){
    array=[];
}
else{
    array=JSON.parse(localStorage.getItem("matchList"))
}
function formatch(){
    event.preventDefault()
    var obj={
        Name:document.querySelector("#matchNum").value,
        TeamA:document.querySelector("#teamA").value,
        TeamB:document.querySelector("#teamB").value,
        Date:document.querySelector("#date").value,
        Venue:document.querySelector("#venue").value,

    }
    array.push(obj);
    localStorage.setItem("matchList",JSON.stringify(array))
    window.location.href="matches.html"
}