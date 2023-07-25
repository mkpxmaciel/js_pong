let xBolinha = 300
let yBolinha = 200
let diametro = 15
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6
let raio = diametro / 2

let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90
let xRaqueteOponente = 585
let yRaqueteOponente = 150

let velocidadeYOponente

let meusPontos = 0
let pontosOponente = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  movimentaRaqueteOponente()
  verificaColisaoRaquete(xRaquete, yRaquete)
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  incluiPlacar()
  marcaPontos()
 
  function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
  }
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura)
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura)
 
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  function verificaColisaoRaquete (x, y){
  hit = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, diametro);
  if (hit){
    velocidadeXBolinha *= -1
  }
  }
  circle (xBolinha, yBolinha, diametro)
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
 
  if (xBolinha + raio > width ||
     xBolinha - raio < 0) {
    velocidadeXBolinha *= -1
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0) {
    velocidadeYBolinha *= -1
  }
}function incluiPlacar(){
  textAlign(CENTER)
  textSize(16)
  fill(color(0,255,255))
  rect(150, 10, 40, 20)
  rect(450, 10, 40, 20)
  fill(150)
  fill(150)
  
  text(meusPontos, 170,26)
  text(pontosOponente, 470, 26);
} 
function marcaPontos(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}