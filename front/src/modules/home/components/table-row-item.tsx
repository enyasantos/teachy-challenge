interface Props {
  content: string;
}
export default function TableRowItemComponent({ content }: Props) {
  return <th className="font-normal py-2 px-3">{content}</th>;
}
