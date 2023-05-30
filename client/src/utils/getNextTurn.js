export default function getNextTurn(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      count++;
    }
  }
  if(count % 2 == 0){
    return "O";
  }
  else{
    return "X";
  }

}