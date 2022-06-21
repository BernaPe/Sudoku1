var column1, column2, column3, column4;
var line1, line2, line3, line4;

var input1, input2, input3, input4, input5, input6, input7, input8, input9;


function setup() {
  createCanvas(300, 300);

  column1 = createSprite(0, 150, 10, 300);
  column2 = createSprite(96.67, 150, 10, 300);
  column3 = createSprite(203.34, 150, 10, 300);
  column4 = createSprite(300, 150, 10, 300);

  line1 = createSprite(150, 0, 300, 10);
  line2 = createSprite(150, 96.67, 300, 10);
  line3 = createSprite(150, 203.34, 300, 10);
  line4 = createSprite(150, 300, 300, 10);

  input1 = createInput("").attribute("placeholder", "Digite um número");
  input1.position(5,5)
  input1.class("customInput")

  input2 = createInput("").attribute("placeholder", "Digite um número");
  input2.position(107,5)
  input2.class("customInput")
  
  input3 = createInput("").attribute("placeholder", "Digite um número");
  input3.position(208,5)
  input3.class("customInput")

  input4 = createInput("").attribute("placeholder", "Digite um número");
  input4.position(5,107)
  input4.class("customInput")

  input5 = createInput("").attribute("placeholder", "Digite um número");
  input5.position(107,107)
  input5.class("customInput")

  input6 = createInput("").attribute("placeholder", "Digite um número");
  input6.position(208,107)
  input6.class("customInput")

  input7 = createInput("").attribute("placeholder", "Digite um número");
  input7.position(5,208)
  input7.class("customInput")

  input8 = createInput("").attribute("placeholder", "Digite um número");
  input8.position(107,208)
  input8.class("customInput")

  input9 = createInput("").attribute("placeholder", "Digite um número");
  input9.position(208,208)
  input9.class("customInput")

}

function draw() {
  background(180);




  drawSprites();
}

