export default length => {
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let str = '';
  for (let i = 0; i < length; i++) {
    const randomChar = chars.at(Math.floor(Math.random() * chars.length));
    str += Math.random() > 0.5 ? randomChar.toUpperCase() : randomChar;
  }
  return str;
};
