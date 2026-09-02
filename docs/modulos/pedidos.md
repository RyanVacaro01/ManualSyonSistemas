# Pedidos

O modulo de Pedidos gerencia todo o ciclo de vida dos pedidos de venda, desde a solicitacao ate a faturamento.

## Funcionalidades

### Registro de Pedidos

Para registrar um novo pedido:

1. Acesse **Pedidos** > **Novo Pedido**
2. Selecione o cliente
3. Adicione os itens:
    - Selecione o produto
    - Informe a quantidade
    - Confirme o preco
4. Revise o resumo do pedido
5. Confirme o pedido

### Status do Pedido

| Status | Descricao | Acao |
|--------|-----------|------|
| 🟡 Pendente | Aguardando confirmacao | Pode ser editado |
| 🟠 Confirmado | Confirmado pelo sistema | Aguardando producao |
| 🔵 Em Producao | Sendo produzido | Acompanhar progresso |
| 🟣 Pronto | Pronto para expedir | Aguardando despacho |
| 🟢 Expedido | Enviado ao cliente | Aguardando recebimento |
| ✅ Entregue | Cliente recebeu | Pedido finalizado |
| ❌ Cancelado | Pedido cancelado | Sem acoes |

### Acompanhamento

Acompanhe o progresso do pedido em tempo real:

1. Acesse **Pedidos** > **Consulta**
2. Selecione o pedido desejado
3. Visualize o historico de movimentacoes

### Relatorios

- **Pedidos do Dia**: Lista de pedidos recebidos
- **Pedidos Pendentes**: Pedidos aguardando producao
- **Pedidos Atrasados**: Pedidos com prazo vencido
- **Performance de Vendas**: Analise de vendas por periodo

---

## Dicas

!!! tip "Dica"
    Use o atalho `Ctrl + N` para criar um novo pedido rapidamente.

!!! info "Informacao"
    O sistema envia automaticamente notificacoes quando o pedido muda de status.
