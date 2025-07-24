// ~/content/remark/class-shorthand.ts
import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'
import type { Node } from 'unist'

interface DirectiveNode extends Node {
  name: string
  attributes?: Record<string, string | boolean>
  children?: Node[]
}

const classShorthandPlugin: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node: Node) => {
      const directive = node as DirectiveNode
      console.log(directive.attributes || 'ff')
      if (!directive.attributes) return

      for (const key of Object.keys(directive.attributes)) {
        if (key.startsWith('.')) {
          const className = key.slice(1)
          directive.attributes.class = (directive.attributes.class || '') + ' ' + className
          delete directive.attributes[key]
        }
      }
    })
  }
}

export default classShorthandPlugin // ✅ Bien un export `default`
