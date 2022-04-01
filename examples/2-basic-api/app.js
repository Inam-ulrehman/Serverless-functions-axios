const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/2-basic-Api')
    const results = data
      .map((item) => {
        const {
          id,
          name,
          image: { url },
          price,
        } = item
        return `<article class="product">
      <img
        src="${url}"
        alt="utopia sofa"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">${price}</h5>
      </div>
    </article>`
      })
      .join(' ')

    result.innerHTML = `${results}`
  } catch (error) {
    console.log(error.response)
  }
}

fetchData()

// /api/2-basic-Api
