/**
 * Creates array of [key, value] pairs from window session array string
 *
 * @param   {WindowSessionStorage}  session
 *
 * @return  {Pair[]}
 */
const toMapFromSession = session => {
  return new Array(session.length)
    .fill(null)
    .map((_, key) => [
      session.key(key),
      JSON.parse(session.getItem(session.key(key))),
    ]);
};

/**
 * Return valid app state from state object & window session
 *
 * @param   {StateObject}  initialState
 * @param   {WindowSessionStorage}  session
 *
 * @return  {State}
 */
export const initializeState = (initialState, session) => {
  const pairs = [
    ...Object.entries(initialState),
    ...(session && toMapFromSession(session)),
  ];

  return new Map(pairs);
};
