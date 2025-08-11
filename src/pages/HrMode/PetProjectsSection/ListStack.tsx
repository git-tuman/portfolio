const ListStack = ({ value }: { value: string }) => {
  const list = value.split(", ");

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListStack;
