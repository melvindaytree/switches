var answer = prompt("What is your name?");

switch(answer) {
	case "Joel":
  	color = 'green';
    changeBackground(color)
    break;
    
    case "Tim":
  	color = 'red';
    changeBackground(color)
    break;
    
    case "Sam":
  	color = 'orange';
    changeBackground(color)
    break;
    
    default:
    color = 'blue';
    changeBackground(color)
    break;
};

function changeBackground(color) {
   document.querySelector("body").className = color;
}
