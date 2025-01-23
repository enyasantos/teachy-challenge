import TableHeaderItem from "./table-header-item";

export default function TableHeader() {
  return (
    <tr className="border">
      <TableHeaderItem content="Nome" />
      <TableHeaderItem content="Altura" />
      <TableHeaderItem content="Nº de espaçonaves" />
      <TableHeaderItem content="Filmes" />
    </tr>
  );
}
