//  evento clik usando jquery//

$("button").click(
    function () {

        let cep= $("#cep").val();
        $.ajax(
            {
                url:"https://viacep.com.br/ws/"+ cep +"/json",  
                type:"get",
                success: function(resp){
                    console.log(resp);

                    // primeira forma

                    // let p = $("<p></p>");
                    // p.text(resp.logradouro + " . " + resp.bairro + " . " + resp.uf);
                    // $("#resultado").append(p);

                    $('<p>',
                       {
                         text: resp.logradouro + "/ " + resp.bairro,
                         class:"btn btn-success form-control"
                       }
                    
                    ).appendTo('#resultado');

                },
                error: function(erro){
                    console.warn(erro);

                }
            }
        );

    }
);