import {remove} from "./helpers.js";

/**
 * create and return song card
 *
 * @param   {Song}  song
 * @param   {State}  state
 * @param   {number}  index
 * @param   {CallableFunction} setState
 *
 * @return  {HTMLDivElement}
 */
export const makeSongCard = (song, state, index, setState) => {
  const card = document.createElement("div");

  const number = document.createElement("p");
  number.innerText = `#${index + 1}`;
  card.appendChild(number);

  const cardItems = Object.entries(song).map(([key, val]) => {
    const item = document.createElement("p");
    item.innerHTML = `<strong>${key}: </strong> ${val}`;
    return item;
  });

  for (const cardItem of cardItems) {
    card.appendChild(cardItem);
  }

  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = "Delete";
  button.addEventListener("click", evt => {
    evt.preventDefault();
    setState("music", remove(song, state.get("music")), sessionStorage, state);
  });

  card.appendChild(button);

  return card;
};
