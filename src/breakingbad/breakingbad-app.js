const URL = 'https://api.breakingbadquotes.xyz/v1/quotes';

/**
 * @returns {Promise<any>}
 */
const fetchQuote = async () => {

    const res = await fetch(URL);
    const data = await res.json();

    console.log(data[0]);
    return data[0];
}

/**
 * 
 * @param {HTMLElement} element 
 */
export const BreakingBadApp = async (element) => {

    document.querySelector('#app-title').innerText = 'BreakingBad App';
    element.innerText = 'Loading.....';

    const quoteFetched = await fetchQuote();
    element.innerHTML = `<em>${quoteFetched.quote}<em>`;
}