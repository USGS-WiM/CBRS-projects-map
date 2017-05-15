/**
 * Created by bdraper on 4/27/2015.
 */
var allLayers;
var renderer;

require([
    'esri/InfoTemplate',
    'esri/renderers/UniqueValueRenderer',
    'esri/symbols/PictureMarkerSymbol',
    'dojo/domReady!'
], function(
    InfoTemplate,
    UniqueValueRenderer,
    PictureMarkerSymbol
) {

    var defaultSymbol = new PictureMarkerSymbol("./images/grn-pushpin.png", 45, 45);

    renderer = new UniqueValueRenderer(defaultSymbol);

    var template = new InfoTemplate("${NAME}",
        "Type: ${TYPE}<br/>" +
        "Ramsar: <a id='ramsarLink' target='_blank' href='${HYPERLINK_2}'>click here</a><br/>" +
        "Location Website: <a target='_blank' href='${HYPERLINK}'>click here</a><br/>" +
        "Water Summary Report: <a target='_blank' href='${WATER_SUMMARY_REPORT}'>click here</a><br/>" +
        "Wildlife Action Plan: <a target='_blank' href='${STATE_ACTION_PLAN}'>click here</a><br/>"
    )

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
                        'includeLegend' : true
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