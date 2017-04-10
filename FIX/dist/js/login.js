
var $$ = Dom7;

var username=btoa('admin');
var password=btoa('admin');
console.log('after btoa = ' +username);

$$.post('http://93.188.164.240/jsonrpc.php',{username:username,password:password},function(data){
	console.log('data' +  data );
})