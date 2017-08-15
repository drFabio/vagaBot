const positionSpider = require ('./positionSpider')
async function jobBoard (page,context) {
    const status = await page.open(context.link)
    // console.log(status)
    const content = await page.property('content')
    console.log(context.evaluateJobBoard);
    const positions = await page.evaluate(context.evaluateJobBoard)
    const ret =[]
    for (let position of positions){
      ret.push(await positionSpider(page, position.link,context))
    }
    return ret
}
module.exports = jobBoard
