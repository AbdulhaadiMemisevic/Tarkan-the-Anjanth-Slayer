function _encryption(){

var encrypted_content= document.getElementById("newcontent"); 	

var _message = document.getElementById("encryption").value;

var _content = String(_message);                                

var replace1_content = _content.replace(/a/g,"w");              

var replace2_content = replace1_content.replace(/m/g, "k")     

var inner_content = replace2_content.split("");                 


var reverse_inner_content = inner_content.reverse("");          

var connect_content = reverse_inner_content.join("");			




encrypted_content.innerHTML = connect_content;					 


}

function _decryption(){

var decrypted_content= document.getElementById("oldcontent");

var _message = document.getElementById("decryption").value;

var _content = String(_message);                               

var replace1_content = _content.replace(/w/g,"a");				 

var replace2_content = replace1_content.replace(/k/g, "m")		

var inner_content = replace2_content.split("");					


var reverse_inner_content = inner_content.reverse("");			

var connect_content = reverse_inner_content.join("");			




decrypted_content.innerHTML = connect_content;					


}
