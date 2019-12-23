//链表的设计

//Node类
class Node
{
    public ele:any
    public next:any
    constructor(ele:any)
    {
      this.ele=ele
      this.next=null
    }
}

//LinkedList类
class Llist
{
    public head:any
    constructor(){
        this.head=new Node('head')
    }
    //
    find(item):any
    {
     let currNode:any=this.head
     while(currNode.ele!=item)
     {
         currNode
     }
    }
   
}

export {}