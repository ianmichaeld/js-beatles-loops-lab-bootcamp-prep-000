function theBeatlesPlay(musicians, instruments){
  var result = [];
  for(var i=0; i<musicians.length; i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(arr){
  var a = [...arr];
  for(var i=0; i<a.length; i++){
    a[i] += '!!!';
  }
 return a; 
}