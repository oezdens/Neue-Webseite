declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.webp'
declare module '*.svg'

// allow importing image URLs via `import img from './foo.jpg'`
// TypeScript will treat them as strings (the emitted URL after build)
declare const src: string
export default src
