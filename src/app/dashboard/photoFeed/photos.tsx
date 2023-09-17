const fetchData = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

  return [
    {
      id: 1,
      title: 'photo 1',
    },
    {
      id: 2,
      title: 'photo 2',
    },
    {
      id: 3,
      title: 'photo 3',
    },
  ]
}

export const Photos = async () => {
  const response = await fetchData()
  console.log({ response })

  return (
    <ul>
      {response.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
  )
}
