const phantom = require('phantom')
const jobBoardSpider = require('./spiders/jobBoard')
const fs = require('fs')
const promisify = require('util').promisify
const saveFile = promisify(fs.writeFile)
try {
  (async function () {
    const instance = await phantom.create()
    const page = await instance.createPage()
    const positions = await jobBoardSpider(page)
    console.log(positions);
    await instance.exit()
    const positionsJson = JSON.stringify(positions, null, 2)
    saveFile('./workingNomadsPositions.json', positionsJson)
  }())
} catch(err) {
  console.log(err)
}
