# Kobana - Plataforma financeira com IA nativa

## 1. Visão Geral da Kobana

### O que é a Kobana

A Kobana é uma plataforma de automação e gestão financeira que conecta empresas a dezenas de bancos brasileiros através de uma única API. É um gateway bancário que permite emitir cobranças, fazer pagamentos e acompanhar extratos de todas as contas em um só lugar.

**Proposta de valor:** "A gente cuida dos seus processos, enquanto você cuida do seu propósito."

**Tagline:** Plataforma financeira com IA nativa - Operações bancárias automatizadas por inteligência artificial.

### Números da Plataforma

- Mais de R$ 50 bilhões em transações processadas
- Mais de 5 milhões de operações bancárias por mês
- Mais de 6 mil contas bancárias conectadas
- Mais de 40 bancos integrados

### Para quem é indicada

A Kobana atende empresas de todos os portes que precisam automatizar sua gestão financeira:
- PMEs que querem reduzir trabalho manual e inadimplência
- Empresas médias buscando integração multi-banco
- Grandes empresas com alto volume de transações
- Fintechs e plataformas que precisam de solução white-label

Segmentos atendidos: varejo, serviços, indústria, educação, saúde, imobiliário e mais.

### A Kobana não é um banco

A Kobana não substitui contas bancárias. É um gateway bancário que conecta as contas existentes em diferentes bancos, centralizando a gestão em uma única plataforma. Os clientes continuam usando seus bancos normalmente, mas com a vantagem de gerenciar tudo em um só lugar.

---

## 2. Como Funciona

### Três Passos para Começar

1. **Conecte suas contas bancárias**: Adicione contas de qualquer banco parceiro. A conexão é feita via API ou arquivos CNAB.

2. **Opere pelo dashboard ou API**: Use o painel para gerenciar visualmente ou integre via API para automatizar processos.

3. **Escale sua operação**: Adicione novas contas, usuários e funcionalidades conforme a empresa cresce.

### Benefícios Principais

- **Conexão direta com os bancos**: Integração nativa com mais de 40 bancos brasileiros, sem intermediários
- **Uma API, todos os bancos**: Integre uma vez, opere com qualquer banco através de API unificada
- **Dashboard completo**: Gerencie cobranças, pagamentos e extratos em um único lugar
- **Automação de ponta a ponta**: Réguas de cobrança, webhooks, importações em lote
- **Suporte brasileiro**: Time disponível para ajudar com respostas rápidas
- **Segurança como prioridade**: Dados criptografados, conformidade com a LGPD, infraestrutura robusta e monitorada 24/7

---

## 3. Funcionalidades de Recebimentos

### Boletos Bancários Registrados

Emissão de boletos registrados em mais de 15 bancos com registro instantâneo.

**Recursos:**
- Emissão via API ou dashboard
- Registro via API ou CNAB
- Personalização de layout e instruções
- Configuração de juros, multa e descontos
- Baixa automática quando pago
- Boletos com ou sem registro
- Instruções de protesto
- Split de pagamentos
- Carteiras configuráveis (com/sem registro)

**Controle completo:**
- Instruções automáticas de protesto após vencimento
- Negativação em bureaus de crédito
- Instruções de desconto por antecipação
- Histórico de comandos por boleto

### PIX Cobrança

Geração de QR Codes dinâmicos e estáticos para recebimentos instantâneos.

**Recursos:**
- QR Code dinâmico (único por cobrança)
- QR Code estático (reutilizável)
- PIX Copia e Cola
- Cobrança com vencimento
- Webhook de confirmação instantânea
- Recebimentos creditados imediatamente

**Integrações PIX:**
- Banco do Brasil, Bradesco, Itaú, Santander, Caixa
- Sicoob, Sicredi, Banrisul
- Inter, BTG, ABC Brasil, QI Tech, Semear

### BolePix (Boleto Híbrido)

Boleto tradicional com QR Code PIX integrado. O cliente escolhe como pagar: linha digitável ou PIX instantâneo.

**Recursos:**
- QR Code PIX no boleto
- Duas formas de pagamento em uma cobrança
- Baixa automática independente do método
- Maior taxa de conversão

### PIX Automático

Débito automático via PIX com autorização prévia do pagador.

**Recursos:**
- Autorização única para cobranças recorrentes
- Cobrança automática na data programada
- Cancelamento a qualquer momento
- Ideal para assinaturas e mensalidades

### Links de Pagamento

Páginas de checkout personalizáveis para compartilhar em qualquer canal.

**Recursos:**
- Link único por cobrança
- Página personalizada com a marca
- Múltiplos métodos de pagamento
- Compartilhamento via WhatsApp, email, SMS

### Carnês

Cobranças parceladas com geração automática de boletos.

**Recursos:**
- Criação de parcelamentos
- Geração automática de boletos por parcela
- Controle de vencimentos
- Régua de comunicação por parcela

### Régua de Comunicação

Sequência automática de mensagens enviadas aos clientes em momentos estratégicos.

**Canais:**
- Email
- SMS
- WhatsApp

**Momentos:**
- Antes do vencimento (lembrete)
- No dia do vencimento
- Após vencimento (cobrança)
- Confirmação de pagamento

---

## 4. Funcionalidades de Pagamentos

### Pagamento de Boletos

Pagamento de boletos de qualquer banco diretamente pela plataforma.

**Recursos:**
- Leitura de código de barras
- Validação automática de dados
- Agendamento de pagamento
- Pagamentos em lote
- Processamento via API ou dashboard

### Pagamento PIX

Transferências PIX para qualquer chave ou QR Code.

**Recursos:**
- Pagamento por chave PIX (CPF, CNPJ, email, telefone, aleatória)
- Leitura de QR Code
- Pagamento de PIX Cobrança
- Confirmação instantânea

### Pagamento de Contas de Consumo

Pagamento de concessionárias e contas recorrentes.

**Tipos:**
- Energia elétrica
- Água
- Gás
- Telefone
- Internet

**Recursos:**
- Leitura automática de código de barras
- Agendamento
- Pagamentos em lote

### Pagamento de Tributos

Pagamento de impostos federais, estaduais e municipais.

**Tipos suportados:**
- DARF (Documento de Arrecadação de Receitas Federais)
- GPS (Guia da Previdência Social)
- GRU (Guia de Recolhimento da União)
- GARE (Guia de Arrecadação Estadual)
- GNRE (Guia Nacional de Recolhimento de Tributos Estaduais)

**Recursos:**
- Validação automática de dados
- Agendamento
- Processamento em lote

### Pagamentos em Lote

Processamento de múltiplos pagamentos simultaneamente.

**Recursos:**
- Importação via CSV ou CNAB
- Validação de todos os dados antes de processar
- Apontamento de erros para correção
- Aprovação em lote

---

## 5. Funcionalidades de Transferências

### Transferência PIX

Transferências instantâneas 24/7 para qualquer conta.

**Recursos:**
- Transferência por chave PIX
- Transferência por dados bancários
- Processamento instantâneo
- Confirmação em tempo real

### Transferência TED

Transferências entre bancos em horário comercial.

**Recursos:**
- TED same-day (D+0)
- Agendamento para datas futuras
- Processamento em lote
- Validação de dados bancários

### Transferência Entre Contas

Movimentação interna entre contas conectadas na Kobana.

**Recursos:**
- Transferência instantânea
- Sem custo adicional
- Ideal para gestão de caixa multi-empresa

---

## 6. Gestão Financeira

### Contas Bancárias

Centralização de todas as contas em uma única plataforma.

**Recursos:**
- Conexão via API ou EDI/CNAB
- Dashboard unificado
- Visão consolidada de saldos
- Operações em qualquer conta conectada

### Saldos e Extratos

Visibilidade completa das movimentações financeiras.

**Recursos:**
- Importação automática de extratos
- Histórico completo de transações
- Saldos em tempo real
- Exportação em múltiplos formatos (CSV, OFX)

### Conciliação Bancária

Automatização do processo de conciliação.

**Recursos:**
- Matching automático de pagamentos
- Identificação de divergências
- Conciliação de recebimentos
- Relatórios de conciliação

### DDA (Débito Direto Autorizado)

Recebimento e visualização de boletos emitidos contra o CNPJ.

**Recursos:**
- Listagem automática de boletos a pagar
- Integração com fluxo de pagamentos
- Aprovação centralizada

### Subcontas

Segregação de operações por unidade, projeto ou finalidade.

**Recursos:**
- Criação de subcontas ilimitadas
- Saldos independentes
- Relatórios por subconta
- Transferências internas

### Gestão de Usuários

Controle granular de acessos e permissões.

**Recursos:**
- Mais de 340 permissões granulares
- Perfis de acesso customizáveis
- Convite por email
- Logs de auditoria por usuário

### Portal do Cliente

Interface para clientes consultarem suas cobranças.

**Recursos:**
- Área do cliente personalizada
- Consulta de cobranças pendentes
- Segunda via de boletos
- Histórico de pagamentos

### Exportações

Geração de relatórios em diversos formatos.

**Formatos:**
- CSV
- Excel
- OFX
- CNAB

**Tipos:**
- Relatórios de cobranças
- Relatórios de pagamentos
- Extratos
- Conciliação

---

## 7. Soluções por Necessidade

### Contas a Receber

Automação completa do ciclo de recebimentos.

**Funcionalidades:**
- Emissão automatizada de cobranças
- Régua de comunicação
- Baixa automática de pagamentos
- Conciliação de recebíveis
- Relatórios de inadimplência
- Protestos e negativação

### Contas a Pagar

Centralização e automação de pagamentos.

**Funcionalidades:**
- Pagamentos em lote
- Aprovações em níveis
- Agendamento
- Integração com ERPs
- DDA integrado
- Relatórios de fluxo de caixa

---

## 8. Soluções por Porte de Empresa

### PMEs (Pequenas e Médias Empresas)

**Benefícios:**
- Redução de trabalho manual
- Automação de cobranças recorrentes
- Régua de comunicação para reduzir inadimplência
- Dashboard simples e intuitivo
- Preço acessível por transação

### Enterprise (Grandes Empresas)

**Benefícios:**
- Alto volume de transações
- Integrações customizadas
- SLA dedicado
- Suporte prioritário
- Gestão multi-empresa
- Permissões granulares

### Fintechs

**Benefícios:**
- White-label disponível
- API completa para integração
- Subcontas para segregação
- Escalabilidade garantida
- Sandbox para desenvolvimento

---

## 9. Soluções por Segmento

### Varejo

- Emissão de boletos e carnês
- Links de pagamento
- Conciliação de vendas
- Integração com PDV

### Saúde

- Cobranças recorrentes para planos
- Régua de comunicação automatizada
- Portal do paciente
- Integração com sistemas hospitalares

### Educação

- Carnês para mensalidades
- Boletos com desconto por antecipação
- Portal do aluno
- Integração com sistemas acadêmicos

### Indústria

- Pagamentos de fornecedores em lote
- Gestão de múltiplas contas bancárias
- Conciliação automatizada
- Integração com ERPs industriais

### Imobiliário

- Cobranças de aluguéis
- Split de pagamentos (administradora/proprietário)
- Carnês de condomínio
- Portal do inquilino

### Serviços

- Cobranças recorrentes
- Links de pagamento por projeto
- Automação de faturamento
- Integração com sistemas de gestão

---

## 10. Integrações Bancárias

### Bancos com Integração Completa (API + EDI)

| Banco | Código | Funcionalidades |
|-------|--------|-----------------|
| Banco do Brasil | 001 | Boletos, PIX, Pagamentos, Transferências, Extratos |
| Bradesco | 237 | Boletos, PIX, Pagamentos, Transferências, Extratos |
| Itaú | 341 | Boletos, PIX, Pagamentos, Transferências, Extratos |
| Santander | 033 | Boletos, PIX, Pagamentos, Transferências, Extratos |
| Caixa Econômica | 104 | Boletos, PIX, Pagamentos, Transferências, Extratos |
| Sicoob | 756 | Boletos, PIX, Pagamentos, Transferências, Extratos |
| Banrisul | 041 | Boletos, PIX, Pagamentos, Transferências, Extratos |
| ABC Brasil | 246 | Boletos, PIX, Extratos |
| BTG Pactual | 208 | Boletos, PIX, Extratos |
| BV | 655 | Boletos |

### Cooperativas de Crédito

| Cooperativa | Código | Conexão | Funcionalidades |
|-------------|--------|---------|-----------------|
| Sicoob | 756 | API + EDI | Boletos, PIX, Pagamentos, Transferências, Extratos |
| Sicredi | 748 | API + EDI | Boletos, PIX, Extratos |
| Ailos | 085 | API + EDI | Boletos |
| Cresol | 133 | API + EDI | Boletos |
| Unicred | 136 | API + EDI | Boletos |
| Uniprime | 099 | API + EDI | Boletos |
| Credisis | 097 | EDI | Boletos |

### Bancos Regionais

| Banco | Código | Conexão | Funcionalidades |
|-------|--------|---------|-----------------|
| Banrisul | 041 | API + EDI | Boletos, PIX, Pagamentos, Transferências, Extratos |
| BRB | 070 | EDI | Boletos |
| Banco do Nordeste | 004 | EDI | Boletos |
| Banese | 047 | EDI | Boletos |
| Banestes | 021 | EDI | Boletos |

### Bancos Digitais

| Banco | Código | Conexão | Funcionalidades |
|-------|--------|---------|-----------------|
| Inter | 077 | API | PIX, Extratos |
| BTG Pactual | 208 | API + EDI | Boletos, PIX, Extratos |
| Cora | 403 | API | Boletos |
| QI Tech | 329 | API | Boletos, PIX, Pagamentos, Transferências |
| Semear | 743 | API | Boletos, PIX |

### Outros Bancos

Safra, Arbi, Banco Industrial, BNP Paribas, Caruana, Citibank, Daycoval, Mercantil, BMP (Moneyplus), Rendimento, Sofisa - todos com integração EDI para boletos.

### Tipos de Conexão

**Conexão via API:**
- Operações em tempo real
- Registro instantâneo de boletos
- Confirmação imediata de pagamentos
- Ideal para automação completa

**Conexão via EDI/CNAB:**
- Compatibilidade universal com qualquer banco
- Automação de envio e recebimento de arquivos
- Ideal para bancos sem API disponível
- Processamento em lote

---

## 11. Integrações com ERPs e Sistemas

### ERPs Integrados

- TOTVS
- SAP
- Omie
- Bling
- Tiny
- ContaAzul

### Integrações via API

A API permite conectar qualquer sistema que suporte webhooks ou chamadas HTTP.

### EDI/Mailbox

Integração via troca de arquivos CNAB com bancos que não oferecem API.

---

## 12. Inteligência Artificial

### Kia - Assistente de IA

A Kia é a assistente de IA da Kobana, disponível como aplicativo desktop para macOS, Windows e Linux.

**Capacidades:**
- Execução de tarefas financeiras por comandos em linguagem natural
- Acesso contextual completo aos dados financeiros
- Automação de operações repetitivas
- Análise de dados e relatórios

**Exemplos de uso:**
- "Liste minhas contas financeiras"
- "Pague todas as contas vencidas"
- "Mostre o saldo de todas as contas"
- "Gere um relatório de inadimplência"

### MCP Servers (Model Context Protocol)

Conexão de agentes de IA diretamente à plataforma Kobana através do protocolo MCP.

**Clientes Compatíveis:**
- Claude Desktop
- Claude Code
- ChatGPT Desktop
- Cursor
- VS Code (com extensão MCP)
- Windsurf
- Manus
- Perplexity

**Servidores MCP Disponíveis:**

| Servidor | Pacote npm | Ferramentas | Descrição |
|----------|------------|-------------|-----------|
| Admin | kobana-mcp-admin | 17 | Gerenciamento de certificados, conexões, subcontas e usuários |
| Charge | kobana-mcp-charge | 35 | Cobranças Pix, contas Pix, Pix automático e recebimentos |
| Payment | kobana-mcp-payment | 24 | Pagamentos de boletos, Pix, DARF, impostos e utilidades |
| Transfer | kobana-mcp-transfer | 16 | Transferências Pix, TED e entre contas internas |
| Financial | kobana-mcp-financial | 15 | Contas financeiras, saldos, extratos e transações |
| Data | kobana-mcp-data | 2 | Consultas de boletos bancários por código de barras |
| EDI | kobana-mcp-edi | 4 | Gerenciamento de caixas EDI para arquivos CNAB |

**Total:** 113 ferramentas disponíveis para automação via IA.

**Modos de Conexão:**
- Local (via npx): Execução do servidor na máquina local
- Remoto (servidor hospedado): Conexão direta ao servidor na nuvem em mcp.kobana.com.br

---

## 13. Recursos para Desenvolvedores

### API RESTful

API bem documentada com endpoints padronizados, respostas JSON e códigos HTTP semânticos.

**Características:**
- Autenticação OAuth 2.0 com tokens JWT
- Escopos granulares de permissão
- Rate limiting para proteção
- Webhooks assinados (HMAC-SHA256)

### Webhooks

Notificações em tempo real sobre eventos.

**Eventos disponíveis:**
- Pagamento confirmado
- Boleto gerado/registrado
- Transferência realizada
- Status de cobrança alterado

**Recursos:**
- Retry automático em caso de falha
- Validação HMAC-SHA256
- Logs de envio

### Sandbox

Ambiente de testes gratuito idêntico a produção.

**Recursos:**
- Dados simulados sem efeito real
- Mesmas APIs de produção
- Ideal para desenvolvimento e homologação
- Disponível em sandbox.kobana.com.br

### SDKs Oficiais

| Linguagem | Repositório | Instalação |
|-----------|-------------|------------|
| Ruby | github.com/kobana/kobana-ruby | gem install kobana |
| PHP | github.com/kobana/kobana-php | composer require kobana/kobana-php |
| Python | github.com/kobana/kobana-python | pip install kobana |
| Node.js | github.com/kobana/kobana-node | npm install kobana |

### Documentação

Disponível em developers.kobana.com.br:
- Guias de integração passo a passo
- Referência completa de endpoints
- Exemplos de código
- Try it out interativo

---

## 14. Segurança

### Métricas de Segurança

- 99.9% de disponibilidade
- Menos de 15 minutos de resposta a incidentes
- 2 pentests realizados por ano
- Zero vazamentos de dados

### Camadas de Proteção

**Criptografia:**
- TLS 1.3 em trânsito com HSTS e Perfect Forward Secrecy
- AES-256 para dados em repouso
- Chaves rotacionadas via HSM
- Certificados ICP-Brasil para integração com bancos (mTLS)

**Infraestrutura:**
- Hospedada na Amazon Web Services (AWS)
- Monitoramento 24/7 com SIEM
- Detecção de anomalias em tempo real
- Backups incrementais com redundância geográfica

**Arquitetura de Rede:**
- Segmentação por função e nível de sensibilidade
- Firewalls com regras rigorosas
- WAF (Web Application Firewall)
- Proteção contra DDoS

**Controle de Acesso:**
- Princípio do menor privilégio
- MFA obrigatório para acessos administrativos
- SSO corporativo
- Revisão trimestral de acessos

**Backup e Recuperação:**
- RPO: Perda máxima de 1 hora de dados
- RTO: Recuperação em até 4 horas
- Failover automático
- Testes de DR trimestrais

### Conformidade

- LGPD (Lei Geral de Proteção de Dados)
- Políticas claras de coleta e uso de dados
- Direitos do titular (acesso, correção, exclusão)
- DPO designado

### Programa White Hat

Programa de recompensas para pesquisadores de segurança.

**Recompensas:** R$ 500 a R$ 5.000+ dependendo da severidade.

**Regras:**
- Divulgação responsável
- Relatórios para whitehat@kobana.com.br
- Doações para ONGs recebem recompensas em dobro

---

## 15. Perguntas Frequentes

### Sobre Cadastro e Conta

**Como criar conta:** Acesse kobana.com.br/cadastro, preencha dados (nome, email, CNPJ), confirme email. Menos de 2 minutos, sem cartão de crédito.

**Teste antes de contratar:** Ambiente sandbox gratuito disponível. Período de avaliação para novos usuários.

**Adicionar usuários:** Sem limite de usuários. Perfis de acesso com mais de 340 permissões granulares.

**Autenticação 2FA:** Disponível via Google Authenticator, Authy ou similar.

### Sobre Cobranças

**Tipos disponíveis:** Boleto registrado, PIX Cobrança, BolePix, Link de pagamento, Carnês.

**Acompanhamento de pagamentos:** Dashboard com status, webhooks em tempo real, API para consulta, relatórios exportáveis.

### Sobre Pagamentos

**Tipos disponíveis:** Boletos de qualquer banco, tributos (DARF, GPS, GRU, GARE, GNRE), contas de consumo, PIX, TED.

**Agendamento:** Disponível para todas as modalidades. Cancelável até a data de execução.

**Pagamentos em lote:** Via dashboard (importação CSV/CNAB) ou API (lista em única requisição).

### Sobre Integrações

**Conexão bancária:** Via API (mais rápida) ou via CNAB/EDI (para qualquer banco).

**Tempo de integração:**
- Dashboard somente: Imediato
- Integração básica via API: 1-3 dias
- Integração completa: 1-2 semanas

### Sobre Preços

**Modelo de precificação:** Setup inicial + mensalidade baseada em uso real.

**Taxa de setup:** Não há para planos padrão.

**Mudança de plano:** Upgrade imediato, downgrade no próximo ciclo. Sem multa.

### Sobre Suporte

**Canais:** Chat no dashboard, email (suporte@kobana.com.br), Central de Ajuda.

**Horário:** Segunda a sexta, 8h às 18h (Brasília). Clientes enterprise: SLA estendido.

**Treinamento:** Webinars, tutoriais em vídeo, documentação. Enterprise: treinamento personalizado.

---

## 16. Modelo de Preços

### Estrutura

- **Setup inicial:** Valor único para começar a usar a plataforma
- **Mensalidade:** Baseada no uso real (transações processadas)

### Características

- Preço fixo mensal
- Descontos por volume
- Cancelamento a qualquer momento
- Sem taxa de setup para planos padrão

### Tipos de Planos

Alguns planos têm mensalidade fixa + taxa por transação. Outros são 100% baseados em uso (pay as you go).

---

## 17. Links e Recursos

### Plataforma

- Dashboard: app.kobana.com.br
- API: api.kobana.com.br
- Sandbox: sandbox.kobana.com.br
- MCP Servers: mcp.kobana.com.br

### Documentação

- Documentação da API: developers.kobana.com.br
- Central de Ajuda: suporte.kobana.com.br
- Status: status.kobana.com.br

### Contato

- Suporte: suporte@kobana.com.br
- Segurança: seguranca@kobana.com.br
- White Hat: whitehat@kobana.com.br
- Comercial: comercial@kobana.com.br

---

## 18. Depoimentos de Clientes

**Aurélio Schuelter - Área Central:**
"A Kobana possui uma API simples de integrar que suporta carteiras de vários bancos, além da agilidade na homologação de cada uma dessas carteiras. Recomendo pelo bom atendimento e suporte."

**Suellen Malveis - Amaze Travel:**
"A interface da Kobana é bem didática e funcional. Além disso, a equipe de suporte é bem rápida e eficiente no atendimento."

**Anderson Rocha - Interis:**
"A Kobana possui integração com mais de 20 bancos. Hoje com a nossa ferramenta integrada à Kobana possuímos um diferencial para a atração de novos clientes, que podem emitir boletos com facilidade diretamente da nossa plataforma."

**Thiago Daher - Protesto 24h:**
"Fiz diversas integrações com diferentes sistemas ao longo de 2021. A API da Kobana foi muito fácil de integrar, foi uma das melhores que eu já usei."

**Gustavo Benites - Porto Vistos:**
"A Kobana nos poupa muito tempo. Desde a geração do boleto que o próprio cliente realiza via a integração com o Typeform até lembrar o cliente dois dias antes do vencimento através de integrações com o Zapier e Drip. Está tudo automatizado! A Kobana tem um excelente custo benefício."

**Emerson Henning - Henning Informática:**
"Recomendo a Kobana pela sua simplicidade tanto na integração da API, como também para geração dos boletos, assinaturas e arquivos de remessa. Tudo isso é feito de forma simples e intuitiva, além de ter um bom custo benefício."