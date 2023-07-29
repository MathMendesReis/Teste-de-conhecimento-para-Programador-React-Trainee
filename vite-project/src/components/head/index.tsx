interface headProps {
  title?:string,
  description?:string
}
export function Head({title, description =''}:headProps) {
  document.title = `Discografia | ${title}`
  document.querySelector(`[name=descripiton]`)?.setAttribute('content',description)
  return null
}
