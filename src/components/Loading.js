import "assets/scss/main.scss";

const Loading = ({ page }) => {
  return (
    <div className={`loadingPage ${page}`}>
      <p>LOADING...</p>
    </div>
  );
};

export default Loading;
