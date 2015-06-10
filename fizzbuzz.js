var number = 100;

for (var i = 1; i <= number; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
    var para = document.createElement("p");
	var node = document.createTextNode("FizzBuzz");
	para.appendChild(node);
	para.className = "fizzBuzz";
	var element = document.getElementById("Main");
	element.appendChild(para);    
    }

    else if (i % 5 === 0) {
    var para = document.createElement("p");
	var node = document.createTextNode("Buzz");
	para.appendChild(node);
	para.className = "buzz";
	var element = document.getElementById("Main");
	element.appendChild(para);
    }

    else if (i % 3 === 0) {
	var para = document.createElement("p");
	var node = document.createTextNode("Fizz");
	para.appendChild(node);
	para.className = "fizz";
	var element = document.getElementById("Main");
	element.appendChild(para);
    }

    else {
    var para = document.createElement("p");
	var node = document.createTextNode(i);
	para.appendChild(node);
	para.className = "i";
	var element = document.getElementById("Main");
	element.appendChild(para);
    }
}