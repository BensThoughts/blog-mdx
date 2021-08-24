export default function TestComp(props: { data: {x: number, y: number}[] }) {
  return (
    <div>
      {JSON.stringify(props.data)}
    </div>
  );
}