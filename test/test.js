
const expect  = require('chai').expect
const LemonPy = require('..')

describe('#LemonPy', function() {

  it('str(): return the Object in String format.', function() {
    const strResult = new LemonPy(9600).str()
    expect(strResult).to.equal("9600")
  })

  it('upper(): return the Object in String format and uppercase.', function() {
    const upperResult = new LemonPy("this is Sparta").upper()
    expect(upperResult).to.equal("THIS IS SPARTA")  
  })

  it('lower(): return the Object in String format and lowercase.', function() {
    const lowerResult = new LemonPy("MY NAME is BARRY").lower()
    expect(lowerResult).to.equal("my name is barry")
  })

  it('count(argument): count and return the number of arguments is in this object.', function() {
    const countResult = new LemonPy("python is the light").count("th")
    expect(countResult).to.equal(2)
  })

  it('find(argument, positionInitial): return the position of argument, start by the positionInitial.', function() {
    const findResult = new LemonPy("Permission is hereby granted, free of charge").find("hereby")
    expect(findResult).to.equal(14)
  })

  it('len(): return the length of the Object.', function() {
    const lenResult = new LemonPy("Manhattan").len()
    expect(lenResult).to.equal(9)
  })
})
