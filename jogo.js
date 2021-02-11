var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0
matriz_jogo['a'][2] = 0
matriz_jogo['a'][3] = 0

matriz_jogo['b'][1] = 0
matriz_jogo['b'][2] = 0
matriz_jogo['b'][3] = 0

matriz_jogo['c'][1] = 0
matriz_jogo['c'][2] = 0
matriz_jogo['c'][3] = 0

$(document).ready(function(){
    $("#btn_iniciar_jogo").click(function(){
    //invalida a digitação do apelidos dos jogadores:
        if($('#player1').val() == ''){
            alert('Apelido do jogador 1 não preenchido');
            return false;
        }
        if($('#player2').val() == ''){
            alert('Apelido do jogador 2 não preenchido');
            return false;
        }
        
        //Exibir os apelidos:

        $('#player1_jogo').html($("#player1").val());
        $('#player2_jogo').html($("#player2").val());
       
        //Troca a visualização das divs:

        $('#pagina_inicial').hide(); //escolnder
        $('#palco_jogo').show(); //mostrar
    });


    $('.jogada').click(function(){
        var id_campo_clicado = this.id; //this == faz a referencia ao elemento do contexto do click.
        $('#' + id_campo_clicado).off();
        jogada(id_campo_clicado);
    })

    function jogada(id){
        var icone = '' ;
        var ponto = 0;

        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;            
        }
        else{
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;             
        }
        rodada++;

        $('#' + id).css('background-image', icone);
        
        var linha_coluna = id.split('-'); // trunca uma cadeia de caracteres tranformando a informação em Array
        
        
        matriz_jogo[linha_coluna[0]] [linha_coluna[1]] = ponto;
       
        verifica_combinacao();

    }

    function verifica_combinacao(){
        //Verifica na horizontal:

        var pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['a'][i];
        }
        ganhador(pontos);
        
        pontos = 0;
        var pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['b'][i];
        }
        ganhador(pontos);
        
        pontos = 0;
        var pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['c'][i];
        }
        ganhador(pontos);

        //Verifica na Vertical:

        for(var l = 1; l <= 3; l++){
            
            pontos = 0;
            pontos += matriz_jogo['a'][l];
            pontos += matriz_jogo['b'][l];
            pontos += matriz_jogo['c'][l];

            ganhador(pontos);
        }

        //Verificar na Diagonal:

        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3]; 
        ganhador(pontos);
        
        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        ganhador(pontos);
    }

    function ganhador(pontos){
       if(pontos == -3){
            var jogada_1 = $('#player1').val();  
            alert(jogada_1 + " foi o Vencedor");
            $('.jogada').off();
       } 
       else if(pontos == 3){
            var jogada_2 = $('#player2').val();   
            alert(jogada_2 + " foi o Vencedor");
            $('.jogada').off();
       } 
    }

});