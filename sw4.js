var countBs = "B"
   ,str = "BBC";
for(var i=count=0; i<str.length; count+=+(countBs===str[i++]));
console.log(count);
