function enviar() {
    let campos = [];
    if (!validar(dados.nome_completo)){
        campos.push('Nome Completo');
    }

    if (!validar(dados.idade)){
        campos.push('Idade');
    }

    if (!validar(dados.descricao)){
        campos.push('Descrição');
    }

    if (!validar(dados.curso)){
        campos.push('Curso');
    }

    if (!validar(dados.periodo, true)){
        campos.push('Período');
    }

    if (campos.length > 0) {
        alert('Prencha o(s) campo(s): ' + campos.join(', ') + '!');
    }
    else {
        alert('Dados enviados com sucesso!');
    }
}

function validar(elemento, radio = false) {
    if (elemento.value == '' || elemento.value == '0') {
        if (radio) {
            elemento = elemento[0];
        }

        mudarLabel(elemento, true);

        return false;
    }
    else {
        return true;
    }
}

function campoValido(elemento){
    mudarLabel(elemento, false);
}

function mudarLabel(elemento, vazio) {    
    let classe = vazio ? 'vermelho' : '';
    
    elemento.className = classe;
    
    let label = document.querySelector('[for=' + elemento.name + ']');
    label.className = classe;
}