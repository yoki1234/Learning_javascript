const topNavOptions = ["Tesco Bank", "Tesco Mobile", "Delivery Saver", "Store locator", "Help", "Feedback"];
const topNavOptionsMap = topNavOptions.map((option) => `<div>${option}</div>`);

document.getElementById("topNav").innerHTML = topNavOptionsMap.join(" ");

const bottomNavOptions = ["All Department", "Groceries & Essentials", "My Favourites", "Special Offers", "Tesco Clubcard", "F&F Clothing", "Marketplace", "New & Trending", "Recipes"];
const bottomNavOptionsMap = bottomNavOptions.map(option => `<div>${option}</div>`);

document.getElementById("bottomNav").innerHTML = bottomNavOptionsMap.join("");


const groceriesAndEssentialsOptions = ["Clothing & Accessories", "The Best Night In", "Marketplace", "Fresh Food", "Bakery", "Frozen Food", "Treats & Snacks", "Food Cupboard", "Drinks", "Baby & Toddler", "Health & Beauty", "Pets", "More"];
const groceriesAndEssentialsOptionsMap = groceriesAndEssentialsOptions.map(option => `<div>${option}</div>`);

document.getElementById("groceriesAndEssentials").innerHTML = groceriesAndEssentialsOptionsMap.join("");
