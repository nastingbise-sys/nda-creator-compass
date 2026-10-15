export type Task = {
  id: string
  title: string
  done: boolean
  due?: string
}

export type Note = {
  id: string
  text: string
  createdAt: string
}

export type Milestone = {
  id: string
  title: string
  done: boolean
}

export type PortfolioEntry = {
  id: string
  title: string
  description: string
  link?: string
  createdAt: string
}

export type Project = {
  id: string
  title: string
  description?: string
  tasks: Task[]
  notes: Note[]
  milestones: Milestone[]
  portfolio?: PortfolioEntry[]
  createdAt: string
}

export type AppData = {
  projects: Project[]
}
