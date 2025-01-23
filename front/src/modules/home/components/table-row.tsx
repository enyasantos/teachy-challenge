import { heightTransform } from "../utils/height-transform";
import TableRowItem from "./table-row-item";

interface Props {
  name: string;
  height: string;
  starshipsCount: number;
  films: string[];
}

export default function TableRow({
  name,
  height,
  starshipsCount,
  films,
}: Props) {
  return (
    <tr className="border-b border-x">
      <TableRowItem content={name} />
      <TableRowItem content={heightTransform(height)} />
      <TableRowItem content={starshipsCount.toString()} />
      <TableRowItem content={films.join(", ")} />
    </tr>
  );
}
