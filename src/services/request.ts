import users from '../data/users.json'
import current from '../data/current.json'

export type User = {
    name: string,
    username: string,
}

export type UserList = Array<User & { password: string }>

export async function login (username: string, password: string): Promise<User | undefined> {
  return users.find(user => user.password === password && user.username === username)
}
export async function register (name: string, username: string, password: string): Promise<boolean> {
  // return users.find(user => user.password === password && user.username === username)
  const userExits = users.find(user => user.password === password && user.username === username)
  if (userExits) return false
  const userObj = {
    name,
    username,
    password
  }
  users.push(userObj)
  return true
}
export async function getUser (): Promise<User> {
  const user: User = current
  return user
}
