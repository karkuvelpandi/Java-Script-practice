let time = new Date();
 let currentTime = time.getHours();
function wish() {
            
    if (0 <= currentTime && currentTime < 10) {

        console.log("Good Morning");
    }
    else if (currentTime <= 15 && currentTime >= 10) {

        console.log("Good Afternoon");
    }
    else {

        console.log("Good Night");
    }
} 




