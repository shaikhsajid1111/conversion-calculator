var mph_element = document.getElementById("mph");
var kph_element = document.getElementById("kph");
var knot_element = document.getElementById("knots");
var mach_element = document.getElementById("mach");

function fromMphToOther(mph){
    mph = parseFloat(mph);
    kph_element.value = mph*1.609344;
    knot_element.value = mph/1.150779;
    mach_element.value = mph/761.207;
}
function fromKphToOthers(KPH){
    KPH = parseFloat(KPH);
    mph_element.value = KPH/1.609344;
    knot_element.value = KPH/1.852;
    mach_element.value = KPH/1225.044;
}
function fromKnotsToOther(knot){
    knot = parseFloat(knot);
    mph_element.value = knot*1.150779;
    kph_element.value = knot*1.852;
    mach_element.value = knot/661.4708;
}
function fromMachToOther(mach){
    mach  = parseFloat(mach);
    mph_element.value = mach*761.207;
    kph_element.value = mach*1225.044;
    knot_element.value = mach*661.4708;
}


