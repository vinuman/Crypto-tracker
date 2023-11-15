export const addToWatchList = (id) => {
  let allItems = localStorage.getItem("watchlist");
  if (allItems) {
    let arr = JSON.parse(allItems);
    if (!arr.includes(id)) {
      arr.push(id);
      localStorage.setItem("watchlist", JSON.stringify(arr));
    }
  } else {
    let arr = JSON.stringify([id]);
    localStorage.setItem("watchlist", arr);
  }
};
