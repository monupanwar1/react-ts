import useFetch from "./CustomHooks";

const Home = () => {
  const[data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className="bg-white rounded-md border-2 p-4">
      {data ? (
        data.map((item) => (
          // Use a unique key for each <ul> element
          <ul key={item.id} className="mb-2">
            <li>ID: {item.id}</li>
            <li>Title: {item.title}</li>
          </ul>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
