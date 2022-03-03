import {APP_ID} from "./src/constants.js";
import {getValues} from "./src/form.js";
import {append} from "./src/helpers.js";
import {makeSongCard} from "./src/music.js";
import {initializeState} from "./src/state.js";

/**
 * seems completely redundant, can probably just use window session as app state :/
 *
 */
const state = initializeState(
  {
    music: [],
  },
  sessionStorage,
);

/**
 * draw dynamic DOM elements from state
 *
 * @param   {State}  state
 * @param   {HTMLElement}  entry  DOM Element to draw within
 *
 * @return  void
 */
const render = (state, entry) => {
  const music = state.get("music");
  entry.innerHTML = null;
  for (const [key, song] of music.entries()) {
    const card = makeSongCard(song, state, key, set);
    entry.appendChild(card);
  }
};

/**
 * Set app state & window session value by key
 *
 * @param   {string}  key
 * @param   {any}  val
 * @param   {sessionStorage}  session
 * @param   {State}  state
 *
 * @return  void
 */
const set = (key, val, session, state) => {
  session.setItem(key, JSON.stringify(val));
  state.set(key, val);

  render(state, document.getElementById(APP_ID));
};

/**
 * @return void
 */
const main = () => {
  if (window) {
    window.addEventListener("load", () => {
      render(state, document.getElementById(APP_ID));
      const musicForm = document.getElementById("form");
      musicForm.addEventListener("submit", evt => {
        evt.preventDefault();
        const values = getValues(form);
        form.reset();

        let song = {};
        for (const v of values) {
          song[v[0]] = v[1];
        }

        set("music", append(song, state.get("music")), sessionStorage, state);
      });
    });
  }
};

main();
