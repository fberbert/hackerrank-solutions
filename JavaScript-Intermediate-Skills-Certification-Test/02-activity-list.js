function Activity(amount) {
  this.amount = amount
}

Activity.prototype.setAmount = function(value) {
  if ( value <= 0 ) return false
  else {
    this.amount = value
    return true
  }
}
Activity.prototype.getAmount = function() { return this.amount }

function Payment(amount, receiver) {
  Activity.call(this, amount)
  this.receiver = receiver
}

Payment.prototype = new Activity()
Payment.prototype.constructor = Payment
Payment.prototype.setReceiver = function(receiver) { return this.receiver = receiver }
Payment.prototype.getReceiver = function() { return this.receiver }

function Refund(amount, sender) {
  Activity.call(this, amount)
  this.sender = sender
}

Refund.prototype = new Activity()
Refund.prototype.constructor = Refund
Refund.prototype.setSender = function(sender) { return this.sender = sender }
Refund.prototype.getSender = function() { return this.sender }
