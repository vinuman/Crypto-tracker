import axios from "axios";

export const get100InrCoins = async () => {
  try {
    const API_URL = "https://api.coingecko.com/api/v3/coins";

    const response = await axios.get(
      `${API_URL}/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    return { error: error.message };
  }
};
