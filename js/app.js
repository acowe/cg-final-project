import { loadJson, loadRaw } from "./loadData.js";
import { appState } from './appState.js';
import { WebGLApp } from './webglApp.js';
import Input from "./input.js"

let webglapp = new WebGLApp()
webglapp.runWebglApp();

document.getElementById("openfileActionInput").addEventListener('change', async function(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        try {
            const jsonData = await loadJson(file); // Use the JSON loader
            console.log("Loaded JSON:", jsonData);

            // Update the app state using the AppState object
            appState.setJsonFile(file, jsonData);

            const rawFileName = jsonData.name;
            if (rawFileName) {
                await loadRaw(jsonData);
            } else {
                console.error("JSON does not specify a rawFileName.");
            }

            const currentState = appState.getState();
            console.log("Current App State:", currentState);
            webglapp.createVol()

        } catch (error) {
            console.error("Error loading JSON file:", error);
        }
    } else {
        console.log("No file selected.");
    }
    
});




