$(document).keydown(function(){
    console.log(`Key pressed is : ${event.keyCode}`)
})

// $(document).keydown(function(){
//     event.preventDefault();
//     if (on && temp.length < 10) {
//         if (event.keyCode === 97 || event.keyCode === 49) {
//             temp += 1;
//             $("#mainScreen").html(temp);
//         }
//     }
//     });

// $(document).keydown(function(){
//     event.preventDefault();
//     if (on && temp.length < 10) {
//         if (event.keyCode === 98 || event.keyCode === 50) {
//             temp += 2;
//             $("#mainScreen").html(temp);
//         }
//     }
// });