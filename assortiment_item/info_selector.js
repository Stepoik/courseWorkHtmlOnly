let infos = {order:document.querySelector(".order_info"),
    grav:document.querySelector(".grav_info"),
    delivery: document.querySelector(".delivery_info"),
    garant: document.querySelector(".garant_info")}

function setHidden() {
    for (let element in infos) {
        infos[element].hidden = true
    }
}
let order_button = document.querySelector(".order")
order_button.onclick = ()=>{
    setHidden()
    clearSelected()
    infos.order.hidden = false
    order_button.classList.add("selected")
}

let grav_button = document.querySelector(".grav")

grav_button.onclick = ()=>{
    setHidden()
    clearSelected()
    infos.grav.hidden = false
    grav_button.classList.add("selected")
}

let delivery_button = document.querySelector(".delivery")

delivery_button.onclick = ()=>{
    setHidden()
    clearSelected()
    infos.delivery.hidden = false
    delivery_button.classList.add("selected")
}

let garant_button = document.querySelector(".garant")

garant_button.onclick = ()=>{
    setHidden()
    clearSelected()
    infos.garant.hidden = false
    garant_button.classList.add("selected")
}
function clearSelected(){
    order_button.classList.remove("selected")
    delivery_button.classList.remove("selected")
    garant_button.classList.remove("selected")
    grav_button.classList.remove("selected")
}
