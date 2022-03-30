function diagonalDiff(arr) {

    // Menjumlahkan bilangan secara diagonal dari array matriks

    // Okay bikin counternya dulu
    let kiriKeKanan = 0
    let kananKeKiri = 0

    for(let i = 0; i < arr.length; i++) {
        kiriKeKanan += arr[i][i]

        // Untuk yang kanan ke kiri kita bisa mengurangi indeks terakhir dengan i pada setiap iterasinya di indeks terkahirnya, kita coba test
        kananKeKiri += arr[i][arr.length - 1 -  i]
    }

    return Math.abs(kiriKeKanan - kananKeKiri)
}

function main() {

    let array = [
        [10, 44, 8],
        [88, 30, 5],
        [45, 66, -20]
    ];
    let result = diagonalDiff(array)

    console.log(result)
}

main()