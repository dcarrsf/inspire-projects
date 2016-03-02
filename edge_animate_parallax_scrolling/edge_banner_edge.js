/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['anonymous-pro, sans-serif']='<script src=\"http://use.edgefonts.net/anonymous-pro:n4,i4,n7,i7:all.js\"></script>';
    fonts['annie-use-your-telescope, sans-serif']='<script src=\"http://use.edgefonts.net/annie-use-your-telescope:n4:all.js\"></script>';
    fonts['fredericka-the-great, sans-serif']='<script src=\"http://use.edgefonts.net/fredericka-the-great:n4:all.js\"></script>';
    fonts['comfortaa, sans-serif']='<script src=\"http://use.edgefonts.net/comfortaa:n4,n3,n7:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'background',
                type: 'image',
                rect: ['0', '0','3072px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/background.svg','0px','0px']
            },
            {
                id: 'INSPIRE',
                type: 'rect',
                rect: ['185', '42','auto','auto','auto', 'auto']
            },
            {
                id: 'mountains-back',
                type: 'image',
                rect: ['-1115px', '130px','2150px','130px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/mountains-back.svg','0px','0px']
            },
            {
                id: 'mountains-front',
                type: 'image',
                rect: ['0px', '140px','2250px','160px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/mountains-front.svg','0px','0px']
            },
            {
                id: 'foreground',
                type: 'image',
                rect: ['-1px', '0px','3072px','300px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/foreground.svg','0px','0px']
            },
            {
                id: 'keywords',
                type: 'image',
                rect: ['1094px', '208px','910px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/keywords.svg','0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['93px', '2px','auto','auto','auto', 'auto'],
                text: "drag the scrollbar to animate...",
                font: ['comfortaa, sans-serif', 20, "rgba(255,255,255,1.00)", "normal", "none", ""],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 5, 5, 0]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['2448px', '47px','501px','148px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/logo.png','0px','0px']
            },
            {
                id: 'balloon',
                type: 'image',
                rect: ['295px', '11px','160px','220px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'source/balloon.svg','0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','10px','300px','auto', 'auto'],
                fill: ["rgba(209,1,1,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [
            {
                id: 'INSPIRE',
                symbolName: 'INSPIRE',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '47px'],
                ["style", "opacity", '0'],
                ["style", "left", '1586px']
            ],
            "${_balloon}": [
                ["style", "height", '220px'],
                ["style", "opacity", '1'],
                ["motion", "location", '375px 121px'],
                ["style", "width", '160px']
            ],
            "${_keywords}": [
                ["style", "left", '1094px'],
                ["style", "top", '208px']
            ],
            "${_INSPIRE}": [
                ["style", "top", '52px']
            ],
            "${_Text}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(11,10,10,1.00)'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '83px'],
                ["style", "font-size", '16px'],
                ["style", "top", '6px'],
                ["subproperty", "filter.drop-shadow.blur", '5px'],
                ["style", "font-family", 'comfortaa, sans-serif'],
                ["subproperty", "filter.drop-shadow.offsetV", '2px'],
                ["subproperty", "filter.drop-shadow.offsetH", '2px']
            ],
            "${_mountains-front}": [
                ["style", "top", '140px'],
                ["style", "left", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'auto'],
                ["style", "height", '300px'],
                ["style", "width", '1024px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(209,1,1,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '10px']
            ],
            "${_foreground}": [
                ["style", "left", '-1px']
            ],
            "${_mountains-back}": [
                ["style", "left", '-1115px'],
                ["style", "top", '140px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: false,
            timeline: [
                { id: "eid14", tween: [ "style", "${_Rectangle}", "left", '3062px', { fromValue: '0px'}], position: 0, duration: 10000 },
                { id: "eid89", tween: [ "style", "${_INSPIRE}", "top", '52px', { fromValue: '52px'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "subproperty", "${_Text}", "filter.drop-shadow.color", 'rgba(11,10,10,1.00)', { fromValue: 'rgba(11,10,10,1.00)'}], position: 0, duration: 0 },
                { id: "eid15", tween: [ "motion", "${_balloon}", [[375, 121, 0, 0],[351.02, 54.33, 89.36, -29.79, 305.99, -102],[500.4, 102.34, 153.99, 7.36, 193.99, 9.28],[714.04, 83.16, 152.91, 2.49, 195.47, 3.19],[895.84, 119.39, 87.54, 1.69, 169.72, 3.27],[1069.4, 94.26, 257.57, 0.98, 90.57, 0.35],[1238.39, 126.37, 53.95, -2.91, 104.8, -5.65],[1394.44, 109.36, 90.56, 1.16, 53.63, 0.68],[1523.35, 121.61, 223.8, 2.86, 87.21, 1.11],[1826.03, 79.18, 1032.08, 6.77, 194.61, 1.28],[2329.08, 128.09, 12.32, -7.44, 455.26, -274.83],[2346.07, 112, 0, 0]]], position: 0, duration: 8000 },
                { id: "eid5", tween: [ "subproperty", "${_Text}", "filter.drop-shadow.offsetV", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "subproperty", "${_Text}", "filter.drop-shadow.offsetH", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_mountains-back}", "left", '300px', { fromValue: '-1115px'}], position: 0, duration: 8000 },
                { id: "eid86", tween: [ "style", "${_logo}", "opacity", '0.0081967213114754', { fromValue: '0'}], position: 7500, duration: 214, easing: "easeOutBack" },
                { id: "eid56", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0.0081967213114754'}], position: 7714, duration: 1286, easing: "easeOutBack" },
                { id: "eid10", tween: [ "style", "${_Text}", "font-size", '16px', { fromValue: '16px'}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "subproperty", "${_Text}", "filter.drop-shadow.blur", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_balloon}", "width", '95px', { fromValue: '160px'}], position: 0, duration: 8000 },
                { id: "eid18", tween: [ "style", "${_balloon}", "height", '130px', { fromValue: '220px'}], position: 0, duration: 8000 },
                { id: "eid38", tween: [ "style", "${_mountains-front}", "left", '440px', { fromValue: '0px'}], position: 0, duration: 8000 },
                { id: "eid11", tween: [ "style", "${_Text}", "left", '83px', { fromValue: '83px'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_logo}", "left", '2448px', { fromValue: '1586px'}], position: 7714, duration: 1286, easing: "easeOutBack" },
                { id: "eid9", tween: [ "style", "${_Text}", "top", '6px', { fromValue: '6px'}], position: 0, duration: 0 }            ]
        }
    }
},
"INSPIRE": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '150px', '180px', 'auto', 'auto'],
                    id: 'I',
                    opacity: 0.3,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'source/I.svg', '0px', '0px']
                },
                {
                    rect: ['230px', '0px', '150px', '180px', 'auto', 'auto'],
                    id: 'N',
                    opacity: 0.3,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'source/N.svg', '0px', '0px']
                },
                {
                    rect: ['492px', '0px', '150px', '180px', 'auto', 'auto'],
                    id: 'S',
                    opacity: 0.3,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'source/S.svg', '0px', '0px']
                },
                {
                    rect: ['744px', '0px', '150px', '180px', 'auto', 'auto'],
                    id: 'P',
                    opacity: 0.3,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'source/P.svg', '0px', '0px']
                },
                {
                    rect: ['954px', '0px', '150px', '180px', 'auto', 'auto'],
                    id: 'I2',
                    opacity: 0.3,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'source/I.svg', '0px', '0px']
                },
                {
                    rect: ['1183px', '0px', '150px', '180px', 'auto', 'auto'],
                    id: 'R',
                    opacity: 0.3,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'source/R.svg', '0px', '0px']
                },
                {
                    rect: ['1434px', '0px', '150px', '180px', 'auto', 'auto'],
                    id: 'E',
                    opacity: 0.3,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'source/E.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_R}": [
                ["style", "top", '264px'],
                ["style", "opacity", '0'],
                ["style", "left", '1183px']
            ],
            "${_S}": [
                ["style", "top", '264px'],
                ["style", "opacity", '0'],
                ["style", "left", '492px']
            ],
            "${_P}": [
                ["style", "top", '264px'],
                ["style", "opacity", '0'],
                ["style", "left", '744px']
            ],
            "${symbolSelector}": [
                ["style", "height", '180px'],
                ["style", "width", '1584px']
            ],
            "${_I2}": [
                ["style", "top", '264px'],
                ["style", "opacity", '0'],
                ["style", "left", '954px']
            ],
            "${_E}": [
                ["style", "top", '264px'],
                ["style", "opacity", '0'],
                ["style", "left", '1434px']
            ],
            "${_I}": [
                ["style", "top", '264px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_N}": [
                ["style", "top", '264px'],
                ["style", "opacity", '0'],
                ["style", "left", '230px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2199,
            autoPlay: true,
            timeline: [
                { id: "eid83", tween: [ "style", "${_S}", "opacity", '0.30000001192092896', { fromValue: '0'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid69", tween: [ "style", "${_S}", "top", '0px', { fromValue: '264px'}], position: 500, duration: 750, easing: "easeOutBack" },
                { id: "eid71", tween: [ "style", "${_I}", "top", '0px', { fromValue: '264px'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid63", tween: [ "style", "${_P}", "top", '0px', { fromValue: '264px'}], position: 750, duration: 750, easing: "easeOutBack" },
                { id: "eid65", tween: [ "style", "${_E}", "top", '0px', { fromValue: '264px'}], position: 1449, duration: 750, easing: "easeOutBack" },
                { id: "eid75", tween: [ "style", "${_R}", "opacity", '0.30000001192092896', { fromValue: '0'}], position: 1250, duration: 750, easing: "easeOutBack" },
                { id: "eid59", tween: [ "style", "${_I2}", "top", '0px', { fromValue: '264px'}], position: 1000, duration: 750, easing: "easeOutBack" },
                { id: "eid61", tween: [ "style", "${_R}", "top", '0px', { fromValue: '264px'}], position: 1250, duration: 750, easing: "easeOutBack" },
                { id: "eid79", tween: [ "style", "${_E}", "opacity", '0.30000001192092896', { fromValue: '0'}], position: 1449, duration: 750, easing: "easeOutBack" },
                { id: "eid73", tween: [ "style", "${_I2}", "opacity", '0.30000001192092896', { fromValue: '0'}], position: 1000, duration: 750, easing: "easeOutBack" },
                { id: "eid85", tween: [ "style", "${_I}", "opacity", '0.30000001192092896', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutBack" },
                { id: "eid77", tween: [ "style", "${_P}", "opacity", '0.30000001192092896', { fromValue: '0'}], position: 750, duration: 750, easing: "easeOutBack" },
                { id: "eid81", tween: [ "style", "${_N}", "opacity", '0.30000001192092896', { fromValue: '0'}], position: 250, duration: 750, easing: "easeOutBack" },
                { id: "eid67", tween: [ "style", "${_N}", "top", '0px', { fromValue: '264px'}], position: 250, duration: 750, easing: "easeOutBack" }            ]
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
})(jQuery, AdobeEdge, "EDGE-116100704");
