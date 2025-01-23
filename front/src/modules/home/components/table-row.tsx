import { heightTransform } from "../utils/height-transform";
import TableRowItemComponent from "./table-row-item";

interface Props {
  name: string;
  height: string;
  starshipsCount: number;
  films: string[];
}

export default function TableRowComponent({
  name,
  height,
  starshipsCount,
  films,
}: Props) {
  return (
    <tr className="border-b border-x">
      <TableRowItemComponent content={name} />
      <TableRowItemComponent content={heightTransform(height)} />
      <TableRowItemComponent content={starshipsCount.toString()} />
      <TableRowItemComponent content={films.join(", ")} />
    </tr>
  );
}
