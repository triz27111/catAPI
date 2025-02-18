'use strict'

async function galeriaCat() {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'
    const response = await fetch(url)
    const data = await response.json()
    return data.map(cat => cat.url)
}

function criarImagem(link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link

    galeria.appendChild(novaImg)
}

async function preencherFotos (){
    const galeria = document.getElementById('galeria')
    const fotos = await galeriaCat()
    galeria.replaceChildren('')
    fotos.forEach(criarImagem)
    
 }
preencherFotos()