<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title> Checkout
 </title>
    
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="public/img/favicon.png">
    <link rel="stylesheet" href="public/css/owl.carousel.min.css"> 
    <link rel="stylesheet" href="public/css/owl.theme.default.min.css"> 
    <link rel="stylesheet" href="public/css/parallax.css">    
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" href="public/css/checkout.css">    
    

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    
    <script type="text/javascript" src="public/js/jquery.min.js"></script>     
</head>
<body id="bodyApp" >
<!--body-->
<div id="wait_a_moment" class=""><i id="spinner" class="fas fa-spinner"></i></div><!-- espere um momento -->
<header>
    <nav class="container-fluid nav-checkout">
        <div class="nav">
            <div class="col-2 img-logo">
                <!-- Ao add a logo da loja, *Usar SEMPRE o mesmo template para checkout igual p/ todos. Chamar imagem previamente gravado em db -->
                <h6><img src="public/img/assiz-logo-500x120px.png" height="40px" alt="Imagem logo empresa"></h6>
            </div>
            <div class="col-8"></div>
            <div class="col-2 dados-seguros"><h6><span class="material-icons">verified_user</span></h6>Seus dados totalmente seguros</div>
        </div>
    </nav>
    </header>

<div class="container-fluid">
    <input type="hidden" id="device" value="desktop">
    <input type="hidden" id="clear_cart_and_clear_cache" value="">
    <div class="row checkout-row1">

        <div class="col-4">
            <div class="form-checkout">
                <h6>Comprar Como?<i class="material-icons icon-autorenew" id="iconAutorenew" onclick="IconAutorenewON();">autorenew</i></h6>
                <div class="imput-checkout ">

                    <p>
                        <!-- Pessoa - CPF -->
                        <a id="dadosClienteCPF" class="btn btn-outline-secondary form-control" data-toggle="collapse" href="#collapsePerson" role="button" aria-expanded="false" aria-controls="collapseExample" onclick="EscolheClienteCPF();"><span class="material-icons btn-empresa"> person </span> Pessoa - CPF
                        </a>
                    </p>
                    <div class="collapse" id="collapsePerson">
                        <div id="dadosCliente">
                            <span class="material-icons ">mark_email_read</span>
                            <input id="input_email" class="form-control" type="text" placeholder="seu-email@exemplo.com">

                            <span class="material-icons "> person </span>
                            <input id="input_name" class="form-control" type="text" placeholder="José João Da Silva">

                            <span class="icon-cpf"><b> CPF </b></span>
                            <input value="045.126.049-01" class="form-control " name="cpf" id="cpf" type="tel" placeholder="Digite seu CPF" data-mask="000.000.000-00" minlength="14" maxlength="14" required="" autocomplete="off" onchange="BuscaCPFdoImput(value);">

                            <span class="material-icons"> local_phone </span>
                            <input class="form-control" id="telefone" name="telefone" type="tel" placeholder="Telefone residencial opcional" data-mask-type="tel" data-mask="(00) 0000-0000" maxlength="14" minlength="14" value="" autocomplete="off">

                            <span class="material-icons"> phone_iphone </span>
                            <input class="form-control" value="(41) 99999-9999" id="celular" name="celular" type="tel" placeholder="Telefone celular" data-mask-type="tel" data-mask="(00) 00000-0000" maxlength="15" value="" required="" autocomplete="off" onchange="ValidaCelular(value);">
                        </div>

                    </div>

                    <p>
                        <!-- Empresa - CNPJ -->
                        <a id="dadosClienteCNPJ" class="btn btn-outline-secondary form-control" data-toggle="collapse" href="#collapseEmpresa" role="button" aria-expanded="false" aria-controls="collapseExample" onclick="EscolheClienteCNPJ();"><span class="material-icons btn-empresa"> business </span> Empresa - CNPJ
                        </a>
                    </p>
                    <div class="collapse" id="collapseEmpresa">
                        <input value="" class="form-control " name="cnpj" id="cnpj" type="tel" placeholder="Informe o CNPJ" data-mask="00.000.000/0000-00" maxlength="18" minlength="18" required="" autocomplete="off" onchange="ValidaCNPJ(value)">

                        <input type="hidden" class="form-control" id="razaoSocial" name="razao_social" placeholder="Razão Social" minlength="5" maxlength="120" required="">

                        <input type="text" class="form-control d-none" id="inscricaoEstadual" name="inscricao-estadual" maxlength="15" value="" placeholder="IE, se insento deixe em branco">

                    </div>

                </div>

                <button class="btn-confirmar" id="btnConfirmar" type="submit" onclick="CongelaDadosCliente();"><b>CONFIRMAR</b></button>
            </div>
        </div>

        <div id="checkout_col2" class="col-4 checkout-col2">

            <div id="divCep" class="div-cep">Endereço de entrega 
                <span id="iconEndereco" class="icon-endereco d-none" rel="tooltip" title="Mudar"><i class="material-icons endereco-done">done_outline</i>Salvo! &nbsp;&nbsp;&nbsp;<i class="material-icons" id="iconReloadEndereco" onclick="AlterarEnderecoDeEntrega();">build</i></span>
                <div id="divEntrega" class="imput-checkou input-entrega d-none">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend "><span class="input-group-text" id="">CEP</span></div>
                        <input value="82630240" class="form-control" name="cep" id="cep" type="tel" placeholder="Informe o CEP" data-mask="00000-000" maxlength="9" minlength="9" required="" onchange="BuscaCEP(value);">
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend "><span class="input-group-text" id=""><i class="material-icons">place</i></span></div>
                        <input value="" class="form-control" name="nome_rua" id="nomeRua" type="text" placeholder="Informe o endereço" maxlength="150" minlength="4" required="">
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend "><span class="input-group-text" id="">Número</span></div>
                        <input value="" class="form-control numero-rua" name="numero_rua" id="numeroRua" type="number" placeholder="" required="">
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend "><span class="input-group-text" id=""><i class="material-icons md-24">assignment</i></span></div>
                        <input value="" class="form-control" name="complemento" id="complemento" type="text" placeholder="Complemento opcional" maxlength="150" minlength="4">
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend "><span class="input-group-text" id="">
                            <i class="material-icons md-24" id="unidade_federal"></i></span>
                        </div>
                        <input value="" class="form-control" name="cidade" id="cidade" type="text" placeholder="Informe a cidade" maxlength="150" minlength="3" required="">
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend "><span class="input-group-text" id=""><i class="material-icons md-24">location_city</i></span></div>
                        <input value="" class="form-control" name="bairro" id="bairro" type="text" placeholder="Informe seu bairro" maxlength="150" minlength="4" required="">
                    </div>
                    
                    <button class="btn-confirmar" id="btnSalvarEndereco" type="submit" onclick="EnviarDadosCliente();"><b>SALVAR ENDEREÇO</b></button>
                </div>
            </div>

            <div id="divFormasDeEnvio" class="div-envio"><span class="" id="textFormasDeEnvio">Formas de envio</span>
                <h6>
                    <div id="groupBtnRadioCorreios" class="d-none btn-group-toggle " data-toggle="buttons">
                        <p><button type="button" class="btn-val-frete btn btn-outline" id="pacOption" onclick="LoadOptionCorreios(id);">Escolha PAC e receba em até 7 dias - R$19,90</button></p>
                        <p><button type="button" class="btn-val-frete btn btn-outline" id="sedexOption" onclick="LoadOptionCorreios(id);">Escolha SEDEX e receba em até 3 dias - R$29,90</button></p>
                        <form> <input type="hidden" name="_token" value="4WxtWPV1OIpDyWpptabzg6WLWfVepnbPJoigflMH"></form>
                    </div>
                </h6>
                <button class="btn-confirmar d-none" id="btnSalvarFormasDeEnvio" type="submit" onclick="SalvarFormasDeEnvio();"><b>SALVAR</b></button>
            </div>
            <div id="divPagamento" class="div-pagamento d-none"><span class="" id="textPagamento">Iniciar pagamento</span>
                  <p><button id="button_pay" class="btn btn-success button-pay">Pagar Agora</button></p>
            </div>
        </div>

        <div class="col-4 checkout-col3">
            <div class="bd-example-modal-lg ">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="modal-title title_resumo_carrinho" id="exampleModalLabel">
                                <h5>Resumo do pedido</h5>
                            </div>
                            <div class="">
                                <table id="tblListar" class="table table-checkout">
                                    <tbody>
                                        <tr id="tableRow0">
                                            <td>
                                                <img src="public/img/JaquetaBebeCozyClubMarron.png" alt="Jaqueta Bebe Cozy Club Marron" class="img img-responsive center-block" width="50" height="50">
                                            </td>
                                            <td>Jaqueta Bebe Marron</td>
                                            <td>1x</td><td>R$&nbsp;49,90</td>
                                            <td>
                                                <button id="0" value="49.9" onclick="RemoveItemDoMostrarCarrinho(id);" rel="tooltip" title="Remover">
                                                    <i class="fa fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr id="tableRow1">
                                            <td>
                                                <img src="public/img/conjMoletPeluciInfantFemDinoRosa.png" alt="Conjuto Moletom Pelucia Infant Fem Faella Dino - Rosa Pink" class="img img-responsive center-block" width="50" height="50">
                                            </td>
                                            <td>Conj Moletom Pelucia Inf Fem Rosa Pink</td>
                                            <td>1x</td><td>R$&nbsp;79,90</td>
                                            <td>
                                                <button id="1" value="79.9" onclick="RemoveItemDoMostrarCarrinho(id);" rel="tooltip" title="Remover">
                                                    <i class="fa fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div><!-- fechamneto class="modal-body data-dismiss="alert"> -->
                        <div class="div-left"> 
                            <input type="hidden" id="TotalValue" value="0">
                            <input type="hidden" id="TotalNotFormatted" value="0">
                            Sub-Total:
                            <button type="button" class="btn btn-sub-total" id="TotalItensFormatad">Calculando.. </button>
                        </div>
                            <button type="button" class="btn btn-total" id="TotalValueFormatad"> </button>
                    </div><!-- fechameneto class="modal-content" -->
                </div><!-- fechameneto class="modal-dialog modal-lg" -->
            </div><!-- fechameneto class="modal fade bd-example-modal-lgt" -->
        </div>

    </div>
    <!--row-->
</div>


<div class="container">
    <div class="row">
        <div class="col-12 text-center">
        </div>
    </div>    
</div>

<footer class="col-sm-12 footer" id="social">
    <div class="social-container">
        <ul class="social-icons">
            <li><a href="https://www.linkedin.com/in/assiz-marciel/" aria-label="Facebook (Abrindo em nova aba)" target="blank"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/Marciel-Assiz" aria-label="Facebook (Abrindo em nova aba)" target="blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://facebook.com/marciel.assiz" aria-label="Facebook (Abrindo em nova aba)" target="blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://instagram.com/assizmarciel" aria-label="Instagram (Abrindo em nova aba)" target="blank"><i class="fa fa-instagram"></i></a></li>
            <li><a href="mailto:http://marciel.emersom@gmail.com" aria-label="Send email (Abrindo em nova aba)" target="_self"><i class="fa fa-envelope-o"></i></a></li>
            <li><a href="https://api.whatsapp.com/send?1=pt_BR&phone=5541997129336&text" target="blank"><i class="fa fa-whatsapp"></i></a></li>
        </ul>

        <!--div class="col-12 text-center text-footer">
            <h6>Onde estamos</h6>
        </div--><!-- Habilitar apenas para lojas com retiradas presenciais(balcão) -->

        <div class="col-12 text-center text-footer">
            <h6>Contato</h6>
        </div>

        <div class="col-12 text-center text-footer">
            <h6>Informações</h6>
        </div>

        <div class="col-12 text-center text-footer">
            <h6>Categorias</h6>
        </div>
    </div>
</footer> 
</body>
    <script type="text/javascript" src="public/js/checkout.js"></script> 
    <script type="text/javascript" src="public/js/jquery.mask.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</html>
