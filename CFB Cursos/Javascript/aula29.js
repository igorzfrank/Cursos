function aluno(nome, nota){
    this.nome = nome
    this.nota = nota
    
    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome);
            console.log(this.nota)
        },4000)
    }

    this.dados_arrow = function(){
        setTimeout(()=>{
            console.log(this.nome);
            console.log(this.nota)
        },4000)
    }
}

const al1 = new aluno("Igor", 10)
al1.dados_anonimo()

al1.dados_arrow()