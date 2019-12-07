/*Elements*/
pounds_element = document.getElementById("pounds");
gram_element = document.getElementById("grams");
kilogram_element = document.getElementById("kilogram");
ounce_element = document.getElementById("ounce");
stone_element = document.getElementById("stone");

/*from pounds to other conversions*/
function fromPoundsToOther(pounds){

  gram_element.value = pounds / 0.0022046;   //pounds to gram
  kilogram_element.value = pounds/2.2046;    //pounds to kilogram
  ounce_element.value = pounds*16;         //to ounces
  stone_element.value = pounds*0.071429;     //to stone
  
}

function fromGramToOthers(gram){
  pounds_element.value = gram*0.0022046;  //to pounds
  kilogram_element.value = gram/1000;  //to kg
  ounce_element.value = gram*0.035274;     //to ounce
  stone_element.value = gram*0.00015747;     //to stone

}

function fromKilogramToOther(kg){
  
  pounds_element.value = kg*2.2046; //to pounds
  gram_element.value = kg*1000;       //to grams
  ounce_element.value = kg*35.274;    //to ounces
  stone_element.value = kg*0.1574;    //to stone
}

function fromOuncesToOther(oz){
  
  pounds_element.value = oz*0.0625;
  gram_element.value = oz/0.035274;
  kilogram_element.value = oz/35.274;
  stone_element.value = oz*0.0044643;
}

function fromStoneToOthers(st){

  pounds_element.value = st*14;
  gram_element.value = st/0.00015747;
  kilogram_element.value = st/0.15747;
  ounce_element.value = st*224;

}