# ECS175 Final Project - Direct Volume Renderer

An implementation of a direct volume renderer in WebGL

## Currently supported features:
* Loading in uint8 raw binary volume files with small, even dimensions (64^3 - 256^3)
* Raycasting resultant volume with or without Phong Illumination
* Transfer function with linear ramp

## How to use
1. To load volume, click "Choose Files" button, then select a json file from the "Volumes" folder
2. To move camera: left-click volume view and drag for panning, right-click and move mouse up or down for zooming, space button + left-click for translation
3. To set up transfer function ramp, left-click either control point, drag to desired start or end position, then release to update volume

## Outstanding Issues
* Other file/data types are currently not supported
* Larger input files have not been tested
* Transfer function ramp is not robust; Crossing left and right endpoints will lead to issues in volume visibility. 

### Programming References
* Will Usher's Volume Rendering with WebGL (raycasting shader code): https://www.willusher.io/webgl/2019/01/13/volume-rendering-with-webgl/
* Peter Collingridge's Draggable SVG Elements (TF control points): https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/
