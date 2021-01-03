function botao(){
    let name = document.getElementById("nome").value;
    const rest4 = document.querySelector("#rest4");
    if(!name){
        rest4.innerHTML = `Bem vindo,pessoa`
    }else{
        rest4.innerHTML = `Bem vindo,${name}`
        }
    }
function verificar(){
    let name = document.getElementById("nome").value;
    const rest4 = document.querySelector("#rest4");
      if(!name){
    rest4.innerHTML = `Bem vindo,pessoa`
      }else{
    rest4.innerHTML = `Bem vindo,${name}`
    }
    const data = new Date();
    const ano = data.getFullYear();
    const mes = data.getMonth(1);
    const fano = document.querySelector("#idade").value.trim();
    const mes1 = document.querySelector("#mes").value.trim();
    const res = document.querySelector("#res");
    const erro = document.querySelector("#erro");
    const sex = document.getElementsByName("sexo");
    const img = document.querySelector("#img");
    let dia = document.querySelector("#dia");
    
         //Escrevendo a fase de ERRO
      if(!fano || fano > ano || fano < 1880){
          erro.innerHTML = "Tente novamente"
          res.innerHTML = `Preencha o valor dos resultados acima por favor,${name}`
          img.src = ""
          if(!dia){
              erro.innerHTML = "Tente novamente"
              res.innerHTML = `Preencha o valor dos resultados acima por favor,${name}`
              img.src = ""
          if(!mes1)
              erro.innerHTML = "Tente novamente"
              res.innerHTML = `Preencha o valor dos resultados acima por favor,${name}`
              img.src = ""
          }
          
      }else{
          //Declarando a idade e subtraindo com o ano do valor do usúario
          let idade = Number(ano - fano)
          erro.innerHTML = ""

      }if(mes < mes1){
          //Subtraindo para formar a idade certa
          let idade = Number(ano - fano)
          let diminua = Number(idade - 1)
      
      if(sex[0].checked){
          genero = "Homem"
          //Bebê
          if(diminua <= 3){
          img.src = "https://images.pexels.com/photos/3771605/pexels-photo-3771605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          //Criança         
        }else if(diminua > 4  && diminua <= 12){
            img.src = "https://images.pexels.com/photos/3207532/pexels-photo-3207532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          //Adolescente
          else if(diminua > 13 && diminua <= 18){
              img.src = "https://images.pexels.com/photos/1813923/pexels-photo-1813923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          //Adulto
          else if(diminua > 19 && diminua <= 69){
              img.src = "https://images.pexels.com/photos/4584390/pexels-photo-4584390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          //idoso
          else if(diminua > 70){
              img.src = "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }


        }else if(sex[1].checked){
           genero = "Mulher"
            //Bebê
          if(diminua <= 3){
            img.src = "https://images.pexels.com/photos/3771605/pexels-photo-3771605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            //Criança         
          }else if(diminua > 4  && diminua <= 12){
              img.src = "https://images.pexels.com/photos/4453089/pexels-photo-4453089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            //Adolescente
            else if(diminua > 13 && diminua <= 18){
                img.src = "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
            //Adulto
            else if(diminua > 19 && diminua <= 69){
                img.src = "https://images.pexels.com/photos/4045029/pexels-photo-4045029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            //Idoso
            else if(diminua > 70){
                img.src = "https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
      }
      res.innerHTML = `Detectamos ${genero},sua idade é ${diminua} anos,${name}`
   }
}