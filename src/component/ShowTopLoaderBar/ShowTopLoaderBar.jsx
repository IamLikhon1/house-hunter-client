import LoadingBar from "react-top-loading-bar";

const ShowTopLoaderBar = ({progress,setProgress}) => {
    return (
        <LoadingBar
        color='#07332F'
        height={4}
        waitingTime={1000}
        loaderSpeed={800}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    );
};

export default ShowTopLoaderBar;