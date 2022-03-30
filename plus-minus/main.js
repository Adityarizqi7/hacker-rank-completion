function plusMinus(arr) {

    let result = "";
    let totalLength = arr.length;
    let countZero = 0;
    let countPlus = 0;
    let countMinus = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            countPlus++
        } else if(arr[i] < 0) {
            countMinus++
        } else if(arr[i] === 0) {
            countZero++
        }
    }

    let temp = [countPlus, countMinus, countZero];

    for(let i = 0; i < temp.length; i++) {
        result += parseFloat(temp[i]/totalLength).toFixed(6);
    }
}

function main() {

    let array = [-4, 3, -9, 0, 4, 1]

    let result = plusMinus(array);

    console.log(result)

    // Okay Guys Thank You
} 

main()