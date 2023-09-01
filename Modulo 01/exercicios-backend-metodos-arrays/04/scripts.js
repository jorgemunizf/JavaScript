const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

const atendimento = (filaPacientes, operacao, nomePaciente) => {
  if (operacao === "agendar") {
    filaPacientes.push(nomePaciente);
  } else if (operacao === "atender") {
    filaPacientes.shift();
  } else {
    console.log("Operação inválida. Use 'agendar' ou 'atender'.");
    return;
  }

  console.log(filaPacientes.join(", "));
};

atendimento(pacientes, "agendar", "Lucas"); // Adiciona "Lucas" ao final da lista
atendimento(pacientes, "atender"); // Remove o primeiro paciente da lista
