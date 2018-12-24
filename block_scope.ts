let variable ="Test";
console.log(variable)

function reset():void{
	console.log(variable);
  //Above line will print undefined as variable is declared outside the function.
  let variable:string='block scoping';
  console.log(variable);
  //Above line will print block scoping
}

reset();
console.log(variable);
//Above line would print 'Test'. The variable declared and assigned inside the function is out of scope here.
