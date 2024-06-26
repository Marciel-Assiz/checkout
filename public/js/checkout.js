window.onchange = setTimeout(function() { 
    let valorTotalCesta = 49.9+79.9; // 
    document.getElementById('TotalItensFormatad').innerHTML = parseFloat(valorTotalCesta).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
    document.getElementById('TotalValue').value = parseFloat(valorTotalCesta); 
    document.getElementById('TotalNotFormatted').value = parseFloat(valorTotalCesta);
    console.log('teste on window.load'); 
}, 800); 

function ApagaCarrinhoLocalStorage() {
    localStorage.removeItem('CarrinhoParaCheckout');
    localStorage.removeItem('MeuCarrinho');
    localStorage.removeItem('Contador_itens');
    localStorage.removeItem('OptionCorreios');
    localStorage.removeItem('RecarregaValores');
    localStorage.removeItem('TotalFrete');
    localStorage.removeItem('Welcome');
    localStorage.removeItem('ReloadChekout');

    // Data no passado
  let data = new Date(2010,0,01);
  // Converte a data para GMT
  data = data.toGMTString();
  // Apaga o cookie
  document.cookie = 'contador_itens=; expires=' + data + '; path=/';
}

function RemoveItemDoMostrarCarrinho(id) {
    if(id == 0){
        let valorTotalCesta = parseFloat(document.getElementById('TotalValue').value) - 49.9; 
        let totalNotFormatted = parseFloat(document.getElementById('TotalNotFormatted').value) - 49.9;
        if(parseInt(valorTotalCesta) > 0){
            document.getElementById('TotalNotFormatted').value = parseFloat(totalNotFormatted).toFixed(2); 
            document.getElementById('TotalValue').value = parseFloat(valorTotalCesta).toFixed(2);
            document.getElementById('TotalItensFormatad').innerHTML = valorTotalCesta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
            document.getElementById('TotalValueFormatad').innerHTML = "Total: <b>"+totalNotFormatted.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+"</b>";
        } else {
            document.getElementById('TotalNotFormatted').value = totalNotFormatted; 
            document.getElementById('TotalValue').value = valorTotalCesta;
            document.getElementById('TotalItensFormatad').innerHTML = valorTotalCesta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
            document.getElementById('TotalValueFormatad').innerHTML = "Seu carrinho está vazio.";
        }
        document.getElementById('tableRow0').classList.add("d-none");
    } else {
        let valorTotalCesta = parseFloat(document.getElementById('TotalValue').value) - 79.9; 
        let totalNotFormatted = parseFloat(document.getElementById('TotalNotFormatted').value) - 79.9; 
        if(parseInt(valorTotalCesta) > 0){
            document.getElementById('TotalNotFormatted').value = parseFloat(totalNotFormatted).toFixed(2); 
            document.getElementById('TotalValue').value = parseFloat(valorTotalCesta).toFixed(2);
            document.getElementById('TotalItensFormatad').innerHTML = valorTotalCesta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
            document.getElementById('TotalValueFormatad').innerHTML = "Total: <b>"+totalNotFormatted.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+"</b>";
        } else {
            document.getElementById('TotalNotFormatted').value = totalNotFormatted; 
            document.getElementById('TotalValue').value = valorTotalCesta;
            document.getElementById('TotalItensFormatad').innerHTML = valorTotalCesta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
            document.getElementById('TotalValueFormatad').innerHTML = "Seu carrinho está vazio.";
        }
        document.getElementById('tableRow1').classList.add("d-none");
    }
}

function EscolheClienteCPF() {
    document.getElementById('dadosClienteCNPJ').classList.add("d-none"); 
    document.getElementById('cnpj').classList.add("d-none"); 
    document.getElementById('collapsePerson').classList.remove("d-none");
    localStorage.setItem("TipoCliente", "CPF");
}

function EscolheClienteCNPJ() {
    document.getElementById('dadosClienteCPF').classList.add("d-none");
    document.getElementById('cnpj').classList.remove("d-none"); 
    document.getElementById('collapseEmpresa').classList.remove("d-none");
    localStorage.setItem("TipoCliente", "CNPJ");
}

function IconAutorenewON() {
    document.getElementById('dadosClienteCPF').classList.remove("d-none");
    document.getElementById('dadosClienteCNPJ').classList.remove("d-none");
    document.getElementById('collapsePerson').classList.add("d-none");
    document.getElementById('collapseEmpresa').classList.add("d-none");
    document.getElementById('iconAutorenew').classList.add("rotation-on");
    document.getElementById('btnConfirmar').innerHTML = "CONFIRMAR";
    document.getElementById('btnConfirmar').disabled = true;
    document.getElementById('cpf').value = "";
    document.getElementById('cnpj').value = "";
    setTimeout(function(){document.getElementById('iconAutorenew').classList.remove("rotation-on");},300);
}

function BuscaCPFdoImput(cpf) {
    let inputCPF = document.getElementById('cpf');
    let resposta = ValidaCPF(cpf);
    let btnConfirmar = document.getElementById('btnConfirmar');
    let celular = document.getElementById('celular');

    if (resposta == true) {
        inputCPF.classList.remove("cpf-ivalido");
        inputCPF.classList.add("cpf-valido");
        btnConfirmar.innerHTML = "CONFIRMAR";
        btnConfirmar.classList.remove("btn-cpf-ivalido");        
        //console.log("CPF e valido!");
    } else if (celular.value != '') {
        btnConfirmar.disabled = false;
    } else {
        //console.log("CPF invalido!");
        btnConfirmar.innerHTML = "CPF invalido!";
        inputCPF.classList.remove("cpf-valido");
        inputCPF.classList.add("cpf-ivalido");
        btnConfirmar.classList.add("btn-cpf-ivalido");
        btnConfirmar.disabled = true;
    }
}

function ValidaCelular(value) {
    console.log('ValidaCelular() on'); 
    if (value.length != 15) {
        btnConfirmar.innerHTML = "Celular obrigatório!";
    }
}

function ValidaCPF(cpf) { // Retorna true/false - ex param validarCPF("045.126.049-01")

	cpf = cpf.replace(/[^\d]+/g,'');

	if(cpf == '') { return false; }

	// Elimina CPFs invalidos ou com numeros repetios
	if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
        return false;
    }
	// Valida os numeros digitos
	add = 0;
	for (i=0; i < 9; i ++) 
		add += parseInt(cpf.charAt(i)) * (10 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11) { rev = 0; }
		
	if (rev != parseInt(cpf.charAt(9)))
		return false;
	
	// Valida 2o digito
	add = 0;
	for (i = 0; i < 10; i ++)
		add += parseInt(cpf.charAt(i)) * (11 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11)
		rev = 0;
	if (rev != parseInt(cpf.charAt(10)))
		return false;
		
    return true;
}

function ValidaCNPJ(cnpj) { 
    document.getElementById('wait_a_moment').classList.add("init-wait"); // escurece a tela 
    document.getElementById('spinner').classList.add("spinner"); // chama animation spiner temporizador
	cnpj = cnpj.replace(/[^\d]+/g,''); // function p/ limpar mascara . . -
    if (cnpj.length != 14 || cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" || cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || cnpj == "88888888888888" || cnpj == "99999999999999") {
        document.getElementById('btnConfirmar').innerHTML = "CNPJ invalido, preencha corretamente!";
        document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
        document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
    } else {
        document.getElementById('btnConfirmar').innerHTML = "CONFIRMAR";
        $.ajax({
            url:'/empresa/buscar-cnpj',  
            data: { cnpj: cnpj },
            complete: function (response) {
                var empresa = response.responseText;
                PreencheForm(empresa);
            },
            error: function () {
              console.log('Erro ao buscar CNPJ');
              document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
              document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
            }
        });
    }
    //console.log(cnpj)	
}

function EscondeFormasDeEnvioEpgto() {
    document.getElementById('divPagamento').classList.add("d-none");
    document.getElementById('divFormasDeEnvio').classList.add("d-none");
    document.getElementById('divEntrega').classList.remove("d-none");
    document.getElementById('divCep').setAttribute("style", "height: 100%;");
    document.getElementById('cep').focus();
    document.getElementById('numeroRua').focus();
}

function PreencheForm(empresa) {
    let cep = localStorage.getItem("CepComMascara");
    var empresaObj = JSON.parse(empresa); // Converte json para objeto
 
    if (empresaObj.status == "ERROR") {
        document.getElementById('btnConfirmar').innerHTML = empresaObj.message;
        document.getElementById('btnConfirmar').setAttribute("style", "border: solid 3px red; color: red;");
    } else if (empresaObj.situacao != "ATIVA") {
        document.getElementById('btnConfirmar').innerHTML = "SITUACÃO "+empresaObj.situacao;
    } else {
        EscondeFormasDeEnvioEpgto();
        //console.log(empresaObj.nome);
        document.getElementById('cep').value                 = cep; 
        document.getElementById('btnConfirmar').innerHTML = "SALVAR EMPRESA";
        document.getElementById('btnConfirmar').disabled = false;
        document.getElementById('inscricaoEstadual').classList.remove("d-none"); // inscricaoEstadual
        document.getElementById('razaoSocial').type          = 'text'; 
        document.getElementById('razaoSocial').value         = empresaObj.nome;
        setTimeout(function(){
            document.getElementById('nomeRua').value             = empresaObj.logradouro; 
            document.getElementById('numeroRua').value           = empresaObj.numero; 
            document.getElementById('complemento').value         = empresaObj.complemento; 
            document.getElementById('unidade_federal').innerHTML = empresaObj.uf; // icon
            document.getElementById('cidade').value              = empresaObj.municipio; 
            document.getElementById('bairro').value              = empresaObj.bairro; 
        }, 800);
    }
    setTimeout(function(){
        document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
        document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
    }, 1000);
}

function BuscaCEP(cep) { // Referencia da API em: http://cep.la/api
    document.getElementById('wait_a_moment').classList.add("init-wait"); // escurece a tela 
    document.getElementById('spinner').classList.add("spinner"); // inicia animation spiner temporizador
    // inputCep.style.backgroundColor = "#ff0000"; // CEP invalido!
    // setTimeout(function(){ inputCep.style.backgroundColor = "transparent" }, 1000); // CEP invalido!

    let cepTo = document.getElementById('cep').value; 
    cepTo = cepTo.replace(/[^\d]+/g,''); // entrada 82630-000  saida 82630000

    if (cepTo != "" && cepTo.length == 8) {
    $.ajax({
        url:'https://viacep.com.br/ws/'+cepTo+'/json',
        complete: function (response) {  
            let respJson = response.responseJSON;
            if (respJson.logradouro != undefined) {
                console.log(respJson);
                PreencheComCEP(respJson); // CEP correto
            } else {
                console.log(respJson.logradouro);
                alert("Cep inválido ou incorreto!");
                document.getElementById('cep').focus(); // CEP invalido!
                document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
                document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
            }
        }
    })  
    } else {
        document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
        document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
        alert("Cep incompleto ou vazio!");
        document.getElementById('cep').focus(); // CEP invalido!
    }
} 

function PreencheComCEP(cep) {
    EscondeFormasDeEnvioEpgto();
    var cepObj = cep; // JSON.parse(cep); // Converte json para objeto
    document.getElementById('nomeRua').value             = cepObj.logradouro; 
    document.getElementById('unidade_federal').innerHTML = cepObj.uf; // icon
    document.getElementById('cidade').value              = cepObj.localidade; 
    document.getElementById('bairro').value              = cepObj.bairro; 
    document.getElementById('TotalValueFormatad').innerHTML = "";
    // {"cep":"82630240","uf":"PR","localidade":"Curitiba","bairro":"Santa Cândida","logradouro":"Rua José Becker Davet"} ,
    setTimeout(function(){
        document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
        document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
    }, 50);
}

function CongelaDadosCliente() { // deixa todos os dados do cliente em tabela nao editaveis
    let cpf               = document.getElementById('cpf');
    let telefone          = document.getElementById('telefone').value;
    let celular           = document.getElementById('celular');
    let razaoSocial       = document.getElementById('razaoSocial').value;
    let cnpj              = document.getElementById('cnpj');
    let inscricaoEstadual = document.getElementById('inscricaoEstadual').value;
    let cpfValido         = ValidaCPF(cpf.value);

    if (cnpj.value != '') { // validacao apenas para Empresa CNPJ

    } else {  // validacao apenas para cliente CPF
        if (cpfValido == true  && celular.value.length == 15) {
            document.getElementById('input_email').setAttribute("readonly", true);
            document.getElementById('input_name').setAttribute("readonly", true);
            document.getElementById('cpf').setAttribute("readonly", true);
            document.getElementById('telefone').setAttribute("readonly", true);
            document.getElementById('celular').setAttribute("readonly", true);
            document.getElementById('iconAutorenew').setAttribute("class", "d-none");
            //document.getElementById('dadosCliente').classList.add("d-none");
            cnpj.classList.add("d-none");
            document.getElementById('inscricaoEstadual').classList.add("d-none");
            document.getElementById('btnConfirmar').innerHTML = "SALVO!";
            document.getElementById('razaoSocial').disabled = true;
            document.getElementById('btnConfirmar').disabled = true;
        
            //console.log('cpf:'+cpf+' telefone:'+telefone+' celular:'+celular+' razaoSocial:'+razaoSocial+' cnpj:'+cnpj+' inscricaoEstadual:'+inscricaoEstadual);
            EscondeFormasDeEnvioEpgto();
        } else if (cpfValido == false) { alert("CPF invalido ou incorreto, obrigatorio!"); cpf.focus();
        } else if (celular.value.length != 15) { alert("Celular incorreto!"); celular.focus(); }
    }

    console.log('cpfValido:'+cpfValido+' cnpj.value:'+cnpj.value);
}

function EnviarDadosCliente() {
    document.getElementById('wait_a_moment').classList.add("init-wait"); // ativa escurece a tela 
    document.getElementById('spinner').classList.add("spinner"); // ativa animation spiner temporizador
    
    CompactaEnderecoEntrega();
}

function CompactaEnderecoEntrega() {
    document.getElementById('divEntrega').classList.add("d-none"); 
    document.getElementById('iconEndereco').classList.remove("d-none");  
    document.getElementById('divCep').setAttribute("style", "height: 25%;");
    setTimeout(function(){ 
        document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
        document.getElementById('spinner').classList.remove("spinner"); // desativa animation spiner temporizador
        MostraFormasDeEnvio(); 
    }, 1000);
}

function AlterarEnderecoDeEntrega() {
    console.log("AlterarEnderecoDeEntrega() on");
    document.getElementById('iconEndereco').classList.add("d-none");
    document.getElementById('pacOption').disabled = false;
    document.getElementById('sedexOption').disabled = false;
    CongelaDadosCliente();
}

function MostraFormasDeEnvio() {
    document.getElementById('divFormasDeEnvio').classList.remove("d-none");
    document.getElementById('groupBtnRadioCorreios').classList.remove("d-none");
    document.getElementById('divFormasDeEnvio').setAttribute("style", "height: 85%;");
    CriaListaPacSedex();
}

function CriaListaPacSedex() {
   
}

function RecalcularFreteItemPorItem(produtosQuantidades) {
    //localStorage.removeItem("CarrinhoParaCheckout");
    var ListaPacSedex = localStorage.getItem("ListaPacSedex");
    ListaPacSedex = JSON.parse(ListaPacSedex); 
    var totalDeItens  = localStorage.getItem("Contador_itens");
    var CarrinhoParaCheckout = [];
    //console.log(produtosQuantidades);
    console.log(ListaPacSedex);

    for (let cont=0; cont < totalDeItens; cont++) {
        let lista =  JSON.parse(ListaPacSedex[cont])
        console.log(lista.CurrentValorPAC);

        let itemComQtde = JSON.stringify({
            ProdutoId         : produtosQuantidades[cont].ProdutoId,
            Quantidade        : produtosQuantidades[cont].Quantidade,
            CurrentValorPAC   : lista.CurrentValorPAC, // pegar o valo diretamente da API calcular frete
            CurrentValorSEDEX : lista.CurrentValorSEDEX
        });
        CarrinhoParaCheckout.push(itemComQtde); // Add obj ao vetor
    }
    console.log(CarrinhoParaCheckout);
    localStorage.setItem("CarrinhoParaCheckout", JSON.stringify(CarrinhoParaCheckout));
    document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
    document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
}

function LoadOptionCorreios(id) { // ID = PAC ou SEDEX
    document.getElementById('wait_a_moment').classList.add("init-wait"); // ativa escurece a tela 
    document.getElementById('spinner').classList.add("spinner"); // ativa animation spiner temporizador

    if (id == "pacOption") { // id recebe sedex pra todos se j foi ecolhido(mantem o mesmo tipo pra todos demais itens)
        let valorTotalCesta = document.getElementById('TotalValue').value;
        let valorTotalComFrete = parseFloat(valorTotalCesta) + 19.9;
        document.getElementById('TotalNotFormatted').value = valorTotalComFrete.toFixed(2);
        document.getElementById('TotalValueFormatad').innerHTML = "Total: <b>"+parseFloat(valorTotalComFrete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        document.getElementById('sedexOption').classList.add("d-none");  
        document.getElementById('pacOption').disabled = true;
    } 
    else if (id == "sedexOption") { // id recebe Pac pra todos se j foi ecolhido(mantem o mesmo tipo pra todos demais itens)
        let valorTotalCesta = document.getElementById('TotalValue').value;
        let valorTotalComFrete = parseFloat(valorTotalCesta) + 29.9;
        document.getElementById('TotalNotFormatted').value = valorTotalComFrete.toFixed(2);
        document.getElementById('TotalValueFormatad').innerHTML = "Total: <b>"+parseFloat(valorTotalComFrete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
        document.getElementById('pacOption').classList.add("d-none");
        document.getElementById('sedexOption').disabled = true;
    } 
    document.getElementById('divFormasDeEnvio').setAttribute("style", "height: 35%;");
    document.getElementById('sedexOption');
    //document.getElementById('');
     
    setTimeout(function(){
        document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
        document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
        ShowButtonPay();
    }, 1000)
}

function ShowButtonPay(){
    document.getElementById('divPagamento').classList.remove("d-none");
}

function GerarPedido() {
    let totalValue  = document.getElementById('TotalValue').value;  // Sempre atualizado com a function AtualizaValorCart() em JS, arredondando usando o metodo toFixed(2)
    let valorTotal  = document.getElementById('valorTotal').value;  // Preenchido com a echo em PHP
    //let valorTotal  = document.getElementById('valorTotal').value;  // Preenchido com a echo em PHP
    valorTotal = parseFloat(valorTotal).toFixed(2);
    totalValue = parseFloat(totalValue).toFixed(2);
    console.log("totalValue:"+totalValue+" - valorTotal:"+valorTotal);

    if(totalValue != null && valorTotal != null && totalValue == valorTotal) { // verficação de segurança
        let MeuCarrinho       = localStorage.getItem("MeuCarrinho");
        let contador_itens    = localStorage.getItem("Contador_itens");
        let token             = document.getElementsByName("_token");
        let cpf               = document.getElementById('cpf').value;
        let cnpj              = document.getElementById('cnpj').value; // empresa 
        let razaoSocial       = document.getElementById('razaoSocial').value; // empresa
        let inscricaoEstadual = document.getElementById('inscricaoEstadual').value;  // empresa
        let cep               = document.getElementById('cep').value;   
        let nomeRua           = document.getElementById('nomeRua').value;
        let numeroRua         = document.getElementById('numeroRua').value;
        let bairro            = document.getElementById('bairro').value;
        let cidade            = document.getElementById('cidade').value; 
        let unidadeFederal    = document.getElementById('unidade_federal').innerHTML;
        let complemento       = document.getElementById('complemento').value;
    
        $.ajax({
            url:'/checkout',  
            data: { token:token[0].value, cart:MeuCarrinho, contadorLocalStorage:contador_itens, cpf_cliente:cpf, cnpj:cnpj, razaoSocial:razaoSocial, inscricaoEstadual:inscricaoEstadual, cep:cep, nome_rua:nomeRua,  numero_rua:numeroRua, bairro:bairro, cidade:cidade, unidade_federal:unidadeFederal, complemento:complemento, optionCorreios:localStorage.OptionCorreios, totalFrete:localStorage.TotalFrete },
            complete: function (response) {
                console.log(response.responseText);
                //console.log("Pedido gerado com sucesso! function GerarPedido()");
                // ApagaCarrinhoLocalStorage(); // Deixar para apagar o carrinho no retorno do pagamento, o cliente pode alterar o endereco varias vezes
            },
            error: function () {
              //ApagaCarrinhoLocalStorage(); // 
              alert('Erro');
            }
        });
        localStorage.setItem("ReloadChekout", "pay");
        localStorage.setItem("TotalFrete", true);
        setTimeout(function(){
            //document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
            //document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
            document.location.reload(); // Recarrega a página atual
        }, 500); 
    } else {
        localStorage.setItem("ReloadChekout", true);
        console.log("totalValue:"+totalValue+" - valorTotal:"+valorTotal);
        alert("Alterado a forma de envio ou o CEP, a pagina sera recarregada!");
        setTimeout(function(){
            document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
            document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
            document.location.reload(); // Recarrega a página atual
        }, 500); 
    }
}

function MostrarFormasDePagamento() {

    let carrinhoParaCheckout = localStorage.getItem("CarrinhoParaCheckout"); // CarrinhoParaCheckout
    carrinhoParaCheckout = JSON.parse(carrinhoParaCheckout); console.log(carrinhoParaCheckout);

    document.getElementById('btnConfirmar').disabled = true;
    document.getElementById('iconAutorenew').classList.add("d-none");
    document.getElementById('iconReloadEndereco').classList.add("d-none");
    var divPagamento = document.getElementById('divPagamento');
    divPagamento.classList.remove("d-none");
    divPagamento.setAttribute("style", "height: 22%;");    
    localStorage.removeItem("ReloadChekout");
    setTimeout(function() {
        document.getElementById('wait_a_moment').classList.remove("init-wait"); // desativa escurece a tela 
        document.getElementById('spinner').classList.remove("spinner"); // encerra animation spiner temporizador
    }, 1000)
}

function WriteOffProductInventory() {
    let clear_cart_and_clear_cache = document.getElementById('clear_cart_and_clear_cache') // clear_cart_and_clear_cache
    if(clear_cart_and_clear_cache.value == 1) {
        let CarrinhoParaCheckout = localStorage.getItem("CarrinhoParaCheckout");// Recupera os dados armazenados CarrinhoParaCheckout
        CarrinhoParaCheckout     = JSON.parse(CarrinhoParaCheckout); // Converte string para objeto
        for(var i in CarrinhoParaCheckout) { 
            var cartJsonCheckout = JSON.parse(CarrinhoParaCheckout[i]);
            // url p/ teste write-off-product-inventory?produtoId=5&quantidade=1
            $.ajax({
                url:'/write-off-product-inventory',  
                data: { produtoId: cartJsonCheckout.ProdutoId, quantidade: cartJsonCheckout.Quantidade },
                complete: function (response) {
                    console.log(response.responseText);
                },
                error: function () {
                    alert('Erro');
                }
            });
        }
        localStorage.clear(); // remove todo o localStorage
        let data = new Date(2010,0,01);
        data = data.toGMTString(); // Converte a data para GMT
        document.cookie = 'contador_itens=;       expires=' + data + '; path=/'; // Apaga o cookie
        document.cookie = 'valor_total=;          expires=' + data + '; path=/'; // Apaga o cookie
        document.cookie = 'external_reference=;   expires=' + data + '; path=/'; // Apaga o cookie
        console.log('clear_cart_and_clear_cache: '+clear_cart_and_clear_cache.value); 
    }
    console.log("WriteOffProductInventory()");
}