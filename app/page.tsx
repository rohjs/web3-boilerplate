import axios from 'lib/axios'

async function getResponse() {
  const res = await axios.get('/version')

  return res?.data
}

export default async function Home() {
  const res = await getResponse()

  return (
    <main>
      Main
      <br />
      {JSON.stringify(res, null, 2)}
    </main>
  )
}
