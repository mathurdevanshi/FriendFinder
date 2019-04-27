////////////////////////////////////Setting variables and arrays for rest of the function/////////////////
var masterResponses = [];
var responses = {};
var additionArray =[];
var subtotal=0; 
var compariosonObject ={};
var compariosonArray=[];
// ----------------------------------------ANDY AND FELIPE LOOK HERE! I am using a call back function! Woohooo!
function callbackFunction(smaller, newer){
    if (smaller<newer){
        return smaller;
    }
    else{
        return newer;
    }
}
// ----------------------------------------ANDY AND FELIPE LOOK HERE! I am using a call back function! Woohooo!
////////////////////////////////////ON CLICK, main functions///////////////////////////////////
$("#submit").on("click", function(){
    // ----------------------------------------collecting the values
    responses = {
        name: $("#name").val(),
        contact: $("#contact").val(),
        questions: [
            $("#question1").val(),
            $("#question2").val(),
            $("#question3").val(),
            $("#question4").val(),
            $("#question5").val(),
            $("#question6").val(),
            $("#question7").val(),
            $("#question8").val(),
            $("#question9").val(),
            $("#question10").val(),
        ]
    };
    // ----------------------------------------checking we have other people to compare with 
    if(masterResponses.length>1){
        // ----------------------------------------calculating the differences between values
        for (i=0; i<masterResponses.length; i++){
            subtotal=0;
            for(l=0;l<10;l++){
                additionArray[l]=responses.questions[l]-masterResponses[i].questions[l];
                // console.log("***************");
                // console.log("response.question= ",responses.questions[l], "masterResponses[i[.questions = ", masterResponses[i].questions[l] );
                // console.log("additionArray[l]", additionArray[l]);
            };
            for(q=0;q<10;q++){
                subtotal = Math.abs(additionArray[q])+subtotal;
                //console.log("subtotal= ",subtotal);
            };
            compariosonObject={
                mainUser:responses.name, 
                pairedFriend:masterResponses[i].name,
                difference: subtotal
            };
            compariosonArray.push(compariosonObject);
        }
        // ----------------------------------------now finding out the lowest match
        var smaller = compariosonArray[0].difference;
        // console.log("compariosonArray = ", compariosonArray[0].difference);
        // console.log("smaller ", smaller);
        for(i=0;i<masterResponses.length; i++){
            console.log("paried: ", compariosonArray[i].pairedFriend, "main: ",compariosonArray[i].mainUser );
            smaller = callbackFunction(smaller,compariosonArray[i+1].difference);
            console.log("Inner smaller: ", smaller);
        }
        
    };
    
    // ----------------------------------------saving the values locally
    console.log (smaller);
    alert("You have been paried with ");
    masterResponses.push(responses);
});

