import TambleRowItemComponent from "./table-row-item";

export default function TambleRowComponent() {
  return (
    <tr className="border-b">
      <TambleRowItemComponent content="Luke Skywalker" />
      <TambleRowItemComponent content="1,72m" />
      <TambleRowItemComponent content="27" />
      <TambleRowItemComponent content="A New Hope, The Empire Strikes..." />
    </tr>
  );
}
