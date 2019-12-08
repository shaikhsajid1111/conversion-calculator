/*Elements*/
pounds_element = document.getElementById("pounds");
gram_element = document.getElementById("grams");
kilogram_element = document.getElementById("kilogram");
ounce_element = document.getElementById("ounce");
stone_element = document.getElementById("stone");
carat_element = document.getElementById("carat");
miligram_element = document.getElementById("miligram");
/*from pounds to other conversions*/
function fromPoundsToOther(pounds){

  gram_element.value = pounds / 0.0022046;   //pounds to gram
  kilogram_element.value = pounds/2.2046;    //pounds to kilogram
  ounce_element.value = pounds*16;         //to ounces
  stone_element.value = pounds*0.071429;     //to stone
  carat_element.value = pounds*2267.96;
  miligram_element.value = pounds*453592;
  
}

/*from Grams to other conversions*/
function fromGramToOthers(gram){
  pounds_element.value = gram*0.0022046;  //to pounds
  kilogram_element.value = gram/1000;  //to kg
  ounce_element.value = gram*0.035274;     //to ounce
  stone_element.value = gram*0.00015747;     //to stone
  carat_element.value = gram*5;
  miligram_element.value = gram*1;

}

/*from kg to other conversions*/
function fromKilogramToOther(kg){
  
  pounds_element.value = kg*2.2046; //to pounds
  gram_element.value = kg*1000;       //to grams
  ounce_element.value = kg*35.274;    //to ounces
  stone_element.value = kg*0.1574;    //to stone
  carat_element.value =  kg*0.0283495;
  miligram_element.value = kg*1000000;
}
/*from Ounces To others*/
function fromOuncesToOther(oz){
  
  pounds_element.value = oz*0.0625;     //to pounds
  gram_element.value = oz/0.035274;       //to grams
  kilogram_element.value = oz/35.274;     //to kg
  stone_element.value = oz*0.0044643;       //to stone
  carat_element.value = oz*141.7475;          //to carat
  miligram_element.value = oz*28349.5;          //to miligram
}

/*from stone to others*/
function fromStoneToOthers(st){

  pounds_element.value = st*14;           //to pounds
  gram_element.value = st/0.00015747;       //to grams
  kilogram_element.value = st/0.15747;        //to kg
  ounce_element.value = st*224;           //ounce
  carat_element.value = st*31751.47;        //to carat
  miligram_element.value = st/0.00000015747;      //to miligram
}

/*From carat to others */
function fromCaratToOthers(ct){
    pounds_element.value = ct*0.0004409249;       //to pounds
    gram_element.value = ct*0.2;              //to grams
    kilogram_element.value = ct*0.0002;       //to kg
    ounce_element.value = ct*0.0070547981;  //to ounce
    stone_element.value = ct / 31751.47;        //to stone
    miligram_element.value = ct*200;      //to mg
  }

/*from miligram to other conversions*/
function fromMiligramToOthers(mg){
  pounds_element.value = mg*0.0000022046;     //to pounds
  gram_element.value = mg*0.001;          //to grams
  kilogram_element.value = mg*0.000001;       //to kg
  ounce_element.value = mg*0.000035274;     //to ounce
  stone_element.value = mg * 0.00000015747;     //to stone
  carat_element.value = mg*0.005;           //to carat
}

