const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let proximoId = 1;
let carros = [];

let proximoGd = 1;
let clientes = [];

let proximoLd = 1;
let Alugueis = [];



function mostrarMenu() {
    console.log("\n========================");
    console.log("Locadora Turbocar");
    console.log("========================");
    console.log("1 - cadastrar Carro ");
    console.log("2 - Listar Carros");
    console.log("3 - Buscar Carro por ID ");
    console.log("4 - Atualizar Carro");
    console.log("5 - Remover Carro");
    console.log("6 - cadastrar Cliente ");
    console.log("7 - Listar Clientes");
    console.log("8 - Buscar Cliente por ID ");
    console.log("9 - Atualizar Cliente");
    console.log("10 - Remover Cliente");
    console.log("11 - Realizar Aluguel");
    console.log("12 - Devolver carro");
    console.log("13 - Listar Alugueis(Todos)");
    console.log("14 - Listar Alugueis Ativos");
    console.log("15 - Listar Alugueis Finalizados ")


    rl.question("escolha uma opção", (opcao) => {
        if (opcao === "1") {
            cadastrarCarro();
        } else if (opcao === "2") {
            listarCarros();
        } else if (opcao === "3") {
            buscarCarroporid();
        } else if (opcao === "4") {
            atualizarCarro();
        } else if (opcao === "5") {
            removercarro();
        } else if (opcao === "6") {
            cadastrarclientes();
        } else if (opcao === "7") {
            listarclientes();
        } else if (opcao === "8") {
            buscarclienteporid();
        } else if (opcao === "9") {
            atualizarcliente();
        } else if (opcao === "10") {
            removercliente();
        } else if (opcao === "11") {
            realizaraluguel();
        }
    })
}

function realizaraluguel() {
    console.log("Realizar Aluguel");
}
    rl.question("digite o id do cliente :", (id1) => {
        rl.question("digite o id do carro :", (id2) => {
            rl.question("quantos dias vai ficar com o carro :", (qdv) => {
           id1 = Number(id);
           id2 = Number(id);
                if(id1 === "" || id2 === "" || qdv === ""){
                    console.log("ERRO N 100 : vocễ não completou todas as INFOS")


                }
            })
            
        })
    })
function removercliente() {
    console.log("Remover Cliente");


    rl.question("Digite o id do cliente que quer remover: ", (id) => {
        id = Number(id);
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id === id) {
                clientes.splice(i, 1)
                console.log("Cliente removido com sucesso");
                mostrarMenu();
                return;
            }
        }
        clientes.splice(0, 1);
    })
}

function atualizarcliente() {
    console.log("listar cliente")

    rl.question("Digite o ID do cliente:", (id) => {
        id = Number(id);

        let cliente = encontrarclienteporid(id);

        if (cliente === null) {
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;
        }

        rl.question("Digite o novo nome: ", (novoNome) => {
            rl.question("Digite o novo cpf: ", (novocpf) => {
                rl.question("Digite a nova telefone: ", (novotelefone) => {
                        novocpf = Number(novocpf);
                        novotelefone = Number(novotelefone);

                        if (novoNome === "" || novocpf === "" || novotelefone === "" ) {
                            console.log("Todos os dados prescisam ser preenchidos");
                            mostrarMenu();
                            return;
                        }


                        cliente.nome = novoNome;
                        cliente.cpf = novocpf;
                        cliente.telefone = novotelefone;

                        console.log("atualizado com sucesso");
                        mostrarMenu();

                    })
                })
            })
        })
    
}

function buscarclienteporid() {
    console.log("Buscar cliente por id");

    rl.question("Digite o ID do cliente: ", (id) => {
        id = Number(id);

        let cliente = encontrarclienteporid(id);

        if (cliente === null) {
            console.log("cliente não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nCliente Encontrado");
        console.log("ID: " + cliente.id);
        console.log("Nome: " + cliente.nome)
        console.log("cpf: " + cliente.cpf)
        console.log("Telefone: " + cliente.telefone)

        mostrarMenu()
    })
}

function encontrarclienteporid(id) {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
            return clientes[i];
        }
    }

    return null;
}



mostrarMenu();

function listarclientes() {
    console.log("Listar clientes");

    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < clientes.length; i++) {
        console.log("\nID: " + clientes[i].id);
        console.log("nome: " + clientes[i].nome)
        console.log(":cpf " + clientes[i].cpf)
        console.log("telefone: " + clientes[i].telefone)
    }

    mostrarMenu();
}

function cadastrarclientes() {
    console.log("Cadastrar Cliente");


    rl.question("Digite o id: ", (id) => {
        rl.question("Digite o nome do cliente: ", (nome) => {
            rl.question("Digite o cpf do cliente: ", (cpf) => {
                rl.question("Digite o telefone do cliente", (telefone) => {
                    id = Number(id);
                    cpf = Number(cpf);

                    if (id === "" || nome === "" || cpf === "" || telefone === "") {
                        console.log("ERRO: Não preencheu todas as infos");
                        mostrarMenu();
                        return;
                    }

                    let Cliente = {
                        id: proximoId,
                        nome:nome,
                        cpf:cpf,
                        telefone:telefone,
                    };

                    clientes.push(Cliente);
                    proximoId++;

                    console.log("Cliente Cadastrado com sucesso")
                    mostrarMenu();
                })
            })
        })
    })
}

mostrarMenu();



function removercarro() {
    console.log("Remover carro");


    rl.question("Digite o id do carro que quer remover: ", (id) => {
        id = Number(id);
        for (let i = 0; i < carros.length; i++) {
            if (carros[i].id === id) {
                carros.splice(i, 1)
                console.log("carro removido com sucesso");
                mostrarMenu();
                return;
            }
        }
        carros.splice(0, 1);
    })
}

function atualizarCarro() {
    console.log("Atualizar carro")

    rl.question("Digite o ID do  carro:", (id) => {
        id = Number(id);

        let carro = encontrarCarroporid(id);

        if (carro === null) {
            console.log("carro não encontrado");
            mostrarMenu();
            return;

        }

        rl.question("Digite o novo modelo: ", (novomodelo) => {
            rl.question("Digite a nova placa: ", (novaplaca) => {
                rl.question("Digite o novo ano: ", (novoano) => {
                    rl.question("Digite a novo preçopordia: ", (novoprecopordia) => {
                        novoprecopordia = Number(novoprecopordia);
                        novoano = Number(novoano);

                        if (novomodelo === "" || novaplaca === "" || novoano === "" || novoprecopordia === "") {
                            console.log("Todos os dados prescisam ser preenchidos");
                            mostrarMenu();
                            return;
                        }

                       

                        carro.modelo = novomodelo;
                        carro.placa = novaplaca;
                        carro.ano = novoano;
                        carro.precoporDia = novoprecopordia;

                        console.log("atualizado com sucesso");
                        mostrarMenu();

                    })
                })
            })
        })

    })
}

function buscarCarroporid() {
    console.log("Buscar carro por id");

    rl.question("Digite o ID do carro: ", (id) => {
        id = Number(id);

        let carro = encontrarCarroporid(id);

        if (carro === null) {
            console.log("carro não encontrado");
            mostrarMenu();
            return;
        }

        console.log("\nCarro Encontrado");
        console.log("ID: " + carro.id);
        console.log("Nome: " + carro.modelo);
        console.log("Idade: " + carro.placa);
        console.log("ano: " + carro.ano);
        console.log("preçopordia: " + carro.precoporDia);

        mostrarMenu()
    })

}

function encontrarCarroporid(id) {
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].id === id) {
            return carros[i];
        }
    }

    return null;
}

mostrarMenu();



function listarCarros() {
    console.log("Listar Carros");

    if (carros.length === 0) {
        console.log("Nenhum carro cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < carros.length; i++) {
        console.log("\nID: " + carros[i].id);
        console.log("modelo: " + carros[i].modelo)
        console.log(":placa " + carros[i].placa)
        console.log("ano: " + carros[i].ano)
        console.log(":preçopordia " + carros[i].precoporDia)
    }

    mostrarMenu();
}


function cadastrarCarro() {
    console.log("Cadastrar Carro");


    rl.question("Digite o modelo do Carro: ", (modelo) => {
        rl.question("Digite a placa do Carro: ", (placa) => {
            rl.question("Digite o ano do Carro: ", (ano) => {
                rl.question("Digite o preço por Dia do Carro", (precoporDia) => {
                    ano = Number(ano);
                    preço = Number(precoporDia);

                    if (modelo === "" || placa === "" || ano === "" || precoporDia === "") {
                        console.log("ERRO: Não preencheu todas as infos");
                        mostrarMenu();
                        return;
                    }
                    if (ano < 0 || precoporDia > 100) {
                        console.log("ERRO:uma das opções é inválida");
                        mostrarMenu();
                        return;
                    }

                    let Carro = {
                        id: proximoId,
                        modelo: modelo,
                        placa: placa,
                        ano: ano,
                        precoporDia: precoporDia,
                    };

                    carros.push(Carro);
                    proximoId++;

                    console.log("Carro Cadastrado com sucesso")
                    mostrarMenu();
                })
            })
        })
    })
}

mostrarMenu();
