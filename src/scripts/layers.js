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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/Project_Mapper_data/FeatureServer/2?token=sD5BjzEiPRE_epJPnngUcl6RuDFx74E8pPRNhkbnaf70ttMmtKWr0P8q-psk0EYaJi-u8sOy1nVlQiMwrE3YMa_d9ZkeDeHgYhjuXQC8dZwa_6PCBu1CbCRf7E5wNe-RG5OnJ9QLMpPFeroZR_G6DBQL8ZQPDZPIlf9Avf5fZORQyT-_r0HVpjbO3YDfaZvI5kFAl_HAbf-CfoBoZBfMpQ..',
                    'visibleLayers': [0],
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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/Project_Mapper_data/FeatureServer/1?token=sD5BjzEiPRE_epJPnngUcl6RuDFx74E8pPRNhkbnaf70ttMmtKWr0P8q-psk0EYaJi-u8sOy1nVlQiMwrE3YMa_d9ZkeDeHgYhjuXQC8dZwa_6PCBu1CbCRf7E5wNe-RG5OnJ9QLMpPFeroZR_G6DBQL8ZQPDZPIlf9Avf5fZORQyT-_r0HVpjbO3YDfaZvI5kFAl_HAbf-CfoBoZBfMpQ..',
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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/arcgis/rest/services/symbolizedChangePolys/FeatureServer/0?token=wk1h7tozSEJ1XK7lybWNuSJJTEsrVmwlw3wO8TCcPwi8fQ7ug7z8IaMvShmrWeEYnRy4R3VukH_pc0uUBlVKDMiYxSS7RaseDl4G39b4WSgIBXXgw6fT0iHdjTOoStc8ZpxF26A8eGoh1TJc3qVghdxHNXv9CD4u3ew1OoPyUc51yHsT_Gc51FiRxgh3AwjjIBoAjEGf93jwww8NkiBzZw..',
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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/Project_Mapper_data/FeatureServer/?token=sD5BjzEiPRE_epJPnngUcl6RuDFx74E8pPRNhkbnaf70ttMmtKWr0P8q-psk0EYaJi-u8sOy1nVlQiMwrE3YMa_d9ZkeDeHgYhjuXQC8dZwa_6PCBu1CbCRf7E5wNe-RG5OnJ9QLMpPFeroZR_G6DBQL8ZQPDZPIlf9Avf5fZORQyT-_r0HVpjbO3YDfaZvI5kFAl_HAbf-CfoBoZBfMpQ..',
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