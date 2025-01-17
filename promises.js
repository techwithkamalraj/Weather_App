function getWeatherData() {
    let location_name = document.getElementById('city_name').value;
    const api_key = "630d0091c02fdec693cd3d6dd0f47955";
    const apiUrl = `https://api.weatherstack.com/current?access_key=${api_key}&query=${location_name}`;

    const weather_Data = new Promise((res, rej) => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error while fetching API");
                }
                return response.json();
            })
            .then((data) => {
                res(data);
            })
            .catch((error) => {
                rej(error);
            });
    });

    weather_Data.then((real_data) => {
        console.log(real_data);

       

    })
    .catch((err) => {
        console.log(err);
    });
}

getWeatherData();


 // document.getElementById('city_Name').textContent = `${real_data.location.name}`;
        // document.getElementById('date').textContent = `${real_data.location.localtime}`;
        // document.getElementById('temperature').textContent = `${real_data.current.temperature} ℃`;