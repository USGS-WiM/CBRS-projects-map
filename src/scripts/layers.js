/**
 * Created by bdraper on 4/27/2015.
 */
var allLayers;
var renderer;

require([
    'esri/InfoTemplate',
    'esri/renderers/UniqueValueRenderer',
    'esri/symbols/PictureMarkerSymbol',
    'esri/symbols/SimpleFillSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/Color',
    'dojo/domReady!'
], function(
    InfoTemplate,
    UniqueValueRenderer,
    PictureMarkerSymbol,
    SimpleFillSymbol,
    SimpleLineSymbol,
    Color
) {

//Change Polygons Symbolized
var defaultSymbol = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL,
        new Color([85,255,0,1])),new Color([85,255,0,0.54]));

var addition = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_BACKWARD_DIAGONAL,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
        new Color([61,196,255]), 2),new Color([61,196,255,2]));
        
var removal = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_BACKWARD_DIAGONAL,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([225,0,0]), 2),new Color([255,0,0,2]));

var noChange = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
        new Color([255,255,190,0])),new Color([255,255,190,0.54]));

var reclassOpa = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL,
        new Color([38, 115, 0]), 2),new Color([38, 115, 0, 0.25]));

var reclassSu = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL,
        new Color([255,0,0,0.25])),new Color([255,0,0,0.25]));

// create renderer
var renderer = new UniqueValueRenderer(defaultSymbol, "Change_Type");

renderer.addValue('Addition', addition);
renderer.addValue('Removal', removal);
renderer.addValue('No Change', noChange);
renderer.addValue('Reclassification to System Unit', reclassSu);
renderer.addValue('Reclassification to OPA', reclassOpa);

// Existing polygons symbolized
var defaultSymbol =
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL,
        new Color([85,255,0,1])),new Color([85,255,0,0.54]));

var systemUnit = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
        new Color([255,0,0,0.25])),new Color([255,0,0,0.25]));

var otherwiseProtected = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
        new Color([190,225,232,1])),new Color([255,0,0,0.25]));

var rendererExisting = new UniqueValueRenderer(defaultSymbol, "Unit_Type");

rendererExisting.addValue('System Unit', systemUnit);
rendererExisting.addValue('Otherwise Protected Area', otherwiseProtected);



    allLayers = [
        {
            'groupHeading': 'ESRI dynamic map services',
            'showGroupHeading': false,
            'includeInLayerList': true,
            'layers': {
                'Existing Polygons' : {
                    'url': 'https://services1.arcgis.com/Hp6G80Pky0om7QvQ/ArcGIS/rest/services/Project_Mapper_data/FeatureServer/1?token=ZV7De1_cJp2l04OTOiQSSg4l3isB4h0QvROkZlw1L8OS-8MOpX6jREyHo6ZII8mjzFfZi9Nu-7mV3tdxRRNV9G0wVi9jXrH5Vtqp3SjPTjz5YymCG-lmENwM10PIZtwUck0x5uqvDfwzyExqn7jcbFeNitIEqrB9JriPUjuiZaBQVVVF6TImBZaAe7tR8r7emDsqFlZvj1MIXgJ-SKiutbivEHLAZGTjY98suNUx-s4.',
                    'visibleLayers': [1],
                    'options': {
                        'id': 'existingPoly',
                        'opacity': 0.75,
                        'visible': false
                    },
                    'wimOptions': {
                        'type': 'layer',
                        'layerType': 'agisFeature',
                        'includeInLayerList': true,
                        'exclusiveGroupName':"Layers",
                        'zoomScale': 144448,
                        'hasOpacitySlider': true,
                        'includeLegend' : true
                    }
                },
                    'Revised Polygons' : {
                    'url': 'https://services1.arcgis.com/Hp6G80Pky0om7QvQ/ArcGIS/rest/services/Project_Mapper_data/FeatureServer/0?token=ZV7De1_cJp2l04OTOiQSSg4l3isB4h0QvROkZlw1L8OS-8MOpX6jREyHo6ZII8mjzFfZi9Nu-7mV3tdxRRNV9G0wVi9jXrH5Vtqp3SjPTjz5YymCG-lmENwM10PIZtwUck0x5uqvDfwzyExqn7jcbFeNitIEqrB9JriPUjuiZaBQVVVF6TImBZaAe7tR8r7emDsqFlZvj1MIXgJ-SKiutbivEHLAZGTjY98suNUx-s4.',
                    'options': {
                        'id': 'revisedPoly',
                        'opacity': 0.75,
                        'visible': false
                    },
                    'wimOptions': {
                        'type': 'layer',
                        'layerType': 'agisFeature',
                        'includeInLayerList': true,
                        'exclusiveGroupName':"Layers",
                        'zoomScale': 144448,
                        'hasOpacitySlider': true,
                        'includeLegend' : true,
                    }
                },
                    'Change Polygons' : {
                    'url': 'https://services1.arcgis.com/Hp6G80Pky0om7QvQ/ArcGIS/rest/services/Project_Mapper_data/FeatureServer/2?token=ZV7De1_cJp2l04OTOiQSSg4l3isB4h0QvROkZlw1L8OS-8MOpX6jREyHo6ZII8mjzFfZi9Nu-7mV3tdxRRNV9G0wVi9jXrH5Vtqp3SjPTjz5YymCG-lmENwM10PIZtwUck0x5uqvDfwzyExqn7jcbFeNitIEqrB9JriPUjuiZaBQVVVF6TImBZaAe7tR8r7emDsqFlZvj1MIXgJ-SKiutbivEHLAZGTjY98suNUx-s4.',
                    'visibleLayers': [2],
                    'options': {
                        'id': 'changePoly',
                        'opacity': 0.75,
                        'visible': true
                    },
                    'wimOptions': {
                        'type': 'layer',
                        'layerType': 'agisFeature',
                        'includeInLayerList': true,
                        'exclusiveGroupName':"Layers",
                        'zoomScale': 144448,
                        'hasOpacitySlider': true,
                        'includeLegend' : true,
                        'renderer': renderer
                    },
                    'polygons' : {
                    'url': 'https://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/projectMapper/FeatureServer/?token=22TP-iUfNlwcovRXCEItcUtA_xPAaXHyjKw5AcGI10EvAflVSGY5j1REuzXggCpioVmy9tu21teUttdS8EohEbH6BtvZASplogVGuNpDcwxPQsiyn2aS8YUTgcQJcgDhU5S45WXQVdncnkpMFr5asywlK3rJBQUdnLwLoorplZHpYmDugyZ6xU57ify-mqR0BQVfPnXPk8s8_PvqXX6McA..',
                    'visibleLayers': [0],
                    'options': {
                        'id': 'polygons',
                        'opacity': 0.75,
                        'visible': false
                    },
                    'wimOptions': {
                        'type': 'layer',
                        'layerType': 'agisFeature',
                        'includeInLayerList': true,
                        'exclusiveGroupName':"Layers",
                        'zoomScale': 144448,
                        'hasOpacitySlider': true,
                        'includeLegend' : false
                    },
                    }
                }
            }   
        }
    ];
 
});