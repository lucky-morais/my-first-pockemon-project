let count = 1
const MAX = 650 

function render() {
    let container = document.getElementById('pokemon')
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`       
    atualizaNumero()
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')

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