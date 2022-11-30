export const GET_COIN ="GET_COIN";
export const SINGLE_COIN="SINGLE_COIN";

const API_URL = 'https://mocki.io/v1/48419bdb-1d76-45a1-89cb-3ac3fcc7f6ca';
const API = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export const getCoin = () => {
    try {
        return async dispatch => {
            const result = await fetch(API, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_COIN ,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }

}
export const singleCoin = (id) => {
    try {
        return async dispatch => {
            const result = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type:SINGLE_COIN,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }

}

//https://api.coingecko.com/api/v3/coins/ethereum