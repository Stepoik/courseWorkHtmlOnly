galery = document.querySelector(".galery")
main = document.querySelector(".main")

galery.addEventListener("click", (event)=>{
    if (event.target.tagName == "IMG"){
        let src = event.target.getAttribute("src")
        main.setAttribute("src", src)
    }
})

files = document.querySelector(".files")
isCtrlPressed = false
files.addEventListener("click", (event)=>{
    if (event.target.tagName == "P"){
        if (!isCtrlPressed){
            for (i of files.children){
                if (i != event.target){
                    i.classList.remove("selected")
                }
            }
        }
        event.target.classList.toggle("selected")
    }
})

files.onmousedown = (e)=>{
    if (e.target == files){
        return
    }
    let target = e.target
    let shiftx = e.clientX - target.getBoundingClientRect().left
    let shifty = e.clientY - target.getBoundingClientRect().top


    function move(x,y){
        target.style.position = "absolute"
        target.style.left = x-shiftx+"px"
        target.style.top = y-shifty+10+"px"
    }
    function moveevent(e){
        move(e.pageX,e.pageY)
    }
    document.addEventListener("mousemove", moveevent)

    document.onmouseup = (e)=>{
        document.removeEventListener("mousemove", moveevent)
        if (e.target.classList.contains("bucket")){
            e.target.appendChild(target)
        }
        if (e.target.parentNode && e.target.parentNode.classList.contains("bucket")){
            e.target.parentNode.appendChild(target)
        }
        target.style.position = "static"
        target.style.removeProperty("left")
        target.style.removeProperty("top")
    }
}
document.querySelector(".bucket").onmousedown = (e)=>{
    if (e.target == document.querySelector(".bucket")){
        return
    }
    let target = e.target
    let shiftx = e.clientX - target.getBoundingClientRect().left
    let shifty = e.clientY - target.getBoundingClientRect().top


    function move(x,y){
        target.style.position = "absolute"
        target.style.left = x-shiftx+"px"
        target.style.top = y-shifty+"px"
    }
    function moveevent(e){
        move(e.pageX,e.pageY)
    }
    document.addEventListener("mousemove", moveevent)

    document.onmouseup = (e)=>{
        document.removeEventListener("mousemove", moveevent)
        if (e.target.classList.contains("files")){
            e.target.appendChild(target)
        }
        if (e.target.parentNode && e.target.parentNode.classList.contains("files")){
            e.target.parentNode.appendChild(target)
        }
        target.style.position = "static"
        target.style.removeProperty("left")
        target.style.removeProperty("top")
    }
}

document.onkeydown = (e)=>{
    if (e.ctrlKey){
        isCtrlPressed = true
    }
}
document.onkeyup = (e)=>{
    if (e.key == "Control"){
        isCtrlPressed = false
    }
}

let slider_item = document.querySelector(".slider_item")
slider_item.onmousedown = (e)=>{
    console.log(e)
    let shiftx = e.clientX - slider_item.offsetLeft
    if (shiftx == NaN){

    }
    function move(x){
        console.log(shiftx)
        slider_item.style.left = x-shiftx+"px"
        if (x-shiftx < 0){
            slider_item.style.left = "0px";
        }

        if (x-shiftx > slider_item.parentNode.getBoundingClientRect().width-slider_item.getBoundingClientRect().width){
            slider_item.style.left = (slider_item.parentNode.getBoundingClientRect().width-slider_item.getBoundingClientRect().width)+"px";
        }
    }
    function moveevent(e){
        move(e.pageX)
    }
    document.addEventListener("mousemove", moveevent)
    document.onmouseup = (e)=>{
        console.log("here")
        document.removeEventListener("mousemove", moveevent)
    }
}
let y = -60
let array = []
let direct = 1
let colors = ["red", "yellow", "blue", "green"]
let color = colors[0]
let z_index = 0
setInterval(function (){
    let element = document.createElement("div")
    element.style.position = "absolute"
    element.style.width = "20px";
    element.style.height= "20px";
    element.classList.add("haha")
    element.style.backgroundColor = color;
    let x = Math.sqrt(3600-y*y)
    element.style.left = x*direct+1000+"px"
    element.style.top = y+700+"px"
    element.style.borderRadius = "50%"
    element.style.zIndex = z_index
    document.body.appendChild(element)
    console.log(color)
    y+=direct
    if (y >= 60){
        direct = -1
    }
    console.log(x)
    if (y <= -60){
        color = colors[Math.floor(Math.random()*colors.length)]
        direct = 1
        array = []
        z_index++
    }
}, 20)

