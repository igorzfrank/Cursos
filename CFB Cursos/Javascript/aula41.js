const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MYSQL", "ReactNative"]

cursos.map((el, chave)=> {
    const newElement = document.createElement("div")
    newElement.setAttribute("id", "c"+chave+1)
    newElement.setAttribute("class", "curso c1")
    newElement.innerHTML = el

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src","./icone_lixeira.png")
    btn_lixeira.setAttribute("class","btn_lixeira")
    
    btn_lixeira.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })
   
    newElement.appendChild(btn_lixeira)
    caixa1.appendChild(newElement)
})