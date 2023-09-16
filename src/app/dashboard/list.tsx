'use client'

const fetchData = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

  return [
    {
      id: 13,
      title: 'Let It Be',
      year: 1970,
    },
    {
      id: 12,
      title: 'Abbey Road',
      year: 1969,
    },
    {
      id: 11,
      title: 'Yellow Submarine',
      year: 1969,
    },
  ]
}

export const List = async () => {
  const response = await fetchData()

  return (
    <ul>
      {response.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
  )
}
