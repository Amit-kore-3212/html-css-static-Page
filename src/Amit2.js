function copy(str){
   const result={}
   for(const char of str){
       if(result.hasOwnProperty(char)){
           result[char] = result[char] + 1
       }else {
           
           result[char] = 1
       }
   }
   return result
}
console.log(copy('dctdtcd'))