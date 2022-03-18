let pokeballs =  20;
let pokemons = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let ballsproduce =  [1,1,1,0,50,0,100,0,0,5000,0,100000,0,10000000,0,100000000,0,10000000000,0,1000000000000];
let preciopokemon = [20,20,20,20,1000,8000,25000,50000,0,1000000,2500000,100000000,300000000,10000000000,25000000000,150000000000,30000000000,1000000000000,1500000000000];
let ballsporclick = [0,0,0,1,0,50,0,100,0,0,5000,0,100000,0,10000000,0,100000000,0,10000000000,1000000000000]

function clic(){
    pokeballs++;
}
function ballsxclics(){
    for(i=0; i<pokemons.length; i++){
        pokeballs += pokemons[i] * ballsporclick[i];
    }
}

function comprar(objeto){

    if (pokeballs >= preciopokemon[objeto]){
        pokemons[objeto]++;
        pokeballs -= preciopokemon[objeto]
    }
    if(pokeballs < preciopokemon[objeto]){ 
    }
}
function mejorar(objeto){
    document.getElementById("menuu").innerHTML = `tengo de estos:${pokemons[objeto]} ${imgListPokemon[objeto]} <br> ${pokemonNames[objeto]} <br> cuesta:${preciopokemon[objeto]} <br> hace:${ballsporclick[objeto]} x click y ${ballsproduce[objeto]} x seg<button onclick="cerrarmenu()">ADIOS</button><button onclick="comprar(${[objeto]})">UPGRADE</button>`
}                                       
function cerrarmenu(){
    document.getElementById("menuu").style.display = "none";
    
}
function abrirmenu(){
    document.getElementById("menuu").style.display = "block"
}
function producir(){
    for(i=0; i<pokemons.length; i++){
        pokeballs += pokemons[i] * ballsproduce [i];
    }
}

function render(){
    document.getElementById("contador").innerHTML = pokeballs;
    document.getElementById("logros").innerHTML = 
    `Charmanders atrapados ${pokemons[0]}<br> 
    Bulbasaurs atrapados ${pokemons[1]}<br> 
    Squirtles atrapados ${pokemons[2]}<br>
    Squirtles atrapados ${pokemons[3]}<br>
    Squirtles atrapados ${pokemons[4]}<br>
    Squirtles atrapados ${pokemons[5]}<br>
    Squirtles atrapados ${pokemons[6]}<br>
    Squirtles atrapados ${pokemons[7]}<br>
    Squirtles atrapados ${pokemons[8]}<br>
    Squirtles atrapados ${pokemons[9]}<br>
    Squirtles atrapados ${pokemons[10]}<br>
    Squirtles atrapados ${pokemons[11]}<br>
    Squirtles atrapados ${pokemons[12]}<br>
    Squirtles atrapados ${pokemons[13]}<br>
    Squirtles atrapados ${pokemons[14]}<br>
    Squirtles atrapados ${pokemons[15]}<br>
    Squirtles atrapados ${pokemons[16]}<br>
    Squirtles atrapados ${pokemons[17]}<br>
    Squirtles atrapados ${pokemons[18]}`; 
}
function printpokemon01(){
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(0)" class="ula"><img class="imgMejoras" src=${imgListPokemon [3]}  alt="" srcset="">${pokemonNames[0]}</li>`;
    document.getElementById("idlist").innerHTML += `<li class="noesta"><img class="imgMejoras" src=${imgListPokemon [45]}  alt="" srcset="">${pokemonNames[1]}</li>`
    document.getElementById("idlist").innerHTML += `<li class="noesta"><img class="imgMejoras" src=${imgListPokemon [47]}  alt="" srcset="">${pokemonNames[2]}</li>`
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(3)" class="ula"><img class="imgMejoras" src=${imgListPokemon [9]}  alt="" srcset="">${pokemonNames[3]}</li>`;
}
function printpokemon02(){
    document.getElementById("idlist").innerHTML += `<li class="noesta"><img class="imgMejoras" src=${imgListPokemon [46]}  alt="" srcset="">${pokemonNames[0]}</li>`
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(1)" class="ula"><img class="imgMejoras" src=${imgListPokemon [0]}  alt="" srcset="">${pokemonNames[1]}</li>`;
    document.getElementById("idlist").innerHTML += `<li class="noesta"><img class="imgMejoras" src=${imgListPokemon [47]}  alt="" srcset="">${pokemonNames[2]}</li>`
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(3)" class="ula"><img class="imgMejoras" src=${imgListPokemon [9]}  alt="" srcset="">${pokemonNames[3]}</li>`;
}
function printpokemon03(){
    document.getElementById("idlist").innerHTML += `<li class="noesta"><img class="imgMejoras" src=${imgListPokemon [46]}  alt="" srcset="">${pokemonNames[0]}</li>`
    document.getElementById("idlist").innerHTML += `<li class="noesta"><img class="imgMejoras" src=${imgListPokemon [45]}  alt="" srcset="">${pokemonNames[1]}</li>`
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(2)" class="ula"><img class="imgMejoras" src=${imgListPokemon [6]}  alt="" srcset="">${pokemonNames[2]}</li>`;
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(3)" class="ula"><img class="imgMejoras" src=${imgListPokemon [9]}  alt="" srcset="">${pokemonNames[3]}</li>`;
}
function printpokemongym1(){
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(4)" class="ula"><img class="imgMejoras" src=${imgListPokemon [28]}  alt="" srcset="">${pokemonNames[4]}</li>`;
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(5)" class="ula"><img class="imgMejoras" src=${imgListPokemon [35]}  alt="" srcset="">${pokemonNames[5]}</li>`;
}
function printpokemongym2(){
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(6)" class="ula"><img class="imgMejoras" src=${ imgListPokemon [40]}  alt="" srcset="">${pokemonNames[6]}</li>`;
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(7)" class="ula"><img class="imgMejoras" src=${imgListPokemon [43]}  alt="" srcset="">${pokemonNames[7]}</li>`;;
}
function printpokemongym3(){
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(8)"" class="ula"><img class="imgMejoras" src=${imgListPokemon [36]}  alt="" srcset="">${pokemonNames[8]}</li>`;
}
function printpokemongym4(){
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(9)" class="ula"><img class="imgMejoras" src=${imgListPokemon [25]}  alt="" srcset="">${pokemonNames[9]}</li>`;
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(10)" class="ula"><img class="imgMejoras" src=${imgListPokemon [17]}  alt="" srcset="">${pokemonNames[10]}</li>`;
}
function printpokemongym5(){
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(11)" class="ula"><img class="imgMejoras" src=${imgListPokemon [33]}  alt="" srcset="">${pokemonNames[11]}</li>`;
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(12)" class="ula"><img class="imgMejoras" src=${imgListPokemon [38]}  alt="" srcset="">${pokemonNames[12]}</li>`;
}
function printpokemongym6(){
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(13)" class="ula"><img class="imgMejoras" src=${imgListPokemon [42]}  alt="" srcset="">${pokemonNames[13]}</li>`; 
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(14)" class="ula"><img class="imgMejoras" src=${imgListPokemon [22]}  alt="" srcset="">${pokemonNames[14]}</li>`;
}
function printpokemongym7(){
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(15)" class="ula"><img class="imgMejoras" src=${imgListPokemon [31]}  alt="" srcset="">${pokemonNames[15]}</li>`;
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(16)" class="ula"><img class="imgMejoras" src=${imgListPokemon [20]}  alt="" srcset="">${pokemonNames[16]}</li>`;
}
function printpokemongym8(){
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(17)" class="ula"><img class="imgMejoras" src=${imgListPokemon [14]}  alt="" srcset="">${pokemonNames[17]}</li>`;
    document.getElementById("idlist").innerHTML += `<li onclick="abrirmenu(), mejorar(18)" class="ula"><img class="imgMejoras" src=${imgListPokemon [11]}  alt="" srcset="">${pokemonNames[18]}</li>`;
}

function fuerapaginainicial(){
    document.getElementById("paginainicial").style.display = "none";
    document.getElementById("gamearea").style.display = "block";
}

let pokemonNames = ["Charmander","Bulbasaur" ,"Squirtle" ,"Pikachu" ,"Geodude" ,"Onix" ,"Staryu" ,"Magikarp" ,"Voltord" ,"Bellsprout" ,"Oddish" ,"Grimer" ,"Koffing" ,"MrMime" ,"Abra" ,"Ponyta" ,"Growlithe" ,"Nidoran♂" ,"Nidoran♀"]
let imgListPokemon = new Array(47)
    imgListPokemon [0] = "IMG/SpritesPokemon/1.png"
    imgListPokemon [1] = "IMG/SpritesPokemon/2.png"
    imgListPokemon [2] = "IMG/SpritesPokemon/3.png"
    imgListPokemon [3] = "IMG/SpritesPokemon/4.png"
    imgListPokemon [4] = "IMG/SpritesPokemon/5.png"
    imgListPokemon [5] = "IMG/SpritesPokemon/6.png"
    imgListPokemon [6] = "IMG/SpritesPokemon/7.png"
    imgListPokemon [7] = "IMG/SpritesPokemon/8.png"
    imgListPokemon [8] = "IMG/SpritesPokemon/9.png"
    imgListPokemon [9] = "IMG/SpritesPokemon/25.png"
    imgListPokemon [10] = "IMG/SpritesPokemon/26.png"
    imgListPokemon [11] = "IMG/SpritesPokemon/29.png"
    imgListPokemon [12] = "IMG/SpritesPokemon/30.png"
    imgListPokemon [13] = "IMG/SpritesPokemon/31.png"
    imgListPokemon [14] = "IMG/SpritesPokemon/32.png"
    imgListPokemon [15] = "IMG/SpritesPokemon/33.png"
    imgListPokemon [16] = "IMG/SpritesPokemon/34.png"
    imgListPokemon [17] = "IMG/SpritesPokemon/43.png"
    imgListPokemon [18] = "IMG/SpritesPokemon/44.png"
    imgListPokemon [19] = "IMG/SpritesPokemon/45.png"
    imgListPokemon [20] = "IMG/SpritesPokemon/58.png"
    imgListPokemon [21] = "IMG/SpritesPokemon/59.png"
    imgListPokemon [22] = "IMG/SpritesPokemon/63.png"
    imgListPokemon [23] = "IMG/SpritesPokemon/64.png"
    imgListPokemon [24] = "IMG/SpritesPokemon/65.png"
    imgListPokemon [25] = "IMG/SpritesPokemon/69.png"
    imgListPokemon [26] = "IMG/SpritesPokemon/70.png"
    imgListPokemon [27] = "IMG/SpritesPokemon/71.png"
    imgListPokemon [28] = "IMG/SpritesPokemon/74.png"
    imgListPokemon [29] = "IMG/SpritesPokemon/75.png"
    imgListPokemon [30] = "IMG/SpritesPokemon/76.png"
    imgListPokemon [31] = "IMG/SpritesPokemon/77.png"
    imgListPokemon [32] = "IMG/SpritesPokemon/78.png"
    imgListPokemon [33] = "IMG/SpritesPokemon/88.png"
    imgListPokemon [34] = "IMG/SpritesPokemon/89.png"
    imgListPokemon [35] = "IMG/SpritesPokemon/95.png"
    imgListPokemon [36] = "IMG/SpritesPokemon/100.png"
    imgListPokemon [37] = "IMG/SpritesPokemon/101.png"
    imgListPokemon [38] = "IMG/SpritesPokemon/109.png"
    imgListPokemon [39] = "IMG/SpritesPokemon/110.png"
    imgListPokemon [40] = "IMG/SpritesPokemon/120.png"
    imgListPokemon [41] = "IMG/SpritesPokemon/121.png"
    imgListPokemon [42] = "IMG/SpritesPokemon/122.png"
    imgListPokemon [43] = "IMG/SpritesPokemon/129.png"
    imgListPokemon [44] = "IMG/SpritesPokemon/130.png"
    imgListPokemon [45] = "IMG/SpritesPokemon/1bw.png"
    imgListPokemon [46] = "IMG/SpritesPokemon/4bw.png"
    imgListPokemon [47] = "IMG/SpritesPokemon/7bw.png"


    


let FPSproduce = 1; 

setInterval(function(){
    producir()

}, 1000/FPSproduce);

let FPSpokemon = 30; 

setInterval(function(){
    render()
}, 1000/FPSpokemon);
