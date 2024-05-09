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

    const qouteElement = document.createElement('blockquote');
    const nextButtonElement = document.createElement('button');

    const renderQoute = (data) => {
        qouteElement.innerHTML = `<q>${data.quote}</q><br>
                                  <cite>${data.author}</cite>`;
        nextButtonElement.innerText = 'Next Quote';
        element.replaceChildren(qouteElement, nextButtonElement);
    }

    fetchQuote().
        then(renderQoute);

    //Listener en el boton nextQOute
    nextButtonElement.addEventListener('click', async () => {
        element.innerHTML = 'Loading...';
        await fetchQuote().then(renderQoute);
    });

}