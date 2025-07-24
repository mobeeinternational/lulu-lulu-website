import { defineTransformer } from '@nuxt/content'

export default defineTransformer({
  name: 'dot-class-fix',
  extensions: ['.md'],
  transform(file) {
    console.log(file)
    if (typeof file.body !== 'string') return file

    const newBody = file.body.replace(
      /::([a-zA-Z0-9_-]+)\{\.([a-zA-Z0-9-_\s:\/!]+)\}/g,
      (_, component, classes) => {
        return `::${component}{class="${classes.trim()}"}`
      }
    )

    return {
      ...file,
      body: newBody
    }
  }
})
