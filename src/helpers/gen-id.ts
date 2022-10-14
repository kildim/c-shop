function genId () {
  let counter = 0;
  return (() => (counter += 1));
}

export default genId;
