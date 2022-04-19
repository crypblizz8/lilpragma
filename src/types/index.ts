export interface Quest {
    id: string
    name: string
    version: number
    order: number
    description: string
    website?: string
    twitter?: string
    available?: boolean
    img?: string
    emoji?: string
    tasks: Array<Task>
    reward?: 'none' | 'self-attest' | 'poap'
    // params: { [key: string]: string | boolean | number | Array<string> }
}

export interface Task {
    name: string
    description: string
    points: number
    verifier: Verifier | Array<Verifier>
    // params: { [key: string]: string | boolean | number | Array<string> }
}

export interface Verifier {
    id: string
    chainId?: number
    params: { [key: string]: string | boolean | number | Array<string> }
    verify(task: Task, address: string): Promise<boolean | number>
}

export interface ApiResponseData<T> {
    code: number
    message: string
    data?: T
}

export interface ApiResponse {
    success: boolean
    message: string
}