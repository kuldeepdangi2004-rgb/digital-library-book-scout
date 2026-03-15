
function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let response="";

if(input.includes("books"))
response="You can find books in the Books section.";

else if(input.includes("timing"))
response="Library is open from 9 AM to 6 PM.";

else if(input.includes("membership"))
response="You can register in the membership page.";

else
response="Sorry I didn't understand.";

document.getElementById("chatResponse").innerText=response;

}