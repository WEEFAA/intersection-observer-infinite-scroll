const container = document.querySelector(".posts")

// generate random items | posts
function getRandoms(length = 100){
    const items = []
    for(let i = 0; i < length; i++){
        items.push(Math.floor(Math.random() * 100))
    }
    return items 
}

// for item population
function populate(cont, items){
    for(let item of items){
        const node = document.createElement("div")
        node.textContent = `Random: ${item}`
        cont.appendChild(node)
    }
}
// initial items on load
const firstBatch = getRandoms(20)
populate(container, firstBatch)

