function CloneObject() {
  const obj = {
    print() {
      console.log('Console inside an object...')
    }
  }
  obj.print()
}
CloneObject() 
module.exports = CloneObject