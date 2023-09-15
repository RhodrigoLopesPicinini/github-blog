import React, { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'

export default function Home() {
  const { issues, owner } = useContext(BlogContext)

  console.log(issues)

  return (
    <>
      <h1>Github Blog</h1>
      <div>{owner.login}</div>
      {issues.map((issue) => {
        return <div key={issue.number}>{issue.title}</div>
      })}
    </>
  )
}
