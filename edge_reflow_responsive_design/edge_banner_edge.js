/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.1638",
    baseState: "Base State",
    scaleToFit: "height",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'sky',
                type: 'image',
                rect: ['0', '0','1024px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/sky.svg','0px','0px']
            },
            {
                id: 'clouds',
                type: 'image',
                rect: ['-81px', '19px','1024px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/clouds.svg','0px','0px']
            },
            {
                id: 'sun',
                type: 'image',
                rect: ['5px', '109px','160px','124px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/sun.svg','0px','0px']
            },
            {
                id: 'mountains',
                type: 'image',
                rect: ['-2px', '189px','1026px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/mountains.svg','0px','0px']
            },
            {
                id: 'farm',
                type: 'image',
                rect: ['726px', '91px','230px','141px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/farm.svg','0px','0px']
            },
            {
                id: 'fields',
                type: 'image',
                rect: ['0', '216px','1024px','93px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/fields.svg','0px','0px']
            },
            {
                id: 'animation',
                type: 'rect',
                rect: ['0px', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'animation',
                symbolName: 'animation',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_farm}": [
                ["style", "left", '726px'],
                ["style", "top", '91px']
            ],
            "${_animation}": [
                ["style", "left", '0px']
            ],
            "${_sun}": [
                ["style", "top", '109px'],
                ["style", "left", '5px']
            ],
            "${_clouds}": [
                ["style", "left", '-81px'],
                ["style", "top", '19px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '300px'],
                ["style", "overflow", 'hidden']
            ],
            "${_fields}": [
                ["style", "top", '216px']
            ],
            "${_mountains}": [
                ["style", "top", '189px'],
                ["style", "left", '-2px'],
                ["style", "width", '1026px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid29", tween: [ "style", "${_animation}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
        }
    }
},
"animation": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.1638",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['Courier, Courier New, monospace', 125, 'rgba(48,72,105,1.00)', '700', 'none', ''],
                    type: 'text',
                    id: 'Farm',
                    opacity: 1,
                    text: 'Farm',
                    rect: ['251px', '68px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Courier, Courier New, monospace', 125, 'rgba(48,72,105,1.00)', '700', 'none', ''],
                    type: 'text',
                    id: 'Fresh',
                    opacity: 1,
                    text: 'Fresh',
                    rect: ['251px', '68px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Courier, Courier New, monospace', 125, 'rgba(48,72,105,1.00)', '700', 'none', ''],
                    type: 'text',
                    id: 'Eggs',
                    opacity: 1,
                    text: 'Eggs',
                    rect: ['251px', '68px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Farm}": [
                ["style", "top", '68px'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'Courier, Courier New, monospace'],
                ["color", "color", 'rgba(48,72,105,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '1058px'],
                ["style", "font-size", '125px']
            ],
            "${_Fresh}": [
                ["style", "top", '68px'],
                ["style", "opacity", '0'],
                ["style", "font-weight", 'bold'],
                ["color", "color", 'rgba(48,72,105,1)'],
                ["style", "font-family", 'Courier, \'Courier New\', monospace'],
                ["style", "left", '1058px'],
                ["style", "font-size", '125px']
            ],
            "${_Eggs}": [
                ["style", "top", '68px'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'Courier, \'Courier New\', monospace'],
                ["color", "color", 'rgba(48,72,105,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '1058px'],
                ["style", "font-size", '125px']
            ],
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '1024px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid16", tween: [ "style", "${_Eggs}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 1750, easing: "easeOutBack" },
                { id: "eid26", tween: [ "style", "${_Eggs}", "opacity", '0', { fromValue: '1'}], position: 12750, duration: 1500, easing: "easeInBack" },
                { id: "eid18", tween: [ "style", "${_Farm}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 1750, easing: "easeOutBack" },
                { id: "eid27", tween: [ "style", "${_Farm}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 1500, easing: "easeInBack" },
                { id: "eid10", tween: [ "style", "${_Eggs}", "left", '251px', { fromValue: '1058px'}], position: 10000, duration: 1750, easing: "easeOutBack" },
                { id: "eid21", tween: [ "style", "${_Eggs}", "left", '-407px', { fromValue: '251px'}], position: 12750, duration: 1500, easing: "easeInBack" },
                { id: "eid22", tween: [ "style", "${_Eggs}", "top", '62px', { fromValue: '68px'}], position: 12750, duration: 1500, easing: "easeInBack" },
                { id: "eid24", tween: [ "style", "${_Farm}", "top", '62px', { fromValue: '68px'}], position: 3250, duration: 1500, easing: "easeInBack" },
                { id: "eid12", tween: [ "style", "${_Farm}", "left", '251px', { fromValue: '1058px'}], position: 500, duration: 1750, easing: "easeOutBack" },
                { id: "eid23", tween: [ "style", "${_Farm}", "left", '-407px', { fromValue: '251px'}], position: 3250, duration: 1500, easing: "easeInBack" },
                { id: "eid20", tween: [ "style", "${_Fresh}", "top", '62px', { fromValue: '68px'}], position: 8000, duration: 1500, easing: "easeInBack" },
                { id: "eid8", tween: [ "style", "${_Fresh}", "left", '251px', { fromValue: '1058px'}], position: 5250, duration: 1750, easing: "easeOutBack" },
                { id: "eid19", tween: [ "style", "${_Fresh}", "left", '-407px', { fromValue: '251px'}], position: 8000, duration: 1500, easing: "easeInBack" },
                { id: "eid14", tween: [ "style", "${_Fresh}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 1750, easing: "easeOutBack" },
                { id: "eid25", tween: [ "style", "${_Fresh}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 1500, easing: "easeInBack" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2905210");
