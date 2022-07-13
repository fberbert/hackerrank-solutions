/*
 * Hackerrank Javascript Certification Basic #1 - Country Codes
 * NodeJS environment
 */

// https to make a request
const https = require('https')

// this function will return a Promise to fetch a URL
const fetch = (url) =>  
  new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''
      res.on('data', (chunk) => data += chunk)
      res.on('end', () => resolve(data))
    })
  })

// given a countryCode, async function to return the countryName
async function getCountryName(countryCode) {
  let page = 1;
  let countryName = null;

  while (countryName === null) {
    let url = `https://jsonmock.hackerrank.com/api/countries?page=${page}`
    const response = await fetch(url)
    const responseBody = JSON.parse(response)

    // foreach country data in current page...
    responseBody.data.forEach((c) => {
      if (c.alpha2Code === countryCode) 
        countryName = c.name
    })

    // avoid loop, no more than total_pages
    // increment page count as well
    if (responseBody.total_pages === page++)
      break
  }

  if (countryName === null) {
    throw new Error("Country code not found.")
  }
  return countryName
}

getCountryName('BR').then(r => console.log(r))
