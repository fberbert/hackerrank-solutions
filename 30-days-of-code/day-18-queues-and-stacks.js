function Solution() {
  this.stack = []
  this.queue = []
  
  this.pushCharacter = function(c) {
    this.stack.push(c)
  }
  
  this.enqueueCharacter = function(c) {
    this.queue.push(c)
  }
  
  this.popCharacter = function() {
    const c = this.stack.pop()
    return c
  }
  
  this.dequeueCharacter = function() {
    const c = this.queue.shift()
    return c
  }
}
