// (function(module) {
  const doctors = [
    { number: 20, actor: 'William Hartnell',      begin: 1963, end: 1966 },
    { number: 30, actor: 'Patrick Troughton',     begin: 1966, end: 1969 },
    { number: 3,  actor: 'Jon Pertwee',           begin: 1970, end: 1974 },
    { number: 4,  actor: 'Tom Baker',             begin: 1974, end: 1981 },
    { number: 5,  actor: 'Peter Davison',         begin: 1982, end: 1984 },
    { number: 6,  actor: 'Colin Baker',           begin: 1984, end: 1986 },
    { number: 7,  actor: 'Sylvester McCoy',       begin: 1987, end: 1989 },
    { number: 8,  actor: 'Paul McGann',           begin: 1996, end: 1996 },
    { number: 9,  actor: 'Christopher Eccleston', begin: 2005, end: 2005 },
    { number: 10, actor: 'David Tennant',         begin: 2005, end: 2010 },
    { number: 11, actor: 'Matt Smith',            begin: 2010, end: 2013 },
    { number: 12, actor: 'Peter Capaldi',         begin: 2013, end: 2013 }
  ];

  // `.filter()` => returns a new array of values based on conditional return statement
  doctors.filter(function(doctor) {
    return doctor.number > 10
  }) // => Returns a new array of doctors; only those with a `number` value greater than 10

  let filteredDocs = doctors.filter(function(doctor) {
    return doctor.number > 10
  }) // => No return value, given that its' been assigned to the `filteredDocs` var


  // `.map()` => returns a new array of values, which have been manipulated in some way
  doctors.map(function(doctor) {
    return {
      number: doctor.number,
      name: doctor.actor.split(' '),
      yearsPlayed: (doctor.end - doctor.begin) + 1
    }
  }) // => Returns a new array of doctors; each new object has a number, name, and yearsPlayed prop with pass-thru or new values

  // map and filter chain
  doctors.map(function(doctor) {
    return {
      number: doctor.number,
      name: doctor.actor.split(' '),
      yearsPlayed: (doctor.end - doctor.begin)
    }
  }).filter(function(doctor) { // Newly mapped array is returned from map, and filter is called on that new array
    return doctor.yearsPlayed < 5 // We're now filtering on the newly returned object properties.
  })


  // `.reduce()` => returns a new value; defaulting to integer values, but can also be a new array of values
  var arr = [34, 55, 3, 23, 12, 7, 99]

  arr.reduce(function(acc, current) {
    return acc + current
  })
  // returns => 233 (default integer is `0`)
  arr.reduce(function(acc, current) {
    return acc + current
  }, 1)
  // returns => 234 (because we changed the default integet to `1`)

  // Below passes an array as the accumulator.
  doctors.reduce(function(acc, curr) {
    if (curr.number > 10) {
      acc.push({
        number: curr.number,
        name: curr.actor.split(' '),
        yearsPlayed: (curr.end - curr.begin) + 1
      })
    }
    return acc
  }, []);
