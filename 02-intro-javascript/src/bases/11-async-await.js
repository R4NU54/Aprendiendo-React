const getImage = async () => {
  const apiKey = 'oV89d80FS41Jbtz2Ux3IhIbLMoSsiN27'

  try {
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json()
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.error(error)
  }
}

getImage()
