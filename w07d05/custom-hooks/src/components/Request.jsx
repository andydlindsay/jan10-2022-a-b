import useRequest from "../hooks/useRequest";

const Request = () => {
  const url = 'http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';
  const {data, loading} = useRequest(url);

  return (
    <div>
      <h2>Request Component</h2>

      { loading && <p>Loading...</p> }
      { data && <p>Data retrieved: {data.length}</p> }
    </div>
  );
};

export default Request;
