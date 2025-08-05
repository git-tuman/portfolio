const Link = ({ link, name }: { link: string; name: string }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
};

export default Link;
