import axios from 'axios'

export const issuesApi = axios.create({
  baseURL:
    'https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge',
})

export const usersApi = axios.create({
  baseURL: 'https://api.github.com/users',
})
