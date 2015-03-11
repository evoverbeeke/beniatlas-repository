////////////////////////////////////////////////////
                    //VIEWS//
////////////////////////////////////////////////////

var world = new ol.View({
    projection: 'EPSG:4326',
    center: [0, 0],
    zoom: 1.5,
    minZoom: 1,
    maxZoom: 3
    });
var drc = new ol.View({
    projection: 'EPSG:4326',
    center: [23.65, -3.02],
    zoom: 5
    });
var northkivu = new ol.View({
    projection: 'EPSG:4326',
    center: [28.69, -0.60],
    zoom: 7.4
    });
var beniregion = new ol.View({
    projection: 'EPSG:4326',
    center: [29.53, 0.42],
    zoom: 9
    });
var benicity = new ol.View({
    projection: 'EPSG:4326',
    center: [29.46, 0.50],
    zoom: 13
    });

////////////////////////////////////////////////////
                    //BUTTONS//
////////////////////////////////////////////////////

var method_aggregate = document.getElementById('method_aggregate');
var method_collect = document.getElementById('method_collect');
var method_network = document.getElementById('method_network');
var method_play = document.getElementById('method_play');

var place_world = document.getElementById('place_world');
var place_drc = document.getElementById('place_drc');
var place_northkivu = document.getElementById('place_northkivu');
var place_beniregion = document.getElementById('place_beniregion');
var place_benicity = document.getElementById('place_benicity');
var place_quarters = document.getElementById('place_quarters');

var layer_in = document.getElementById('layer_in');
var layer_fo = document.getElementById('layer_fo');
var layer_ag = document.getElementById('layer_ag');
var layer_mi = document.getElementById('layer_mi');
var layer_co = document.getElementById('layer_co');
var layer_ai = document.getElementById('layer_ai');
var layer_cu = document.getElementById('layer_cu');
var layer_po = document.getElementById('layer_po');

////////////////////////////////////////////////////
                    //STYLES//
////////////////////////////////////////////////////

//GREY FILL STYLE
var greyStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: '#D8DAD9',
        })
    });

//BLACK OUTLINE STYLE
var outlineStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'black',
        width: 1
        })
    });
    
//BLACK OUTLINE 2 STYLE
var outline2Style = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'black',
        width: 2
        })
    });

////////////////////////////////////////////////////
                    //ADMIN LAYERS//
////////////////////////////////////////////////////

//ADMINISTRATIVE WORLD LAYER
var worldLayer = new ol.layer.Vector({
    title: 'World',
    source: new ol.source.GeoJSON({
        url: 'data/admin_world.geojson'
        }),
    style: greyStyle
    });

//ADMINISTRATIVE DRC LAYER
var drcLayer = new ol.layer.Vector({
    title: 'Democratic Republic of Congo',
    source: new ol.source.GeoJSON({
        url: 'data/admin_drc.geojson'
        }),
    style: greyStyle
    });
    
//ADMINISTRATIVE NORTH KIVU LAYER
var northkivuLayer = new ol.layer.Vector({
    title: 'North Kivu',
    source: new ol.source.GeoJSON({
        url: 'data/admin_northkivu.geojson'
        }),
    style: outlineStyle
    });
    
//ADMINISTRATIVE NORTH KIVU DIVIDED LAYER
var northkivu2Layer = new ol.layer.Vector({
    title: 'North Kivu',
    source: new ol.source.GeoJSON({
        url: 'data/admin_northkivu_div.geojson'
        }),
    style: greyStyle
    });
    
//ADMINISTRATIVE BENI REGION LAYER
var beniregionLayer = new ol.layer.Vector({
    title: 'Beni Region',
    source: new ol.source.GeoJSON({
        url: 'data/admin_beniregion.geojson'
        }),
    style: greyStyle
    });
    
//ADMINISTRATIVE BENI POINT LAYER

//quartier boundaries layer
var quartiersLayer = new ol.layer.Image({
    source: new ol.source.ImageVector({
        source: new ol.source.GeoJSON({
            projection: 'EPSG:4326',
            url: 'data/quartiers.geojson'
            }),
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color:'black',
                width: 2
                })
            })
        })
    });

//roads layer
var roadsLayer = new ol.layer.Vector({
    title: 'Roads',
    source: new ol.source.GeoJSON({
        url: 'data/roads.json'
        }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'grey',
            width: 2
            })
        })
    });
   
//roads layer white
var roads2Layer = new ol.layer.Vector({
    title: 'Roads',
    source: new ol.source.GeoJSON({
        url: 'data/roads.json'
        }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'white',
            width: 1
            })
        })
    });
    
//primary roads layer
var roads_primaryLayer = new ol.layer.Vector({
    title: 'Roads Primary',
    source: new ol.source.GeoJSON({
        url: 'data/roads_primary.json'
        }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'grey',
            width: 3
            })
        })
    });

////////////////////////////////////////////////////
                    //LAYER GROUPS//
////////////////////////////////////////////////////

var group_world = new ol.layer.Group({
    layers: [worldLayer, drcLayer]
    });
    
var group_drc = new ol.layer.Group({
    layers: [drcLayer, northkivuLayer]
    });
    
var group_northkivu = new ol.layer.Group({
    layers: [northkivu2Layer, beniregionLayer]
    });
    
var group_beniregion = new ol.layer.Group({
    layers: [beniregionLayer]
    });
    
var group_benicity = new ol.layer.Group({
    layers: [roadsLayer, roads2Layer, roads_primaryLayer]
    });



////////////////////////////////////////////////////
                    //MENU BUTTON FUNCTIONS//
////////////////////////////////////////////////////

$(document).ready(function() {

    /*var selected = src*/

    //IMAGE SWAP FOR ICONS
    $(".img-swap").live('click', function() {
        if ($(this).attr("class") == "img-swap") {
            this.src = this.src.replace("_off","_on");
        } else {
            this.src = this.src.replace("_on","_off");
        }
        $(this).toggleClass("on");
        });

    //SHOW ONLY ICONS APPLICABLE TO AGGREGATE METHOD
    $('#method_aggregate').on('click', function() {
        $('#place_world').show();
        $('#place_drc').show();
        $('#place_northkivu').show();
        $('#place_beniregion').show();
        $('#place_benicity').show();
        $('#place_quarters').show();
        });

    //DESCRIPTION OF AGGREGATE METHOD ON HOVER        
    $(function () {
        $('#method_aggregate').hover(function () {
            var description = "Look at maps from different sources"
            $('#method').html(description);
            }, function () {
                $('#method').empty();
            });
        });
        
    //SHOW ONLY ICONS APPLICABLE TO COLLECT METHOD 
    $('#method_collect').on('click', function() {
        $('#place_world').hide();
        $('#place_drc').hide();
        $('#place_northkivu').hide();
        $('#place_beniregion').hide();
        $('#place_benicity').show();
        $('#place_quarters').show();
        });
        
    //DESCRIPTION OF COLLECT METHOD ON HOVER      
    $(function () {
        $('#method_collect').hover(function () {
            var description = "Contribute to the map"
            $('#method').html(description);
            }, function () {
                $('#method').empty();
            });
        });
        
    //SHOW ONLY ICONS APPLICABLE TO NETWORK METHOD
    $('#method_network').on('click', function() {
        $('#place_world').hide();
        $('#place_drc').hide();
        $('#place_northkivu').hide();
        $('#place_beniregion').hide();
        $('#place_benicity').show();
        $('#place_quarters').show();
        });
        
    //DESCRIPTION OF NETWORK METHOD ON HOVER      
    $(function () {
        $('#method_network').hover(function () {
            var description = "Connect with people"
            $('#method').html(description);
            }, function () {
                $('#method').empty();
            });
        });
        
    //SHOW ONLY ICONS APPLICABLE TO PLAY METHOD
    $('#method_play').on('click', function() {
        $('#place_world').hide();
        $('#place_drc').hide();
        $('#place_northkivu').hide();
        $('#place_beniregion').show();
        $('#place_benicity').hide();
        $('#place_quarters').show();
        });
        
    //DESCRIPTION OF NETWORK METHOD ON HOVER      
    $(function () {
        $('#method_play').hover(function () {
            var description = "Play a simulation"
            $('#method').html(description);
            }, function () {
                $('#method').empty();
            });
        });

    //CHANGE VIEW TO WORLD ON CLICK
    $('#place_world').on('click', function() {
        drcLayer.setStyle(outlineStyle);
        map.setView(world);
        map.setLayerGroup(group_world);
        });
        
    //DESCRIPTION OF WORLD ON HOVER      
    $(function () {
        $('#place_world').hover(function () {
            var description = "World"
            $('#place').html(description);
            }, function () {
                $('#place').empty();
            });
        });
        
    //CHANGE VIEW TO DRC ON CLICK
    $('#place_drc').on('click', function() {
        drcLayer.setStyle(greyStyle);
        northkivuLayer.setStyle(outlineStyle);
        map.setView(drc);
        map.setLayerGroup(group_drc);
        });
        
    //DESCRIPTION OF DRC ON HOVER      
    $(function () {
        $('#place_drc').hover(function () {
            var description = "Democratic Republic of Congo"
            $('#place').html(description);
            }, function () {
                $('#place').empty();
            });
        });
        
    //CHANGE VIEW TO NORTH KIVU ON CLICK
    $('#place_northkivu').on('click', function() {
        northkivuLayer.setStyle(greyStyle);
        beniregionLayer.setStyle(outline2Style);
        map.setView(northkivu);
        map.setLayerGroup(group_northkivu);
        });
        
    //DESCRIPTION OF NORTH KIVU ON HOVER      
    $(function () {
        $('#place_northkivu').hover(function () {
            var description = "North Kivu"
            $('#place').html(description);
            }, function () {
                $('#place').empty();
            });
        });
        
    //CHANGE VIEW TO BENI REGION ON CLICK
    $('#place_beniregion').on('click', function() {
        beniregionLayer.setStyle(greyStyle);
        map.setView(beniregion);
        map.setLayerGroup(group_beniregion);
        });
        
    //DESCRIPTION OF BENI REGION ON HOVER      
    $(function () {
        $('#place_beniregion').hover(function () {
            var description = "Beni Region"
            $('#place').html(description);
            }, function () {
                $('#place').empty();
            });
        });
        
    //CHANGE VIEW TO BENI CITY ON CLICK
    $('#place_benicity').on('click', function() {
        map.setView(benicity);
        map.setLayerGroup(group_benicity);
        map.removeLayer(quartiersLayer);
        });
        
    //DESCRIPTION OF BENI CITY ON HOVER      
    $(function () {
        $('#place_benicity').hover(function () {
            var description = "Beni"
            $('#place').html(description);
            }, function () {
                $('#place').empty();
            });
        });
    
    //SHOW QUARTIER BOUNDARIES
    $('#place_quarters').on('click', function() {
        map.setView(benicity);
        map.setLayerGroup(group_benicity);
        map.addLayer(quartiersLayer);
        });
    });
    
    //DESCRIPTION OF BENI CITY ON HOVER      
    $(function () {
        $('#place_quarters').hover(function () {
            var description = "Neighbourhoods"
            $('#place').html(description);
            }, function () {
                $('#place').empty();
            });
        });

    //DESCRIPTION OF INFRASTRUCTURE LAYER ON HOVER      
    $(function () {
        $('#layer_in').hover(function () {
            var description = "Infrastructure"
            $('#layer').html(description);
            }, function () {
                $('#layer').empty();
            });
        });
        
    //DESCRIPTION OF FORESTRY LAYER ON HOVER      
    $(function () {
        $('#layer_fo').hover(function () {
            var description = "Forestry"
            $('#layer').html(description);
            }, function () {
                $('#layer').empty();
            });
        });

    //DESCRIPTION OF AGRICULTURE LAYER ON HOVER      
    $(function () {
        $('#layer_ag').hover(function () {
            var description = "Agriculture"
            $('#layer').html(description);
            }, function () {
                $('#layer').empty();
            });
        });
        
    //DESCRIPTION OF MINING LAYER ON HOVER      
    $(function () {
        $('#layer_mi').hover(function () {
            var description = "Mining"
            $('#layer').html(description);
            }, function () {
                $('#layer').empty();
            });
        });

    //DESCRIPTION OF CONFLICT LAYER ON HOVER      
    $(function () {
        $('#layer_co').hover(function () {
            var description = "Conflict"
            $('#layer').html(description);
            }, function () {
                $('#layer').empty();
            });
        });
        
    //DESCRIPTION OF AID LAYER ON HOVER      
    $(function () {
        $('#layer_ai').hover(function () {
            var description = "Aid"
            $('#layer').html(description);
            }, function () {
                $('#layer').empty();
            });
        });
        
    //DESCRIPTION OF CULTURE LAYER ON HOVER      
    $(function () {
        $('#layer_cu').hover(function () {
            var description = "Culture"
            $('#layer').html(description);
            }, function () {
                $('#layer').empty();
            });
        });
        
    //DESCRIPTION OF POPULATION LAYER ON HOVER      
    $(function () {
        $('#layer_po').hover(function () {
            var description = "Population"
            $('#layer').html(description);
            }, function () {
                $('#layer').empty();
            });
        });
        
////////////////////////////////////////////////////
                    //LEGEND FUNCTIONS//
////////////////////////////////////////////////////

