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

<<<<<<< HEAD
/*var defaultSymbol = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([255,225,225]), 2),new Color([255,255,0,0.25]));

var addition = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([0,255,0]), 2),new Color([255,255,0,0.25]));
        
var removal = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([0,0,255]), 2),new Color([255,255,0,0.25]));

var noChange = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
=======
var defaultSymbol = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
        new Color([0,255,0]), 2),new Color([255,255,0,2]));

var addition = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_BACKWARD_DIAGONAL,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
        new Color([61,196,255]), 2),new Color([61,196,255,2]));
        
var removal = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_BACKWARD_DIAGONAL,
>>>>>>> f6106738260f7b60708e71d103073c929f17b094
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([225,0,0]), 2),new Color([255,0,0,2]));

var noChange = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL,
        new Color([0,255,0]), 2),new Color([255,255,0,2]));

var reclassOpa = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL,
        new Color([38, 115, 0]), 2),new Color([38, 115, 0, 0.25]));

var reclassSu = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL,
        new Color([255,0,0,0.25])),new Color([255,0,0,0.25]));

//create renderer
var renderer = new UniqueValueRenderer(defaultSymbol, "Change_Type");

var reclassOpa = 
        new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([0,0,255]), 2),new Color([255,255,0,0.25]));

var reclassSu = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([0,0,255]), 2),new Color([255,255,0,0.25]));

//create renderer
var renderer = new UniqueValueRenderer(defaultSymbol, "Change_Type");

renderer.addValue('Addition', addition);
renderer.addValue('Removal', removal);
renderer.addValue('No Change', noChange);
<<<<<<< HEAD
renderer.addValue('Reclassification to System Unit', reclassSu);
renderer.addValue('Reclassification to OPA', reclassOpa);*/
=======
renderer.addValue('Reclassification to OPA', reclassOpa);
renderer.addValue('Reclassification to System Unit', reclassSu);
>>>>>>> f6106738260f7b60708e71d103073c929f17b094

    allLayers = [
        {
            'groupHeading': 'ESRI dynamic map services',
            'showGroupHeading': false,
            'includeInLayerList': true,
            'layers': {
                'Existing Polygons' : {
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/updated_projects_data/FeatureServer/1?token=22TP-iUfNlwcovRXCEItcUtA_xPAaXHyjKw5AcGI10EvAflVSGY5j1REuzXggCpioVmy9tu21teUttdS8EohEbH6BtvZASplogVGuNpDcwxPQsiyn2aS8YUTgcQJcgDhU5S45WXQVdncnkpMFr5asywlK3rJBQUdnLwLoorplZHpYmDugyZ6xU57ify-mqR0BQVfPnXPk8s8_PvqXX6McA..',
                    'visibleLayers': [1],
                    'options': {
                        'id': 'existingPoly',
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
                        'includeLegend' : true
                    }
                },
                    'Revised Polygons' : {
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/updated_projects_data/FeatureServer/2?token=22TP-iUfNlwcovRXCEItcUtA_xPAaXHyjKw5AcGI10EvAflVSGY5j1REuzXggCpioVmy9tu21teUttdS8EohEbH6BtvZASplogVGuNpDcwxPQsiyn2aS8YUTgcQJcgDhU5S45WXQVdncnkpMFr5asywlK3rJBQUdnLwLoorplZHpYmDugyZ6xU57ify-mqR0BQVfPnXPk8s8_PvqXX6McA..',
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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/updated_projects_data/FeatureServer/0?token=22TP-iUfNlwcovRXCEItcUtA_xPAaXHyjKw5AcGI10EvAflVSGY5j1REuzXggCpioVmy9tu21teUttdS8EohEbH6BtvZASplogVGuNpDcwxPQsiyn2aS8YUTgcQJcgDhU5S45WXQVdncnkpMFr5asywlK3rJBQUdnLwLoorplZHpYmDugyZ6xU57ify-mqR0BQVfPnXPk8s8_PvqXX6McA..',
                    'visibleLayers': [0],
                    'options': {
                        'id': 'changePoly',
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
                        'renderer': renderer
                    },
                    'polygons' : {
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/projectMapper/FeatureServer/?token=22TP-iUfNlwcovRXCEItcUtA_xPAaXHyjKw5AcGI10EvAflVSGY5j1REuzXggCpioVmy9tu21teUttdS8EohEbH6BtvZASplogVGuNpDcwxPQsiyn2aS8YUTgcQJcgDhU5S45WXQVdncnkpMFr5asywlK3rJBQUdnLwLoorplZHpYmDugyZ6xU57ify-mqR0BQVfPnXPk8s8_PvqXX6McA..',
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