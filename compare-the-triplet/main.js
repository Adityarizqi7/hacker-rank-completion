// OK This is first case, i hope this work
// Allright, ada dua array yang nantinya akan dibandingkan setiap indeksnya


function compareTriplets(array1, array2) {

    // define the result 
    let result = [0, 0]

    // jadi array1[1] akan dibandingkan dengan array2[1]
    for(let i = 0; i < array1.length; i++) {

        // Ok sekarang kita bandingkan setiap indeksnya, jika salah satu lebih besar maka akan mendapatkan score point 1
        if(array1[i] > array2[i]) {
            // Array 1 akan dapat score letaknya sebelah kiri
            result[0] += 1
        } else if(array2[i] > array1[i]) {
            // Array 2 akan mendapatkan score yang letaknya sebelah kanan
            result[1] += 1
        }
    }

    return result
}


function main() {

    const arr1 = [100, 54, 20]
    const arr2 = [200, 40, 30]

    const resultCompare = compareTriplets(arr1, arr2)

    console.log(resultCompare)
    // return resultCompare
}

main()