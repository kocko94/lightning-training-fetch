const getPerson = async () => {
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  const result = await fetch('https://swapi.dev/api/people', {
    method: 'GET',
  })
  return result.json()
}

export { getPerson }
