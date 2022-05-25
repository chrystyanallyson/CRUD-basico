var dados = [];
function populatabela(){
    if(Array.isArray(dados)){
        $("#tblDados tbody").html("")
        dados.forEach(function(item){
            $("tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Sobrenome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Formação}</td>
            </tr>`)
        })
    }
}

$(function (){
    dados = JSON.parse(localStorage.getItem("__dados__"))
    if(dados){
        populatabela()
    }
    $("#btnSalvar").click(function(){
        
    })

})
