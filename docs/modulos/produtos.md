# Produtos

O modulo de Produtos permite o cadastro e gestao completa dos itens comercializados pela empresa.

## Funcionalidades

### Cadastro de Produtos

Para cadastrar um novo produto:

1. Acesse o menu **Produtos** na barra lateral
2. Clique em **Novo Produto**
3. Preencha os campos obrigatorios:
    - **Codigo**: Codigo unico do produto
    - **Descricao**: Nome completo do produto
    - **Unidade**: Unidade de medida (UN, KG, LT, etc)
    - **Grupo**: Categoria do produto
4. Clique em **Salvar**

### Campos Adicionais

| Campo | Descricao | Obrigatorio |
|-------|-----------|-------------|
| Codigo de Barras | Codigo EAN/GTIN | Nao |
| NCM | Nomenclatura Comum do Mercosul | Sim |
| CFOP | Codigo Fiscal de Operacoes | Sim |
| Peso Liquido | Peso em kg | Nao |
| Peso Bruto | Peso total com embalagem | Nao |
| Estoque Minimo | Quantidade minima em estoque | Nao |
| Estoque Maximo | Quantidade maxima em estoque | Nao |

### Consulta de Estoque

O sistema permite consultar o estoque atual de cada produto por armazem:

1. Acesse **Produtos** > **Estoque**
2. Selecione o armazem desejado
3. Visualize as quantidades disponiveis

### Relatorios

- **Relatorio de Produtos**: Lista completa de produtos cadastrados
- **Relatorio de Estoque**: Posicao de estoque por armazem
- **Relatorio de Movimentacoes**: Entradas e saidas de estoque

---

## Dicas

!!! tip "Dica"
    Use o campo de busca para encontrar rapidamente o produto desejado. O sistema aceita busca por codigo, descricao ou parte do nome.

!!! warning "Atencao"
    Produtos com estoque negativo nao podem ser emitidos em notas fiscais. Verifique a posicao de estoque antes da expedicao.
