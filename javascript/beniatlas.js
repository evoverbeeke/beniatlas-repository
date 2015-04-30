////////////////////////////////////////////////////
                    //VIEWS//
////////////////////////////////////////////////////

var world = new ol.View({//WORLD VIEW
    projection: 'EPSG:4326',
    center: [0, 0],
    zoom: 1.5,
    minZoom: 1.5,
    maxZoom: 1.5
    });

var drc = new ol.View({//DRC VIEW
    projection: 'EPSG:4326',
    center: [23.65, -3.02],
    zoom: 5,
    minZoom: 5,
    maxZoom: 5
    });

var nkivu = new ol.View({//NORTH KIVU VIEW
    projection: 'EPSG:4326',
    center: [28.69, -0.60],
    zoom: 7.4,
    minZoom: 7.4,
    maxZoom: 7.4
    });

var beni_r = new ol.View({//BENI REGION VIEW
    projection: 'EPSG:4326',
    center: [29.53, 0.42],
    zoom: 9,
    minZoom: 9,
    maxZoom: 9
    });

var beni_c = new ol.View({//BENI CITY VIEW
    projection: 'EPSG:4326',
    center: [29.46, 0.50],
    zoom: 13,
    minZoom: 13,
    maxZoom: 16
    });
    
var beni_q = new ol.View({//BENI CITY VIEW
    projection: 'EPSG:4326',
    center: [29.46, 0.50],
    zoom: 13,
    minZoom: 13,
    maxZoom: 16
    });

////////////////////////////////////////////////////
                    //SOURCES//
////////////////////////////////////////////////////

var worldSource = new ol.source.GeoJSON({//WORLD ADMIN SOURCE
    url: 'data/admin_world.geojson',
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
    url: 'data/admin_nkivu.geojson',
    projection: 'EPSG:4326'
    });

var nkivudivSource = new ol.source.GeoJSON({//NORTH KIVU DIVIDED ADMIN SOURCE
    url: 'data/admin_nkivu_div.geojson',
    projection: 'EPSG:4326'
    });

var beni_rSource = new ol.source.GeoJSON({//BENI REGION ADMIN SOURCE
    url: 'data/admin_beni_r.geojson',
    projection: 'EPSG:4326'
    });

var beni_c_roadsSource = new ol.source.GeoJSON({//BENI ROADS SOURCE
    url: 'data/roads_test.geojson',
    projection: 'EPSG:4326'
    });

var beni_c_roadspSource = new ol.source.GeoJSON({//BENI PRIMARY ROADS SOURCE
    url: 'data/roads_primary.json',
    projection: 'EPSG:4326'
    });

var drc_coSource = new ol.source.GeoJSON({//DRC CONFLICT SOURCE
    url: 'data/conflict_drc.geojson',
    projection: 'EPSG:4326'
    });
    
var drc_cuSource = new ol.source.GeoJSON({//DRC CONFLICT SOURCE
    url: 'data/culture_drc.geojson',
    projection: 'EPSG:4326'
    });

var beni_c_cuSource = new ol.source.GeoJSON({//BENICITY CULTURE SOURCE
    url: 'data/culture_test.geojson',
    projection: 'EPSG:4326'
    });

var beni_qSource = new ol.source.GeoJSON({//BENI QUARTIER BOUNDARIES SOURCE
    url: 'data/quartiers_test.geojson',
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
            color: '#94ABB7',
            }),
        stroke: new ol.style.Stroke({
            color: 'rgba(20,130,150,0.8)',
            width: 1
            })
        })
    });

//culture drc style
var drc_cuStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: '#F062A4',
        width: 1
        })
    });

//POINT STYLE CULTURE

/*var radius_cu = function randomIntFromInterval(3,30)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}*/

var beni_c_cuStyle = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 4,
        fill: new ol.style.Fill({
            color: '#F768A1',
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
                color: 'white',
                width: 1.5
                })
            }),
        stroke: new ol.style.Stroke({
            color: 'red',
            width: 2
            }),
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
    style: outlineStyle
    });
    
var beni_rdivLayer = new ol.layer.Vector({//BENIREGION ADMIN LAYER
    source: beni_rSource,
    style: greyStyle
    });

//ADMINISTRATIVE BENI POINT LAYER

//quartier boundaries layer
var beni_qLayer = new ol.layer.Vector({
    source: beni_qSource,
    style: quartiertextStyleFunction
    });

//roads layer
var roadsLayer = new ol.layer.Vector({
    source: beni_c_roadsSource,
    style: (function() {
        var route_principale = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'black',
                width: 6
                })
            })];            
        var route_secondaire = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'grey',
                width: 4
                })
            })];
        var route_tertiare = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'grey',
                width: 2.5
                })
            })];
        var route_sentier = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#D8DAD9',
                width: 1.5
                })
            })];
        var route_service = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#D8DAD9',
                width: 2
                })
            })];
        var route_pieton = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#938B6A',
                width: 1
                })
            })];
        var route_default = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#D8DAD9',
                width: 1.5
                })
            })];
        return function(feature) {
            if (feature.get('type') == 'route_principale') {
                return route_principale;
            } else if (feature.get('type') == 'route_secondaire') {
                return route_secondaire;
            } else if (feature.get('type') == 'route_tertiare') {
                return route_tertiaire;
            } else if (feature.get('type') == 'route_sentier') {
                return route_sentier;
            } else if (feature.get('type') == 'route_service') {
                return route_service;
            } else if (feature.get('type') == 'route_pieton') {
                return route_pieton;
            } else {
                return route_default;
                } 
            };  
        })()
    });

  
//inner roads layer
var roadsLayer2 = new ol.layer.Vector({
    source: beni_c_roadsSource,
    style: (function() {
        var route_principale2 = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 3
                })
            })];            
        var route_secondaire2 = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 1.5
                })
            })];
        var route_tertiare2 = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        var route_default2 = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                width: 0
                })
            })];
        return function(feature) {
            if (feature.get('type') == 'route_principale') {
                return route_principale2;
            } else if (feature.get('type') == 'route_secondaire') {
                return route_secondaire2;
            } else if (feature.get('type') == 'route_tertiare') {
                return route_tertiaire2;
                }
            };   
        })()
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
    
//roads infrastructure layer
var beni_c_inLayer = new ol.layer.Vector({
    source: beni_c_roadsSource,
    style: (function() {
        var condition_bonne = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'blue',
                width: 2
                })
            })];            
        var condition_mediocre = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'yellow',
                width: 2
                })
            })];
        var condition_mauvaise = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'red',
                width: 2
                })
            })];
        var condition_default = [new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#D8DAD9',
                width: 1
                })
            })];
        return function(feature) {
            if (feature.get('condition') == 'condition_bonne') {
                return condition_bonne;
            } else if (feature.get('condition') == 'condition_mediocre') {
                return condition_mediocre;
            } else if (feature.get('condition') == 'condition_mauvaise') {
                return condition_mauvaise;
            } else {
                return condition_default;
                }
            };   
        })()
    });


// conflict drc layer
var drc_coLayer = new ol.layer.Vector({
    source: drc_coSource,
    style: drc_coStyle
    });

// conflict world layer
var world_coLayer = new ol.layer.Vector({
    source: worldSource,
    style: (function () {
        var defaultStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#D8DAD9',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];            
        var veryhighStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#D1D1D1',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        var highStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#A8A8A8',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        var mediumStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#7F7F7F',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        var lowStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#565656',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        var verylowStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#2D2D2D',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        return function(feature) {
            if (feature.get('p2013rate') == 'veryhigh') {
                return veryhighStyle;
            } else if (feature.get('p2013rate') == 'high') {
                return highStyle;
            } else if (feature.get('p2013rate') == 'medium') {
                return mediumStyle;
            } else if (feature.get('p2013rate') == 'low') {
                return lowStyle;
            } else if (feature.get('p2013rate') == 'verylow') {
                return verylowStyle;
            } else {
                return defaultStyle;
                }
            };
        })()
    });

// culture world layer
var world_cuLayer = new ol.layer.Vector({
    source: worldSource,
    style: (function () {
        var defaultStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#D8DAD9',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];            
        var veryhighStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#AC1283',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        var highStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#D53491',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        var mediumStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#F768A1',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        var lowStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#F99AB1',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        var verylowStyle = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#FCC6C6',
                }),
            stroke: new ol.style.Stroke({
                color: 'white',
                width: 0.5
                })
            })];
        return function(feature) {
            if (feature.get('cu_rating') == 'veryhigh') {
                return veryhighStyle;
            } else if (feature.get('cu_rating') == 'high') {
                return highStyle;
            } else if (feature.get('cu_rating') == 'medium') {
                return mediumStyle;
            } else if (feature.get('cu_rating') == 'low') {
                return lowStyle;
            } else if (feature.get('cu_rating') == 'verylow') {
                return verylowStyle;
            } else {
                return defaultStyle;
                }
            };
        })()
    });
    
// culture drc layer
var drc_cuLayer = new ol.layer.Vector({
    source: drc_cuSource,
    style: drc_cuStyle
    });
 
   

var beni_c_cuLayer = new ol.layer.Vector({
    source: beni_c_cuSource,
    style: beni_c_cuStyle
    });



////////////////////////////////////////////////////
                    //LAYER GROUPS//
////////////////////////////////////////////////////

var worldGroup = new ol.layer.Group({
    layers: [worldLayer, drcLayer]
    });
    
var world_coGroup = new ol.layer.Group({
    layers: [world_coLayer, drcLayer]
    });
    
var world_cuGroup = new ol.layer.Group({
    layers: [world_cuLayer, drcLayer]
    });

var drcGroup = new ol.layer.Group({
    layers: [drcdivLayer, nkivuLayer]
    });
    
var drc_coGroup = new ol.layer.Group({
    layers: [drcdivLayer, drc_coLayer, nkivuLayer]
    });
    
var drc_cuGroup = new ol.layer.Group({
    layers: [drcdivLayer, drc_cuLayer, nkivuLayer]
    });

var nkivuGroup = new ol.layer.Group({
    layers: [nkivudivLayer, beni_rLayer]
    });

var beni_rGroup = new ol.layer.Group({
    layers: [beni_rdivLayer]
    });

var beni_cGroup = new ol.layer.Group({
    layers: [roadsLayer, roadsLayer2]
    });
    
var beni_c_inGroup = new ol.layer.Group({
    layers: [beni_c_inLayer]
    });
    
var beni_c_cuGroup = new ol.layer.Group({
    layers: [roadsLayer, roadsLayer2, beni_c_cuLayer]
    });
    
var beni_qGroup = new ol.layer.Group({
    layers: [roadsLayer, roadsLayer2, beni_qLayer]
    });
    
var beni_q_inGroup = new ol.layer.Group({
    layers: [beni_c_inLayer, beni_qLayer]
    });
    
var beni_q_cuGroup = new ol.layer.Group({
    layers: [roadsLayer, roadsLayer2, beni_c_cuLayer, beni_qLayer]
    });
    

    


////////////////////////////////////////////////////
                    //FEATURE OVERLAYS//
////////////////////////////////////////////////////

//feature overlay for drawn cultural elements
var featureOverlay = new ol.FeatureOverlay({
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(240,98,163,0.2)'
            }),
        stroke: new ol.style.Stroke({
            color: '#F062A4',
            width: 2
            }),
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: '#F062A4'
                })
            })
        })
    });


////////////////////////////////////////////////////
                    //INTERACTIONS//
////////////////////////////////////////////////////

//change to red when click
var selectInteraction = new ol.interaction.Select({
    layers: [beni_qLayer, drcLayer, nkivuLayer],
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            width: 3,
            }),
        fill: new ol.style.Fill({
            color: 'rgba(0,0,255,0.1)',
            })
        }),
    });

//change to blue when hover
var selectPointerMove = new ol.interaction.Select({
    layers: [beni_qLayer, drcLayer, nkivuLayer],
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'red',
            width: 3,
            }),
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.1)',
            })
        }),
    });
    
var modify_cuPoints = new ol.interaction.Modify({
    features: featureOverlay.getFeatures(),
    //the SHIFT key must be pressed to delete vertises so that the new vertises can be drawn at the same position of existing vertices
    deleteCondition: function(event) {
        return ol.events.condition.shiftKeyOnly(event) &&
            ol.events.condition.singleClick(event);
        }
    });

var draw_cuPoints = new ol.interaction.Draw({
    type: 'Point',
    features: featureOverlay.getFeatures()
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
    
   map.addEventListener('click', function() {
        var featuresExtent = ol.extent.createEmpty();
        selectInteraction.getFeatures().forEach(function(feature) {
            ol.extent.extend(featuresExtent, feature.getGeometry().getExtent());
        });
        map.getView().fitExtent(featuresExtent, map.getSize());
    });
    
    //DESCRIPTION OF AGGREGATE METHOD ON HOVER
    $('#method_aggregate').hover(function () {
        var description = "Look at maps from different sources"
        $('#method').html(description);
        }, function () {
            $('#method').empty();
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

    //DESCRIPTION OF NORTH KIVU ON HOVER
    $(function () {
        $('#place_nkivu').hover(function () {
            var description = "North Kivu"
            $('#place').html(description);
            }, function () {
                $('#place').empty();
            });
        });

    //DESCRIPTION OF BENI REGION ON HOVER
    $(function () {
        $('#place_beni_r').hover(function () {
            var description = "Beni Region"
            $('#place').html(description);
            },
            function () {
                $('#place').empty();
            });
        });

    //DESCRIPTION OF BENI CITY ON HOVER
    $(function () {
        $('#place_beni_c').hover(function () {
            var description = "Beni"
            $('#place').html(description);
            }, function () {
                $('#place').empty();
            });
        });

    //DESCRIPTION OF BENI CITY ON HOVER
    $(function () {
        $('#place_beni_q').hover(function () {
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
                    //GEOLOCATION//
//////////////////////////////////////////////////// 
/*
// Geolocation marker
    var markerEl = document.getElementById('geolocation_marker');
    var marker = new ol.Overlay({
        positioning: 'center-center',
        element: markerEl,
        stopEvent: false
        });
    map.addOverlay(marker);

// LineString to store the different geolocation positions. This LineString
// is time aware.
// The Z dimension is actually used to store the rotation (heading).
    var positions = new ol.geom.LineString([],('XYZM'));

// Geolocation Control
    var geolocation = new ol.Geolocation(({
        projection: beni_c.getProjection(),
        trackingOptions: {
            maximumAge: 10000,
            enableHighAccuracy: true,
            timeout: 600000
            }
        }));

    var deltaMean = 500; // the geolocation sampling period mean in ms

// Listen to position changes
    geolocation.on('change', function(evt) {
        var position = geolocation.getPosition();
        var accuracy = geolocation.getAccuracy();
        var heading = geolocation.getHeading() || 0;
        var speed = geolocation.getSpeed() || 0;
        var m = Date.now();

    addPosition(position, heading, m, speed);

    var coords = positions.getCoordinates();
    var len = coords.length;
    if (len >= 2) {
        deltaMean = (coords[len - 1][3] - coords[0][3]) / (len - 1);
        }

    var html = [
        'Position: ' + position[0].toFixed(2) + ', ' + position[1].toFixed(2),
        'Accuracy: ' + accuracy,
        'Heading: ' + Math.round(radToDeg(heading)) + '&deg;',
        'Speed: ' + (speed * 3.6).toFixed(1) + ' km/h',
        'Delta: ' + Math.round(deltaMean) + 'ms'
    ].join('<br />');
    document.getElementById('info').innerHTML = html;
    });

    geolocation.on('error', function() {
        alert('geolocation error');
  // FIXME we should remove the coordinates in positions
});

// convert radians to degrees
function radToDeg(rad) {
  return rad * 360 / (Math.PI * 2);
}
// convert degrees to radians
function degToRad(deg) {
  return deg * Math.PI * 2 / 360;
}
// modulo for negative values
function mod(n) {
  return ((n % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI);
}

    function addPosition(position, heading, m, speed) {
        var x = position[0];
        var y = position[1];
        var fCoords = positions.getCoordinates();
        var previous = fCoords[fCoords.length - 1];
        var prevHeading = previous && previous[2];
        if (prevHeading) {
            var headingDiff = heading - mod(prevHeading);

        // force the rotation change to be less than 180°
        if (Math.abs(headingDiff) > Math.PI) {
            var sign = (headingDiff >= 0) ? 1 : -1;
            headingDiff = - sign * (2 * Math.PI - Math.abs(headingDiff));
            }
        heading = prevHeading + headingDiff;
        }
        positions.appendCoordinate([x, y, heading, m]);

    // only keep the 20 last coordinates
        positions.setCoordinates(positions.getCoordinates().slice(-20));

    // FIXME use speed instead
        if (heading && speed) {
            markerEl.src = 'data/geolocation_marker_heading.png';
        } else {
            markerEl.src = 'data/geolocation_marker.png';
        }
    }

var previousM = 0;
// change center and rotation before render
map.beforeRender(function(map, frameState) {
  if (frameState !== null) {
    // use sampling period to get a smooth transition
    var m = frameState.time - deltaMean * 1.5;
    m = Math.max(m, previousM);
    previousM = m;
    // interpolate position along positions LineString
    var c = positions.getCoordinateAtM(m, true);
    var view = frameState.viewState;
    if (c) {
      view.center = getCenterWithHeading(c, -c[2], view.resolution);
      view.rotation = -c[2];
      marker.setPosition(c);
    }
  }
  return true; // Force animation to continue
});

// recenters the view by putting the given coordinates at 3/4 from the top or
// the screen
function getCenterWithHeading(position, rotation, resolution) {
  var size = map.getSize();
  var height = size[1];

  return [
    position[0] - Math.sin(rotation) * height * resolution * 1 / 4,
    position[1] + Math.cos(rotation) * height * resolution * 1 / 4
  ];
}

// postcompose callback
function render() {
  map.render();
}

// geolocate device
var geolocateBtn = document.getElementById('geolocate');
geolocateBtn.addEventListener('click', function() {
    geolocation.setTracking(true); // Start position tracking

  map.on('postcompose', render);
  map.render();

  disableButtons();
}, false);


function disableButtons() {
  geolocateBtn.disabled = 'disabled';
  simulateBtn.disabled = 'disabled';
}
*/

  
////////////////////////////////////////////////////
                    //LEGENDS//
////////////////////////////////////////////////////  


  
    });
    
     
       
/*
var beni_cLegend = "<ul><li>Primary Roads</li><li>Secondary Roads</li><li>Tertiary Roads</li><li>Residential Roads</li><li>"



a id='draw' href='#'>draw</a>"
    $('.legend').html(description);
        
        
var highlight;


var featureLegend = function(pixel) {

  var feature = map.forEachFeatureAtPixel(pixel, function(feature, layer) {
    return feature;
  });

  var info = document.getElementById('info');
  if (feature) {
    info.innerHTML = feature.getId() + ': ' + feature.get('name');
  } else {
    info.innerHTML = '&nbsp;';
  }

  if (feature !== highlight) {
    if (highlight) {
      featureOverlay.removeFeature(highlight);
    }
    if (feature) {
      featureOverlay.addFeature(feature);
    }
    highlight = feature;
  }

};

map.on('click', function(evt) {
    displayFeatureInfo(evt.pixel);
    });
            
                
//d3.json(data/culture_drc.geojson[, callback])
        
        


        
        



////////////////////////////////////////////////////
                    //CONFLICT STYLE FUNCTIONS//
////////////////////////////////////////////////////

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




////////////////////////////////////////////////////
                    //DRAW//
////////////////////////////////////////////////////




*/




