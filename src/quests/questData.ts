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
    }).filter(i => !!i) as any
    
    return items
}


// export function getQuestNames(): Array<string> {
//   const dir = join(process.cwd(), baseFolder)
//   const dirs = fs.readdirSync(dir, { withFileTypes: true })
//         .filter(i => i.isFile() && i.name.endsWith('.json'))
//         .map(i => i.name.replace('.json', ''))

//   return dirs
  
//   const fileNames = fs.readdirSync(postsDirectory)
//   const allPostsData = fileNames.map(fileName => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '')

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data
//     }
//   }
// }

// // const postsDirectory = path.join(process.cwd(), 'posts')

// // export function getSortedPostsData() {
// //   // Get file names under /posts
// //   const fileNames = fs.readdirSync(postsDirectory)
// //   const allPostsData = fileNames.map(fileName => {
// //     // Remove ".md" from file name to get id
// //     const id = fileName.replace(/\.md$/, '')

// //     // Read markdown file as string
// //     const fullPath = path.join(postsDirectory, fileName)
// //     const fileContents = fs.readFileSync(fullPath, 'utf8')

// //     // Use gray-matter to parse the post metadata section
// //     const matterResult = matter(fileContents)

// //     // Combine the data with the id
// //     return {
// //       id,
// //       ...matterResult.data
// //     }
// //   })
// //   // Sort posts by date
// //   return allPostsData.sort((a, b) => {
// //     if (a.date < b.date) {
// //       return 1
// //     } else {
// //       return -1
// //     }
// //   })
// // }
