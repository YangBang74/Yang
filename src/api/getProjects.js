import axios from 'axios'

export const getProjects = async () => {
  try {
    const response = await axios.get(
      'https://yang-portfolie-default-rtdb.europe-west1.firebasedatabase.app/partfolio.json',
    )
    if (response.data) {
      return Object.entries(response.data).map(([key, val]) => ({
        key,
        ...val,
      }))
    }

    return []
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
    return []
  }
}
