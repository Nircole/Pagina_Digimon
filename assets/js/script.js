let formDigimon = document.getElementById("formDigimon");

formDigimon.addEventListener("submit", function(event){
    event.preventDefault();
    let digimon = document.getElementById("formDigimonNombre").value;
 

    let url = "https://digimon-api.vercel.app/api/digimon/name/"+digimon 
    fetch(url)
    .then(response => response.json())
    .then(data => {
    
        let nombreDigimon = data[0].name;
        let levelDigimon = data[0].level;
        let imagenDigimon = data[0].img;
        
      
        let contenedorImagen = document.querySelector(".infoDigimon img")
        contenedorImagen.setAttribute("src",imagenDigimon)

        let tituloNombre = document.getElementById("list-group-name")
        tituloNombre.innerText = "Nombre Digimon: " + nombreDigimon;

        let tituloLevel = document.getElementById("list-group-level")
        tituloLevel.innerText = "Nivel actual: " + levelDigimon;  
    })

})

// Listado
fetch('https://digimon-api.vercel.app/api/digimon/')
  .then(response => response.json())
  .then(data => {
    const select = document.createElement('select');
    select.classList.add('form-control', 'custom-select', "text-primary" );
    for (let i = 1; i < data.length; i++) {
      const option = document.createElement('option');
      option.value = data[i].id;
      option.text = data[i].name;
      select.appendChild(option);
    }
    document.getElementById('dataDigimon').appendChild(select);
  });

 


