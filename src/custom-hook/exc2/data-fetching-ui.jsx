import useFetchHook from "./data-fetching-hook";

const FetchMyInfo = () => {
  let fetchingHook = useFetchHook("https://api.github.com/users/mojombo");
  return (
    <div>
      <button
        onClick={() => {
          fetchingHook.fetchingData();
        }}
      >
        Fetch now
      </button>
      {fetchingHook.data && <p>{fetchingHook.data.name}</p>}
      {fetchingHook.isloading && <p>Loading</p>}
      {fetchingHook.error && <p>Error fetching data</p>}
    </div>
  );
};

export default FetchMyInfo;
