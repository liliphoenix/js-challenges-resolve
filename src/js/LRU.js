export const myLRU = () => {
  class LRU {
    constructor(size) {
      this.capacity = size
      this.cache = new Map()
    }
    get(key) {
      if (!this.cache.has(key)) {
        return -1
      }
      const value = this.cache.has(key)
      this.cache.delete(key)
      this.cache.set(key, value)
    }
    put(key, value) {
      if (this.cache.size >= this.capacity) {
        let key = this.cache.keys().next().value
        this.cache.delete(key)
      }
      if (this.cache.has(key)) {
        this.cache.delete(key)
      }
      this.cache.set(key, value)
    }
    toString() {
      console.log('capacity', this.capacity)
      console.table(this.cache)
    }
  }
  class ListNode {
    constructor(key, val) {
      this.key = key
      this.val = val
      this.next = null
      this.pre = null
    }
  }
  class ListNodeLink {
    constructor() {
      const head = new ListNode('head', 'head')
      const tail = new ListNode('tail', 'tail')
      head.next = tail
      tail.pre = head
      this.head = head
      this.tail = tail
    }

    deleteNode(node) {
      node.next.pre = node.pre
      node.pre.next = node.next
    }
    headAppend(node) {
      node.next = this.head.next
      node.pre = this.head
      this.head.next.pre = node
      this.head.next = node
    }
    popNode() {
      let node = this.tail.pre
      this.tail.pre = node.pre
      node.pre.next = node.next
      return node
    }
  }
  class LRUPlus {
    constructor(size) {
      this.capacity = size
      this.cache = new Map()
      this.nodeLink = new ListNodeLink()
    }

    get(key) {
      if (!this.cache.has(key)) {
        return -1
      }
      const node = this.cache.has(key)
      this.cache.delete(key)
      this.cache.set(key, node)
      this.nodeLink.deleteNode(node)
      this.nodeLink.headAppend(node)
    }
    put(key, value) {
      const node = new ListNode(key, value)
      if (this.cache.size >= this.capacity) {
        let key = this.cache.keys().next().value
        this.cache.delete(key)
        this.nodeLink.deleteNode(this.cache.get(key))
      }
      if (this.cache.has(key)) {
        this.cache.delete(key)
        this.nodeLink.deleteNode(this.cache.get(key))
      }
      this.nodeLink.headAppend(node)
      this.cache.set(key, node)
    }
    toString() {
      console.log('capacity', this.capacity)
      console.table(this.cache)
    }
  }
}
