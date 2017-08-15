const positionSpider = require ('./positionSpider')
async function jobBoard (page,context) {
    const status = await page.open(context.link)
    const content = await page.property('content')
    const positions = await page.evaluate(context.evaluateJobBoard)
    const ret =[]
    for (let position of positions){
      ret.push(await positionSpider(page, position,context))
    }
    return ret
}
module.exports = jobBoard
