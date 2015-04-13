////////////////////////////////////////////////////
                    //VIEWS//
////////////////////////////////////////////////////

var world = new ol.View({//WORLD VIEW
    projection: 'EPSG:4326',
    center: [0, 0],
    zoom: 1.5,
    minZoom: 1,
    maxZoom: 3
    });

var drc = new ol.View({//DRC VIEW
    projection: 'EPSG:4326',
    center: [23.65, -3.02],
    zoom: 5
    });

var northkivu = new ol.View({//NORTH KIVU VIEW
    projection: 'EPSG:4326',
    center: [28.69, -0.60],
    zoom: 7.4
    });

var beniregion = new ol.View({//BENI REGION VIEW
    projection: 'EPSG:4326',
    center: [29.53, 0.42],
    zoom: 9
    });

var benicity = new ol.View({//BENI CITY VIEW
    projection: 'EPSG:4326',
    center: [29.46, 0.50],
    zoom: 13
    });

////////////////////////////////////////////////////
                    //SOURCES//
////////////////////////////////////////////////////

var worldSource = new ol.source.GeoJSON({//WORLD ADMIN SOURCE
    url: 'data/admin_world_test.geojson',
    projection: 'EPSG:4326'
    });

var drcSource = new ol.source.GeoJSON({//DRC ADMIN SOURCE
    url: 'data/admin_drc.geojson',
    projection: 'EPSG:4326'
    });

var drcdivSource = new ol.source.GeoJSON({//DRC DIVIDED ADMIN SOURCE
    url: 'data/admin_drc_div.geojson',
    projection: 'EPSG:4326'
    });

var nkivuSource = new ol.source.GeoJSON({//NORTH KIVU ADMIN SOURCE
    url: 'data/admin_northkivu.geojson',
    projection: 'EPSG:4326'
    });

var nkivudivSource = new ol.source.GeoJSON({//NORTH KIVU DIVIDED ADMIN SOURCE
    url: 'data/admin_northkivu_div.geojson',
    projection: 'EPSG:4326'
    });

var beni_rSource = new ol.source.GeoJSON({//BENI REGION ADMIN SOURCE
    url: 'data/admin_beniregion.geojson',
    projection: 'EPSG:4326'
    });

var beni_c_quartiersSource = new ol.source.GeoJSON({//BENI QUARTIER BOUNDARIES SOURCE
    url: 'data/quartiers_test.geojson',
    projection: 'EPSG:4326'
    });

var beni_c_roadsSource = new ol.source.GeoJSON({//BENI ROADS SOURCE
    url: 'data/roads.json',
    projection: 'EPSG:4326'
    });

var beni_c_roadspSource = new ol.source.GeoJSON({//BENI PRIMARY ROADS SOURCE
    url: 'data/roads_primary.json',
    projection: 'EPSG:4326'
    });

var drc_coSource = new ol.source.GeoJSON({//DRC CONFLICT SOURCE
    url: 'data/conflict_test.geojson',
    projection: 'EPSG:4326'
    });

var beni_c_cuSource = new ol.source.GeoJSON({//BENICITY CULTURE SOURCE
    url: 'data/culture_test.geojson',
    projection: 'EPSG:4326'
    });



////////////////////////////////////////////////////
                    //STYLES//
////////////////////////////////////////////////////

//GREY FILL STYLE
var greyStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: '#D8DAD9',
        }),
    stroke: new ol.style.Stroke({
        color: 'white',
        width: 0.5
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

//POINT STYLE CONFLICT
var drc_coStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 4,
        fill: new ol.style.Fill({
            color: '#ff9900',
            }),
        stroke: new ol.style.Stroke({
            color: 'rgba(20,130,150,0.8)',
            width: 1
            })
        })
    });

//POINT STYLE CULTURE
var beni_c_cuStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 4,
        fill: new ol.style.Fill({
            color: '#ff9900',
            }),
        stroke: new ol.style.Stroke({
            color: 'rgba(20,130,150,0.8)',
            width: 1
            })
        })
    });

var drc_coHiStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 10,
        fill: new ol.style.Fill({
            color: 'rgba(150,150,200,0.6)',
            }),
        stroke: new ol.style.Stroke({
            color: 'rgba(20,30,100,0.8)',
            width: 3
            })
        })
    });

////////////////////////////////////////////////////
                    //FONT STYLE FUNCTIONS//
////////////////////////////////////////////////////

var quartiertextStyleFunction = function(feature, resolution) {
    var fontSize = '18';
    if(resolution>=39134) {
        fontSize = '10';
        } else if(resolution>=9782) {
        fontSize = '14';
        } else if(resolution>=2444) {
        fontSize = '16';
        }
    return [new ol.style.Style({
        text: new ol.style.Text({
            font: '14px sans-serif,helvetica',
            text: feature.get('name'),
            fill: new ol.style.Fill({
                color: 'black'
                }),
            stroke: new ol.style.Stroke({
                color: '#ddd',
                width: 1
                })
            }),
        stroke: new ol.style.Stroke({
            color: 'black',
            width: 1
            })
        })];
    };



////////////////////////////////////////////////////
                    //STYLE FUNCTIONS//
////////////////////////////////////////////////////

var selectedTextStyleFunction = function(name) {
    return new ol.style.Style({
        text: new ol.style.Text({
            font: '14px helvetica,sans-serif',
            text: name,
            fill: new ol.style.Fill({
                color: '#000'
                }),
            stroke: new ol.style.Stroke({
                color: '#fff',
                width: 2
                })
            })
        });
    };


////////////////////////////////////////////////////
                    //CHLOROPLETH FUNCTION//
////////////////////////////////////////////////////

    //STYLE FUNCTION FOR CONFLICT
    var world_coStyle = (function () {
        var defaultStyle = new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#D8DAD9',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            });

        var veryhighStyle = new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#48956E',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            });
        var highStyle = new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#97B39E',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            });
        var mediumStyle = new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#020100',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            });
        var lowStyle = new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#D97936',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            });
        var verylowStyle = new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#C53E59',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            });

        return function(feature, resolution) {
            var getIndex = feature.get("peace_test");
            var peaceIndex = parseInt(getIndex);
            peaceIndex.toFixed(2);
            if (peaceIndex >= 1.0 && peaceIndex < 1.5) {
                return veryhighStyle;
            } else if (peaceIndex >= 1.5 && peaceIndex < 2.0) {
                return highStyle;
            } else if (peaceIndex >= 2.0 && peaceIndex < 2.5) {
                return mediumStyle;
            } else if (peaceIndex >= 2.5 && peaceIndex < 3.0) {
                return lowStyle;
            } else if (peaceIndex > 3.0) {
                return verylowStyle;
            } else {
                return defaultStyle;
            }
        };
    });


////////////////////////////////////////////////////
                    //LAYERS//
////////////////////////////////////////////////////

var worldLayer = new ol.layer.Vector({//WORLD ADMIN LAYER
    source: worldSource,
    style: greyStyle
    });

var drcLayer = new ol.layer.Vector({//DRC ADMIN LAYER
    source: drcSource,
    style: outlineStyle
    });

var drcdivLayer = new ol.layer.Vector({//DRC DIVIDED ADMIN LAYER
    source: drcdivSource,
    style: greyStyle
    });

var nkivuLayer = new ol.layer.Vector({//NORTHKIVU ADMIN LAYER
    source: nkivuSource,
    style: outlineStyle
    });

var nkivudivLayer = new ol.layer.Vector({//NORTHKIVU DIVIDED ADMIN LAYER
    source: nkivudivSource,
    style: greyStyle
    });

var beni_rLayer = new ol.layer.Vector({//BENIREGION ADMIN LAYER
    source: beni_rSource,
    style: greyStyle
    });

//ADMINISTRATIVE BENI POINT LAYER

//quartier boundaries layer
var beni_c_quartiersLayer = new ol.layer.Vector({
    source: beni_c_quartiersSource,
    style: quartiertextStyleFunction
    });

//roads layer
var roadsLayer = new ol.layer.Vector({
    source: beni_c_roadsSource,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'grey',
            width: 2
            })
        })
    });

//roads layer white
var roads2Layer = new ol.layer.Vector({
    source: beni_c_roadsSource,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'white',
            width: 1
            })
        })
    });

//primary roads layer
var roads_primaryLayer = new ol.layer.Vector({
    source: beni_c_roadspSource,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'grey',
            width: 3
            })
        })
    });

// conflict world layer
var world_coLayer = new ol.layer.Vector({
    source: worldSource,
    style: world_coStyle
    });

// conflict drc layer
var drc_coLayer = new ol.layer.Vector({
    source: drc_coSource,
    style: drc_coStyle
    });

// culture benicity layer
var beni_c_cuLayer = new ol.layer.Vector({
    source: beni_c_cuSource,
    style: beni_c_cuStyle
    });



////////////////////////////////////////////////////
                    //LAYER GROUPS//
////////////////////////////////////////////////////

var group_world = new ol.layer.Group({
    layers: [worldLayer, drcLayer]
    });

var group_drc = new ol.layer.Group({
    layers: [drcdivLayer, nkivuLayer]
    });

var group_northkivu = new ol.layer.Group({
    layers: [nkivudivLayer, beni_rLayer]
    });

var group_beniregion = new ol.layer.Group({
    layers: [beni_rLayer]
    });

var group_benicity = new ol.layer.Group({
    layers: [roadsLayer, roads2Layer, roads_primaryLayer]
    });
    
var drc_coGroup = new ol.layer.Group({
    layers: [drc_coLayer]
    });

////////////////////////////////////////////////////
                    //INTERACTIONS//
////////////////////////////////////////////////////

//change to red when click
var selectInteraction = new ol.interaction.Select({
    layers: [beni_c_quartiersLayer, drcLayer, nkivuLayer],
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            width: 3,
            }),
        fill: new ol.style.Fill({
            color: 'rgba(0,0,255,0.1)',
            })
        })
    });

//change to blue when hover
var selectPointerMove = new ol.interaction.Select({
    layers: [beni_c_quartiersLayer, drcLayer, nkivuLayer],
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'red',
            width: 3,
            }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.1)',
            })
        }),
    condition: ol.events.condition.pointerMove
    });



//ZOOM TO EXTENTS
var zoomExtents = function(feature) {
    return feature;

    var minx = feature.get('MINX');
    var miny = feature.get('MINY');
    var maxx = feature.get('MAXX');
    var maxy = feature.get('MAXY');

    var minlon = parseInt($('minx').val());
    var minlat = parseInt($('miny').val());
    var maxlon = parseInt($('maxx').val());
    var maxlat = parseInt($('maxy').val());

    var extent = [minlon, minlat, maxlon, maxlat];
    extent = ol.extent.applyTransform(extent, ol.proj.getTransform("EPSG:4326", "EPSG:3857"));

    map.setView().calculateExtent(extent, map.getSize());
    };




////////////////////////////////////////////////////
                    //MENU BUTTON FUNCTIONS//
////////////////////////////////////////////////////

$(document).ready(function() {

    //IMAGE SWAP FOR ICONS
    /*$(".img-swap").live('click', function() {
        if ($(this).attr("class") == "img-swap") {
            this.src = this.src.replace("_off","_on");
        } else {
            this.src = this.src.replace("_on","_off");
        }
        $(this).toggleClass("on");
        });*/

    //SHOW ONLY ICONS APPLICABLE TO AGGREGATE METHOD
    $('#method_aggregate').on('click', function() {
        $('#place_world').show();
        $('#place_drc').show();
        $('#place_northkivu').show();
        $('#place_beniregion').show();
        $('#place_benicity').show();
        $('#place_quarters').show();
        $('#layer_co').show();
        });

    //DESCRIPTION OF AGGREGATE METHOD ON HOVER

    $('#method_aggregate').hover(function () {
        var description = "Look at maps from different sources"
        $('#method').html(description);
        }, function () {
            $('#method').empty();
        });


    //SHOW ONLY ICONS APPLICABLE TO COLLECT METHOD
    $('#method_collect').on('click', function() {
        $('#place_world').hide();
        $('#place_drc').hide();
        $('#place_northkivu').hide();
        $('#place_beniregion').hide();
        $('#place_benicity').show();
        $('#place_quarters').show();
        $('#layer_co').hide();
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
        $('#layer_co').hide();
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
        $('#layer_co').hide();
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

    //DESCRIPTION OF WORLD ON HOVER
    $(function () {
        $('#place_world').hover(function () {
            var description = "World"
            $('#place').html(description);
            }, function () {
                $('#place').empty();
            });
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
        nkivuLayer.setStyle(greyStyle);
        beni_rLayer.setStyle(outline2Style);
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
        beni_rLayer.setStyle(greyStyle);
        map.setView(beniregion);
        map.setLayerGroup(group_beniregion);
        });

    //DESCRIPTION OF BENI REGION ON HOVER
    $(function () {
        $('#place_beniregion').hover(function () {
            var description = "Beni Region"
            $('#place').html(description);
            },
            function () {
                $('#place').empty();
            });
        });

    //CHANGE VIEW TO BENI CITY ON CLICK
    $('#place_benicity').on('click', function() {
        map.setView(benicity);
        map.setLayerGroup(group_benicity);
        map.removeLayer(beni_c_quartiersLayer);
        var description = "Beni"
        $('#place').html(description);
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
        map.addLayer(beni_c_quartiersLayer);
        map.addInteraction(selectPointerMove);
        map.addInteraction(selectInteraction);
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
        

    //ADD CONFLICT LAYER ON CLICK
    $('#layer_co').on('click', function() {
        if ($(this).attr("id") == "layer_co") {
            if ($(this).src == "_off") {
                this.src = this.src.replace("_off","_on");
                map.addLayer(drc_coLayer);
            } else {
                this.src = this.src.replace("_on","_off");
                map.removeLayer(drc_coLayer);
                };
            };
        $(this).toggleClass("on");
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

    //ADD CULTURE LAYER ON CLICK
    $('#layer_cu').on('click', function() {
        map.addLayer(beni_c_cuLayer);
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
                    //BUTTON LOGIC//
////////////////////////////////////////////////////

    $('#place_world').on('click', function() {
        map.setView(world);
        map.setLayerGroup(group_world);
        map.addInteraction(selectPointerMove);
        map.addInteraction(selectInteraction);
        ('#place_world') = true;
        ('#place_world').siblings() = false;
        if ((('#place_world') && ('#layer_co')) = true) {
            map.addLayer(world_coLayer);
            } else {
            map.removeLayer(world_coLayer);
            }
        });
        
    $('#place_drc').on('click', function() {
        map.setView(drc);
        map.setLayerGroup(group_drc);
        map.addInteraction(selectPointerMove);
        map.addInteraction(selectInteraction);
        ('#place_drc') = true;
        ('#place_drc').siblings() = false;
        if ((('#place_drc') && ('#layer_co')) = true) {
            map.addLayer(drc_coLayer);
            } else {
            map.removeLayer(drc_coLayer);
            }
        });
        
    $('#layer_co').on('click', function() {
        ('#layer_co') = true;
        ('#layer_co').siblings() = false;
        if ((('#layer_co') && ('#place_world')) = true) {
            map.addLayer(world_coLayer);
            map.removeLayer(drc_coLayer);
            } 
        else if ((('#layer_co') && ('#place_drc')) = true) {
            map.removeLayer(world_coLayer);
            map.addLayer(drc_coLayer);
            }
        });

    })();

////////////////////////////////////////////////////
                    //CONFLICT STYLE FUNCTIONS//
////////////////////////////////////////////////////
/*
    var selectedFeatures = [];

    // Unselect previous selected features
    function unselectPreviousFeatures() {
        var i;
        for(i=0; i< selectedFeatures.length; i++) {
            selectedFeatures[i].setStyle(null);
        }
        selectedFeatures = [];
        }

    // Handle pointer

    map.on('pointermove', function(event) {
        unselectPreviousFeatures();
        map.forEachFeatureAtPixel(event.pixel, function(feature, layer) {
            feature.setStyle([
                conflictdrcHiStyle,
                selectedTextStyleFunction(feature.get('type'))
                ]);
            selectedFeatures.push(feature);
            });
        });

    });
*/









