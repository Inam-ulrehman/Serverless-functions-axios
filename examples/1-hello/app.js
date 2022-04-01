const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    const data = await axios.get('/api/1-hello')
    console.log(data.data)
    result.textContent = data.data
  } catch (error) {
    console.log(error.response)
  }
}

fetchData()
