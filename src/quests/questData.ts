import fs from 'fs'
import { join } from 'path'
import { Quest } from '../types'

const baseFolder = 'src/quests'

export function getQuestNames(): any {
    const dir = join(process.cwd(), baseFolder)
    const dirs = fs.readdirSync(dir, { withFileTypes: true })
        .filter(i => i.isFile() && i.name.endsWith('.json'))
        .map(i => i.name.replace('.json', ''))
    return dirs
}

export function getJourneys(): any {
    const dir = join(process.cwd(), baseFolder)
    const files = fs.readdirSync(dir, { withFileTypes: true })
        .filter(i => i.isFile() && i.name.endsWith('.json'))

    const items = files.map(i => {
        const fullPath = join(dir, i.name)
        const content = fs.readFileSync(fullPath, 'utf8')
        if (!content) {
            console.log('File has no content..', i.name)
        }
        
        if (content) {
            let journey = JSON.parse(content) as Quest 
            return {
                ...journey, 
                id: i.name.replace('.json', '')
            }
        }
    }).sort(function (a, b) {
        return a.order - b.order
    }) as any
    
    return items
}