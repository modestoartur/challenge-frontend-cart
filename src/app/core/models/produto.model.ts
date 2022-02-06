export default class Produto {
  codigo_produto!: number;
  descricao!: string;
  situacao_cadastro!: string;
  voltagem_cadastro!: string;
  voltagem_sortimento!: string;
  tipo!: number;
  status!: string;
  grade_distribuicao!: number;
  canal_venda!: number;
  tipo_entrega!: string;
  mercadoria_via_varejo!: string;
  secao!: { id: number; descricao: string };
  marca!: { id: number; descricao: string };
  especie!: { id: number; descricao: string };
  categoria!: { id: number; descricao: string };
  sub_categoria!: { id: number; descricao: string };
  modelo!: { id: number; descricao: string };
  obrigatorio!: number;
  sugestao!: number;
  total!: number;
  total_lojas!: number;
  clonavel!: boolean;
  selecionado?: boolean;
}
