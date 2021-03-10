import RepositoryItem from './RepositoryItem';

const repository = {
  name: 'foo',
  description: 'Lorem Ipsum',
  link: 'http://github.com/unform/unform'
}
function RepositoryList() {
  return (
    <>
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
       <RepositoryItem repository={repository} />
       <RepositoryItem repository={repository} />
       <RepositoryItem repository={repository} />
       <RepositoryItem repository={repository} />
       <RepositoryItem repository={repository} />
      </ul>

    </section>
    </>
  );
}

export default RepositoryList;