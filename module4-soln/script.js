(function () {
  var names= ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
   for (var j = 0 ; j <10; j++) 
  {
    var ch=names[j].charAt(0)
  var firstLetter =ch.toLowerCase();

  
   if (firstLetter=='j') {
    byeSpeaker.speak(names[j]);
  } 
  else {
    helloSpeaker.speak(names[j]);
  } 
  }
}
)();
