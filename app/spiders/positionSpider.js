async function positionSpider (page, link){
  const status = await page.open(link)
  const content = await page.property('content')
  const data = await page.evaluate(function() {
    var title = document.querySelector('.job-heading').innerText
    var description = document.querySelector('.job-description').innerText
    var tags = []
    var tagsElements = document.querySelectorAll('.parameters i.fa-tags+a')
    for (var i=0; i<tagsElements.length; i++){
      tags.push(tagsElements[i].innerText)
    }
    return{
      title: title,
      description: description,
      tags: tags,
    }
  })
  data.link = link
  return data
}
module.exports = positionSpider
