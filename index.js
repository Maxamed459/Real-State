let navDiolog = document.getElementById("navDiolog");
function navHandler() {
    navDiolog.classList.toggle('hidden');
}
// hidding the links when visit via mobile
function menu_item() {
    navDiolog.classList.toggle('hidden');
}

// const propertyContainer = document.getElementById("h-container");
const SalecategoryContainer = document.getElementById("Sale-container");
const RentcategoryContainer = document.getElementById("Rent-container");

const buildTheDom = (houses) => {
    houses.forEach((house) => {
        let card = `<div class="bg-white shadow-lg rounded-lg overflow-hidden relative">
            <div class="bg-[#222123] rounded absolute right-2 top-2 px-6 py-1"><p class="text-xl text-white">${house.type}</p></div>
            <img src="${house.image}" alt="Property Image" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800">${house.title}</h3>
                <p class="text-gray-600 mt-2">${house.description}</p>
                <div class="mt-4 flex items-center justify-between">
                    <span class="text-xl font-bold text-[#3955E5]">$${house.price}</span>
                    <button class="text-white bg-[#3955E5] hover:bg-[#2f46bb] px-4 py-2 rounded-lg" onclick="Details('${house.title}', '${house.address}', '${house.description}', '${house.price}', '${house.type}', '${house.bedrooms}', '${house.bathrooms}', '${house.image}')">
                        <a href="#" >View Details</a>
                    </button>
                </div>
            </div>
        </div>`;

        if (house.type === "Rent") {
            RentcategoryContainer.innerHTML += card;
            // console.log("Rent");
        }else if (house.type === "Sale") {
            SalecategoryContainer.innerHTML += card;
        }
    });
    
}

try {
    const fetchData = async () => {
        const request = await fetch("./data.JSON");
        const houses = await request.json();

        buildTheDom(houses);
    }

    fetchData();
} catch (error) {
    console.log(error);
}

const Details = (title, address, description, price, type, bedrooms, bathrooms, image) => {
    sessionStorage.setItem('title', title);
    sessionStorage.setItem('address', address);
    sessionStorage.setItem('description', description);
    sessionStorage.setItem('price', price);
    sessionStorage.setItem('type', type);
    sessionStorage.setItem('bedrooms', bedrooms);
    sessionStorage.setItem('bathrooms', bathrooms);
    sessionStorage.setItem('image', image);

    window.location.href = "details.html";
}