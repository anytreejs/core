interface INode {
   _hashkey? : string;
   parent? : INode
   key : string;
   value?: any;
   chilrens : INode[];

   
   // methods
   addChildren(node: INode,index?:number) : void
   remove() : void
   removeRecurive() : void
   removeDeep(level?: number) : void
   
   //setter 
   setParent(parent:INode) : void
   setKey(key:string):void
   setValue(value:any):void
   
   // getter
   get nodeDeep() : number

}