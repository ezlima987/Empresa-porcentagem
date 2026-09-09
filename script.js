function calcular() {
    let salario = Number(document.getElementById("salario").value);

    let porcentagem;

    if (salario <= 1000) {
        porcentagem = 20;
    } else if (salario <= 3000) {
        porcentagem = 15;
    } else if (salario <= 8000) {
        porcentagem = 10;
    } else {
        porcentagem = 5;
    }

    let aumento = salario * porcentagem / 100;
    let novoSalario = salario + aumento;

    document.getElementById("resultado").innerHTML = `
        <p>Novo salário = R$ ${novoSalario.toFixed(2)}</p>
        <p>Aumento = R$ ${aumento.toFixed(2)}</p>
        <p>Porcentagem = ${porcentagem} %</p>
    `;
}
