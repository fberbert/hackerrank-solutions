class ParkingLot {
    constructor(slots) {
        // size of parking lot
        this.slots = slots
        this.slotsArr = new Array(slots).fill(null)
    }
    
    park(carid) {
      // parks cardid at unoccupied slot
      // with the lowest number and returns true
      // if all slots are occupied, returns false
      let isParked = false
      this.slotsArr.every((e, i) => {
        if ( e === null ) {
          // park the car if e (slot) is null
          this.slotsArr[i] = carid
          isParked = true
          return false
        }
        return true
      })
      return isParked
    }
    
    getSlots() {
      // returns an array of all the slots
      // where the ith element is the id of
      // of the car parked there or null if
      // the slot is unoccupied
      return this.slotsArr
    }
    
    remove(carid) {
      // frees the parking slot where the
      // car is and returns true
      if ( this.slotsArr.includes(carid) ) {
        this.slotsArr = this.slotsArr.map(e => (e === carid) ? null : e)
        return true
      }
      return false
    }
}

const obj = new ParkingLot(5)

obj.getSlots()
obj.park('carro1')
obj.park('carro2')
obj.getSlots()
obj.remove('carro1')
obj.getSlots()
obj.park('carro3')
obj.getSlots()
