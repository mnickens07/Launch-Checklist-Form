// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
       form.addEventListener("submit", function(event) {
           let pilotName = document.querySelector("input[name=pilotName]");
           let copilotName = document.querySelector("input[name=copilotName]");
           let fuelLevel = document.querySelector("input[name=fuelLevel]");
           let cargoMass = document.querySelector("input[name=cargoMass]"); 

            if (pilotName.value === ""|| copilotName.value === ""||fuelLevel.value === ""||cargoMass.value ==="") {
                alert("All fields are required!");
                event.preventDefault();
            }
            if (!isNaN(pilotName.value)||!isNaN(copilotName.value)||isNaN(fuelLevel.value)||isNaN(cargoMass.value)){
                alert("Make sure to enter valid information for each field!");
                event.preventDefault();
            }
           
            if (fuelLevel.value<10000){
               document.getElementById("faultyItems").style.visibility="visible";
               document.getElementById("launchStatus").style.color="red";
               document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
               document.getElementById("pilotStatus").innerHTML= "Pilot " + pilotName.value + " is ready for launch";
               document.getElementById("copilotStatus").innerHTML= "Co-pilot " + copilotName.value + " is ready for launch";
               document.getElementById("fuelStatus").innerHTML="Fuel level too low for launch";
               
               event.preventDefault();
            }
            if(cargoMass.value>10000){
               document.getElementById("faultyItems").style.visibility="visible";
               document.getElementById("launchStatus").innerHTML=`Shuttle not ready for launch`;
               document.getElementById("launchStatus").style.color="red";
               document.getElementById("pilotStatus").innerHTML= `Pilot ${pilotName.value} is ready for launch`;
               document.getElementById("copilotStatus").innerHTML= `Co-pilot ${copilotName.value} is ready for launch`;
               document.getElementById("cargoStatus").innerHTML=`There is too much mass for the shuttle to take off`;      
               
               event.preventDefault();
            }
            if(fuelLevel.value>10000 && cargoMass.value<10000){
               document.getElementById("launchStatus").style.color="green";
               document.getElementById("launchStatus").innerHTML="Shuttle is ready for launch";   
               event.preventDefault();              
            }
        });
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        return response.json().then(function(json){
            let missionTarget = document.getElementById("missionTarget");
            let planet = json;
            missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planet[4].name}</li>
                    <li>Diameter: ${planet[4].diameter}</li>
                    <li>Star: ${planet[4].star}</li>
                    <li>Distance from Earth: ${planet[4].distance}</li>
                    <li>Number of Moons: ${planet[4].moons}</li>
                </ol>
                <img src="${planet[4].image}">
            `;
                
        });
    });
});

