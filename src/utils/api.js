const apiKey = '886d3296-e688-4436-af98-f5eaa1f980f6'

export const getCatBreeds = async (currentPage, limit = 5) => {
  if (typeof currentPage !== 'number') {
    throw new Error('getCatBreeds 함수의 currentPage 파라미터는 number 이어야 합니다.')
  }
  if (typeof limit !== 'number') {
    throw new Error('getCatBreeds 함수의 limit 파라미터는 number 이어야 합니다.')
  }

  const response = await fetch(`https://api.thecatapi.com/v1/breeds?page=${currentPage}&limit=${limit}`, {
    headers: {
      'x-api-key': apiKey,
    },
  })
  const breeds = await response.json()

  return breeds
}
