const axios = require('axios')
// import axios from 'axios'

async function fetchData() {
  const { data } = await axios.get('http://dummy.restapiexample.com/api/v1/employee/1')
  return data
}

module.exports = fetchData
