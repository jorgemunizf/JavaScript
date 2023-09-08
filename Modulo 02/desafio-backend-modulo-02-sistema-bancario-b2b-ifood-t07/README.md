API de Contas Bancárias
Esta é uma API simples para gerenciar contas bancárias. Ela permite criar, atualizar, encerrar contas, fazer depósitos, saques, transferências e verificar o saldo e extrato de uma conta.

Instalação
Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em nodejs.org.

Clone este repositório para a sua máquina local:

bash
Copy code
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Navegue até o diretório do projeto:

arduino
Copy code
cd nome-do-repositorio
Instale as dependências do projeto executando o seguinte comando no terminal:

Copy code
npm install
Inicie o servidor:

sql
Copy code
npm start
O servidor estará rodando na porta padrão 3000. Você pode acessar a API através de http://localhost:3000.

Uso
A API possui os seguintes endpoints:

GET /contas: Lista todas as contas bancárias.
POST /contas: Cria uma nova conta bancária.
PUT /contas/{numeroConta}: Atualiza os dados de uma conta bancária existente.
DELETE /contas/{numeroConta}: Encerra uma conta bancária (somente se o saldo for zero).
POST /deposito: Realiza um depósito em uma conta bancária.
POST /saque: Realiza um saque em uma conta bancária.
POST /transferencia: Realiza uma transferência entre contas.
GET /saldo: Retorna o saldo de uma conta bancária.
GET /extrato: Retorna o extrato de uma conta bancária.
Para usar esses endpoints, você precisa fazer requisições HTTP para os URLs correspondentes e fornecer os parâmetros necessários no corpo da solicitação ou nos query parameters, conforme especificado em cada endpoint.

Exemplos de Uso
Aqui estão alguns exemplos de como usar a API com o programa Insomnia.

Listar todas as contas:

bash
Copy code
GET http://localhost:3000/contas
Criar uma nova conta:

bash
Copy code
POST http://localhost:3000/contas
Corpo da solicitação (JSON):

json
Copy code
{
  "nome": "Nome do Cliente",
  "cpf": "123.456.789-00",
  "data_nascimento": "01/01/1990",
  "telefone": "(11) 98765-4321",
  "email": "cliente@email.com",
  "senha": "senha123"
}
Atualizar uma conta existente:

bash
Copy code
PUT http://localhost:3000/contas/{numeroConta}
Corpo da solicitação (JSON):

json
Copy code
{
  "nome": "Novo Nome",
  "cpf": "123.456.789-00",
  "data_nascimento": "01/01/1990",
  "telefone": "(11) 98765-4321",
  "email": "novo@email.com",
  "senha": "novaSenha123"
}
Encerrar uma conta:

bash
Copy code
DELETE http://localhost:3000/contas/{numeroConta}
Realizar um depósito:

bash
Copy code
POST http://localhost:3000/deposito
Corpo da solicitação (JSON):

json
Copy code
{
  "numero_conta": "1",
  "valor": 100.00
}
Realizar um saque:

bash
Copy code
POST http://localhost:3000/saque
Corpo da solicitação (JSON):

json
Copy code
{
  "numero_conta": "1",
  "valor": 50.00,
  "senha": "senha123"
}
Realizar uma transferência:

bash
Copy code
POST http://localhost:3000/transferencia
Corpo da solicitação (JSON):

json
Copy code
{
  "numero_conta_origem": "1",
  "numero_conta_destino": "2",
  "valor": 30.00,
  "senha": "senha123"
}
Verificar o saldo de uma conta:

bash
Copy code
GET http://localhost:3000/saldo?numero_conta=1&senha=senha123
Obter o extrato de uma conta:

bash
Copy code
GET http://localhost:3000/extrato?numero_conta=1&senha=senha123
Lembre-se de ajustar os valores e parâmetros de acordo com o que você deseja testar.

Documentação
Para obter mais informações sobre os endpoints disponíveis e os parâmetros necessários, consulte a documentação da API em docs/api-docs.md.

Contribuição
Se você quiser contribuir com melhorias ou correções para esta API, sinta-se à vontade para fazer um fork deste repositório, criar um novo branch, fazer suas alterações e criar uma solicitação de pull.
