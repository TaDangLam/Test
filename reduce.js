// test map()
function testMap(){
    const courses = [
        {
            id: 1,
            name: 'a',
            coin: 100
        },
        {
            id: 2,
            name: 'b',
            coin: 200
        },
        {
            id: 3,
            name: 'c',
            coin: 300
        },
        {
            id: 4,
            name: 'd',
            coin: 400
        }
    ]
    

    const test = courses.reduce((accumulator, currentValue) => accumulator + currentValue.coin , 0);
    console.log(test);
}


// test Promise (Then, catch, finally)
function testPromise(){
    const promise = new Promise( (resolve, reject) => {
        reject();
    });


    promise.then( () => {
        console.log("OKE rồi");
    });

    promise.catch( () => {
        console.log(`Đéo Oke lắm`);
    });

    promise.finally( () => {
        console.log('ngon lành');
    });
}