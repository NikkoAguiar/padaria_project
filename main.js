let tipo1 = 0, tipo2 = 0, tipo3 = 0, estoqueTipo1 = 600, estoqueTipo2 = 200, estoqueTipo3 = 200, forno = 0, caixa = 0.0, dia = 1;

$(document).ready(function(){
    function dormir(){
        dia+= 1;
        estoqueTipo1 = 600;
        estoqueTipo2 = 200;
        estoqueTipo3 = 200;
        console.log(estoqueTipo1, estoqueTipo2, estoqueTipo3, dia);
        $('#texto_calendario').empty('p');
        $(`<p>Dia ${dia}!</p>`).appendTo('#texto_calendario');
    }

    function verificarEstoque(){
        $('#texto_estoque').empty('p');
        $(`<p>O estoque contém: ${estoqueTipo1} massas de pães franceses, ${estoqueTipo2} massas de massinhas doces e ${estoqueTipo3} massas de baguetes.</p>`).appendTo('#texto_estoque');
    }

    function Verificarforno(){
        $('#texto_forno').empty('p');
        $(`<p>O forno contém ${forno} pães, contendo: ${tipo1} pães franceses, ${tipo2} massinhas doces e ${tipo3} baguetes.</p>`).appendTo('#texto_forno');
    }


    $('#assar_paes').click(function(e){
        $('#paes').css('display', 'none');
        $('#calendario').slideUp();
        $('#forno_vazio').slideUp();
        $('#estoque').slideUp();
        $('#caixa').slideUp();
        $('#selecao_de_paes').slideUp();
        $('#forno_cheio').slideDown();
        $('#texto_assar').css('display', 'block');
        $('#texto_vender').css('display', 'none');
        $('#texto_forno').css('display', 'none');
        $('#texto_estoque').css('display', 'none');
        $('#texto_caixa').css('display', 'none');
        $('#texto_calendario').css('display', 'none');

    })
    $('#vender_paes').click(function(e){
        $('#paes').css('display', 'block');
        $('#paes').click(function(e){
            $('#numero_de_paes').css('display', 'block');
            $('#paes').css('display', 'none');
        })


        $('#calendario').slideUp();
        $('#forno_vazio').slideUp();
        $('#estoque').slideUp();
        $('#caixa').slideUp();
        $('#forno_cheio').slideUp();
        $('#selecao_de_paes').slideDown();
        $('#texto_assar').css('display', 'none');
        $('#texto_vender').css('display', 'block');
        $('#texto_forno').css('display', 'none');
        $('#texto_estoque').css('display', 'none');
        $('#texto_caixa').css('display', 'none');
        $('#texto_calendario').css('display', 'none');
    })
    $('#verificar_estoque').click(function(e){
        verificarEstoque();
        $('#paes').css('display', 'none');
        $('#calendario').slideUp();
        $('#forno_vazio').slideUp();
        $('#caixa').slideUp();
        $('#forno_cheio').slideUp();
        $('#selecao_de_paes').slideUp();
        $('#estoque').slideDown();
        $('#texto_assar').css('display', 'none');
        $('#texto_vender').css('display', 'none');
        $('#texto_forno').css('display', 'none');
        $('#texto_estoque').css('display', 'block');
        $('#texto_caixa').css('display', 'none');
        $('#texto_calendario').css('display', 'none');
    })
    $('#verificar_forno').click(function(e){
        Verificarforno();
        $('#paes').css('display', 'none');
        $('#calendario').slideUp();
        $('#caixa').slideUp();
        $('#forno_cheio').slideUp();
        $('#selecao_de_paes').slideUp();
        $('#estoque').slideUp();
        $('#forno_vazio').slideDown();
        $('#texto_assar').css('display', 'none');
        $('#texto_vender').css('display', 'none');
        $('#texto_forno').css('display', 'block');
        $('#texto_estoque').css('display', 'none');
        $('#texto_caixa').css('display', 'none');
        $('#texto_calendario').css('display', 'none');
    })
    $('#verificar_caixa').click(function(e){
        $('#paes').css('display', 'none');
        $('#calendario').slideUp();
        $('#forno_cheio').slideUp();
        $('#selecao_de_paes').slideUp();
        $('#estoque').slideUp();
        $('#forno_vazio').slideUp();
        $('#caixa').slideDown();
        $('#texto_assar').css('display', 'none');
        $('#texto_vender').css('display', 'none');
        $('#texto_forno').css('display', 'none');
        $('#texto_estoque').css('display', 'none');
        $('#texto_caixa').css('display', 'block');
        $('#texto_calendario').css('display', 'none');
    })
    $('#fechar_por_hoje').click(function(e){
        dormir();
        $('#paes').css('display', 'none');
        $('#forno_cheio').slideUp();
        $('#selecao_de_paes').slideUp();
        $('#estoque').slideUp();
        $('#forno_vazio').slideUp();
        $('#caixa').slideUp();
        $('#calendario').slideDown();
        $('#texto_assar').css('display', 'none');
        $('#texto_vender').css('display', 'none');
        $('#texto_forno').css('display', 'none');
        $('#texto_estoque').css('display', 'none');
        $('#texto_caixa').css('display', 'none');
        $('#texto_calendario').css('display', 'block');
    })
})