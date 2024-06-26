const fetchData = async () => {
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await data.json();
        console.log(json);

    }catch(error){
        console.error('Error fetching data:',error);
    }

};
fetchData();