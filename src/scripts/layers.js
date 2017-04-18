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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/arcgis/rest/services/Project_Mapper_data/FeatureServer/2?token=Kamfb48mpliVW1S95aA2zmCs5-GfA1-HEIhGfzBm5KLcU8PJzynE8vvr9oW64AQY0D8aqPJhCR6iJEJ4eta2oK9bTGPSpiqaBLAktXUrMhqTbzHEA6a5dQjwsJI6HF2YPdeKS0U-9cYxKZZTEzfFvbr32k2wtDyz4bE-4VZ6MKdxoXRBGNIOHML0GRrBtqj1tAdm9_UcqGntlG5dTeRwsA..',
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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/arcgis/rest/services/Project_Mapper_data/FeatureServer/1?token=Koo90VafsD2qYdfE-B1uyJs_inAk_iE973eXtv8hbSU_Ods0QVxkk6HZazVIQOTFjMa9PVposvenLaV7nvsR65KercO2Lbp3IqST2lQmzPyJNus6z_16GPv8KrZbnqI44d5NPMo67vEyf2zNOTL9dmXMBJ41eo6sECcxAUxcnyBkuhKBPL1Csax7QtE-YKyURbsC3Hs-kM-fKvUi_dWlbA..',
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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/Project_Mapper_data/FeatureServer/0?token=-LLJ4CSW25LsRmUH1My5eFqylf0GsfZFXZ67IyundjVzXtSs3ky57YdN4-Qq9sXE4bI3fxHHFmGDuWuI8_Xd5h9TArLbhpOwGi5oCVpMU-6fi-yz9gCEsImLzcTvIh5LAgm_q-rNPNLwR0no9o6QBoEfW_FSQx_4vDtRC3JVcQlJGp1KfFmv_6qMzF2tuyuT59NmuiWaI03K-yKabKKcgg..',
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
                    'url': 'http://services.arcgis.com/v01gqwM5QqNysAAi/ArcGIS/rest/services/Project_Mapper_data/FeatureServer?token=-LLJ4CSW25LsRmUH1My5eFqylf0GsfZFXZ67IyundjVzXtSs3ky57YdN4-Qq9sXE4bI3fxHHFmGDuWuI8_Xd5h9TArLbhpOwGi5oCVpMU-6fi-yz9gCEsImLzcTvIh5LAgm_q-rNPNLwR0no9o6QBoEfW_FSQx_4vDtRC3JVcQlJGp1KfFmv_6qMzF2tuyuT59NmuiWaI03K-yKabKKcgg..',
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