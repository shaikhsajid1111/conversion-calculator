var radius = document.getElementById("r");
var diameter = document.getElementById("di");
var circumference = document.getElementById("cr");
var area = document.getElementById("area");
/*
Diameter of a Circle - D = 2 × r
Circumference of a Circle - C = 2 × π × r
Area of a Circle- A = π × r2
*/

function fromDiameterToOther(di){
    di = parseFloat(di);
    radius.value = di/2;
    circumference.value =  2*Math.PI*(di/2);
    area.value = Math.PI*(di/2)**2;
}
function fromCircumferenceToOther(cr){
    cr = parseFloat(cr);
    diameter_local = cr/Math.PI;
    diameter.value = diameter_local;
    radius.value = diameter_local/2;
    area.value = (cr*cr)/(4*Math.PI);

}

function fromAreaToOther(area){
    area = parseFloat(area);
    di = Math.sqrt((4*area)/Math.PI);
    diameter.value = di;
    radius.value = di/2;
    circumference.value = 2*(Math.sqrt(Math.PI*area))
}
function fromRadiusToOther(r){
    r = parseFloat(r);
    diameter.value = r/2;
    circumference.value = 2*Math.PI*r;
    area.value = Math.PI*(r*r);
}