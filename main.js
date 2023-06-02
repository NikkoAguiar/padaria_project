let tipo1 = 0, tipo2 = 0, tipo3 = 0, estoqueTipo1 = 600, estoqueTipo2 = 200, estoqueTipo3 = 200, forno = 0, caixa = 0.0, dia = 1;
let cont;

$(document).ready(function(){
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
        $(`<p>O forno contém ${forno} pães, contendo: ${tipo1} pães franceses, ${tipo2} massinhas doces e ${tipo3} baguetes.</p>`).appendTo('#texto_forno');
    }

    function verificarCaixa(){
        $('#texto_caixa').empty();
        $(`<p>R$${caixa.toFixed(2)}</p>`).appendTo('#texto_caixa');
    }

    function assar(){
        if(forno == 100){
            $('#texto_assar').empty();
            $(`<p>O forno está cheio!</p>`).appendTo('#texto_assar');
        }else{
            tipo1 = 60;
            tipo2 = 20;
            tipo3 = 20;
            forno = 100;
            estoqueTipo1 -= tipo1;
            estoqueTipo2 -= tipo2;
            estoqueTipo3 -= tipo3;
            $('#texto_assar').empty();
            $(`<p>O forno está com ${forno} pães, contendo: ${tipo1} pães franceses, ${tipo2} massinhas doces e ${tipo3} baguetes.</p>`).appendTo('#texto_assar');
        }
    }

    function vender(){
        $('button[name=pao_frances_escolher]').click(function(e){
            $('form[name=paes]').css('display', 'none');
            $('form[name=numero_de_paes]').css('display', 'block');
            $('button[name=enviar_baguetes]').css('display', 'none');
            $('button[name=enviar_massinhas_doces]').css('display', 'none');
            $('button[name=enviar_paes_franceses]').css('display', 'block');
            $('input[name=receber_numero_de_paes_franceses]').css('display', 'block');
            $('input[name=receber_numero_de_baguetes]').css('display', 'none');
            $('input[name=receber_numero_de_massinhas_doces]').css('display', 'none');
            if(parseInt(tipo1) <= 0){
                $('form[name=numero_de_paes]').css('display', 'none');
                $('button[name=enviar_paes_franceses]').css('display', 'none');
                $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
                $('p[name=texto_vender]').empty();
                $('<p>Você não possui pães franceses assados!</p>').appendTo('p[name=texto_vender]');
            }else{
                $('button[name=enviar_paes_franceses]').click(function(e){
                    cont1 = $('input[name=receber_numero_de_paes_franceses]').val();
                    if(parseInt(cont1) > tipo1){
                        $('button[name=enviar_paes_franceses]').css('display', 'none');
                        $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
                        $('form[name=numero_de_paes]').css('display', 'none');
                        $('p[name=texto_vender').empty();
                        $(`<p>O forno só possui ${tipo1} pães franceses!</p>`).appendTo('p[name=texto_vender]');
                    }else{
                        tipo1 -= $('input[name=receber_numero_de_paes_franceses]').val();
                        forno = tipo1 + tipo2 + tipo3;
                        caixa += 0.91 * $('input[name=receber_numero_de_paes_franceses]').val();
                        $('p[name=texto_vender]').empty();
                        $(`<p>O caixa tem um total de R$${caixa.toFixed(2)}, você ficou com ${tipo1} pães franceses sobrando.</p>`).appendTo('p[name=texto_vender]');
                        $('button[name=enviar_paes_franceses]').css('display', 'none');
                        $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
                        $('form[name=numero_de_paes]').css('display', 'none');
                        $('input[name=receber_numero_de_paes_franceses]').val(0);
                    }
                })
            }
            $('button[name=botao_sair]').click(function(e){
                $('p[name=texto_vender]').empty();
                $(`<p>O que quer fazer?</p>`).appendTo('p[name=texto_vender]');
                $('form[name=numero_de_paes]').css('display', 'none');
            })
        })

        $('button[name=massinha_doce_escolher]').click(function(e){
            $('form[name=paes]').css('display', 'none');
            $('form[name=numero_de_paes]').css('display', 'block');
            $('button[name=enviar_baguetes]').css('display', 'none');
            $('button[name=enviar_massinhas_doces]').css('display', 'blcok');
            $('button[name=enviar_paes_franceses]').css('display', 'none');
            $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
            $('input[name=receber_numero_de_baguetes]').css('display', 'none');
            $('input[name=receber_numero_de_massinhas_doces]').css('display', 'block');
            if(parseInt(tipo2) <= 0){
                $('form[name=numero_de_paes]').css('display', 'none');
                $('button[name=enviar_massinhas_doces]').css('display', 'none');
                $('input[name=receber_numero_de_massinhas_doces]').css('display', 'none');
                $('p[name=texto_vender]').empty();
                $('<p>Você não possui massinhas doces assadas!</p>').appendTo('p[name=texto_vender]');
            }else{
                $('button[name=enviar_massinhas_doces]').click(function(e){
                    cont = $('input[name=receber_numero_de_paes_franceses]').val();
                    if(parseInt(cont) > tipo1){
                        $('button[name=enviar_paes_franceses]').css('display', 'none');
                        $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
                        $('form[name=numero_de_paes]').css('display', 'none');
                        $('p[name=texto_vender').empty();
                        $(`<p>O forno só possui ${tipo1} pães franceses!</p>`).appendTo('p[name=texto_vender]');
                    }else{
                        tipo1 -= $('input[name=receber_numero_de_paes_franceses]').val();
                        forno = tipo1 + tipo2 + tipo3;
                        caixa += 0.91 * $('input[name=receber_numero_de_paes_franceses]').val();
                        $('p[name=texto_vender]').empty();
                        $(`<p>O caixa tem um total de R$${caixa.toFixed(2)}, você ficou com ${tipo1} pães franceses sobrando.</p>`).appendTo('p[name=texto_vender]');
                        $('button[name=enviar_paes_franceses]').css('display', 'none');
                        $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
                        $('form[name=numero_de_paes]').css('display', 'none');
                        $('input[name=receber_numero_de_paes_franceses]').val(0);
                    }
                })
            }
            $('button[name=botao_sair]').click(function(e){
                $('p[name=texto_vender]').empty();
                $(`<p>O que quer fazer?</p>`).appendTo('p[name=texto_vender]');
                $('form[name=numero_de_paes]').css('display', 'none');
            })
        })

        $('button[name=baguete_escolher]').click(function(e){
            $('form[name=paes]').css('display', 'none');
            $('form[name=numero_de_paes]').css('display', 'block');
            $('button[name=enviar_baguetes]').css('display', 'block');
            $('button[name=enviar_massinhas_doces]').css('display', 'none');
            $('button[name=enviar_paes_franceses]').css('display', 'none');
            $('input[name=receber_numero_de_paes_franceses]').css('display', 'none');
            $('input[name=receber_numero_de_baguetes]').css('display', 'block');
            $('input[name=receber_numero_de_massinhas_doces]').css('display', 'none');
            if(parseInt(tipo3) <= 0){
                $('form[name=numero_de_paes]').css('display', 'none');
                $('button[name=enviar_baguetes]').css('display', 'none');
                $('input[name=receber_numero_de_baguetes]').css('display', 'none');
                $('p[name=texto_vender]').empty();
                $('<p>Você não possui baguetes assadas!</p>').appendTo('p[name=texto_vender]');
            }else{
                $('button[name=enviar_baguetes]').click(function(e){
                    cont = $('input[name=receber_numero_de_baguetes]').val();
                    if(parseInt(cont) > tipo3){
                        $('form[name=numero_de_paes]').css('display', 'none');
                        $('button[name=enviar_baguetes]').css('display', 'none');
                        $('input[name=receber_numero_de_baguetes]').css('display', 'none');
                        $('p[name=texto_vender').empty();
                        $(`<p>O forno só possui ${tipo3} baguetes!</p>`).appendTo('p[name=texto_vender]');
                    }else{
                        tipo3 -= $('#receber_numero_de_baguetes').val();
                        forno = tipo1 + tipo2 + tipo3;
                        caixa += 7.77 * $('#receber_numero_de_baguetes').val();
                        $('#texto_vender').empty();
                        $(`<p>O caixa tem um total de R$${caixa.toFixed(2)}, você ficou com ${tipo3} baguetes sobrando.</p>`).appendTo('#texto_vender');
                        $('#enviar_baguetes').css('display', 'none');
                        $('#receber_numero_de_baguetes').css('display', 'none');
                        $('#numero_de_paes').css('display', 'none');
                        $('#receber_numero_de_baguetes').val(0);
                    }

                })
            }
            $('button[name=botao_sair]').click(function(e){
                $('#texto_vender').empty();
                $(`<p>O que quer fazer?</p>`).appendTo('#texto_vender');
                $('#numero_de_paes').css('display', 'none');
            })
        })
    }

//================================================================================================================================================================================


    $('#assar_paes').click(function(e){
        assar();
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
        vender();
        $('#paes').css('display', 'block');
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
        VerificarForno();
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
        verificarCaixa();
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