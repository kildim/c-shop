function generateId () {
  let counter = 0;
  return (() => (counter += 1));
}

export default generateId;
