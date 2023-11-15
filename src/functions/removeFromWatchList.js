export const removeFromWatchList = (id) => {
  let watchList = localStorage.getItem("watchlist");
  if (watchList) {
    let arr = JSON.parse(watchList);
    if (arr.includes(id)) {
      localStorage.setItem(
        "watchlist",
        JSON.stringify(arr.filter((item) => item != id))
      );
    }
  }
};
