let count = 1
const MAX = 650 - 1 // SÓ exitem 649

function render() {
    let container = document.getElementById('pokemon')
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`       
    atualizaNumero()
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')
let first = document.getElementById('primeiro')
let last = document.getElementById('ultimo')

first.onclick = function() {
    count = 1
    render()
}

last.onclick = function() {
    count = MAX
    render()
}

prev.onclick = function() {
    if(count > 1) {
        count--
        render()
    }
}

next.onclick = function() {
    if(count < MAX) {
        count++
        render()
    }
}

atualizaNumero = function() {
    document.getElementById('numero_pokemon').innerHTML = 'Pokemon ' 
        + count + ' de ' + MAX
}

render()