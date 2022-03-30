export interface Quest {
    id: string
    title?: string
    description: string
    img: string
    website?: string
    twitter?: string
    tasks?: Array<Task>
}

export interface Task {
    name: string
    description: string
    points: number
    chainId?: number
    verifier: string
}

export interface Verifier {
    verify(task: Task, address: string): Promise<boolean | number>
}
