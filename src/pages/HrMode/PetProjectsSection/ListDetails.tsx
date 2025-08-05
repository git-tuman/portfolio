const ListDetails = ({ value }: { value: string }) => {
  const list = value.split(". ");

  return (
    <ul>
      {list.map((item, index) => (
        <li className={index === list.length - 1 ? "accent" : ""}>
          {item}
          {index < list.length - 1 && "."}
        </li>
      ))}
    </ul>
  );
};

export default ListDetails;
