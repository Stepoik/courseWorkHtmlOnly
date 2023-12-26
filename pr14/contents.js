let content = document.querySelector("#contents")

content.addEventListener("click", (event)=>{
    let target = event.target
    if (target.tagName === "A"){
        let conf = confirm("Вы уверены, что хотите перейти по ссылке?")
        if (conf){
            return
        }
        event.preventDefault()
    }
})