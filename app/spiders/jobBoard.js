const positionSpider = require ('./positionSpider')
async function jobBoard (page) {
    const status = await page.open('https://www.workingnomads.co/jobs?category=development')
    // console.log(status)
    const content = await page.property('content')
    const positions = await page.evaluate(function() {
      function parsePosition (positionNode) {
        var anchor = positionNode.querySelectorAll('.media-body h4 a')[1]
        return {
          title: anchor.innerText,
          link: 'https://www.workingnomads.co/' + anchor.getAttribute('href')
        }
      }
      var positionData = []
      var allPositions = document.getElementById('jobs').querySelectorAll('.job.post')
      for (var i = 0; i < allPositions.length; i++) {
        positionData.push(parsePosition(allPositions[i]))
      }
      return positionData
    })
    const ret =[]
    for (let position of positions){
      ret.push(await positionSpider(page, position.link))
    }
    return ret
}
module.exports = jobBoard
