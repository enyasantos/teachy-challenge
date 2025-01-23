import TableHeaderItemComponent from "./table-header-item";

export default function TableHeaderComponent() {
  return (
    <tr className="border">
      <TableHeaderItemComponent content="Nome" />
      <TableHeaderItemComponent content="Altura" />
      <TableHeaderItemComponent content="Nº de espaçonaves" />
      <TableHeaderItemComponent content="Filmes" />
    </tr>
  );
}
