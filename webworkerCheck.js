var status = document.getElementById("status");
if (window["Worker"]) {
    alert("YES");
    status.innerHTML = "Bummer, no webworkers";
}
else {
    alert("YES");   
    status.innerHTML = "WTF!!!";
}
