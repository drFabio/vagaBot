async function positionSpider (page, link){
  const status = await page.open(link)
  const content = await page.property('content')
  return await page.evaluate(function(link) {
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
      link: link
    }
  }, link)
}
module.exports = positionSpider
