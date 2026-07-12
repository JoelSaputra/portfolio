
const playSound = (path) => {
  const audio = new Audio(path)
  audio.play()
}

export default playSound