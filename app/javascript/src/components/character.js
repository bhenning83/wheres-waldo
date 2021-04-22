const character = (name, avatar) => {

  const getAvatar = () => avatar;

  const getName = () => name;

  return {getAvatar, getName}
}

module.exports = character