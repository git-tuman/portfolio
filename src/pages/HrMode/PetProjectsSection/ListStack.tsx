const ListStack = ({ value }: { value: string }) => {
  const list = value.split(", ");

  return (
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ListStack;
