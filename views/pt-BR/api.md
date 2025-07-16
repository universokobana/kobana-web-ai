# Kobana API Documentation

## Índice
1. [Kobana para Desenvolvedores](#kobana-para-desenvolvedores)
2. [Bibliotecas](#bibliotecas)
3. [Shopify](#shopify)
4. [TOTVS RM](#totvs-rm)
5. [TOTVS Microsiga Protheus](#totvs-microsiga-protheus)
6. [WHMCS](#whmcs)
7. [API: Assinaturas](#assinaturas)
8. [API: Boletos](#boletos)
9. [API: CNAB (Remessa)](#cnab-remessa)
10. [API: CNAB (Retorno)](#cnab-retorno)
11. [API: Caixas Postais](#caixas-postais)
12. [API: Carnês](#carns)
13. [API: Carteiras de Cobrança](#carteiras-de-cobrana)
14. [API: Certificado](#certificado)
15. [API: Clientes](#clientes)
16. [API: Conexões](#conexes)
17. [API: Consulta de Boletos](#consulta-de-boletos)
18. [API: Conta Pix](#conta-pix)
19. [API: Contas](#contas)
20. [API: Contas de Consumo](#contas-de-consumo)
21. [API: DARF (beta)](#darf-beta)
22. [API: Entre Contas](#entre-contas)
23. [API: Eventos](#eventos)
24. [API: Exportação do Lote](#exportao-do-lote)
25. [API: Extrato](#extrato)
26. [API: Histórico de E-mails](#histrico-de-e-mails)
27. [API: Histórico de SMS](#histrico-de-sms)
28. [API: Importações](#importaes)
29. [API: Log de Webhooks](#log-de-webhooks)
30. [API: Lotes](#lotes)
31. [API: Pix](#pix)
32. [API: Provedores](#provedores)
33. [API: Recebimento de Boleto](#recebimento-de-boleto)
34. [API: Registro de Boleto](#registro-de-boleto)
35. [API: Registro de Remessa](#registro-de-remessa)
36. [API: Registro de Retorno](#registro-de-retorno)
37. [API: Relatórios](#relatrios)
38. [API: Saldos](#saldos)
39. [API: Subcontas](#subcontas)
40. [API: TED](#ted)
41. [API: Todos](#todos)
42. [API: Usuário](#usurio)
43. [API: Usuário Autenticado](#usurio-autenticado)
44. [API: Webhooks](#webhooks)

---

## Kobana para Desenvolvedores

Você está a um passo de automatizar o fluxo financeiro da sua empresa.

Nesta documentação você vai entender como utilizar a API da Kobana e todos os poderosos recursos que oferecemos para conexão e automação de *Open Banking*.

> 👍 Vá direto ao ponto!
>
> Você pode ir direto a algum conteúdo com nossa função de busca legal. Aperte **Cmd+K** (se estiver no MacOS) ou **Ctrl+K** (se tiver no Windows) e digite o que você deseja buscar.

### ✅ O que é Kobana?

Kobana é um conjunto de serviços oferecidos em forma de sistema web e APIs que permite a automação de operações bancárias e consumo de serviços financeiros de bancos brasileiros diretamente na conta da sua empresa ou do seu cliente.

### 🛑 O que Kobana não é?

Kobana não é um banco, nem conta digital e nem intermediador. Nós não substituimos os serviços bancários. Nós simplificamos o consumo dos serviços oferecidos pelos bancos por meio de uma API única que se conecta a vários bancos.

### 💡 Exemplos de uso da API

* Atualização do saldo e extrato no sistema de ERP
* Automação de cobranças por boleto bancário e pix
* Pagamento de funcionários e colaboradores
* e muito mais...

### 🤝 Estamos aqui para ajudar

Se você tiver qualquer dúvida sobre a API, fique a vontade para ativar o chat no canto inferior direito, ou [enviar um email para o suporte](mailto:suporte@kobana.com.br) que ajudamos no que for preciso.

Você também pode visitar a nossa [Central de Ajuda](https://suporte.kobana.com.br) e consultas dezenas de artigos onde ensinamos como lidar com os bancos e como usar a plataforma.

Estamos felizes de te ver aqui! :green_heart:

### 🐞 Encontrou um bug?

Caso você tenha achado algum erro da documentação ou até mesmo algum bug na API, basta mandar um email para [suporte@kobana.com.br](mailto:suporte@kobana.com.br) que a gente corrige rapidinho, ok?

---

## Bibliotecas

Nós disponibilizamos todas as nossas bibliotecas e plugins em [https://github.com/UniversoKobana/](https://github.com/UniversoKobana/) e [https://github.com/BoletoSimples/](https://github.com/BoletoSimples/)

> 🚧 Boleto Simples
>
> As bibliotecas estão sob o nome de Boleto Simples e vão ser migradas e atualizadas aos poucos.

#### Bibliotecas Oficiais

* [boletosimples-ruby](https://github.com/BoletoSimples/boletosimples-ruby) - Biblioteca Ruby
* [boletosimples-php](https://github.com/BoletoSimples/boletosimples-php) - Biblioteca PHP
* [omniauth-boletosimples](https://github.com/BoletoSimples/omniauth-boletosimples) - Boleto Simples strategy for OmniAuth (Ruby).

#### Códigos de exemplo

* [login-with-boletosimples-demo-rails](https://github.com/BoletoSimples/login-with-boletosimples-demo-rails) - Exemplo utilizando a gem omniauth-boletosimples para auntenticar por OAuth2
* [boletosimples-webhook-test](https://github.com/BoletoSimples/boletosimples-webhook-test) - Exemplo de código para receber requisições do Webhook do Boleto Simples
* [boletosimples-ruby-test](https://github.com/BoletoSimples/boletosimples-ruby-test) - Exemplo de uso da biblioteca Ruby
* [boletosimples-php-test](https://github.com/BoletoSimples/boletosimples-php-test) - Exemplo de uso da biblioteca PHP

#### Bibliotecas de Terceiros

Se você desenvolver uma biblioteca que seja pública e deseja que listemos aqui, por favor entre em contato pelo [suporte](https://suporte.kobana.com.br). Nós ficaremos felizes em divulgar o seu trabalho.

Note que se você está usando autenticação OAuth2, na maioria das vezes usar a biblioteca OAuth2 oficial da sua linguagem é a melhor escolha e proporciona maior rapidez na integração.

---

## Shopify

> 🚧 Boleto Simples
>
> Os módulos estão sob o nome de Boleto Simples e vão ser migrados e atualizados aos poucos.

[Shopify](https://shopify.com/) é uma plataforma de loja virtual como serviço em cloud.

A integração é feita por meio de um middleware de integração e não é necessário usar código de programação.

[Veja como emitir boletos no Shopify](https://suporte.boletosimples.com.br/article/z1k2stf3yt-como-gerar-boleto-registrado-na-shopify-usando-o-boleto-simples)

---

## TOTVS RM

> 🚧 Boleto Simples
>
> Os módulos estão sob o nome de Boleto Simples e vão ser migrados e atualizados aos poucos.

[TOTVS](https://www.totvs.com) é a empresa líder do mercado brasileiro de ERP. Ela possui alguns sistemas de gestão, dentre eles o RM.

A integração realiza a geração dos boletos a partir dos títulos cadastrados no contas a receber e permite baixa automática pelo agendamento de processos.

##### Código Fonte

O código fonte deste módulo não é disponibilizado.

##### Requisitos

* RM 12.1.28.216 ou superior

##### Download

* [BoletoSimplesTOTVS-RM](https://kobana-public.s3.sa-east-1.amazonaws.com/BoletoSimples-TOTVSRM.zip)

##### Instalação

⦁ Acesse o menu Serviços Globais/Metadados/Projeto, onde devem ser importados os projetos de metadados disponibilizados no arquivo:

“BoletoSimples-TOTVSRM.TotvsMD”.

![](https://files.readme.io/b23e678-1.png "1.png")

Após importação, deve ser executado o processo “Gerar Projeto de Metadados” para cada um dos projetos importados.

![](https://files.readme.io/c4eb1ea-2.png "2.png")

⦁ Acesse o menu Gestão Financeira/Customização/Parâmetros Boleto Simples, onde devem ser definidos os seguintes campos:

**Status:**  define se a integração está ativa ou inativa.

**Ambiente:** define o ambiente que está sendo integrado com o Boleto Simples.

**Token de Acesso:** deve ser informado o token de acesso do ambiente do Boleto Simples.

**Usar Conta Caixa associada ao convênio do boleto:** define se será usado a conta caixa associada ao convênio do boleto no momento da baixa realizado pelo processo ‘Consulta de Status Boleto Simples’.

**Conta Caixa:** define a conta caixa que será usada no momento da baixa do boleto, se o parâmetro acima estiver desmarcado.

**Meio de Pagamento:** define o meio de pagamento que será usado na baixa realizada pelo processo ‘Consulta de Status Boleto Simples’.

![](https://files.readme.io/c0ee2e3-3.png "3.png")

⦁ Acesse o menu Gestão/Fórmula Visual/Fórmula Visual onde devem ser importadas as fórmulas visuais responsáveis pela integração com o Boleto Simples, disponibilizadas no arquivo:

“BoletoSimples-TOTVSRM.TotvsWF”

![](https://files.readme.io/e648845-4.png "4.png")

Deve ser marcada a opção *"Importar Gatilhos"*, na aba Parâmetros, para cada uma das fórmulas visuais.

**Utilização:**

⦁   Após salvar o registro no cadastro de convênio do TOTVS Gestão Financeira, será feita a integração incluindo uma carteira no Boleto Simples. Se o convênio já tiver sido integrado com o Boleto Simples as informações alteradas no convênio serão alteradas no Boleto Simples.

⦁   Após execução do processo de inclusão de boleto no TOTVS Gestão Financeira será feita a integração incluindo o boleto no Boletos Simples, caso o convenio associado ao boleto esteja integrado. O status da remessa do boleto no TOTVS Gestão Financeira será alterado para Remetido.

⦁   Para atualizar o status do boleto no TOTVS Gestão Financeira deve ser executada a fórmula visual “Consulta Status do Boleto”, menu Gestão/Fórmula Visual/Executar, onde será consultado o status do boleto no Boleto Simples. Caso o boleto estiver com status de “Pago” ou “Cancelado” no Boleto Simples será realizado a baixa ou cancelamento do boleto no TOTVS Gestão Financeira respectivamente. Essa fórmula visual pode ser agendada. É gerado um log de cada execução na pasta RM.NET\\Processos\\FV.

##### Disclaimer

TOTVS RM®️ e TOTVS®️ são marcas registradas da TOTVS®️.

---

## TOTVS Microsiga Protheus

> 🚧 Boleto Simples
>
> Os módulos estão sob o nome de Boleto Simples e vão ser migrados e atualizados aos poucos.

[TOTVS](https://www.totvs.com) é a empresa líder do mercado brasileiro de ERP. Ela possui alguns sistemas de gestão, dentre eles o Protheus.

A integração realiza a geração dos boletos a partir dos títulos cadastrados no contas a receber e permite baixa automática pelo agendamento de processos.

##### Parceiro

<Image width="smart" src="https://files.readme.io/acb609b-Screen_Shot_2022-01-24_at_22.11.01.png" />

Essa rotina foi desenvolvido e é comercializado pela [LEEF Tecnologia](https://www.leef.com.br/)

A LEEF é parceira da Kobana especialista em implantação, desenvolvimento sob demanda e suporte ao ERP TOTVS Microsiga Protheus. Ela própria comercializa a solução de forma que sua empresa não precise contratar a Kobana e tenha condições especiais para emissão de menos de 1.500 boletos/mês, se for o caso.

Dentre os serviços prestados estão:

* Suporte ao suporte
* Administração de ERP terceirizada
* Migração de versão
* Atualizações
* Obrigações fiscais eletrônicas
* Desenvolvimento específico
* Outsourcing
* Desenvolvimento de facilitadores de interface ao usuário
* Treinamentos

##### Características da Rotina

* Transmissão automática on line (em tempo real) dos títulos de contas a receber gerados após emissão de documentos de saída, permitindo a impressão e ou envio do boleto em e-mail separado para o cliente.
* Schedule para recepção e processamento das baixas e retornos recebidos do banco.
* Interface para acompanhamento dos envios, retornos e mensagens do banco (status)
* Interface para reenvio de boleto
* Relatórios de envios e retornos
* Interface para instruções de cobrança (prorrogação, descontos, protestos, baixas , etc.)
* Envio de boleto no mesmo email do DANFE

##### Requisitos

* ERP TOTVS Protheus

##### Instalação

A instalação e implementação são realizadas pela equipe especializada da LEEF.

A implementação cobre:

* Configuração do menu padão SIGAFIN
* Criação, instalação e configuração do schedule
* Implementação/compilação e troca de RPO em até 5 RPOs
* Configuração de 1 (UM) cliente e  1 (UMA) filial
* Treinamento e acompanhamento por até 3 horas.

O prazo para implementação é de 5 dias uteis após a confirmação da aquisição.

##### Demonstração

<HTMLBlock>{`
<iframe width="100%" height="473" src="https://www.youtube.com/embed/lwtZG-cPsY8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`}</HTMLBlock>

##### Disclaimer

MICROSIGA®️, PROTHEUS®️ e TOTVS®️ são marcas registradas da TOTVS®️.

LEEF TECNOLOGIA DE NEGOCIOS é uma empresa independente. Não revende ou representa a marca e produtos da TOTVS®️

---

## WHMCS

> 🚧 Boleto Simples
>
> Os módulos estão sob o nome de Boleto Simples e vão ser migrados e atualizados aos poucos.

[WHMCS](https://www.whmcs.com/) é um sistema de automação de faturamento e cobrança, muito usado por empresas que oferecem serviço de hospedagem.

O módulo do Boleto Simples para o WHMCS gera automaticamente os boletos com diversas configurações bem flexíveis. Apresenta o código de barras dentro da fatura e dos e-mail de fatura. Além disso dá baixa na fatura automaticamente quando um boleto é pago.

##### Código Fonte

O código fonte do módulo oficial do Boleto Simples para WHMCS está disponível em: [https://github.com/BoletoSimples/boletosimples-whmcs](https://github.com/BoletoSimples/boletosimples-whmcs)

##### Informações Técnicas

**Autores:** [@mauriciogofas](https://github.com/mauriciogofas)

![160](https://files.readme.io/e9a0d18-gofas_logo_preto-160-1.png "gofas_logo_preto-160-1.png")

**Licença:** [GPLv2 ou superior](http://www.gnu.org/licenses/gpl-2.0.html)

##### Requisitos

* PHP 5.6 ou superior
* WHMCS 6.0 ou superior

##### Instalação

Ao descompactar o arquivo do download, observe que os diretórios foram distribuídos seguindo a mesma hierarquia dos diretórios padrão do WHMCS, o arquivo + pasta do módulo Gateway está localizado no diretório /modules/gateways/. Siga os passos a seguir se precisar de mais detalhes:

* Faça [download do módulo](https://github.com/BoletoSimples/boletosimples-whmcs/archive/main.zip);
* Descompacte o arquivo .zip;
* Copie o arquivo gofasboletosimples.php + o diretório /gofasboletosimples/, localizados na pasta /modules/gateways/ do arquivo recém descompactado, para a pasta /modules/gateways/ da instalação do seu WHMCS;

##### Configuração

Para mais configurações e opções, veja o [README do projeto no Github](https://github.com/BoletoSimples/boletosimples-whmcs/blob/main/README.md)


---

## API Reference


### Assinaturas
Gerenciar assinaturas

#### GET /v1/v1/customer_subscriptions
**Description**: Listar Assinaturas

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Sucesso na listagem de assinaturas

```
[
  {
    "id": 1,
    "customer_id": 1,
    "customer_person_name": "João Silva",
    "customer_nickname": "string",
    "customer_cnpj_cpf": "16.974.923/0001-84",
    "customer_zipcode": "01310100",
    "customer_email": "user@example.com",
    "customer_email_cc": "user@example.com",
    "customer_address": "Rua F, alamenda G",
    "customer_city_name": "São Paulo",
    "customer_state": "SP",
    "customer_neighborhood": "Centro",
    "customer_address_number": "string",
    "customer_address_complement": "string",
    "customer_phone_number": "string",
    "customer_person_type": "individual",
    "customer_mobile_local_code": "string",
    "customer_mobile_number": "string",
    "customer_notes": "string",
    "customer_ignore_email": true,
    "customer_ignore_sms": true,
    "customer_contact_person": "string",
    "customer_update": "string",
    "bank_billet_account_id": 1,
    "amount": 10.99,
    "cycle": "biweekly",
    "next_billing": "2024-01-15",
    "end_at": "2024-01-15",
    "description": "string",
    "instructions": "string",
    "days_in_advance": 10,
    "fine_type": 1,
    "days_for_fine": 1,
    "fine_percentage": 10.5,
    "fine_value": 10.5,
    "interest_type": 1,
    "days_for_interest": 1,
    "interest_percentage": 10.5,
    "interest_value": 10.5,
    "discount_type": 1,
    "days_for_discount": 1,
    "discount_percentage": 10.5,
    "discount_value": 10.5,
    "days_for_second_discount": 1,
    "second_discount_percentage": 10.5,
    "second_discount_value": 10.5,
    "days_for_third_discount": 1,
    "third_discount_percentage": 10.5,
    "third_discount_value": 10.5,
    "bank_billet_layout_id": 1,
    "notes": "string",
    "tags": [
      "string",
      "string"
    ],
    "bank_billet_ids": [
      1,
      1
    ],
    "prevent_registration": true,
    "divergent_payment_type": 1,
    "divergent_payment_value_type": 1,
    "divergent_payment_maximum_value": 10.5,
    "divergent_payment_minimum_value": 10.5,
    "divergent_payment_maximum_percentage": 10.5,
    "divergent_payment_minimum_percentage": 10.5,
    "divergent_payment_limit": 1,
    "custom_attachment_name": "string",
    "guarantor_name": "string",
    "guarantor_cnpj_cpf": "string",
    "guarantor_address_number": "string",
    "guarantor_neighborhood": "string",
    "guarantor_phone_number": "string",
    "guarantor_city_name": "string",
    "guarantor_state": "string",
    "guarantor_zipcode": "string",
    "guarantor_address": "string",
    "guarantor_address_complement": "string",
    "days_for_revoke": 1,
    "days_for_negativation": 99,
    "days_for_sue": 1,
    "payment_count": 1,
    "import_id": 1,
    "ignore_whatsapp": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "customer_id": 1,
    "customer_person_name": "João Silva",
    "customer_nickname": "string",
    "customer_cnpj_cpf": "16.974.923/0001-84",
    "customer_zipcode": "01310100",
    "customer_email": "user@example.com",
    "customer_email_cc": "user@example.com",
    "customer_address": "Rua F, alamenda G",
    "customer_city_name": "São Paulo",
    "customer_state": "SP",
    "customer_neighborhood": "Centro",
    "customer_address_number": "string",
    "customer_address_complement": "string",
    "customer_phone_number": "string",
    "customer_person_type": "individual",
    "customer_mobile_local_code": "string",
    "customer_mobile_number": "string",
    "customer_notes": "string",
    "customer_ignore_email": true,
    "customer_ignore_sms": true,
    "customer_contact_person": "string",
    "customer_update": "string",
    "bank_billet_account_id": 1,
    "amount": 10.99,
    "cycle": "biweekly",
    "next_billing": "2024-01-15",
    "end_at": "2024-01-15",
    "description": "string",
    "instructions": "string",
    "days_in_advance": 10,
    "fine_type": 1,
    "days_for_fine": 1,
    "fine_percentage": 10.5,
    "fine_value": 10.5,
    "interest_type": 1,
    "days_for_interest": 1,
    "interest_percentage": 10.5,
    "interest_value": 10.5,
    "discount_type": 1,
    "days_for_discount": 1,
    "discount_percentage": 10.5,
    "discount_value": 10.5,
    "days_for_second_discount": 1,
    "second_discount_percentage": 10.5,
    "second_discount_value": 10.5,
    "days_for_third_discount": 1,
    "third_discount_percentage": 10.5,
    "third_discount_value": 10.5,
    "bank_billet_layout_id": 1,
    "notes": "string",
    "tags": [
      "string",
      "string"
    ],
    "bank_billet_ids": [
      1,
      1
    ],
    "prevent_registration": true,
    "divergent_payment_type": 1,
    "divergent_payment_value_type": 1,
    "divergent_payment_maximum_value": 10.5,
    "divergent_payment_minimum_value": 10.5,
    "divergent_payment_maximum_percentage": 10.5,
    "divergent_payment_minimum_percentage": 10.5,
    "divergent_payment_limit": 1,
    "custom_attachment_name": "string",
    "guarantor_name": "string",
    "guarantor_cnpj_cpf": "string",
    "guarantor_address_number": "string",
    "guarantor_neighborhood": "string",
    "guarantor_phone_number": "string",
    "guarantor_city_name": "string",
    "guarantor_state": "string",
    "guarantor_zipcode": "string",
    "guarantor_address": "string",
    "guarantor_address_complement": "string",
    "days_for_revoke": 1,
    "days_for_negativation": 99,
    "days_for_sue": 1,
    "payment_count": 1,
    "import_id": 1,
    "ignore_whatsapp": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### POST /v1/v1/customer_subscriptions
**Description**: Criar uma Assinatura

**Request Body** (application/json):

- Type: `v1_customer_subscription_object`
- Properties:
  - `id` (optional): integer - ID da assinatura
  - `customer_id` (optional): integer - ID do Cliente. Quando esse ID é passado, os campos `customer_person_name`, `customer_cnpj_cpf`, `customer_zipcode`, `customer_address`, `customer_city_name`, `customer_state` e `customer_neighborhood` não são obrigatórios.
  - `customer_person_name` (required): string - Nome do cliente
  - `customer_nickname` (optional): string - Apelido ou Nome Fantasia do Pagador
  - `customer_cnpj_cpf` (required): string - CPF/CNPJ do cliente
  - `customer_zipcode` (required): string - CEP (formato 99999999)
  - `customer_email` (optional): string - E-mail do Pagador
  - `customer_email_cc` (optional): string - E-mail alternativo do Pagador
  - `customer_address` (required): string - Endereço
  - `customer_city_name` (required): string - Cidade(Nome deve estar correto e completo)
  - `customer_state` (required): string - Estado
  - `customer_neighborhood` (required): string - Bairro
  - `customer_address_number` (optional): string - Número
  - `customer_address_complement` (optional): string - Complemento
  - `customer_phone_number` (optional): string - Telefone (com DDD)
  - `customer_person_type` (optional): string - Tipo de Pagador.
* `individual` Pessoa Física
* `juridical` Pessoa Jurídica
  - `customer_mobile_local_code` (optional): string - DDD do Celular
  - `customer_mobile_number` (optional): string - Celular
  - `customer_notes` (optional): string - Anotações do Pagador
  - `customer_ignore_email` (optional): boolean - Nunca enviar e-mail para este cliente
  - `customer_ignore_sms` (optional): boolean - Nunca enviar SMS para este cliente
  - `customer_contact_person` (optional): string - Contato
  - `customer_update` (optional): string - Contato
  - `bank_billet_account_id` (required): integer - ID da Carteira de Cobrança. Se não informado, usará a carteira padrão.
  - `amount` (required): number - Valor da Assinatura (R$)
  - `cycle` (optional): string - Ciclo da assinatura. Default: monthly

* `biweekly` Quinzenal
* `bimonthly` Bimestral
* `monthly` Mensal
* `quarterly` Trimestral
* `semiannual` Semestral
* `annual` Anual
  - `next_billing` (optional): string - Data da Primeira ou Próxima cobrança. Caso não seja enviado uma data, esse campo será calculado para ter o valor do dia da criação da assinatura mais o ciclo escolhido. Ex.: Mensal(Hoje + 30 dias)
  - `end_at` (optional): string - Data em que deseja parar as cobranças. Caso em branco, as cobranças serão geradas automaticamente até que se informe uma data ou se exclua a assinatura.
  - `description` (optional): string - Descrição do produto ou serviço
  - `instructions` (optional): string - Instruções para o Caixa
  - `days_in_advance` (optional): integer - Com quantos dias de antecedência à data de vencimento a cobrança será gerada. Default: 7.
  - `fine_type` (optional): integer - Tipo de multa:
* `0` Inexistente (Padrão)
* `1` Para percentual do valor do boleto
* `2` Para valor fixo
  - `days_for_fine` (optional): integer - Quantidade de dias após o vencimento que a multa começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `fine_percentage` (optional): number - Porcentagem de Multa por Atraso Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se fine_type é igual a 1
  - `fine_value` (optional): number - Valor da multa (R$). Obrigatório se fine_type é igual a 2.
  - `interest_type` (optional): integer - Tipo de juros/mora:
* `0` Inexistente (Padrão)
* `1` Para porcentagem diária
* `2` Para valor diário
  - `days_for_interest` (optional): integer - Quantidade de dias após o vencimento que a mora começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `interest_percentage` (optional): number - Porcentagem diária de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se interest_type é igual a 1.
  - `interest_value` (optional): number - Valor diário de juros (R$). Obrigatório se interest_type é igual a 2.
  - `discount_type` (optional): integer - Tipo de desconto:

O tipo de desconto será o mesmo para todos os três descontos, caso existam. :
* `0` Inexistente (Padrão)
* `1` Para valor fixo
* `2` Para percentual do valor do boleto
  - `days_for_discount` (optional): integer - Dias para desconto. Obrigatório se discount_type é diferente de 0(zero)
  - `discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao desconto. Obrigatório se discount_type é igual a 2
  - `discount_value` (optional): number - Valor do desconto (R$). Obrigatório se discount_type é igual a 1.
  - `days_for_second_discount` (optional): integer - Dias para segundo desconto.
  - `second_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao segundo desconto.
  - `second_discount_value` (optional): number - Valor do segundo desconto (R$).
  - `days_for_third_discount` (optional): integer - Dias para terceiro desconto.
  - `third_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao terceiro desconto.
  - `third_discount_value` (optional): number - Valor do terceiro desconto (R$).
  - `bank_billet_layout_id` (optional): integer - ID do Modelo de Boleto
  - `notes` (optional): string - Anotações
  - `tags` (optional): array - Tags associadas ao boleto
  - `bank_billet_ids` (optional): array - IDs de boletos vinculados ao carnê
  - `prevent_registration` (optional): boolean - Impedir envio de registro ao banco:
Caso `true`, impede que o boleto seja registrado. Para ser usado nos casos em que o boleto já foi registrado fora da KOBANA mas deseja-se incluí-lo no sistema.
  - `divergent_payment_type` (optional): integer - Tipo de pagamento divergente:

Válido apenas para Itaú e Caixa.
* `1` Aceita qualquer valor divergente
* `2` Aceita pagamentos dentro de uma faixa de valores ou percentuais
* `3` Não aceita pagamento de valores divergentes
* `4` Aceita pagamentos de valores superiores a um valor ou percentual mínimo
  - `divergent_payment_value_type` (optional): integer - Tipo de valor a considerar para os limites de pagamentos:

Válido apenas para Itaú e Caixa.
* `1` Informa pagamentos divergentes por valores
* `2` Informa pagamentos divergentes por percentuais
  - `divergent_payment_maximum_value` (optional): number - Valor máximo para a faixa de pagamentos divergentes. 
  - `divergent_payment_minimum_value` (optional): number - Valor mínimo para a faixa de pagamentos divergentes. 
  - `divergent_payment_maximum_percentage` (optional): number - Percentual máximo para a faixa de pagamentos divergentes. 
  - `divergent_payment_minimum_percentage` (optional): number - Percentual mínimo para a faixa de pagamentos divergentes.
  - `divergent_payment_limit` (optional): integer - Quantidade de pagamentos permitida. Obrigatório se informados dados para pagamento divergente. Usado somente pela Caixa.
  - `custom_attachment_name` (optional): string - Nome para ser usado nos arquivos de boleto enviados para o cliente em notificações. Aceita uso de variáveis. Caso seja deixado vazio, o padrão é a palavra “boleto” acompanhada do ID.
  - `guarantor_name` (optional): string - Nome do Beneficiário final (Sacador/Avalista)
  - `guarantor_cnpj_cpf` (optional): string - CNPJ/CPF do Beneficiário final (Sacador/Avalista)
  - `guarantor_address_number` (optional): string - Número do Beneficiário final (Sacador/Avalista)
  - `guarantor_neighborhood` (optional): string - Bairro do Beneficiário final (Sacador/Avalista)
  - `guarantor_phone_number` (optional): string - Telefone (com DDD) do Beneficiário final (Sacador/Avalista)
  - `guarantor_city_name` (optional): string - Cidade(Nome deve estar correto e completo) do Beneficiário final (Sacador/Avalista)
  - `guarantor_state` (optional): string - Estado do Beneficiário final (Sacador/Avalista)
  - `guarantor_zipcode` (optional): string - CEP (formato 99999999) do Beneficiário final (Sacador/Avalista)
  - `guarantor_address` (optional): string - Endereço do Beneficiário final (Sacador/Avalista)
  - `guarantor_address_complement` (optional): string - Complemento do Beneficiário final (Sacador/Avalista)
  - `days_for_revoke` (optional): integer - Dias corridos para Baixa/Devolução:

                  Nulo/Branco: Obedece ao padrão do banco.
                  0: Baixa/Devolução no mesmo dia do vencimento.
                  1 ou mais: Baixa/Devolução após o vencimento(Vencimento + X dias corridos).
                  
  - `days_for_negativation` (optional): integer - Dias corridos para Negativação:

Disponível apenas para os seguintes bancos e formatos.

* Banco |	CNAB 240|	CNAB 400 |Webservice
* Bradesco |	Sim |	Sim	| Não
* Itaú | Não | Sim | Não
                
  - `days_for_sue` (optional): integer - Dias corridos para Protesto
  - `payment_count` (optional): integer - Quantidade de pagamentos parciais aceitos para este boleto.
  - `import_id` (optional): integer - ID da Importação
  - `ignore_whatsapp` (optional): boolean - Nunca enviar esta asinatura por WhatsApp
  - `created_at` (optional): string - Data e hora de criação do registro
  - `updated_at` (optional): string - Data e hora da última atualização do registro
- Example:
```
{
  "id": 1,
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_nickname": "string",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_zipcode": "01310100",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_address": "Rua F, alamenda G",
  "customer_city_name": "São Paulo",
  "customer_state": "SP",
  "customer_neighborhood": "Centro",
  "customer_address_number": "string",
  "customer_address_complement": "string",
  "customer_phone_number": "string",
  "customer_person_type": "individual",
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_notes": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_contact_person": "string",
  "customer_update": "string",
  "bank_billet_account_id": 1,
  "amount": 10.99,
  "cycle": "biweekly",
  "next_billing": "2024-01-15",
  "end_at": "2024-01-15",
  "description": "string",
  "instructions": "string",
  "days_in_advance": 10,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "bank_billet_layout_id": 1,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "bank_billet_ids": [
    1,
    1
  ],
  "prevent_registration": true,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "custom_attachment_name": "string",
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "days_for_revoke": 1,
  "days_for_negativation": 99,
  "days_for_sue": 1,
  "payment_count": 1,
  "import_id": 1,
  "ignore_whatsapp": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Assinatura criada

```
{
  "id": 1,
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_nickname": "string",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_zipcode": "01310100",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_address": "Rua F, alamenda G",
  "customer_city_name": "São Paulo",
  "customer_state": "SP",
  "customer_neighborhood": "Centro",
  "customer_address_number": "string",
  "customer_address_complement": "string",
  "customer_phone_number": "string",
  "customer_person_type": "individual",
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_notes": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_contact_person": "string",
  "customer_update": "string",
  "bank_billet_account_id": 1,
  "amount": 10.99,
  "cycle": "biweekly",
  "next_billing": "2024-01-15",
  "end_at": "2024-01-15",
  "description": "string",
  "instructions": "string",
  "days_in_advance": 10,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "bank_billet_layout_id": 1,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "bank_billet_ids": [
    1,
    1
  ],
  "prevent_registration": true,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "custom_attachment_name": "string",
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "days_for_revoke": 1,
  "days_for_negativation": 99,
  "days_for_sue": 1,
  "payment_count": 1,
  "import_id": 1,
  "ignore_whatsapp": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### DELETE /v1/v1/customer_subscriptions/{id}
**Description**: Excluir a Assinatura

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID da Assinatura

**Response**:

Assinatura excluída

#### GET /v1/v1/customer_subscriptions/{id}
**Description**: Informações da Assinatura

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID da Assinatura

**Response**:

Assinatura encontrada

```
{
  "id": 1,
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_nickname": "string",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_zipcode": "01310100",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_address": "Rua F, alamenda G",
  "customer_city_name": "São Paulo",
  "customer_state": "SP",
  "customer_neighborhood": "Centro",
  "customer_address_number": "string",
  "customer_address_complement": "string",
  "customer_phone_number": "string",
  "customer_person_type": "individual",
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_notes": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_contact_person": "string",
  "customer_update": "string",
  "bank_billet_account_id": 1,
  "amount": 10.99,
  "cycle": "biweekly",
  "next_billing": "2024-01-15",
  "end_at": "2024-01-15",
  "description": "string",
  "instructions": "string",
  "days_in_advance": 10,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "bank_billet_layout_id": 1,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "bank_billet_ids": [
    1,
    1
  ],
  "prevent_registration": true,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "custom_attachment_name": "string",
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "days_for_revoke": 1,
  "days_for_negativation": 99,
  "days_for_sue": 1,
  "payment_count": 1,
  "import_id": 1,
  "ignore_whatsapp": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### PUT /v1/v1/customer_subscriptions/{id}
**Description**: Atualizar a Assinatura

**Request Body** (application/json):

- Type: `v1_customer_subscription_object`
- Properties:
  - `id` (optional): integer - ID da assinatura
  - `customer_id` (optional): integer - ID do Cliente. Quando esse ID é passado, os campos `customer_person_name`, `customer_cnpj_cpf`, `customer_zipcode`, `customer_address`, `customer_city_name`, `customer_state` e `customer_neighborhood` não são obrigatórios.
  - `customer_person_name` (required): string - Nome do cliente
  - `customer_nickname` (optional): string - Apelido ou Nome Fantasia do Pagador
  - `customer_cnpj_cpf` (required): string - CPF/CNPJ do cliente
  - `customer_zipcode` (required): string - CEP (formato 99999999)
  - `customer_email` (optional): string - E-mail do Pagador
  - `customer_email_cc` (optional): string - E-mail alternativo do Pagador
  - `customer_address` (required): string - Endereço
  - `customer_city_name` (required): string - Cidade(Nome deve estar correto e completo)
  - `customer_state` (required): string - Estado
  - `customer_neighborhood` (required): string - Bairro
  - `customer_address_number` (optional): string - Número
  - `customer_address_complement` (optional): string - Complemento
  - `customer_phone_number` (optional): string - Telefone (com DDD)
  - `customer_person_type` (optional): string - Tipo de Pagador.
* `individual` Pessoa Física
* `juridical` Pessoa Jurídica
  - `customer_mobile_local_code` (optional): string - DDD do Celular
  - `customer_mobile_number` (optional): string - Celular
  - `customer_notes` (optional): string - Anotações do Pagador
  - `customer_ignore_email` (optional): boolean - Nunca enviar e-mail para este cliente
  - `customer_ignore_sms` (optional): boolean - Nunca enviar SMS para este cliente
  - `customer_contact_person` (optional): string - Contato
  - `customer_update` (optional): string - Contato
  - `bank_billet_account_id` (required): integer - ID da Carteira de Cobrança. Se não informado, usará a carteira padrão.
  - `amount` (required): number - Valor da Assinatura (R$)
  - `cycle` (optional): string - Ciclo da assinatura. Default: monthly

* `biweekly` Quinzenal
* `bimonthly` Bimestral
* `monthly` Mensal
* `quarterly` Trimestral
* `semiannual` Semestral
* `annual` Anual
  - `next_billing` (optional): string - Data da Primeira ou Próxima cobrança. Caso não seja enviado uma data, esse campo será calculado para ter o valor do dia da criação da assinatura mais o ciclo escolhido. Ex.: Mensal(Hoje + 30 dias)
  - `end_at` (optional): string - Data em que deseja parar as cobranças. Caso em branco, as cobranças serão geradas automaticamente até que se informe uma data ou se exclua a assinatura.
  - `description` (optional): string - Descrição do produto ou serviço
  - `instructions` (optional): string - Instruções para o Caixa
  - `days_in_advance` (optional): integer - Com quantos dias de antecedência à data de vencimento a cobrança será gerada. Default: 7.
  - `fine_type` (optional): integer - Tipo de multa:
* `0` Inexistente (Padrão)
* `1` Para percentual do valor do boleto
* `2` Para valor fixo
  - `days_for_fine` (optional): integer - Quantidade de dias após o vencimento que a multa começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `fine_percentage` (optional): number - Porcentagem de Multa por Atraso Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se fine_type é igual a 1
  - `fine_value` (optional): number - Valor da multa (R$). Obrigatório se fine_type é igual a 2.
  - `interest_type` (optional): integer - Tipo de juros/mora:
* `0` Inexistente (Padrão)
* `1` Para porcentagem diária
* `2` Para valor diário
  - `days_for_interest` (optional): integer - Quantidade de dias após o vencimento que a mora começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `interest_percentage` (optional): number - Porcentagem diária de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se interest_type é igual a 1.
  - `interest_value` (optional): number - Valor diário de juros (R$). Obrigatório se interest_type é igual a 2.
  - `discount_type` (optional): integer - Tipo de desconto:

O tipo de desconto será o mesmo para todos os três descontos, caso existam. :
* `0` Inexistente (Padrão)
* `1` Para valor fixo
* `2` Para percentual do valor do boleto
  - `days_for_discount` (optional): integer - Dias para desconto. Obrigatório se discount_type é diferente de 0(zero)
  - `discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao desconto. Obrigatório se discount_type é igual a 2
  - `discount_value` (optional): number - Valor do desconto (R$). Obrigatório se discount_type é igual a 1.
  - `days_for_second_discount` (optional): integer - Dias para segundo desconto.
  - `second_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao segundo desconto.
  - `second_discount_value` (optional): number - Valor do segundo desconto (R$).
  - `days_for_third_discount` (optional): integer - Dias para terceiro desconto.
  - `third_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao terceiro desconto.
  - `third_discount_value` (optional): number - Valor do terceiro desconto (R$).
  - `bank_billet_layout_id` (optional): integer - ID do Modelo de Boleto
  - `notes` (optional): string - Anotações
  - `tags` (optional): array - Tags associadas ao boleto
  - `bank_billet_ids` (optional): array - IDs de boletos vinculados ao carnê
  - `prevent_registration` (optional): boolean - Impedir envio de registro ao banco:
Caso `true`, impede que o boleto seja registrado. Para ser usado nos casos em que o boleto já foi registrado fora da KOBANA mas deseja-se incluí-lo no sistema.
  - `divergent_payment_type` (optional): integer - Tipo de pagamento divergente:

Válido apenas para Itaú e Caixa.
* `1` Aceita qualquer valor divergente
* `2` Aceita pagamentos dentro de uma faixa de valores ou percentuais
* `3` Não aceita pagamento de valores divergentes
* `4` Aceita pagamentos de valores superiores a um valor ou percentual mínimo
  - `divergent_payment_value_type` (optional): integer - Tipo de valor a considerar para os limites de pagamentos:

Válido apenas para Itaú e Caixa.
* `1` Informa pagamentos divergentes por valores
* `2` Informa pagamentos divergentes por percentuais
  - `divergent_payment_maximum_value` (optional): number - Valor máximo para a faixa de pagamentos divergentes. 
  - `divergent_payment_minimum_value` (optional): number - Valor mínimo para a faixa de pagamentos divergentes. 
  - `divergent_payment_maximum_percentage` (optional): number - Percentual máximo para a faixa de pagamentos divergentes. 
  - `divergent_payment_minimum_percentage` (optional): number - Percentual mínimo para a faixa de pagamentos divergentes.
  - `divergent_payment_limit` (optional): integer - Quantidade de pagamentos permitida. Obrigatório se informados dados para pagamento divergente. Usado somente pela Caixa.
  - `custom_attachment_name` (optional): string - Nome para ser usado nos arquivos de boleto enviados para o cliente em notificações. Aceita uso de variáveis. Caso seja deixado vazio, o padrão é a palavra “boleto” acompanhada do ID.
  - `guarantor_name` (optional): string - Nome do Beneficiário final (Sacador/Avalista)
  - `guarantor_cnpj_cpf` (optional): string - CNPJ/CPF do Beneficiário final (Sacador/Avalista)
  - `guarantor_address_number` (optional): string - Número do Beneficiário final (Sacador/Avalista)
  - `guarantor_neighborhood` (optional): string - Bairro do Beneficiário final (Sacador/Avalista)
  - `guarantor_phone_number` (optional): string - Telefone (com DDD) do Beneficiário final (Sacador/Avalista)
  - `guarantor_city_name` (optional): string - Cidade(Nome deve estar correto e completo) do Beneficiário final (Sacador/Avalista)
  - `guarantor_state` (optional): string - Estado do Beneficiário final (Sacador/Avalista)
  - `guarantor_zipcode` (optional): string - CEP (formato 99999999) do Beneficiário final (Sacador/Avalista)
  - `guarantor_address` (optional): string - Endereço do Beneficiário final (Sacador/Avalista)
  - `guarantor_address_complement` (optional): string - Complemento do Beneficiário final (Sacador/Avalista)
  - `days_for_revoke` (optional): integer - Dias corridos para Baixa/Devolução:

                  Nulo/Branco: Obedece ao padrão do banco.
                  0: Baixa/Devolução no mesmo dia do vencimento.
                  1 ou mais: Baixa/Devolução após o vencimento(Vencimento + X dias corridos).
                  
  - `days_for_negativation` (optional): integer - Dias corridos para Negativação:

Disponível apenas para os seguintes bancos e formatos.

* Banco |	CNAB 240|	CNAB 400 |Webservice
* Bradesco |	Sim |	Sim	| Não
* Itaú | Não | Sim | Não
                
  - `days_for_sue` (optional): integer - Dias corridos para Protesto
  - `payment_count` (optional): integer - Quantidade de pagamentos parciais aceitos para este boleto.
  - `import_id` (optional): integer - ID da Importação
  - `ignore_whatsapp` (optional): boolean - Nunca enviar esta asinatura por WhatsApp
  - `created_at` (optional): string - Data e hora de criação do registro
  - `updated_at` (optional): string - Data e hora da última atualização do registro
- Example:
```
{
  "id": 1,
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_nickname": "string",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_zipcode": "01310100",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_address": "Rua F, alamenda G",
  "customer_city_name": "São Paulo",
  "customer_state": "SP",
  "customer_neighborhood": "Centro",
  "customer_address_number": "string",
  "customer_address_complement": "string",
  "customer_phone_number": "string",
  "customer_person_type": "individual",
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_notes": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_contact_person": "string",
  "customer_update": "string",
  "bank_billet_account_id": 1,
  "amount": 10.99,
  "cycle": "biweekly",
  "next_billing": "2024-01-15",
  "end_at": "2024-01-15",
  "description": "string",
  "instructions": "string",
  "days_in_advance": 10,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "bank_billet_layout_id": 1,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "bank_billet_ids": [
    1,
    1
  ],
  "prevent_registration": true,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "custom_attachment_name": "string",
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "days_for_revoke": 1,
  "days_for_negativation": 99,
  "days_for_sue": 1,
  "payment_count": 1,
  "import_id": 1,
  "ignore_whatsapp": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Assinatura

**Response**:

Assinatura atualizado

#### POST /v1/v1/customer_subscriptions/{id}/next_charge
**Description**: Gerar Próxima Cobrança

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Assinatura

**Response**:

Próxima cobrança gerada

```
{
  "id": 1,
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_nickname": "string",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_zipcode": "01310100",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_address": "Rua F, alamenda G",
  "customer_city_name": "São Paulo",
  "customer_state": "SP",
  "customer_neighborhood": "Centro",
  "customer_address_number": "string",
  "customer_address_complement": "string",
  "customer_phone_number": "string",
  "customer_person_type": "individual",
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_notes": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_contact_person": "string",
  "customer_update": "string",
  "bank_billet_account_id": 1,
  "amount": 10.99,
  "cycle": "biweekly",
  "next_billing": "2024-01-15",
  "end_at": "2024-01-15",
  "description": "string",
  "instructions": "string",
  "days_in_advance": 10,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "bank_billet_layout_id": 1,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "bank_billet_ids": [
    1,
    1
  ],
  "prevent_registration": true,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "custom_attachment_name": "string",
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "days_for_revoke": 1,
  "days_for_negativation": 99,
  "days_for_sue": 1,
  "payment_count": 1,
  "import_id": 1,
  "ignore_whatsapp": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


### Boletos
Gerenciar boletos

#### GET /v1/v1/bank_billets
**Description**: Listar Boletos

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `bank_billet_account_id` (query, string) (optional): Filtro por ID da Carteira. Acha todas os registros que tenham o ID.
- `status` (query, string) (optional): Filtro por Situação. Acha todos os registros com o status.
- `our_number` (query, string) (optional): Filtro por Nosso Número
- `processed_our_number_raw` (query, string) (optional): Filtro por Nosso Número com DV (limpo).
- `cnpj_cpf` (query, string) (optional): Filtro por CPF/CNPJ do cliente. Deve ser formatado com máscara. Acha todos os registros cujo campo seja igual ao string.
- `created_from` (query, string) (optional): Data inicial do filtro de data de criação do registro.
- `created_to` (query, string) (optional): Data final do filtro de data de criação do registro.
- `expire_from` (query, string) (optional): Data inicial do filtro de data de vencimento
- `expire_to` (query, string) (optional): Data final do filtro de data de vencimento.
- `paid_from` (query, string) (optional): Data inicial do filtro de data de pagamento.
- `paid_to` (query, string) (optional): Data final do filtro de data de pagamento.
- `registered_to` (query, string) (optional): Data inicial do filtro de data de registro.
- `registered_from` (query, string) (optional): Data final do filtro de data de registro.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `updated_from` (query, string) (optional): Data inicial do filtro de data de atualização do registro.
- `updated_to` (query, string) (optional): Data final do filtro de data de atualização do registro.

**Response**:

Sucesso na listagem de boletos

```
[
  {
    "id": 1,
    "bank_billet_account_id": 1,
    "bank_billet_layout_id": 1,
    "amount": 10.99,
    "expire_at": "2024-01-15",
    "customer_id": 1,
    "customer_person_name": "João Silva",
    "customer_cnpj_cpf": "16.974.923/0001-84",
    "customer_state": "SP",
    "customer_city_name": "São Paulo",
    "customer_zipcode": "01310100",
    "customer_address": "Rua F, alamenda G",
    "customer_address_complement": "string",
    "customer_address_number": "string",
    "customer_email": "user@example.com",
    "customer_email_cc": "user@example.com",
    "customer_neighborhood": "Centro",
    "customer_phone_number": "string",
    "customer_ignore_email": true,
    "customer_ignore_sms": true,
    "customer_mobile_local_code": "string",
    "customer_mobile_number": "string",
    "customer_nickname": "string",
    "customer_notes": "string",
    "customer_contact_person": "string",
    "interest_type": 1,
    "days_for_interest": 1,
    "interest_percentage": 10.5,
    "interest_value": 10.5,
    "interest_days_type": 1,
    "fine_type": 1,
    "days_for_fine": 1,
    "fine_percentage": 10.5,
    "fine_value": 10.5,
    "discount_type": 1,
    "days_for_discount": 1,
    "discount_percentage": 10.5,
    "discount_value": 10.5,
    "days_for_second_discount": 1,
    "second_discount_percentage": 10.5,
    "second_discount_value": 10.5,
    "days_for_third_discount": 1,
    "third_discount_percentage": 10.5,
    "third_discount_value": 10.5,
    "tags": [
      "string",
      "string"
    ],
    "tag_list": "string",
    "charge_type": 1,
    "dispatch_type": 1,
    "guarantor_name": "string",
    "guarantor_cnpj_cpf": "string",
    "guarantor_address_number": "string",
    "guarantor_neighborhood": "string",
    "guarantor_phone_number": "string",
    "guarantor_city_name": "string",
    "guarantor_state": "string",
    "guarantor_zipcode": "string",
    "guarantor_address": "string",
    "guarantor_address_complement": "string",
    "description": "string",
    "instructions": "string",
    "document_date": "2024-01-15",
    "document_type": "01",
    "document_type_label": "string",
    "document_number": "string",
    "acceptance": "N",
    "our_number": "string",
    "processed_our_number": "string",
    "processed_our_number_raw": "string",
    "paid_amount": 10.5,
    "paid_at": "2024-01-15",
    "days_for_revoke": 1,
    "credit_bureau": 1,
    "days_for_negativation": 1,
    "days_for_sue_type": 1,
    "days_for_sue": 1,
    "sue_code": "string",
    "revoke_code": "string",
    "first_instruction": "string",
    "second_instruction": "string",
    "watermark": true,
    "payment_count": 1,
    "divergent_payment_type": 1,
    "divergent_payment_value_type": 1,
    "divergent_payment_maximum_value": 10.5,
    "divergent_payment_minimum_value": 10.5,
    "divergent_payment_maximum_percentage": 10.5,
    "divergent_payment_minimum_percentage": 10.5,
    "divergent_payment_limit": 1,
    "prevent_registration": true,
    "control_number": "string",
    "ignore_email": true,
    "ignore_sms": true,
    "ignore_whatsapp": true,
    "addons": "string",
    "custom_data": {},
    "meta": {},
    "notes": "string",
    "custom_attachment_name": "string",
    "split_payment": true,
    "split_payment_type": 1,
    "split_accounts": [
      {
        "bank_number": "...",
        "agency_number": "...",
        "agency_digit": "...",
        "account_number": "...",
        "account_digit": "...",
        "cnpj_cpf": "...",
        "name": "...",
        "amount": "...",
        "floating": "..."
      },
      {
        "bank_number": "...",
        "agency_number": "...",
        "agency_digit": "...",
        "account_number": "...",
        "account_digit": "...",
        "cnpj_cpf": "...",
        "name": "...",
        "amount": "...",
        "floating": "..."
      }
    ],
    "payment_place": "string",
    "installment_id": 1,
    "installment_number": 1,
    "installment_total": 1,
    "customer_subscription_id": 1,
    "beneficiary_name": "string",
    "beneficiary_cnpj_cpf": "string",
    "beneficiary_address": "string",
    "beneficiary_assignor_code": "string",
    "bank_contract_slug": "string",
    "agency_number": "string",
    "agency_digit": "string",
    "account_number": "string",
    "account_digit": "string",
    "extra1": "string",
    "extra1_digit": "string",
    "extra2": "string",
    "extra2_digit": "string",
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "registration_status": "pending",
    "registered_at": "2024-01-15T10:30:00Z",
    "register_type": 1,
    "cancel_type": 1,
    "cancellation_reason": 1,
    "line": "string",
    "barcode": "string",
    "shorten_url": "string",
    "url": "string",
    "carne_url": "string",
    "formats": {},
    "pix_enabled": true,
    "pix_qrcode": "string",
    "pix_txid": "string",
    "prevent_pix": true,
    "status": "generating",
    "recipient_account": "string",
    "reduction_type": 1,
    "reduction_amount": 30.25,
    "reduction_percentage": 10.5,
    "instructions_mode": 1,
    "import_id": 1,
    "virtual_bank_billet_id": 1,
    "financial_provider_external_id": "string",
    "after_create": [
      "string",
      "string"
    ]
  },
  {
    "id": 1,
    "bank_billet_account_id": 1,
    "bank_billet_layout_id": 1,
    "amount": 10.99,
    "expire_at": "2024-01-15",
    "customer_id": 1,
    "customer_person_name": "João Silva",
    "customer_cnpj_cpf": "16.974.923/0001-84",
    "customer_state": "SP",
    "customer_city_name": "São Paulo",
    "customer_zipcode": "01310100",
    "customer_address": "Rua F, alamenda G",
    "customer_address_complement": "string",
    "customer_address_number": "string",
    "customer_email": "user@example.com",
    "customer_email_cc": "user@example.com",
    "customer_neighborhood": "Centro",
    "customer_phone_number": "string",
    "customer_ignore_email": true,
    "customer_ignore_sms": true,
    "customer_mobile_local_code": "string",
    "customer_mobile_number": "string",
    "customer_nickname": "string",
    "customer_notes": "string",
    "customer_contact_person": "string",
    "interest_type": 1,
    "days_for_interest": 1,
    "interest_percentage": 10.5,
    "interest_value": 10.5,
    "interest_days_type": 1,
    "fine_type": 1,
    "days_for_fine": 1,
    "fine_percentage": 10.5,
    "fine_value": 10.5,
    "discount_type": 1,
    "days_for_discount": 1,
    "discount_percentage": 10.5,
    "discount_value": 10.5,
    "days_for_second_discount": 1,
    "second_discount_percentage": 10.5,
    "second_discount_value": 10.5,
    "days_for_third_discount": 1,
    "third_discount_percentage": 10.5,
    "third_discount_value": 10.5,
    "tags": [
      "string",
      "string"
    ],
    "tag_list": "string",
    "charge_type": 1,
    "dispatch_type": 1,
    "guarantor_name": "string",
    "guarantor_cnpj_cpf": "string",
    "guarantor_address_number": "string",
    "guarantor_neighborhood": "string",
    "guarantor_phone_number": "string",
    "guarantor_city_name": "string",
    "guarantor_state": "string",
    "guarantor_zipcode": "string",
    "guarantor_address": "string",
    "guarantor_address_complement": "string",
    "description": "string",
    "instructions": "string",
    "document_date": "2024-01-15",
    "document_type": "01",
    "document_type_label": "string",
    "document_number": "string",
    "acceptance": "N",
    "our_number": "string",
    "processed_our_number": "string",
    "processed_our_number_raw": "string",
    "paid_amount": 10.5,
    "paid_at": "2024-01-15",
    "days_for_revoke": 1,
    "credit_bureau": 1,
    "days_for_negativation": 1,
    "days_for_sue_type": 1,
    "days_for_sue": 1,
    "sue_code": "string",
    "revoke_code": "string",
    "first_instruction": "string",
    "second_instruction": "string",
    "watermark": true,
    "payment_count": 1,
    "divergent_payment_type": 1,
    "divergent_payment_value_type": 1,
    "divergent_payment_maximum_value": 10.5,
    "divergent_payment_minimum_value": 10.5,
    "divergent_payment_maximum_percentage": 10.5,
    "divergent_payment_minimum_percentage": 10.5,
    "divergent_payment_limit": 1,
    "prevent_registration": true,
    "control_number": "string",
    "ignore_email": true,
    "ignore_sms": true,
    "ignore_whatsapp": true,
    "addons": "string",
    "custom_data": {},
    "meta": {},
    "notes": "string",
    "custom_attachment_name": "string",
    "split_payment": true,
    "split_payment_type": 1,
    "split_accounts": [
      {
        "bank_number": "...",
        "agency_number": "...",
        "agency_digit": "...",
        "account_number": "...",
        "account_digit": "...",
        "cnpj_cpf": "...",
        "name": "...",
        "amount": "...",
        "floating": "..."
      },
      {
        "bank_number": "...",
        "agency_number": "...",
        "agency_digit": "...",
        "account_number": "...",
        "account_digit": "...",
        "cnpj_cpf": "...",
        "name": "...",
        "amount": "...",
        "floating": "..."
      }
    ],
    "payment_place": "string",
    "installment_id": 1,
    "installment_number": 1,
    "installment_total": 1,
    "customer_subscription_id": 1,
    "beneficiary_name": "string",
    "beneficiary_cnpj_cpf": "string",
    "beneficiary_address": "string",
    "beneficiary_assignor_code": "string",
    "bank_contract_slug": "string",
    "agency_number": "string",
    "agency_digit": "string",
    "account_number": "string",
    "account_digit": "string",
    "extra1": "string",
    "extra1_digit": "string",
    "extra2": "string",
    "extra2_digit": "string",
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "registration_status": "pending",
    "registered_at": "2024-01-15T10:30:00Z",
    "register_type": 1,
    "cancel_type": 1,
    "cancellation_reason": 1,
    "line": "string",
    "barcode": "string",
    "shorten_url": "string",
    "url": "string",
    "carne_url": "string",
    "formats": {},
    "pix_enabled": true,
    "pix_qrcode": "string",
    "pix_txid": "string",
    "prevent_pix": true,
    "status": "generating",
    "recipient_account": "string",
    "reduction_type": 1,
    "reduction_amount": 30.25,
    "reduction_percentage": 10.5,
    "instructions_mode": 1,
    "import_id": 1,
    "virtual_bank_billet_id": 1,
    "financial_provider_external_id": "string",
    "after_create": [
      "string",
      "string"
    ]
  }
]
```


#### POST /v1/v1/bank_billets
**Description**: Criar um Boleto

**Request Body** (application/json):

- Type: `v1_bank_billet_object`
- Properties:
  - `id` (optional): integer - ID do boleto
  - `bank_billet_account_id` (optional): integer - ID da Carteira de Cobrança. Se não informado, usará a carteira padrão.
  - `bank_billet_layout_id` (optional): integer - ID do Modelo de Boleto
  - `amount` (required): number - Quantia
  - `expire_at` (required): string - Data de vencimento
  - `customer_id` (optional): integer - ID do Cliente. Quando esse ID é passado, os campos `customer_person_name`, `customer_cnpj_cpf`, `customer_zipcode`, `customer_address`, `customer_city_name`, `customer_state` e `customer_neighborhood` não são obrigatórios.
  - `customer_person_name` (required): string - Nome do cliente
  - `customer_cnpj_cpf` (required): string - CPF/CNPJ do cliente
  - `customer_state` (required): string - Estado
  - `customer_city_name` (required): string - Cidade(Nome deve estar correto e completo)
  - `customer_zipcode` (required): string - CEP (formato 99999999)
  - `customer_address` (required): string - Endereço
  - `customer_address_complement` (optional): string - Complemento
  - `customer_address_number` (optional): string - Número
  - `customer_email` (optional): string - E-mail do Pagador
  - `customer_email_cc` (optional): string - E-mail alternativo do Pagador
  - `customer_neighborhood` (required): string - Bairro
  - `customer_phone_number` (optional): string - Telefone (com DDD)
  - `customer_ignore_email` (optional): boolean - Nunca enviar e-mail para este cliente
  - `customer_ignore_sms` (optional): boolean - Nunca enviar SMS para este cliente
  - `customer_mobile_local_code` (optional): string - DDD do Celular
  - `customer_mobile_number` (optional): string - Celular
  - `customer_nickname` (optional): string - Apelido ou Nome Fantasia do Pagador
  - `customer_notes` (optional): string - Anotações do Pagador
  - `customer_contact_person` (optional): string - Contato
  - `interest_type` (optional): integer - Tipo de juros/mora:
* `0` Inexistente (Padrão)
* `1` Para porcentagem diária
* `2` Para valor diário
* `7` Para porcentagem mensal - Bancos suportados: Bradesco, BB, BTG, Caixa, Inter, Itaú, Safra, Santander, Sicoob e Sicredi
  - `days_for_interest` (optional): integer - Quantidade de dias após o vencimento que a mora começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `interest_percentage` (optional): number - Porcentagem de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se interest_type é igual a 1 ou 7. Até 2 casas decimais.
  - `interest_value` (optional): number - Valor diário de juros (R$). Obrigatório se interest_type é igual a 2. Até 2 casas decimais.
  - `interest_days_type` (optional): integer - Tipo de Dias para juros:
* `0` Corridos
* `1` Úteis
  - `fine_type` (optional): integer - Tipo de multa:
* `0` Inexistente (Padrão)
* `1` Para percentual do valor do boleto
* `2` Para valor fixo
  - `days_for_fine` (optional): integer - Quantidade de dias após o vencimento que a multa começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `fine_percentage` (optional): number - Porcentagem de Multa por Atraso Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se fine_type é igual a 1. Até 2 casas decimais.
  - `fine_value` (optional): number - Valor da multa (R$). Obrigatório se fine_type é igual a 2. Até 2 casas decimais.
  - `discount_type` (optional): integer - Tipo de desconto:
O tipo de desconto será o mesmo para todos os três descontos, caso existam. :
* `0` Inexistente (Padrão)
* `1` Para valor fixo
* `2` Para percentual do valor do boleto
  - `days_for_discount` (optional): integer - Dias para desconto. Obrigatório se discount_type é diferente de 0(zero)
  - `discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao desconto. Obrigatório se discount_type é igual a 2
  - `discount_value` (optional): number - Valor do desconto (R$). Obrigatório se discount_type é igual a 1.
  - `days_for_second_discount` (optional): integer - Dias para segundo desconto.
  - `second_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao segundo desconto.
  - `second_discount_value` (optional): number - Valor do segundo desconto (R$).
  - `days_for_third_discount` (optional): integer - Dias para terceiro desconto.
  - `third_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao terceiro desconto.
  - `third_discount_value` (optional): number - Valor do terceiro desconto (R$).
  - `tags` (optional): array - Tags associadas ao boleto
  - `tag_list` (optional): string - Tags associadas ao boleto
  - `charge_type` (optional): integer - Tipo de Cobrança:
* `1` Simples
* `2` Vinculada
* `3` Descontada
* `4` Vendor
  - `dispatch_type` (optional): integer - Tipo de Cobrança:
Quando o boleto precisa ser enviado pelo correio. É preciso contratar o serviço junto ao banco e pagará tarifa.
* `1` Cliente
* `2` Banco
  - `guarantor_name` (optional): string - Nome do Beneficiário final (Sacador/Avalista)
  - `guarantor_cnpj_cpf` (optional): string - CNPJ/CPF do Beneficiário final (Sacador/Avalista)
  - `guarantor_address_number` (optional): string - Número do Beneficiário final (Sacador/Avalista)
  - `guarantor_neighborhood` (optional): string - Bairro do Beneficiário final (Sacador/Avalista)
  - `guarantor_phone_number` (optional): string - Telefone (com DDD) do Beneficiário final (Sacador/Avalista)
  - `guarantor_city_name` (optional): string - Cidade(Nome deve estar correto e completo) do Beneficiário final (Sacador/Avalista)
  - `guarantor_state` (optional): string - Estado do Beneficiário final (Sacador/Avalista)
  - `guarantor_zipcode` (optional): string - CEP (formato 99999999) do Beneficiário final (Sacador/Avalista)
  - `guarantor_address` (optional): string - Endereço do Beneficiário final (Sacador/Avalista)
  - `guarantor_address_complement` (optional): string - Complemento do Beneficiário final (Sacador/Avalista)
  - `description` (optional): string - Descrição do produto ou serviço
  - `instructions` (optional): string - Instruções para o Caixa
  - `document_date` (optional): string - Data do Documento
  - `document_type` (optional): string - Tipo de Documento:

* `Código` | `Sigla` | Descrição
* `01` | `CH` | Cheque
* `02` | `DM` | Duplicata Mercantil (Padrão)
* `03` | `DMI` | Duplicata Mercantil p/ Indicação
* `04` | `DS` | Duplicata de Serviço
* `05` | `DSI` | Duplicata de Serviço p/ Indicação
* `06` | `DR` | Duplicata Rural
* `07` | `LC` | Letra de Câmbio
* `08` | `NCC` | Nota de Crédito Comercial
* `09` | `NCE` | Nota de Crédito a Exportação
* `10` | `NCI` | Nota de Crédito Industrial
* `11` | `NCR` | Nota de Crédito Rural
* `12` | `NP` | Nota Promissória
* `13` | `NPR` | Nota Promissória Rural
* `14` | `TM` | Triplicata Mercantil
* `15` | `TS` | Triplicata de Serviço
* `16` | `NS` | Nota de Seguro
* `17` | `RC` | Recibo
* `18` | `FAT` | Fatura
* `19` | `ND` | Nota de Débito
* `20` | `AP` | Apólice de Seguro
* `21` | `ME` | Mensalidade Escolar
* `22` | `PC` | Parcela de Consórcio
* `23` | `NF` | Nota Fiscal
* `24` | `DD` | Documento de Dívida
* `25` | `CPR` | Cédula de Produto Rural
* `26` | `CTR` | Contrato
* `27` | `CSG` | Cosseguros
* `28` | `EC` | Encargos Condominiais
* `29` | `CPS` | Conta de Prestação de Serviços
* `30` | `WR` | Warrant
* `31` | `DP` | Duplicata Prestação
* `32` | `CSR` | Cobrança Seriada
* `33` | `CAR` | Carnê
* `34` | `ARE` | Apólice Ramos Elementares
* `35` | `CC` | Cartão de Crédito
* `36` | `BDP` | Boleto de Proposta
* `37` | `NPD` | Nota Promissória Direta
* `38` | `DAE` | Dívida Ativa de Estado
* `39` | `DAM` | Divida Ativa de Município
* `40` | `DAU` | Dívida Ativa União
* `41` | `CCB` | Célula de Crédito Bancário
* `42` | `FI` | Financiamento
* `43` | `RD` | Rateio de Despesas
* `44` | `DRI` | Duplicata Rural p/ Indicação
* `45` | `ECI` | Encargos Condominiais p/ Indicação
* `99` | `Outros` | Outros
                
  - `document_type_label` (optional): string - Tipo de Documento (Sigla)
  - `document_number` (optional): string - Número do Documento, Tamanho depende do banco e formato do arquivo Remessa:
                                    * Banco |	Formato| Tamanho |
                                    * Abc |`Cnab240`|	15	|
                                    * Ailos |`Cnab240`|	15  |
                                    * Arbi |`Cnab240`|	15	|
                                    * Banese |`Cnab240`|	15	|
                                    * Banestes |`Cnab400`|	10	|
                                    * Banrisul |`Cnab240`|	15	|
                                    * Banrisul |`Cnab400`|	10	|
                                    * Bb |`Cnab240`|	15	|
                                    * Bb |`Cnab400`|	10	|
                                    * Bib |`Cnab240`|	15	|
                                    * Bnb |`Cnab400`|	10	|
                                    * Bnpparibas |`Cnab400`|	10	|
                                    * Bradesco |`Cnab240`|	15	|
                                    * Bradesco |`Cnab400`|	10	|
                                    * Brb |`Cnab400`|	10	|
                                    * Caixa |`Cnab240`|	11	|
                                    * Caixa |`Cnab400`|	10	|
                                    * Caruana |`Cnab400`|	10	|
                                    * Citibank |`Cnab400`|	10	|
                                    * Credisis |`Cnab240`|	15	|
                                    * Cresol |`Cnab240`|	10	|
                                    * Cresol |`Cnab400`|	10	|
                                    * Cresol Bradesco |`Cnab240`|	15	|
                                    * Cresol Bradesco |`Cnab400`|	10	|
                                    * Daycoval |`Cnab400`|	10	|
                                    * Itau |`Cnab240`|	10	|
                                    * Itau |`Cnab400`|	10	|
                                    * Mercantil |`Cnab240`|	10	|
                                    * Moneyplus |`Cnab240`|	10	|
                                    * Rendimento |`Cnab400`|	10	|
                                    * Safra |`Cnab400`|	102	|
                                    * Santander |`Cnab240`|	15	|
                                    * Santander |`Cnab400`|	10	|
                                    * Semear |`Cnab400`|	10	|
                                    * Sicoob |`Cnab240`|	15	|
                                    * Sicoob |`Cnab400`|	10	|
                                    * Sicredi |`Cnab240`|	15	|
                                    * Sicredi |`Cnab400`|	10	|
                                    * Sofisa |`Cnab240`|	15	|
                                    * Unicred |`Cnab240`|	15	|
                                    * Uniprime |`Cnab400`|	10	|
                                    * Uniprime99 |`Cnab400`|	10	|
                                    * Santander |`Cnab400`|	10 
  - `acceptance` (optional): string - Aceite:
* `N` Não (Padrão)
* `S` Sim
  - `our_number` (optional): string - Nosso Número. Se não informado, usará o Próximo Nosso Número da Carteira de Cobrança.
  - `processed_our_number` (optional): string - Nosso Número calculado com DV (formatado)
  - `processed_our_number_raw` (optional): string - Nosso Número calculado com DV (limpo)
  - `paid_amount` (optional): number - Valor pago
  - `paid_at` (optional): string - Data do pagamento
  - `days_for_revoke` (optional): integer - Dias corridos para Baixa/Devolução:

                Nulo/Branco: Obedece ao padrão do banco.
                0: Baixa/Devolução no mesmo dia do vencimento.
                1 ou mais: Baixa/Devolução após o vencimento(Vencimento + X dias corridos).
                
  - `credit_bureau` (optional): integer - Birô de Crédito/Órgão Negativador.

`0`: Serasa.
`1`: Quod.
`2`: SPC

Opções disponíveis para cada banco suportado:

* Banco do Brasil: Serasa e Quod.

  - `days_for_negativation` (optional): integer - Dias corridos para Negativação:

Disponível apenas para os seguintes bancos e formatos.

* Banco |	CNAB 240|	CNAB 400 |Webservice
* Bradesco |	Sim |	Sim	| Não
* Itaú | Não | Sim | Não
                
  - `days_for_sue_type` (optional): integer - Tipo de dias para protesto:
                * `0` Corridos
                * `1` Úteis
  - `days_for_sue` (optional): integer - Dias corridos para Protesto
  - `sue_code` (optional): string - Código de Protesto(CNAB 240). Consulte os possíveis valores <a href="https://developers.kobana.com.br/reference/bancos-suportados" target="_blank">para cada banco</a>.
  - `revoke_code` (optional): string - Código de Baixa(CNAB 240). Consulte os possíveis valores <a href="https://developers.kobana.com.br/reference/bancos-suportados" target="_blank">para cada banco</a>.
  - `first_instruction` (optional): string - Primeira Instrução(CNAB 400). Consulte os possíveis valores <a href="https://developers.kobana.com.br/reference/bancos-suportados" target="_blank">para cada banco</a>.
  - `second_instruction` (optional): string - Segunda Instrução(CNAB 400). Consulte os possíveis valores <a href="https://developers.kobana.com.br/reference/bancos-suportados" target="_blank">para cada banco</a>.
  - `watermark` (optional): boolean - Endereço
  - `payment_count` (optional): integer - Quantidade de pagamentos parciais aceitos para este boleto.
  - `divergent_payment_type` (optional): integer - Tipo de pagamento divergente:
Válido apenas para Itaú e Caixa.
* `1` Aceita qualquer valor divergente
* `2` Aceita pagamentos dentro de uma faixa de valores ou percentuais
* `3` Não aceita pagamento de valores divergentes
* `4` Aceita pagamentos de valores superiores a um valor ou percentual mínimo
  - `divergent_payment_value_type` (optional): integer - Tipo de valor a considerar para os limites de pagamentos:
Válido apenas para Itaú e Caixa.
* `1` Informa pagamentos divergentes por valores
* `2` Informa pagamentos divergentes por percentuais
  - `divergent_payment_maximum_value` (optional): number - Valor máximo para a faixa de pagamentos divergentes. 
  - `divergent_payment_minimum_value` (optional): number - Valor mínimo para a faixa de pagamentos divergentes. 
  - `divergent_payment_maximum_percentage` (optional): number - Percentual máximo para a faixa de pagamentos divergentes. 
  - `divergent_payment_minimum_percentage` (optional): number - Percentual mínimo para a faixa de pagamentos divergentes.
  - `divergent_payment_limit` (optional): integer - Quantidade de pagamentos permitida. Obrigatório se informados dados para pagamento divergente. Usado somente pela Caixa.
  - `prevent_registration` (optional): boolean - Impedir envio de registro ao banco:

Caso `true`, impede que o boleto seja registrado. Para ser usado nos casos em que o boleto já foi registrado fora da KOBANA mas deseja-se incluí-lo no sistema.
  - `control_number` (optional): string - Número de controle:

Pode conter qualquer informação de interesse da Empresa. A informação contida neste campo sempre retornará com o respectivo título no arquivo-retorno.
  - `ignore_email` (optional): boolean - Não enviar este boleto por email
  - `ignore_sms` (optional): boolean - Nunca enviar este boleto por SMS
  - `ignore_whatsapp` (optional): boolean - Nunca enviar este boleto por WhatsApp
  - `addons` (optional): string - Endereço
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `meta` (optional): object - Hash com chave e valor no formato JSON.
  - `notes` (optional): string - Anotações
  - `custom_attachment_name` (optional): string - Nome para ser usado nos arquivos de boleto enviados para o cliente em notificações. Aceita uso de variáveis. Caso seja deixado vazio, o padrão é a palavra “boleto” acompanhada do ID.
  - `split_payment` (optional): boolean - Split de Pagamento.
Válido apenas para ABC Brasil, Bradesco e Itaú.
Caso true, o rateio do boleto será registrado.
Informar as contas para rateio em `split_accounts`.
Para o Itaú, é necessário informar o tipo de split de pagamento em `split_payment_type`
  - `split_payment_type` (optional): integer - Tipo de Split de Pagamento:
Válido apenas para Itau. Usado apenas com Split de Pagamento true.
* `1` Rateio de crédito por percentual  (%) – Valor nominal do título
* `2` Rateio de crédito em valor (R$) – Valor nominal do título
* `3` Rateio de crédito por percentual (%) – Valor líquido recebido
* `4` Rateio de crédito em valor (R$) – Valor líquido recebido, rateado proporcionalmente
  - `split_accounts` (optional): array - Contas para Split de pagamento.
  - `payment_place` (optional): string - Local de Pagamento
  - `installment_id` (optional): integer - ID do Carnê
  - `installment_number` (optional): integer - Número da parcela do carnê
  - `installment_total` (optional): integer - Total de parcelas do carnê
  - `customer_subscription_id` (optional): integer - ID da Assinatura
  - `beneficiary_name` (optional): string - Nome do Beneficiário
  - `beneficiary_cnpj_cpf` (optional): string - CNPJ/CPF do Beneficiário
  - `beneficiary_address` (optional): string - Endereço do Beneficiário
  - `beneficiary_assignor_code` (optional): string - Agência/Código do Beneficiário
  - `bank_contract_slug` (optional): string - Slug da Carteira
  - `agency_number` (optional): string - Agência
  - `agency_digit` (optional): string - Dígito da Agência
  - `account_number` (optional): string - Conta
  - `account_digit` (optional): string - Dígito da Conta
  - `extra1` (optional): string - Campo extra 1
  - `extra1_digit` (optional): string - Digito do Campo extra 1
  - `extra2` (optional): string - Campo extra 2
  - `extra2_digit` (optional): string - Dígito do Campo extra 2
  - `created_via_api` (optional): boolean - Indica se o boleto foi criado por API
  - `created_at` (optional): string - Data e hora de criação do boleto
  - `updated_at` (optional): string - Data e hora da última atualização do boleto
  - `registration_status` (optional): string - Situação do registro no banco:
* `pending` Pendente
* `skipped` Ignorado
* `requested` Requisitado
* `confirmed` Confirmado
* `rejected` Rejeitado (ainda será tentado novamente)
* `failed` Falha (não será tentado novamente)
  - `registered_at` (optional): string - Data e hora do registro (quando confirmado)
  - `register_type` (optional): integer - Tipo de Registro:
* `1` API
* `2` Banco
  - `cancel_type` (optional): integer - Tipo de Cancelamento:
 * `1` Cliente
 * `2` Banco
  - `cancellation_reason` (optional): integer - Motivo de Cancelamento:
* `1` Outro
* `2` Fraude
* `3` Óbito
* `4` Erro operacional
* `5` Quitação paga
  - `line` (optional): string - Linha Digitável
  - `barcode` (optional): string - Código de Barras
  - `shorten_url` (optional): string - URL para visualização do boleto
  - `url` (optional): string - URL para visualização do boleto
  - `carne_url` (optional): string - URL para visualização do carnê(Quando for parcela)
  - `formats` (optional): object - URLs com formatos disponíveis. Ex.: PDF, Imagem, PIX e etc
  - `pix_enabled` (optional): boolean - Indica se o boleto é híbrido e tem QRcode PIX
  - `pix_qrcode` (optional): string - QRcode PIX do boleto híbrido
  - `pix_txid` (optional): string - Campo txid do PIX. Gerado automaticamente por default caso não fornecido.
  - `prevent_pix` (optional): boolean - Caso verdadeiro, impede a criação do Pix para carteiras com Pix habilitado. Não é considerado se a carteira não tem Pix habilitado.
  - `status` (optional): string - Situação do boleto:
* `generating` Gerando
* `draft` Rascunho
* `generation_failed` Falha ao gerar
* `opened` Aberto
* `canceled` Cancelado
* `paid` Pago
* `overdue` Vencido
* `validation_failed` Inválido
* `chargeback` Estornado
  - `recipient_account` (optional): string - Conta Destinatária + Dígito
  - `reduction_type` (optional): integer - Tipo de abatimento:

`1`: Valor.
`2`: Porcentagem.
`3`: Não se aplica

  - `reduction_amount` (optional): number - Valor do abatimento. Obrigatório se reduction_type é igual a 1.
  - `reduction_percentage` (optional): number - Porcentagem de Abatimento. Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se reduction_type é igual a 2. Até 2 casas decimais.
  - `instructions_mode` (optional): integer - Cálculo de datas na Instrução para o Caixa:
* `0` Não preencher as instruções para o caixa
* `1` Calcular data pela via de registro (API/CNAB)
* `2` Usar a data configurada no boleto
  - `import_id` (optional): integer - ID da Importação
  - `virtual_bank_billet_id` (optional): integer - ID do Boleto gerado por membro de contrato BackOffice. (BackOffice precisa estar habilitado).
  - `financial_provider_external_id` (optional): string - ID na instituição financeira
  - `after_create` (optional): array - Execução automática de comandos após o boleto ser criado.
                 Valores permitidos:
                * `sync`: Sincronização com o provedor financeiro.
- Example:
```
{
  "id": 1,
  "bank_billet_account_id": 1,
  "bank_billet_layout_id": 1,
  "amount": 10.99,
  "expire_at": "2024-01-15",
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_state": "SP",
  "customer_city_name": "São Paulo",
  "customer_zipcode": "01310100",
  "customer_address": "Rua F, alamenda G",
  "customer_address_complement": "string",
  "customer_address_number": "string",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_neighborhood": "Centro",
  "customer_phone_number": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_nickname": "string",
  "customer_notes": "string",
  "customer_contact_person": "string",
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "interest_days_type": 1,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "charge_type": 1,
  "dispatch_type": 1,
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "description": "string",
  "instructions": "string",
  "document_date": "2024-01-15",
  "document_type": "01",
  "document_type_label": "string",
  "document_number": "string",
  "acceptance": "N",
  "our_number": "string",
  "processed_our_number": "string",
  "processed_our_number_raw": "string",
  "paid_amount": 10.5,
  "paid_at": "2024-01-15",
  "days_for_revoke": 1,
  "credit_bureau": 1,
  "days_for_negativation": 1,
  "days_for_sue_type": 1,
  "days_for_sue": 1,
  "sue_code": "string",
  "revoke_code": "string",
  "first_instruction": "string",
  "second_instruction": "string",
  "watermark": true,
  "payment_count": 1,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "prevent_registration": true,
  "control_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "addons": "string",
  "custom_data": {},
  "meta": {},
  "notes": "string",
  "custom_attachment_name": "string",
  "split_payment": true,
  "split_payment_type": 1,
  "split_accounts": [
    {
      "bank_number": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "account_number": "string",
      "account_digit": "string",
      "cnpj_cpf": "string",
      "name": "string",
      "amount": "string",
      "floating": 1
    },
    {
      "bank_number": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "account_number": "string",
      "account_digit": "string",
      "cnpj_cpf": "string",
      "name": "string",
      "amount": "string",
      "floating": 1
    }
  ],
  "payment_place": "string",
  "installment_id": 1,
  "installment_number": 1,
  "installment_total": 1,
  "customer_subscription_id": 1,
  "beneficiary_name": "string",
  "beneficiary_cnpj_cpf": "string",
  "beneficiary_address": "string",
  "beneficiary_assignor_code": "string",
  "bank_contract_slug": "string",
  "agency_number": "string",
  "agency_digit": "string",
  "account_number": "string",
  "account_digit": "string",
  "extra1": "string",
  "extra1_digit": "string",
  "extra2": "string",
  "extra2_digit": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "registration_status": "pending",
  "registered_at": "2024-01-15T10:30:00Z",
  "register_type": 1,
  "cancel_type": 1,
  "cancellation_reason": 1,
  "line": "string",
  "barcode": "string",
  "shorten_url": "string",
  "url": "string",
  "carne_url": "string",
  "formats": {},
  "pix_enabled": true,
  "pix_qrcode": "string",
  "pix_txid": "string",
  "prevent_pix": true,
  "status": "generating",
  "recipient_account": "string",
  "reduction_type": 1,
  "reduction_amount": 30.25,
  "reduction_percentage": 10.5,
  "instructions_mode": 1,
  "import_id": 1,
  "virtual_bank_billet_id": 1,
  "financial_provider_external_id": "string",
  "after_create": [
    "string",
    "string"
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Boleto criado

```
{
  "id": 1,
  "bank_billet_account_id": 1,
  "bank_billet_layout_id": 1,
  "amount": 10.99,
  "expire_at": "2024-01-15",
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_state": "SP",
  "customer_city_name": "São Paulo",
  "customer_zipcode": "01310100",
  "customer_address": "Rua F, alamenda G",
  "customer_address_complement": "string",
  "customer_address_number": "string",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_neighborhood": "Centro",
  "customer_phone_number": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_nickname": "string",
  "customer_notes": "string",
  "customer_contact_person": "string",
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "interest_days_type": 1,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "charge_type": 1,
  "dispatch_type": 1,
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "description": "string",
  "instructions": "string",
  "document_date": "2024-01-15",
  "document_type": "01",
  "document_type_label": "string",
  "document_number": "string",
  "acceptance": "N",
  "our_number": "string",
  "processed_our_number": "string",
  "processed_our_number_raw": "string",
  "paid_amount": 10.5,
  "paid_at": "2024-01-15",
  "days_for_revoke": 1,
  "credit_bureau": 1,
  "days_for_negativation": 1,
  "days_for_sue_type": 1,
  "days_for_sue": 1,
  "sue_code": "string",
  "revoke_code": "string",
  "first_instruction": "string",
  "second_instruction": "string",
  "watermark": true,
  "payment_count": 1,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "prevent_registration": true,
  "control_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "addons": "string",
  "custom_data": {},
  "meta": {},
  "notes": "string",
  "custom_attachment_name": "string",
  "split_payment": true,
  "split_payment_type": 1,
  "split_accounts": [
    {
      "bank_number": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "account_number": "string",
      "account_digit": "string",
      "cnpj_cpf": "string",
      "name": "string",
      "amount": "string",
      "floating": 1
    },
    {
      "bank_number": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "account_number": "string",
      "account_digit": "string",
      "cnpj_cpf": "string",
      "name": "string",
      "amount": "string",
      "floating": 1
    }
  ],
  "payment_place": "string",
  "installment_id": 1,
  "installment_number": 1,
  "installment_total": 1,
  "customer_subscription_id": 1,
  "beneficiary_name": "string",
  "beneficiary_cnpj_cpf": "string",
  "beneficiary_address": "string",
  "beneficiary_assignor_code": "string",
  "bank_contract_slug": "string",
  "agency_number": "string",
  "agency_digit": "string",
  "account_number": "string",
  "account_digit": "string",
  "extra1": "string",
  "extra1_digit": "string",
  "extra2": "string",
  "extra2_digit": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "registration_status": "pending",
  "registered_at": "2024-01-15T10:30:00Z",
  "register_type": 1,
  "cancel_type": 1,
  "cancellation_reason": 1,
  "line": "string",
  "barcode": "string",
  "shorten_url": "string",
  "url": "string",
  "carne_url": "string",
  "formats": {},
  "pix_enabled": true,
  "pix_qrcode": "string",
  "pix_txid": "string",
  "prevent_pix": true,
  "status": "generating",
  "recipient_account": "string",
  "reduction_type": 1,
  "reduction_amount": 30.25,
  "reduction_percentage": 10.5,
  "instructions_mode": 1,
  "import_id": 1,
  "virtual_bank_billet_id": 1,
  "financial_provider_external_id": "string",
  "after_create": [
    "string",
    "string"
  ]
}
```


#### POST /v1/v1/bank_billets/cancel_all
**Description**: Cancelar Boletos em Lote

**Request Body** (application/json):

- Type: `v1_bank_billet_cancel_all_object`
- Properties:
  - `status` (optional): string - Situação do boleto:
* `generating` Gerando
* `draft` Rascunho
* `generation_failed` Falha ao gerar
* `opened` Aberto
* `canceled` Cancelado
* `paid` Pago
* `overdue` Vencido
* `validation_failed` Inválido
* `chargeback` Estornado
  - `expire_from` (optional): string - A partir de Data de vencimento
  - `expire_to` (optional): string - Até a Data de vencimento
  - `cnpj_cpf` (optional): string - CNPJ ou CPF do Pagador
  - `bank_billet_ids` (optional): array - IDs de boletos a serem cancelados
- Example:
```
{
  "status": "generating",
  "expire_from": "2024-01-15",
  "expire_to": "2024-01-15",
  "cnpj_cpf": "16.974.923/0001-84",
  "bank_billet_ids": [
    1,
    1
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Solicitação realizada com sucesso

#### GET /v1/v1/bank_billets/{id}
**Description**: Visualizar o Boleto

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Boleto

**Response**:

Boleto encontrado

```
{
  "id": 1,
  "bank_billet_account_id": 1,
  "bank_billet_layout_id": 1,
  "amount": 10.99,
  "expire_at": "2024-01-15",
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_state": "SP",
  "customer_city_name": "São Paulo",
  "customer_zipcode": "01310100",
  "customer_address": "Rua F, alamenda G",
  "customer_address_complement": "string",
  "customer_address_number": "string",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_neighborhood": "Centro",
  "customer_phone_number": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_nickname": "string",
  "customer_notes": "string",
  "customer_contact_person": "string",
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "interest_days_type": 1,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "charge_type": 1,
  "dispatch_type": 1,
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "description": "string",
  "instructions": "string",
  "document_date": "2024-01-15",
  "document_type": "01",
  "document_type_label": "string",
  "document_number": "string",
  "acceptance": "N",
  "our_number": "string",
  "processed_our_number": "string",
  "processed_our_number_raw": "string",
  "paid_amount": 10.5,
  "paid_at": "2024-01-15",
  "days_for_revoke": 1,
  "credit_bureau": 1,
  "days_for_negativation": 1,
  "days_for_sue_type": 1,
  "days_for_sue": 1,
  "sue_code": "string",
  "revoke_code": "string",
  "first_instruction": "string",
  "second_instruction": "string",
  "watermark": true,
  "payment_count": 1,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "prevent_registration": true,
  "control_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "addons": "string",
  "custom_data": {},
  "meta": {},
  "notes": "string",
  "custom_attachment_name": "string",
  "split_payment": true,
  "split_payment_type": 1,
  "split_accounts": [
    {
      "bank_number": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "account_number": "string",
      "account_digit": "string",
      "cnpj_cpf": "string",
      "name": "string",
      "amount": "string",
      "floating": 1
    },
    {
      "bank_number": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "account_number": "string",
      "account_digit": "string",
      "cnpj_cpf": "string",
      "name": "string",
      "amount": "string",
      "floating": 1
    }
  ],
  "payment_place": "string",
  "installment_id": 1,
  "installment_number": 1,
  "installment_total": 1,
  "customer_subscription_id": 1,
  "beneficiary_name": "string",
  "beneficiary_cnpj_cpf": "string",
  "beneficiary_address": "string",
  "beneficiary_assignor_code": "string",
  "bank_contract_slug": "string",
  "agency_number": "string",
  "agency_digit": "string",
  "account_number": "string",
  "account_digit": "string",
  "extra1": "string",
  "extra1_digit": "string",
  "extra2": "string",
  "extra2_digit": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "registration_status": "pending",
  "registered_at": "2024-01-15T10:30:00Z",
  "register_type": 1,
  "cancel_type": 1,
  "cancellation_reason": 1,
  "line": "string",
  "barcode": "string",
  "shorten_url": "string",
  "url": "string",
  "carne_url": "string",
  "formats": {},
  "pix_enabled": true,
  "pix_qrcode": "string",
  "pix_txid": "string",
  "prevent_pix": true,
  "status": "generating",
  "recipient_account": "string",
  "reduction_type": 1,
  "reduction_amount": 30.25,
  "reduction_percentage": 10.5,
  "instructions_mode": 1,
  "import_id": 1,
  "virtual_bank_billet_id": 1,
  "financial_provider_external_id": "string",
  "after_create": [
    "string",
    "string"
  ]
}
```


#### PUT /v1/v1/bank_billets/{id}
**Description**: Atualizar o Boleto

**Request Body** (application/json):

- Type: `v1_bank_billet_update_object`
- Properties:
  - `amount` (optional): number - Valor do Boleto
  - `expire_at` (optional): string - Data de vencimento
  - `tags` (optional): array - Tags associadas ao boleto
  - `notes` (optional): string - Anotações
  - `days_for_sue_type` (optional): integer - Tipo de dias para protesto:
                * `0` Corridos
                * `1` Úteis
  - `days_for_sue` (optional): integer - Dias corridos para Protesto
  - `days_for_revoke` (optional): integer - Dias corridos para Baixa
Bancos Suportados: Itaú
  - `sue_code` (optional): string - Código de Protesto(Somente por CNAB 240). Consulte os possíveis valores <a href="https://developers.kobana.com.br/reference/bancos-suportados" target="_blank">para cada banco</a>.
  - `instructions` (optional): string - Instruções para o Caixa
  - `description` (optional): string - Descrição do produto ou serviço
  - `interest_type` (optional): integer - Tipo de juros/mora:
* `0` Inexistente (Padrão)
* `1` Para porcentagem diária
* `2` Para valor diário
* `7` Para porcentagem mensal - Bancos suportados: Bradesco, BB, BTG, Caixa, Inter, Itaú, Safra, Santander, Sicoob e Sicredi
  - `days_for_interest` (optional): integer - Quantidade de dias após o vencimento que a mora começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `interest_percentage` (optional): number - Porcentagem de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se interest_type é igual a 1 ou 7. Até 2 casas decimais.
  - `interest_value` (optional): number - Valor diário de juros (R$). Obrigatório se interest_type é igual a 2. Até 2 casas decimais.
  - `discount_type` (optional): integer - Tipo de desconto:
                O tipo de desconto será o mesmo para todos os três descontos, caso existam. :
                * `0` Inexistente (Padrão)
                * `1` Para valor fixo
                * `2` Para percentual do valor do boleto
  - `days_for_discount` (optional): integer - Dias para desconto. Obrigatório se discount_type é diferente de 0(zero)
  - `discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao desconto. Obrigatório se discount_type é igual a 2
  - `discount_value` (optional): number - Valor do desconto (R$). Obrigatório se discount_type é igual a 1.
  - `days_for_second_discount` (optional): integer - Dias para segundo desconto.
  - `second_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao segundo desconto.
  - `second_discount_value` (optional): number - Valor do segundo desconto (R$).
  - `days_for_third_discount` (optional): integer - Dias para terceiro desconto.
  - `third_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao terceiro desconto.
  - `third_discount_value` (optional): number - Valor do terceiro desconto (R$).
  - `reduction_type` (optional): integer - Tipo de abatimento:

`1`: Valor.
`2`: Porcentagem.
`3`: Não se aplica

  - `reduction_amount` (optional): number - Valor do abatimento. Obrigatório se reduction_type é igual a 1.
  - `reduction_percentage` (optional): number - Porcentagem de Abatimento. Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se reduction_type é igual a 2. Até 2 casas decimais.
  - `divergent_payment_type` (optional): integer - Tipo de pagamento divergente:
* `1` Aceita qualquer valor divergente
* `2` Aceita pagamentos dentro de uma faixa de valores ou percentuais
* `3` Não aceita pagamento de valores divergentes
* `4` Aceita pagamentos de valores superiores a um valor ou percentual mínimo
Bancos suportados: Itaú
  - `divergent_payment_value_type` (optional): integer - Tipo de valor a considerar para os limites de pagamentos:
Válido apenas para Itaú e Caixa.
* `1` Informa pagamentos divergentes por valores
* `2` Informa pagamentos divergentes por percentuais
Bancos suportados: Itaú
  - `divergent_payment_maximum_value` (optional): number - Valor máximo para a faixa de pagamentos divergentes.
Bancos suportados: Itaú
  - `divergent_payment_minimum_value` (optional): number - Valor mínimo para a faixa de pagamentos divergentes.
Bancos suportados: Itaú
  - `divergent_payment_maximum_percentage` (optional): number - Percentual máximo para a faixa de pagamentos divergentes.
Bancos suportados: Itaú
  - `divergent_payment_minimum_percentage` (optional): number - Percentual mínimo para a faixa de pagamentos divergentes.
Bancos suportados: Itaú
  - `fine_type` (optional): integer - Tipo de multa:
* `0` Inexistente (Padrão)
* `1` Para percentual do valor do boleto
* `2` Para valor fixo
  - `days_for_fine` (optional): integer - Quantidade de dias após o vencimento que a multa começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `credit_bureau` (optional): integer - Birô de Crédito/Órgão Negativador.

`0`: Serasa.
`1`: Quod.
`2`: SPC

Opções disponíveis para cada banco suportado:

* Banco do Brasil: Serasa e Quod.

  - `days_for_negativation` (optional): integer - Quantidade de dias após o vencimento para negativar o título.
  - `fine_percentage` (optional): number - Porcentagem de Multa por Atraso Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se fine_type é igual a 1. Até 2 casas decimais.
  - `fine_value` (optional): number - Valor da multa (R$). Obrigatório se fine_type é igual a 2. Até 2 casas decimais.
  - `document_number` (optional): string - Número do Documento, Tamanho depende do banco, formato e forma de envio (API / EDI):
                                    * Itau |`Cnab240`|	10	|
                                    * Itau |`Cnab400`|	10	|
  - `customer_person_name` (optional): string - Nome do cliente. Bancos Suportados: Santander
  - `customer_cnpj_cpf` (optional): string - CPF/CNPJ do cliente. Bancos Suportados: Santander
  - `customer_state` (optional): string - Estado. Bancos Suportados: Santander
  - `customer_city_name` (optional): string - Cidade(Nome deve estar correto e completo). Bancos Suportados: Santander
  - `customer_zipcode` (optional): string - CEP (formato 99999999). Bancos Suportados: Santander
  - `customer_address` (optional): string - Endereço. Bancos Suportados: Santander
  - `customer_neighborhood` (optional): string - Bairro. Bancos Suportados: Santander
  - `guarantor_name` (optional): string - Nome do Beneficiário final (Sacador/Avalista). Bancos Suportados: Santander
  - `guarantor_cnpj_cpf` (optional): string - CNPJ/CPF do Beneficiário final (Sacador/Avalista). Bancos Suportados: Santander
  - `document_type` (optional): string - Tipo de Documento:
                  * `Código` | `Sigla` | Descrição
                  * `01` | `CH` | Cheque
                  * `02` | `DM` | Duplicata Mercantil (Padrão)
                  * `03` | `DMI` | Duplicata Mercantil p/ Indicação
                  * `04` | `DS` | Duplicata de Serviço
                  * `05` | `DSI` | Duplicata de Serviço p/ Indicação
                  * `06` | `DR` | Duplicata Rural
                  * `07` | `LC` | Letra de Câmbio
                  * `08` | `NCC` | Nota de Crédito Comercial
                  * `09` | `NCE` | Nota de Crédito a Exportação
                  * `10` | `NCI` | Nota de Crédito Industrial
                  * `11` | `NCR` | Nota de Crédito Rural
                  * `12` | `NP` | Nota Promissória
                  * `13` | `NPR` | Nota Promissória Rural
                  * `14` | `TM` | Triplicata Mercantil
                  * `15` | `TS` | Triplicata de Serviço
                  * `16` | `NS` | Nota de Seguro
                  * `17` | `RC` | Recibo
                  * `18` | `FAT` | Fatura
                  * `19` | `ND` | Nota de Débito
                  * `20` | `AP` | Apólice de Seguro
                  * `21` | `ME` | Mensalidade Escolar
                  * `22` | `PC` | Parcela de Consórcio
                  * `23` | `NF` | Nota Fiscal
                  * `24` | `DD` | Documento de Dívida
                  * `25` | `CPR` | Cédula de Produto Rural
                  * `26` | `CTR` | Contrato
                  * `27` | `CSG` | Cosseguros
                  * `28` | `EC` | Encargos Condominiais
                  * `29` | `CPS` | Conta de Prestação de Serviços
                  * `30` | `WR` | Warrant
                  * `31` | `DP` | Duplicata Prestação
                  * `32` | `CSR` | Cobrança Seriada
                  * `33` | `CAR` | Carnê
                  * `34` | `ARE` | Apólice Ramos Elementares
                  * `35` | `CC` | Cartão de Crédito
                  * `36` | `BDP` | Boleto de Proposta
                  * `37` | `NPD` | Nota Promissória Direta
                  * `38` | `DAE` | Dívida Ativa de Estado
                  * `39` | `DAM` | Divida Ativa de Município
                  * `40` | `DAU` | Dívida Ativa União
                  * `41` | `CCB` | Célula de Crédito Bancário
                  * `42` | `FI` | Financiamento
                  * `43` | `RD` | Rateio de Despesas
                  * `44` | `DRI` | Duplicata Rural p/ Indicação
                  * `45` | `ECI` | Encargos Condominiais p/ Indicação
                  * `99` | `Outros` | Outros

                  Bancos Suportados: Santander
  - `control_number` (optional): string - Número de controle:
                Pode conter qualquer informação de interesse da Empresa. A informação contida neste campo sempre retornará com o respectivo título no arquivo-retorno. Bancos Suportados: Santander
  - `payment_count` (optional): integer - Quantidade de pagamentos parciais aceitos para este boleto. Bancos Suportados: Santander
  - `issued_at` (optional): string - Data de emissão. Bancos Suportados: Santander
  - `bolepix_key` (optional): string - Chave do bolepix. Bancos Suportados: Santander
  - `pix_txid` (optional): string - TxId do pix. Bancos Suportados: Santander
- Example:
```
{
  "amount": 10.99,
  "expire_at": "2024-01-15",
  "tags": [
    "string",
    "string"
  ],
  "notes": "string",
  "days_for_sue_type": 1,
  "days_for_sue": 1,
  "days_for_revoke": 1,
  "sue_code": "string",
  "instructions": "string",
  "description": "string",
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "reduction_type": 1,
  "reduction_amount": 30.25,
  "reduction_percentage": 10.5,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "fine_type": 1,
  "days_for_fine": 1,
  "credit_bureau": 1,
  "days_for_negativation": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "document_number": "string",
  "customer_person_name": "João Silva",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_state": "SP",
  "customer_city_name": "São Paulo",
  "customer_zipcode": "01310100",
  "customer_address": "Rua F, alamenda G",
  "customer_neighborhood": "Centro",
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "document_type": "01",
  "control_number": "string",
  "payment_count": 1,
  "issued_at": "2024-01-15",
  "bolepix_key": "string",
  "pix_txid": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Boleto

**Response**:

Boleto atualizado

#### PUT /v1/v1/bank_billets/{id}/cancel
**Description**: Cancelar o Boleto

**Request Body** (application/json):

- Type: `v1_bank_billet_cancel_object`
- Properties:
  - `cancellation_reason` (optional): integer - Motivo do cancelamento:
* `1` Outro
* `2` Fraude
* `3` Óbito
* `4` Erro operacional
* `5` Quitação paga
- Example:
```
{
  "cancellation_reason": 1
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Boleto

**Response**:

Boleto cancelado

#### POST /v1/v1/bank_billets/{id}/duplicate
**Description**: Duplicar Boleto

**Request Body** (application/json):

- Type: `v1_bank_billet_duplicate_object`
- Properties:
  - `expire_at_in_days` (optional): integer - Nº de dias para vencimento a partir da data de hoje. Default: 7
  - `amount` (optional): number - Valor do novo Boleto
  - `cancel` (optional): boolean - Cancelar o boleto que está sendo duplicado. Default: true
  - `with_fines` (optional): boolean - Atualizar o valor do novo boleto com juros e multa. Default: false
  - `bank_billet_account_id` (optional): integer - ID da Carteira de Cobrança. Se não informado, usará a carteira padrão.
  - `bank_billet_layout_id` (optional): integer - ID do Modelo de Boleto
  - `customer_id` (optional): integer - ID do Cliente. Quando esse ID é passado, os campos `customer_person_name`, `customer_cnpj_cpf`, `customer_zipcode`, `customer_address`, `customer_city_name`, `customer_state` e `customer_neighborhood` não são obrigatórios.
  - `customer_person_name` (optional): string - Nome do cliente
  - `customer_cnpj_cpf` (optional): string - CPF/CNPJ do cliente
  - `customer_state` (optional): string - Estado
  - `customer_city_name` (optional): string - Cidade(Nome deve estar correto e completo)
  - `customer_zipcode` (optional): string - CEP (formato 99999999)
  - `customer_address` (optional): string - Endereço
  - `customer_address_complement` (optional): string - Complemento
  - `customer_address_number` (optional): string - Número
  - `customer_email` (optional): string - E-mail do Pagador
  - `customer_email_cc` (optional): string - E-mail alternativo do Pagador
  - `customer_neighborhood` (optional): string - Bairro
  - `customer_phone_number` (optional): string - Telefone (com DDD)
  - `customer_ignore_email` (optional): boolean - Nunca enviar e-mail para este cliente
  - `customer_ignore_sms` (optional): boolean - Nunca enviar SMS para este cliente
  - `customer_mobile_local_code` (optional): string - DDD do Celular
  - `customer_mobile_number` (optional): string - Celular
  - `customer_nickname` (optional): string - Apelido ou Nome Fantasia do Pagador
  - `customer_notes` (optional): string - Anotações do Pagador
  - `customer_contact_person` (optional): string - Contato
  - `interest_type` (optional): integer - Tipo de juros/mora:
* `0` Inexistente (Padrão)
* `1` Para porcentagem diária
* `2` Para valor diário
  - `days_for_interest` (optional): integer - Quantidade de dias após o vencimento que a mora começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `interest_percentage` (optional): number - Porcentagem diária de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se interest_type é igual a 1.
  - `interest_value` (optional): number - Valor diário de juros (R$). Obrigatório se interest_type é igual a 2.
  - `interest_days_type` (optional): integer - Tipo de Dias para juros:
* `0` Corridos
* `1` Úteis
  - `fine_type` (optional): integer - Tipo de multa:
* `0` Inexistente (Padrão)
* `1` Para percentual do valor do boleto
* `2` Para valor fixo
  - `days_for_fine` (optional): integer - Quantidade de dias após o vencimento que a multa começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `fine_percentage` (optional): number - Porcentagem de Multa por Atraso Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se fine_type é igual a 1
  - `fine_value` (optional): number - Valor da multa (R$). Obrigatório se fine_type é igual a 2.
  - `discount_type` (optional): integer - Tipo de desconto:
O tipo de desconto será o mesmo para todos os três descontos, caso existam. :
* `0` Inexistente (Padrão)
* `1` Para valor fixo
* `2` Para percentual do valor do boleto
  - `days_for_discount` (optional): integer - Dias para desconto. Obrigatório se discount_type é diferente de 0(zero)
  - `discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao desconto. Obrigatório se discount_type é igual a 2
  - `discount_value` (optional): number - Valor do desconto (R$). Obrigatório se discount_type é igual a 1.
  - `days_for_second_discount` (optional): integer - Dias para segundo desconto.
  - `second_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao segundo desconto.
  - `second_discount_value` (optional): number - Valor do segundo desconto (R$).
  - `days_for_third_discount` (optional): integer - Dias para terceiro desconto.
  - `third_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao terceiro desconto.
  - `third_discount_value` (optional): number - Valor do terceiro desconto (R$).
  - `tags` (optional): array - Tags associadas ao boleto
  - `tag_list` (optional): string - Tags associadas ao boleto
  - `charge_type` (optional): integer - Tipo de Cobrança:
* `1` Simples
* `2` Vinculada
* `3` Descontada
* `4` Vendor
  - `dispatch_type` (optional): integer - Tipo de Cobrança:
Quando o boleto precisa ser enviado pelo correio. É preciso contratar o serviço junto ao banco e pagará tarifa.
* `1` Cliente
* `2` Banco
  - `guarantor_name` (optional): string - Nome do Beneficiário final (Sacador/Avalista)
  - `guarantor_cnpj_cpf` (optional): string - CNPJ/CPF do Beneficiário final (Sacador/Avalista)
  - `guarantor_address_number` (optional): string - Número do Beneficiário final (Sacador/Avalista)
  - `guarantor_neighborhood` (optional): string - Bairro do Beneficiário final (Sacador/Avalista)
  - `guarantor_phone_number` (optional): string - Telefone (com DDD) do Beneficiário final (Sacador/Avalista)
  - `guarantor_city_name` (optional): string - Cidade(Nome deve estar correto e completo) do Beneficiário final (Sacador/Avalista)
  - `guarantor_state` (optional): string - Estado do Beneficiário final (Sacador/Avalista)
  - `guarantor_zipcode` (optional): string - CEP (formato 99999999) do Beneficiário final (Sacador/Avalista)
  - `guarantor_address` (optional): string - Endereço do Beneficiário final (Sacador/Avalista)
  - `guarantor_address_complement` (optional): string - Complemento do Beneficiário final (Sacador/Avalista)
  - `description` (optional): string - Descrição do produto ou serviço
  - `instructions` (optional): string - Instruções para o Caixa
  - `document_date` (optional): string - Data do Documento
  - `document_type` (optional): string - Tipo de Documento:

* `Código` | `Sigla` | Descrição
* `01` | `CH` | Cheque
* `02` | `DM` | Duplicata Mercantil (Padrão)
* `03` | `DMI` | Duplicata Mercantil p/ Indicação
* `04` | `DS` | Duplicata de Serviço
* `05` | `DSI` | Duplicata de Serviço p/ Indicação
* `06` | `DR` | Duplicata Rural
* `07` | `LC` | Letra de Câmbio
* `08` | `NCC` | Nota de Crédito Comercial
* `09` | `NCE` | Nota de Crédito a Exportação
* `10` | `NCI` | Nota de Crédito Industrial
* `11` | `NCR` | Nota de Crédito Rural
* `12` | `NP` | Nota Promissória
* `13` | `NPR` | Nota Promissória Rural
* `14` | `TM` | Triplicata Mercantil
* `15` | `TS` | Triplicata de Serviço
* `16` | `NS` | Nota de Seguro
* `17` | `RC` | Recibo
* `18` | `FAT` | Fatura
* `19` | `ND` | Nota de Débito
* `20` | `AP` | Apólice de Seguro
* `21` | `ME` | Mensalidade Escolar
* `22` | `PC` | Parcela de Consórcio
* `23` | `NF` | Nota Fiscal
* `24` | `DD` | Documento de Dívida
* `25` | `CPR` | Cédula de Produto Rural
* `26` | `CTR` | Contrato
* `27` | `CSG` | Cosseguros
* `28` | `EC` | Encargos Condominiais
* `29` | `CPS` | Conta de Prestação de Serviços
* `30` | `WR` | Warrant
* `31` | `DP` | Duplicata Prestação
* `32` | `CSR` | Cobrança Seriada
* `33` | `CAR` | Carnê
* `34` | `ARE` | Apólice Ramos Elementares
* `35` | `CC` | Cartão de Crédito
* `36` | `BDP` | Boleto de Proposta
* `37` | `NPD` | Nota Promissória Direta
* `38` | `DAE` | Dívida Ativa de Estado
* `39` | `DAM` | Divida Ativa de Município
* `40` | `DAU` | Dívida Ativa União
* `41` | `CCB` | Célula de Crédito Bancário
* `42` | `FI` | Financiamento
* `43` | `RD` | Rateio de Despesas
* `44` | `DRI` | Duplicata Rural p/ Indicação
* `45` | `ECI` | Encargos Condominiais p/ Indicação
* `99` | `Outros` | Outros
                
  - `document_type_label` (optional): string - Tipo de Documento (Sigla)
  - `document_number` (optional): string - Número do Documento
  - `acceptance` (optional): string - Aceite:
* `N` Não (Padrão)
* `S` Sim
  - `our_number` (optional): string - Nosso Número. Se não informado, usará o Próximo Nosso Número da Carteira de Cobrança.
  - `processed_our_number` (optional): string - Nosso Número calculado com DV (formatado)
  - `processed_our_number_raw` (optional): string - Nosso Número calculado com DV (limpo)
  - `paid_amount` (optional): number - Valor pago
  - `paid_at` (optional): string - Data do pagamento
  - `days_for_revoke` (optional): integer - Dias corridos para Baixa/Devolução:

                  Nulo/Branco: Obedece ao padrão do banco.
                  0: Baixa/Devolução no mesmo dia do vencimento.
                  1 ou mais: Baixa/Devolução após o vencimento(Vencimento + X dias corridos).
                  
  - `days_for_negativation` (optional): integer - Dias corridos para Negativação:

Disponível apenas para os seguintes bancos e formatos.

* Banco |	CNAB 240|	CNAB 400 |Webservice
* Bradesco |	Sim |	Sim	| Não
* Itaú | Não | Sim | Não
                
  - `days_for_sue_type` (optional): integer - Tipo de dias para protesto:
                * `0` Corridos
                * `1` Úteis
  - `days_for_sue` (optional): integer - Dias corridos para Protesto
  - `sue_code` (optional): string - Código de Protesto(CNAB 240). Consulte os possíveis valores <a href="https://developers.kobana.com.br/reference/bancos-suportados" target="_blank">para cada banco</a>.
  - `revoke_code` (optional): string - Código de Baixa(CNAB 240). Consulte os possíveis valores <a href="https://developers.kobana.com.br/reference/bancos-suportados" target="_blank">para cada banco</a>.
  - `first_instruction` (optional): string - Primeira Instrução(CNAB 400). Consulte os possíveis valores <a href="https://developers.kobana.com.br/reference/bancos-suportados" target="_blank">para cada banco</a>.
  - `second_instruction` (optional): string - Segunda Instrução(CNAB 400). Consulte os possíveis valores <a href="https://developers.kobana.com.br/reference/bancos-suportados" target="_blank">para cada banco</a>.
  - `watermark` (optional): boolean - Endereço
  - `divergent_payment_type` (optional): integer - Tipo de pagamento divergente:
Válido apenas para Itaú e Caixa.
* `1` Aceita qualquer valor divergente
* `2` Aceita pagamentos dentro de uma faixa de valores ou percentuais
* `3` Não aceita pagamento de valores divergentes
* `4` Aceita pagamentos de valores superiores a um valor ou percentual mínimo
  - `divergent_payment_value_type` (optional): integer - Tipo de valor a considerar para os limites de pagamentos:
Válido apenas para Itaú e Caixa.
* `1` Informa pagamentos divergentes por valores
* `2` Informa pagamentos divergentes por percentuais
  - `divergent_payment_maximum_value` (optional): number - Valor mínimo para a faixa de pagamentos divergentes. 
  - `divergent_payment_minimum_value` (optional): number - Valor máximo para a faixa de pagamentos divergentes. 
  - `divergent_payment_maximum_percentage` (optional): number - Percentual mínimo para a faixa de pagamentos divergentes. 
  - `divergent_payment_minimum_percentage` (optional): number - Percentual máximo para a faixa de pagamentos divergentes.
  - `divergent_payment_limit` (optional): integer - Quantidade de pagamentos permitida. Obrigatório se informados dados para pagamento divergente. Usado somente pela Caixa.
  - `prevent_registration` (optional): boolean - Impedir envio de registro ao banco:

Caso `true`, impede que o boleto seja registrado. Para ser usado nos casos em que o boleto já foi registrado fora da KOBANA mas deseja-se incluí-lo no sistema.
  - `control_number` (optional): string - Número de controle:

Pode conter qualquer informação de interesse da Empresa. A informação contida neste campo sempre retornará com o respectivo título no arquivo-retorno.
  - `ignore_email` (optional): boolean - Não enviar este boleto por email
  - `ignore_sms` (optional): boolean - Nunca enviar este boleto por SMS
  - `ignore_whatsapp` (optional): boolean - Nunca enviar este boleto por WhatsApp
  - `addons` (optional): string - Endereço
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `meta` (optional): object - Hash com chave e valor no formato JSON.
  - `notes` (optional): string - Anotações
  - `custom_attachment_name` (optional): string - Nome para ser usado nos arquivos de boleto enviados para o cliente em notificações. Aceita uso de variáveis. Caso seja deixado vazio, o padrão é a palavra “boleto” acompanhada do ID.
  - `split_payment` (optional): boolean - Split de Pagamento.
Válido apenas para ABC Brasil (remessa CNAB 240), Itaú e Bradesco (remessa CNAB 400).
Caso true, o rateio do boleto será registrado.
Informar as contas para rateio em `split_accounts`
  - `split_accounts` (optional): array - Contas para Split de pagamento.
  - `payment_place` (optional): string - Local de Pagamento
  - `installment_id` (optional): integer - ID do Carnê
  - `installment_number` (optional): integer - Número da parcela do carnê
  - `installment_total` (optional): integer - Total de parcelas do carnê
  - `customer_subscription_id` (optional): integer - ID da Assinatura
  - `beneficiary_name` (optional): string - Nome do Beneficiário
  - `beneficiary_cnpj_cpf` (optional): string - CNPJ/CPF do Beneficiário
  - `beneficiary_address` (optional): string - Endereço do Beneficiário
  - `beneficiary_assignor_code` (optional): string - Agência/Código do Beneficiário
  - `bank_contract_slug` (optional): string - Slug da Carteira
  - `agency_number` (optional): string - Agência
  - `agency_digit` (optional): string - Dígito da Agência
  - `account_number` (optional): string - Conta
  - `account_digit` (optional): string - Dígito da Conta
  - `extra1` (optional): string - Campo extra 1
  - `extra1_digit` (optional): string - Digito do Campo extra 1
  - `extra2` (optional): string - Campo extra 2
  - `extra2_digit` (optional): string - Dígito do Campo extra 2
  - `created_via_api` (optional): boolean - Indica se o boleto foi criado por API
  - `created_at` (optional): string - Data e hora de criação do boleto
  - `updated_at` (optional): string - Data e hora da última atualização do boleto
  - `registered_at` (optional): string - Data e hora do registro
  - `register_type` (optional): integer - Tipo de Registro:
* `1` API
* `2` Banco
  - `cancel_type` (optional): integer - Tipo de Cancelamento:
                 * `1` Cliente
                 * `2` Banco
  - `payment_count` (optional): integer - Quantidade de pagamentos parciais aceitos para este boleto.
  - `line` (optional): string - Linha Digitável
  - `barcode` (optional): string - Endereço
  - `shorten_url` (optional): string - URL para visualização do boleto
  - `url` (optional): string - URL para visualização do boleto
  - `carne_url` (optional): string - URL para visualização do carnê(Quando for parcela)
  - `formats` (optional): object - URLs com formatos disponíveis. Ex.: PDF, Imagem, PIX e etc
  - `pix_enabled` (optional): boolean - Indica se o boleto é híbrido e tem QRcode PIX
  - `pix_qrcode` (optional): string - QRcode PIX do boleto híbrido
  - `status` (optional): string - Situação do boleto:
* `generating` Gerando
* `draft` Rascunho
* `generation_failed` Falha ao gerar
* `opened` Aberto
* `canceled` Cancelado
* `paid` Pago
* `overdue` Vencido
* `validation_failed` Inválido
* `chargeback` Estornado
  - `recipient_account` (optional): string - Conta Destinatária + Dígito
- Example:
```
{
  "expire_at_in_days": 1,
  "amount": 10.99,
  "cancel": true,
  "with_fines": true,
  "bank_billet_account_id": 1,
  "bank_billet_layout_id": 1,
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_state": "SP",
  "customer_city_name": "São Paulo",
  "customer_zipcode": "01310100",
  "customer_address": "Rua F, alamenda G",
  "customer_address_complement": "string",
  "customer_address_number": "string",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_neighborhood": "Centro",
  "customer_phone_number": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_nickname": "string",
  "customer_notes": "string",
  "customer_contact_person": "string",
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "interest_days_type": 1,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "charge_type": 1,
  "dispatch_type": 1,
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "description": "string",
  "instructions": "string",
  "document_date": "2024-01-15",
  "document_type": "01",
  "document_type_label": "string",
  "document_number": "string",
  "acceptance": "N",
  "our_number": "string",
  "processed_our_number": "string",
  "processed_our_number_raw": "string",
  "paid_amount": 10.5,
  "paid_at": "2024-01-15",
  "days_for_revoke": 1,
  "days_for_negativation": 1,
  "days_for_sue_type": 1,
  "days_for_sue": 1,
  "sue_code": "string",
  "revoke_code": "string",
  "first_instruction": "string",
  "second_instruction": "string",
  "watermark": true,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "prevent_registration": true,
  "control_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "addons": "string",
  "custom_data": {},
  "meta": {},
  "notes": "string",
  "custom_attachment_name": "string",
  "split_payment": true,
  "split_accounts": [
    {
      "bank_number": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "account_number": "string",
      "account_digit": "string",
      "cnpj_cpf": "string",
      "name": "string",
      "amount": "string",
      "floating": 1
    },
    {
      "bank_number": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "account_number": "string",
      "account_digit": "string",
      "cnpj_cpf": "string",
      "name": "string",
      "amount": "string",
      "floating": 1
    }
  ],
  "payment_place": "string",
  "installment_id": 1,
  "installment_number": 1,
  "installment_total": 1,
  "customer_subscription_id": 1,
  "beneficiary_name": "string",
  "beneficiary_cnpj_cpf": "string",
  "beneficiary_address": "string",
  "beneficiary_assignor_code": "string",
  "bank_contract_slug": "string",
  "agency_number": "string",
  "agency_digit": "string",
  "account_number": "string",
  "account_digit": "string",
  "extra1": "string",
  "extra1_digit": "string",
  "extra2": "string",
  "extra2_digit": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "registered_at": "2024-01-15T10:30:00Z",
  "register_type": 1,
  "cancel_type": 1,
  "payment_count": 1,
  "line": "string",
  "barcode": "string",
  "shorten_url": "string",
  "url": "string",
  "carne_url": "string",
  "formats": {},
  "pix_enabled": true,
  "pix_qrcode": "string",
  "status": "generating",
  "recipient_account": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Boleto

**Response**:

Boleto duplicado

```
{
  "id": 1,
  "bank_billet_account_id": 1,
  "bank_billet_layout_id": 1,
  "amount": 10.99,
  "expire_at": "2024-01-15",
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_state": "SP",
  "customer_city_name": "São Paulo",
  "customer_zipcode": "01310100",
  "customer_address": "Rua F, alamenda G",
  "customer_address_complement": "string",
  "customer_address_number": "string",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_neighborhood": "Centro",
  "customer_phone_number": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_nickname": "string",
  "customer_notes": "string",
  "customer_contact_person": "string",
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "interest_days_type": 1,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "charge_type": 1,
  "dispatch_type": 1,
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "description": "string",
  "instructions": "string",
  "document_date": "2024-01-15",
  "document_type": "01",
  "document_type_label": "string",
  "document_number": "string",
  "acceptance": "N",
  "our_number": "string",
  "processed_our_number": "string",
  "processed_our_number_raw": "string",
  "paid_amount": 10.5,
  "paid_at": "2024-01-15",
  "days_for_revoke": 1,
  "credit_bureau": 1,
  "days_for_negativation": 1,
  "days_for_sue_type": 1,
  "days_for_sue": 1,
  "sue_code": "string",
  "revoke_code": "string",
  "first_instruction": "string",
  "second_instruction": "string",
  "watermark": true,
  "payment_count": 1,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "prevent_registration": true,
  "control_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "addons": "string",
  "custom_data": {},
  "meta": {},
  "notes": "string",
  "custom_attachment_name": "string",
  "split_payment": true,
  "split_payment_type": 1,
  "split_accounts": [
    {
      "bank_number": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "account_number": "string",
      "account_digit": "string",
      "cnpj_cpf": "string",
      "name": "string",
      "amount": "string",
      "floating": 1
    },
    {
      "bank_number": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "account_number": "string",
      "account_digit": "string",
      "cnpj_cpf": "string",
      "name": "string",
      "amount": "string",
      "floating": 1
    }
  ],
  "payment_place": "string",
  "installment_id": 1,
  "installment_number": 1,
  "installment_total": 1,
  "customer_subscription_id": 1,
  "beneficiary_name": "string",
  "beneficiary_cnpj_cpf": "string",
  "beneficiary_address": "string",
  "beneficiary_assignor_code": "string",
  "bank_contract_slug": "string",
  "agency_number": "string",
  "agency_digit": "string",
  "account_number": "string",
  "account_digit": "string",
  "extra1": "string",
  "extra1_digit": "string",
  "extra2": "string",
  "extra2_digit": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "registration_status": "pending",
  "registered_at": "2024-01-15T10:30:00Z",
  "register_type": 1,
  "cancel_type": 1,
  "cancellation_reason": 1,
  "line": "string",
  "barcode": "string",
  "shorten_url": "string",
  "url": "string",
  "carne_url": "string",
  "formats": {},
  "pix_enabled": true,
  "pix_qrcode": "string",
  "pix_txid": "string",
  "prevent_pix": true,
  "status": "generating",
  "recipient_account": "string",
  "reduction_type": 1,
  "reduction_amount": 30.25,
  "reduction_percentage": 10.5,
  "instructions_mode": 1,
  "import_id": 1,
  "virtual_bank_billet_id": 1,
  "financial_provider_external_id": "string",
  "after_create": [
    "string",
    "string"
  ]
}
```


#### PUT /v1/v1/bank_billets/{id}/pay
**Description**: Marcar Boleto Como Pago

**Request Body** (application/json):

- Type: `v1_bank_billet_pay_object`
- Properties:
  - `paid_amount` (required): number - Valor pago do boleto.
  - `paid_at` (required): string - Data de pagamento do boleto
  - `bank_rate` (optional): string - Valor da taxa bancária.
  - `direct_payment` (optional): boolean - Informa se o pagamento foi feito diretamente ao beneficiário.
- Example:
```
{
  "paid_amount": 1345.56,
  "paid_at": "2024-01-15",
  "bank_rate": "4,02",
  "direct_payment": true
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Boleto

**Response**:

Boleto pago

#### POST /v1/v1/bank_billets/{id}/send_email
**Description**: Enviar Boleto por E-mail

**Request Body** (application/json):

- Type: `v1_bank_billet_send_email_object`
- Properties:
  - `form` (required): object - Formulário de E-mail.
- Example:
```
{
  "form": {
    "to": "user@example.com",
    "subject": "string",
    "message": "string",
    "email_account_id": 1,
    "email_template_id": 1,
    "bank_billet_in_pdf": true,
    "bank_billet_in_png": true
  }
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Boleto

**Response**:

E-mail enviado com sucesso

#### POST /v1/v1/bank_billets/{id}/send_sms
**Description**: Enviar Boleto por SMS

**Request Body** (application/json):

- Type: `v1_bank_billet_send_sms_object`
- Properties:
  - `form` (required): object - Formulário de SMS.
- Example:
```
{
  "form": {
    "phone_to": "string",
    "message": "string",
    "sms_notification_id": 1,
    "sms_account_id": 1
  }
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Boleto

**Response**:

SMS enviado com sucesso

#### POST /v2/v2/payment/bank_billet_batches
**Description**: Criar um Lote de Pagamento de Boletos

**Request Body** (application/json):

- Type: `v2_new_payment_batch_bank_billet`
- Properties:
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `payments` (required): array - Lista de Pagamentos de Boletos novos ou existentes.
- Example:
```
{
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "payments": [
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "code": "string",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ]
    },
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "code": "string",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ]
    }
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Lote de Pagamento criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "payments": [
      {
        "uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "status": "...",
        "registration_status": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "financial_account_uid": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "source": "...",
        "bank_billet": "...",
        "identifier": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "status": "...",
        "registration_status": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "financial_account_uid": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "source": "...",
        "bank_billet": "...",
        "identifier": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/payment/bank_billets
**Description**: Listar Pagamentos de Boleto

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Pagamentos encontrados

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "status": "string",
      "registration_status": "string",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "source": "string",
      "bank_billet": {
        "code": "string",
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "status": "string",
      "registration_status": "string",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "source": "string",
      "bank_billet": {
        "code": "string",
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/payment/bank_billets
**Description**: Criar um Pagamento de Boleto

**Request Body** (application/json):

- Type: `v2_new_payment_bank_billet`
- Properties:
  - `amount` (required): number - Quantia

  - `scheduled_to` (optional): string - Data de Agendamento
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `code` (required): string - Código de Barras ou Linha Digitável
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `tags` (optional): array - Tags associadas
- Example:
```
{
  "amount": 120.99,
  "scheduled_to": "2024-01-15",
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "code": "string",
  "external_id": "123456-abc-789",
  "custom_data": {},
  "tags": [
    "tag1",
    "tag1"
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Pagamento criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 120.99,
    "scheduled_to": "2024-01-15",
    "status": "string",
    "registration_status": "string",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "source": "string",
    "bank_billet": {
      "code": "string",
      "beneficiary": {
        "document_number": "111.321.322-09",
        "name": "João da Silva"
      }
    },
    "identifier": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/payment/bank_billets/{uid}
**Description**: Visualizar um Pagamento de Boleto

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UUID do Pagamento de Boleto

**Response**:

Pagamento encontrado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 120.99,
    "scheduled_to": "2024-01-15",
    "status": "string",
    "registration_status": "string",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "source": "string",
    "bank_billet": {
      "code": "string",
      "beneficiary": {
        "document_number": "111.321.322-09",
        "name": "João da Silva"
      }
    },
    "identifier": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


### CNAB (Remessa)

#### GET /v1/v1/remittances
**Description**: Listar CNABs

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `expire_from` (query, string) (optional): A partir da Data de vencimento do boleto.
- `expire_to` (query, string) (optional): Até a Data de vencimento do boleto.
- `created_from` (query, string) (optional): A partir da Data de criação da Remessa.
- `created_to` (query, string) (optional): Até a Data de criação da Remessa.
- `bank_billet_account_id` (query, string) (optional): Filtro por ID da Carteira.
- `our_code` (query, string) (optional): Filtro por Nosso número.

**Response**:

Sucesso na listagem de CNABs

```
[
  {
    "id": 1,
    "content": "string",
    "filename": "string",
    "status": "unprocessed",
    "processed_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "url": "string",
    "created_via_api": true,
    "bank_billet_account_id": 1,
    "remittance_number": 1,
    "sent_via_integration": "2024-01-15T10:30:00Z",
    "bank_billet_ids": [
      1,
      1
    ],
    "bank_billet_remittances": [
      {
        "id": "...",
        "our_code": "...",
        "occurrence": "...",
        "remittance_id": "...",
        "bank_billet_id": "...",
        "bank_billet_account_id": "...",
        "processed_at": "...",
        "occurrence_detail": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "id": "...",
        "our_code": "...",
        "occurrence": "...",
        "remittance_id": "...",
        "bank_billet_id": "...",
        "bank_billet_account_id": "...",
        "processed_at": "...",
        "occurrence_detail": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ]
  },
  {
    "id": 1,
    "content": "string",
    "filename": "string",
    "status": "unprocessed",
    "processed_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "url": "string",
    "created_via_api": true,
    "bank_billet_account_id": 1,
    "remittance_number": 1,
    "sent_via_integration": "2024-01-15T10:30:00Z",
    "bank_billet_ids": [
      1,
      1
    ],
    "bank_billet_remittances": [
      {
        "id": "...",
        "our_code": "...",
        "occurrence": "...",
        "remittance_id": "...",
        "bank_billet_id": "...",
        "bank_billet_account_id": "...",
        "processed_at": "...",
        "occurrence_detail": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "id": "...",
        "our_code": "...",
        "occurrence": "...",
        "remittance_id": "...",
        "bank_billet_id": "...",
        "bank_billet_account_id": "...",
        "processed_at": "...",
        "occurrence_detail": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ]
  }
]
```


#### POST /v1/v1/remittances
**Description**: Criar CNAB

**Request Body** (application/json):

- Type: `v1_remittance_create_cnab_object`
- Properties:
  - `bank_billet_account_id` (optional): integer - ID da [Carteira de Cobrança](/reference/post_v1-bank-billet-accounts).
  - `bank_billet_remittance_ids` (optional): array - IDs de [Registros de Remessa](/reference/get_v1-bank-billet-remittances).
- Example:
```
{
  "bank_billet_account_id": 1,
  "bank_billet_remittance_ids": [
    1,
    1
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

CNAB criado

```
{
  "id": 1,
  "content": "string",
  "filename": "string",
  "status": "unprocessed",
  "processed_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "url": "string",
  "created_via_api": true,
  "bank_billet_account_id": 1,
  "remittance_number": 1,
  "sent_via_integration": "2024-01-15T10:30:00Z",
  "bank_billet_ids": [
    1,
    1
  ],
  "bank_billet_remittances": [
    {
      "id": 1,
      "our_code": "string",
      "occurrence": "string",
      "remittance_id": 1,
      "bank_billet_id": 1,
      "bank_billet_account_id": 1,
      "processed_at": "2024-01-15T10:30:00Z",
      "occurrence_detail": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "id": 1,
      "our_code": "string",
      "occurrence": "string",
      "remittance_id": 1,
      "bank_billet_id": 1,
      "bank_billet_account_id": 1,
      "processed_at": "2024-01-15T10:30:00Z",
      "occurrence_detail": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ]
}
```


#### POST /v1/v1/remittances/bulk
**Description**: Criar CNABs em Lote

**Request Body** (application/json):

- Properties:
  - `bank_billet_remittance_ids` (optional): array - IDs de [Registros de Remessa](/reference/get_v1-bank-billet-remittances).
- Example:
```
{
  "bank_billet_remittance_ids": [
    1,
    1
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

CNABs criadas

```
[
  {
    "id": 1,
    "content": "string",
    "filename": "string",
    "status": "unprocessed",
    "processed_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "url": "string",
    "created_via_api": true,
    "bank_billet_account_id": 1,
    "remittance_number": 1,
    "sent_via_integration": "2024-01-15T10:30:00Z",
    "bank_billet_ids": [
      1,
      1
    ],
    "bank_billet_remittances": [
      {
        "id": "...",
        "our_code": "...",
        "occurrence": "...",
        "remittance_id": "...",
        "bank_billet_id": "...",
        "bank_billet_account_id": "...",
        "processed_at": "...",
        "occurrence_detail": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "id": "...",
        "our_code": "...",
        "occurrence": "...",
        "remittance_id": "...",
        "bank_billet_id": "...",
        "bank_billet_account_id": "...",
        "processed_at": "...",
        "occurrence_detail": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ]
  },
  {
    "id": 1,
    "content": "string",
    "filename": "string",
    "status": "unprocessed",
    "processed_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "url": "string",
    "created_via_api": true,
    "bank_billet_account_id": 1,
    "remittance_number": 1,
    "sent_via_integration": "2024-01-15T10:30:00Z",
    "bank_billet_ids": [
      1,
      1
    ],
    "bank_billet_remittances": [
      {
        "id": "...",
        "our_code": "...",
        "occurrence": "...",
        "remittance_id": "...",
        "bank_billet_id": "...",
        "bank_billet_account_id": "...",
        "processed_at": "...",
        "occurrence_detail": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "id": "...",
        "our_code": "...",
        "occurrence": "...",
        "remittance_id": "...",
        "bank_billet_id": "...",
        "bank_billet_account_id": "...",
        "processed_at": "...",
        "occurrence_detail": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ]
  }
]
```


#### DELETE /v1/v1/remittances/{id}
**Description**: Apagar CNAB

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do CNAB

**Response**:

CNAB excluído

#### GET /v1/v1/remittances/{id}
**Description**: Informações do CNAB

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do CNAB

**Response**:

CNAB encontrado

```
{
  "id": 1,
  "content": "string",
  "filename": "string",
  "status": "unprocessed",
  "processed_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "url": "string",
  "created_via_api": true,
  "bank_billet_account_id": 1,
  "remittance_number": 1,
  "sent_via_integration": "2024-01-15T10:30:00Z",
  "bank_billet_ids": [
    1,
    1
  ],
  "bank_billet_remittances": [
    {
      "id": 1,
      "our_code": "string",
      "occurrence": "string",
      "remittance_id": 1,
      "bank_billet_id": 1,
      "bank_billet_account_id": 1,
      "processed_at": "2024-01-15T10:30:00Z",
      "occurrence_detail": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "id": 1,
      "our_code": "string",
      "occurrence": "string",
      "remittance_id": 1,
      "bank_billet_id": 1,
      "bank_billet_account_id": 1,
      "processed_at": "2024-01-15T10:30:00Z",
      "occurrence_detail": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ]
}
```


#### GET /v1/v1/remittances/{id}/raw
**Description**: Raw(text/plain) do CNAB

**Parameters**:

- `id` (path, string) (required): ID do CNAB
- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Raw do CNAB

### CNAB (Retorno)
CNAB (Retorno)

#### GET /v1/v1/discharges
**Description**: Listar CNABs

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `created_from` (query, string) (optional): A partir da Data de criação do Retorno.
- `created_to` (query, string) (optional): Até a Data de criação do Retorno.
- `bank_billet_account_id` (query, string) (optional): Filtro por ID da Carteira.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Sucesso na listagem de CNABs

```
[
  {
    "id": 1,
    "filename": "string",
    "status": "unprocessed",
    "processed_at": "2024-01-15T10:30:00Z",
    "created_via_api": true,
    "bank_billet_account_id": 1,
    "created_via_integration": "2024-01-15T10:30:00Z",
    "bank_billet_discharges": [
      {
        "id": "...",
        "our_occurrence": "...",
        "discharge_id": "...",
        "bank_billet_id": "...",
        "processed_at": "...",
        "date_of_occurrence": "...",
        "occurrence": "...",
        "occurrence_detail": "...",
        "occurrence_error": "...",
        "occurrence_error_detail": "...",
        "line_raw": "...",
        "line_parsed": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "id": "...",
        "our_occurrence": "...",
        "discharge_id": "...",
        "bank_billet_id": "...",
        "processed_at": "...",
        "date_of_occurrence": "...",
        "occurrence": "...",
        "occurrence_detail": "...",
        "occurrence_error": "...",
        "occurrence_error_detail": "...",
        "line_raw": "...",
        "line_parsed": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "filename": "string",
    "status": "unprocessed",
    "processed_at": "2024-01-15T10:30:00Z",
    "created_via_api": true,
    "bank_billet_account_id": 1,
    "created_via_integration": "2024-01-15T10:30:00Z",
    "bank_billet_discharges": [
      {
        "id": "...",
        "our_occurrence": "...",
        "discharge_id": "...",
        "bank_billet_id": "...",
        "processed_at": "...",
        "date_of_occurrence": "...",
        "occurrence": "...",
        "occurrence_detail": "...",
        "occurrence_error": "...",
        "occurrence_error_detail": "...",
        "line_raw": "...",
        "line_parsed": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "id": "...",
        "our_occurrence": "...",
        "discharge_id": "...",
        "bank_billet_id": "...",
        "processed_at": "...",
        "date_of_occurrence": "...",
        "occurrence": "...",
        "occurrence_detail": "...",
        "occurrence_error": "...",
        "occurrence_error_detail": "...",
        "line_raw": "...",
        "line_parsed": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### POST /v1/v1/discharges
**Description**: Enviar CNAB

**Request Body** (multipart/form-data):

- Type: `v1_discharge_send_cnab_object`
- Properties:
  - `file` (optional): string - Arquivo
  - `filename` (optional): string - Nome do arquivo
  - `bank_billet_account_id` (optional): integer - ID da [Carteira de Cobrança](/reference/post_v1-bank-billet-accounts).
- Example:
```
{
  "file": "string",
  "filename": "string",
  "bank_billet_account_id": 1
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

CNAB enviado

```
{
  "id": 1,
  "filename": "string",
  "status": "unprocessed",
  "processed_at": "2024-01-15T10:30:00Z",
  "created_via_api": true,
  "bank_billet_account_id": 1,
  "created_via_integration": "2024-01-15T10:30:00Z",
  "bank_billet_discharges": [
    {
      "id": 1,
      "our_occurrence": "2001",
      "discharge_id": 1,
      "bank_billet_id": 1,
      "processed_at": "2024-01-15T10:30:00Z",
      "date_of_occurrence": "2024-01-15",
      "occurrence": "string",
      "occurrence_detail": "string",
      "occurrence_error": "string",
      "occurrence_error_detail": "string",
      "line_raw": "string",
      "line_parsed": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "id": 1,
      "our_occurrence": "2001",
      "discharge_id": 1,
      "bank_billet_id": 1,
      "processed_at": "2024-01-15T10:30:00Z",
      "date_of_occurrence": "2024-01-15",
      "occurrence": "string",
      "occurrence_detail": "string",
      "occurrence_error": "string",
      "occurrence_error_detail": "string",
      "line_raw": "string",
      "line_parsed": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### GET /v1/v1/discharges/{id}
**Description**: Informações do CNAB

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do CNAB

**Response**:

CNAB encontrado

```
{
  "id": 1,
  "filename": "string",
  "status": "unprocessed",
  "processed_at": "2024-01-15T10:30:00Z",
  "created_via_api": true,
  "bank_billet_account_id": 1,
  "created_via_integration": "2024-01-15T10:30:00Z",
  "bank_billet_discharges": [
    {
      "id": 1,
      "our_occurrence": "2001",
      "discharge_id": 1,
      "bank_billet_id": 1,
      "processed_at": "2024-01-15T10:30:00Z",
      "date_of_occurrence": "2024-01-15",
      "occurrence": "string",
      "occurrence_detail": "string",
      "occurrence_error": "string",
      "occurrence_error_detail": "string",
      "line_raw": "string",
      "line_parsed": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "id": 1,
      "our_occurrence": "2001",
      "discharge_id": 1,
      "bank_billet_id": 1,
      "processed_at": "2024-01-15T10:30:00Z",
      "date_of_occurrence": "2024-01-15",
      "occurrence": "string",
      "occurrence_detail": "string",
      "occurrence_error": "string",
      "occurrence_error_detail": "string",
      "line_raw": "string",
      "line_parsed": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### GET /v1/v1/discharges/{id}/download
**Description**: Download do CNAB

**Parameters**:

- `id` (path, string) (required): ID do CNAB
- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Download com sucesso

#### PUT /v1/v1/discharges/{id}/pay_off
**Description**: Quitar Boletos

**Parameters**:

- `id` (path, string) (required): ID do CNAB
- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Boletos quitados

#### PUT /v1/v1/discharges/{id}/reprocess
**Description**: Reprocessar CNAB

**Parameters**:

- `id` (path, string) (required): ID do CNAB
- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

CNAB reprocessada

### Caixas Postais

#### GET /v2/v2/edi/edi_boxes
**Description**: Listar Caixas Postais

**Parameters**:

- `resource_type` (query, string) (optional): Filtro por Tipo de Recurso. Carteira de Cobrança (`charge.bank_billet_account`) ou Conta Financeira (`financial.account`).
- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `per_page` (query, integer) (optional): Quantidade de registros por página. Máximo de 50.
- `page` (query, integer) (optional): Número da página.

**Response**:

Caixas Postais encontradas.

```
{
  "status": 1,
  "data": [],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/edi/edi_boxes
**Description**: Criar Caixa Postal

**Request Body** (application/json):

- Type: `v2_edi_box`

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Caixa Postal criada

```
{
  "status": 1,
  "data": null
}
```


#### GET /v2/v2/edi/edi_boxes/{uid}
**Description**: Visualizar Caixa Postal

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UID da Caixa Postal

**Response**:

Caixa Postal encontrada

```
{
  "status": 1,
  "data": null
}
```


#### PUT /v2/v2/edi/edi_boxes/{uid}
**Description**: Atualizar Caixa Postal

**Request Body** (application/json):

- Type: `v2_edi_box`

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UID da Caixa Postal

**Response**:

Caixa Postal atualizada

```
{
  "status": 1,
  "data": null
}
```


### Carnês
Gerenciar carnês

#### GET /v1/v1/installments
**Description**: Listar Carnês

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Sucesso na listagem de carnês

```
[
  {
    "id": 1,
    "bank_billet_account_id": 1,
    "bank_billet_layout_id": 1,
    "amount": 10.99,
    "customer_id": 1,
    "customer_person_name": "João Silva",
    "customer_cnpj_cpf": "16.974.923/0001-84",
    "customer_state": "SP",
    "customer_city_name": "São Paulo",
    "customer_zipcode": "01310100",
    "customer_address": "Rua F, alamenda G",
    "customer_address_complement": "string",
    "customer_address_number": "string",
    "customer_email": "user@example.com",
    "customer_email_cc": "user@example.com",
    "customer_neighborhood": "Centro",
    "customer_phone_number": "string",
    "customer_ignore_email": true,
    "customer_ignore_sms": true,
    "customer_mobile_local_code": "string",
    "customer_mobile_number": "string",
    "customer_nickname": "string",
    "customer_notes": "string",
    "customer_contact_person": "string",
    "customer_update": "string",
    "start_at": "2024-01-15",
    "end_at": "2024-01-15",
    "cycle": "biweekly",
    "total": 100,
    "custom_bank_billets": [
      {
        "amount_cents": "...",
        "expire_at": "..."
      },
      {
        "amount_cents": "...",
        "expire_at": "..."
      }
    ],
    "bank_billet_ids": [
      1,
      1
    ],
    "interest_type": 1,
    "days_for_interest": 1,
    "interest_percentage": 10.5,
    "interest_value": 10.5,
    "interest_days_type": 1,
    "fine_type": 1,
    "days_for_fine": 1,
    "fine_percentage": 10.5,
    "fine_value": 10.5,
    "discount_type": 1,
    "days_for_discount": 1,
    "discount_percentage": 10.5,
    "discount_value": 10.5,
    "days_for_second_discount": 1,
    "second_discount_percentage": 10.5,
    "second_discount_value": 10.5,
    "days_for_third_discount": 1,
    "third_discount_percentage": 10.5,
    "third_discount_value": 10.5,
    "tags": [
      "string",
      "string"
    ],
    "guarantor_name": "string",
    "guarantor_cnpj_cpf": "string",
    "guarantor_address_number": "string",
    "guarantor_neighborhood": "string",
    "guarantor_phone_number": "string",
    "guarantor_city_name": "string",
    "guarantor_state": "string",
    "guarantor_zipcode": "string",
    "guarantor_address": "string",
    "guarantor_address_complement": "string",
    "description": "string",
    "instructions": "string",
    "document_date": "2024-01-15",
    "document_type": "01",
    "document_number": "string",
    "days_for_revoke": 1,
    "days_for_negativation": 1,
    "days_for_sue": 1,
    "divergent_payment_type": 1,
    "divergent_payment_value_type": 1,
    "divergent_payment_maximum_value": 10.5,
    "divergent_payment_minimum_value": 10.5,
    "divergent_payment_maximum_percentage": 10.5,
    "divergent_payment_minimum_percentage": 10.5,
    "divergent_payment_limit": 1,
    "prevent_registration": true,
    "notes": "string",
    "custom_attachment_name": "string",
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "payment_count": 1,
    "url": "string",
    "status": "created",
    "import_id": 1,
    "ignore_whatsapp": true
  },
  {
    "id": 1,
    "bank_billet_account_id": 1,
    "bank_billet_layout_id": 1,
    "amount": 10.99,
    "customer_id": 1,
    "customer_person_name": "João Silva",
    "customer_cnpj_cpf": "16.974.923/0001-84",
    "customer_state": "SP",
    "customer_city_name": "São Paulo",
    "customer_zipcode": "01310100",
    "customer_address": "Rua F, alamenda G",
    "customer_address_complement": "string",
    "customer_address_number": "string",
    "customer_email": "user@example.com",
    "customer_email_cc": "user@example.com",
    "customer_neighborhood": "Centro",
    "customer_phone_number": "string",
    "customer_ignore_email": true,
    "customer_ignore_sms": true,
    "customer_mobile_local_code": "string",
    "customer_mobile_number": "string",
    "customer_nickname": "string",
    "customer_notes": "string",
    "customer_contact_person": "string",
    "customer_update": "string",
    "start_at": "2024-01-15",
    "end_at": "2024-01-15",
    "cycle": "biweekly",
    "total": 100,
    "custom_bank_billets": [
      {
        "amount_cents": "...",
        "expire_at": "..."
      },
      {
        "amount_cents": "...",
        "expire_at": "..."
      }
    ],
    "bank_billet_ids": [
      1,
      1
    ],
    "interest_type": 1,
    "days_for_interest": 1,
    "interest_percentage": 10.5,
    "interest_value": 10.5,
    "interest_days_type": 1,
    "fine_type": 1,
    "days_for_fine": 1,
    "fine_percentage": 10.5,
    "fine_value": 10.5,
    "discount_type": 1,
    "days_for_discount": 1,
    "discount_percentage": 10.5,
    "discount_value": 10.5,
    "days_for_second_discount": 1,
    "second_discount_percentage": 10.5,
    "second_discount_value": 10.5,
    "days_for_third_discount": 1,
    "third_discount_percentage": 10.5,
    "third_discount_value": 10.5,
    "tags": [
      "string",
      "string"
    ],
    "guarantor_name": "string",
    "guarantor_cnpj_cpf": "string",
    "guarantor_address_number": "string",
    "guarantor_neighborhood": "string",
    "guarantor_phone_number": "string",
    "guarantor_city_name": "string",
    "guarantor_state": "string",
    "guarantor_zipcode": "string",
    "guarantor_address": "string",
    "guarantor_address_complement": "string",
    "description": "string",
    "instructions": "string",
    "document_date": "2024-01-15",
    "document_type": "01",
    "document_number": "string",
    "days_for_revoke": 1,
    "days_for_negativation": 1,
    "days_for_sue": 1,
    "divergent_payment_type": 1,
    "divergent_payment_value_type": 1,
    "divergent_payment_maximum_value": 10.5,
    "divergent_payment_minimum_value": 10.5,
    "divergent_payment_maximum_percentage": 10.5,
    "divergent_payment_minimum_percentage": 10.5,
    "divergent_payment_limit": 1,
    "prevent_registration": true,
    "notes": "string",
    "custom_attachment_name": "string",
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "payment_count": 1,
    "url": "string",
    "status": "created",
    "import_id": 1,
    "ignore_whatsapp": true
  }
]
```


#### POST /v1/v1/installments
**Description**: Criar um Carnê

**Request Body** (application/json):

- Type: `v1_installment_object`
- Properties:
  - `id` (optional): integer - ID do carnê
  - `bank_billet_account_id` (required): integer - ID da Carteira de Cobrança. Se não informado, usará a carteira padrão.
  - `bank_billet_layout_id` (optional): integer - ID do Modelo de Boleto
  - `amount` (required): number - Quantia
  - `customer_id` (optional): integer - ID do Cliente. Quando esse ID é passado, os campos `customer_person_name`, `customer_cnpj_cpf`, `customer_zipcode`, `customer_address`, `customer_city_name`, `customer_state` e `customer_neighborhood` não são obrigatórios.
  - `customer_person_name` (required): string - Nome do cliente
  - `customer_cnpj_cpf` (required): string - CPF/CNPJ do cliente
  - `customer_state` (required): string - Estado
  - `customer_city_name` (required): string - Cidade(Nome deve estar correto e completo)
  - `customer_zipcode` (required): string - CEP (formato 99999999)
  - `customer_address` (required): string - Endereço
  - `customer_address_complement` (optional): string - Complemento
  - `customer_address_number` (optional): string - Número
  - `customer_email` (optional): string - E-mail do Pagador
  - `customer_email_cc` (optional): string - E-mail alternativo do Pagador
  - `customer_neighborhood` (required): string - Bairro
  - `customer_phone_number` (optional): string - Telefone (com DDD)
  - `customer_ignore_email` (optional): boolean - Nunca enviar e-mail para este cliente
  - `customer_ignore_sms` (optional): boolean - Nunca enviar SMS para este cliente
  - `customer_mobile_local_code` (optional): string - DDD do Celular
  - `customer_mobile_number` (optional): string - Celular
  - `customer_nickname` (optional): string - Apelido ou Nome Fantasia do Pagador
  - `customer_notes` (optional): string - Anotações do Pagador
  - `customer_contact_person` (optional): string - Contato
  - `customer_update` (optional): string - Contato
  - `start_at` (required): string - Data da primeira cobrança
  - `end_at` (optional): string - Data da última cobrança
  - `cycle` (optional): string - Ciclo do carnê. Default: monthly
* `biweekly` Quinzenal
* `bimonthly` Bimestral
* `monthly` Mensal
* `quarterly` Trimestral
* `semiannual` Semestral
* `annual` Anual
  - `total` (required): integer - Quantidade de parcelas
  - `custom_bank_billets` (optional): array - Carnê customizado. Quando enviado, os valores de amount, start_at e end_at serão ignorados.
  - `bank_billet_ids` (optional): array - IDs de boletos vinculados ao carnê
  - `interest_type` (optional): integer - Tipo de juros/mora:
* `0` Inexistente (Padrão)
* `1` Para porcentagem diária
* `2` Para valor diário
  - `days_for_interest` (optional): integer - Quantidade de dias após o vencimento que a mora começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `interest_percentage` (optional): number - Porcentagem diária de juros. De 0.0 a 100.0 (Ex 1.5% = 1.5) Obrigatório se interest_type é igual a 1.
  - `interest_value` (optional): number - Valor diário de juros (R$). Obrigatório se interest_type é igual a 2.
  - `interest_days_type` (optional): integer - Tipo de Dias para juros:
* `0` Corridos
* `1` Úteis
  - `fine_type` (optional): integer - Tipo de multa:
* `0` Inexistente (Padrão)
* `1` Para percentual do valor do boleto
* `2` Para valor fixo
  - `days_for_fine` (optional): integer - Quantidade de dias após o vencimento que a multa começará a incidir. O valor default é 1 dia (o dia posterior ao vencimento).
  - `fine_percentage` (optional): number - Porcentagem de Multa por Atraso Ex: 2% x R$ 250,00 = R$ 5,00. Obrigatória se fine_type é igual a 1
  - `fine_value` (optional): number - Valor da multa (R$). Obrigatório se fine_type é igual a 2.
  - `discount_type` (optional): integer - Tipo de desconto:
O tipo de desconto será o mesmo para todos os três descontos, caso existam. :
* `0` Inexistente (Padrão)
* `1` Para valor fixo
* `2` Para percentual do valor do boleto
  - `days_for_discount` (optional): integer - Dias para desconto. Obrigatório se discount_type é diferente de 0(zero), Não pode resultar numa data passada referente a criação.
  - `discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao desconto. Obrigatório se discount_type é igual a 2
  - `discount_value` (optional): number - Valor do desconto (R$). Obrigatório se discount_type é igual a 1.
  - `days_for_second_discount` (optional): integer - Dias para segundo desconto.
  - `second_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao segundo desconto.
  - `second_discount_value` (optional): number - Valor do segundo desconto (R$).
  - `days_for_third_discount` (optional): integer - Dias para terceiro desconto.
  - `third_discount_percentage` (optional): number - Percentual do valor do boleto equivalente ao terceiro desconto.
  - `third_discount_value` (optional): number - Valor do terceiro desconto (R$).
  - `tags` (optional): array - Tags associadas ao boleto
  - `guarantor_name` (optional): string - Nome do Beneficiário final (Sacador/Avalista)
  - `guarantor_cnpj_cpf` (optional): string - CNPJ/CPF do Beneficiário final (Sacador/Avalista)
  - `guarantor_address_number` (optional): string - Número do Beneficiário final (Sacador/Avalista)
  - `guarantor_neighborhood` (optional): string - Bairro do Beneficiário final (Sacador/Avalista)
  - `guarantor_phone_number` (optional): string - Telefone (com DDD) do Beneficiário final (Sacador/Avalista)
  - `guarantor_city_name` (optional): string - Cidade(Nome deve estar correto e completo) do Beneficiário final (Sacador/Avalista)
  - `guarantor_state` (optional): string - Estado do Beneficiário final (Sacador/Avalista)
  - `guarantor_zipcode` (optional): string - CEP (formato 99999999) do Beneficiário final (Sacador/Avalista)
  - `guarantor_address` (optional): string - Endereço do Beneficiário final (Sacador/Avalista)
  - `guarantor_address_complement` (optional): string - Complemento do Beneficiário final (Sacador/Avalista)
  - `description` (optional): string - Descrição do produto ou serviço
  - `instructions` (optional): string - Instruções para o Caixa
  - `document_date` (optional): string - Data do Documento
  - `document_type` (required): string - Tipo de Documento:

* `Código` | `Sigla` | Descrição
* `01` | `CH` | Cheque
* `02` | `DM` | Duplicata Mercantil (Padrão)
* `03` | `DMI` | Duplicata Mercantil p/ Indicação
* `04` | `DS` | Duplicata de Serviço
* `05` | `DSI` | Duplicata de Serviço p/ Indicação
* `06` | `DR` | Duplicata Rural
* `07` | `LC` | Letra de Câmbio
* `08` | `NCC` | Nota de Crédito Comercial
* `09` | `NCE` | Nota de Crédito a Exportação
* `10` | `NCI` | Nota de Crédito Industrial
* `11` | `NCR` | Nota de Crédito Rural
* `12` | `NP` | Nota Promissória
* `13` | `NPR` | Nota Promissória Rural
* `14` | `TM` | Triplicata Mercantil
* `15` | `TS` | Triplicata de Serviço
* `16` | `NS` | Nota de Seguro
* `17` | `RC` | Recibo
* `18` | `FAT` | Fatura
* `19` | `ND` | Nota de Débito
* `20` | `AP` | Apólice de Seguro
* `21` | `ME` | Mensalidade Escolar
* `22` | `PC` | Parcela de Consórcio
* `23` | `NF` | Nota Fiscal
* `24` | `DD` | Documento de Dívida
* `25` | `CPR` | Cédula de Produto Rural
* `26` | `CTR` | Contrato
* `27` | `CSG` | Cosseguros
* `28` | `EC` | Encargos Condominiais
* `29` | `CPS` | Conta de Prestação de Serviços
* `30` | `WR` | Warrant
* `31` | `DP` | Duplicata Prestação
* `32` | `CSR` | Cobrança Seriada
* `33` | `CAR` | Carnê
* `34` | `ARE` | Apólice Ramos Elementares
* `35` | `CC` | Cartão de Crédito
* `36` | `BDP` | Boleto de Proposta
* `37` | `NPD` | Nota Promissória Direta
* `38` | `DAE` | Dívida Ativa de Estado
* `39` | `DAM` | Divida Ativa de Município
* `40` | `DAU` | Dívida Ativa União
* `41` | `CCB` | Célula de Crédito Bancário
* `42` | `FI` | Financiamento
* `43` | `RD` | Rateio de Despesas
* `44` | `DRI` | Duplicata Rural p/ Indicação
* `45` | `ECI` | Encargos Condominiais p/ Indicação
* `99` | `Outros` | Outros
                
  - `document_number` (optional): string - Número do Documento, Tamanho depende do banco e formato do arquivo Remessa:
                                    * Banco |	Formato| Tamanho |
                                    * Abc |`Cnab240`|	15	|
                                    * Ailos |`Cnab240`|	15  |
                                    * Arbi |`Cnab240`|	15	|
                                    * Banese |`Cnab240`|	15	|
                                    * Banestes |`Cnab400`|	10	|
                                    * Banrisul |`Cnab240`|	15	|
                                    * Banrisul |`Cnab400`|	10	|
                                    * Bb |`Cnab240`|	15	|
                                    * Bb |`Cnab400`|	10	|
                                    * Bib |`Cnab240`|	15	|
                                    * Bnb |`Cnab400`|	10	|
                                    * Bnpparibas |`Cnab400`|	10	|
                                    * Bradesco |`Cnab240`|	15	|
                                    * Bradesco |`Cnab400`|	10	|
                                    * Brb |`Cnab400`|	10	|
                                    * Caixa |`Cnab240`|	11	|
                                    * Caixa |`Cnab400`|	10	|
                                    * Caruana |`Cnab400`|	10	|
                                    * Citibank |`Cnab400`|	10	|
                                    * Credisis |`Cnab240`|	15	|
                                    * Cresol |`Cnab240`|	10	|
                                    * Cresol |`Cnab400`|	10	|
                                    * Cresol Bradesco |`Cnab240`|	15	|
                                    * Cresol Bradesco |`Cnab400`|	10	|
                                    * Daycoval |`Cnab400`|	10	|
                                    * Itau |`Cnab240`|	10	|
                                    * Itau |`Cnab400`|	10	|
                                    * Mercantil |`Cnab240`|	10	|
                                    * Moneyplus |`Cnab240`|	10	|
                                    * Rendimento |`Cnab400`|	10	|
                                    * Safra |`Cnab400`|	102	|
                                    * Santander |`Cnab240`|	15	|
                                    * Santander |`Cnab400`|	10	|
                                    * Semear |`Cnab400`|	10	|
                                    * Sicoob |`Cnab240`|	15	|
                                    * Sicoob |`Cnab400`|	10	|
                                    * Sicredi |`Cnab240`|	15	|
                                    * Sicredi |`Cnab400`|	10	|
                                    * Sofisa |`Cnab240`|	15	|
                                    * Unicred |`Cnab240`|	15	|
                                    * Uniprime |`Cnab400`|	10	|
                                    * Uniprime99 |`Cnab400`|	10	|
                                    * Santander |`Cnab400`|	10 
  - `days_for_revoke` (optional): integer - Dias corridos para Baixa/Devolução:

                                    Nulo/Branco: Obedece ao padrão do banco.
                                    0: Baixa/Devolução no mesmo dia do vencimento.
                                    1 ou mais: Baixa/Devolução após o vencimento(Vencimento + X dias corridos).
                                    
  - `days_for_negativation` (optional): integer - Dias corridos para Negativação:

Disponível apenas para os seguintes bancos e formatos.

* Banco |	CNAB 240|	CNAB 400 |Webservice
* Bradesco |	Sim |	Sim	| Não
* Itaú | Não | Sim | Não
                
  - `days_for_sue` (optional): integer - Dias corridos para Protesto
  - `divergent_payment_type` (optional): integer - Tipo de pagamento divergente:
Válido apenas para Itaú e Caixa.
* `1` Aceita qualquer valor divergente
* `2` Aceita pagamentos dentro de uma faixa de valores ou percentuais
* `3` Não aceita pagamento de valores divergentes
* `4` Aceita pagamentos de valores superiores a um valor ou percentual mínimo
  - `divergent_payment_value_type` (optional): integer - Tipo de valor a considerar para os limites de pagamentos:
Válido apenas para Itaú e Caixa.
* `1` Informa pagamentos divergentes por valores
* `2` Informa pagamentos divergentes por percentuais
  - `divergent_payment_maximum_value` (optional): number - Valor máximo para a faixa de pagamentos divergentes. 
  - `divergent_payment_minimum_value` (optional): number - Valor mínimo para a faixa de pagamentos divergentes. 
  - `divergent_payment_maximum_percentage` (optional): number - Percentual máximo para a faixa de pagamentos divergentes. 
  - `divergent_payment_minimum_percentage` (optional): number - Percentual mínimo para a faixa de pagamentos divergentes.
  - `divergent_payment_limit` (optional): integer - Quantidade de pagamentos permitida. Obrigatório se informados dados para pagamento divergente. Usado somente pela Caixa.
  - `prevent_registration` (optional): boolean - Impedir envio de registro ao banco:

Caso `true`, impede que o boleto seja registrado. Para ser usado nos casos em que o boleto já foi registrado fora da KOBANA mas deseja-se incluí-lo no sistema.
  - `notes` (optional): string - Anotações
  - `custom_attachment_name` (optional): string - Nome para ser usado nos arquivos de boleto enviados para o cliente em notificações. Aceita uso de variáveis. Caso seja deixado vazio, o padrão é a palavra “boleto” acompanhada do ID.
  - `created_via_api` (optional): boolean - Indica se o boleto foi criado por API
  - `created_at` (optional): string - Data e hora de criação do boleto
  - `updated_at` (optional): string - Data e hora da última atualização do boleto
  - `payment_count` (optional): integer - Quantidade de pagamentos parciais aceitos para este boleto.
  - `url` (optional): string - URL para visualização do carnê
  - `status` (optional): string - Situação do carnê:
* `created` Gerando
* `processed` Parcelas criadas
* `generated` Aberto
  - `import_id` (optional): integer - ID da Importação
  - `ignore_whatsapp` (optional): boolean - Nunca enviar este carnê por WhatsApp
- Example:
```
{
  "id": 1,
  "bank_billet_account_id": 1,
  "bank_billet_layout_id": 1,
  "amount": 10.99,
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_state": "SP",
  "customer_city_name": "São Paulo",
  "customer_zipcode": "01310100",
  "customer_address": "Rua F, alamenda G",
  "customer_address_complement": "string",
  "customer_address_number": "string",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_neighborhood": "Centro",
  "customer_phone_number": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_nickname": "string",
  "customer_notes": "string",
  "customer_contact_person": "string",
  "customer_update": "string",
  "start_at": "2024-01-15",
  "end_at": "2024-01-15",
  "cycle": "biweekly",
  "total": 100,
  "custom_bank_billets": [
    {
      "amount_cents": 1,
      "expire_at": "2024-01-15"
    },
    {
      "amount_cents": 1,
      "expire_at": "2024-01-15"
    }
  ],
  "bank_billet_ids": [
    1,
    1
  ],
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "interest_days_type": 1,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "tags": [
    "string",
    "string"
  ],
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "description": "string",
  "instructions": "string",
  "document_date": "2024-01-15",
  "document_type": "01",
  "document_number": "string",
  "days_for_revoke": 1,
  "days_for_negativation": 1,
  "days_for_sue": 1,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "prevent_registration": true,
  "notes": "string",
  "custom_attachment_name": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "payment_count": 1,
  "url": "string",
  "status": "created",
  "import_id": 1,
  "ignore_whatsapp": true
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Carnê Criado

```
{
  "id": 1,
  "bank_billet_account_id": 1,
  "bank_billet_layout_id": 1,
  "amount": 10.99,
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_state": "SP",
  "customer_city_name": "São Paulo",
  "customer_zipcode": "01310100",
  "customer_address": "Rua F, alamenda G",
  "customer_address_complement": "string",
  "customer_address_number": "string",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_neighborhood": "Centro",
  "customer_phone_number": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_nickname": "string",
  "customer_notes": "string",
  "customer_contact_person": "string",
  "customer_update": "string",
  "start_at": "2024-01-15",
  "end_at": "2024-01-15",
  "cycle": "biweekly",
  "total": 100,
  "custom_bank_billets": [
    {
      "amount_cents": 1,
      "expire_at": "2024-01-15"
    },
    {
      "amount_cents": 1,
      "expire_at": "2024-01-15"
    }
  ],
  "bank_billet_ids": [
    1,
    1
  ],
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "interest_days_type": 1,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "tags": [
    "string",
    "string"
  ],
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "description": "string",
  "instructions": "string",
  "document_date": "2024-01-15",
  "document_type": "01",
  "document_number": "string",
  "days_for_revoke": 1,
  "days_for_negativation": 1,
  "days_for_sue": 1,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "prevent_registration": true,
  "notes": "string",
  "custom_attachment_name": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "payment_count": 1,
  "url": "string",
  "status": "created",
  "import_id": 1,
  "ignore_whatsapp": true
}
```


#### DELETE /v1/v1/installments/{id}
**Description**: Excluir o Carnê

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Carnê

**Response**:

Carnê cancelado

#### GET /v1/v1/installments/{id}
**Description**: Informações do Carnê

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Carnê

**Response**:

Carnê encontrado com sucesso

```
{
  "id": 1,
  "bank_billet_account_id": 1,
  "bank_billet_layout_id": 1,
  "amount": 10.99,
  "customer_id": 1,
  "customer_person_name": "João Silva",
  "customer_cnpj_cpf": "16.974.923/0001-84",
  "customer_state": "SP",
  "customer_city_name": "São Paulo",
  "customer_zipcode": "01310100",
  "customer_address": "Rua F, alamenda G",
  "customer_address_complement": "string",
  "customer_address_number": "string",
  "customer_email": "user@example.com",
  "customer_email_cc": "user@example.com",
  "customer_neighborhood": "Centro",
  "customer_phone_number": "string",
  "customer_ignore_email": true,
  "customer_ignore_sms": true,
  "customer_mobile_local_code": "string",
  "customer_mobile_number": "string",
  "customer_nickname": "string",
  "customer_notes": "string",
  "customer_contact_person": "string",
  "customer_update": "string",
  "start_at": "2024-01-15",
  "end_at": "2024-01-15",
  "cycle": "biweekly",
  "total": 100,
  "custom_bank_billets": [
    {
      "amount_cents": 1,
      "expire_at": "2024-01-15"
    },
    {
      "amount_cents": 1,
      "expire_at": "2024-01-15"
    }
  ],
  "bank_billet_ids": [
    1,
    1
  ],
  "interest_type": 1,
  "days_for_interest": 1,
  "interest_percentage": 10.5,
  "interest_value": 10.5,
  "interest_days_type": 1,
  "fine_type": 1,
  "days_for_fine": 1,
  "fine_percentage": 10.5,
  "fine_value": 10.5,
  "discount_type": 1,
  "days_for_discount": 1,
  "discount_percentage": 10.5,
  "discount_value": 10.5,
  "days_for_second_discount": 1,
  "second_discount_percentage": 10.5,
  "second_discount_value": 10.5,
  "days_for_third_discount": 1,
  "third_discount_percentage": 10.5,
  "third_discount_value": 10.5,
  "tags": [
    "string",
    "string"
  ],
  "guarantor_name": "string",
  "guarantor_cnpj_cpf": "string",
  "guarantor_address_number": "string",
  "guarantor_neighborhood": "string",
  "guarantor_phone_number": "string",
  "guarantor_city_name": "string",
  "guarantor_state": "string",
  "guarantor_zipcode": "string",
  "guarantor_address": "string",
  "guarantor_address_complement": "string",
  "description": "string",
  "instructions": "string",
  "document_date": "2024-01-15",
  "document_type": "01",
  "document_number": "string",
  "days_for_revoke": 1,
  "days_for_negativation": 1,
  "days_for_sue": 1,
  "divergent_payment_type": 1,
  "divergent_payment_value_type": 1,
  "divergent_payment_maximum_value": 10.5,
  "divergent_payment_minimum_value": 10.5,
  "divergent_payment_maximum_percentage": 10.5,
  "divergent_payment_minimum_percentage": 10.5,
  "divergent_payment_limit": 1,
  "prevent_registration": true,
  "notes": "string",
  "custom_attachment_name": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "payment_count": 1,
  "url": "string",
  "status": "created",
  "import_id": 1,
  "ignore_whatsapp": true
}
```


### Carteiras de Cobrança
Gerenciar carteiras

#### GET /v1/v1/bank_billet_accounts
**Description**: Listar Carteiras

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Carteiras Encontradas

```
[
  {
    "id": 1,
    "bank_contract_slug": "string",
    "next_our_number": 1,
    "next_remittance_number": 1,
    "agency_number": "string",
    "agency_digit": "string",
    "account_number": "string",
    "account_digit": "string",
    "extra1": "string",
    "extra1_digit": "string",
    "extra2": "string",
    "extra2_digit": "string",
    "extra3": "string",
    "payment_place": "string",
    "contract": "string",
    "contract_type": "string",
    "beneficiary_name": "string",
    "beneficiary_cnpj_cpf": "string",
    "beneficiary_address_street": "string",
    "beneficiary_address_street_number": "string",
    "beneficiary_address_complement": "string",
    "beneficiary_address_neighborhood": "string",
    "beneficiary_address_city": "string",
    "beneficiary_address_state": "string",
    "beneficiary_address_zipcode": "01310100",
    "beneficiary_address": "string",
    "bolepix_enabled_at": "string",
    "bolepix": {
      "pix_mode": 0,
      "pix_account_id": 1,
      "pix_account": {
        "id": 1,
        "uid": "string",
        "custom_name": "Conta Pix Kobana",
        "key": "+55999999999",
        "financial_provider_slug": "bradesco",
        "enabled": true,
        "default": true,
        "beneficiary": {
          "name": "...",
          "document": "...",
          "address": "..."
        }
      },
      "pix_billing_options": {
        "kind": "instant",
        "interest": true,
        "fine": true,
        "discount": true,
        "revoke_days": true
      }
    },
    "name": "string",
    "status": "pending",
    "default": true,
    "configuration": null,
    "bank_contract": null,
    "custom_name": "string",
    "kind": "cnab400",
    "remittance_disabled": true,
    "remittance_disabled_at": "2024-01-15T10:30:00Z",
    "allow_expiration_on_weekends": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "created_via_api": true
  },
  {
    "id": 1,
    "bank_contract_slug": "string",
    "next_our_number": 1,
    "next_remittance_number": 1,
    "agency_number": "string",
    "agency_digit": "string",
    "account_number": "string",
    "account_digit": "string",
    "extra1": "string",
    "extra1_digit": "string",
    "extra2": "string",
    "extra2_digit": "string",
    "extra3": "string",
    "payment_place": "string",
    "contract": "string",
    "contract_type": "string",
    "beneficiary_name": "string",
    "beneficiary_cnpj_cpf": "string",
    "beneficiary_address_street": "string",
    "beneficiary_address_street_number": "string",
    "beneficiary_address_complement": "string",
    "beneficiary_address_neighborhood": "string",
    "beneficiary_address_city": "string",
    "beneficiary_address_state": "string",
    "beneficiary_address_zipcode": "01310100",
    "beneficiary_address": "string",
    "bolepix_enabled_at": "string",
    "bolepix": {
      "pix_mode": 0,
      "pix_account_id": 1,
      "pix_account": {
        "id": 1,
        "uid": "string",
        "custom_name": "Conta Pix Kobana",
        "key": "+55999999999",
        "financial_provider_slug": "bradesco",
        "enabled": true,
        "default": true,
        "beneficiary": {
          "name": "...",
          "document": "...",
          "address": "..."
        }
      },
      "pix_billing_options": {
        "kind": "instant",
        "interest": true,
        "fine": true,
        "discount": true,
        "revoke_days": true
      }
    },
    "name": "string",
    "status": "pending",
    "default": true,
    "configuration": null,
    "bank_contract": null,
    "custom_name": "string",
    "kind": "cnab400",
    "remittance_disabled": true,
    "remittance_disabled_at": "2024-01-15T10:30:00Z",
    "allow_expiration_on_weekends": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "created_via_api": true
  }
]
```


#### POST /v1/v1/bank_billet_accounts
**Description**: Criar Carteira de Cobrança

**Request Body** (application/json):

- Type: `v1_new_bank_billet_account_object`
- Properties:
  - `id` (optional): integer - ID da carteira
  - `bank_contract_slug` (required): string - [Slug da Carteira](/reference/bancos-suportados)
  - `next_our_number` (optional): integer - Próximo Nosso Número. Default: 1
  - `next_remittance_number` (optional): integer - Último sequencial da remessa Default: 1
  - `agency_number` (required): string - Agência
  - `agency_digit` (optional): string - Dígito da Agência. Dependendo da carteira escolhida poderá ser obrigátorio.
  - `account_number` (required): string - Conta
  - `account_digit` (required): string - Dígito da Conta
  - `extra1` (optional): string - Campo extra 1. Dependendo da carteira escolhida poderá ser obrigátorio.
  - `extra1_digit` (optional): string - Digito do Campo extra 1. Dependendo da carteira escolhida poderá ser obrigátorio.
  - `extra2` (optional): string - Campo extra 2. Dependendo da carteira escolhida poderá ser obrigátorio.
  - `extra2_digit` (optional): string - Dígito do Campo extra 2. Dependendo da carteira escolhida poderá ser obrigátorio.
  - `extra3` (optional): string - Código de Remessa
  - `payment_place` (optional): string - Local de Pagamento
  - `contract` (optional): string - Contrato
  - `contract_type` (optional): string - Tipo do Contrato
  - `beneficiary_name` (required): string - Nome do Beneficiário
  - `beneficiary_cnpj_cpf` (required): string - CNPJ/CPF do Beneficiário
  - `beneficiary_address_street` (required): string - Rua do Beneficiário
  - `beneficiary_address_street_number` (required): string - Numero da rua do Beneficiário
  - `beneficiary_address_complement` (required): string - Complemento do endereço do Beneficiário
  - `beneficiary_address_neighborhood` (required): string - Bairro do Beneficiário
  - `beneficiary_address_city` (required): string - Cidade do Beneficiário
  - `beneficiary_address_state` (required): string - Estado do Beneficiário
  - `beneficiary_address_zipcode` (required): string - CEP do Beneficiário (formato 99999999)
  - `beneficiary_address` (required): string - Endereço completo do Beneficiário.
  - `bolepix_enabled_at` (optional): string - Data e Hora em que o boleto híbrido foi habilitado.
  - `bolepix` (optional): object - Configuração de Boleto Híbrido
  - `name` (optional): string - Nome da Conta. Não é recebido na criação e nem na atualização, só é retornado na consulta e listagem
  - `status` (optional): string - Situação da carteira:
Quando a carteira acaba de ser cadastrada, ela ganha o status `pending`.

Nesse momento o usuário deve aceitar os termos e iniciar a homologação.

Ao clicar em “Prosseguir com a Homologação”, o status passa para `homologating`.

Será gerado um boleto e uma remessa de Homologação para ser enviada ao banco. Após o término, o status passa para `validating`.

A partir desse momento o usuário precisa informar o valor do boleto que foi gerado ou enviar o retorno processado pelo banco.

Quando o valor é informado corretamente, ou no retorno processado, o banco diz estar tudo certo, o status passa para `active`.

* `pending` Homologação não iniciada
* `homologating` Em homologação, aguardando pagamento do boleto
* `validating` Boleto pago, aguardando validação
* `active` Ativa e pronta para uso
  - `default` (optional): boolean - Padrão.
O campo `default` determina a carteira de cobrança que será usada na criação do boleto quando nenhuma carteira for informada.

No momento que a primeira carteira é homologada (passa para o `status` = `active`), ela recebe o valor `default` = `true`
  - `configuration` (optional): json - Configuração de dados padrões para boleto
  - `bank_contract` (optional): hash - Dados da Carteira. Não é recebido na criação e nem na atualização, só é retornado na consulta e listagem.
  - `custom_name` (optional): string - Nome da Carteira para identificação dentro da Kobana.
  - `kind` (optional): string - Tipo de CNAB:
* `cnab400` CNAB 400
* `cnab240` CNAB 240
  - `remittance_disabled` (optional): boolean - Desabilita geração de remessas.
  - `remittance_disabled_at` (optional): string - Data e hora em que a geração de remessa foi desabilitada.
  - `allow_expiration_on_weekends` (optional): boolean - Permitir vencimento em fim de semana e feriados
  - `created_at` (optional): string - Data e hora de criação da carteira
  - `updated_at` (optional): string - Data e hora da última atualização da carteira
  - `created_via_api` (optional): boolean - Indica se a carteira foi criada por API
- Example:
```
{
  "id": 1,
  "bank_contract_slug": "string",
  "next_our_number": 1,
  "next_remittance_number": 1,
  "agency_number": "string",
  "agency_digit": "string",
  "account_number": "string",
  "account_digit": "string",
  "extra1": "string",
  "extra1_digit": "string",
  "extra2": "string",
  "extra2_digit": "string",
  "extra3": "string",
  "payment_place": "string",
  "contract": "string",
  "contract_type": "string",
  "beneficiary_name": "string",
  "beneficiary_cnpj_cpf": "string",
  "beneficiary_address_street": "string",
  "beneficiary_address_street_number": "string",
  "beneficiary_address_complement": "string",
  "beneficiary_address_neighborhood": "string",
  "beneficiary_address_city": "string",
  "beneficiary_address_state": "string",
  "beneficiary_address_zipcode": "01310100",
  "beneficiary_address": "string",
  "bolepix_enabled_at": "string",
  "bolepix": {
    "pix_mode": 0,
    "pix_account": {},
    "pix_billing_options": {
      "kind": "instant",
      "interest": true,
      "fine": true,
      "discount": true,
      "revoke_days": true
    }
  },
  "name": "string",
  "status": "pending",
  "default": true,
  "configuration": null,
  "bank_contract": null,
  "custom_name": "string",
  "kind": "cnab400",
  "remittance_disabled": true,
  "remittance_disabled_at": "2024-01-15T10:30:00Z",
  "allow_expiration_on_weekends": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "created_via_api": true
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Carteira de cobrança criada

```
{
  "id": 1,
  "bank_contract_slug": "string",
  "next_our_number": 1,
  "next_remittance_number": 1,
  "agency_number": "string",
  "agency_digit": "string",
  "account_number": "string",
  "account_digit": "string",
  "extra1": "string",
  "extra1_digit": "string",
  "extra2": "string",
  "extra2_digit": "string",
  "extra3": "string",
  "payment_place": "string",
  "contract": "string",
  "contract_type": "string",
  "beneficiary_name": "string",
  "beneficiary_cnpj_cpf": "string",
  "beneficiary_address_street": "string",
  "beneficiary_address_street_number": "string",
  "beneficiary_address_complement": "string",
  "beneficiary_address_neighborhood": "string",
  "beneficiary_address_city": "string",
  "beneficiary_address_state": "string",
  "beneficiary_address_zipcode": "01310100",
  "beneficiary_address": "string",
  "bolepix_enabled_at": "string",
  "bolepix": {
    "pix_mode": 0,
    "pix_account_id": 1,
    "pix_account": {
      "id": 1,
      "uid": "string",
      "custom_name": "Conta Pix Kobana",
      "key": "+55999999999",
      "financial_provider_slug": "bradesco",
      "enabled": true,
      "default": true,
      "beneficiary": {
        "name": "string",
        "document": "12345678901",
        "address": {
          "street": "...",
          "number": "...",
          "complement": "...",
          "neighborhood": "...",
          "city_name": "...",
          "state": "...",
          "zip_code": "..."
        }
      }
    },
    "pix_billing_options": {
      "kind": "instant",
      "interest": true,
      "fine": true,
      "discount": true,
      "revoke_days": true
    }
  },
  "name": "string",
  "status": "pending",
  "default": true,
  "configuration": null,
  "bank_contract": null,
  "custom_name": "string",
  "kind": "cnab400",
  "remittance_disabled": true,
  "remittance_disabled_at": "2024-01-15T10:30:00Z",
  "allow_expiration_on_weekends": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "created_via_api": true
}
```


#### GET /v1/v1/bank_billet_accounts/{id}
**Description**: Informações da Carteira

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID da Carteira

**Response**:

Carteira encontrada

```
{
  "id": 1,
  "bank_contract_slug": "string",
  "next_our_number": 1,
  "next_remittance_number": 1,
  "agency_number": "string",
  "agency_digit": "string",
  "account_number": "string",
  "account_digit": "string",
  "extra1": "string",
  "extra1_digit": "string",
  "extra2": "string",
  "extra2_digit": "string",
  "extra3": "string",
  "payment_place": "string",
  "contract": "string",
  "contract_type": "string",
  "beneficiary_name": "string",
  "beneficiary_cnpj_cpf": "string",
  "beneficiary_address_street": "string",
  "beneficiary_address_street_number": "string",
  "beneficiary_address_complement": "string",
  "beneficiary_address_neighborhood": "string",
  "beneficiary_address_city": "string",
  "beneficiary_address_state": "string",
  "beneficiary_address_zipcode": "01310100",
  "beneficiary_address": "string",
  "bolepix_enabled_at": "string",
  "bolepix": {
    "pix_mode": 0,
    "pix_account_id": 1,
    "pix_account": {
      "id": 1,
      "uid": "string",
      "custom_name": "Conta Pix Kobana",
      "key": "+55999999999",
      "financial_provider_slug": "bradesco",
      "enabled": true,
      "default": true,
      "beneficiary": {
        "name": "string",
        "document": "12345678901",
        "address": {
          "street": "...",
          "number": "...",
          "complement": "...",
          "neighborhood": "...",
          "city_name": "...",
          "state": "...",
          "zip_code": "..."
        }
      }
    },
    "pix_billing_options": {
      "kind": "instant",
      "interest": true,
      "fine": true,
      "discount": true,
      "revoke_days": true
    }
  },
  "name": "string",
  "status": "pending",
  "default": true,
  "configuration": null,
  "bank_contract": null,
  "custom_name": "string",
  "kind": "cnab400",
  "remittance_disabled": true,
  "remittance_disabled_at": "2024-01-15T10:30:00Z",
  "allow_expiration_on_weekends": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "created_via_api": true
}
```


#### PUT /v1/v1/bank_billet_accounts/{id}
**Description**: Atualizar a Carteira

**Request Body** (application/json):

- Type: `v1_bank_billet_account_update_object`
- Properties:
  - `kind` (optional): string - Tipo de CNAB:
* `cnab400` CNAB 400
* `cnab240` CNAB 240
  - `bank_contract_slug` (optional): string - [Slug da Carteira](/reference/bancos-suportados).
                Carteiras ativas não poderão ter o campo bank_contract_slug alterados.
  - `payment_place` (optional): string - Local de Pagamento
  - `custom_name` (optional): string - Nome da Carteira para identificação dentro da Kobana.
  - `allow_expiration_on_weekends` (optional): boolean - Permitir vencimento em fim de semana e feriados
  - `beneficiary_name` (optional): string - Nome do Beneficiário
  - `beneficiary_cnpj_cpf` (optional): string - CNPJ/CPF do Beneficiário
  - `agency_number` (optional): string - Agência.
                A alteração da agência, somente é permitida enquanto a carteira não estiver homologada.
  - `agency_digit` (optional): string - Dígito da Agência.
                A alteração do dígito da agência, somente é permitida enquanto a carteira não estiver homologada.
  - `account_number` (optional): string - Número da Conta.
                A alteração do número da conta, somente é permitida enquanto a carteira não estiver homologada.
  - `account_digit` (optional): string - Dígito da Conta.
                A alteração do dígito da conta, somente é permitida enquanto a carteira não estiver homologada.
  - `extra1` (optional): string - Campo extra 1.
  - `extra1_digit` (optional): string - Digito do Campo extra 1.
  - `extra2` (optional): string - Campo extra 2.
  - `extra2_digit` (optional): string - Dígito do Campo extra 2.
  - `contract` (optional): string - Contrato
  - `contract_type` (optional): string - Tipo do Contrato
  - `extra3` (optional): string - Código de Remessa
  - `beneficiary_address_street` (optional): string - Rua do Beneficiário
  - `beneficiary_address_street_number` (optional): string - Numero da rua do Beneficiário
  - `beneficiary_address_complement` (optional): string - Complemento do endereço do Beneficiário
  - `beneficiary_address_neighborhood` (optional): string - Bairro do Beneficiário
  - `beneficiary_address_city` (optional): string - Cidade do Beneficiário
  - `beneficiary_address_state` (optional): string - Estado do Beneficiário
  - `beneficiary_address_zipcode` (optional): string - CEP do Beneficiário (formato 99999999)
  - `beneficiary_address` (optional): string - Endereço completo do Beneficiário.
  - `bolepix_enabled` (optional): boolean - Habilitar Bolepix
  - `bolepix` (optional): object - Configuração de Boleto Híbrido
  - `bolepix_key` (optional): string - Chave Pix que será usada no Bolepix
  - `default` (optional): boolean - Padrão.
                O campo `default` determina a carteira de cobrança que será usada na criação do boleto quando nenhuma carteira for informada.

                No momento que a primeira carteira é homologada (passa para o `status` = `active`), ela recebe o valor `default` = `true`
  - `remittance_disabled` (optional): boolean - Desabilita geração de remessas.
  - `next_our_number` (optional): integer - Último nosso número
  - `next_remittance_number` (optional): integer - Último sequencial da remessa Default: 1
  - `bank_billet_account_next_our_number_attributes` (optional): object - 
  - `bank_billet_account_next_remittance_number_attributes` (optional): object - 
- Example:
```
{
  "kind": "cnab400",
  "bank_contract_slug": "string",
  "payment_place": "string",
  "custom_name": "string",
  "allow_expiration_on_weekends": true,
  "beneficiary_name": "string",
  "beneficiary_cnpj_cpf": "string",
  "agency_number": "string",
  "agency_digit": "string",
  "account_number": "string",
  "account_digit": "string",
  "extra1": "string",
  "extra1_digit": "string",
  "extra2": "string",
  "extra2_digit": "string",
  "contract": "string",
  "contract_type": "string",
  "extra3": "string",
  "beneficiary_address_street": "string",
  "beneficiary_address_street_number": "string",
  "beneficiary_address_complement": "string",
  "beneficiary_address_neighborhood": "string",
  "beneficiary_address_city": "string",
  "beneficiary_address_state": "string",
  "beneficiary_address_zipcode": "01310100",
  "beneficiary_address": "string",
  "bolepix_enabled": true,
  "bolepix": {
    "pix_mode": 0,
    "pix_account": {},
    "pix_billing_options": {
      "kind": "instant",
      "interest": true,
      "fine": true,
      "discount": true,
      "revoke_days": true
    }
  },
  "bolepix_key": "string",
  "default": true,
  "remittance_disabled": true,
  "next_our_number": 1,
  "next_remittance_number": 1,
  "bank_billet_account_next_our_number_attributes": {
    "next_our_number": 1
  },
  "bank_billet_account_next_remittance_number_attributes": {
    "next_remittance_number": 1
  }
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID da Carteira

**Response**:

Carteira atualizada

#### GET /v1/v1/bank_billet_accounts/{id}/ask
**Description**: Solicitar Homologação da Carteira de Cobrança

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID da Carteira

**Response**:

Solicitação de homologação realizada com sucesso

```
{
  "id": 1,
  "bank_contract_slug": "string",
  "next_our_number": 1,
  "next_remittance_number": 1,
  "agency_number": "string",
  "agency_digit": "string",
  "account_number": "string",
  "account_digit": "string",
  "extra1": "string",
  "extra1_digit": "string",
  "extra2": "string",
  "extra2_digit": "string",
  "extra3": "string",
  "payment_place": "string",
  "contract": "string",
  "contract_type": "string",
  "beneficiary_name": "string",
  "beneficiary_cnpj_cpf": "string",
  "beneficiary_address_street": "string",
  "beneficiary_address_street_number": "string",
  "beneficiary_address_complement": "string",
  "beneficiary_address_neighborhood": "string",
  "beneficiary_address_city": "string",
  "beneficiary_address_state": "string",
  "beneficiary_address_zipcode": "01310100",
  "beneficiary_address": "string",
  "bolepix_enabled_at": "string",
  "bolepix": {
    "pix_mode": 0,
    "pix_account_id": 1,
    "pix_account": {
      "id": 1,
      "uid": "string",
      "custom_name": "Conta Pix Kobana",
      "key": "+55999999999",
      "financial_provider_slug": "bradesco",
      "enabled": true,
      "default": true,
      "beneficiary": {
        "name": "string",
        "document": "12345678901",
        "address": {
          "street": "...",
          "number": "...",
          "complement": "...",
          "neighborhood": "...",
          "city_name": "...",
          "state": "...",
          "zip_code": "..."
        }
      }
    },
    "pix_billing_options": {
      "kind": "instant",
      "interest": true,
      "fine": true,
      "discount": true,
      "revoke_days": true
    }
  },
  "name": "string",
  "status": "pending",
  "default": true,
  "configuration": null,
  "bank_contract": null,
  "custom_name": "string",
  "kind": "cnab400",
  "remittance_disabled": true,
  "remittance_disabled_at": "2024-01-15T10:30:00Z",
  "allow_expiration_on_weekends": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "created_via_api": true
}
```


#### PUT /v1/v1/bank_billet_accounts/{id}/set_default
**Description**: Alterar Carteira de Cobrança padrão

**Request Body** (application/json):

- Properties:
  - `default` (required): boolean - Define a Carteira padrão(Default: true) ou deixar de ser padrão(Default: false)
- Example:
```
{
  "default": true
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID da Carteira

**Response**:

Carteira definida com padrão com sucesso

#### PUT /v1/v1/bank_billet_accounts/{id}/validate
**Description**: Validar Carteira de Cobrança

**Request Body** (application/json):

- Properties:
  - `homologation_amount` (required): string - Valor recebido pelo boleto (R$) Ex.: 1,87
- Example:
```
{
  "homologation_amount": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID da Carteira

**Response**:

Carteira Homologada com sucesso

### Certificado

#### GET /v2/v2/admin/certificates
**Description**: Listar Certificados

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Certificados encontrados

```
{
  "status": 1,
  "data": [
    {
      "id": 1,
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "account_id": 1,
      "label": "Meu Certificado",
      "subaccounts": true,
      "common_name": "string",
      "issuer": "string",
      "cnpj_cpf": "16.974.923/0001-84",
      "created_via_api": true,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "expiration_date": "2024-01-15",
      "status": "draft",
      "created_by": "user"
    },
    {
      "id": 1,
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "account_id": 1,
      "label": "Meu Certificado",
      "subaccounts": true,
      "common_name": "string",
      "issuer": "string",
      "cnpj_cpf": "16.974.923/0001-84",
      "created_via_api": true,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "expiration_date": "2024-01-15",
      "status": "draft",
      "created_by": "user"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/admin/certificates
**Description**: Incluir um Certificado

**Request Body** (multipart/form-data):

- Type: `v2_certificate_create`
- Properties:
  - `label` (required): string - Nome dado ao certificado
  - `cnpj_cpf` (required): string - CPF/CNPJ
  - `subaccounts` (optional): boolean - Indica se o certificado está liberado para uso nas subcontas
  - `type` (required): string - Tipo do certificado:
Se o tipo do certificado for `CRT` é obrigatório enviar o `crt_file` e o `crt_private_key_file`, se o tipo for `PFX` é obrigatório `pfx_file` e `pfx_password`.

* `crt` CRT
* `pfx` PFX
  - `files` (required): object - Arquivo do certificado e senha.
Se o tipo do certificado for `CRT` é obrigatório enviar o `crt_file` e o `crt_private_key_file`, se o tipo for `PFX` é obrigatório `pfx_file` e `pfx_password`.
- Example:
```
{
  "label": "Meu Certificado",
  "cnpj_cpf": "16.974.923/0001-84",
  "subaccounts": true,
  "type": "crt",
  "files": {
    "crt_file": "string",
    "crt_private_key_file": "string",
    "pfx_file": "string",
    "pfx_password": "string"
  }
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Certificado incluído

```
{
  "status": 1,
  "data": {
    "id": 1,
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "account_id": 1,
    "label": "Meu Certificado",
    "subaccounts": true,
    "common_name": "string",
    "issuer": "string",
    "cnpj_cpf": "16.974.923/0001-84",
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "expiration_date": "2024-01-15",
    "status": "draft",
    "created_by": "user"
  }
}
```


### Clientes
Gerenciar clientes

#### GET /v1/v1/customers
**Description**: Listar Clientes

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Sucesso na listagem de clientes

```
[
  {
    "id": 1,
    "external_code": "C0001",
    "cnpj_cpf": "16.974.923/0001-84",
    "person_name": "João Silva",
    "contact_person": "string",
    "nickname": "string",
    "birthday": "2024-01-15",
    "email": "user@example.com",
    "email_cc": "user@example.com",
    "address": "Rua F, alamenda G",
    "address_complement": "string",
    "address_number": "string",
    "neighborhood": "Centro",
    "zipcode": "01310100",
    "state": "SP",
    "city_name": "São Paulo",
    "phone_number": "string",
    "mobile_local_code": "string",
    "mobile_number": "string",
    "ignore_email": true,
    "ignore_sms": true,
    "ignore_whatsapp": true,
    "notes": "string",
    "tags": [
      "string",
      "string"
    ],
    "tag_list": "string",
    "custom_data": {},
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "external_code": "C0001",
    "cnpj_cpf": "16.974.923/0001-84",
    "person_name": "João Silva",
    "contact_person": "string",
    "nickname": "string",
    "birthday": "2024-01-15",
    "email": "user@example.com",
    "email_cc": "user@example.com",
    "address": "Rua F, alamenda G",
    "address_complement": "string",
    "address_number": "string",
    "neighborhood": "Centro",
    "zipcode": "01310100",
    "state": "SP",
    "city_name": "São Paulo",
    "phone_number": "string",
    "mobile_local_code": "string",
    "mobile_number": "string",
    "ignore_email": true,
    "ignore_sms": true,
    "ignore_whatsapp": true,
    "notes": "string",
    "tags": [
      "string",
      "string"
    ],
    "tag_list": "string",
    "custom_data": {},
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### POST /v1/v1/customers
**Description**: Criar um Cliente

**Request Body** (application/json):

- Type: `v1_customer_object`
- Properties:
  - `id` (optional): integer - ID
  - `external_code` (optional): string - Código Externo
  - `cnpj_cpf` (optional): string - CPF/CNPJ
  - `person_name` (required): string - Nome ou Razão Social
  - `contact_person` (optional): string - Pessoa de Contato (quando Empresa)
  - `nickname` (optional): string - Apelido ou Nome Fantasia do Pagador
  - `birthday` (optional): string - Data de Nascimento
  - `email` (optional): string - E-mail principal
  - `email_cc` (optional): string - E-mail alternativo
  - `address` (required): string - Endereço
  - `address_complement` (optional): string - Complemento do Endereço
  - `address_number` (optional): string - Número
  - `neighborhood` (required): string - Bairro
  - `zipcode` (required): string - CEP (formato 99999999)
  - `state` (optional): string - Estado
  - `city_name` (required): string - Cidade (Nome deve estar correto e completo)
  - `phone_number` (optional): string - Telefone (com DDD)
  - `mobile_local_code` (optional): string - DDD do Celular
  - `mobile_number` (optional): string - Celular
  - `ignore_email` (optional): boolean - Nunca enviar e-mail para este cliente
  - `ignore_sms` (optional): boolean - Nunca enviar SMS para este cliente
  - `ignore_whatsapp` (optional): boolean - Nunca enviar Whatsapp para este cliente
  - `notes` (optional): string - Anotações
  - `tags` (optional): array - Tags associadas ao registro
  - `tag_list` (optional): string - Tags associadas ao registro
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `created_via_api` (optional): boolean - Indica se o registro foi criado por API
  - `created_at` (optional): string - Data e hora de criação do registro
  - `updated_at` (optional): string - Data e hora da última atualização do registro
- Example:
```
{
  "id": 1,
  "external_code": "C0001",
  "cnpj_cpf": "16.974.923/0001-84",
  "person_name": "João Silva",
  "contact_person": "string",
  "nickname": "string",
  "birthday": "2024-01-15",
  "email": "user@example.com",
  "email_cc": "user@example.com",
  "address": "Rua F, alamenda G",
  "address_complement": "string",
  "address_number": "string",
  "neighborhood": "Centro",
  "zipcode": "01310100",
  "state": "SP",
  "city_name": "São Paulo",
  "phone_number": "string",
  "mobile_local_code": "string",
  "mobile_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "custom_data": {},
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Cliente criado

```
{
  "id": 1,
  "external_code": "C0001",
  "cnpj_cpf": "16.974.923/0001-84",
  "person_name": "João Silva",
  "contact_person": "string",
  "nickname": "string",
  "birthday": "2024-01-15",
  "email": "user@example.com",
  "email_cc": "user@example.com",
  "address": "Rua F, alamenda G",
  "address_complement": "string",
  "address_number": "string",
  "neighborhood": "Centro",
  "zipcode": "01310100",
  "state": "SP",
  "city_name": "São Paulo",
  "phone_number": "string",
  "mobile_local_code": "string",
  "mobile_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "custom_data": {},
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### GET /v1/v1/customers/cnpj_cpf
**Description**: Busca Cliente por CNPJ/CPF

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `q` (query, string) (required): CNPJ/CPF do cliente

**Response**:

Cliente encontrado

```
{
  "id": 1,
  "external_code": "C0001",
  "cnpj_cpf": "16.974.923/0001-84",
  "person_name": "João Silva",
  "contact_person": "string",
  "nickname": "string",
  "birthday": "2024-01-15",
  "email": "user@example.com",
  "email_cc": "user@example.com",
  "address": "Rua F, alamenda G",
  "address_complement": "string",
  "address_number": "string",
  "neighborhood": "Centro",
  "zipcode": "01310100",
  "state": "SP",
  "city_name": "São Paulo",
  "phone_number": "string",
  "mobile_local_code": "string",
  "mobile_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "custom_data": {},
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### GET /v1/v1/customers/email
**Description**: Busca Cliente por E-mail

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `q` (query, string) (required): E-mail do cliente

**Response**:

Cliente encontrado

```
{
  "id": 1,
  "external_code": "C0001",
  "cnpj_cpf": "16.974.923/0001-84",
  "person_name": "João Silva",
  "contact_person": "string",
  "nickname": "string",
  "birthday": "2024-01-15",
  "email": "user@example.com",
  "email_cc": "user@example.com",
  "address": "Rua F, alamenda G",
  "address_complement": "string",
  "address_number": "string",
  "neighborhood": "Centro",
  "zipcode": "01310100",
  "state": "SP",
  "city_name": "São Paulo",
  "phone_number": "string",
  "mobile_local_code": "string",
  "mobile_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "custom_data": {},
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### GET /v1/v1/customers/{id}
**Description**: Visualizar o Cliente

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Cliente

**Response**:

Cliente encontrado

```
{
  "id": 1,
  "external_code": "C0001",
  "cnpj_cpf": "16.974.923/0001-84",
  "person_name": "João Silva",
  "contact_person": "string",
  "nickname": "string",
  "birthday": "2024-01-15",
  "email": "user@example.com",
  "email_cc": "user@example.com",
  "address": "Rua F, alamenda G",
  "address_complement": "string",
  "address_number": "string",
  "neighborhood": "Centro",
  "zipcode": "01310100",
  "state": "SP",
  "city_name": "São Paulo",
  "phone_number": "string",
  "mobile_local_code": "string",
  "mobile_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "custom_data": {},
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### PUT /v1/v1/customers/{id}
**Description**: Atualizar Cliente

**Request Body** (application/json):

- Type: `v1_customer_update_object`
- Properties:
  - `id` (optional): integer - ID
  - `external_code` (optional): string - Código Externo
  - `person_name` (required): string - Nome ou Razão Social
  - `contact_person` (optional): string - Pessoa de Contato (quando Empresa)
  - `nickname` (optional): string - Apelido ou Nome Fantasia do Pagador
  - `birthday` (optional): string - Data de Nascimento
  - `email` (optional): string - E-mail principal
  - `email_cc` (optional): string - E-mail alternativo
  - `address` (required): string - Endereço
  - `address_complement` (optional): string - Complemento do Endereço
  - `address_number` (optional): string - Número
  - `neighborhood` (required): string - Bairro
  - `zipcode` (required): string - CEP (formato 99999999)
  - `state` (optional): string - Estado
  - `city_name` (required): string - Cidade (Nome deve estar correto e completo)
  - `phone_number` (optional): string - Telefone (com DDD)
  - `mobile_local_code` (optional): string - DDD do Celular
  - `mobile_number` (optional): string - Celular
  - `ignore_email` (optional): boolean - Nunca enviar e-mail para este cliente
  - `ignore_sms` (optional): boolean - Nunca enviar SMS para este cliente
  - `ignore_whatsapp` (optional): boolean - Nunca enviar Whatsapp para este cliente
  - `notes` (optional): string - Anotações
  - `tags` (optional): array - Tags associadas ao registro
  - `tag_list` (optional): string - Tags associadas ao registro
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `created_via_api` (optional): boolean - Indica se o registro foi criado por API
  - `created_at` (optional): string - Data e hora de criação do registro
  - `updated_at` (optional): string - Data e hora da última atualização do registro
- Example:
```
{
  "id": 1,
  "external_code": "C0001",
  "person_name": "João Silva",
  "contact_person": "string",
  "nickname": "string",
  "birthday": "2024-01-15",
  "email": "user@example.com",
  "email_cc": "user@example.com",
  "address": "Rua F, alamenda G",
  "address_complement": "string",
  "address_number": "string",
  "neighborhood": "Centro",
  "zipcode": "01310100",
  "state": "SP",
  "city_name": "São Paulo",
  "phone_number": "string",
  "mobile_local_code": "string",
  "mobile_number": "string",
  "ignore_email": true,
  "ignore_sms": true,
  "ignore_whatsapp": true,
  "notes": "string",
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "custom_data": {},
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `id` (path, string) (required): ID do Cliente
- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Cliente atualizado

### Conexões

#### GET /v2/v2/admin/connections
**Description**: Listar Conexões

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `provider_slug` (query, string) (optional): Provedor financeiro
- `certificate_uid` (query, string) (optional): UUID do Certificado
- `enabled` (query, boolean) (optional): Conexões habilitadas
- `validated` (query, boolean) (optional): Conexões validadas
- `created_from` (query, string) (optional): Data inicial do filtro de data de criação da conexão.
- `created_to` (query, string) (optional): Data final do filtro de data de criação da conexão.

**Response**:

Conexões encontradas

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "label": "string",
      "provider_slug": "string",
      "environment": "production",
      "apis": [
        "string",
        "string"
      ],
      "credentials": {},
      "certificate_uid": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "enabled_at": "2024-01-15T10:30:00Z",
      "validated_at": "2024-01-15T10:30:00Z",
      "associations": [
        {
          "resource": "..."
        },
        {
          "resource": "..."
        }
      ]
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "label": "string",
      "provider_slug": "string",
      "environment": "production",
      "apis": [
        "string",
        "string"
      ],
      "credentials": {},
      "certificate_uid": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "enabled_at": "2024-01-15T10:30:00Z",
      "validated_at": "2024-01-15T10:30:00Z",
      "associations": [
        {
          "resource": "..."
        },
        {
          "resource": "..."
        }
      ]
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/admin/connections
**Description**: Incluir uma Conexão

**Request Body** (application/json):


**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Conexão criada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "label": "string",
    "provider_slug": "string",
    "environment": "production",
    "apis": [
      "string",
      "string"
    ],
    "credentials": {},
    "certificate_uid": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "enabled_at": "2024-01-15T10:30:00Z",
    "validated_at": "2024-01-15T10:30:00Z",
    "associations": [
      {
        "resource": {
          "type": "...",
          "uid": "..."
        }
      },
      {
        "resource": {
          "type": "...",
          "uid": "..."
        }
      }
    ]
  }
}
```


#### DELETE /v2/v2/admin/connections/{uid}
**Description**: Excluir uma Conexão

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `uid` (path, string) (required): UUID da Conexão

**Response**:

Conexão

#### GET /v2/v2/admin/connections/{uid}
**Description**: Informações da conexão

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `uid` (path, string) (required): UID da Conexão

**Response**:

Conexão encontrada

```
{
  "uid": "123e4567-e89b-12d3-a456-426614174000",
  "label": "string",
  "provider_slug": "string",
  "environment": "production",
  "apis": [
    "string",
    "string"
  ],
  "credentials": {},
  "certificate_uid": "123e4567-e89b-12d3-a456-426614174000",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "enabled_at": "2024-01-15T10:30:00Z",
  "validated_at": "2024-01-15T10:30:00Z",
  "associations": [
    {
      "resource": {
        "type": "charge.bank_billet_account",
        "uid": "14a31e1b-6fa5-4825-8e54-61579842d520"
      }
    },
    {
      "resource": {
        "type": "charge.bank_billet_account",
        "uid": "14a31e1b-6fa5-4825-8e54-61579842d520"
      }
    }
  ]
}
```


#### PUT /v2/v2/admin/connections/{uid}
**Description**: Atualizar Conexão

**Request Body** (application/json):

- Type: `v2_connection_update`
- Properties:
  - `label` (optional): string - Nome da Conexão
  - `environment` (optional): string - Ambiente de conexão com o provedor financeiro.

`production`: Produção.
`homologation`: Homologação

* Esse campo será ignorado no nosso ambiente de Sandbox

  - `apis` (optional): array - APIs permitidas para o provedor financeiro.

`charge/bank_billet`: Boleto.
`charge/pix`: Pix

  - `credentials` (optional): object - Credenciais.

  - `certificate_uid` (optional): string - UUID do Certificado.
  - `enabled` (optional): boolean - Habilita conexão
  - `revalidate` (optional): boolean - Revalida as credenciais no provedor financeiro. Se passado true, a conexão só será alterada se as credenciais e permissões forem válidas.
- Example:
```
{
  "label": "string",
  "environment": "production",
  "apis": [
    "string",
    "string"
  ],
  "credentials": {},
  "certificate_uid": "123e4567-e89b-12d3-a456-426614174000",
  "enabled": true,
  "revalidate": true
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `uid` (path, string) (required): UUID da Conexão

**Response**:

Conexão atualizada

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "label": "string",
      "provider_slug": "string",
      "environment": "production",
      "apis": [
        "string",
        "string"
      ],
      "credentials": {},
      "certificate_uid": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "enabled_at": "2024-01-15T10:30:00Z",
      "validated_at": "2024-01-15T10:30:00Z",
      "associations": [
        {
          "resource": "..."
        },
        {
          "resource": "..."
        }
      ]
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "label": "string",
      "provider_slug": "string",
      "environment": "production",
      "apis": [
        "string",
        "string"
      ],
      "credentials": {},
      "certificate_uid": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "enabled_at": "2024-01-15T10:30:00Z",
      "validated_at": "2024-01-15T10:30:00Z",
      "associations": [
        {
          "resource": "..."
        },
        {
          "resource": "..."
        }
      ]
    }
  ]
}
```


#### DELETE /v2/v2/admin/connections/{uid}/associations
**Description**: Desconectar Conta de Serviço

**Request Body** (application/json):

- Type: `v2_association`
- Properties:
  - `resource` (required): object - 
- Example:
```
{
  "resource": {
    "type": "charge.bank_billet_account",
    "uid": "14a31e1b-6fa5-4825-8e54-61579842d520"
  }
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `uid` (path, string) (required): UUID da Conexão

**Response**:

Conexão

#### POST /v2/v2/admin/connections/{uid}/associations
**Description**: Conectar Conta de Serviço

**Request Body** (application/json):

- Type: `v2_association`
- Properties:
  - `resource` (required): object - 
- Example:
```
{
  "resource": {
    "type": "charge.bank_billet_account",
    "uid": "14a31e1b-6fa5-4825-8e54-61579842d520"
  }
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `uid` (path, string) (required): UUID da Conexão

**Response**:

Associação criada

### Consulta de Boletos

#### GET /v2/v2/data/bank_billet_queries
**Description**: Listar Consultas de Boletos

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Sucesso na listagem de consultas de boletos

```
{
  "status": 1,
  "data": [
    {
      "uid": "string",
      "status": "pending",
      "error_message": "string",
      "line_or_barcode": "string",
      "line": "34191.79001 01043.510047 91020.150008 7 75870000001000",
      "barcode": "34197758700000010001790010104351004791020150",
      "expire_at": "2024-01-15",
      "amount": 30,
      "minimum_amount": 20,
      "maximum_amount": 50,
      "original_amount": 25,
      "beneficiary": {
        "document_number": "111.321.322-09",
        "name": "João da Silva"
      },
      "guarantor": {
        "document_number": "111.321.322-09",
        "name": "João da Silva"
      },
      "payer": {
        "document_number": "111.321.322-09",
        "name": "João da Silva"
      },
      "fine": {},
      "interest": {},
      "discount": {},
      "external_id": "string",
      "custom_data": {},
      "tags": [
        "string",
        "string"
      ],
      "created_via_api": true,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "string",
      "status": "pending",
      "error_message": "string",
      "line_or_barcode": "string",
      "line": "34191.79001 01043.510047 91020.150008 7 75870000001000",
      "barcode": "34197758700000010001790010104351004791020150",
      "expire_at": "2024-01-15",
      "amount": 30,
      "minimum_amount": 20,
      "maximum_amount": 50,
      "original_amount": 25,
      "beneficiary": {
        "document_number": "111.321.322-09",
        "name": "João da Silva"
      },
      "guarantor": {
        "document_number": "111.321.322-09",
        "name": "João da Silva"
      },
      "payer": {
        "document_number": "111.321.322-09",
        "name": "João da Silva"
      },
      "fine": {},
      "interest": {},
      "discount": {},
      "external_id": "string",
      "custom_data": {},
      "tags": [
        "string",
        "string"
      ],
      "created_via_api": true,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/data/bank_billet_queries
**Description**: Criar uma Consulta de Boleto

**Request Body** (application/json):

- Type: `v2_bank_billet_query`
- Properties:
  - `uid` (optional): string - ID único do registro no formato UUID
  - `status` (optional): string - Situação da consulta:
* `pending` Pendente (somente quando configurado para não processar automaticamente)
* `success` Realizada com sucesso
* `error` Falha na consulta
  - `error_message` (optional): string - Mensagem de erro quando a consulta é processada mas os dados não são retornados.
  - `line_or_barcode` (optional): string - Linha Digitável ou Código de Barras, nos formatos:
Linha Digitável: 34191.79001 01043.510047 91020.150008 7 75870000001000
Código de Barras: 34197758700000010001790010104351004791020150
  - `line` (optional): string - Linha Digitável
  - `barcode` (optional): string - Código de Barras
  - `expire_at` (optional): string - Data de Vencimento
  - `amount` (optional): number - Valor a pagar
  - `minimum_amount` (optional): number - Valor mínimo
  - `maximum_amount` (optional): number - Valor máximo
  - `original_amount` (optional): number - Valor original
  - `beneficiary` (optional): object - Dados do Beneficiário
  - `guarantor` (optional): object - Dados do Beneficiário Final
  - `payer` (optional): object - Dados do Pagador
  - `fine` (optional): object - Multa
  - `interest` (optional): object - Juros
  - `discount` (optional): object - Desconto
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `tags` (optional): array - Tags associadas
  - `created_via_api` (optional): boolean - Indica se o registro foi criado por API
  - `created_at` (optional): string - Data e hora de criação do registro
  - `updated_at` (optional): string - Data e hora da última atualização do registro
- Example:
```
{
  "uid": "string",
  "status": "pending",
  "error_message": "string",
  "line_or_barcode": "string",
  "line": "34191.79001 01043.510047 91020.150008 7 75870000001000",
  "barcode": "34197758700000010001790010104351004791020150",
  "expire_at": "2024-01-15",
  "amount": 30,
  "minimum_amount": 20,
  "maximum_amount": 50,
  "original_amount": 25,
  "beneficiary": {
    "document_number": "111.321.322-09",
    "name": "João da Silva"
  },
  "guarantor": {
    "document_number": "111.321.322-09",
    "name": "João da Silva"
  },
  "payer": {
    "document_number": "111.321.322-09",
    "name": "João da Silva"
  },
  "fine": {},
  "interest": {},
  "discount": {},
  "external_id": "string",
  "custom_data": {},
  "tags": [
    "string",
    "string"
  ],
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Consulta de Boleto criada

```
{
  "status": 1,
  "data": {
    "uid": "string",
    "status": "pending",
    "error_message": "string",
    "line_or_barcode": "string",
    "line": "34191.79001 01043.510047 91020.150008 7 75870000001000",
    "barcode": "34197758700000010001790010104351004791020150",
    "expire_at": "2024-01-15",
    "amount": 30,
    "minimum_amount": 20,
    "maximum_amount": 50,
    "original_amount": 25,
    "beneficiary": {
      "document_number": "111.321.322-09",
      "name": "João da Silva"
    },
    "guarantor": {
      "document_number": "111.321.322-09",
      "name": "João da Silva"
    },
    "payer": {
      "document_number": "111.321.322-09",
      "name": "João da Silva"
    },
    "fine": {},
    "interest": {},
    "discount": {},
    "external_id": "string",
    "custom_data": {},
    "tags": [
      "string",
      "string"
    ],
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


### Conta Pix

#### GET /v2/v2/charge/pix_accounts
**Description**: Listar Contas Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Contas Pix encontradas

```
{
  "status": 1,
  "data": [
    {
      "id": 1,
      "custom_name": "string",
      "financial_provider_slug": "bradesco",
      "enabled": true,
      "key": "+55999999999",
      "default": null,
      "beneficiary": {
        "document_number": "string",
        "name": "Nome do Beneficiário",
        "address": {
          "street": "...",
          "number": "...",
          "complement": "...",
          "neighborhood": "...",
          "city_name": "...",
          "state": "..."
        }
      },
      "created_at": "string",
      "updated_at": "string"
    },
    {
      "id": 1,
      "custom_name": "string",
      "financial_provider_slug": "bradesco",
      "enabled": true,
      "key": "+55999999999",
      "default": null,
      "beneficiary": {
        "document_number": "string",
        "name": "Nome do Beneficiário",
        "address": {
          "street": "...",
          "number": "...",
          "complement": "...",
          "neighborhood": "...",
          "city_name": "...",
          "state": "..."
        }
      },
      "created_at": "string",
      "updated_at": "string"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/charge/pix_accounts
**Description**: Criar Pix Account

**Request Body** (application/json):

- Type: `v2_pix_account`
- Properties:
  - `id` (optional): integer - ID da Conta Pix
  - `custom_name` (optional): string - Nome customizado da conta pix
  - `financial_provider_slug` (required): string - Slug do provedor financeiro
  - `enabled` (optional): boolean - Habilitar Conta Pix
  - `key` (required): string - Chave pix
  - `default` (optional): bool - Conta default
  - `beneficiary` (optional): object - Beneficiário
  - `created_at` (optional): string - Data de criação do registro
  - `updated_at` (optional): string - Data de atualização do registro
- Example:
```
{
  "id": 1,
  "custom_name": "string",
  "financial_provider_slug": "bradesco",
  "enabled": true,
  "key": "+55999999999",
  "default": null,
  "beneficiary": {
    "document_number": "string",
    "name": "Nome do Beneficiário",
    "address": {
      "street": "Rua do Beneficiário",
      "number": "123",
      "complement": "Apto 101",
      "neighborhood": "Bairro do Beneficiário",
      "city_name": "Cidade do Beneficiário",
      "state": "SP"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Conta Pix criada

```
{
  "status": 1,
  "data": {
    "id": 1,
    "custom_name": "string",
    "financial_provider_slug": "bradesco",
    "enabled": true,
    "key": "+55999999999",
    "default": null,
    "beneficiary": {
      "document_number": "string",
      "name": "Nome do Beneficiário",
      "address": {
        "street": "Rua do Beneficiário",
        "number": "123",
        "complement": "Apto 101",
        "neighborhood": "Bairro do Beneficiário",
        "city_name": "Cidade do Beneficiário",
        "state": "SP"
      }
    },
    "created_at": "string",
    "updated_at": "string"
  }
}
```


#### DELETE /v2/v2/charge/pix_accounts/{uid}
**Description**: Deletar Pix Account

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UID da Conta Pix

**Response**:

Conta Pix deletada

```
{
  "status": 1,
  "data": {
    "id": 1,
    "custom_name": "string",
    "financial_provider_slug": "bradesco",
    "enabled": true,
    "key": "+55999999999",
    "default": null,
    "beneficiary": {
      "document_number": "string",
      "name": "Nome do Beneficiário",
      "address": {
        "street": "Rua do Beneficiário",
        "number": "123",
        "complement": "Apto 101",
        "neighborhood": "Bairro do Beneficiário",
        "city_name": "Cidade do Beneficiário",
        "state": "SP"
      }
    },
    "created_at": "string",
    "updated_at": "string"
  }
}
```


#### GET /v2/v2/charge/pix_accounts/{uid}
**Description**: Visualizar uma conta Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UID da Conta Pix

**Response**:

Conta Pix encontrada

```
{
  "status": 1,
  "data": {
    "id": 1,
    "custom_name": "string",
    "financial_provider_slug": "bradesco",
    "enabled": true,
    "key": "+55999999999",
    "default": null,
    "beneficiary": {
      "document_number": "string",
      "name": "Nome do Beneficiário",
      "address": {
        "street": "Rua do Beneficiário",
        "number": "123",
        "complement": "Apto 101",
        "neighborhood": "Bairro do Beneficiário",
        "city_name": "Cidade do Beneficiário",
        "state": "SP"
      }
    },
    "created_at": "string",
    "updated_at": "string"
  }
}
```


#### PUT /v2/v2/charge/pix_accounts/{uid}
**Description**: Atualizar Pix Account

**Request Body** (application/json):

- Type: `v2_pix_account`
- Properties:
  - `id` (optional): integer - ID da Conta Pix
  - `custom_name` (optional): string - Nome customizado da conta pix
  - `financial_provider_slug` (required): string - Slug do provedor financeiro
  - `enabled` (optional): boolean - Habilitar Conta Pix
  - `key` (required): string - Chave pix
  - `default` (optional): bool - Conta default
  - `beneficiary` (optional): object - Beneficiário
  - `created_at` (optional): string - Data de criação do registro
  - `updated_at` (optional): string - Data de atualização do registro
- Example:
```
{
  "id": 1,
  "custom_name": "string",
  "financial_provider_slug": "bradesco",
  "enabled": true,
  "key": "+55999999999",
  "default": null,
  "beneficiary": {
    "document_number": "string",
    "name": "Nome do Beneficiário",
    "address": {
      "street": "Rua do Beneficiário",
      "number": "123",
      "complement": "Apto 101",
      "neighborhood": "Bairro do Beneficiário",
      "city_name": "Cidade do Beneficiário",
      "state": "SP"
    }
  },
  "created_at": "string",
  "updated_at": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `uid` (path, string) (required): UID da Conta Pix

**Response**:

Conta Pix atualizada

```
{
  "status": 1,
  "data": {
    "id": 1,
    "custom_name": "string",
    "financial_provider_slug": "bradesco",
    "enabled": true,
    "key": "+55999999999",
    "default": null,
    "beneficiary": {
      "document_number": "string",
      "name": "Nome do Beneficiário",
      "address": {
        "street": "Rua do Beneficiário",
        "number": "123",
        "complement": "Apto 101",
        "neighborhood": "Bairro do Beneficiário",
        "city_name": "Cidade do Beneficiário",
        "state": "SP"
      }
    },
    "created_at": "string",
    "updated_at": "string"
  }
}
```


### Contas

#### GET /v2/v2/financial/accounts
**Description**: Listar Contas

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Contas encontradas

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "kind": "string",
      "account_number": "string",
      "account_digit": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "financial_provider_slug": "string",
      "bank_number": 1,
      "created_at": "2024-01-15T10:30:00Z",
      "custom_data": {},
      "custom_name": "string",
      "external_id": "123456-abc-789",
      "payment_agreement_code": "string",
      "person_info": {
        "document_number": "111.321.322-09",
        "name": "João da Silva"
      },
      "tags": [
        "tag 1",
        "tag 1"
      ],
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "kind": "string",
      "account_number": "string",
      "account_digit": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "financial_provider_slug": "string",
      "bank_number": 1,
      "created_at": "2024-01-15T10:30:00Z",
      "custom_data": {},
      "custom_name": "string",
      "external_id": "123456-abc-789",
      "payment_agreement_code": "string",
      "person_info": {
        "document_number": "111.321.322-09",
        "name": "João da Silva"
      },
      "tags": [
        "tag 1",
        "tag 1"
      ],
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/financial/accounts
**Description**: Criar uma Conta

**Request Body** (application/json):

- Type: `v2_financial_account`
- Properties:
  - `uid` (optional): string - UID da Conta Financeira
  - `kind` (optional): string - Tipo da Conta

`checking`: Conta Corrente
`savings`: Conta Poupança
`payment`: Conta Pagamento

  - `account_number` (required): string - Número da Conta
  - `account_digit` (required): string - Dígito da Conta
  - `agency_number` (required): string - Número da Agência
  - `agency_digit` (optional): string - Dígito da Agência
  - `financial_provider_slug` (required): string - Provedor Financeiro
  - `bank_number` (optional): integer - Número COMPE do Banco. Obrigatório se bank_id não for informado.
  - `created_at` (optional): string - Data da criação. Formato iso8601
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON. Opcional para controle interno.
  - `custom_name` (optional): string - Nome da Conta Financeira para identificação dentro da Kobana.
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `payment_agreement_code` (optional): string - Número do Convênio de Pagamento contratado junto ao Banco.
  - `person_info` (optional): object - Dados do Titular
  - `tags` (optional): array - Tags associadas a importação. Opcional para controle interno.
  - `updated_at` (optional): string - Data da última atualização. Formato iso8601
- Example:
```
{
  "uid": "123e4567-e89b-12d3-a456-426614174000",
  "kind": "string",
  "account_number": "string",
  "account_digit": "string",
  "agency_number": "string",
  "agency_digit": "string",
  "financial_provider_slug": "string",
  "bank_number": 1,
  "created_at": "2024-01-15T10:30:00Z",
  "custom_data": {},
  "custom_name": "string",
  "external_id": "123456-abc-789",
  "payment_agreement_code": "string",
  "person_info": {
    "document_number": "111.321.322-09",
    "name": "João da Silva"
  },
  "tags": [
    "tag 1",
    "tag 1"
  ],
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Conta criada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "kind": "string",
    "account_number": "string",
    "account_digit": "string",
    "agency_number": "string",
    "agency_digit": "string",
    "financial_provider_slug": "string",
    "bank_number": 1,
    "created_at": "2024-01-15T10:30:00Z",
    "custom_data": {},
    "custom_name": "string",
    "external_id": "123456-abc-789",
    "payment_agreement_code": "string",
    "person_info": {
      "document_number": "111.321.322-09",
      "name": "João da Silva"
    },
    "tags": [
      "tag 1",
      "tag 1"
    ],
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### POST /v2/v2/financial/accounts/{financial_account_uid}/balances
**Description**: Criar um saldo

**Request Body** (application/json):

- Type: `v2_financial_account_balance`
- Properties:
  - `uid` (optional): string - UID do Saldo
  - `amount` (optional): number - Valor do saldo
  - `blocked_amount` (optional): number - Valor bloqueado
  - `automatically_invested_amount` (optional): number - Valor automaticamente investido
  - `created_at` (optional): string - Data da criação. Formato iso8601
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON. Opcional para controle interno.
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `tags` (optional): array - Tags associadas a importação. Opcional para controle interno.
- Example:
```
{
  "uid": "123e4567-e89b-12d3-a456-426614174000",
  "amount": 124,
  "blocked_amount": 24,
  "automatically_invested_amount": 50,
  "created_at": "2024-01-15T10:30:00Z",
  "custom_data": {},
  "external_id": "123456-abc-789",
  "tags": [
    "tag 1",
    "tag 1"
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `financial_account_uid` (path, string) (required): UUID da Conta Financeira

**Response**:

Saldo criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 124,
    "blocked_amount": 24,
    "automatically_invested_amount": 50,
    "created_at": "2024-01-15T10:30:00Z",
    "custom_data": {},
    "external_id": "123456-abc-789",
    "tags": [
      "tag 1",
      "tag 1"
    ]
  }
}
```


#### GET /v2/v2/financial/accounts/{financial_account_uid}/commands
**Description**: Listar Comandos de uma Conta

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `financial_account_uid` (path, string) (required): UUID da Conta Financeira

**Response**:

Comandos encontrado

```
{
  "status": 1,
  "data": [
    {
      "id": 1,
      "status": "string",
      "operation": "string",
      "params": {},
      "payload": {},
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "financial_account": {
        "uid": "...",
        "kind": "...",
        "account_number": "...",
        "account_digit": "...",
        "agency_number": "...",
        "agency_digit": "...",
        "financial_provider_slug": "...",
        "bank_number": "...",
        "created_at": "...",
        "custom_data": "...",
        "custom_name": "...",
        "external_id": "...",
        "payment_agreement_code": "...",
        "person_info": "...",
        "tags": "...",
        "updated_at": "..."
      }
    },
    {
      "id": 1,
      "status": "string",
      "operation": "string",
      "params": {},
      "payload": {},
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "financial_account": {
        "uid": "...",
        "kind": "...",
        "account_number": "...",
        "account_digit": "...",
        "agency_number": "...",
        "agency_digit": "...",
        "financial_provider_slug": "...",
        "bank_number": "...",
        "created_at": "...",
        "custom_data": "...",
        "custom_name": "...",
        "external_id": "...",
        "payment_agreement_code": "...",
        "person_info": "...",
        "tags": "...",
        "updated_at": "..."
      }
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### GET /v2/v2/financial/accounts/{financial_account_uid}/commands/{id}
**Description**: Visualizar um Comando

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `financial_account_uid` (path, string) (required): UUID da Conta Financeira
- `id` (path, string) (required): ID do Comando

**Response**:

Comando encontrada

```
{
  "status": 1,
  "data": {
    "id": 1,
    "status": "string",
    "operation": "string",
    "params": {},
    "payload": {},
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "financial_account": {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "kind": "string",
      "account_number": "string",
      "account_digit": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "financial_provider_slug": "string",
      "bank_number": 1,
      "created_at": "2024-01-15T10:30:00Z",
      "custom_data": {},
      "custom_name": "string",
      "external_id": "123456-abc-789",
      "payment_agreement_code": "string",
      "person_info": {
        "document_number": "...",
        "name": "..."
      },
      "tags": [
        "...",
        "..."
      ],
      "updated_at": "2024-01-15T10:30:00Z"
    }
  }
}
```


#### GET /v2/v2/financial/accounts/{id}
**Description**: Visualizar uma Conta

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): UUID ou External ID da Conta Financeira
- `field` (query, string) (optional): Campo para buscar o ID. Exemplo: `uid` ou `external_id`

**Response**:

Conta encontrada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "kind": "string",
    "account_number": "string",
    "account_digit": "string",
    "agency_number": "string",
    "agency_digit": "string",
    "financial_provider_slug": "string",
    "bank_number": 1,
    "created_at": "2024-01-15T10:30:00Z",
    "custom_data": {},
    "custom_name": "string",
    "external_id": "123456-abc-789",
    "payment_agreement_code": "string",
    "person_info": {
      "document_number": "111.321.322-09",
      "name": "João da Silva"
    },
    "tags": [
      "tag 1",
      "tag 1"
    ],
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### PUT /v2/v2/financial/accounts/{id}
**Description**: Atualizar Conta

**Request Body** (application/json):

- Type: `v2_financial_account_update`
- Properties:
  - `kind` (optional): string - Tipo da Conta

`checking`: Conta Corrente
`savings`: Conta Poupança
`payment`: Conta Pagamento

  - `account_number` (optional): string - Número da Conta
  - `account_digit` (optional): string - Dígito da Conta
  - `agency_number` (optional): string - Número da Agência
  - `agency_digit` (optional): string - Dígito da Agência
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON. Opcional para controle interno.
  - `custom_name` (optional): string - Nome da Conta Financeira para identificação dentro da Kobana.
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `payment_agreement_code` (optional): string - Número do Convênio de Pagamento contratado junto ao Banco.
  - `person_info` (optional): object - Dados do Titular
  - `tags` (optional): array - Tags associadas a importação. Opcional para controle interno.
- Example:
```
{
  "kind": "string",
  "account_number": "string",
  "account_digit": "string",
  "agency_number": "string",
  "agency_digit": "string",
  "custom_data": {},
  "custom_name": "string",
  "external_id": "123456-abc-789",
  "payment_agreement_code": "string",
  "person_info": {
    "document_number": "111.321.322-09",
    "name": "João da Silva"
  },
  "tags": [
    "tag 1",
    "tag 1"
  ]
}
```

**Parameters**:

- `id` (path, string) (required): UUID ou External ID da Conta Financeira
- `field` (query, string) (optional): Campo para buscar o ID. Exemplo: `uid` ou `external_id`

**Response**:

Conta Financeira atualizada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "kind": "string",
    "account_number": "string",
    "account_digit": "string",
    "agency_number": "string",
    "agency_digit": "string",
    "financial_provider_slug": "string",
    "bank_number": 1,
    "created_at": "2024-01-15T10:30:00Z",
    "custom_data": {},
    "custom_name": "string",
    "external_id": "123456-abc-789",
    "payment_agreement_code": "string",
    "person_info": {
      "document_number": "111.321.322-09",
      "name": "João da Silva"
    },
    "tags": [
      "tag 1",
      "tag 1"
    ],
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


### Contas de Consumo

#### GET /v2/v2/payment/utilities
**Description**: Listar Pagamentos de Contas de Consumo

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Pagamentos encontrados

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "status": "string",
      "registration_status": "string",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "source": "string",
      "utility": {
        "code": "string",
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "status": "string",
      "registration_status": "string",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "source": "string",
      "utility": {
        "code": "string",
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/payment/utilities
**Description**: Criar um Pagamento de Conta de Consumo

**Request Body** (application/json):

- Type: `v2_new_payment_utility`
- Properties:
  - `amount` (required): number - Quantia

  - `scheduled_to` (optional): string - Data de Agendamento
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `tags` (optional): array - Tags associadas
  - `code` (required): string - Código de Barras ou Linha Digitável
- Example:
```
{
  "amount": 120.99,
  "scheduled_to": "2024-01-15",
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "external_id": "123456-abc-789",
  "custom_data": {},
  "tags": [
    "tag1",
    "tag1"
  ],
  "code": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Pagamento criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 120.99,
    "scheduled_to": "2024-01-15",
    "status": "string",
    "registration_status": "string",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "source": "string",
    "utility": {
      "code": "string",
      "beneficiary": {
        "document_number": "80.897.837/0001-14",
        "name": "Empresa Prestadora de Serviços Ltda."
      }
    },
    "identifier": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/payment/utilities/{uid}
**Description**: Visualizar um Pagamento de Conta de Consumo

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UUID do Pagamento de Conta de Consumo

**Response**:

Pagamento encontrado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 120.99,
    "scheduled_to": "2024-01-15",
    "status": "string",
    "registration_status": "string",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "source": "string",
    "utility": {
      "code": "string",
      "beneficiary": {
        "document_number": "80.897.837/0001-14",
        "name": "Empresa Prestadora de Serviços Ltda."
      }
    },
    "identifier": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### POST /v2/v2/payment/utility_batches
**Description**: Criar um Lote de Pagamento de Contas de Consumo

**Request Body** (application/json):

- Type: `v2_new_payment_batch_utility`
- Properties:
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `payments` (required): array - Lista de Pagamentos de Contas de Consumo novas ou existentes.
- Example:
```
{
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "payments": [
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ],
      "code": "string"
    },
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ],
      "code": "string"
    }
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Lote de Pagamento criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "payments": [
      {
        "uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "status": "...",
        "registration_status": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "financial_account_uid": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "source": "...",
        "utility": "...",
        "identifier": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "status": "...",
        "registration_status": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "financial_account_uid": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "source": "...",
        "utility": "...",
        "identifier": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


### DARF (beta)

#### POST /v2/v2/payment/darf_batches
**Description**: Criar um Lote de Pagamento de DARF

**Request Body** (application/json):

- Type: `v2_new_payment_batch_darf`
- Properties:
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `payments` (required): array - Lista de Pagamentos de Darf novos ou existentes.
- Example:
```
{
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "payments": [
    {
      "calculation_date": "2024-01-15",
      "expire_at": "2024-01-15",
      "reference_number": "123456",
      "taxpayer_number": "16.974.923/0001-84",
      "tax_code": "string"
    },
    {
      "calculation_date": "2024-01-15",
      "expire_at": "2024-01-15",
      "reference_number": "123456",
      "taxpayer_number": "16.974.923/0001-84",
      "tax_code": "string"
    }
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Lote de Pagamento criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "payments": [
      {
        "uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "status": "...",
        "registration_status": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "financial_account_uid": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "source": "...",
        "darf": "...",
        "identifier": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "status": "...",
        "registration_status": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "financial_account_uid": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "source": "...",
        "darf": "...",
        "identifier": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/payment/darfs
**Description**: Listar Pagamentos de DARF

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Pagamentos encontrados

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "status": "string",
      "registration_status": "string",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "source": "string",
      "darf": {
        "calculation_date": "2024-01-15",
        "expire_at": "2024-01-15",
        "reference_number": "123456",
        "taxpayer_number": "16.974.923/0001-84",
        "tax_code": "string"
      },
      "identifier": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "status": "string",
      "registration_status": "string",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "source": "string",
      "darf": {
        "calculation_date": "2024-01-15",
        "expire_at": "2024-01-15",
        "reference_number": "123456",
        "taxpayer_number": "16.974.923/0001-84",
        "tax_code": "string"
      },
      "identifier": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/payment/darfs
**Description**: Criar um Pagamento de DARF

**Request Body** (application/json):

- Type: `v2_new_payment_darf`
- Properties:
  - `calculation_date` (optional): string - Data de Encerramento do Período de Apuração
  - `expire_at` (optional): string - Data de Vencimento
  - `reference_number` (optional): string - Número de Referência da DARF
  - `taxpayer_number` (optional): string - CPF/CNPJ
  - `tax_code` (optional): string - Código da Receita
- Example:
```
{
  "calculation_date": "2024-01-15",
  "expire_at": "2024-01-15",
  "reference_number": "123456",
  "taxpayer_number": "16.974.923/0001-84",
  "tax_code": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Pagamento criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 120.99,
    "scheduled_to": "2024-01-15",
    "status": "string",
    "registration_status": "string",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "source": "string",
    "darf": {
      "calculation_date": "2024-01-15",
      "expire_at": "2024-01-15",
      "reference_number": "123456",
      "taxpayer_number": "16.974.923/0001-84",
      "tax_code": "string"
    },
    "identifier": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/payment/darfs/{uid}
**Description**: Visualizar um Pagamento de DARF

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UUID do Pagamento de DARF

**Response**:

Pagamento encontrado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 120.99,
    "scheduled_to": "2024-01-15",
    "status": "string",
    "registration_status": "string",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "source": "string",
    "darf": {
      "calculation_date": "2024-01-15",
      "expire_at": "2024-01-15",
      "reference_number": "123456",
      "taxpayer_number": "16.974.923/0001-84",
      "tax_code": "string"
    },
    "identifier": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


### Entre Contas

#### GET /v2/v2/transfer/internal
**Description**: Listar Transferências Entre Contas

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Sucesso na listagem das transferências

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "transfer_purpose": {
        "code": "98",
        "description": "Pagamentos Diversos"
      },
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 10.5,
      "scheduled_to": "2024-01-15",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "source": "string",
      "target": {
        "transfer_kind": "string",
        "pix": {
          "txid": "...",
          "pix_type": "...",
          "key_type": "...",
          "key": "..."
        },
        "bank_account": {
          "compe_number": "...",
          "ispb_number": "...",
          "agency_number": "...",
          "agency_digit": "...",
          "account_number": "...",
          "account_digit": "...",
          "document_number": "..."
        },
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "transfer_purpose": {
        "code": "98",
        "description": "Pagamentos Diversos"
      },
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 10.5,
      "scheduled_to": "2024-01-15",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "source": "string",
      "target": {
        "transfer_kind": "string",
        "pix": {
          "txid": "...",
          "pix_type": "...",
          "key_type": "...",
          "key": "..."
        },
        "bank_account": {
          "compe_number": "...",
          "ispb_number": "...",
          "agency_number": "...",
          "agency_digit": "...",
          "account_number": "...",
          "account_digit": "...",
          "document_number": "..."
        },
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/transfer/internal
**Description**: Criar uma Transferência Entre Contas

**Request Body** (application/json):

- Type: `v2_new_transfer_internal`
- Properties:
  - `amount` (required): number - Quantia

  - `scheduled_to` (optional): string - Data de Agendamento
  - `transfer_purpose` (optional): string - Objetivo da Transferência
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `tags` (optional): array - Tags associadas
  - `beneficiary` (optional): object - Dados do Recebedor
  - `internal` (required): object - Dados bancários
- Example:
```
{
  "amount": 120.99,
  "scheduled_to": "2024-01-15",
  "transfer_purpose": "98",
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "external_id": "123456-abc-789",
  "custom_data": {},
  "tags": [
    "tag1",
    "tag1"
  ],
  "beneficiary": {
    "document_number": "string",
    "name": "string"
  },
  "internal": {
    "agency_number": "string",
    "agency_digit": "string",
    "account_number": "string",
    "account_digit": "string"
  }
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Transferência Entre Contas criada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "transfer_purpose": {
      "code": "98",
      "description": "Pagamentos Diversos"
    },
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 10.5,
    "scheduled_to": "2024-01-15",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "source": "string",
    "target": {
      "transfer_kind": "string",
      "pix": {
        "txid": "string",
        "pix_type": "string",
        "key_type": "string",
        "key": "string"
      },
      "bank_account": {
        "compe_number": 1,
        "ispb_number": 1,
        "agency_number": "string",
        "agency_digit": "string",
        "account_number": "string",
        "account_digit": "string",
        "document_number": "string"
      },
      "beneficiary": {
        "document_number": "string",
        "name": "string"
      }
    },
    "identifier": "string",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/transfer/internal/{uid}
**Description**: Visualizar uma Transferência Entre Contas

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UUID da Transferência

**Response**:

Transferência Entre Contas encontrada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "transfer_purpose": {
      "code": "98",
      "description": "Pagamentos Diversos"
    },
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 10.5,
    "scheduled_to": "2024-01-15",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "source": "string",
    "target": {
      "transfer_kind": "string",
      "pix": {
        "txid": "string",
        "pix_type": "string",
        "key_type": "string",
        "key": "string"
      },
      "bank_account": {
        "compe_number": 1,
        "ispb_number": 1,
        "agency_number": "string",
        "agency_digit": "string",
        "account_number": "string",
        "account_digit": "string",
        "document_number": "string"
      },
      "beneficiary": {
        "document_number": "string",
        "name": "string"
      }
    },
    "identifier": "string",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### POST /v2/v2/transfer/internal_batches
**Description**: Criar um Lote de Transferência Entre Contas

**Request Body** (application/json):

- Type: `v2_new_transfer_batch_internal`
- Properties:
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `transfers` (required): array - Lista de Transferências Entre Contas novas ou existentes.
- Example:
```
{
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "transfers": [
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "transfer_purpose": "98",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ],
      "beneficiary": {
        "document_number": "...",
        "name": "..."
      },
      "internal": {
        "agency_number": "...",
        "agency_digit": "...",
        "account_number": "...",
        "account_digit": "..."
      }
    },
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "transfer_purpose": "98",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ],
      "beneficiary": {
        "document_number": "...",
        "name": "..."
      },
      "internal": {
        "agency_number": "...",
        "agency_digit": "...",
        "account_number": "...",
        "account_digit": "..."
      }
    }
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Lote de Transferência Entre Contas criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "transport_kind": "string",
    "transfers": [
      {
        "uid": "...",
        "status": "...",
        "registration_status": "...",
        "transfer_purpose": "...",
        "financial_account_uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "source": "...",
        "target": "...",
        "identifier": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "uid": "...",
        "status": "...",
        "registration_status": "...",
        "transfer_purpose": "...",
        "financial_account_uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "source": "...",
        "target": "...",
        "identifier": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


### Eventos
Eventos

#### GET /v1/v1/events
**Description**: Listar Eventos

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `resource_owner_id` (query, integer) (optional): ID do objeto que gerou o evento. Ex. ID do boleto.
- `code` (query, string) (optional): Código do evento.
- `occurred_at_from` (query, string) (optional): Início da data de ocorrência do evento
- `occurred_at_to` (query, string) (optional): Fim da data de ocorrência do evento.

**Response**:

Sucesso na listagem dos eventos

```
[
  {
    "id": 1,
    "code": "bank_billet.created",
    "data": {},
    "bank_billet_account_id": 1,
    "resource_owner_id": 1,
    "occurred_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "code": "bank_billet.created",
    "data": {},
    "bank_billet_account_id": 1,
    "resource_owner_id": 1,
    "occurred_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### GET /v1/v1/events/{id}
**Description**: Informações do Evento

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Evento

**Response**:

Evento encontrado com sucesso

```
{
  "id": 1,
  "code": "bank_billet.created",
  "data": {},
  "bank_billet_account_id": 1,
  "resource_owner_id": 1,
  "occurred_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


### Exportação do Lote

#### GET /v1/v1/bank_billet_batch_exports/{id}
**Description**: Arquivo de Exportação do Lote

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID arquivo de exportação do lote

**Response**:

Exportação de lote gerada com sucesso

### Extrato

#### GET /v2/v2/financial/accounts/{financial_account_uid}/statement_transactions
**Description**: Listar Transações

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `occurrence_date_from` (query, string) (optional): Data inicial do filtro de data de ocorrência.
- `occurrence_date_to` (query, string) (optional): Data final do filtro de data de ocorrência.
- `financial_account_uid` (path, string) (required): UUID da Conta Financeira

**Response**:

Transações encontradas

```
{
  "status": 1,
  "data": [
    {
      "id": 1,
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "person": {
        "document_number": "05.813.794/0001-26",
        "name": "Kobana Instituição de Pagamento Ltda."
      },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "occurrence_date": "2024-01-15",
      "description": "string",
      "document_number": "string",
      "kind": "string",
      "category": 1,
      "category_description": "string",
      "hashed_content": "string",
      "hashed_id": "string"
    },
    {
      "id": 1,
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "person": {
        "document_number": "05.813.794/0001-26",
        "name": "Kobana Instituição de Pagamento Ltda."
      },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "occurrence_date": "2024-01-15",
      "description": "string",
      "document_number": "string",
      "kind": "string",
      "category": 1,
      "category_description": "string",
      "hashed_content": "string",
      "hashed_id": "string"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### GET /v2/v2/financial/accounts/{financial_account_uid}/statement_transactions/imports
**Description**: Listar Importações de extrato

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `financial_account_uid` (path, string) (required): UID da Conta Financeira
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `status` (query, string) (optional): Filtro por status da importação
- `source_file_name` (query, string) (optional): Nome do arquivo importado
- `processed_from` (query, string) (optional): Data inicial do filtro de data de processamento da importação
- `processed_to` (query, string) (optional): Data final do filtro de data de processamento da importação
- `created_from` (query, string) (optional): Data inicial do filtro de data de criação da importação
- `created_to` (query, string) (optional): Data final do filtro de data de criação da importação
- `tags` (query, string) (optional): Filtro por tags da importação

**Response**:

Importações de Extrato encontradas

```
{
  "status": 1,
  "data": [
    {
      "created_at": "2024-01-15T10:30:00Z",
      "created_rows": 1,
      "custom_data": {},
      "enqueued_at": "2024-01-15T10:30:00Z",
      "external_id": "123456789-abc",
      "failed_to_create_rows": 1,
      "failed_to_update_rows": 1,
      "finished_at": "2024-01-15T10:30:00Z",
      "import_errors": {},
      "processed_at": "2024-01-15T10:30:00Z",
      "processed_rows": 1,
      "started_at": "2024-01-15T10:30:00Z",
      "status": "string",
      "tags[]": [
        "tag 1",
        "tag 1"
      ],
      "total_rows": 1,
      "uid": "string",
      "updated_at": "2024-01-15T10:30:00Z",
      "updated_rows": 1
    },
    {
      "created_at": "2024-01-15T10:30:00Z",
      "created_rows": 1,
      "custom_data": {},
      "enqueued_at": "2024-01-15T10:30:00Z",
      "external_id": "123456789-abc",
      "failed_to_create_rows": 1,
      "failed_to_update_rows": 1,
      "finished_at": "2024-01-15T10:30:00Z",
      "import_errors": {},
      "processed_at": "2024-01-15T10:30:00Z",
      "processed_rows": 1,
      "started_at": "2024-01-15T10:30:00Z",
      "status": "string",
      "tags[]": [
        "tag 1",
        "tag 1"
      ],
      "total_rows": 1,
      "uid": "string",
      "updated_at": "2024-01-15T10:30:00Z",
      "updated_rows": 1
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/financial/accounts/{financial_account_uid}/statement_transactions/imports
**Description**: Importar Extrato

**Request Body** (multipart/form-data):

- Type: `v2_import_send`
- Properties:
  - `source` (required): string - Arquivo para importação.
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON. Opcional para controle interno.
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `tags[]` (optional): array - Tags associadas a importação. Opcional para controle interno.
- Example:
```
{
  "source": "string",
  "custom_data": {},
  "external_id": "123456789-abc",
  "tags[]": [
    "tag 1",
    "tag 1"
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `financial_account_uid` (path, string) (required): UID da Conta Financeira

**Response**:

Importação criada

```
{
  "status": 1,
  "data": {
    "created_at": "2024-01-15T10:30:00Z",
    "created_rows": 1,
    "custom_data": {},
    "enqueued_at": "2024-01-15T10:30:00Z",
    "external_id": "123456789-abc",
    "failed_to_create_rows": 1,
    "failed_to_update_rows": 1,
    "finished_at": "2024-01-15T10:30:00Z",
    "import_errors": {},
    "processed_at": "2024-01-15T10:30:00Z",
    "processed_rows": 1,
    "started_at": "2024-01-15T10:30:00Z",
    "status": "string",
    "tags[]": [
      "tag 1",
      "tag 1"
    ],
    "total_rows": 1,
    "uid": "string",
    "updated_at": "2024-01-15T10:30:00Z",
    "updated_rows": 1
  }
}
```


#### GET /v2/v2/financial/accounts/{financial_account_uid}/statement_transactions/imports/{uid}
**Description**: Visualizar Importação de Extrato

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `financial_account_uid` (path, string) (required): UID da Conta Financeira
- `uid` (path, string) (required): UID da Importação de Extrato

**Response**:

Importação de Extrato encontrada

```
{
  "status": 1,
  "data": {
    "created_at": "2024-01-15T10:30:00Z",
    "created_rows": 1,
    "custom_data": {},
    "enqueued_at": "2024-01-15T10:30:00Z",
    "external_id": "123456789-abc",
    "failed_to_create_rows": 1,
    "failed_to_update_rows": 1,
    "finished_at": "2024-01-15T10:30:00Z",
    "import_errors": {},
    "processed_at": "2024-01-15T10:30:00Z",
    "processed_rows": 1,
    "started_at": "2024-01-15T10:30:00Z",
    "status": "string",
    "tags[]": [
      "tag 1",
      "tag 1"
    ],
    "total_rows": 1,
    "uid": "string",
    "updated_at": "2024-01-15T10:30:00Z",
    "updated_rows": 1
  }
}
```


#### POST /v2/v2/financial/accounts/{financial_account_uid}/statement_transactions/sync
**Description**: Sincronizar Extrato

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `financial_account_uid` (path, string) (required): UUID da Conta Financeira

**Response**:

Comando criado

```
{
  "status": 1,
  "data": {
    "id": 1,
    "status": "string",
    "operation": "string",
    "params": {},
    "payload": {},
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "financial_account": {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "kind": "string",
      "account_number": "string",
      "account_digit": "string",
      "agency_number": "string",
      "agency_digit": "string",
      "financial_provider_slug": "string",
      "bank_number": 1,
      "created_at": "2024-01-15T10:30:00Z",
      "custom_data": {},
      "custom_name": "string",
      "external_id": "123456-abc-789",
      "payment_agreement_code": "string",
      "person_info": {
        "document_number": "...",
        "name": "..."
      },
      "tags": [
        "...",
        "..."
      ],
      "updated_at": "2024-01-15T10:30:00Z"
    }
  }
}
```


### Histórico de E-mails

#### GET /v1/v1/email_deliveries
**Description**: Listar E-mails Enviados

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `resource_owner_id` (query, integer) (optional): ID do objeto que gerou o evento. Ex. ID do boleto.
- `event_code` (query, string) (optional): Código do evento.
- `status` (query, integer) (optional): Status do e-mail enviado

**Response**:

Sucesso na listagem dos e-mails enviados

```
[
  {
    "id": 1,
    "uid": "string",
    "delivered_at": "2024-01-15T10:30:00Z",
    "failed_at": "2024-01-15T10:30:00Z",
    "event_code": "bank_billet.created",
    "sent_error": "string",
    "email_notification_id": 1,
    "bank_billet_account_id": 1,
    "resource_owner_id": 1,
    "status": "pending",
    "status_occurred_at": "2024-01-15T10:30:00Z",
    "last_clicked_at": "2024-01-15T10:30:00Z",
    "last_read_at": "2024-01-15T10:30:00Z",
    "clicked_at": "2024-01-15T10:30:00Z",
    "click_count": 1,
    "read_at": "2024-01-15T10:30:00Z",
    "read_count": 1,
    "subject": "string",
    "email_account_id": 1,
    "email_template_id": 1,
    "bank_billet_in_pdf": true,
    "bcc": "string",
    "cc": "string",
    "from_address": "string",
    "reply_to_address": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "uid": "string",
    "delivered_at": "2024-01-15T10:30:00Z",
    "failed_at": "2024-01-15T10:30:00Z",
    "event_code": "bank_billet.created",
    "sent_error": "string",
    "email_notification_id": 1,
    "bank_billet_account_id": 1,
    "resource_owner_id": 1,
    "status": "pending",
    "status_occurred_at": "2024-01-15T10:30:00Z",
    "last_clicked_at": "2024-01-15T10:30:00Z",
    "last_read_at": "2024-01-15T10:30:00Z",
    "clicked_at": "2024-01-15T10:30:00Z",
    "click_count": 1,
    "read_at": "2024-01-15T10:30:00Z",
    "read_count": 1,
    "subject": "string",
    "email_account_id": 1,
    "email_template_id": 1,
    "bank_billet_in_pdf": true,
    "bcc": "string",
    "cc": "string",
    "from_address": "string",
    "reply_to_address": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### GET /v1/v1/email_deliveries/{id}
**Description**: Informações do E-mail Enviado

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do E-mail

**Response**:

E-mail encontrado com sucesso

```
{
  "id": 1,
  "uid": "string",
  "delivered_at": "2024-01-15T10:30:00Z",
  "failed_at": "2024-01-15T10:30:00Z",
  "event_code": "bank_billet.created",
  "sent_error": "string",
  "email_notification_id": 1,
  "bank_billet_account_id": 1,
  "resource_owner_id": 1,
  "status": "pending",
  "status_occurred_at": "2024-01-15T10:30:00Z",
  "last_clicked_at": "2024-01-15T10:30:00Z",
  "last_read_at": "2024-01-15T10:30:00Z",
  "clicked_at": "2024-01-15T10:30:00Z",
  "click_count": 1,
  "read_at": "2024-01-15T10:30:00Z",
  "read_count": 1,
  "subject": "string",
  "email_account_id": 1,
  "email_template_id": 1,
  "bank_billet_in_pdf": true,
  "bcc": "string",
  "cc": "string",
  "from_address": "string",
  "reply_to_address": "string",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### PUT /v1/v1/email_deliveries/{id}/resend
**Description**: Reenviar E-mail Enviado

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do E-mail enviado

**Response**:

E-mail reeenviado com sucesso

### Histórico de SMS
Histórico de SMS

#### GET /v1/v1/sms_deliveries
**Description**: Listar SMS Enviados

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `resource_owner_id` (query, integer) (optional): ID do objeto que gerou o evento. Ex. ID do boleto.
- `event_code` (query, string) (optional): Código do evento.
- `status` (query, integer) (optional): Status do SMS enviado

**Response**:

Sucesso na listagem dos SMS enviados

```
[
  {
    "id": 1,
    "uid": "string",
    "event_code": "bank_billet.created",
    "message": "string",
    "phone_to": "string",
    "sent_error": "string",
    "delivered_at": "2024-01-15T10:30:00Z",
    "failed_at": "2024-01-15T10:30:00Z",
    "resource_owner_id": 1,
    "status": "pending",
    "bank_billet_account_id": 1,
    "sms_notification_id": 1,
    "email_notification_id": 1,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "uid": "string",
    "event_code": "bank_billet.created",
    "message": "string",
    "phone_to": "string",
    "sent_error": "string",
    "delivered_at": "2024-01-15T10:30:00Z",
    "failed_at": "2024-01-15T10:30:00Z",
    "resource_owner_id": 1,
    "status": "pending",
    "bank_billet_account_id": 1,
    "sms_notification_id": 1,
    "email_notification_id": 1,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### GET /v1/v1/sms_deliveries/{id}
**Description**: Informações do SMS Enviado

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do SMS

**Response**:

SMS encontrado com sucesso

```
{
  "id": 1,
  "uid": "string",
  "event_code": "bank_billet.created",
  "message": "string",
  "phone_to": "string",
  "sent_error": "string",
  "delivered_at": "2024-01-15T10:30:00Z",
  "failed_at": "2024-01-15T10:30:00Z",
  "resource_owner_id": 1,
  "status": "pending",
  "bank_billet_account_id": 1,
  "sms_notification_id": 1,
  "email_notification_id": 1,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### PUT /v1/v1/sms_deliveries/{id}/resend
**Description**: Reenviar SMS Enviado

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do SMS enviado

**Response**:

SMS reeenviado com sucesso

### Importações

#### GET /v1/v1/imports/{collection_name}
**Description**: Listar Importações

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `collection_name` (path, string) (required): Tipo da importação:
* `customers` Clientes
* `customer_subscriptions` Assinaturas
* `bank_billets` Boletos
* `installments` Carnês

**Response**:

Importações encontradas

```
[
  {
    "id": 1,
    "status": "string",
    "started_at": "2024-01-15T10:30:00Z",
    "finished_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "created_rows": 1,
    "enqueued_at": "2024-01-15T10:30:00Z",
    "processed_at": "2024-01-15T10:30:00Z",
    "failed_to_create_rows": 1,
    "failed_to_update_rows": 1,
    "import_errors": {},
    "processed_rows": 1,
    "total_rows": 1,
    "updated_rows": 1
  },
  {
    "id": 1,
    "status": "string",
    "started_at": "2024-01-15T10:30:00Z",
    "finished_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "created_rows": 1,
    "enqueued_at": "2024-01-15T10:30:00Z",
    "processed_at": "2024-01-15T10:30:00Z",
    "failed_to_create_rows": 1,
    "failed_to_update_rows": 1,
    "import_errors": {},
    "processed_rows": 1,
    "total_rows": 1,
    "updated_rows": 1
  }
]
```


#### POST /v1/v1/imports/{collection_name}
**Description**: Importar

**Request Body** (multipart/form-data):

- Type: `v1_import_send`
- Properties:
  - `source` (required): string - Arquivo para importação.
- Example:
```
{
  "source": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `collection_name` (path, string) (required): Tipo da importação:
* `customers` Clientes
* `customer_subscriptions` Assinaturas
* `bank_billets` Boletos
* `installments` Carnês

**Response**:

Importação criada

```
{
  "id": 1,
  "status": "string",
  "started_at": "2024-01-15T10:30:00Z",
  "finished_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "created_rows": 1,
  "enqueued_at": "2024-01-15T10:30:00Z",
  "processed_at": "2024-01-15T10:30:00Z",
  "failed_to_create_rows": 1,
  "failed_to_update_rows": 1,
  "import_errors": {},
  "processed_rows": 1,
  "total_rows": 1,
  "updated_rows": 1
}
```


#### GET /v1/v1/imports/{collection_name}/{id}
**Description**: Visualizar Importação

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `collection_name` (path, string) (required): Tipo da importação:
* `customers` Clientes
* `customer_subscriptions` Assinaturas
* `bank_billets` Boletos
* `installments` Carnês
- `id` (path, string) (required): ID da Importação

**Response**:

Importação encontrada

```
{
  "id": 1,
  "status": "string",
  "started_at": "2024-01-15T10:30:00Z",
  "finished_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "created_rows": 1,
  "enqueued_at": "2024-01-15T10:30:00Z",
  "processed_at": "2024-01-15T10:30:00Z",
  "failed_to_create_rows": 1,
  "failed_to_update_rows": 1,
  "import_errors": {},
  "processed_rows": 1,
  "total_rows": 1,
  "updated_rows": 1
}
```


### Log de Webhooks

#### GET /v1/v1/webhook_deliveries
**Description**: Listar Webhooks Enviados

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `resource_owner_id` (query, integer) (optional): ID do objeto.
- `webhook_id` (query, integer) (optional): ID do Webhook
- `uid` (query, string) (optional): UID usado no cabeçalho da requisição
- `response_code` (query, integer) (optional): Código HTTP da resposta. [Leia mais](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- `event_code` (query, string) (optional): Código do evento.
- `status` (query, integer) (optional): Situação do webhook delivery

**Response**:

Sucesso na listagem dos webhooks enviados

```
[
  {
    "id": 1,
    "uid": "string",
    "url": "string",
    "request_payload": null,
    "request_error": "string",
    "response_headers": null,
    "response_body": null,
    "response_code": 1,
    "response_message": "string",
    "content_type": "string",
    "delivered_at": "2024-01-15T10:30:00Z",
    "first_try": "2024-01-15T10:30:00Z",
    "failed_at": "2024-01-15T10:30:00Z",
    "duration": 1,
    "event_code": "bank_billet.created",
    "webhook_id": 1,
    "fails_count": 1,
    "resource_owner_id": 1,
    "bank_billet_account_id": 1,
    "status": "pending",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "uid": "string",
    "url": "string",
    "request_payload": null,
    "request_error": "string",
    "response_headers": null,
    "response_body": null,
    "response_code": 1,
    "response_message": "string",
    "content_type": "string",
    "delivered_at": "2024-01-15T10:30:00Z",
    "first_try": "2024-01-15T10:30:00Z",
    "failed_at": "2024-01-15T10:30:00Z",
    "duration": 1,
    "event_code": "bank_billet.created",
    "webhook_id": 1,
    "fails_count": 1,
    "resource_owner_id": 1,
    "bank_billet_account_id": 1,
    "status": "pending",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### PUT /v1/v1/webhook_deliveries/resend
**Description**: Reenviar Webhooks Enviados

**Request Body** (application/json):

- Type: `v1_webhook_delivery_resend_object`
- Properties:
  - `resource_owner_id` (optional): integer - ID do Objeto
  - `webhook_id` (optional): integer - ID do Webhook
  - `uid` (optional): string - UID usado no cabeçalho da requisição
  - `response_code` (optional): integer - Código HTTP da resposta. [Leia mais](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  - `event_code` (optional): string - Código do evento.
* `ping` Ping
* `account.updated` Conta atualizada.
* `account.blocked` Conta bloqueada.
* `account.bank_billet_creation_blocked` Emissão de boletos bloqueada.
* `bank_billet.created` Boleto criado.
* `bank_billet.updated` Boleto atualizado.
* `bank_billet.generated` PDF do Boleto Gerado ou Atualizado.
* `bank_billet.canceled` Boleto cancelado.
* `bank_billet.blocked` Boleto foi bloqueado.
* `bank_billet.overdue` Boleto ficou vencido.
* `bank_billet.paid` Boleto foi pago.
* `bank_billet.due_date` Notifica boleto com 15, 7, 3 e 1 dias antes do vencimento.
* `bank_billet.rejected` Boleto rejeitado.
* `bank_billet.cancel.requested` Cancelamento do Boleto solicitado.
* `bank_billet.cancel.confirmed` Cancelamento do Boleto confirmado.
* `bank_billet.cancel.failed` Falha no cancelamento do Boleto.
* `bank_billet.cancel.error` Ocorreu um erro no cancelamento do Boleto.
* `bank_billet.register.requested` Registro do Boleto solicitado.
* `bank_billet.register.confirmed` Registro do Boleto confirmado.
* `bank_billet.register.failed` Falha no registro do Boleto.
* `bank_billet.register.error` Ocorreu um erro no registro do Boleto.
* `bank_billet.update.requested` Atualização do Boleto solicitada.
* `bank_billet.update.confirmed` Atualização do Boleto confirmada.
* `bank_billet.update.failed` Falha na atualização do Boleto.
* `bank_billet.update.error` Ocorreu um erro na atualização do Boleto.
* `bank_billet.registered` Boleto registrado.
* `bank_billet.deleted` Boleto excluído.
* `bank_billet.sync.requested` Sincronização do Boleto solicitada.
* `bank_billet.sync.confirmed` Sincronização do Boleto confirmada.
* `bank_billet.sync.failed` Falha na sincronização do Boleto.
* `bank_billet.sync.error` Ocorreu um erro na sincronização do Boleto.
* `bank_billet.get.requested` Informação do Boleto solicitada.
* `bank_billet.get.confirmed` Informação do Boleto confirmada.
* `bank_billet.get.failed` Falha na informação do Boleto.
* `bank_billet.get.error` Ocorreu um erro na informação do Boleto.
* `bank_billet.get_child.requested` Informação do Boleto filho solicitada.
* `bank_billet.get_child.confirmed` Informação do Boleto filho confirmada.
* `bank_billet.get_child.failed` Falha na informação do Boleto filho.
* `bank_billet.get_child.error` Ocorreu um erro na informação do Boleto filho.
* `bank_billet.add_pix.requested` Adição do Pix ao Boleto solicitada.
* `bank_billet.add_pix.confirmed` Adição do Pix ao Boleto confirmada.
* `bank_billet.add_pix.failed` Falha na adição do Pix ao Boleto.
* `bank_billet.add_pix.error` Ocorreu um erro na adição do Pix ao Boleto.
* `bank_billet_discharge.created` Registro de retorno criado.
* `bank_billet_discharge.updated` Registro de retorno atualizado.
* `bank_billet_discharge.deleted` Registro de retorno excluído.
* `bank_billet_remittance.created` Registro de remessa criado.
* `bank_billet_remittance.updated` Registro de remessa atualizado.
* `bank_billet_remittance.deleted` Registro de remessa excluído.
* `bank_billet_registration.created` Registro de Boleto criado.
* `bank_billet_registration.updated` Registro de Boleto atualizado.
* `bank_billet_registration.deleted` Registro de Boleto excluído.
* `bank_billet_payment.created` Recebimento criado.
* `bank_billet_payment.updated` Recebimento atualizado.
* `bank_billet_payment.deleted` Recebimento excluído.
* `customer.created` Cliente criado.
* `customer.updated` Cliente atualizado.
* `customer.portal_password_updated` Senha do portal do cliente atualizada.
* `customer.deleted` Cliente excluído.
* `transaction.created` Transação criada.
* `transaction.updated` Transação atualizada.
* `transaction.processed` Transação processada.
* `withdrawal.transferred` Saque transferido.
* `withdrawal.requested` Saque solicitado.
* `addon.activated` Addon ativado.
* `addon.removed` Addon removido.
* `plan_subscription.activated` Plano ativado.
* `plan_subscription.removed` Plano removido.
* `plan_subscription.fee` Cobrança do plano.
* `plan_subscription.updated` Plano atualizado.
* `user.created` Usuário criado.
* `user.updated` Usuário atualizado.
* `user.deleted` Usuário excluído.
* `remittance.created` Remessa criada.
* `remittance.processed` Remessa processada.
* `remittance.downloaded` Download de Remessa realizado.
* `remittance.sent` Remessa enviada.
* `remittance.deleted` Remessa excluída.
* `remittance.line.db.created` Linha de Remessa criada.
* `remittance.line.db.updated` Linha de Remessa atualizada.
* `remittance.line.db.deleted` Linha de Remessa excluída.
* `statement_transaction.db.created` Linha de Extrato criada.
* `discharge.created` Retorno criado.
* `discharge.processed` Retorno processado.
* `discharge.deleted` Retorno excluído.
* `bank_billet_account.created` Conta de Cobrança criada.
* `bank_billet_account.homologated` Conta de Cobrança enviada para homologação.
* `bank_billet_account.homologation_failed` Falha na homologação da Conta de Cobrança.
* `bank_billet_account.homologation_started` Conta de Cobrança enviada para homologação.
* `bank_billet_account.validated` Conta de Cobrança homologada.
* `bank_billet_account.validation_released` Conta de Cobrança homologada.
* `bank_billet_account.activated` Conta de Cobrança ativada.
* `bank_billet_account.updated` Conta de Cobrança atualizada.
* `bank_billet_account.deleted` Conta de Cobrança excluída.
* `edi.remittance_line.created` Linha de Remessa criada.
* `edi.remittance_line.updated` Linha de Remessa atualizada.
* `edi.remittance_line.deleted` Linha de Remessa excluída.
* `edi.edi_box.activated` EDI ativado.
* `edi.edi_box.db.created` EDI criado.
* `edi.edi_box.db.deleted` EDI excluído.
* `edi.edi_box.db.updated` EDI atualizado.
* `edi.edi_box.generated` Carta Gerada
* `edi.edi_box.demand_received` Demanda recepcionada
* `edi.edi_box.confirming_at_bank` Aguardando confirmação do banco
* `edi.edi_box.testing_by_customer` Aguardando teste do cliente
* `edi.edi_box.waiting_for_validations` Aguardando validações
* `customer_subscription.created` Assinatura criada.
* `customer_subscription.updated` Assinatura atualizada.
* `customer_subscription.deleted` Assinatura excluída.
* `installment.created` Carnê criado.
* `installment.processed` Carnê processado.
* `installment.generated` Carnê gerado.
* `installment.deleted` Carnê excluído.
* `import.created` Importação criada.
* `import.processed` Importação processada.
* `import.deleted` Importação excluída.
* `pix.db.created` Pix criado.
* `pix.db.updated` Pix atualizado.
* `pix.db.deleted` Pix excluído.
* `pix.register.requested` Registro do Pix solicitado.
* `pix.register.confirmed` Registro do Pix confirmado.
* `pix.register.failed` Falha no registro do Pix.
* `pix.register.error` Ocorreu um erro no registro do Pix.
* `pix.update.requested` Atualização do Pix solicitada.
* `pix.update.confirmed` Atualização do Pix confirmada.
* `pix.update.failed` Falha na atualização do Pix.
* `pix.update.error` Ocorreu um erro na atualização do Pix.
* `pix.paid` Pix pago.
* `pix.overdue` Pix vencido (somente Pix Cobrança).
* `pix.cancel.requested` Cancelamento do Pix solicitado.
* `pix.cancel.confirmed` Cancelamento do Pix confirmado.
* `pix.cancel.failed` Falha no cancelamento do Pix.
* `pix.cancel.error` Ocorreu um erro no cancelamento do Pix.
* `pix.sync.requested` Sincronização do Pix solicitada.
* `pix.sync.confirmed` Sincronização do Pix confirmada.
* `pix.sync.failed` Falha na sincronização do Pix.
* `pix.sync.error` Ocorreu um erro na sincronização do Pix.
* `pix.get.requested` Informação do Pix solicitada.
* `pix.get.confirmed` Informação do Pix confirmada.
* `pix.get.failed` Falha na informação do Pix.
* `pix.get.error` Ocorreu um erro na informação do Pix.
* `financial.account.balance_sync.requested` Sincronização do Saldo solicitada.
* `financial.account.balance_sync.confirmed` Sincronização do Saldo confirmada.
* `financial.account.balance_sync.failed` Falha na sincronização do Saldo.
* `financial.account.balance_sync.error` Ocorreu um erro na sincronização do Saldo.
* `financial.account.statement_sync.requested` Sincronização do Extrato solicitada.
* `financial.account.statement_sync.confirmed` Sincronização do Extrato confirmada.
* `financial.account.statement_sync.failed` Falha na sincronização do Extrato.
* `financial.account.statement_sync.error` Ocorreu um erro na sincronização do Extrato.
* `financial.account.statement.updated` Extrato atualizado.
* `financial.account.balance.updated` Saldo da conta financeira atualizado.
* `financial.account_balance.db.created` Saldo criado.
* `transfer.batch.db.created` Lote de transferência criado.
* `transfer.batch.db.updated` Lote de transferência atualizado.
* `transfer.batch.db.deleted` Lote de transferência excluído.
* `transfer.batch.awaiting_approval` Lote de transferência aguardando liberação.
* `transfer.pix_batch.awaiting_approval` Lote de Transferência Pix aguardando liberação.
* `transfer.pix_batch.register.requested` Lote de Transferência Pix solicitado.
* `transfer.pix_batch.register.confirmed` Lote de Transferência Pix confirmado.
* `transfer.pix_batch.register.failed` Falha no envio de Lote de Transferência Pix.
* `transfer.pix_batch.register.error` Ocorreu um erro no envio de Lote de Transferência Pix.
* `transfer.pix_batch.approve.requested` Liberação de Lote de Transferência Pix solicitada.
* `transfer.pix_batch.approve.confirmed` Liberação de Lote de Transferência Pix confirmada.
* `transfer.pix_batch.approve.failed` Falha na liberação de Lote de Transferência Pix.
* `transfer.pix_batch.approve.error` Ocorreu um erro na liberação de Lote de Transferência Pix.
* `transfer.pix_batch.reprove.requested` Rejeição de Lote de Transferência Pix solicitada.
* `transfer.pix_batch.reprove.confirmed` Rejeição de Lote de transferência Pix confirmada.
* `transfer.pix_batch.reprove.failed` Falha na rejeição de Lote de Transferência Pix.
* `transfer.pix_batch.reprove.error` Ocorreu um erro na rejeição de Lote de Transferência Pix.
* `transfer.ted_batch.awaiting_approval` Lote de Transferência TED aguardando liberação.
* `transfer.ted_batch.register.requested` Lote de Transferência TED solicitado.
* `transfer.ted_batch.register.confirmed` Lote de Transferência TED confirmado.
* `transfer.ted_batch.register.failed` Falha no envio de Lote de Transferência TED.
* `transfer.ted_batch.register.error` Ocorreu um erro no envio de Lote de Transferência TED.
* `transfer.ted_batch.approve.requested` Liberação de Lote de Transferência TED solicitada.
* `transfer.ted_batch.approve.confirmed` Liberação de Lote de Transferência TED confirmada.
* `transfer.ted_batch.approve.failed` Falha na liberação de Lote de Transferência TED.
* `transfer.ted_batch.approve.error` Ocorreu um erro na liberação de Lote de Transferência TED.
* `transfer.ted_batch.reprove.requested` Rejeição de Lote de Transferência TED solicitada.
* `transfer.ted_batch.reprove.confirmed` Rejeição de Lote de transferência TED confirmada.
* `transfer.ted_batch.reprove.failed` Falha na rejeição de Lote de Transferência TED.
* `transfer.ted_batch.reprove.error` Ocorreu um erro na rejeição de Lote de Transferência TED.
* `transfer.internal_batch.awaiting_approval` Lote de Transferência Entre Contas aguardando liberação.
* `transfer.internal_batch.register.requested` Lote de Transferência Entre Contas solicitado.
* `transfer.internal_batch.register.confirmed` Lote de Transferência Entre Contas confirmado.
* `transfer.internal_batch.register.failed` Falha no envio de Lote de Transferência Entre Contas.
* `transfer.internal_batch.register.error` Ocorreu um erro no envio de Lote de Transferência Entre Contas.
* `transfer.internal_batch.approve.requested` Liberação de Lote de Transferência Entre Contas solicitada.
* `transfer.internal_batch.approve.confirmed` Liberação de Lote de Transferência Entre Contas confirmada.
* `transfer.internal_batch.approve.failed` Falha na liberação de Lote de Transferência Entre Contas.
* `transfer.internal_batch.approve.error` Ocorreu um erro na liberação de Lote de Transferência Entre Contas.
* `transfer.internal_batch.reprove.requested` Rejeição de Lote de Transferência Entre Contas solicitada.
* `transfer.internal_batch.reprove.confirmed` Rejeição de Lote de transferência Entre Contas confirmada.
* `transfer.internal_batch.reprove.failed` Falha na rejeição de Lote de Transferência Entre Contas.
* `transfer.internal_batch.reprove.error` Ocorreu um erro na rejeição de Lote de Transferência Entre Contas.
* `transfer.db.created` Transferência criada.
* `transfer.db.updated` Transferência atualizada.
* `transfer.db.deleted` Transferência excluída.
* `transfer.pix.register.requested` Transferência Pix solicitada.
* `transfer.pix.register.confirmed` Transferência Pix confirmada.
* `transfer.pix.register.failed` Falha no envio da Transferência Pix.
* `transfer.pix.register.error` Ocorreu um erro no envio da Transferência Pix.
* `transfer.pix.reschedule.requested` Reagendamento de Transferência Pix solicitado.
* `transfer.pix.reschedule.confirmed` Reagendamento de Transferência Pix confirmado.
* `transfer.pix.reschedule.failed` Falha no reagendamento da Transferência Pix.
* `transfer.pix.reschedule.error` Ocorreu um erro no reagendamento da Transferência Pix.
* `transfer.pix.approve.requested` Liberação de Transferência Pix solicitada.
* `transfer.pix.approve.confirmed` Liberação de Transferência Pix confirmada.
* `transfer.pix.approve.failed` Falha na liberação da transferência Pix.
* `transfer.pix.approve.error` Ocorreu um erro na liberação da Transferência Pix.
* `transfer.pix.cancel.requested` Cancelamento de Transferência Pix solicitado.
* `transfer.pix.cancel.confirmed` Cancelamento de Transferência Pix confirmado.
* `transfer.pix.cancel.failed` Falha no cancelamento da Transferência Pix.
* `transfer.pix.cancel.error` Ocorreu um erro no cancelamento da Transferência Pix.
* `transfer.ted.register.requested` Transferência TED solicitada.
* `transfer.ted.register.confirmed` Transferência TED confirmada.
* `transfer.ted.register.failed` Falha no envio da Transferência TED.
* `transfer.ted.register.error` Ocorreu um erro no envio da Transferência TED.
* `transfer.ted.reschedule.requested` Reagendamento de Transferência TED solicitado.
* `transfer.ted.reschedule.confirmed` Reagendamento de Transferência TED confirmado.
* `transfer.ted.reschedule.failed` Falha no Reagendamento de Transferência TED.
* `transfer.ted.reschedule.error` Ocorreu um erro no Reagendamento de Transferência TED.
* `transfer.ted.approve.requested` Liberação de Transferência TED solicitada.
* `transfer.ted.approve.confirmed` Liberação de Transferência TED confirmada.
* `transfer.ted.approve.failed` Falha na liberação da transferência TED.
* `transfer.ted.approve.error` Ocorreu um erro na liberação da Transferência TED.
* `transfer.ted.cancel.requested` Cancelamento de Transferência TED solicitado.
* `transfer.ted.cancel.confirmed` Cancelamento de Transferência TED confirmado.
* `transfer.ted.cancel.failed` Falha no cancelamento de Transferência TED.
* `transfer.ted.cancel.error` Ocorreu um erro no cancelamento de Transferência TED.
* `transfer.internal.register.requested` Transferência Entre Contas solicitada.
* `transfer.internal.register.confirmed` Transferência Entre Contas confirmada.
* `transfer.internal.register.failed` Falha no envio da Transferência Entre Contas.
* `transfer.internal.register.error` Ocorreu um erro no envio da Transferência Entre Contas.
* `transfer.internal.reschedule.requested` Reagendamento de Transferência Entre Contas solicitado.
* `transfer.internal.reschedule.confirmed` Reagendamento de Transferência Entre Contas confirmado.
* `transfer.internal.reschedule.failed` Falha no Reagendamento de Transferência Entre Contas.
* `transfer.internal.reschedule.error` Ocorreu um erro no Reagendamento de Transferência Entre Contas.
* `transfer.internal.approve.requested` Liberação de Transferência Entre Contas solicitada.
* `transfer.internal.approve.confirmed` Liberação de Transferência Entre Contas confirmada.
* `transfer.internal.approve.failed` Falha na liberação da transferência Entre Contas.
* `transfer.internal.approve.error` Ocorreu um erro na liberação da Transferência Entre Contas.
* `transfer.internal.cancel.requested` Cancelamento de Transferência Entre Contas solicitado.
* `transfer.internal.cancel.confirmed` Cancelamento de Transferência Entre Contas confirmado.
* `transfer.internal.cancel.failed` Falha no cancelamento de Transferência Entre Contas.
* `transfer.internal.cancel.error` Ocorreu um erro no cancelamento de Transferência Entre Contas.
* `payment.db.created` Pagamento criado.
* `payment.db.updated` Pagamento atualizado.
* `payment.db.deleted` Pagamento excluído.
* `payment.bank_billet.register.requested` Pagamento de Boleto solicitado.
* `payment.bank_billet.register.confirmed` Pagamento de Boleto confirmado.
* `payment.bank_billet.register.failed` Falha no envio do Pagamento de Boleto.
* `payment.bank_billet.register.error` Ocorreu um erro no envio de Pagamento de Boleto.
* `payment.bank_billet.approve.requested` Liberação de Pagamento de Boleto solicitada.
* `payment.bank_billet.approve.confirmed` Liberação de Pagamento de Boleto confirmada.
* `payment.bank_billet.approve.failed` Falha na liberação de Pagamento de Boleto.
* `payment.bank_billet.approve.error` Ocorreu um erro na liberação de Pagamento de Boleto.
* `payment.bank_billet.reschedule.requested` Reagendamento de Pagamento de Boleto solicitado.
* `payment.bank_billet.reschedule.confirmed` Reagendamento de Pagamento de Boleto confirmado.
* `payment.bank_billet.reschedule.failed` Falha no Reagendamento de Pagamento de Boleto.
* `payment.bank_billet.reschedule.error` Ocorreu um erro no Reagendamento de Pagamento de Boleto.
* `payment.bank_billet.cancel.requested` Cancelamento de Pagamento de Boleto solicitado.
* `payment.bank_billet.cancel.confirmed` Cancelamento de Pagamento de Boleto confirmada.
* `payment.bank_billet.cancel.failed` Falha no cancelamento de Pagamento de Boleto.
* `payment.bank_billet.cancel.error` Ocorreu um erro no cancelamento de Pagamento de Boleto.
* `payment.darf.register.requested` Pagamento de DARF solicitado.
* `payment.darf.register.confirmed` Pagamento de DARF confirmado.
* `payment.darf.register.failed` Falha no envio do Pagamento de DARF.
* `payment.darf.register.error` Ocorreu um erro no envio de Pagamento de DARF.
* `payment.darf.approve.requested` Liberação de Pagamento de DARF solicitada.
* `payment.darf.approve.confirmed` Liberação de Pagamento de DARF confirmada.
* `payment.darf.approve.failed` Falha na liberação de Pagamento de DARF.
* `payment.darf.approve.error` Ocorreu um erro na liberação de Pagamento de DARF.
* `payment.darf.reschedule.requested` Reagendamento de Pagamento de DARF solicitado.
* `payment.darf.reschedule.confirmed` Reagendamento de Pagamento de DARF confirmado.
* `payment.darf.reschedule.failed` Falha no Reagendamento de Pagamento de DARF.
* `payment.darf.reschedule.error` Ocorreu um erro no Reagendamento de Pagamento de DARF.
* `payment.darf.cancel.requested` Cancelamento de Pagamento de DARF solicitado.
* `payment.darf.cancel.confirmed` Cancelamento de Pagamento de DARF confirmada.
* `payment.darf.cancel.failed` Falha no cancelamento de Pagamento de DARF.
* `payment.darf.cancel.error` Ocorreu um erro no cancelamento de Pagamento de DARF.
* `payment.utility.register.requested` Pagamento de Conta de Consumo solicitado.
* `payment.utility.register.confirmed` Pagamento de Conta de Consumo confirmado.
* `payment.utility.register.failed` Falha no envio do Pagamento de Conta de Consumo.
* `payment.utility.register.error` Ocorreu um erro no envio de Pagamento de Conta de Consumo.
* `payment.utility.approve.requested` Liberação de Pagamento de Conta de Consumo solicitada.
* `payment.utility.approve.confirmed` Liberação de Pagamento de Conta de Consumo confirmada.
* `payment.utility.approve.failed` Falha na liberação de Pagamento de Conta de Consumo.
* `payment.utility.approve.error` Ocorreu um erro na liberação de Pagamento de Conta de Consumo.
* `payment.utility.reschedule.requested` Reagendamento de Pagamento de Conta de Consumo solicitado.
* `payment.utility.reschedule.confirmed` Reagendamento de Pagamento de Conta de Consumo confirmado.
* `payment.utility.reschedule.failed` Falha no Reagendamento de Pagamento de Conta de Consumo.
* `payment.utility.reschedule.error` Ocorreu um erro no Reagendamento de Pagamento de Conta de Consumo.
* `payment.utility.cancel.requested` Cancelamento de Pagamento de Conta de Consumo solicitado.
* `payment.utility.cancel.confirmed` Cancelamento de Pagamento de Conta de Consumo confirmada.
* `payment.utility.cancel.failed` Falha no cancelamento de Pagamento de Conta de Consumo.
* `payment.utility.cancel.error` Ocorreu um erro no cancelamento de Pagamento de Conta de Consumo.
* `payment.gru.register.requested` Pagamento de GRU solicitado.
* `payment.gru.register.confirmed` Pagamento de GRU confirmado.
* `payment.gru.register.failed` Falha no envio do Pagamento de GRU.
* `payment.gru.register.error` Ocorreu um erro no envio de Pagamento de GRU.
* `payment.gru.approve.requested` Liberação de Pagamento de GRU solicitada.
* `payment.gru.approve.confirmed` Liberação de Pagamento de GRU confirmada.
* `payment.gru.approve.failed` Falha na liberação de Pagamento de GRU.
* `payment.gru.approve.error` Ocorreu um erro na liberação de Pagamento de GRU.
* `payment.gru.reschedule.requested` Reagendamento de Pagamento de GRU solicitado.
* `payment.gru.reschedule.confirmed` Reagendamento de Pagamento de GRU confirmado.
* `payment.gru.reschedule.failed` Falha no Reagendamento de Pagamento de GRU.
* `payment.gru.reschedule.error` Ocorreu um erro no Reagendamento de Pagamento de GRU.
* `payment.gru.cancel.requested` Cancelamento de Pagamento de GRU solicitado.
* `payment.gru.cancel.confirmed` Cancelamento de Pagamento de GRU confirmada.
* `payment.gru.cancel.failed` Falha no cancelamento de Pagamento de GRU.
* `payment.gru.cancel.error` Ocorreu um erro no cancelamento de Pagamento de GRU.
* `payment.pix.register.requested` Pagamento de Pix solicitado.
* `payment.pix.register.confirmed` Pagamento de Pix confirmado.
* `payment.pix.register.failed` Falha no envio do Pagamento de Pix.
* `payment.pix.register.error` Ocorreu um erro no envio de Pagamento de Pix.
* `payment.pix.approve.requested` Liberação de Pagamento de Pix solicitada.
* `payment.pix.approve.confirmed` Liberação de Pagamento de Pix confirmada.
* `payment.pix.approve.failed` Falha na liberação de Pagamento de Pix.
* `payment.pix.approve.error` Ocorreu um erro na liberação de Pagamento de Pix.
* `payment.pix.reschedule.requested` Reagendamento de Pagamento de Pix solicitado.
* `payment.pix.reschedule.confirmed` Reagendamento de Pagamento de Pix confirmado.
* `payment.pix.reschedule.failed` Falha no Reagendamento de Pagamento de Pix.
* `payment.pix.reschedule.error` Ocorreu um erro no Reagendamento de Pagamento de Pix.
* `payment.pix.cancel.requested` Cancelamento de Pagamento de Pix solicitado.
* `payment.pix.cancel.confirmed` Cancelamento de Pagamento de Pix confirmada.
* `payment.pix.cancel.failed` Falha no cancelamento de Pagamento de Pix.
* `payment.pix.cancel.error` Ocorreu um erro no cancelamento de Pagamento de Pix.
* `payment.batch.db.created` Lote de Pagamento criado.
* `payment.batch.db.updated` Lote de Pagamento atualizado.
* `payment.batch.db.deleted` Lote de Pagamento excluído.
* `payment.batch.awaiting_approval` Lote de pagamento aguardando liberação.
* `payment.bank_billet_batch.awaiting_approval` Lote de Pagamento de Boleto aguardando liberação.
* `payment.bank_billet_batch.register.requested` Lote de Pagamento de Boleto solicitado.
* `payment.bank_billet_batch.register.confirmed` Lote de Pagamento de Boleto confirmado.
* `payment.bank_billet_batch.register.failed` Falha no envio do Lote de Pagamento de Boleto.
* `payment.bank_billet_batch.register.error` Ocorreu um erro no cancelamento do Lote de Pagamento de Boleto.
* `payment.bank_billet_batch.approve.requested` Liberação de Lote de Pagamento de Boleto solicitado.
* `payment.bank_billet_batch.approve.confirmed` Liberação de Lote de Pagamento de Boleto confirmado.
* `payment.bank_billet_batch.approve.failed` Falha na liberação de Lote de Pagamento de Boleto.
* `payment.bank_billet_batch.approve.error` Ocorreu um erro na liberação de Lote de Pagamento de Boleto.
* `payment.bank_billet_batch.reprove.requested` Rejeição de Lote de Pagamento de Boleto solicitado.
* `payment.bank_billet_batch.reprove.confirmed` Rejeição de Lote de Pagamento de Boleto confirmado.
* `payment.bank_billet_batch.reprove.failed` Falha na rejeição de Lote de Pagamento de Boleto.
* `payment.bank_billet_batch.reprove.error` Ocorreu um erro na rejeição de Lote de Pagamento de Boleto.
* `payment.darf_batch.awaiting_approval` Lote de Pagamento de DARF aguardando liberação.
* `payment.darf_batch.register.requested` Lote de Pagamento de DARF solicitado.
* `payment.darf_batch.register.confirmed` Lote de Pagamento de DARF confirmado.
* `payment.darf_batch.register.failed` Falha no envio do Lote de Pagamento de DARF.
* `payment.darf_batch.register.error` Ocorreu um erro no cancelamento do Lote de Pagamento de DARF.
* `payment.darf_batch.approve.requested` Liberação de Lote de Pagamento de DARF solicitado.
* `payment.darf_batch.approve.confirmed` Liberação de Lote de Pagamento de DARF confirmado.
* `payment.darf_batch.approve.failed` Falha na liberação de Lote de Pagamento de DARF.
* `payment.darf_batch.approve.error` Ocorreu um erro na liberação de Lote de Pagamento de DARF.
* `payment.darf_batch.reprove.requested` Rejeição de Lote de Pagamento de DARF solicitado.
* `payment.darf_batch.reprove.confirmed` Rejeição de Lote de Pagamento de DARF confirmado.
* `payment.darf_batch.reprove.failed` Falha na rejeição de Lote de Pagamento de DARF.
* `payment.darf_batch.reprove.error` Ocorreu um erro na rejeição de Lote de Pagamento de DARF.
* `payment.utility_batch.awaiting_approval` Lote de Pagamento de Conta de Consumo aguardando liberação.
* `payment.utility_batch.register.requested` Lote de Pagamento de Conta de Consumo solicitado.
* `payment.utility_batch.register.confirmed` Lote de Pagamento de Conta de Consumo confirmado.
* `payment.utility_batch.register.failed` Falha no envio do Lote de Pagamento de Conta de Consumo.
* `payment.utility_batch.register.error` Ocorreu um erro no cancelamento do Lote de Pagamento de Conta de Consumo.
* `payment.utility_batch.approve.requested` Liberação de Lote de Pagamento de Conta de Consumo solicitado.
* `payment.utility_batch.approve.confirmed` Liberação de Lote de Pagamento de Conta de Consumo confirmado.
* `payment.utility_batch.approve.failed` Falha na liberação de Lote de Pagamento de Conta de Consumo.
* `payment.utility_batch.approve.error` Ocorreu um erro na liberação de Lote de Pagamento de Conta de Consumo.
* `payment.utility_batch.reprove.requested` Rejeição de Lote de Pagamento de Conta de Consumo solicitado.
* `payment.utility_batch.reprove.confirmed` Rejeição de Lote de Pagamento de Conta de Consumo confirmado.
* `payment.utility_batch.reprove.failed` Falha na rejeição de Lote de Pagamento de Conta de Consumo.
* `payment.utility_batch.reprove.error` Ocorreu um erro na rejeição de Lote de Pagamento de Conta de Consumo.
* `payment.gru_batch.awaiting_approval` Lote de Pagamento de GRU aguardando liberação.
* `payment.gru_batch.register.requested` Lote de Pagamento de GRU solicitado.
* `payment.gru_batch.register.confirmed` Lote de Pagamento de GRU confirmado.
* `payment.gru_batch.register.failed` Falha no envio do Lote de Pagamento de GRU.
* `payment.gru_batch.register.error` Ocorreu um erro no cancelamento do Lote de Pagamento de GRU.
* `payment.gru_batch.approve.requested` Liberação de Lote de Pagamento de GRU solicitado.
* `payment.gru_batch.approve.confirmed` Liberação de Lote de Pagamento de GRU confirmado.
* `payment.gru_batch.approve.failed` Falha na liberação de Lote de Pagamento de GRU.
* `payment.gru_batch.approve.error` Ocorreu um erro na liberação de Lote de Pagamento de GRU.
* `payment.gru_batch.reprove.requested` Rejeição de Lote de Pagamento de GRU solicitado.
* `payment.gru_batch.reprove.confirmed` Rejeição de Lote de Pagamento de GRU confirmado.
* `payment.gru_batch.reprove.failed` Falha na rejeição de Lote de Pagamento de GRU.
* `payment.gru_batch.reprove.error` Ocorreu um erro na rejeição de Lote de Pagamento de GRU.
* `payment.pix_batch.awaiting_approval` Lote de Pagamento de Pix aguardando liberação.
* `payment.pix_batch.register.requested` Lote de Pagamento de Pix solicitado.
* `payment.pix_batch.register.confirmed` Lote de Pagamento de Pix confirmado.
* `payment.pix_batch.register.failed` Falha no envio do Lote de Pagamento de Pix.
* `payment.pix_batch.register.error` Ocorreu um erro no cancelamento do Lote de Pagamento de Pix.
* `payment.pix_batch.approve.requested` Liberação de Lote de Pagamento de Pix solicitado.
* `payment.pix_batch.approve.confirmed` Liberação de Lote de Pagamento de Pix confirmado.
* `payment.pix_batch.approve.failed` Falha na liberação de Lote de Pagamento de Pix.
* `payment.pix_batch.approve.error` Ocorreu um erro na liberação de Lote de Pagamento de Pix.
* `payment.pix_batch.reprove.requested` Rejeição de Lote de Pagamento de Pix solicitado.
* `payment.pix_batch.reprove.confirmed` Rejeição de Lote de Pagamento de Pix confirmado.
* `payment.pix_batch.reprove.failed` Falha na rejeição de Lote de Pagamento de Pix.
* `payment.pix_batch.reprove.error` Ocorreu um erro na rejeição de Lote de Pagamento de Pix.
* `payment.dda.account.db.created` Conta DDA criada
* `payment.dda.account.register.requested` Conta DDA solicitada.
* `payment.dda.account.register.failed` Falha na criação da conta DDA.
* `payment.dda.account.register.error` Ocorreu um erro no registro da conta DDA.
* `payment.dda.account.register.confirmed` Conta DDA confirmada.
* `payment.dda.account.bank_billets_sync.requested` Sincronização de Boletos solicitada.
* `payment.dda.account.bank_billets_sync.failed` Falha na sincronização de Boletoe.
* `payment.dda.account.bank_billets_sync.error` Ocorreu um erro na sincronização de Boletos.
* `payment.dda.account.bank_billets_sync.confirmed` Sincronização de Boletos confirmada.
* `payment.dda.bank_billet.db.created` Boleto DDA criado
* `payment.dda.bank_billet.get.requested` Informação do Boleto solicitada.
* `payment.dda.bank_billet.get.confirmed` Informação do Boleto confirmada.
* `payment.dda.bank_billet.get.failed` Falha na informação do Boleto.
* `payment.dda.bank_billet.get.error` Ocorreu um erro na informação do Boleto.
* `payment.dda.bank_billet.sync.requested` Sincronização do Boleto solicitada.
* `payment.dda.bank_billet.sync.confirmed` Sincronização do Boleto confirmada.
* `payment.dda.bank_billet.sync.failed` Falha na sincronização do Boleto.
* `payment.dda.bank_billet.sync.error` Ocorreu um erro na sincronização do Boleto.
* `credit.restriction.add.requested` Inclusão da restrição de crédito solicitada.
* `credit.restriction.add.failed` Falha na inclusão da restrição de crédito.
* `credit.restriction.add.error` Ocorreu um erro na inclusão da restrição de crédito.
* `credit.restriction.add.confirmed` Inclusão da restrição de crédito confirmada.
* `credit.restriction.remove.requested` Remoção da restrição de crédito solicitada.
* `credit.restriction.remove.confirmed` Remoção da restrição de crédito confirmada.
* `credit.restriction.remove.failed` Falha na remoção da restrição de crédito.
* `credit.restriction.remove.error` Ocorreu um erro na remoção da restrição de crédito.
* `charge.payment.db.created` Pagamento de cobrança criado.
* `charge.payment.db.updated` Pagamento de cobrança atualizado.
* `charge.payment.db.deleted` Pagamento de cobrança excluído.
* `charge.bank_billet.payment.notified` Baixa operacional de boleto notificada.
* `charge.bank_billet.payment.canceled` Baixa operacional de boleto cancelada.
* `charge.bank_billet.payment.confirmed` Baixa operacional de boleto liquidada.
* `data.bank_billet_query.success` Consulta de boleto realizada com sucesso.
* `data.bank_billet_query.error` Consulta de boleto com erro.
* `data.bank_billet_query.db.created` Consulta de boleto criada.
* `data.bank_billet_query.db.updated` Consulta de boleto atualizada.
* `data.bank_billet_query.db.deleted` Consulta de boleto excluída.
* `email_account.db.created` Conta de e-mail criada.
* `email_account.db.updated` Conta de e-mail atualizada.
* `email_account.db.deleted` Conta de e-mail excluída.
* `email_account.identity.pending` Aguardando identidade
* `email_account.identity.created` Identidade criada
* `email_account.identity.error` Identidade já existente
* `email_account.identity.failure` Falha da identidade
* `email_account.dns.not_ready` DNS não pronto
* `email_account.dns.awaiting` Aguardando validação DNS
* `email_account.dns.validated` DNS validado
* `email_account.dns.error` Falha na validação do DNS
* `email_account.dns.failure` Falha na tentativa do DNS
* `enotas.nfe.generated` Enotas: nota fiscal gerada
  - `status` (optional): integer - Situação:
* `0` Pendente
* `1` Entregue
* `2` Falhou
  - `created_from` (optional): string - A partir da Data de criação (DD/MM/YYYY) ou (YYYY-MM-DD)
  - `created_to` (optional): string - Até a Data de criação (DD/MM/YYYY) ou (YYYY-MM-DD)
- Example:
```
{
  "resource_owner_id": 1,
  "webhook_id": 1,
  "uid": "string",
  "response_code": 1,
  "event_code": "bank_billet.created",
  "status": 1,
  "created_from": "2024-01-15",
  "created_to": "2024-01-15"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Webhooks reeenviados com sucesso

#### GET /v1/v1/webhook_deliveries/{id}
**Description**: Informações do Webhook Enviado

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do webhook

**Response**:

Webhook encontrado com sucesso

```
{
  "id": 1,
  "uid": "string",
  "url": "string",
  "request_payload": null,
  "request_error": "string",
  "response_headers": null,
  "response_body": null,
  "response_code": 1,
  "response_message": "string",
  "content_type": "string",
  "delivered_at": "2024-01-15T10:30:00Z",
  "first_try": "2024-01-15T10:30:00Z",
  "failed_at": "2024-01-15T10:30:00Z",
  "duration": 1,
  "event_code": "bank_billet.created",
  "webhook_id": 1,
  "fails_count": 1,
  "resource_owner_id": 1,
  "bank_billet_account_id": 1,
  "status": "pending",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


### Lotes

#### GET /v1/v1/bank_billet_batches
**Description**: Listar Lotes

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Sucesso na listagem dos lotes

```
[
  {
    "id": 1,
    "name": "string",
    "bank_billet_ids": [
      1,
      1
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "name": "string",
    "bank_billet_ids": [
      1,
      1
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### POST /v1/v1/bank_billet_batches
**Description**: Criar Lote

**Request Body** (application/json):

- Type: `v1_bank_billet_batch_create_object`
- Properties:
  - `name` (required): string - Nome do lote.
  - `bank_billet_ids` (optional): string - IDs dos [Boletos](/reference/post_v1-bank-billets-1) separados por vírgula.
- Example:
```
{
  "name": "string",
  "bank_billet_ids": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Lote criado com sucesso

```
{
  "id": 1,
  "name": "string",
  "bank_billet_ids": [
    1,
    1
  ],
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### DELETE /v1/v1/bank_billet_batches/{id}/
**Description**: Excluir o lote

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Lote

**Response**:

Lote excluído

#### GET /v1/v1/bank_billet_batches/{id}/
**Description**: Informações do Lote

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Lote

**Response**:

Lote encontrado

```
{
  "id": 1,
  "name": "string",
  "bank_billet_ids": [
    1,
    1
  ],
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### PUT /v1/v1/bank_billet_batches/{id}/add_bank_billets
**Description**: Incluir Boletos no Lote

**Request Body** (application/json):

- Properties:
  - `bank_billet_ids` (required): string - IDs dos [Boletos](/reference/post_v1-bank-billets-1) separados por vírgula.
- Example:
```
{
  "bank_billet_ids": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Lote

**Response**:

Boletos adicionados com sucesso

#### POST /v1/v1/bank_billet_batches/{id}/pdf
**Description**: Exportar Lote no Formato .pdf

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Lote

**Response**:

Solicitação de exportação do lote criada com sucesso

```
{
  "id": 1,
  "account_id": 1,
  "bank_billet_batch_id": 1,
  "status": "pending",
  "file_format": "zip",
  "output_url": "string",
  "processed_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### DELETE /v1/v1/bank_billet_batches/{id}/remove_bank_billet
**Description**: Excluir Boleto do Lote

**Request Body** (application/json):

- Properties:
  - `bank_billet_id` (required): integer - ID dos [Boleto](/reference/post_v1-bank-billets-1) separados por vírgula.
- Example:
```
{
  "bank_billet_id": 1
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Lote

**Response**:

Boleto removido com sucesso

#### POST /v1/v1/bank_billet_batches/{id}/zip
**Description**: Exportar Lote no Formato .zip

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Lote

**Response**:

Solicitação de exportação do lote criada com sucesso

```
{
  "id": 1,
  "account_id": 1,
  "bank_billet_batch_id": 1,
  "status": "pending",
  "file_format": "zip",
  "output_url": "string",
  "processed_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


### Other

#### GET /v2/v2/automation/email/email_accounts
**Description**: Lista todas as contas de e-mail

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da página para paginação

**Response**:

Lista de contas de e-mail

```
{
  "status": 1,
  "data": [
    {
      "uid": "9e45d2e2-90b7-4908-a013-1e5ea23e5a00",
      "name": "Conta Principal",
      "sender_name": "Equipe Kobana",
      "reply_to_address": "resposta@example.com",
      "from_address": "no-reply@example.com",
      "domain": "example.com",
      "enabled": true,
      "activated": true,
      "tags": [
        "string",
        "string"
      ],
      "custom_data": {},
      "external_id": "external-123",
      "dns": {
        "identity_status": "created",
        "dns_status": "validated",
        "dns_records": [
          "...",
          "..."
        ]
      },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "9e45d2e2-90b7-4908-a013-1e5ea23e5a00",
      "name": "Conta Principal",
      "sender_name": "Equipe Kobana",
      "reply_to_address": "resposta@example.com",
      "from_address": "no-reply@example.com",
      "domain": "example.com",
      "enabled": true,
      "activated": true,
      "tags": [
        "string",
        "string"
      ],
      "custom_data": {},
      "external_id": "external-123",
      "dns": {
        "identity_status": "created",
        "dns_status": "validated",
        "dns_records": [
          "...",
          "..."
        ]
      },
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "count": 1,
    "page": 1,
    "items": 1,
    "pages": 1,
    "last": true,
    "next": "string",
    "prev": "string"
  }
}
```


#### POST /v2/v2/automation/email/email_accounts
**Description**: Criar nova conta de e-mail

**Request Body** (application/json):

- Properties:
  - `name` (optional): string - Nome da conta de e-mail.
  - `sender_name` (required): string - Nome do remetente.
  - `from_address` (required): string - Endereço de e-mail (From).
  - `reply_to_address` (required): string - Endereço de resposta (Reply-To).
  - `enabled` (optional): boolean - Indica se o envio de e-mails está habilitado.
  - `activated` (optional): boolean - Indica se a conta de e-mail está ativa.
  - `domain` (required): string - Domínio associado à conta de e-mail.
  - `external_id` (optional): string - Identificador externo associado à conta de e-mail.
  - `custom_data` (optional): object - Dados personalizados definidos pelo usuário no formato chave-valor.
  - `tags` (optional): array - Lista de etiquetas associadas à conta de e-mail.
- Example:
```
{
  "name": "string",
  "sender_name": "string",
  "from_address": "string",
  "reply_to_address": "string",
  "enabled": true,
  "activated": true,
  "domain": "string",
  "external_id": "string",
  "custom_data": {
    "key1": "string",
    "key2": "string"
  },
  "tags": [
    "string",
    "string"
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Conta de e-mail criada com sucesso

```
{
  "status": 1,
  "data": {}
}
```


#### DELETE /v2/v2/automation/email/email_accounts/{uid}
**Description**: Excluir conta de e-mail

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UID da conta de e-mail

**Response**:

Conta de e-mail excluída com sucesso

#### GET /v2/v2/automation/email/email_accounts/{uid}
**Description**: Informações da Conta de E-mail

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UID da conta de e-mail

**Response**:

Conta de e-mail encontrada

```
{
  "status": 1,
  "data": {}
}
```


#### PATCH /v2/v2/automation/email/email_accounts/{uid}
**Description**: Atualizar conta de e-mail

**Request Body** (application/json):

- Properties:
  - `name` (optional): string - Nome da conta de e-mail
  - `sender_name` (optional): string - Nome do remetente
  - `from_address` (optional): string - Endereço de e-mail
  - `enabled` (optional): boolean - Habilitar conta
- Example:
```
{
  "name": "string",
  "sender_name": "string",
  "from_address": "string",
  "enabled": true
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UID da conta de e-mail

**Response**:

Conta de e-mail atualizada com sucesso

```
{
  "status": 1,
  "data": {}
}
```


#### PUT /v2/v2/automation/email/email_accounts/{uid}/check_identity
**Description**: Verificar identidade da conta de e-mail

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UID da conta de e-mail

**Response**:

Verificação de identidade executada com sucesso

```
{
  "status": 1,
  "data": {}
}
```


### Pix

#### GET /v2/v2/charge/pix
**Description**: Listar Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `txid` (query, string) (optional): Filtro por TXID do Pix
- `status` (query, string) (optional): Filtro por status do Pix
- `pix_account_id` (query, integer) (optional): Filtro por ID da conta do Pix
- `expire_from` (query, string) (optional): Data inicial do filtro de data de vencimento do Pix
- `expire_to` (query, string) (optional): Data final do filtro de data de vencimento do Pix
- `paid_from` (query, string) (optional): Data inicial do filtro de data de pagamento do Pix
- `paid_to` (query, string) (optional): Data final do filtro de data de pagamento do Pix
- `created_from` (query, string) (optional): Data inicial do filtro de data de criação do Pix
- `created_to` (query, string) (optional): Data final do filtro de data de criação do Pix
- `cnpj_cpf` (query, string) (optional): Filtro por CNPJ/CPF do pagador
- `tags` (query, string) (optional): Filtro por tags do pix

**Response**:

Buscando Pix por tags

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "payer": {
        "document_number": "111.321.322-09",
        "name": "João da Silva",
        "address": {
          "street": "...",
          "zip_code": "...",
          "complement": "...",
          "number": "...",
          "neighborhood": "...",
          "city_name": "...",
          "state": "..."
        }
      },
      "status": "string",
      "pix_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "txid": "string",
      "expire_at": "2024-01-15T10:30:00Z",
      "revoke_days": 1,
      "message": "string",
      "additional_info": {},
      "qrcode": {
        "emv": "string",
        "png": "string"
      },
      "registration_kind": "string",
      "kind": "string",
      "command_ids": [
        1,
        1
      ],
      "end_to_end_id": "string",
      "custom_data": {},
      "virtual_pix_id": 1,
      "fine_type": 1,
      "fine_amount": "50.00",
      "fine_percentage": "5",
      "reduction_type": 1,
      "reduction_amount": "25.00",
      "reduction_percentage": "2.5",
      "interest_type": 1,
      "interest_amount": "20.00",
      "interest_percentage": "2.5",
      "tags": [
        "string",
        "string"
      ],
      "tag_list": "string",
      "created_via_api": true,
      "financial_provider_external_id": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "payer": {
        "document_number": "111.321.322-09",
        "name": "João da Silva",
        "address": {
          "street": "...",
          "zip_code": "...",
          "complement": "...",
          "number": "...",
          "neighborhood": "...",
          "city_name": "...",
          "state": "..."
        }
      },
      "status": "string",
      "pix_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "txid": "string",
      "expire_at": "2024-01-15T10:30:00Z",
      "revoke_days": 1,
      "message": "string",
      "additional_info": {},
      "qrcode": {
        "emv": "string",
        "png": "string"
      },
      "registration_kind": "string",
      "kind": "string",
      "command_ids": [
        1,
        1
      ],
      "end_to_end_id": "string",
      "custom_data": {},
      "virtual_pix_id": 1,
      "fine_type": 1,
      "fine_amount": "50.00",
      "fine_percentage": "5",
      "reduction_type": 1,
      "reduction_amount": "25.00",
      "reduction_percentage": "2.5",
      "interest_type": 1,
      "interest_amount": "20.00",
      "interest_percentage": "2.5",
      "tags": [
        "string",
        "string"
      ],
      "tag_list": "string",
      "created_via_api": true,
      "financial_provider_external_id": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/charge/pix
**Description**: Criar um Pix

**Request Body** (application/json):

- Type: `v2_pix`
- Properties:
  - `uid` (optional): string - UID do Pix
  - `amount` (required): number - Quantia
  - `payer` (optional): object - Dados do Pagador
  - `status` (optional): string - Status do Pix.

`opened`: Cobrança Pix em aberto (não pago). [Estado Inicial]
`paid`: Cobrança Pix paga.
`overdue`: Cobrança Pix em atraso.
`canceled`: Cobrança Pix cancelada.
`generation_failed`: Cobrança Pix criada, mas não foi registrada no banco.

  - `pix_account_uid` (required): string - UID da Conta Pix
  - `txid` (optional): string - TXID do Pix
  - `expire_at` (required): string - Data e hora de vencimento. Formato iso8601
  - `revoke_days` (optional): integer - Número de dias ativo após o vencimento
  - `message` (optional): string - Mensagem de solicitação ao pagador
  - `additional_info` (optional): object - Informações adicionais para o pagador
  - `qrcode` (optional): object - QR Code do Pix
  - `registration_kind` (optional): string - Tipo do Pix.

  `instant`: Imediato (default)
  `billing`: Cobrança

  - `kind` (optional): string - Tipo do Pix.

`instant`: Imediato (default)
`billing`: Cobrança

  - `command_ids` (optional): array - 
  - `end_to_end_id` (optional): string - End To End Id do Pix
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `virtual_pix_id` (optional): integer - ID do Pix gerado por membro BackOffice. (BackOffice precisa estar habilitado).
  - `fine_type` (optional): integer - Tipo do Multa:
                    * `0` Sem multa (isento)
                    * `1` Por valor
                    * `2` Por porcentagem
  - `fine_amount` (optional): string - Valor da Multa
  - `fine_percentage` (optional): string - Percentual da Multa
  - `reduction_type` (optional): integer - Tipo de Abatimento:
                    * `0` Não se aplica
                    * `1` Por valor
                    * `2` Por porcentagem
  - `reduction_amount` (optional): string - Valor do Abatimento
  - `reduction_percentage` (optional): string - Percentual do Abatimento
  - `interest_type` (optional): integer - Tipo do Juros:
                  * `0` Não se Aplica (isento)
                  * `1` Por valor Diário
                  * `2` Por porcentagem Diária
                  * `3` Por porcentagem Mensal
  - `interest_amount` (optional): string - Valor da Multa
  - `interest_percentage` (optional): string - Percentual da Multa
  - `tags` (optional): array - Tags associadas ao pix
  - `tag_list` (optional): string - Tags associadas ao pix
  - `created_via_api` (optional): boolean - Indica se o Pix foi criado por API
  - `financial_provider_external_id` (optional): string - ID na instituição financeira
  - `created_at` (optional): string - Data e hora de criação do registro
  - `updated_at` (optional): string - Data e hora da última atualização do registro
- Example:
```
{
  "uid": "123e4567-e89b-12d3-a456-426614174000",
  "amount": 120.99,
  "payer": {
    "document_number": "111.321.322-09",
    "name": "João da Silva",
    "address": {
      "street": "Rua das Flores",
      "zip_code": "12345-678",
      "complement": "Casa 2",
      "number": "123",
      "neighborhood": "Centro",
      "city_name": "São Paulo",
      "state": "SP"
    }
  },
  "status": "string",
  "pix_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "txid": "string",
  "expire_at": "2024-01-15T10:30:00Z",
  "revoke_days": 1,
  "message": "string",
  "additional_info": {},
  "qrcode": {
    "emv": "string",
    "png": "string"
  },
  "registration_kind": "string",
  "kind": "string",
  "command_ids": [
    1,
    1
  ],
  "end_to_end_id": "string",
  "custom_data": {},
  "virtual_pix_id": 1,
  "fine_type": 1,
  "fine_amount": "50.00",
  "fine_percentage": "5",
  "reduction_type": 1,
  "reduction_amount": "25.00",
  "reduction_percentage": "2.5",
  "interest_type": 1,
  "interest_amount": "20.00",
  "interest_percentage": "2.5",
  "tags": [
    "string",
    "string"
  ],
  "tag_list": "string",
  "created_via_api": true,
  "financial_provider_external_id": "string",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Pix criado com dados de cliente

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 120.99,
    "payer": {
      "document_number": "111.321.322-09",
      "name": "João da Silva",
      "address": {
        "street": "Rua das Flores",
        "zip_code": "12345-678",
        "complement": "Casa 2",
        "number": "123",
        "neighborhood": "Centro",
        "city_name": "São Paulo",
        "state": "SP"
      }
    },
    "status": "string",
    "pix_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "txid": "string",
    "expire_at": "2024-01-15T10:30:00Z",
    "revoke_days": 1,
    "message": "string",
    "additional_info": {},
    "qrcode": {
      "emv": "string",
      "png": "string"
    },
    "registration_kind": "string",
    "kind": "string",
    "command_ids": [
      1,
      1
    ],
    "end_to_end_id": "string",
    "custom_data": {},
    "virtual_pix_id": 1,
    "fine_type": 1,
    "fine_amount": "50.00",
    "fine_percentage": "5",
    "reduction_type": 1,
    "reduction_amount": "25.00",
    "reduction_percentage": "2.5",
    "interest_type": 1,
    "interest_amount": "20.00",
    "interest_percentage": "2.5",
    "tags": [
      "string",
      "string"
    ],
    "tag_list": "string",
    "created_via_api": true,
    "financial_provider_external_id": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### PUT /v2/v2/charge/pix/{pix_uid}/cancel
**Description**: Cancelar um Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `pix_uid` (path, string) (required): UID do Pix

**Response**:

Comando criado com sucesso

```
{
  "status": 1,
  "data": {
    "id": 1,
    "status": "string",
    "operation": "string",
    "params": {},
    "payload": {},
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "pix": {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "payer": {
        "document_number": "...",
        "name": "...",
        "address": "..."
      },
      "status": "string",
      "pix_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "txid": "string",
      "expire_at": "2024-01-15T10:30:00Z",
      "revoke_days": 1,
      "message": "string",
      "additional_info": {},
      "qrcode": {
        "emv": "...",
        "png": "..."
      },
      "registration_kind": "string",
      "kind": "string",
      "command_ids": [
        "...",
        "..."
      ],
      "end_to_end_id": "string",
      "custom_data": {},
      "virtual_pix_id": 1,
      "fine_type": 1,
      "fine_amount": "50.00",
      "fine_percentage": "5",
      "reduction_type": 1,
      "reduction_amount": "25.00",
      "reduction_percentage": "2.5",
      "interest_type": 1,
      "interest_amount": "20.00",
      "interest_percentage": "2.5",
      "tags": [
        "...",
        "..."
      ],
      "tag_list": "string",
      "created_via_api": true,
      "financial_provider_external_id": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  }
}
```


#### GET /v2/v2/charge/pix/{pix_uid}/commands
**Description**: Listar Comandos de um Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `pix_uid` (path, string) (required): UID do Pix

**Response**:

Pix encontrado

```
{
  "status": 1,
  "data": [
    {
      "id": 1,
      "status": "string",
      "operation": "string",
      "params": {},
      "payload": {},
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "pix": {
        "uid": "...",
        "amount": "...",
        "payer": "...",
        "status": "...",
        "pix_account_uid": "...",
        "txid": "...",
        "expire_at": "...",
        "revoke_days": "...",
        "message": "...",
        "additional_info": "...",
        "qrcode": "...",
        "registration_kind": "...",
        "kind": "...",
        "command_ids": "...",
        "end_to_end_id": "...",
        "custom_data": "...",
        "virtual_pix_id": "...",
        "fine_type": "...",
        "fine_amount": "...",
        "fine_percentage": "...",
        "reduction_type": "...",
        "reduction_amount": "...",
        "reduction_percentage": "...",
        "interest_type": "...",
        "interest_amount": "...",
        "interest_percentage": "...",
        "tags": "...",
        "tag_list": "...",
        "created_via_api": "...",
        "financial_provider_external_id": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    },
    {
      "id": 1,
      "status": "string",
      "operation": "string",
      "params": {},
      "payload": {},
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "pix": {
        "uid": "...",
        "amount": "...",
        "payer": "...",
        "status": "...",
        "pix_account_uid": "...",
        "txid": "...",
        "expire_at": "...",
        "revoke_days": "...",
        "message": "...",
        "additional_info": "...",
        "qrcode": "...",
        "registration_kind": "...",
        "kind": "...",
        "command_ids": "...",
        "end_to_end_id": "...",
        "custom_data": "...",
        "virtual_pix_id": "...",
        "fine_type": "...",
        "fine_amount": "...",
        "fine_percentage": "...",
        "reduction_type": "...",
        "reduction_amount": "...",
        "reduction_percentage": "...",
        "interest_type": "...",
        "interest_amount": "...",
        "interest_percentage": "...",
        "tags": "...",
        "tag_list": "...",
        "created_via_api": "...",
        "financial_provider_external_id": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### GET /v2/v2/charge/pix/{pix_uid}/commands/{id}
**Description**: Visualizar um Comando

**Parameters**:

- `pix_uid` (path, string) (required): UID do Pix
- `id` (path, string) (required): ID da Atualização do Pix

**Response**:

Atualização do Pix encontrada

```
{
  "status": 1,
  "data": {
    "id": 1,
    "status": "string",
    "operation": "string",
    "params": {},
    "payload": {},
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "pix": {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "payer": {
        "document_number": "...",
        "name": "...",
        "address": "..."
      },
      "status": "string",
      "pix_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "txid": "string",
      "expire_at": "2024-01-15T10:30:00Z",
      "revoke_days": 1,
      "message": "string",
      "additional_info": {},
      "qrcode": {
        "emv": "...",
        "png": "..."
      },
      "registration_kind": "string",
      "kind": "string",
      "command_ids": [
        "...",
        "..."
      ],
      "end_to_end_id": "string",
      "custom_data": {},
      "virtual_pix_id": 1,
      "fine_type": 1,
      "fine_amount": "50.00",
      "fine_percentage": "5",
      "reduction_type": 1,
      "reduction_amount": "25.00",
      "reduction_percentage": "2.5",
      "interest_type": 1,
      "interest_amount": "20.00",
      "interest_percentage": "2.5",
      "tags": [
        "...",
        "..."
      ],
      "tag_list": "string",
      "created_via_api": true,
      "financial_provider_external_id": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  }
}
```


#### PUT /v2/v2/charge/pix/{pix_uid}/update
**Description**: Atualizar um Pix

**Request Body** (application/json):

- Type: `v2_pix_update`
- Properties:
  - `amount` (optional): number - Quantia
  - `payer` (optional): object - Dados do Pagador
  - `status` (optional): string - Status do Pix.

`opened`: Cobrança Pix em aberto (não pago). [Estado Inicial]
`paid`: Cobrança Pix paga.
`overdue`: Cobrança Pix em atraso.
`canceled`: Cobrança Pix cancelada.
`generation_failed`: Cobrança Pix criada, mas não foi registrada no banco.

  - `expire_at` (optional): string - Data e hora de vencimento. Formato iso8601
  - `revoke_days` (optional): integer - Número de dias ativo após o vencimento
  - `message` (optional): string - Mensagem de solicitação ao pagador
  - `additional_info` (optional): object - Informações adicionais para o pagador
  - `fine_type` (optional): integer - Tipo do Multa:
                    * `0` Sem multa (isento)
                    * `1` Por valor
                    * `2` Por porcentagem
  - `fine_amount` (optional): string - Valor da Multa
  - `fine_percentage` (optional): string - Percentual da Multa
  - `reduction_type` (optional): integer - Tipo de Abatimento:
                    * `0` Não se aplica
                    * `1` Por valor
                    * `2` Por porcentagem
  - `reduction_amount` (optional): string - Valor do Abatimento
  - `reduction_percentage` (optional): string - Percentual do Abatimento
  - `interest_type` (optional): integer - Tipo do Juros:
                  * `0` Não se Aplica (isento)
                  * `1` Por valor Diário
                  * `2` Por porcentagem Diária
                  * `3` Por porcentagem Mensal
  - `interest_amount` (optional): string - Valor da Multa
  - `interest_percentage` (optional): string - Percentual da Multa
  - `created_via_api` (optional): boolean - Indica se o Pix foi criado por API
  - `financial_provider_external_id` (optional): string - ID na instituição financeira
  - `created_at` (optional): string - Data e hora de criação do registro
  - `updated_at` (optional): string - Data e hora da última atualização do registro
- Example:
```
{
  "amount": 120.99,
  "payer": {
    "document_number": "111.321.322-09",
    "name": "João da Silva",
    "address": {
      "street": "Rua das Flores",
      "zip_code": "12345-678",
      "complement": "Casa 2",
      "number": "123",
      "neighborhood": "Centro",
      "city_name": "São Paulo",
      "state": "SP"
    }
  },
  "status": "string",
  "expire_at": "2024-01-15T10:30:00Z",
  "revoke_days": 1,
  "message": "string",
  "additional_info": {},
  "fine_type": 1,
  "fine_amount": "50.00",
  "fine_percentage": "5",
  "reduction_type": 1,
  "reduction_amount": "25.00",
  "reduction_percentage": "2.5",
  "interest_type": 1,
  "interest_amount": "20.00",
  "interest_percentage": "2.5",
  "created_via_api": true,
  "financial_provider_external_id": "string",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `pix_uid` (path, string) (required): UID do Pix

**Response**:

Comando criado com sucesso

```
{
  "status": 1,
  "data": {
    "id": 1,
    "status": "string",
    "operation": "string",
    "params": {},
    "payload": {},
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "pix": {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "payer": {
        "document_number": "...",
        "name": "...",
        "address": "..."
      },
      "status": "string",
      "pix_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "txid": "string",
      "expire_at": "2024-01-15T10:30:00Z",
      "revoke_days": 1,
      "message": "string",
      "additional_info": {},
      "qrcode": {
        "emv": "...",
        "png": "..."
      },
      "registration_kind": "string",
      "kind": "string",
      "command_ids": [
        "...",
        "..."
      ],
      "end_to_end_id": "string",
      "custom_data": {},
      "virtual_pix_id": 1,
      "fine_type": 1,
      "fine_amount": "50.00",
      "fine_percentage": "5",
      "reduction_type": 1,
      "reduction_amount": "25.00",
      "reduction_percentage": "2.5",
      "interest_type": 1,
      "interest_amount": "20.00",
      "interest_percentage": "2.5",
      "tags": [
        "...",
        "..."
      ],
      "tag_list": "string",
      "created_via_api": true,
      "financial_provider_external_id": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  }
}
```


#### DELETE /v2/v2/charge/pix/{uid}
**Description**: Excluir um Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): ID do Pix

**Response**:

Pix deletado

#### GET /v2/v2/charge/pix/{uid}
**Description**: Visualizar um Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UID do Pix

**Response**:

Pix encontrado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 120.99,
    "payer": {
      "document_number": "111.321.322-09",
      "name": "João da Silva",
      "address": {
        "street": "Rua das Flores",
        "zip_code": "12345-678",
        "complement": "Casa 2",
        "number": "123",
        "neighborhood": "Centro",
        "city_name": "São Paulo",
        "state": "SP"
      }
    },
    "status": "string",
    "pix_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "txid": "string",
    "expire_at": "2024-01-15T10:30:00Z",
    "revoke_days": 1,
    "message": "string",
    "additional_info": {},
    "qrcode": {
      "emv": "string",
      "png": "string"
    },
    "registration_kind": "string",
    "kind": "string",
    "command_ids": [
      1,
      1
    ],
    "end_to_end_id": "string",
    "custom_data": {},
    "virtual_pix_id": 1,
    "fine_type": 1,
    "fine_amount": "50.00",
    "fine_percentage": "5",
    "reduction_type": 1,
    "reduction_amount": "25.00",
    "reduction_percentage": "2.5",
    "interest_type": 1,
    "interest_amount": "20.00",
    "interest_percentage": "2.5",
    "tags": [
      "string",
      "string"
    ],
    "tag_list": "string",
    "created_via_api": true,
    "financial_provider_external_id": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/payment/pix
**Description**: Listar Pagamentos Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Pagamentos encontrados

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "status": "string",
      "registration_status": "string",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "source": "string",
      "pix": {
        "qrcode": "string",
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "status": "string",
      "registration_status": "string",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "source": "string",
      "pix": {
        "qrcode": "string",
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/payment/pix
**Description**: Criar um Pagamento Pix

**Request Body** (application/json):

- Type: `v2_new_payment_pix_single`
- Properties:
  - `amount` (optional): number - Quantia


* Opcional para `qrcode` imediato ou com vencimento.

  - `scheduled_to` (optional): string - Data de Agendamento
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `tags` (optional): array - Tags associadas
  - `qrcode` (required): string - QR Code Copia e Cola
  - `identifier` (optional): string - Identificação do pagamento no comprovante do provedor financeiro. (Uso exclusivo do banco)

Bancos que aceitam esse campo (via API): Itaú

- Example:
```
{
  "amount": 120.99,
  "scheduled_to": "2024-01-15",
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "external_id": "123456-abc-789",
  "custom_data": {},
  "tags": [
    "tag1",
    "tag1"
  ],
  "qrcode": "string",
  "identifier": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Pagamento criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 120.99,
    "scheduled_to": "2024-01-15",
    "status": "string",
    "registration_status": "string",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "source": "string",
    "pix": {
      "qrcode": "string",
      "beneficiary": {
        "document_number": "80.897.837/0001-14",
        "name": "Empresa Prestadora de Serviços Ltda."
      }
    },
    "identifier": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/payment/pix/{uid}
**Description**: Visualizar um Pagamento Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UUID do Pagamento Pix

**Response**:

Pagamento encontrado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 120.99,
    "scheduled_to": "2024-01-15",
    "status": "string",
    "registration_status": "string",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "source": "string",
    "pix": {
      "qrcode": "string",
      "beneficiary": {
        "document_number": "80.897.837/0001-14",
        "name": "Empresa Prestadora de Serviços Ltda."
      }
    },
    "identifier": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### POST /v2/v2/payment/pix_batches
**Description**: Criar um Lote de Pagamento Pix

**Request Body** (application/json):

- Type: `v2_new_payment_batch_pix`
- Properties:
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `payments` (required): array - Lista de Pagamentos de Pix novos ou existentes.
- Example:
```
{
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "payments": [
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ],
      "qrcode": "string",
      "identifier": "string"
    },
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ],
      "qrcode": "string",
      "identifier": "string"
    }
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Lote de Pagamento criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "payments": [
      {
        "uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "status": "...",
        "registration_status": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "financial_account_uid": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "source": "...",
        "pix": "...",
        "identifier": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "status": "...",
        "registration_status": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "financial_account_uid": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "source": "...",
        "pix": "...",
        "identifier": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/transfer/pix
**Description**: Listar Transferências Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Sucesso na listagem das transferências

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "transfer_purpose": {
        "code": "98",
        "description": "Pagamentos Diversos"
      },
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 10.5,
      "scheduled_to": "2024-01-15",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "source": "string",
      "target": {
        "transfer_kind": "string",
        "pix": {
          "txid": "...",
          "pix_type": "...",
          "key_type": "...",
          "key": "..."
        },
        "bank_account": {
          "compe_number": "...",
          "ispb_number": "...",
          "agency_number": "...",
          "agency_digit": "...",
          "account_number": "...",
          "account_digit": "...",
          "document_number": "..."
        },
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "transfer_purpose": {
        "code": "98",
        "description": "Pagamentos Diversos"
      },
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 10.5,
      "scheduled_to": "2024-01-15",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "source": "string",
      "target": {
        "transfer_kind": "string",
        "pix": {
          "txid": "...",
          "pix_type": "...",
          "key_type": "...",
          "key": "..."
        },
        "bank_account": {
          "compe_number": "...",
          "ispb_number": "...",
          "agency_number": "...",
          "agency_digit": "...",
          "account_number": "...",
          "account_digit": "...",
          "document_number": "..."
        },
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/transfer/pix
**Description**: Criar uma Transferência Pix

**Request Body** (application/json):

- Type: `v2_new_transfer_pix`
- Properties:
  - `amount` (required): number - Quantia

  - `scheduled_to` (optional): string - Data de Agendamento
  - `transfer_purpose` (optional): string - Objetivo da Transferência
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `tags` (optional): array - Tags associadas
  - `beneficiary` (optional): object - Dados do Recebedor
  - `type` (required): string - Tipo do Pix

`key`: Chave.
`bank_account`: Dados bancários

  - `key_type` (optional): string - Tipo da Chave (Obrigatório se o campo `type` for `key`)

`cnpj`: CNPJ.
`random`: Aleatória.
`email`: E-mail.
`phone`: Celular

  - `key` (optional): string - Chave Pix (Obrigatório se o campo `type` for `key`)
  - `bank_account` (optional): object - Dados bancários (Obrigatório se o campo `type` for `bank_account`)
  - `identifier` (optional): string - Identificação do pagamento no comprovante do provedor financeiro. (Uso exclusivo do banco)

Bancos que aceitam esse campo (via API): Itaú

- Example:
```
{
  "amount": 120.99,
  "scheduled_to": "2024-01-15",
  "transfer_purpose": "98",
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "external_id": "123456-abc-789",
  "custom_data": {},
  "tags": [
    "tag1",
    "tag1"
  ],
  "beneficiary": {
    "document_number": "string",
    "name": "string"
  },
  "type": "string",
  "key_type": "string",
  "key": "string",
  "bank_account": {
    "compe_number": 1,
    "ispb_number": 1,
    "agency_number": "string",
    "agency_digit": "string",
    "account_number": "string",
    "account_digit": "string",
    "document_number": "string"
  },
  "identifier": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Transferência Pix criada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "transfer_purpose": {
      "code": "98",
      "description": "Pagamentos Diversos"
    },
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 10.5,
    "scheduled_to": "2024-01-15",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "source": "string",
    "target": {
      "transfer_kind": "string",
      "pix": {
        "txid": "string",
        "pix_type": "string",
        "key_type": "string",
        "key": "string"
      },
      "bank_account": {
        "compe_number": 1,
        "ispb_number": 1,
        "agency_number": "string",
        "agency_digit": "string",
        "account_number": "string",
        "account_digit": "string",
        "document_number": "string"
      },
      "beneficiary": {
        "document_number": "string",
        "name": "string"
      }
    },
    "identifier": "string",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/transfer/pix/{uid}
**Description**: Visualizar uma Transferência Pix

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UUID da Transferência

**Response**:

Transferência Pix encontrada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "transfer_purpose": {
      "code": "98",
      "description": "Pagamentos Diversos"
    },
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 10.5,
    "scheduled_to": "2024-01-15",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "source": "string",
    "target": {
      "transfer_kind": "string",
      "pix": {
        "txid": "string",
        "pix_type": "string",
        "key_type": "string",
        "key": "string"
      },
      "bank_account": {
        "compe_number": 1,
        "ispb_number": 1,
        "agency_number": "string",
        "agency_digit": "string",
        "account_number": "string",
        "account_digit": "string",
        "document_number": "string"
      },
      "beneficiary": {
        "document_number": "string",
        "name": "string"
      }
    },
    "identifier": "string",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### POST /v2/v2/transfer/pix_batches
**Description**: Criar um Lote de Transferência Pix

**Request Body** (application/json):

- Type: `v2_new_transfer_batch_pix`
- Properties:
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `transfers` (required): array - Lista de Transferências Pix novas ou existentes.
- Example:
```
{
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "transfers": [
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "transfer_purpose": "98",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ],
      "beneficiary": {
        "document_number": "...",
        "name": "..."
      },
      "type": "string",
      "key_type": "string",
      "key": "string",
      "bank_account": {
        "compe_number": "...",
        "ispb_number": "...",
        "agency_number": "...",
        "agency_digit": "...",
        "account_number": "...",
        "account_digit": "...",
        "document_number": "..."
      },
      "identifier": "string"
    },
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "transfer_purpose": "98",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ],
      "beneficiary": {
        "document_number": "...",
        "name": "..."
      },
      "type": "string",
      "key_type": "string",
      "key": "string",
      "bank_account": {
        "compe_number": "...",
        "ispb_number": "...",
        "agency_number": "...",
        "agency_digit": "...",
        "account_number": "...",
        "account_digit": "...",
        "document_number": "..."
      },
      "identifier": "string"
    }
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Lote de Transferência Pix criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "transport_kind": "string",
    "transfers": [
      {
        "uid": "...",
        "status": "...",
        "registration_status": "...",
        "transfer_purpose": "...",
        "financial_account_uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "source": "...",
        "target": "...",
        "identifier": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "uid": "...",
        "status": "...",
        "registration_status": "...",
        "transfer_purpose": "...",
        "financial_account_uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "source": "...",
        "target": "...",
        "identifier": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


### Provedores

#### GET /v2/v2/financial/providers
**Description**: Listar Provedores

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Provedores encontradas

```
{
  "status": 1,
  "data": [
    {
      "kind": "string",
      "slug": "string",
      "name": "string",
      "bcb_name": "string",
      "number": "string",
      "number_with_digit": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "kind": "string",
      "slug": "string",
      "name": "string",
      "bcb_name": "string",
      "number": "string",
      "number_with_digit": "string",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ]
}
```


### Recebimento de Boleto

#### GET /v1/v1/bank_billet_payments
**Description**: Listar Pagamentos de Boleto

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `paid_from` (query, string) (optional): A partir da Data de pagamento.
- `paid_to` (query, string) (optional): Até a Data de pagamento.
- `bank_billet_id` (query, string) (optional): ID do Boleto.
- `bank_billet_account_id` (query, string) (optional): ID da Carteira.

**Response**:

Sucesso na listagem dos pagamentos de boletos

```
[
  {
    "id": 1,
    "bank_billet_id": 1,
    "bank_billet_account_id": 1,
    "discharge_id": 1,
    "amount": 10.99,
    "paid_amount": 10.99,
    "paid_at": "2024-01-15",
    "paid_bank": "string",
    "paid_agency": "string",
    "bank_rate": 10.99,
    "credit_at": "2024-01-15",
    "direct": true,
    "expire_at": "2024-01-15",
    "kind": 1,
    "document_number": "string",
    "our_number": "string",
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "customer_person_name": "string",
    "paid_by_pix": true,
    "financial_provider_external_id": "string",
    "line_parsed": "string"
  },
  {
    "id": 1,
    "bank_billet_id": 1,
    "bank_billet_account_id": 1,
    "discharge_id": 1,
    "amount": 10.99,
    "paid_amount": 10.99,
    "paid_at": "2024-01-15",
    "paid_bank": "string",
    "paid_agency": "string",
    "bank_rate": 10.99,
    "credit_at": "2024-01-15",
    "direct": true,
    "expire_at": "2024-01-15",
    "kind": 1,
    "document_number": "string",
    "our_number": "string",
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "customer_person_name": "string",
    "paid_by_pix": true,
    "financial_provider_external_id": "string",
    "line_parsed": "string"
  }
]
```


#### POST /v1/v1/bank_billet_payments
**Description**: Efetuar Pagamento de Boleto

**Request Body** (application/json):

- Type: `v1_bank_billet_payment_object`
- Properties:
  - `id` (optional): integer - ID do Recebimento de Boleto
  - `bank_billet_id` (required): integer - ID do Boleto.
  - `bank_billet_account_id` (required): integer - ID da Carteira.
  - `discharge_id` (optional): integer - ID do Retorno.
  - `amount` (optional): number - Valor do Boleto
  - `paid_amount` (required): number - Valor Pago
  - `paid_at` (required): string - Data do Recebimento.
  - `paid_bank` (optional): string - Banco de Recebimento.
  - `paid_agency` (optional): string - Agência de Recebimento.
  - `bank_rate` (optional): number - Taxa bancária
  - `credit_at` (optional): string - Data de crédito.
  - `direct` (optional): boolean - Recebimento direto ao beneficíario
  - `expire_at` (optional): string - Data de vencimento.
  - `kind` (required): integer - Tipo de Recebimento:
* `0` Direto ao beneficíario/Em mãos
* `1` Boleto (Confirmado pelo banco via arquivo de retorno ou API)
* `2` PIX (Confirmado pelo banco via PIX)
  - `document_number` (optional): string - Número do Documento.
  - `our_number` (optional): string - Nosso Número.
  - `created_via_api` (optional): boolean - Enviado pela API
  - `created_at` (optional): string - Data e hora de criação.
  - `updated_at` (optional): string - Data e hora da última atualização.
  - `customer_person_name` (optional): string - Nome do cliente
  - `paid_by_pix` (optional): boolean - 	Recebimento via PIX
  - `financial_provider_external_id` (optional): string - ID do recebimento na instituição financeira
  - `line_parsed` (optional): string - Linha parseada com informações vindas do banco:

Conteúdo do retorno bancário. Pode mudar de acordo com o banco e o formato 240 ou 400. Se algum dos campos estiver em branco é porque o seu banco não disponibiliza essa informação.

| Valor | Descrição |
|---|---|
| paid_at | Data de recebimento |
| paid_amount | Valor pago |
| bank_rate | Taxa do boleto paga ao banco |
| credit_at | Data de crédito |
| credit_amount | Valor do Crédito |
| our_number | Nosso número |
| processed_our_number_raw | Nosso número formatado |
| discount | Desconto |
| billet_fine | Acréscimos(Multa/Juros cobrados) |
| other_fines | Outras cobranças adicionais |
| other_credit | Outros valores pagos |
| value_rebate | Outras taxas |
| error_code | Código de erro |
| event_type | Ocorrência bancária |
| agency_number | Agência |
| account_number | Conta |
| banco_recebedor | Banco recebedor |
| agencia_recebedora | Agência recebedora |
| control_number | Número de Controle |
| document_number | Número do Documento |
- Example:
```
{
  "id": 1,
  "bank_billet_id": 1,
  "bank_billet_account_id": 1,
  "discharge_id": 1,
  "amount": 10.99,
  "paid_amount": 10.99,
  "paid_at": "2024-01-15",
  "paid_bank": "string",
  "paid_agency": "string",
  "bank_rate": 10.99,
  "credit_at": "2024-01-15",
  "direct": true,
  "expire_at": "2024-01-15",
  "kind": 1,
  "document_number": "string",
  "our_number": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "customer_person_name": "string",
  "paid_by_pix": true,
  "financial_provider_external_id": "string",
  "line_parsed": "string"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Pagamento efetuado com sucesso

```
{
  "id": 1,
  "bank_billet_id": 1,
  "bank_billet_account_id": 1,
  "discharge_id": 1,
  "amount": 10.99,
  "paid_amount": 10.99,
  "paid_at": "2024-01-15",
  "paid_bank": "string",
  "paid_agency": "string",
  "bank_rate": 10.99,
  "credit_at": "2024-01-15",
  "direct": true,
  "expire_at": "2024-01-15",
  "kind": 1,
  "document_number": "string",
  "our_number": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "customer_person_name": "string",
  "paid_by_pix": true,
  "financial_provider_external_id": "string",
  "line_parsed": "string"
}
```


#### DELETE /v1/v1/bank_billet_payments/{id}
**Description**: Excluir Pagamento de Boleto

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Pagamento de Boleto

**Response**:

Pagamento de Boleto excluído

#### GET /v1/v1/bank_billet_payments/{id}
**Description**: Informações do Pagamento de Boleto

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Pagamento de Boleto

**Response**:

Pagamento de boleto encontrado

```
{
  "id": 1,
  "bank_billet_id": 1,
  "bank_billet_account_id": 1,
  "discharge_id": 1,
  "amount": 10.99,
  "paid_amount": 10.99,
  "paid_at": "2024-01-15",
  "paid_bank": "string",
  "paid_agency": "string",
  "bank_rate": 10.99,
  "credit_at": "2024-01-15",
  "direct": true,
  "expire_at": "2024-01-15",
  "kind": 1,
  "document_number": "string",
  "our_number": "string",
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "customer_person_name": "string",
  "paid_by_pix": true,
  "financial_provider_external_id": "string",
  "line_parsed": "string"
}
```


### Registro de Boleto

#### GET /v1/v1/bank_billet_registrations
**Description**: Listar Registros de Boleto.

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `registered_from` (query, string) (optional): A partir da Data de registro.
- `registered_to` (query, string) (optional): Até a Data de registro.
- `bank_billet_id` (query, string) (optional): ID do Boleto.
- `bank_billet_account_id` (query, string) (optional): ID da Carteira.

**Response**:

Sucesso na listagem de registros de boleto

```
[
  {
    "id": 1,
    "bank_billet_id": 1,
    "bank_billet_account_id": 1,
    "status": "0",
    "registered_at": "2024-01-15T10:30:00Z",
    "error_message": "string",
    "failed_at": "2024-01-15T10:30:00Z",
    "fails_count": 1,
    "retry_blocked": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "bank_billet_id": 1,
    "bank_billet_account_id": 1,
    "status": "0",
    "registered_at": "2024-01-15T10:30:00Z",
    "error_message": "string",
    "failed_at": "2024-01-15T10:30:00Z",
    "fails_count": 1,
    "retry_blocked": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### GET /v1/v1/bank_billet_registrations/{id}
**Description**: Informações do Registro de Boleto

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Registro de Boleto

**Response**:

Registro de Boleto encontrado

```
{
  "id": 1,
  "bank_billet_id": 1,
  "bank_billet_account_id": 1,
  "status": "0",
  "registered_at": "2024-01-15T10:30:00Z",
  "error_message": "string",
  "failed_at": "2024-01-15T10:30:00Z",
  "fails_count": 1,
  "retry_blocked": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


### Registro de Remessa

#### GET /v1/v1/bank_billet_remittances
**Description**: Listar Registros de Remessa

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `our_code` (query, string) (optional): Código de operação de registro. Consulte os possíveis valores [para cada banco](/reference/bancos-suportados).
- `expire_from` (query, string) (optional): A partir de Data de vencimento.
- `expire_to` (query, string) (optional): Até Data de vencimento.
- `bank_billet_id` (query, string) (optional): ID do Boleto.
- `bank_billet_account_id` (query, string) (optional): ID da Carteira.
- `remittance_id` (query, string) (optional): ID da Remessa.

**Response**:

Sucesso na listagem de registros de remessa

```
[
  {
    "id": 1,
    "our_code": "string",
    "occurrence": "string",
    "remittance_id": 1,
    "bank_billet_id": 1,
    "bank_billet_account_id": 1,
    "processed_at": "2024-01-15T10:30:00Z",
    "occurrence_detail": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "our_code": "string",
    "occurrence": "string",
    "remittance_id": 1,
    "bank_billet_id": 1,
    "bank_billet_account_id": 1,
    "processed_at": "2024-01-15T10:30:00Z",
    "occurrence_detail": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### GET /v1/v1/bank_billet_remittances/pending
**Description**: Listar Registros de Remessa Pendentes

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `our_code` (query, string) (optional): Código de operação de registro. Consulte os possíveis valores [para cada banco](/reference/bancos-suportados).
- `expire_from` (query, string) (optional): A partir de Data de vencimento.
- `expire_to` (query, string) (optional): Até Data de vencimento.
- `bank_billet_id` (query, string) (optional): ID do Boleto.
- `bank_billet_account_id` (query, string) (optional): ID da Carteira.
- `remittance_id` (query, string) (optional): ID da Remessa.

**Response**:

Sucesso na listagem de registros de remessa

```
[
  {
    "id": 1,
    "our_code": "string",
    "occurrence": "string",
    "remittance_id": 1,
    "bank_billet_id": 1,
    "bank_billet_account_id": 1,
    "processed_at": "2024-01-15T10:30:00Z",
    "occurrence_detail": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "our_code": "string",
    "occurrence": "string",
    "remittance_id": 1,
    "bank_billet_id": 1,
    "bank_billet_account_id": 1,
    "processed_at": "2024-01-15T10:30:00Z",
    "occurrence_detail": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### DELETE /v1/v1/bank_billet_remittances/{id}
**Description**: Excluir Pendências

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Registro de Remessa

**Response**:

Pendências excluida

#### GET /v1/v1/bank_billet_remittances/{id}
**Description**: Informações do Registro de Remessa

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Registro de Remessa

**Response**:

Registro de Remessa encontrado

#### POST /v1/v1/bank_billet_remittances/{id}/occurrence/{our_code}
**Description**: Criar Pendências

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do BOLETO
- `our_code` (path, string) (required): Código de operação de registro. Consulte os possíveis valores [para cada banco](/reference/bancos-suportados).

**Response**:

Pendências criada

```
{
  "message": "string"
}
```


### Registro de Retorno

#### GET /v1/v1/bank_billet_discharges
**Description**: Listar Registros de Retorno

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `processed_from` (query, string) (optional): A partir da Data de processamento.
- `processed_to` (query, string) (optional): Até a Data de processamento.
- `bank_billet_id` (query, string) (optional): ID do Boleto.
- `discharge_id` (query, string) (optional): ID do Retorno.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `our_occurrence` (query, string) (optional): Código único de operação de retorno dentro da Kobana.

**Response**:

Sucesso na listagem de registros de retorno

```
[
  {
    "id": 1,
    "our_occurrence": "2001",
    "discharge_id": 1,
    "bank_billet_id": 1,
    "processed_at": "2024-01-15T10:30:00Z",
    "date_of_occurrence": "2024-01-15",
    "occurrence": "string",
    "occurrence_detail": "string",
    "occurrence_error": "string",
    "occurrence_error_detail": "string",
    "line_raw": "string",
    "line_parsed": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "our_occurrence": "2001",
    "discharge_id": 1,
    "bank_billet_id": 1,
    "processed_at": "2024-01-15T10:30:00Z",
    "date_of_occurrence": "2024-01-15",
    "occurrence": "string",
    "occurrence_detail": "string",
    "occurrence_error": "string",
    "occurrence_error_detail": "string",
    "line_raw": "string",
    "line_parsed": "string",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### GET /v1/v1/bank_billet_discharges/{id}
**Description**: Informações do Registro de Retorno

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do Registro de Retorno

**Response**:

Registro de Retorno encontrado

```
{
  "id": 1,
  "our_occurrence": "2001",
  "discharge_id": 1,
  "bank_billet_id": 1,
  "processed_at": "2024-01-15T10:30:00Z",
  "date_of_occurrence": "2024-01-15",
  "occurrence": "string",
  "occurrence_detail": "string",
  "occurrence_error": "string",
  "occurrence_error_detail": "string",
  "line_raw": "string",
  "line_parsed": "string",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


### Relatórios

#### GET /v1/v1/reports/bank_billets
**Description**: Contagem de Boletos.

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `expire_from` (query, string) (optional): A partir da Data de vencimento.
- `expire_to` (query, string) (optional): Até a Data de vencimento.
- `paid_from` (query, string) (optional): A partir da Data de pagamento.
- `paid_to` (query, string) (optional): Até a Data de pagamento.
- `registered_from` (query, string) (optional): A partir da Data de registro.
- `registered_to` (query, string) (optional): Até a Data de registro.
- `created_from` (query, string) (optional): A partir da Data de criação.
- `created_to` (query, string) (optional): Até a Data de criação.
- `status` (query, string) (optional): Status do boleto.

**Response**:

Sucesso na listagem de boletos

```
[
  {
    "bank_billet_account_id": 1,
    "bank_billet_count": 1,
    "bank_billet_amount": 10.5
  },
  {
    "bank_billet_account_id": 1,
    "bank_billet_count": 1,
    "bank_billet_amount": 10.5
  }
]
```


### Saldos

#### GET /v2/v2/financial/accounts/{financial_account_uid}/balances
**Description**: Listar saldos

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `financial_account_uid` (path, string) (required): UUID da Conta Financeira

**Response**:

Saldos encontrados

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 124,
      "blocked_amount": 24,
      "automatically_invested_amount": 50,
      "created_at": "2024-01-15T10:30:00Z",
      "custom_data": {},
      "external_id": "123456-abc-789",
      "tags": [
        "tag 1",
        "tag 1"
      ]
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 124,
      "blocked_amount": 24,
      "automatically_invested_amount": 50,
      "created_at": "2024-01-15T10:30:00Z",
      "custom_data": {},
      "external_id": "123456-abc-789",
      "tags": [
        "tag 1",
        "tag 1"
      ]
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### GET /v2/v2/financial/accounts/{financial_account_uid}/balances/{balance_uid}
**Description**: Visualizar um Saldo

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `field` (query, string) (optional): Campo para buscar o ID. Exemplo: `uid` ou `external_id`
- `financial_account_uid` (path, string) (required): UUID da Conta Financeira
- `balance_uid` (path, string) (required): UUID do Saldo

**Response**:

Conta encontrada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 124,
    "blocked_amount": 24,
    "automatically_invested_amount": 50,
    "created_at": "2024-01-15T10:30:00Z",
    "custom_data": {},
    "external_id": "123456-abc-789",
    "tags": [
      "tag 1",
      "tag 1"
    ]
  }
}
```


### Subcontas

#### GET /v2/v2/admin/subaccounts
**Description**: Listar Subcontas

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `email` (query, string) (optional): Filtro por email. Busca subconta por email
- `business_cnpj` (query, string) (optional): Filtro por CNPJ. Busca subconta por CNPJ
- `created_from` (query, string) (optional): Data inicial do filtro de data de criação da subconta
- `created_to` (query, string) (optional): Data final do filtro de data de criação da subconta

**Response**:

Subcontas encontradas

```
{
  "status": 1,
  "data": [
    {
      "id": 1,
      "uid": "string",
      "parent_id": 1,
      "email": "user@example.com",
      "business_name": "string",
      "business_cnpj": "16.974.923/0001-84",
      "nickname": "string",
      "business_legal_name": "string",
      "configuration": "string",
      "api_access_token": "string",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "string",
        "string"
      ],
      "created_via_api": true,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "id": 1,
      "uid": "string",
      "parent_id": 1,
      "email": "user@example.com",
      "business_name": "string",
      "business_cnpj": "16.974.923/0001-84",
      "nickname": "string",
      "business_legal_name": "string",
      "configuration": "string",
      "api_access_token": "string",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "string",
        "string"
      ],
      "created_via_api": true,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/admin/subaccounts
**Description**: Criar uma Subconta

**Request Body** (application/json):

- Type: `v2_subaccount`
- Properties:
  - `id` (optional): integer - ID da subconta
  - `uid` (optional): string - UID da subconta
  - `parent_id` (optional): integer - ID da conta principal
  - `email` (optional): string - E-mail
  - `business_name` (optional): string - Nome Fantasia
  - `business_cnpj` (optional): string - CNPJ da Empresa
  - `nickname` (required): string - Apelido
  - `business_legal_name` (optional): string - Razão Social
  - `configuration` (optional): string - Configuração de dados padrões da conta
  - `api_access_token` (optional): string - Token de acesso da subconta
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `tags` (optional): array - Tags associadas a Subconta
  - `created_via_api` (optional): boolean - Indica se o registro foi criado pela API
  - `created_at` (optional): string - Data e hora de criação do registro
  - `updated_at` (optional): string - Data e hora da última atualização do registro
- Example:
```
{
  "id": 1,
  "uid": "string",
  "parent_id": 1,
  "email": "user@example.com",
  "business_name": "string",
  "business_cnpj": "16.974.923/0001-84",
  "nickname": "string",
  "business_legal_name": "string",
  "configuration": "string",
  "api_access_token": "string",
  "external_id": "123456-abc-789",
  "custom_data": {},
  "tags": [
    "string",
    "string"
  ],
  "created_via_api": true,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Subconta criada

```
{
  "status": 1,
  "data": {
    "id": 1,
    "uid": "string",
    "parent_id": 1,
    "email": "user@example.com",
    "business_name": "string",
    "business_cnpj": "16.974.923/0001-84",
    "nickname": "string",
    "business_legal_name": "string",
    "configuration": "string",
    "api_access_token": "string",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "string",
      "string"
    ],
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/admin/subaccounts/{id}
**Description**: Visualizar uma Subconta

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID da Subconta

**Response**:

Subconta encontrada

```
{
  "status": 1,
  "data": {
    "id": 1,
    "uid": "string",
    "parent_id": 1,
    "email": "user@example.com",
    "business_name": "string",
    "business_cnpj": "16.974.923/0001-84",
    "nickname": "string",
    "business_legal_name": "string",
    "configuration": "string",
    "api_access_token": "string",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "string",
      "string"
    ],
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### PUT /v2/v2/admin/subaccounts/{id}
**Description**: Alterar Subconta

**Request Body** (application/json):

- Type: `v2_subaccount_update`
- Properties:
  - `id` (optional): integer - ID da subconta
  - `uid` (optional): string - UID do Evento
  - `parent_id` (optional): integer - ID da conta principal
  - `email` (optional): string - E-mail
  - `business_cnpj` (optional): string - CNPJ da Empresa
  - `nickname` (optional): string - Apelido
  - `business_legal_name` (optional): string - Razão Social
  - `account_type` (optional): string - Tipo de Conta:
* `individual` Pessoa Física
* `juridical` Pessoa Jurídica
  - `first_name` (optional): string - Primeiro Nome do Responsável
  - `middle_name` (optional): string - Nome do Meio do Responsável
  - `last_name` (optional): string - Último Nome do Responsável
  - `full_name` (optional): string - Nome completo do Responsável
  - `gender` (optional): string - Gênero
  - `cpf` (optional): string - CPF
  - `address_street_name` (optional): string - Endereço
  - `address_state` (optional): string - Estado
  - `address_neighborhood` (optional): string - Bairro
  - `address_postal_code` (optional): string - CEP
  - `address_number` (optional): string - Número
  - `address_complement` (optional): string - Complemento
  - `address_city_name` (optional): string - Cidade
  - `phone_number` (optional): string - Telefone
  - `date_of_birth` (optional): string - Data de Nascimento
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `tags` (optional): array - Tags associadas a Subconta
  - `business_category` (optional): integer - Categoria:

| Código da Categoria | Descrição |
|---|---|
| 1000 | Arte e objetos de colecionadores |
| 1001 | Bebês |
| 1002 | Beleza e fragrâncias |
| 1022 | Brinquedos e hobbies |
| 1015 | Casa e jardim |
| 1006 | Computadores |
| 1004 | De empresa para empresa (B2B) |
| 1007 | Educação |
| 1008 | Eletrônicos e telecomunicações |
| 1009 | Entretenimento e mídia |
| 1021 | Esportes e atividades ao ar livre |
| 1013 | Governo |
| 1003 | Livros e revistas |
| 1012 | Presentes e flores |
| 1018 | Religião e espiritualidade (com fins lucrativos) |
| 1014 | Saúde e cuidados pessoais |
| 1016 | Sem fins lucrativos |
| 1025 | Serviço |
| 1020 | Serviços - Outro |
| 1010 | Serviços e produtos financeiros |
| 1019 | Varejo (não classificado em nenhum outro lugar) |
| 1011 | Varejo e serviços de alimentação |
| 1024 | Vendas de veículos |
| 1005 | Vestuário |
| 1023 | Viagem |
  - `business_subcategory` (optional): integer - Subcategoria:

| Código da Categoria | Código da Subcategoria | Descrição |
|---|---|---|
| 1017 | 2173 | Animais de estimação especiais ou raros |
| 1017 | 2171 | Medicamentos e suplementos |
| 1017 | 2172 | Pet shops, alimentos e suprimentos para animais de estimação |
| 1017 | 2174 | Serviços veterinários |
| 1000 | 2000 | Antiguidades |
| 1000 | 2004 | Arte digital |
| 1000 | 2007 | Costura, bordado e tecidos |
| 1000 | 2003 | Câmeras e suprimentos fotográficos |
| 1000 | 2005 | Lembranças |
| 1000 | 2006 | Loja de música - instrumentos e partituras |
| 1000 | 2002 | Marchands e galerias |
| 1000 | 2009 | Papel de carta, de impressão e escrita |
| 1000 | 2008 | Selos e moedas |
| 1000 | 2001 | Suprimentos de artesanato |
| 1000 | 2010 | Vintage e artigos de colecionadores |
| 1001 | 2012 | Móveis |
| 1001 | 2013 | Produtos para bebês - Outro |
| 1001 | 2014 | Segurança e saúde |
| 1001 | 2011 | Vestuário |
| 1002 | 2015 | Banho e corpo |
| 1002 | 2016 | Fragrâncias e perfumes |
| 1002 | 2017 | Maquiagem e cosméticos |
| 1022 | 2252 | Artesanato |
| 1022 | 2253 | Câmeras e suprimentos fotográficos |
| 1022 | 2255 | Lembranças |
| 1022 | 2256 | Loja de música - instrumentos e partituras |
| 1022 | 2254 | Lojas de hobbies, brinquedos e jogos |
| 1022 | 2258 | Papel de carta, de impressão e escrita |
| 1022 | 2257 | Selos e moedas |
| 1022 | 2260 | Videogames e sistemas |
| 1022 | 2259 | Vintage e artigos de colecionadores |
| 1015 | 2145 | Antiguidades |
| 1015 | 2146 | Aparelhos |
| 1015 | 2148 | Cama e banho |
| 1015 | 2150 | Cortinas e tapeçaria |
| 1015 | 2157 | Decoração residencial |
| 1015 | 2162 | Equipamentos de segurança e vigilância |
| 1015 | 2152 | Lareiras e telas para lareira |
| 1015 | 2147 | Marchands e galerias |
| 1015 | 2149 | Material de construção |
| 1015 | 2156 | Máquinas e ferramentas |
| 1015 | 2153 | Móveis |
| 1015 | 2160 | Paisagismo |
| 1015 | 2163 | Piscinas e spas |
| 1015 | 2151 | Serviços de exterminação de pragas e desinfecção |
| 1015 | 2154 | Suprimentos para jardim |
| 1015 | 2161 | Tapetes e carpetes |
| 1015 | 2159 | Utensílios de cozinha |
| 1015 | 2158 | Utensílios domésticos |
| 1015 | 2155 | Vidro, tinta e papel de parede |
| 1006 | 2057 | Computadores e serviços de processamento de dados |
| 1006 | 2059 | Conteúdo digital |
| 1006 | 2058 | Desktops, laptops e notebooks |
| 1006 | 2069 | Hospedagem e design para a Web |
| 1006 | 2064 | Jogo online |
| 1006 | 2062 | Monitores e projetores |
| 1006 | 2066 | Periféricos |
| 1006 | 2065 | Peças e acessórios |
| 1006 | 2063 | Rede de comunicação |
| 1006 | 2060 | Serviços de Comércio eletrônico |
| 1006 | 2061 | Serviços de reparo e manutenção |
| 1006 | 2068 | Serviços de treinamento |
| 1006 | 2067 | Software |
| 1004 | 2027 | Agrícola |
| 1004 | 2047 | Atacado |
| 1004 | 2031 | Construção |
| 1004 | 2025 | Contabilidade |
| 1004 | 2043 | Editoração e impressão |
| 1004 | 2045 | Embalagem e envio |
| 1004 | 2030 | Fotografia comercial, arte e gráficos |
| 1004 | 2038 | Mala direta |
| 1004 | 2039 | Marketing |
| 1004 | 2040 | Marketing em vários níveis |
| 1004 | 2041 | Móveis de escritório e comerciais |
| 1004 | 2029 | Produtos químicos e assemelhados |
| 1004 | 2026 | Propaganda |
| 1004 | 2028 | Serviços de arquitetura, engenharia e prospecção |
| 1004 | 2032 | Serviços de consultoria |
| 1004 | 2044 | Serviços de cópia rápida e reprodução |
| 1004 | 2046 | Serviços de estenografia e de secretaria |
| 1004 | 2034 | Serviços de leasing e locação de equipamentos |
| 1004 | 2036 | Serviços de recrutamento e seleção |
| 1004 | 2035 | Serviços de reparo de equipamentos |
| 1004 | 2033 | Serviços educacionais |
| 1004 | 2042 | Suprimentos e equipamento de escritório |
| 1004 | 2037 | Suprimentos industriais e de produção |
| 1007 | 2073 | Academias, estúdios e escolas de dança |
| 1007 | 2070 | Escolas comerciais e secretariais |
| 1007 | 2074 | Escolas de ensino fundamental e médio |
| 1007 | 2075 | Escolas vocacionais e de comércio |
| 1007 | 2072 | Faculdades e universidades |
| 1007 | 2071 | Serviços de cuidados infantis diários |
| 1008 | 2079 | Acessórios eletrônicos em geral |
| 1008 | 2085 | Cartões telefônicos |
| 1008 | 2076 | Câmeras, camcorders e equipamentos |
| 1008 | 2081 | Eletrônicos residenciais |
| 1008 | 2083 | Equipamento de telecomunicações e vendas |
| 1008 | 2082 | Segurança e vigilância |
| 1008 | 2084 | Serviços de telecomunicação |
| 1008 | 2077 | Som de carro e eletrônicos |
| 1008 | 2078 | Telefones celulares, PDAs e pagers |
| 1008 | 2080 | Áudio residencial |
| 1009 | 2097 | Animadores de programas |
| 1009 | 2094 | Brinquedos e jogos |
| 1009 | 2095 | Caça níqueis |
| 1009 | 2096 | Conteúdo digital |
| 1009 | 2091 | Conteúdo digital adulto |
| 1009 | 2088 | Filmes - DVDs, fitas de vídeo |
| 1009 | 2087 | Ingressos de cinema |
| 1009 | 2093 | Ingressos de teatro |
| 1009 | 2092 | Ingressos para shows |
| 1009 | 2098 | Jogo |
| 1009 | 2099 | Jogos online |
| 1009 | 2086 | Lembranças |
| 1009 | 2089 | Música - CDs, cassetes e álbuns |
| 1009 | 2090 | TV e rádio a cabo, por satélite e outros tipos pagos |
| 1009 | 2100 | Videogames e sistemas |
| 1021 | 2241 | Academias, estúdios e escolas de dança |
| 1021 | 2244 | Acessórios de armas de fogo |
| 1021 | 2248 | Armas de artes marciais |
| 1021 | 2245 | Armas de fogo |
| 1021 | 2237 | Calçados esportivos |
| 1021 | 2240 | Camping e atividades ao ar livre |
| 1021 | 2246 | Caça |
| 1021 | 2243 | Engrenagem de relógio |
| 1021 | 2250 | Equipamento esportivo |
| 1021 | 2242 | Exercícios e condicionamento físico |
| 1021 | 2247 | Facas |
| 1021 | 2249 | Jogos e brinquedos esportivos |
| 1021 | 2238 | Loja, serviço e reparo de bicicletas |
| 1021 | 2251 | Piscinas e spas |
| 1021 | 2239 | Remo, vela e acessórios |
| 1013 | 2137 | Serviços governamentais (não classificado em nenhum outro lugar) |
| 1003 | 2019 | Conteúdo digital |
| 1003 | 2023 | Editoração e impressão |
| 1003 | 2021 | Ficção e não ficção |
| 1003 | 2020 | Livros de texto e educativos |
| 1003 | 2018 | Livros em áudio |
| 1003 | 2024 | Livros raros e usados |
| 1003 | 2022 | Revistas |
| 1012 | 2134 | Comidas de gourmet |
| 1012 | 2132 | Floristas |
| 1012 | 2133 | Lojas de presentes, cartões, novidades e lembranças |
| 1012 | 2136 | Suprimentos para festas |
| 1012 | 2135 | Viveiro de plantas e flores |
| 1018 | 2176 | Mercadoria |
| 1018 | 2177 | Serviços (não classificados em nenhum outro lugar) |
| 1018 | 2175 | Serviços de associação |
| 1014 | 2141 | Assistência médica |
| 1014 | 2140 | Cuidados dentários |
| 1014 | 2142 | Equipamentos e suprimentos médicos |
| 1014 | 2138 | Farmácia (exceto prescrição de medicamentos) |
| 1014 | 2139 | Farmácia (inclusive prescrição de medicamentos) |
| 1014 | 2143 | Oftalmologia |
| 1014 | 2144 | Vitaminas e suplementos |
| 1016 | 2169 | Educacional |
| 1016 | 2164 | Entidade assistencial |
| 1016 | 2167 | Outro |
| 1016 | 2168 | Pessoal |
| 1016 | 2165 | Político |
| 1016 | 2166 | Religioso |
| 1025 | 2297 | Acessórios |
| 1025 | 2296 | Aluguel de caminhões e trailers utilitários |
| 1025 | 2293 | Aluguel de trailers e veículos recreativos |
| 1025 | 2291 | Aluguel e leasing de barcos |
| 1025 | 2294 | Ferramentas e equipamentos |
| 1025 | 2292 | Lavagem de carros |
| 1025 | 2288 | Locação de carros |
| 1025 | 2284 | Peças e suprimentos novos - veículo motor |
| 1025 | 2285 | Peças usadas - veículo motor |
| 1025 | 2287 | Reparo e pintura de autos |
| 1025 | 2295 | Serviço de guincho |
| 1025 | 2289 | Serviços de autos |
| 1025 | 2290 | Suprimento e serviços de pneus automotivos |
| 1025 | 2286 | Áudio e vídeo |
| 1020 | 2232 | Ajustes e alterações |
| 1020 | 2216 | Assistência médica |
| 1020 | 2188 | Carpintaria |
| 1020 | 2217 | Clubes e organizações de associados |
| 1020 | 2192 | Computadores e serviços de processamento de dados |
| 1020 | 2225 | Conserto de rádios, televisores e estéreo |
| 1020 | 2226 | Corretor de imóveis |
| 1020 | 2197 | Cuidados dentários |
| 1020 | 2205 | Desenho gráfico e comercial |
| 1020 | 2230 | Embalagem e envio |
| 1020 | 2204 | Empreiteiros em geral |
| 1020 | 2220 | Encontros online |
| 1020 | 2200 | Entretenimento |
| 1020 | 2222 | Estúdios fotográficos - retratos |
| 1020 | 2221 | Fotoacabamento |
| 1020 | 2191 | Fotografia comercial |
| 1020 | 2227 | Gerenciamento de locação de imóvel |
| 1020 | 2207 | Identidades, certidões e passaportes |
| 1020 | 2208 | Importação e exportação |
| 1020 | 2203 | Jogo |
| 1020 | 2190 | Limpeza e manutenção |
| 1020 | 2215 | Loterias e concursos |
| 1020 | 2218 | Misc. publicação e impressão |
| 1020 | 2219 | Mudança e depósito |
| 1020 | 2235 | Oftalmologia |
| 1020 | 2212 | Paisagismo e horticultura |
| 1020 | 2202 | Planejamento de eventos e casamentos |
| 1020 | 2185 | Propaganda |
| 1020 | 2199 | Reparo de dispositivos pequenos e elétricos |
| 1020 | 2228 | Reparos de móveis e estofamento |
| 1020 | 2236 | Reparos de relógios e joias |
| 1020 | 2210 | Seguros - auto e residência |
| 1020 | 2211 | Seguros - vida e anuidade |
| 1020 | 2214 | Serviço de entrega local |
| 1020 | 2233 | Serviço de telecomunicação |
| 1020 | 2229 | Serviços (não classificados em nenhum outro lugar) |
| 1020 | 2198 | Serviços de Comércio eletrônico |
| 1020 | 2195 | Serviços de aconselhamento |
| 1020 | 2187 | Serviços de carreira |
| 1020 | 2194 | Serviços de consultoria |
| 1020 | 2189 | Serviços de cuidados com crianças |
| 1020 | 2224 | Serviços de cópia rápida e reprodução |
| 1020 | 2196 | Serviços de entregas |
| 1020 | 2201 | Serviços de leasing e locação de equipamentos |
| 1020 | 2231 | Serviços de piscinas |
| 1020 | 2223 | Serviços de proteção e segurança |
| 1020 | 2209 | Serviços de recuperação de informações |
| 1020 | 2193 | Serviços de rede de computador |
| 1020 | 2186 | Serviços e clubes de compras |
| 1020 | 2213 | Serviços jurídicos e advogados |
| 1020 | 2206 | Spas de saúde e beleza |
| 1020 | 2234 | Utilitários |
| 1010 | 2122 | Agentes e corretores de títulos |
| 1010 | 2115 | Agentes ou corretores de hipotecas |
| 1010 | 2103 | Bolsa de commodities e futuros |
| 1010 | 2118 | Cartões de valores pré-pagos e armazenados |
| 1010 | 2109 | Companhia financeira |
| 1010 | 2110 | Consultoria financeira e de investimentos |
| 1010 | 2101 | Contabilidade |
| 1010 | 2106 | Cooperativa de crédito |
| 1010 | 2119 | Corretor de imóveis |
| 1010 | 2107 | Corretores e câmbio |
| 1010 | 2108 | Custódia de títulos |
| 1010 | 2114 | Empresa de serviços financeiros |
| 1010 | 2104 | Empresas de informação de crédito de consumidor |
| 1010 | 2120 | Entrega |
| 1010 | 2102 | Escritório de cobrança |
| 1010 | 2121 | Gerenciamento de locação de imóvel |
| 1010 | 2113 | Investimentos - geral |
| 1010 | 2116 | Moeda de jogo online |
| 1010 | 2117 | Pagamento antecipado ou empréstimo contra salário |
| 1010 | 2111 | Seguros - auto e residência |
| 1010 | 2112 | Seguros - vida e anuidade |
| 1010 | 2105 | Serviço de orientação sobre débitos |
| 1010 | 2123 | Transferência eletrônica e ordem de pagamento |
| 1019 | 2181 | Bens duráveis |
| 1019 | 2182 | Bens não duráveis |
| 1019 | 2179 | Loja de departamentos |
| 1019 | 2180 | Loja de descontos |
| 1019 | 2183 | Loja de usados e segunda mão |
| 1019 | 2184 | Loja de variedades |
| 1019 | 2178 | Produtos químicos e assemelhados |
| 1011 | 2124 | Bebidas alcoólicas |
| 1011 | 2126 | Café e chá |
| 1011 | 2127 | Comidas de gourmet |
| 1011 | 2130 | Fumo |
| 1011 | 2128 | Lojas de alimentos variados e especialidades |
| 1011 | 2129 | Restaurante |
| 1011 | 2125 | Serviços de bufê |
| 1011 | 2131 | Vitaminas e suplementos |
| 1024 | 2277 | Aviação |
| 1024 | 2283 | Vintage e artigos de colecionadores |
| 1024 | 2275 | vendedor de autos - novos e usados |
| 1024 | 2276 | vendedor de autos - somente usados |
| 1024 | 2278 | vendedor de barcos |
| 1024 | 2280 | vendedor de motocicletas |
| 1024 | 2279 | vendedor de trailers |
| 1024 | 2281 | vendedor de trailers utilitários e recreativos |
| 1024 | 2282 | vendedor de veículos recreativos |
| 1005 | 2053 | Acessórios |
| 1005 | 2055 | Atacado - pedras e metais preciosos |
| 1005 | 2056 | Joalheria da moda |
| 1005 | 2050 | Roupas femininas |
| 1005 | 2048 | Roupas infantis |
| 1005 | 2049 | Roupas masculinas |
| 1005 | 2051 | Sapatos |
| 1005 | 2052 | Uniformes de serviço militar e civil |
| 1005 | 2054 | Varejo - joalheria fina e relógios |
| 1023 | 2268 | Acampamento de esportes e recreação |
| 1023 | 2274 | Agência de viagens |
| 1023 | 2264 | Cruzeiros |
| 1023 | 2265 | Hospedagem e acomodações |
| 1023 | 2261 | Linha aérea |
| 1023 | 2263 | Linha de ônibus |
| 1023 | 2262 | Locação de carros |
| 1023 | 2266 | Malas e mercadorias em couro |
| 1023 | 2272 | Parques ou acampamentos de trailers |
| 1023 | 2270 | Propriedades de lazer compartilhado |
| 1023 | 2267 | Serviços de recreação |
| 1023 | 2273 | Serviços de transporte - outros |
| 1023 | 2269 | Táxis e limusines |
| 1023 | 2271 | Viagens |
  - `business_website` (optional): string - Website
  - `business_name` (optional): string - Nome Fantasia
  - `business_type` (optional): string - Tipo da Empresa:
* `mei` Microempreendedor Individual
* `individual` Micro Empresa/Empresa de pequeno porte
* `proprietorship` Sociedade Empresária Limitada
* `partnership` Sociedade Anônima de Capital Fechado
* `corporation` Sociedade Anônima de Capital Aberto
* `nonprofit` Sem fins lucrativos
* `government` Governamental
  - `mother_name` (optional): string - Nome da Mãe
  - `father_name` (optional): string - Nome do Pai
  - `configuration` (optional): string - Configuração de dados padrões para boleto
  - `api_access_token` (optional): string - Token de acesso da subconta
  - `created_via_api` (optional): boolean - Indica se o registro foi criado pela API
  - `account_level` (optional): integer - Nível da conta
  - `billing_email` (optional): string - E-mail de cobrança
  - `simple_opting` (optional): boolean - Optante pelo simples
  - `rate_limits` (optional): object - Limites de requisições - Hash com chave e valor no formato JSON.
- Example:
```
{
  "id": 1,
  "uid": "string",
  "parent_id": 1,
  "email": "user@example.com",
  "business_cnpj": "16.974.923/0001-84",
  "nickname": "string",
  "business_legal_name": "string",
  "account_type": "individual",
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "full_name": "string",
  "gender": "string",
  "cpf": "627.431.590-06",
  "address_street_name": "string",
  "address_state": "string",
  "address_neighborhood": "string",
  "address_postal_code": "string",
  "address_number": "string",
  "address_complement": "string",
  "address_city_name": "string",
  "phone_number": "string",
  "date_of_birth": "2024-01-15",
  "external_id": "123456-abc-789",
  "custom_data": {},
  "tags": [
    "string",
    "string"
  ],
  "business_category": 1,
  "business_subcategory": 1,
  "business_website": "string",
  "business_name": "string",
  "business_type": null,
  "mother_name": "string",
  "father_name": "string",
  "configuration": "string",
  "api_access_token": "string",
  "created_via_api": true,
  "account_level": 1,
  "billing_email": "string",
  "simple_opting": true,
  "rate_limits": {}
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID da Subconta

**Response**:

Subconta alterada

```
{
  "status": 1,
  "data": {
    "id": 1,
    "uid": "string",
    "parent_id": 1,
    "email": "user@example.com",
    "business_name": "string",
    "business_cnpj": "16.974.923/0001-84",
    "nickname": "string",
    "business_legal_name": "string",
    "configuration": "string",
    "api_access_token": "string",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "string",
      "string"
    ],
    "created_via_api": true,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


### TED

#### GET /v2/v2/transfer/ted
**Description**: Listar Transferências TED

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Sucesso na listagem das transferências

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "transfer_purpose": {
        "code": "98",
        "description": "Pagamentos Diversos"
      },
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 10.5,
      "scheduled_to": "2024-01-15",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "source": "string",
      "target": {
        "transfer_kind": "string",
        "pix": {
          "txid": "...",
          "pix_type": "...",
          "key_type": "...",
          "key": "..."
        },
        "bank_account": {
          "compe_number": "...",
          "ispb_number": "...",
          "agency_number": "...",
          "agency_digit": "...",
          "account_number": "...",
          "account_digit": "...",
          "document_number": "..."
        },
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "transfer_purpose": {
        "code": "98",
        "description": "Pagamentos Diversos"
      },
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "amount": 10.5,
      "scheduled_to": "2024-01-15",
      "confirmed_at": "2024-01-15T10:30:00Z",
      "rejected_at": "2024-01-15T10:30:00Z",
      "rejected_error": "string",
      "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
      "transaction_date": "2024-01-15T10:30:00Z",
      "source": "string",
      "target": {
        "transfer_kind": "string",
        "pix": {
          "txid": "...",
          "pix_type": "...",
          "key_type": "...",
          "key": "..."
        },
        "bank_account": {
          "compe_number": "...",
          "ispb_number": "...",
          "agency_number": "...",
          "agency_digit": "...",
          "account_number": "...",
          "account_digit": "...",
          "document_number": "..."
        },
        "beneficiary": {
          "document_number": "...",
          "name": "..."
        }
      },
      "identifier": "string",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "tag1",
        "tag1"
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/transfer/ted
**Description**: Criar uma Transferência TED

**Request Body** (application/json):

- Type: `v2_new_transfer_ted`
- Properties:
  - `amount` (required): number - Quantia

  - `scheduled_to` (optional): string - Data de Agendamento
  - `transfer_purpose` (optional): string - Objetivo da Transferência
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `external_id` (optional): string - ID no seu sistema. Opcional para controle interno.
  - `custom_data` (optional): object - Hash com chave e valor no formato JSON.
  - `tags` (optional): array - Tags associadas
  - `beneficiary` (optional): object - Dados do Recebedor
  - `bank_account` (required): object - Dados bancários
- Example:
```
{
  "amount": 120.99,
  "scheduled_to": "2024-01-15",
  "transfer_purpose": "98",
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "external_id": "123456-abc-789",
  "custom_data": {},
  "tags": [
    "tag1",
    "tag1"
  ],
  "beneficiary": {
    "document_number": "string",
    "name": "string"
  },
  "bank_account": {
    "compe_number": 1,
    "ispb_number": 1,
    "agency_number": "string",
    "agency_digit": "string",
    "account_number": "string",
    "account_digit": "string",
    "document_number": "string"
  }
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Transferência TED criada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "transfer_purpose": {
      "code": "98",
      "description": "Pagamentos Diversos"
    },
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 10.5,
    "scheduled_to": "2024-01-15",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "source": "string",
    "target": {
      "transfer_kind": "string",
      "pix": {
        "txid": "string",
        "pix_type": "string",
        "key_type": "string",
        "key": "string"
      },
      "bank_account": {
        "compe_number": 1,
        "ispb_number": 1,
        "agency_number": "string",
        "agency_digit": "string",
        "account_number": "string",
        "account_digit": "string",
        "document_number": "string"
      },
      "beneficiary": {
        "document_number": "string",
        "name": "string"
      }
    },
    "identifier": "string",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### GET /v2/v2/transfer/ted/{uid}
**Description**: Visualizar uma Transferência TED

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UUID da Transferência

**Response**:

Transferência TED encontrada

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "transfer_purpose": {
      "code": "98",
      "description": "Pagamentos Diversos"
    },
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "amount": 10.5,
    "scheduled_to": "2024-01-15",
    "confirmed_at": "2024-01-15T10:30:00Z",
    "rejected_at": "2024-01-15T10:30:00Z",
    "rejected_error": "string",
    "transaction_code": "018df180-7208-727b-a10a-ea545e4a75a8",
    "transaction_date": "2024-01-15T10:30:00Z",
    "source": "string",
    "target": {
      "transfer_kind": "string",
      "pix": {
        "txid": "string",
        "pix_type": "string",
        "key_type": "string",
        "key": "string"
      },
      "bank_account": {
        "compe_number": 1,
        "ispb_number": 1,
        "agency_number": "string",
        "agency_digit": "string",
        "account_number": "string",
        "account_digit": "string",
        "document_number": "string"
      },
      "beneficiary": {
        "document_number": "string",
        "name": "string"
      }
    },
    "identifier": "string",
    "external_id": "123456-abc-789",
    "custom_data": {},
    "tags": [
      "tag1",
      "tag1"
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### POST /v2/v2/transfer/ted_batches
**Description**: Criar um Lote de Transferência TED

**Request Body** (application/json):

- Type: `v2_new_transfer_batch_ted`
- Properties:
  - `financial_account_uid` (required): string - UID da Conta Financeira de Origem
  - `transfers` (required): array - Lista de Transferências TED novas ou existentes.
- Example:
```
{
  "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
  "transfers": [
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "transfer_purpose": "98",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ],
      "beneficiary": {
        "document_number": "...",
        "name": "..."
      },
      "bank_account": {
        "compe_number": "...",
        "ispb_number": "...",
        "agency_number": "...",
        "agency_digit": "...",
        "account_number": "...",
        "account_digit": "...",
        "document_number": "..."
      }
    },
    {
      "amount": 120.99,
      "scheduled_to": "2024-01-15",
      "transfer_purpose": "98",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "external_id": "123456-abc-789",
      "custom_data": {},
      "tags": [
        "...",
        "..."
      ],
      "beneficiary": {
        "document_number": "...",
        "name": "..."
      },
      "bank_account": {
        "compe_number": "...",
        "ispb_number": "...",
        "agency_number": "...",
        "agency_digit": "...",
        "account_number": "...",
        "account_digit": "...",
        "document_number": "..."
      }
    }
  ]
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Lote de Transferência TED criado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "transport_kind": "string",
    "transfers": [
      {
        "uid": "...",
        "status": "...",
        "registration_status": "...",
        "transfer_purpose": "...",
        "financial_account_uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "source": "...",
        "target": "...",
        "identifier": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "uid": "...",
        "status": "...",
        "registration_status": "...",
        "transfer_purpose": "...",
        "financial_account_uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "source": "...",
        "target": "...",
        "identifier": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


### Todos

#### GET /v2/v2/payment/batches
**Description**: Listar Lotes de Pagamentos

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Lotes encontrados

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "payments": [
        "...",
        "..."
      ],
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "payments": [
        "...",
        "..."
      ],
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### GET /v2/v2/payment/batches/{uid}
**Description**: Visualizar um Lote de Pagamento

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UUID do Lote de Pagamento

**Response**:

Lote de Pagamento encontrado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "payments": [
      "...",
      "..."
    ],
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### PUT /v2/v2/payment/batches/{uid}/approve
**Description**: Aprovar um Lote de Pagamento

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `uid` (path, string) (required): UUID do Lote de Pagamento

**Response**:

Comando criado com sucesso

```
{
  "status": 1,
  "data": {
    "id": 1,
    "status": "string",
    "operation": "string",
    "params": {},
    "payload": {},
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "pix": {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "payments": [
        "...",
        "..."
      ],
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  }
}
```


#### PUT /v2/v2/payment/batches/{uid}/reprove
**Description**: Reprovar um Lote de Pagamento

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `uid` (path, string) (required): UUID do Lote de Pagamento

**Response**:

Comando criado com sucesso

```
{
  "status": 1,
  "data": {
    "id": 1,
    "status": "string",
    "operation": "string",
    "params": {},
    "payload": {},
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "pix": {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "payments": [
        "...",
        "..."
      ],
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  }
}
```


#### GET /v2/v2/transfer/batches
**Description**: Listar Lotes de Transferência

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Sucesso na listagem dos lotes

```
{
  "status": 1,
  "data": [
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "transport_kind": "string",
      "transfers": [
        "...",
        "..."
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "transport_kind": "string",
      "transfers": [
        "...",
        "..."
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### GET /v2/v2/transfer/batches/{uid}
**Description**: Visualizar um Lote de Transferência

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `uid` (path, string) (required): UUID do Lote de Transferência

**Response**:

Lote de Transferência encontrado

```
{
  "status": 1,
  "data": {
    "uid": "123e4567-e89b-12d3-a456-426614174000",
    "status": "string",
    "registration_status": "string",
    "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
    "transport_kind": "string",
    "transfers": [
      {
        "uid": "...",
        "status": "...",
        "registration_status": "...",
        "transfer_purpose": "...",
        "financial_account_uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "source": "...",
        "target": "...",
        "identifier": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "created_at": "...",
        "updated_at": "..."
      },
      {
        "uid": "...",
        "status": "...",
        "registration_status": "...",
        "transfer_purpose": "...",
        "financial_account_uid": "...",
        "amount": "...",
        "scheduled_to": "...",
        "confirmed_at": "...",
        "rejected_at": "...",
        "rejected_error": "...",
        "transaction_code": "...",
        "transaction_date": "...",
        "source": "...",
        "target": "...",
        "identifier": "...",
        "external_id": "...",
        "custom_data": "...",
        "tags": "...",
        "created_at": "...",
        "updated_at": "..."
      }
    ],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### PUT /v2/v2/transfer/batches/{uid}/approve
**Description**: Aprovar um Lote de Transferência

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `uid` (path, string) (required): UUID do Lote de Transferência

**Response**:

Comando criado com sucesso

```
{
  "status": 1,
  "data": {
    "id": 1,
    "status": "string",
    "operation": "string",
    "params": {},
    "payload": {},
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "pix": {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "transport_kind": "string",
      "transfers": [
        "...",
        "..."
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  }
}
```


#### PUT /v2/v2/transfer/batches/{uid}/reprove
**Description**: Reprovar um Lote de Transferência

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `uid` (path, string) (required): UUID do Lote de Transferência

**Response**:

Comando criado com sucesso

```
{
  "status": 1,
  "data": {
    "id": 1,
    "status": "string",
    "operation": "string",
    "params": {},
    "payload": {},
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z",
    "pix": {
      "uid": "123e4567-e89b-12d3-a456-426614174000",
      "status": "string",
      "registration_status": "string",
      "financial_account_uid": "123e4567-e89b-12d3-a456-426614174000",
      "transport_kind": "string",
      "transfers": [
        "...",
        "..."
      ],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  }
}
```


### Usuário
Usuário

#### GET /v2/v2/admin/users
**Description**: Listar Usuários

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página
- `email` (query, string) (optional): Filtro por email. Busca usuário por email

**Response**:

Usuários encontrados

```
{
  "status": 1,
  "data": [
    {
      "id": 1,
      "uid": "string",
      "email": "user@example.com",
      "first_name": "string",
      "middle_name": "string",
      "last_name": "string",
      "full_name": "string",
      "created_via_api": true,
      "permissions": [],
      "enabled_at": "2024-01-15T10:30:00Z",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    },
    {
      "id": 1,
      "uid": "string",
      "email": "user@example.com",
      "first_name": "string",
      "middle_name": "string",
      "last_name": "string",
      "full_name": "string",
      "created_via_api": true,
      "permissions": [],
      "enabled_at": "2024-01-15T10:30:00Z",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "prev_url": "string",
    "next_url": "string",
    "page": 1
  }
}
```


#### POST /v2/v2/admin/users
**Description**: Incluir um Usuário

**Request Body** (application/json):

- Type: `v2_user`
- Properties:
  - `id` (optional): integer - ID do usuário
  - `uid` (optional): string - UID do Evento
  - `email` (required): string - E-mail
  - `first_name` (optional): string - Primeiro Nome
  - `middle_name` (optional): string - Nome do Meio
  - `last_name` (optional): string - Último Nome
  - `full_name` (optional): string - Nome completo
  - `created_via_api` (optional): boolean - Enviado pela API
  - `permissions` (optional): array - Permissões
  - `enabled_at` (optional): string - Data e hora de criação de ativação do usuário
  - `created_at` (optional): string - Data e hora de criação do evento
  - `updated_at` (optional): string - Data e hora de atualização do evento
- Example:
```
{
  "id": 1,
  "uid": "string",
  "email": "user@example.com",
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "full_name": "string",
  "created_via_api": true,
  "permissions": [],
  "enabled_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Usuário incluído

```
{
  "status": 1,
  "data": {
    "id": 1,
    "uid": "string",
    "email": "user@example.com",
    "first_name": "string",
    "middle_name": "string",
    "last_name": "string",
    "full_name": "string",
    "created_via_api": true,
    "permissions": [],
    "enabled_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


#### DELETE /v2/v2/admin/users/{id}
**Description**: Excluir um Usuário

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Usuário

**Response**:

Usuário excluído

#### PUT /v2/v2/admin/users/{id}
**Description**: Alterar Dados De Um Usuário

**Request Body** (application/json):

- Type: `v2_user`
- Properties:
  - `id` (optional): integer - ID do usuário
  - `uid` (optional): string - UID do Evento
  - `email` (required): string - E-mail
  - `first_name` (optional): string - Primeiro Nome
  - `middle_name` (optional): string - Nome do Meio
  - `last_name` (optional): string - Último Nome
  - `full_name` (optional): string - Nome completo
  - `created_via_api` (optional): boolean - Enviado pela API
  - `permissions` (optional): array - Permissões
  - `enabled_at` (optional): string - Data e hora de criação de ativação do usuário
  - `created_at` (optional): string - Data e hora de criação do evento
  - `updated_at` (optional): string - Data e hora de atualização do evento
- Example:
```
{
  "id": 1,
  "uid": "string",
  "email": "user@example.com",
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "full_name": "string",
  "created_via_api": true,
  "permissions": [],
  "enabled_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.
- `id` (path, string) (required): ID do Usuário

**Response**:

Usuário Alterado

```
{
  "status": 1,
  "data": {
    "id": 1,
    "uid": "string",
    "email": "user@example.com",
    "first_name": "string",
    "middle_name": "string",
    "last_name": "string",
    "full_name": "string",
    "created_via_api": true,
    "permissions": [],
    "enabled_at": "2024-01-15T10:30:00Z",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```


### Usuário Autenticado

#### GET /v1/v1/userinfo
**Description**: Informações do Usuário

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Usuário encontrado

```
{
  "id": 1,
  "uid": "string",
  "email": "user@example.com",
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "full_name": "string",
  "created_via_api": true,
  "permissions": [],
  "enabled_at": "2024-01-15T10:30:00Z",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


### Webhooks
Webhooks

#### GET /v1/v1/webhooks
**Description**: Listar Webhooks

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `page` (query, integer) (optional): Número da Página
- `per_page` (query, integer) (optional): Quantidade de registros por página

**Response**:

Sucesso na listagem de webhooks

```
[
  {
    "id": 1,
    "name": "string",
    "url": "string",
    "content_type": "string",
    "events": [
      "ping",
      "ping"
    ],
    "active": true,
    "ssl_verification_enabled": true,
    "subaccounts": true,
    "bank_billet_account_id": 1,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  },
  {
    "id": 1,
    "name": "string",
    "url": "string",
    "content_type": "string",
    "events": [
      "ping",
      "ping"
    ],
    "active": true,
    "ssl_verification_enabled": true,
    "subaccounts": true,
    "bank_billet_account_id": 1,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
]
```


#### POST /v1/v1/webhooks
**Description**: Criar Webhook

**Request Body** (application/json):

- Type: `v1_webhook_object`
- Properties:
  - `id` (optional): integer - ID do webhook
  - `name` (optional): string - Nome de identificação do webhook
  - `url` (required): string - Endereço onde as requisições serão realizadas
  - `content_type` (optional): string - Content-type da requisição que será realizada. Valores válidos `application/json` (valor padrão) ou `application/x-www-form-urlencoded`.
  - `events` (required): array - Eventos que devem gerar notificações para o webhook. Escolha um ou mais eventos.
  - `active` (optional): boolean - Define se o webhook estará ativo, recebendo notificações. O valor padrão é `true`.
  - `ssl_verification_enabled` (optional): boolean - Define se a verificação SSL está habilitada no webhook.
  - `subaccounts` (optional): boolean - Define se o webhook estará ativo para os eventos das subcontas.
  - `bank_billet_account_id` (optional): integer - ID da [Carteira de Cobrança](/reference/post_v1-bank-billet-accounts). Se informado, o webhook apenas receberá notificações de eventos relacionados à carteira indicada.
  - `created_at` (optional): string - Data e hora de criação do registro
  - `updated_at` (optional): string - Data e hora da última atualização do registro
- Example:
```
{
  "id": 1,
  "name": "string",
  "url": "string",
  "content_type": "string",
  "events": [
    "ping",
    "ping"
  ],
  "active": true,
  "ssl_verification_enabled": true,
  "subaccounts": true,
  "bank_billet_account_id": 1,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `X-Idempotency-Key` (header, string) (optional): Chave de idempotência para evitar replay de processamento.

**Response**:

Webhook criado

```
{
  "id": 1,
  "name": "string",
  "url": "string",
  "content_type": "string",
  "events": [
    "ping",
    "ping"
  ],
  "active": true,
  "ssl_verification_enabled": true,
  "subaccounts": true,
  "bank_billet_account_id": 1,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### DELETE /v1/v1/webhooks/{id}
**Description**: Excluir Webhook

**Parameters**:

- `id` (path, string) (required): ID do webhook
- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Webhook excluido

#### GET /v1/v1/webhooks/{id}
**Description**: Informações do Webhook

**Parameters**:

- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.
- `id` (path, string) (required): ID do webhook

**Response**:

Webhook encontrado

```
{
  "id": 1,
  "name": "string",
  "url": "string",
  "content_type": "string",
  "events": [
    "ping",
    "ping"
  ],
  "active": true,
  "ssl_verification_enabled": true,
  "subaccounts": true,
  "bank_billet_account_id": 1,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```


#### PUT /v1/v1/webhooks/{id}
**Description**: Atualizar Webhook

**Request Body** (application/json):

- Type: `v1_webhook_object`
- Properties:
  - `id` (optional): integer - ID do webhook
  - `name` (optional): string - Nome de identificação do webhook
  - `url` (required): string - Endereço onde as requisições serão realizadas
  - `content_type` (optional): string - Content-type da requisição que será realizada. Valores válidos `application/json` (valor padrão) ou `application/x-www-form-urlencoded`.
  - `events` (required): array - Eventos que devem gerar notificações para o webhook. Escolha um ou mais eventos.
  - `active` (optional): boolean - Define se o webhook estará ativo, recebendo notificações. O valor padrão é `true`.
  - `ssl_verification_enabled` (optional): boolean - Define se a verificação SSL está habilitada no webhook.
  - `subaccounts` (optional): boolean - Define se o webhook estará ativo para os eventos das subcontas.
  - `bank_billet_account_id` (optional): integer - ID da [Carteira de Cobrança](/reference/post_v1-bank-billet-accounts). Se informado, o webhook apenas receberá notificações de eventos relacionados à carteira indicada.
  - `created_at` (optional): string - Data e hora de criação do registro
  - `updated_at` (optional): string - Data e hora da última atualização do registro
- Example:
```
{
  "id": 1,
  "name": "string",
  "url": "string",
  "content_type": "string",
  "events": [
    "ping",
    "ping"
  ],
  "active": true,
  "ssl_verification_enabled": true,
  "subaccounts": true,
  "bank_billet_account_id": 1,
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z"
}
```

**Parameters**:

- `id` (path, string) (required): ID do webhook
- `User-Agent` (header, string) (optional): Informar um e-mail válido para contatos.

**Response**:

Webhook atualizado

