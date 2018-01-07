function theBeatlesPlay(musicians, instruments){
  result = [];
  for(var i=0; i<musicians.length; i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}