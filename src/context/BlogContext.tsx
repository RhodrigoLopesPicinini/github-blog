import { createContext, useState, useEffect, ReactNode } from 'react'
import { issuesApi, usersApi } from '../lib/axios'

interface IssueProps {
  number: number
  url: string
  title: string
  user: {
    login: string
    url: string
  }
  body: string
  created_at: string
}

interface OwnerProps {
  login: string
  url: string
  followers: number
  company?: string
}

type BlogContextType = {
  issues: IssueProps[]
  owner: OwnerProps
}
interface BlogContextProviderProps {
  children: ReactNode
}

// interface UserProps extends OwnerProps {}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [issues, setIssues] = useState<IssueProps[]>([])
  const [owner, setOwner] = useState<OwnerProps>({} as OwnerProps)
  //   const [user, setUser] = useState<UserProps>({} as UserProps)

  useEffect(() => {
    async function fetchData() {
      try {
        const issuesList = await issuesApi.get('issues')
        const owner = await usersApi.get('rocketseat-education')

        setIssues(issuesList.data)
        setOwner(owner.data)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }

    fetchData()
  }, [])

  return (
    <BlogContext.Provider value={{ issues, owner }}>
      {children}
    </BlogContext.Provider>
  )
}
