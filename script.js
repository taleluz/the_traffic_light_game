const lights = document.querySelectorAll('.light');
let currentLightIndex = 0;
let intervalId;

function switchLights() {
    lights.forEach(light => {
        light.style.backgroundColor = 'gray';
    });

    if (currentLightIndex === 0) {
        lights[currentLightIndex].style.backgroundColor = 'red';
        intervalId = setTimeout(() => {
            lights[currentLightIndex + 1].style.backgroundColor = 'yellow';
            currentLightIndex++;
            intervalId = setTimeout(switchLights, 3000);
        }, 3000);
    } else if (currentLightIndex === 1) {
        lights[currentLightIndex - 1].style.backgroundColor = 'red';
        lights[currentLightIndex].style.backgroundColor = 'yellow';
        lights[currentLightIndex + 1].style.backgroundColor = 'gray';
        currentLightIndex++;
        intervalId = setTimeout(switchLights, 3000);
    } else if (currentLightIndex === 2) {
        lights[currentLightIndex].style.backgroundColor = 'green';
        currentLightIndex = 0;
        intervalId = setTimeout(switchLights, 3000);
    }
}

intervalId = setTimeout(switchLights, 3000);
