const robots = {
  input: require('./robots/input.js'),
  text: require('./robots/text.js')
}

async function start() {
  robots.input()
  await robots.text()
 // await robots.image()
  //await robots.video()
  //await robots.youtube()
}

start()
