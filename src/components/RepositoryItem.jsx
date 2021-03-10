
function RepositoryItem(props) {
  return (
    <>
       <li>
          <strong>{props.repository.name ?? 'default'}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.link}>
            Go to repository
          </a>
        </li>
    </>
  );
}

export default RepositoryItem;