// Cau 1


const forEachTest = (array , callback) => {
    array.forEach((test) => {
        callback(test);
    })
}

const consoleLog = (notification) => {
    console.log(notification);
}

const arrayNumber = [1, 2, 3, 4, 5, 6];
const arrayString =  ["Lê Văn A", "Nguyễn Thị B", "Đỗ Thị C"];
forEachTest(arrayNumber , consoleLog);
forEachTest(arrayString , consoleLog);


//Cau 2
const forEachPair = (array , callback) => 
{
    for(let i = 0 ; i < array.length - 1 ; i++)
    {
        callback(array[i] , array[i+ 1]);
    }
}
const consoleLog = (a , b) => {
    console.log(a + b);
}

const arrayNumberOne = [1, 2, 3, 4, 5];
const arrayNumberTwo= [5, 20, 30, 60, 90];
forEachPair(arrayNumberOne , consoleLog);
forEachPair(arrayNumberTwo, consoleLog);



// Cau 3:
const getNumberRandoom =  () => {
    return new Promise((resolve , reject) => {
        let numberRamdoom = Math.floor(Math.random() * (11 - 1) + 1);
        if(numberRamdoom)
        {
            resolve(numberRamdoom);
        }
        else
        {
            reject("Loi: Khong the tao so ngau nhien!!");
        }
    })
}

getNumberRandoom()
    .then((respone) => {
        console.log(`So ngau nhien: ${respone}`);
    })    
    .catch((error) => {
        console.log(error);
    })





// Cau 4:

const getNumberChan = (array) => {
    return new Promise((resolve , reject) => {
        const kiemTraSoChan = array.some((test) => {
            return test % 2 === 0;
        })
        if(kiemTraSoChan)
        {
            const arrayNew = array.filter((test) => {
                return test % 2 === 0;
            })
            resolve(arrayNew);
        }
        else
        {
            reject("Loi: Khong tim thay so chan!!");
        }
    })
}

const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayTwo = [11, 13, 15, 17, 19];
getNumberChan(arrayTwo)
    .then((arrayData) => {
        console.log(arrayData);
    })
    .catch((error) => {
        console.log(error);
    })

// Cau 5;
const getFetch = async (api) => {
    const getDataForApi = await fetch(api)
    const dataJs = await getDataForApi.json();
    return dataJs;
}

getFetch("https://restcountries.com/v2/all")
    .then((data) => {
        const getDiv = document.querySelector("#div-country");
        const dataJs = data.map((item) => {
            return `
                <div >
                    <div >
                        <img  src="${item.flag}" alt="${item.capital} - ${item.name}" />
                        <div >
                            ${item.capital} - ${item.name}
                        </div>
                    </div>
                </div>
            `;
        }).join("");
        getDiv.innerHTML = dataJs;
        console.log(data);
    })


//Cau 6


const getId = async (api) => {
    const data = await fetch(api);
    const dataJs = await data.json();
    return dataJs;
}

getId("https://api.ipify.org?format=json")
.then((data) => {
    const getDiv = document.querySelector("#div-country");
    getDiv.innerHTML = data.ip;
})
.catch((error) => {
    console.log(error);
})
