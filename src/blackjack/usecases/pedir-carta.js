
/**
 * Permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} Retorna la carta del deck
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'Deck inexistente.';
    }
    const carta = deck.pop();
    return carta;
}
