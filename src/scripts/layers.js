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

var defaultSymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([255,0,0]), 2),new Color([255,255,0,0.25]));

        //create renderer
        var renderer = new UniqueValueRenderer(defaultSymbol, "Change_Type");

var addition = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([0,255,0]), 2),new Color([255,255,0,0.25]));
        
var removal = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        new Color([0,0,255]), 2),new Color([255,255,0,0.25]));

renderer.addValue('Addition', addition);
renderer.addValue('Removal', removal);

    allLayers = [
        {
            'groupHeading': 'ESRI dynamic map services',
            'showGroupHeading': false,
            'includeInLayerList': true,
            'layers': {
                'Existing Polygons' : {
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/updated_projects_data/FeatureServer/1?token=LNV_o8vDaQJtNMZfphMbdYtv66qKDC1pmRkNCOoSlvDkDK0g2oeq-eVy16RU3hy-OuQveAO6yldhMS5r-_9TtVSTe6BtGJkyPPnQgIwd2MsZnkatJ3OR3dKrrNg4L1WqrnwHUDAlP1FjowIkgHNj5_ertyQN7Sh5LiENHB9DUWElT4rd3CY6HjR9YqoUeWipPUYswYvP01xqGUa4JV8YSA..',
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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/updated_projects_data/FeatureServer/2?token=LNV_o8vDaQJtNMZfphMbdYtv66qKDC1pmRkNCOoSlvDkDK0g2oeq-eVy16RU3hy-OuQveAO6yldhMS5r-_9TtVSTe6BtGJkyPPnQgIwd2MsZnkatJ3OR3dKrrNg4L1WqrnwHUDAlP1FjowIkgHNj5_ertyQN7Sh5LiENHB9DUWElT4rd3CY6HjR9YqoUeWipPUYswYvP01xqGUa4JV8YSA..',
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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/updated_projects_data/FeatureServer/0?token=LNV_o8vDaQJtNMZfphMbdYtv66qKDC1pmRkNCOoSlvDkDK0g2oeq-eVy16RU3hy-OuQveAO6yldhMS5r-_9TtVSTe6BtGJkyPPnQgIwd2MsZnkatJ3OR3dKrrNg4L1WqrnwHUDAlP1FjowIkgHNj5_ertyQN7Sh5LiENHB9DUWElT4rd3CY6HjR9YqoUeWipPUYswYvP01xqGUa4JV8YSA..',
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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/projectMapper/FeatureServer/?token=GWQZpQqimeHi_yFRbXxz-5ca6eNeillh596AOSghDnUyDOCiPGRocNJsBx4DMLGJhhj7XQU2RFH1IiSH-Y6pLV3Idx2miPH9mGT51zCWnPLGLtfY9ugflEFTUM0WStls9tqQQX6Dk3oyb8EhFVpPjmmgUEQXQcWxM8vHVA5_1811Rzy9cy0gaXEJOHUU5awkYS0_Cp9cf4cUmTu1T4AzEQ..',
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