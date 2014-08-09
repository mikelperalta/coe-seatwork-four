String.prototype.capitalize=function(all){
    if(all){
       return this.split(' ').map(function(e){return e.capitalize();}).join(' ');    
    }else{
         return this.charAt(0).toUpperCase() + this.slice(1);
    } 
}
"bahay kubo kahit munti".capitalize(true);