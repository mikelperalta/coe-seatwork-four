var coe = function(sw2){

for(var i = 1; i < sw2; i++){
	if (i % 3 === 0){
		console.log("Computer");
	}
	else if (i % 5 === 0){
		console.log("Engineering");
	}
	else if ((i % 3 === 0) && (i % 5 ===  0))
	{
		console.log("ComputerEngineering");
	}
	else{
		console.log(i);
	}
}
  
};
coe(101);