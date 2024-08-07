const vehicleData = {
    "Maruti Suzuki Alto": { speed: 140, efficiency: 22.05, tankCapacity: 35, maxRange: 771.75 },
    "Hyundai i20": { speed: 180, efficiency: 20.35, tankCapacity: 37, maxRange: 753.05 },
    "Tata Nexon": { speed: 180, efficiency: 17.57, tankCapacity: 44, maxRange: 772.68 },
    "Honda City": { speed: 180, efficiency: 17.8, tankCapacity: 40, maxRange: 712 },
    "Mahindra Thar": { speed: 155, efficiency: 15.2, tankCapacity: 57, maxRange: 866.40 },
    "Toyota Innova Crysta": { speed: 179, efficiency: 11.25, tankCapacity: 55, maxRange: 618.75 },
    "Kia Seltos": { speed: 170, efficiency: 16.8, tankCapacity: 50, maxRange: 840 },
    "Renault Kwid": { speed: 150, efficiency: 22.3, tankCapacity: 28, maxRange: 624.40 },
    "Ford EcoSport": { speed: 182, efficiency: 15.9, tankCapacity: 52, maxRange: 826.80 },
    "Tata Tiago": { speed: 150, efficiency: 23.84, tankCapacity: 35, maxRange: 834.40 }
};

function calculate() {
    const distance = document.getElementById('distance').value;
    const vehicleType = document.querySelector('input[name="vehicle"]:checked').value;
    const vehicle = vehicleData[vehicleType];

    const time = distance / vehicle.speed;
    let resultText = `Travel time by ${vehicleType}: ${time.toFixed(2)} hours`;

    if (vehicle.efficiency !== null) {
        const fuelConsumption = distance / vehicle.efficiency;
        resultText += `, Fuel consumption: ${fuelConsumption.toFixed(2)} liters`;
        if (distance > vehicle.maxRange) {
            resultText += " (Out of Range)";
        }
    }

    document.getElementById('result').innerText = resultText;
}

function compareAll() {
    const distance = document.getElementById('distance').value;
    const comparisonTable = document.getElementById('comparisonTable').getElementsByTagName('tbody')[0];
    comparisonTable.innerHTML = ''; // Clear previous results

    for (const [vehicleType, vehicle] of Object.entries(vehicleData)) {
        const time = distance / vehicle.speed;
        let fuelConsumption = "N/A";
        let rangeNote = "";

        if (vehicle.efficiency !== null) {
            fuelConsumption = (distance / vehicle.efficiency).toFixed(2) + " liters";
            if (distance > vehicle.maxRange) {
                rangeNote = " (Out of Range)";
            }
        }

        const row = comparisonTable.insertRow();
        row.insertCell(0).innerText = vehicleType;
        row.insertCell(1).innerText = `${time.toFixed(2)} hours`;
        row.insertCell(2).innerText = fuelConsumption + rangeNote;
        row.cells[2].className = distance > vehicle.maxRange ? 'out-of-range' : 'within-range';
    }
}
