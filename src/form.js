/**
 * return array of [key, value] Pairs from HTMLFormELement values
 *
 * @param   {HTMLFormElement}  form
 *
 * @return  {Pair[]}
 */
export const getValues = form => {
  let values = [];
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    values.push([key, value]);
  }
  return values;
};
