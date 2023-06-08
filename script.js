var calcular=document.getElementById("calcular");
calcular.addEventListener("click",()=>{
    var nombre=document.getElementById("nombre").value;
    var saber=document.getElementById("saber").value;
    var hacer=document.getElementById("hacer").value;
    var ser=document.getElementById("ser").value;
    var total=(ser *0.10)+(saber*0.60)+(hacer*0.30);

    document.getElementById("b-nombre").textContent =nombre;
    document.getElementById("b-saber").textContent =saber;
    document.getElementById("b-hacer").textContent =hacer;
    document.getElementById("b-ser").textContent =ser;
    document.getElementById("b-total").innerHTML =total;

});