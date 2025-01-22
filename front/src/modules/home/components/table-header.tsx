import TambleHeaderItemComponent from "./table-header-item";

export default function TambleHeaderComponent() {
  return (
    <tr className="border">
      <TambleHeaderItemComponent content="Nome" />
      <TambleHeaderItemComponent content="Altura" />
      <TambleHeaderItemComponent content="Nº de espaçonaves" />
      <TambleHeaderItemComponent content="Filmes" />
    </tr>
  );
}
