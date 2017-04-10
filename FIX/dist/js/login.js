var $$ = Dom7;

var user = 'admin';
var password = 'admin';
var request = '{"jsonrpc": "2.0", "method": "getAllProjects", "id": 1}';
var auth = btoa(user + ':' + password);
    var config = {
      headers: {
        'Authorization': + 'Basic ' + auth
      }
    };
console.log(auth);
$$.post('http://93.188.164.240/jsonrpc.php', request, auth);
