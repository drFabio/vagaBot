const waitForSelector = require('../utils/waitForSelector')
async function positionSpider (page, positionData,context){
  console.log(positionData.link)
  const status = await page.open(positionData.link)
  const content = await page.property('content')
  if (context.awaitPosition) {
    await waitForSelector(page , context.awaitPosition)
  }
  return await page.evaluate(context.evaluatePosition, positionData)
}
module.exports = positionSpider
