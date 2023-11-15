export const alreadyAddedToWatchList = (id) => {
  const watchList = localStorage.getItem("watchlist");
  if (watchList) {
    let arr = JSON.parse(watchList);
    if (arr.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
