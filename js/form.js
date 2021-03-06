
  
  //* função de validação dos dados do formulario*//
    function Validate_Envio() {
        var formulario = document.forms["Update"] //recebe o formulario 
        var nome = formulario.nome.value  //cria a variavel e atribui a ela o valor digitado 
        var cpf = formulario.cpf.value
        var telefone = formulario.tel.value
        var cep = formulario.cep.value
        

        if (nome.indexOf(" ") == -1){           //.indexOf verifica se há espaço entre os caracteres digitados
            alert("Preencha o nome completo")
            return false                        //retorna falso para que o formulario nao seja enviado 
        }
        if (cpf.length != 11){                  //.length verifica o comprimento dos caracteres digitados
            alert("Preencha um CPF valido!")
            return false
        }
        if (telefone.length != 11){
            alert("Preencha o telefone valido com DDD sem o '0'")
            return false
        }
        if (cep.length != 9){
            alert("Preencha um cep valido!")
            return false 
        }

    }
   
    
