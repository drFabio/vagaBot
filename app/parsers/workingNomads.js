function evaluateJobBoard() {
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
}

function evaluatePosition(link) {
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
}
module.exports = {
  link:'https://www.workingnomads.co/jobs?category=development',
  evaluateJobBoard,
  evaluatePosition
}
