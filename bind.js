Function.prototype.myBind=function(context,...args){
   let org=this;
   return function(...arg2){
    return org.call(context,...args,...arg2)
   }
} 

