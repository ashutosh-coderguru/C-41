var m= "ashutosh"
var a = 50
var b = true 
var c = m.length
var d 
var e = null
var f = [m,a,b,c,d,e]
var j = ["lol","i loveeeeeee comp"]
function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
 
}


function draw(){
  background("yellow")
  text(m+" "+ a+ " "+b+" "+c+" "+d+" "+e+" "+f,150,50)
  f.push(j)
  text(f,150,100)
  f.pop()
  text(f,150,150)
  text (m.toUpperCase(),150,200)
  text (parseInt("2"),150,250)
  console.log(parseInt("ash"))
  text(m+a,150,300)
kill()
}
function kill(){
for(var i=1;i<21;i++){
  if(i%2===0){
  text(i,550,20*i )
  }
  else{
    text(i,650,20*i )
  }
}


}