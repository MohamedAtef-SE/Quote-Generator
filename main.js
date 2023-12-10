
// document.getElementById('btn').addEventListener('click', function () {
//     var randomQuote = Math.trunc(Math.random() * 10) + 1;
//     var quote;
//     switch (randomQuote) {
//         case 1:
//             quote = `If you want to achieve greatness stop asking for permission. <q class="bold">~Anonymous</q>`
//             break;
//         case 2:
//             quote = `Things work out best for those who make the best of how things work out. <q class="bold">~John Wooden</q>`
//             break;
//         case 3:
//             quote = `To live a creative life, we must lose our fear of being wrong.<q class="bold">~Anonymous</q>`
//             break;
//         case 4:
//             quote = `If you are not willing to risk the usual you will have to settle for the ordinary.<q class="bold"> ~Jim Rohn</q>`
//             break;
//         case 5:
//             quote = `Trust because you are willing to accept the risk, not because it's safe or certain. <q class="bold">~Anonymous</q>`
//             break;
//         case 6:
//             quote = `All our dreams can come true if we have the courage to pursue them.<q class="bold">~Walt Disney</q>`
//             break;
//         case 7:
//             quote = `Good things come to people who wait, but better things come to those who go out and get them.<q class="bold">~Anonymous</q>`
//             break;
//         case 8:
//             quote = `Success is walking from failure to failure with no loss of enthusiasm. <q class="bold">~Winston Churchill</q>`
//             break;
//         case 9:
//             quote = `Just when the caterpillar thought the world was ending, he turned into a butterfly. <q class="bold">~Proverb</q>`
//             break;
//         case 10:
//             quote = `Successful entrepreneurs are givers and not takers of positive energy. <q class="bold">~Anonymous</q>`
//             break;
//     }

//     document.getElementById('quotes').innerHTML = quote;
// })

function quoteGenerator() {
    var randomQuote = Math.trunc(Math.random() * 10) + 1;
    var quote;
    switch (randomQuote) {
        case 1:
            quote = `If you want to achieve greatness stop asking for permission. <q class="bold">~Anonymous</q>`
            break;
        case 2:
            quote = `Things work out best for those who make the best of how things work out. <q class="bold">~John Wooden</q>`
            break;
        case 3:
            quote = `To live a creative life, we must lose our fear of being wrong.<q class="bold">~Anonymous</q>`
            break;
        case 4:
            quote = `If you are not willing to risk the usual you will have to settle for the ordinary.<q class="bold"> ~Jim Rohn</q>`
            break;
        case 5:
            quote = `Trust because you are willing to accept the risk, not because it's safe or certain. <q class="bold">~Anonymous</q>`
            break;
        case 6:
            quote = `All our dreams can come true if we have the courage to pursue them.<q class="bold">~Walt Disney</q>`
            break;
        case 7:
            quote = `Good things come to people who wait, but better things come to those who go out and get them.<q class="bold">~Anonymous</q>`
            break;
        case 8:
            quote = `Success is walking from failure to failure with no loss of enthusiasm. <q class="bold">~Winston Churchill</q>`
            break;
        case 9:
            quote = `Just when the caterpillar thought the world was ending, he turned into a butterfly. <q class="bold">~Proverb</q>`
            break;
        case 10:
            quote = `Successful entrepreneurs are givers and not takers of positive energy. <q class="bold">~Anonymous</q>`
            break;
    }

    document.getElementById('quotes').innerHTML = quote;
    document.getElementById('mainAudio').play();
}