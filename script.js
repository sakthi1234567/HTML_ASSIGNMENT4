/* var request = new XMLHttpRequest();
request.open('GET', 'http://api.countrylayer.com/v2/lang/tam?access_key=3d110db041e49fede5b4b03fea4a0a23');
request.send();
request.onload = function(){
    //console.log(this.response);
    var data = JSON.parse(this.response);
   //console.log('hello')
    //console.log(data);
    console.log("countries where TAMIL is spoken")
   for (i =0;i<data.length;i++) 
   {
       console.log(data[i].name);
       
   }
}  */


var request = new XMLHttpRequest();
request.open('GET', 'http://api.countrylayer.com/v2/currency/INR?access_key=3d110db041e49fede5b4b03fea4a0a23');
request.send();
request.onload = function(){
    //console.log(this.response);
    var data = JSON.parse(this.response);
   //console.log('hello')
    //console.log(data);
    console.log("countries where INR USING ")
   for (i =0;i<data.length;i++) 
   {
       console.log(data[i].name);
       
   }
}

