meter_element = document.getElementById("meter");
km_element = document.getElementById("kilometer");
cm_element = document.getElementById("centimeter");
milimeter_element = document.getElementById("milimeter");
micrometer_element = document.getElementById("micrometer");
nm_element = document.getElementById("nanometer");
mile_element = document.getElementById("miles");
yard_element = document.getElementById("yard");
foot_element = document.getElementById("foot");
inch_element = document.getElementById("inch");
LY_element  = document.getElementById("light-year");


function fromMeterToOther(meter){
    km_element.value = meter*0.001;
    cm_element.value = meter*100;
    milimeter_element.value = meter*1000;
    micrometer_element.value = meter*1000000;
    nm_element.value = meter*1000000000;
    mile_element.value = meter*0.0006213689;
    yard_element.value = meter*1.0936132983;
    foot_element.value  = meter*3.280839895
    inch_element.value = meter*39.37007874;
    LY_element.value = meter*1.057008707E-16;

}

function fromKilometerToOthers(km){
        meter_element.value = km*1000;
        cm_element.value = km*100000;
        milimeter_element.value = km*1000000;
        micrometer_element.value = 1000000000;
        nm_element.value = km*1000000000000;
        mile_element.value = km*0.6213688756;
        yard_element.value = km*1093.6132983;
        foot_element.value = km*3280.839895;
        inch_element.value = km*39370.07874;
        LY_element.value = km*1.057008707E-13;
}

function fromCentimeterToOther(cm){
    meter_element.value = cm*0.01;
    km_element.value = cm*0.00001;
    milimeter_element.value = cm*10;
    micrometer_element.value = cm*10000;
    nm_element.value = cm*10000000;
    mile_element.value = cm*0.0000062137;
    yard_element.value = cm*0.010936133;
    foot_element.value = cm*0.032808399;
    inch_element.value = cm*0.3937007874;
    LY_element.value = cm*1.057008707E-18;
}
function fromMilimeterToOther(mm){
    meter_element.value = mm*0.001;
    km_element.value = mm*0.000001;
    cm_element.value = mm*0.1;
    micrometer_element.value = mm*1000;
    nm_element.value = mm*1000000;
    mile_element.value = mm*6.213688756E-7;
    yard_element.value = mm*0.0010936133;
    foot_element.value = mm*0.0032808399;
    inch_element.value = mm*0.0393700787
    LY_element.value = mm*1.057008707E-19;
}
function fromMicrometerToOthers(mm){
    meter_element.value = mm*0.000001;
    km_element.value = mm*9.999999999E-10;
    cm_element.value = mm*0.0001;
    milimeter_element.value = mm*0.001;
    nm_element.value = mm*1000;
    mile_element.value = mm*6.213688756E-10;
    yard_element.value = mm*0.0000010936;
    foot_element.value = mm*0.0000032808;
    inch_element.value = mm*0.0000393701;
    LY_element.value = mm*1.057008707E-22;
}
function fromNanometerToOthers(nm){
    meter_element.value = nm*1.E-9;
    km_element.value = nm*1.E-12;
    cm_element.value = nm*1.E-7;
    milimeter_element.value = nm*0.000001;
    micrometer_element.value = nm*0.001;
    mile_element.value = nm*6.213688756E-13;
    yard_element.value = nm*1.093613298E-9;
    foot_element.value = nm*3.280839895E-9;
    inch_element.value = nm*3.937007874E-8;
    LY_element.value = nm*1.057008707E-25;
}
function fromMilesToOthers(mile){

}
function fromYardToOthers(yard){

}
function fromFootToOthers(foot){

}
function fromInchToOthers(inch){

}
function fromLYToOthers(ly){

}