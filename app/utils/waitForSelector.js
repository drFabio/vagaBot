function waitForSelector (page, selector, tryInterval = 100, maxTries = 10) {
  function checkIfSelectorExists (selector) {
    if (Array.isArray(selector)) {
      var selectorLength = selector.length
      for (var i = 0; i < selectorLength; i++) {
        if (document.querySelectorAll(selector[i]).length === 0) {
          return false
        }
      }
      return true
    }
    return document.querySelectorAll(selector).length >= 1
  }
  return new Promise(function(resolve, reject) {
      let tryCount = 0
      function wait() {
          console.log('Ensuring selector')
          page.evaluate(checkIfSelectorExists, selector)
            .then(function(value) {
              if (value === true) {
                  console.log('selector found')
                  resolve()
              } else {
                  tryCount++
                  if (tryCount === maxTries) {
                    reject(new Error('Max tries reached'))
                    return
                  }
                  console.log('selector not found, retrying')
                  setTimeout(wait, tryInterval)
              }
          }).catch(function(e) {
              reject(e)
          })
      }
      wait()
  })
}
module.exports = waitForSelector
