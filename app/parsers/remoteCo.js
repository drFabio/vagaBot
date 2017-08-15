function evaluateJobBoard (){
  function parsePosition(actualPosition){
    return{
      link: actualPosition.getAttribute('href')
    }
  }
  var positionData = []
  var allPositions = document.querySelectorAll('.job_listing a')
  for (var i=0; i<allPositions.length; i++){
    positionData.push(parsePosition(allPositions[i]))
  }
  return positionData
}
function evaluatePosition (link){
  var title = document.querySelector('.title_sm').innerText
  var description = document.querySelector('.job_description').innerText
  var company = document.querySelector('.co_name').innerText
  return{
    title: title,
    description : description,
    company: company,
    link:link
  }
}
module.exports ={
  link:'https://remote.co/remote-jobs/developer/',
  evaluateJobBoard,
  evaluatePosition
}
