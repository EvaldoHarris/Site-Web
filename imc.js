function man()
{
    document.getElementById("woman").src="/images/woman.png"
    document.getElementById("man").src="images/boss.png"
    document.getElementById("sexo").value = "Homem";
    console.log("entrou")
}
function woman()
{
    document.getElementById("man").src="/images/user.png"
    document.getElementById("woman").src="images/businesswoman.png"
    document.getElementById("sexo").value = "Mulher";
    console.log("entrou")
}

function Calcular(){
    var sexo = document.getElementById("sexo").value;
    var idade = document.getElementById("idade").value;
    var altura = document.getElementById("altura").value/100;
    var peso = document.getElementById("peso").value;
    var imc = (peso / (altura * altura));
    var cor = document.getElementById("resultado");

    if(sexo != '' && idade != '' && altura != '' && peso != ''){
        if (sexo == "Homem"){
            if(imc < 20){
                document.getElementById("resultado").value = "Abaixo do Peso";
                cor.className='abaixo';
            }
            else if(imc >= 20 && imc <= 29.9){
                document.getElementById("resultado").value = "Normal";
                cor.className='normal';
            }
            else if(imc >= 25 && imc <= 24.9){
                document.getElementById("resultado").value = "Obesidade Leve";
                cor.className='acima';
            }
            else if(imc >= 30 && imc <= 39.9){
                document.getElementById("resultado").value = "Obesidade Moderada";
                cor.className='acima';
            }
            else if(imc >= 43){
                document.getElementById("resultado").value = "Obesidade Mórbida";
                cor.className='acima';
            }
        }
        else if (sexo == "Mulher"){
            if(imc < 19){
                document.getElementById("resultado").value = "Abaixo do Peso";
                cor.className='abaixo';
            }
            else if(imc >= 19 && imc <= 23.9){
                document.getElementById("resultado").value = "Normal";
                cor.className='normal';
            }
            else if(imc >= 24 && imc <= 28.9){
                document.getElementById("resultado").value = "Obesidade Leve";
                cor.className='acima';
            }
            else if(imc >= 29 && imc <= 38.9){
                document.getElementById("resultado").value = "Obesidade Moderada";
                cor.className='acima';
            }
            else if(imc >= 39){
                document.getElementById("resultado").value = "Obesidade Mórbida";
                cor.className='acima';
            }
        }
        document.getElementById("resultado").value += " Seu IMC ficou em: "+imc.toFixed(2)
    }else{
        alert("Preencher todos os campos!");
    }
}
function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else  return false;
    }
}