var countChar = "k"
   ,str = "kakkerlak";
for(var i=count=0; i<str.length; count+=+(countChar===str[i++]));
console.log(count);
