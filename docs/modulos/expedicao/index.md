# Expedicao

O modulo de Expedicao gerencia o despacho e envio dos pedidos aos clientes.

## Video Demonstrativo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px;">
  <iframe 
    src="https://www.youtube.com/embed/TnwDE_IRxqk" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 8px;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

## Funcionalidades

### Preparacao do Envio

Para preparar o envio de um pedido:

1. Acesse **Expedicao** > **Fila de Envio**
2. Selecione o pedido
3. Separe os itens do pedido
4. Confirme a separacao
5. Gere a nota fiscal

### Consulta de Envios

Visualize todos os envios realizados:

- **Enviados**: Pedidos que sairam para entrega
- **Em Transito**: Pedidos em deslocamento
- **Entregues**: Pedidos confirmados pelo cliente

### Gestao de Transporte

Configure as opcoes de transporte:

| Transportadora | Prazo Medio | Custo |
|----------------|-------------|-------|
| Transportadora A | 3 dias | R$ 15,00 |
| Transportadora B | 5 dias | R$ 10,00 |
| Correios | 7 dias | R$ 8,00 |
| Retirada | Imediato | Gratis |

### Rastreamento

Acompanhe o rastreio dos envios:

1. Acesse **Expedicao** > **Rastreamento**
2. Informe o codigo de rastreio
3. Visualize o status atualizado

---

## Dicas

!!! tip "Dica"
    Utilize a impressao automatica de etiquetas para agilizar o processo de preparacao do envio.

!!! info "Informacao"
    O sistema envia automaticamente o codigo de rastreio ao cliente por email quando o pedido e expedido.
