async function positionSpider (page, link,context){
  const status = await page.open(link)
  const content = await page.property('content')
  return await page.evaluate(context.evaluatePosition, link)
}
module.exports = positionSpider
