const something = () => {
    return new Promise((resolve) => {
        let trigger = true;
        setTimeout(() => {
            console.log('something promise');
            for(let i=0;i<10000;i++) {
                console.log('yes');
            }
            trigger = false;
            resolve('end');
        }, 0);
    });
}

const something2 = () => {
    return new Promise((resolve) => {
        let trigger = true;
        setTimeout(() => {
            console.log('something promise2');
            for(let i=0;i<10000;i++) {
                console.log('no');
            }
            trigger = false;
            resolve('end');
        }, 0);
    });
}

something().then(x => console.log(x));
something2().then(y => console.log(y));
console.log('start');
