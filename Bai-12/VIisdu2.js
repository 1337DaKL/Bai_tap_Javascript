/// Async/Await




const fectApi = async (api) => {
    const dataJSON = await fetch(api);
    const dataJS = await dataJSON.json();
    return (dataJS)
}

fectApi("http://localhost:3000/quotes")
    .then((dataJS) => {
        console.log(dataJS)
        const dataAthor =  dataJS.map((tmp) => {
            return tmp.author;
        });
        return dataAthor;
    })
    .then((dataAthor) =>{
        console.log(dataAthor);
    } )
    .catch((error) => {
        console.log(error);
    })


