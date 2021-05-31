// 单链表
export function List () {
  // 节点
  let Node = function (element: any) {
    this.element = element
    this.next = null
  }
  // 初始头节点为 null
  let head: any = null

  // 链表长度
  let length = 0
  // 操作
  this.getList = function() {return head}
  this.search = function(list: any, element: any) {
    let p = head
    if (!p) return false
    while(p) {
      if (p.element === element) return true
      p = p.next
    }
    return false
  }
  this.append = function(element: any) {
    // @ts-ignore
    let node = new Node(element),
      p = head
    if (!head){
      head = node
    } else {
      while (p.next) {
        p = p.next
      }
      p.next = node
    }
    length += 1
  }
  this.insert = function(position: any, element: any) {}
  this.remove = function(element: any){
    let p = head, prev = head
    if(!head) return
    while(p) {
      if(p.element === element) {
        p = p.next
        prev.next = p
      } else {
        prev = p
        p = p.next
      }
    }
  }
  this.isEmpty = function(){}
  this.size = function(){}
}

// 双链表
export function DoublyLinkedList() {
  let Node = function(element) {
    this.element = element
    // 前驱指针
    this.prev = null
    // 后继指针
    this.next = null
  }
  // 初始头节点为 null
  let head = null
  // 新增尾节点
  let tail = null

  // 链表长度
  let length = 0
  // 操作
  this.search = function(element) {}
  this.insert = function(position, element) {
    // 创建插入节点
    let node = new Node(element)
    if (position >= 0 && position < length) {
      let prev = head,
        curr = head,
        index = 0
      if(position === 0) {
        // 在第一个位置添加
        if(!head) { // 注意这里与单链表不同
          head = node
          tail = node
        } else {
          // 双向
          node.next = head
          head.prev = node
          // head 指向新的头节点
          head = node
        }
      } else if(position === length) {
        // 插入到尾节点
        curr = tail
        curr.next = node
        node.prev = curr
        // tail 指向新的尾节点
        tail = node
      } else {
        while(index < position) {
          prev = curr
          curr = curr.next
          index ++
        }
        // 插入到 prev 后，curr 前
        prev.next = node
        node.next = curr
        curr.prev = node
        node.prev = prev
      }
      length += 1
      return true
    } else {
      return false
    }
  }
  this.removeAt = function(position){
    if (position >= 0 && position < length && length > 0) {
      let prev = head,
        curr = head,
        index = 0
      if(position === 0) {
        // 移除头节点
        if(length === 1) { // 仅有一个节点
          head = null
          tail = null
        } else {
          head = head.next
          head.prev = null
        }
      } else if(position === length-1) {
        // 移除尾节点
        curr = tail
        tail = curr.prev
        tail.next = null
      } else {
        while(index < position) {
          prev = curr
          curr = curr.next
          index ++
        }
        // 移除curr
        prev.next = curr.next
        curr.next.prev = prev
      }
      length -= 1
      return curr.element
    } else {
      return null
    }
  }
  this.isEmpty = function(){ return length === 0 }
  this.size = function(){ return length }
}
