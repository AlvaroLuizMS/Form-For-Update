
  
  // função de validação dos dados do formulario
    function Validate_Envio() {
        var formulario = document.forms["Update"]   //recebe o formulario 
        var nome = formulario.nome.value            //cria a variavel e atribui a ela o valor digitado 
        var cpf = formulario.cpf.value
        var telefone = formulario.tel.value
        var cep = formulario.cep.value
        
        /* 
            -indexOf verifica se há espaço entre os caracteres digitados

            -retorna falso para que o formulario nao seja enviado

            -length verifica o comprimento dos caracteres digitados 
        */
        
        if (nome.indexOf(" ") == -1){           
            alert("Preencha o nome completo")
            return false                        
        }
        if (cpf.length != 11){                  
            alert("Preencha um CPF valido!")
            return false
        }
        if (telefone.length != 12){
            alert("Preencha o telefone valido com DDD com o '0'")
            return false
        }
        if (cep.length != 8){
            alert("Preencha um cep valido com 8 digitos!")
            return false 
        }

    }
   
    
