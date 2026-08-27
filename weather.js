const cities = [
    "Delhi",
    "Mumbai",
    "Chandigarh",
    "Amritsar",
    "Jaipur",
    "Pune",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Bangalore"
];

const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const condition = document.querySelector(".condition");

const btn = document.querySelector(".change");

btn.addEventListener("click", change);

function change() {

    let randomCity = cities[Math.floor(Math.random() * cities.length)];

    fetch(`https://wttr.in/${randomCity}?format=j1`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            city.textContent = randomCity;

            temperature.textContent =
                "Temperature: " + data.current_condition[0].temp_C + "°C";

            condition.textContent =
                "Condition: " + data.current_condition[0].weatherDesc[0].value;
        })
        .catch((error) => {
            console.log(error);
        });
}