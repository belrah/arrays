var food=["Rice", "Plantain", "Beans", "Salads", "Potatoe", "Spaggetti"];
var length=food.length;
var list="<ol>"
for (var i = 0; i<length; i++) {
  list +="<li>" + food[i] + "</li>";
}
list +="</ol>";
document.getElementById('demo').innerHTML=list;
