export function check(rule: any, value:any, callback:Function){
  if(value!==0&&!value) return callback('不能为空')
}