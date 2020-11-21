
function consultaCep () {
    $(".barra-progresso").show();
    var cerp = document.getElementById("cerp").value;
    var url = "https://viacep.com.br/ws/" + cerp + "/json/";
    

    console.log(url);
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#cep").html(response.cep);//em Ajax
            //document.getElementById("cep").innerHTML = response.cep;
            $("#logradouro").html(response.logradouro);//em Ajax
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            $("#bairro").html(response.bairro);//em Ajax
            //document.getElementById("bairro").innerHTML = response.bairro;
            $("#localidade").html(response.localidade);//em Ajax
            //document.getElementById("localidade").innerHTML = response.localidade;
            $("#uf").html(response.uf);//em Ajax
            //document.getElementById("uf").innerHTML = response.uf;
            $("#ddd").html(response.ddd);//em Ajax
            //document.getElementById("ddd").innerHTML = response.ddd;
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})