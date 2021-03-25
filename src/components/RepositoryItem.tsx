
interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}


function RepositoryItem(props: RepositoryItemProps) {
  return (
    <>
       <li>
          <strong>{props.repository.name ?? 'default'}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.html_url}>
            Go to repository
          </a>
        </li>
    </>
  );
}

export default RepositoryItem;