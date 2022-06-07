import fishPondAPI from "../Apis/fish_pond";

const HomePage = () => {
  const data = fishPondAPI
    .getAll()
    .then((result) => {
      // console.log(result?.data);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(data);

  return <div>HomePage</div>;
};

export default HomePage;
