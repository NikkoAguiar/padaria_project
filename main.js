$(document).ready(function(){
    $('#assar_paes').click(function(e){
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