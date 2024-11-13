'use client'

export const Error = ({ error, reset }) => {
  return (
    <section>
      <h1>Error on{error.message}</h1>
      <button onClick={() => reset()}>Reset</button>
    </section>
  )
}
export default Error
