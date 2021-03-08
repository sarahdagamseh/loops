
var order = prompt(" what is your favorite dish chicken or beef ?");
var menu = function()
{
 while (order !='chicken' && order !='beef')
 {
    
    order=prompt(" what is your favorite dish chicken or beef ?");
 }
}
 menu ();
var itemOrder = '';

if(order == 'chicken')
{
    itemOrder ='<img src="https://c.ndtvimg.com/2020-04/6bpknrd8_chicken_625x300_10_April_20.jpg"/>';
}
else
{
    itemOrder ='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSk1vwAYtpeeUGMCYSelTIXcyFqsFs5_9Qw&usqp=CAU"/>';
}

 var numOfMeals = prompt("how many meals do you want?");
 function result ()
 { var result = '';

 for (var i = 0; i <numOfMeals; i++)
 {
    result = result + itemOrder;
 }

 document.write(result);
 }
 result();