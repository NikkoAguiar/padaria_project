let tipo1 = 0, tipo2 = 0, tipo3 = 0, estoqueTipo1 = 600, estoqueTipo2 = 200, estoqueTipo3 = 200, forno = 0, caixa = 0.0, dia = 1, cont;


$(document).ready(function(){

    $('input[name=receber_numero_de_paes_franceses]').mask('00', {
        placeholder: 'Exemplo: 15'
    })
    $('input[name=receber_numero_de_baguetes]').mask('00', {
        placeholder: 'Exemplo: 15'
    })
    $('input[name=receber_numero_de_massinhas_doces]').mask('00', {
        placeholder: 'Exemplo: 15'
    })

    function dormir(){
        dia+= 1;
        estoqueTipo1 = 600;
        estoqueTipo2 = 200;
        estoqueTipo3 = 200;
        forno = 0;
        tipo1 = 0;
        tipo2 = 0;
        tipo3 = 0;
        console.log(estoqueTipo1, estoqueTipo2, estoqueTipo3, dia);
        $('#texto_calendario').empty();
        $(`<p>Dia ${dia}!</p>`).appendTo('#texto_calendario');
    }

    function verificarEstoque(){
        $('#texto_estoque').empty();
        $(`<p>O estoque contém: ${estoqueTipo1} massas de pães franceses, ${estoqueTipo2} massas de massinhas doces e ${estoqueTipo3} massas de baguetes.</p>`).appendTo('#texto_estoque');
    }

    function VerificarForno(){
        $('#texto_forno').empty();
        $(`<p>O forno está com ${forno} pães, contendo: ${tipo1} pães franceses, ${tipo2} massinhas doces e ${tipo3} baguetes.</p>`).appendTo('#texto_forno');
    }

    function verificarCaixa(){
        $('#texto_caixa').empty();
        $(`<p>R$${caixa.toFixed(2)}</p>`).appendTo('#texto_caixa');
    }

    function assar(){
        if(forno == 100){
            $('#texto_assar').empty();
            $(`<p>O forno está cheio!</p>`).appendTo('#texto_assar');
        }else if(tipo1 == 0 && tipo2 > 0 && tipo3 > 0){
            tipo1 = 60;
            estoqueTipo1 -= tipo1;
            forno = 100;
            $('#texto_assar').empty();
            $(`<p>O espaço de pães franceses foi reabastecido!</p>`).appendTo('#texto_assar');
        }else if(tipo2 == 0 && tipo1 > 0 && tipo3 > 0){
            tipo2 = 20;
            estoqueTipo2 -= tipo2;
            forno = 100;
            $('#texto_assar').empty();
            $(`<p>O espaço de massinhas doces foi reabastecido!</p>`).appendTo('#texto_assar');
        }else if(tipo3 == 0 && tipo2 > 0 && tipo1 > 0){
            tipo3 = 20;
            estoqueTipo3 -= tipo3;
            forno = 100;
            $('#texto_assar').empty();
            $(`<p>O espaço de baguetes foi reabastecido!</p>`).appendTo('#texto_assar');
        }else if(tipo1 == 0 && tipo2 == 0 && tipo3 > 0){
            tipo1 = 60;
            estoqueTipo1 -= tipo1;
            tipo2 = 20;
            estoqueTipo2 -= tipo2;
            forno = 100;
            $('#texto_assar').empty();
            $(`<p>Os espaços de pães franceses e massinhas doces foram reabastecidos!</p>`).appendTo('#texto_assar');
        }else if(tipo2 == 0 && tipo3 == 0 && tipo1  > 0){
            tipo2 = 20;
            estoqueTipo2 -= tipo2;
            tipo3 = 20;
            estoqueTipo3 -= tipo3;
            forno = 100;
            $('#texto_assar').empty();
            $(`<p>Os espaços de massinhas doces e baguetes foram reabastecidos!</p>`).appendTo('#texto_assar');
        }else if(tipo1 == 0 && tipo3 == 0 && tipo2 > 0){
            tipo1 = 60;
            estoqueTipo1 -= tipo1;
            tipo3 = 20;
            estoqueTipo3 -= tipo3;
            forno = 100;
            $('#texto_assar').empty();
            $(`<p>Os espaços de pães franceses e baguetes foram reabastecidos!</p>`).appendTo('#texto_assar');
        }else if(tipo1 == 0 && tipo2 == 0 && tipo3 == 0){
            tipo1 = 60;
            tipo2 = 20;
            tipo3 = 20;
            forno = 100;
            estoqueTipo1 -= tipo1;
            estoqueTipo2 -= tipo2;
            estoqueTipo3 -= tipo3;
            $('#texto_assar').empty();
            $(`<p>O forno está com ${forno} pães, contendo: ${tipo1} pães franceses, ${tipo2} massinhas doces e ${tipo3} baguetes.</p>`).appendTo('#texto_assar');
        }else{
            $('#texto_assar').empty();
            $(`<p>Nenhum espaço está vazio ainda!</p>`).appendTo('#texto_assar');
        }
    }

    function vender(){
//=========================================================Botão de escolha de pães franceses.================================================================================
        $('button[name=pao_frances_escolher]').click(function(){
            $('form[name=paes]').css('display', 'none');
            $('form[name=numero_de_paes]').css('display', 'block');
            $('button[name=enviar_baguetes]').css('display', 'none');
            $('button[name=enviar_massinhas_doces]').css('display', 'none');
            $('button[name=enviar_paes_franceses]').css('display', 'block');
            $('input[name=receber_numero_de_paes_franceses]').css('display', 'block');
            $('input[name=receber_numero_de_baguetes]').css('display', 'none');
            $('input[name=receber_numero_de_massinhas_doces]').css('display', 'none');
            $('p[name=texto_vender]').empty();
            $('<p name="quantos" style="display: none;">Quantos pães franceses?</p>').appendTo('p[name=texto_vender]');
            $('p[name=quantos').fadeIn(2000);
            if(parseInt(tipo1) <= 0){
                $('form[name=numero_de_paes]').css('display', 'none');
                $('button[name=enviar_paes_franceses]').css('display', 'none');
                $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
                $('p[name=texto_vender]').empty();
                $('<p name="paes_insuficientes" style="display: none;">Você não possui pães franceses assados!</p>').appendTo('p[name=texto_vender]');
                $('p[name=paes_insuficientes]').fadeIn(2000);
                $('form[name=form_padaria]').fadeIn(1000);
            }else{
                $('button[name=enviar_paes_franceses]').click(function(){
                    cont = $('input[name=receber_numero_de_paes_franceses]').val();
                    if(parseInt(cont) > tipo1){
                        $('button[name=enviar_paes_franceses]').css('display', 'none');
                        $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
                        $('form[name=numero_de_paes]').css('display', 'none');
                        $('p[name=texto_vender').empty();
                        $(`<p name="paes_demais" style="display: none;">O forno só possui ${tipo1} pães franceses!</p>`).appendTo('p[name=texto_vender]');
                        $('p[name=paes_demais]').fadeIn(2000);
                        $('form[name=form_padaria]').fadeIn(1000);
                    }else{
                        tipo1 -= $('input[name=receber_numero_de_paes_franceses]').val();
                        forno = tipo1 + tipo2 + tipo3;
                        caixa += 0.91 * $('input[name=receber_numero_de_paes_franceses]').val();
                        $('p[name=texto_vender]').empty();
                        $(`<p name="venda_bem_sucedida" style="display: none;">O caixa tem um total de R$${caixa.toFixed(2)}, você ficou com ${tipo1} pães franceses sobrando.</p>`).appendTo('p[name=texto_vender]');
                        $('p[name=venda_bem_sucedida]').fadeIn(2000);
                        $('button[name=enviar_paes_franceses]').css('display', 'none');
                        $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
                        $('form[name=numero_de_paes]').css('display', 'none');
                        $('input[name=receber_numero_de_paes_franceses]').val(0);
                        $('form[name=form_padaria]').fadeIn(1000);
                    }
                })
            }
            $('button[name=botao_sair]').click(function(){
                $('p[name=texto_vender]').empty();
                $(`<p name="cancelar" style="display: none;">O que quer fazer?</p>`).appendTo('p[name=texto_vender]');
                $('p[name=cancelar]').fadeIn(2000);
                $('img[name=selecao_de_paes]').slideUp();
                $('form[name=numero_de_paes]').css('display', 'none');
                $('form[name=form_padaria]').fadeIn(1000);
            })
        })
//=========================================================Botão de escolha de massinhas doces.================================================================================
        $('button[name=massinha_doce_escolher]').click(function(){
            $('form[name=paes]').css('display', 'none');
            $('form[name=numero_de_paes]').css('display', 'block');
            $('button[name=enviar_baguetes]').css('display', 'none');
            $('button[name=enviar_massinhas_doces]').css('display', 'block');
            $('button[name=enviar_paes_franceses]').css('display', 'none');
            $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
            $('input[name=receber_numero_de_baguetes]').css('display', 'none');
            $('input[name=receber_numero_de_massinhas_doces]').css('display', 'block');
            $('p[name=texto_vender]').empty();
            $('<p name="quantos" style="display: none;">Quantas massinhas doces?</p>').appendTo('p[name=texto_vender]');
            $('p[name=quantos').fadeIn(2000);
            if(parseInt(tipo2) <= 0){
                $('form[name=numero_de_paes]').css('display', 'none');
                $('button[name=enviar_massinhas_doces]').css('display', 'none');
                $('input[name=receber_numero_de_massinhas_doces]').css('display', 'none');
                $('p[name=texto_vender]').empty();
                $('<p name="paes_insuficientes" style="display: none;">Você não possui massinhas doces assadas!</p>').appendTo('p[name=texto_vender]');
                $('p[name=paes_insuficientes]').fadeIn(2000);
                $('form[name=form_padaria]').fadeIn(1000);
            }else{
                $('button[name=enviar_massinhas_doces]').click(function(){
                    cont = $('input[name=receber_numero_de_massinhas_doces]').val();
                    if(parseInt(cont) > tipo2){
                        $('button[name=enviar_massinhas_doces]').css('display', 'none');
                        $('input[name=receber_numero_de_massinhas_doces]').css('display', 'none');
                        $('form[name=numero_de_paes]').css('display', 'none');
                        $('p[name=texto_vender').empty();
                        $(`<p name="paes_demais" style="display: none;">O forno só possui ${tipo2} massinhas doces!</p>`).appendTo('p[name=texto_vender]');
                        $('p[name=paes_demais]').fadeIn(2000);
                        $('form[name=form_padaria]').fadeIn(1000);
                    }else{
                        tipo2 -= $('input[name=receber_numero_de_massinhas_doces]').val();
                        forno = tipo1 + tipo2 + tipo3;
                        caixa += 1.50 * $('input[name=receber_numero_de_massinhas_doces]').val();
                        $('p[name=texto_vender]').empty();
                        $(`<p name="venda_bem_sucedida" style="display: none;">O caixa tem um total de R$${caixa.toFixed(2)}, você ficou com ${tipo2} massinhas doces sobrando.</p>`).appendTo('p[name=texto_vender]');
                        $('p[name=venda_bem_sucedida]').fadeIn(2000);
                        $('button[name=enviar_massinhas_doces]').css('display', 'none');
                        $('input[name=receber_numero_de_massinhas_doces]').css('display', 'none');
                        $('form[name=numero_de_paes]').css('display', 'none');
                        $('input[name=receber_numero_de_massinhas_doces]').val(0);
                        $('form[name=form_padaria]').fadeIn(1000);
                    }
                })
            }
            $('button[name=botao_sair]').click(function(){
                $('p[name=texto_vender]').empty();
                $(`<p name="cancelar" style="display: none;">O que quer fazer?</p>`).appendTo('p[name=texto_vender]');
                $('p[name=cancelar]').fadeIn(2000);
                $('img[name=selecao_de_paes]').slideUp();
                $('form[name=numero_de_paes]').css('display', 'none');
                $('form[name=form_padaria]').fadeIn(1000);
            })
        })
//=========================================================Botão de escolha de baguetes.=======================================================================================
        $('button[name=baguete_escolher]').click(function(){
            $('form[name=paes]').css('display', 'none');
            $('form[name=numero_de_paes]').css('display', 'block');
            $('button[name=enviar_baguetes]').css('display', 'block');
            $('button[name=enviar_massinhas_doces]').css('display', 'none');
            $('button[name=enviar_paes_franceses]').css('display', 'none');
            $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
            $('input[name=receber_numero_de_baguetes]').css('display', 'block');
            $('input[name=receber_numero_de_massinhas_doces]').css('display', 'none');
            $('p[name=texto_vender]').empty();
            $('<p name="quantos" style="display: none;">Quantas baguetes?</p>').appendTo('p[name=texto_vender]');
            $('p[name=quantos').fadeIn(2000);
            if(parseInt(tipo3) <= 0){
                $('form[name=numero_de_paes]').css('display', 'none');
                $('button[name=enviar_baguetes]').css('display', 'none');
                $('input[name=receber_numero_de_baguetes]').css('display', 'none');
                $('p[name=texto_vender]').empty();
                $('<p name="paes_insuficientes" style="display: none;">Você não possui baguetes assadas!</p>').appendTo('p[name=texto_vender]');
                $('p[name=paes_insuficientes]').fadeIn(2000);
                $('form[name=form_padaria]').fadeIn(1000);
            }else{
                $('button[name=enviar_baguetes]').click(function(){
                    cont = $('input[name=receber_numero_de_baguetes]').val();
                    if(parseInt(cont) > tipo3){
                        $('form[name=numero_de_paes]').css('display', 'none');
                        $('button[name=enviar_baguetes]').css('display', 'none');
                        $('input[name=receber_numero_de_baguetes]').css('display', 'none');
                        $('p[name=texto_vender').empty();
                        $(`<p name="paes_demais" style="display: none;">O forno só possui ${tipo3} baguetes!</p>`).appendTo('p[name=texto_vender]');
                        $('p[name=paes_demais]').fadeIn(2000);
                        $('form[name=form_padaria]').fadeIn(1000);
                    }else{
                        tipo3 -= $('#receber_numero_de_baguetes').val();
                        forno = tipo1 + tipo2 + tipo3;
                        caixa += 7.77 * $('#receber_numero_de_baguetes').val();
                        $('#texto_vender').empty();
                        $(`<p name="venda_bem_sucedida" style="display: none;">O caixa tem um total de R$${caixa.toFixed(2)}, você ficou com ${tipo3} baguetes sobrando.</p>`).appendTo('#texto_vender');
                        $('p[name=venda_bem_sucedida]').fadeIn(2000);
                        $('#enviar_baguetes').css('display', 'none');
                        $('#receber_numero_de_baguetes').css('display', 'none');
                        $('#numero_de_paes').css('display', 'none');
                        $('#receber_numero_de_baguetes').val(0);
                        $('form[name=form_padaria]').fadeIn(1000);
                    }

                })
            }
            $('button[name=botao_sair]').click(function(){
                $('p[name=texto_vender]').empty();
                $(`<p name="cancelar" style="display: none;">O que quer fazer?</p>`).appendTo('p[name=texto_vender]');
                $('p[name=cancelar]').fadeIn(2000);
                $('img[name=selecao_de_paes]').slideUp();
                $('form[name=numero_de_paes]').css('display', 'none');
                $('form[name=form_padaria]').fadeIn(1000);
            })
        })
    }

//===========================================Área onde as funções de cima vão ser chamadas de acordo com o click do botão correspondente=================================================


    $('#assar_paes').click(function(){
        assar();
        $('form[name=numero_de_paes]').css('display', 'none');
        $('form[name=paes]').css('display', 'none');
        $('img[name=calendario]').slideUp();
        $('img[name=forno_vazio]').slideUp();
        $('img[name=estoque]').slideUp();
        $('img[name=caixa').slideUp();
        $('img[name=selecao_de_paes]').slideUp();
        $('img[name=forno_cheio]').slideDown();
        $('#texto_assar').fadeIn(2000);
        $('#texto_vender').css('display', 'none');
        $('#texto_forno').css('display', 'none');
        $('#texto_estoque').css('display', 'none');
        $('#texto_caixa').css('display', 'none');
        $('#texto_calendario').css('display', 'none');

    })
    $('#vender_paes').click(function(){
        $('form[name=numero_de_paes]').css('display', 'none');
        $('p[name=texto_vender]').empty();
        $('<p name="o_que_vender" style="display: none;">O que quer vender?</p>').appendTo('p[name=texto_vender]');
        $('p[name=o_que_vender]').fadeIn(2000);
        $('form[name=form_padaria]').css('display', 'none');
        $('form[name=paes]').fadeIn(1000);
        vender();
        $('img[name=calendario]').slideUp();
        $('img[name=forno_vazio]').slideUp();
        $('img[name=estoque]').slideUp();
        $('img[name=caixa').slideUp();
        $('img[name=forno_cheio]').slideUp();
        $('img[name=selecao_de_paes]').slideDown();
        $('#texto_assar').css('display', 'none');
        $('#texto_vender').fadeIn(2000);
        $('#texto_forno').css('display', 'none');
        $('#texto_estoque').css('display', 'none');
        $('#texto_caixa').css('display', 'none');
        $('#texto_calendario').css('display', 'none');
    })
    $('#verificar_estoque').click(function(){
        $('form[name=numero_de_paes]').css('display', 'none');
        verificarEstoque();
        $('form[name=paes]').css('display', 'none');
        $('img[name=calendario]').slideUp();
        $('img[name=forno_vazio]').slideUp();
        $('img[name=caixa').slideUp();
        $('img[name=forno_cheio]').slideUp();
        $('img[name=selecao_de_paes]').slideUp();
        $('img[name=estoque]').slideDown();
        $('#texto_assar').css('display', 'none');
        $('#texto_vender').css('display', 'none');
        $('#texto_forno').css('display', 'none');
        $('#texto_estoque').fadeIn(2000);
        $('#texto_caixa').css('display', 'none');
        $('#texto_calendario').css('display', 'none');
    })
    $('#verificar_forno').click(function(){
        $('form[name=numero_de_paes]').css('display', 'none');
        VerificarForno();
        $('form[name=paes]').css('display', 'none');
        $('img[name=calendario]').slideUp();
        $('img[name=caixa').slideUp();
        $('img[name=forno_cheio]').slideUp();
        $('img[name=estoque]').slideUp();
        $('img[name=selecao_de_paes]').slideUp();
        $('img[name=forno_vazio]').slideDown();
        $('#texto_assar').css('display', 'none');
        $('#texto_vender').css('display', 'none');
        $('#texto_forno').fadeIn(2000);
        $('#texto_estoque').css('display', 'none');
        $('#texto_caixa').css('display', 'none');
        $('#texto_calendario').css('display', 'none');
    })
    $('#verificar_caixa').click(function(){
        $('form[name=numero_de_paes]').css('display', 'none');
        verificarCaixa();
        $('form[name=paes]').css('display', 'none');
        $('img[name=calendario]').slideUp();
        $('img[name=forno_cheio]').slideUp();
        $('img[name=estoque]').slideUp();
        $('img[name=forno_vazio]').slideUp();
        $('img[name=selecao_de_paes]').slideUp();
        $('img[name=caixa').slideDown();
        $('#texto_assar').css('display', 'none');
        $('#texto_vender').css('display', 'none');
        $('#texto_forno').css('display', 'none');
        $('#texto_estoque').css('display', 'none');
        $('#texto_caixa').fadeIn(2000);
        $('#texto_calendario').css('display', 'none');
    })
    $('#fechar_por_hoje').click(function(){
        $('form[name=numero_de_paes]').css('display', 'none');
        dormir();
        $('form[name=paes]').css('display', 'none');
        $('img[name=forno_cheio]').slideUp();
        $('img[name=estoque]').slideUp();
        $('img[name=forno_vazio]').slideUp();
        $('img[name=caixa').slideUp();
        $('img[name=selecao_de_paes]').slideUp();
        $('img[name=calendario]').slideDown();
        $('#texto_assar').css('display', 'none');
        $('#texto_vender').css('display', 'none');
        $('#texto_forno').css('display', 'none');
        $('#texto_estoque').css('display', 'none');
        $('#texto_caixa').css('display', 'none');
        $('#texto_calendario').fadeIn(2000);
    })
})