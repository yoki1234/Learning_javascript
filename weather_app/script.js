
fetch("./data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load JSON");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        document.getElementById("cover").innerHTML = `
            <h1>${data.name}</h1>
            <p>${data.email}</p>
            <p>${data.phone}</p>
        `;
    })
    .catch(error => console.error(error));