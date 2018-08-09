// Write your code in this file!

function scuberGreetingForFeet (ride) {
  if (ride <= 400) {
    result = 'This one is on me!'
  } 
    else if (ride > 2000) {
      result = 'I will gladly take your thirty bucks.'
    }
    
    else {
    result = 'This one is on you!';
  }
  return result
}

scuberGreetingForFeet (199);