function evaluateJobBoard() {
  function parsePosition (positionNode) {
    var anchor = positionNode.querySelectorAll('.media-body h4 a')[1]
    return {
      link: 'https://www.workingnomads.co' + anchor.getAttribute('href'),
      company: positionNode.querySelector('.company').innerText
    }
  }
  var positionData = []
  var allPositions = document.getElementById('jobs').querySelectorAll('.job.post')
  for (var i = 0; i < allPositions.length; i++) {
    positionData.push(parsePosition(allPositions[i]))
  }
  return positionData
}

function evaluatePosition(positionData) {
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
    link: positionData.link,
    company: positionData.company
  }
}
module.exports = {
  link:'https://www.workingnomads.co/jobs?category=development',
  evaluateJobBoard,
  evaluatePosition
}
