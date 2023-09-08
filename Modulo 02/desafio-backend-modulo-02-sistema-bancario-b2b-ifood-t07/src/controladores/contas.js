const bancodedados = require("../bancodedados");
const {
  contas,
  saques,
  depositos,
  transferencias,
} = require("../bancodedados");

let listarContas = [];

const listar = (req, res, next) => {
  const senhaBanco = "Cubos123Bank";

  const senhaInformada = req.query.senha_banco;

  if (senhaInformada !== senhaBanco) {
    return res
      .status(401)
      .json({ mensagem: "A senha do banco informada é inválida!" });
  }

  next();

  return res.status(200).json(contas);
};

const criarConta = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  // Verificar se todos os campos foram informados
  if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
    return res.status(400).json({
      mensagem: "Todos os campos deverão ser preenchidos",
    });
  }

  // Verificar se o CPF e o email sao unicos
  if (
    contas.some(
      (conta) => conta.usuario.cpf === cpf || conta.usuario.email === email
    )
  ) {
    return res
      .status(400)
      .json({ mensagem: "Já existe uma conta com o cpf ou e-mail informado!" });
  }

  // Criar nova conta
  const contaNova = {
    numero: (contas.length + 1).toString(),
    saldo: 0,
    usuario: { ...req.body },
  };

  contas.push(contaNova);

  return res.status(201).json();
};

const atualizarConta = (req, res) => {
  const { numeroConta } = req.params;

  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  // Verificar se foi passado todos os campos no body da requisição
  if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
    return res.status(400).json({
      mensagem: "Todos os campos deverão ser preenchidos",
    });
  }

  // Verificar se a conta já existe
  const contaExistente = contas.find((conta) => conta.numero === numeroConta);

  if (!contaExistente) {
    return res.status(404).json({ mensagem: "Conta bancária não encontada!" });
  }

  // Verificar se o CPF e Email são únicos
  const cpfEEmailExistem = contas.some(
    (conta) => conta.usuario.cpf === cpf || conta.usuario.email === email
  );

  if (!cpfEEmailExistem) {
    return res
      .status(400)
      .json({ mensagem: "O CPF informado já existe cadastrado!" });
  }

  // Atualizar cadastral
  contaExistente.usuario = {
    nome,
    cpf,
    data_nascimento,
    telefone,
    email,
    senha,
  };

  return res.status(204).json();
};

const encerrarConta = (req, res) => {
  const { numeroConta } = req.params;

  const indiceConta = contas.findIndex((conta) => conta.numero === numeroConta);

  // Verificar se a conta passada é valida
  if (indiceConta === -1) {
    return res.status(404).json({ mensagem: "Conta bancária não encontada!" });
  }

  const conta = contas[indiceConta];

  // Verificar se a conta tem saldo zerado
  if (conta.saldo !== 0) {
    return res
      .status(400)
      .json({ mensagem: "A conta só pode ser removida se o saldo for zero!" });
  }

  // Encerrar a conta
  contas.splice(indiceConta, 1);

  return res.status(204).json();
};

const deposito = (req, res) => {
  const { numero_conta, valor } = req.body;

  // Verificar se o numero da conta e o valor do deposito foram informados no body
  if (!numero_conta || !valor) {
    return res
      .status(404)
      .json({ mensagem: "O número da conta e o valor são obrigatórios!" });
  }

  // Verificar se a conta já existe
  const contaExistente = contas.find((conta) => conta.numero === numero_conta);

  if (!contaExistente) {
    return res.status(404).json({ mensagem: "Conta bancária não encontada!" });
  }

  // Não permitir depósitos com valores negativos ou zerados
  if (valor <= 0) {
    return res
      .status(400)
      .json({ mensagem: "O número da conta e o valor são obrigatórios!" });
  }

  // Somar o valor de depósito ao saldo da conta encontrada
  contaExistente.saldo += valor;

  // Registro do deposito
  const data = new Date().toLocaleDateString();
  const transacao = {
    data,
    numero_conta,
    valor,
  };

  depositos.push(transacao);

  res.status(204).json();
};

const sacar = (req, res) => {
  // Verificar se o numero da conta, o valor do saque e a senha foram informados no body
  const { numero_conta, valor, senha } = req.body;

  if (!numero_conta || !valor || !senha) {
    return res
      .status(400)
      .json({ mensagem: "Número da conta, valor e senha são obrigatorios" });
  }

  // Verificar se a conta bancária informada existe
  const contaExistente = contas.find((conta) => conta.numero === numero_conta);
  if (!contaExistente) {
    return res.status(404).json({ mensagem: "Conta bancária não encontada!" });
  }

  // Verificar se a senha informada é uma senha válida para a conta informada
  if (senha !== contaExistente.usuario.senha) {
    return res.status(401).json({ mensagem: "Senha invalida" });
  }

  // Verificar se há saldo disponível para saque
  if (valor <= 0) {
    return res
      .status(400)
      .json({ mensagem: "O valor não pode ser menor que zero!" });
  }
  // Verificar se possui saldo para o saque
  if (contaExistente.saldo < valor) {
    return res.status(400).json({ mensagem: "Saldo insuficiente!" });
  }

  contaExistente.saldo -= valor;

  const data = new Date().toLocaleDateString();
  const transacao = {
    data,
    numero_conta,
    valor,
  };

  saques.push(transacao);

  res.status(204).json();
};

const transferir = (req, res) => {
  // Verificar se o número da conta de origem, de destino, senha da conta de origem e valor da transferência foram informados no body
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  // Verificar se a conta bancária de origem informada existe
  const contaOrigemExistente = contas.find(
    (conta) => conta.numero === numero_conta_origem
  );
  if (!contaOrigemExistente) {
    return res
      .status(401)
      .json({ mensagem: "Conta de origem não encontrada!" });
  }

  // Verificar se a conta bancária de destino informada existe
  const contaDestinoExistente = contas.find(
    (conta) => conta.numero === numero_conta_destino
  );
  if (!contaDestinoExistente) {
    return res
      .status(401)
      .json({ mensagem: "Conta de destino não encontrada!" });
  }

  if (senha !== contaOrigemExistente.usuario.senha) {
    return res.status(401).json({ mensagem: "Senha invalida" });
  }

  // Verificar se há saldo disponível na conta de origem para a transferência
  if (valor <= 0) {
    return res.status(400).json({ mensagem: "Valor inválido!" });
  }

  if (contaOrigemExistente.saldo < valor) {
    return res.status(400).json({ mensagem: "Saldo insuficiente!" });
  }

  // Subtrair o valor da transfência do saldo na conta de origem
  contaOrigemExistente.saldo -= valor;

  // Somar o valor da transferência no saldo da conta de destino
  contaDestinoExistente.saldo += valor;

  // Registrar de transferencia
  const data = new Date().toLocaleString();

  const transacaoOrigem = {
    data,
    numero_conta_origem,
    numero_conta_destino,
    valor: valor,
  };

  const transacaoDestino = {
    data,
    numero_conta_origem,
    numero_conta_destino,
    valor,
  };

  transferencias.push(transacaoOrigem);
  transferencias.push(transacaoDestino);

  res.status(204).json();
};

const saldo = (req, res) => {
  // Verificar se o numero da conta e a senha foram informadas (passado como query params na url)
  const { numero_conta, senha } = req.query;

  if (!numero_conta || !senha) {
    return res
      .status(400)
      .json({ mensagem: "Número da conta e senha são obrigatorios" });
  }

  // Verificar se a conta bancária informada existe
  const contaExistente = contas.find((conta) => conta.numero === numero_conta);
  if (!contaExistente) {
    return res.status(404).json({ mensagem: "Conta bancária não encontada!" });
  }

  // Verificar se a senha informada é uma senha válida
  if (senha !== contaExistente.usuario.senha) {
    return res.status(401).json({ mensagem: "Senha inválida" });
  }

  return res.status(200).json({ saldo: contaExistente.saldo });
};

const extrato = (req, res) => {
  // Verificar se o numero da conta e a senha foram informadas (passado como query params na url)
  const { numero_conta, senha } = req.query;

  if (!numero_conta || !senha) {
    return res
      .status(400)
      .json({ mensagem: "Número da conta e senha são obrigatorios" });
  }

  // Verificar se a conta bancária informada existe
  const contaExistente = contas.find((conta) => conta.numero === numero_conta);
  if (!contaExistente) {
    return res.status(404).json({ mensagem: "Conta bancária não encontada!" });
  }

  // Verificar se a senha informada é uma senha válida
  if (senha !== contaExistente.usuario.senha) {
    return res.status(401).json({ mensagem: "Senha invalida" });
  }

  // Coletar as informações da requisição

  const depositosConta = depositos.filter((deposito) => {
    return deposito.numero_conta === numero_conta;
  });

  const saquesConta = saques.filter((saque) => {
    return saque.numero_conta === numero_conta;
  });

  const transferenciasOrigem = transferencias.filter((transferencia) => {
    return transferencia.numero_conta_origem === numero_conta;
  });

  const transferenciasDestino = transferencias.filter((transferencia) => {
    return transferencia.numero_conta_destino === numero_conta;
  });

  const extratoConta = {
    depositos: depositosConta,
    saques: saquesConta,
    transferenciasEnviadas: transferenciasOrigem,
    transferenciasRecebidas: transferenciasDestino,
  };

  return res.status(200).json(extratoConta);
};

module.exports = {
  listar,
  criarConta,
  atualizarConta,
  encerrarConta,
  deposito,
  sacar,
  transferir,
  saldo,
  extrato,
};
