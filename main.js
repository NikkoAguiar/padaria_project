let tipo1, tipo2, tipo3, estoqueTipo1, estoqueTipo2, estoqueTipo3, forno, caixa, dia;

function dormir(){
    dia = document.getElementById('texto_calendario');
    parseInt(dia) += 1;
    parseInt(estoqueTipo1) = 600;
    parseInt(estoqueTipo2) = 200;
    parseInt(estoqueTipo3) = 200;
    console.log(estoqueTipo1, estoqueTipo2, estoqueTipo3, dia);
    $('#texto_calendario').remove('p', this);
    $(`<p>${dia}</p>`).appendTo('#texto_calendario');
}



$(document).ready(function(){
    
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