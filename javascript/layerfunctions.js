var rectIcon1 = '<svg width="30" height="15"><rect id="rect1" fill="red" stroke="#000000" width="30" height="15"/></svg>'
var rectIcon2 = '<svg width="30" height="15"><rect id="rect2" fill="red" stroke="#000000" width="30" height="15"/></svg>'
var lineIcon1 = '<svg width="30" height="15"><line id="line" fill="none" stroke="red" x1="0" y1="7.5" x2="30" y2="7.5"/>'

function aggregateFunction () {
    var subtitle = "Look at maps from different sources"
    $('.subtitle').html(subtitle); //set method subtitle
    //hide buttons that do not apply to selected method
    $('#place_world').show();
    $('#place_drc').show();
    $('#place_nkivu').show();
    $('#place_beni_r').show();
    $('#place_beni_c').show();
    $('#place_beni_q').show();
    $('#layer_in').hide();
    $('#layer_fo').hide();
    $('#layer_ag').hide();
    $('#layer_mi').hide();
    $('#layer_co').show();
    $('#layer_ai').hide();
    $('#layer_cu').show();
    $('#layer_po').hide();
    }

function collectFunction () {
    var subtitle = "Contribute to the map"
    $('.subtitle').html(subtitle); //set method subtitle
    //hide buttons that do not apply to selected method
    $('#place_world').hide();
    $('#place_drc').hide();
    $('#place_nkivu').hide();
    $('#place_beni_r').hide();
    $('#place_beni_c').show();
    $('#place_beni_q').show();
    $('#layer_in').show();
    $('#layer_fo').hide();
    $('#layer_ag').hide();
    $('#layer_mi').hide();
    $('#layer_co').hide();
    $('#layer_ai').hide();
    $('#layer_cu').show();
    $('#layer_po').hide();
    }

function playFunction () {
    var subtitle = "Play a simulation"
    $('.subtitle').html(subtitle); //set method subtitle
    //hide buttons that do not apply to selected method
    $('#place_world').hide();
    $('#place_drc').hide();
    $('#place_nkivu').show();
    $('#place_beni_r').show();
    $('#place_beni_c').hide();
    $('#place_beni_q').hide();
    $('#layer_in').hide();
    $('#layer_fo').show();
    $('#layer_ag').hide();
    $('#layer_mi').hide();
    $('#layer_co').hide();
    $('#layer_ai').hide();
    $('#layer_cu').hide();
    $('#layer_po').hide();
    }

function worldFunction () {
    map.setView(world);
    $('#method_aggregate').show();
    $('#method_collect').hide();
    $('#method_play').hide();
    $('#layer_in').hide();
    $('#layer_fo').hide();
    $('#layer_ag').hide();
    $('#layer_mi').hide();
    $('#layer_co').show();
    $('#layer_ai').hide();
    $('#layer_cu').show();
    $('#layer_po').hide();
    }
    
function drcFunction () {
    map.setView(drc);
    $('#method_aggregate').show();
    $('#method_collect').hide();
    $('#method_play').hide();
    $('#layer_in').hide();
    $('#layer_fo').hide();
    $('#layer_ag').hide();
    $('#layer_mi').hide();
    $('#layer_co').show();
    $('#layer_ai').hide();
    $('#layer_cu').show();
    $('#layer_po').hide();
    }
    
function nkivuFunction () {
    map.setView(nkivu);
    $('#method_aggregate').show();
    $('#method_collect').hide();
    $('#method_play').show();
    $('#layer_in').hide();
    $('#layer_fo').show();
    $('#layer_ag').hide();
    $('#layer_mi').hide();
    $('#layer_co').hide();
    $('#layer_ai').hide();
    $('#layer_cu').hide();
    $('#layer_po').hide();
    }

function beni_rFunction () {
    map.setView(beni_r);
    $('#method_aggregate').show();
    $('#method_collect').hide();
    $('#method_play').show();
    $('#layer_in').hide();
    $('#layer_fo').show();
    $('#layer_ag').hide();
    $('#layer_mi').hide();
    $('#layer_co').hide();
    $('#layer_ai').hide();
    $('#layer_cu').hide();
    $('#layer_po').hide();
    }
    
function beni_cFunction () {
    map.setView(beni_c);
    $('#method_aggregate').show();
    $('#method_collect').show();
    $('#method_play').hide();
    $('#layer_in').show();
    $('#layer_fo').hide();
    $('#layer_ag').hide();
    $('#layer_mi').hide();
    $('#layer_co').hide();
    $('#layer_ai').hide();
    $('#layer_cu').show();
    $('#layer_po').hide();
    }
    
function beni_qFunction () {
    map.setView(beni_q);
    $('#method_aggregate').show();
    $('#method_collect').show();
    $('#method_play').hide();
    $('#layer_in').show();
    $('#layer_fo').hide();
    $('#layer_ag').hide();
    $('#layer_mi').hide();
    $('#layer_co').hide();
    $('#layer_ai').hide();
    $('#layer_cu').show();
    $('#layer_po').hide();
    }

function geolocateFunction () {
    var instructions = 'Click "Get Geolocation", write a report, and then click "Submit"'
    var geolocate = "<button id='geolocate'>Get Geolocation</button>"
    var report = "<form action='action_page.php'>Report:</ br><input type='text' name='report'></ br><input type='submit' value='Submit'></form>"
    $('.instructions').html(instructions);
    $('.geolocate').html(geolocate); 
    $('.report').html(report); 
    }
    
function world_noneFunction () {
    var title = "World"
    var source = ""
    var legend = ['Countries', 'DRC'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('<object type="image/svg+xml" data="images/legend.svg"></object>');
    $('.legend').html(legend); //set legend
    map.setLayerGroup(worldGroup); //set world layer group
    }

function world_coFunction () {
    var title = "Global Peace Index"
    var source = "Source: <a href='http://www.visionofhumanity.org'>Vision for Humanity</a>"
    var legend = ['Very high', 'High', 'Medium', 'Low', 'Very low', 'Unclassified'].join('<br/>');
    $('.title').html(title);
    $('.source').html(source); 
    $('#legendicons').html('<object type="image/svg+xml" data="images/world_coLegend.svg"></object>');
    $('.legend').html(legend); 
    map.setLayerGroup(world_coGroup); //set world conflict layer group
    }
    
function world_cuFunction () {
    var title = "World Ethnic Diversity"
    var source = "Source: Harvard Institute of Economic Research (HIER)"
    var legend = ['Very high', 'High', 'Medium', 'Low', 'Very low', 'Unclassified'].join('<br/>');
    var subtitle = "Look at maps from different sources"
    $('.title').html(title); 
    $('.source').html(source); 
    $('#legendicons').html('<object type="image/svg+xml" data="images/world_cuLegend.svg"></object>');
    $('.legend').html(legend); 
    map.setLayerGroup(world_cuGroup); //set world culture layer group
    cuGraph;
    }
    
function drc_noneFunction () {
    var title = "Democratic Republic of Congo"
    var source = "Source: <a href='http://www.mapmakerdata.co.uk.s3-website-eu-west-1.amazonaws.com/library/stacks/Africa/Democratic%20Republic%20of%20Congo/index.htm'>Mapmakerdata</a>"
    var legend = ['Provinces', 'North Kivu'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('<object type="image/svg+xml" data="images/legend.svg"></object>');
    $('.legend').html(legend); //set legend
    map.setLayerGroup(drcGroup);
    }
 
function drc_coFunction () {
    var title = "Conflict in DRC in 2013"
    var source = "Source: <a href='http://www.acleddata.com/'>Armed Conflict Location & Event Database (ACLED) Project</a>"
    var legend = ['Conflict events', 'North Kivu'].join('<br/>');
    $('.title').html(title); 
    $('.source').html(source); 
    $('#legendicons').html('<object type="image/svg+xml" data="images/drc_coLegend.svg"></object>');
    $('.legend').html(legend); 
    map.setLayerGroup(drc_coGroup); //set drc conflict layer group
    }
    
function drc_cuFunction () {
    var title = "Ethnic Groups in DRC"
    var source = "Source: <a href='https://worldmap.harvard.edu/africamap/'>AfricaMap</a> based on <i>People's Atlas of Africa</i></br>by Mark Felix and Charles Meur, 2001"
    var legend = ['Ethnic groups', 'North Kivu'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('<object type="image/svg+xml" data="images/drc_cuLegend.svg"></object>');
    $('.legend').html(legend); //set legend
    map.setLayerGroup(drc_cuGroup);

    }
    
function nkivu_noneFunction () {
    var title = "North Kivu"
    var source = "Source: <a href='http://www.mapmakerdata.co.uk.s3-website-eu-west-1.amazonaws.com/library/stacks/Africa/Democratic%20Republic%20of%20Congo/Nord-Kivu/index.htm'>Mapmakerdata</a>"
    var legend = ['Regions', 'Beni Region'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('<object type="image/svg+xml" data="images/legend.svg"></object>');
    $('.legend').html(legend); //set legend
    map.setLayerGroup(nkivuGroup);
    }
    
function nkivu_foFunction () {
    var title = "Forest Areas in North Kivu"
    var source = "" //add source here
    var legend = ['Forest line'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('');
    $('.legend').html(legend); //set legend
    map.setLayerGroup(nkivu_foGroup);
    }

function beni_r_noneFunction () {
    var title = "Beni Region"
    var source = "Source: <a href='http://www.mapmakerdata.co.uk.s3-website-eu-west-1.amazonaws.com/library/stacks/Africa/Democratic%20Republic%20of%20Congo/Nord-Kivu/Beni/index.htm'>Mapmakerdata</a>"
    var legend = ['Cities', 'Beni'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('');
    $('.legend').html(legend); //set legend
    map.setView(beni_r);
    map.setLayerGroup(beni_rGroup);
    }

function beni_r_foFunction () {
    var title = "Forest Areas in Beni Region"
    var source = "" //add source here
    var legend = ['Forest line'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('');
    $('.legend').html(legend); //set legend
    map.setView(beni_r);
    map.setLayerGroup(beni_r_foGroup);
    }

function beni_c_noneFunction () {
    var title = "City of Beni"
    var source = "Source: <a href='https://www.openstreetmap.org/node/435818462#map=14/0.4939/29.4653&layers=H'>OpenStreetMap</a> and BeniAtlas"
    var legend = ['Health centers', 'Schools', 'Commerce', 'Industry'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('');
    $('.legend').html(legend); //set legend
    map.setView(beni_c);
    map.setLayerGroup(beni_cGroup); //set beni city layer group
    }

function beni_c_inFunction () {
    var title = "Infrastructure in Beni"
    var source = "Source: <a href='https://www.openstreetmap.org/node/435818462#map=14/0.4939/29.4653&layers=H'>OpenStreetMap</a> and BeniAtlas"
    var legend = ['Roads', 'Water', 'Wastewater'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('');
    $('.legend').html(legend); //set legend
    map.setView(beni_c);
    map.setLayerGroup(beni_c_inGroup); //set beni city infrastructure layer group
    }
    
function beni_c_cuFunction () {
    var title = "Culture in Beni"
    var source = "Source: BeniAtlas"
    var legend = ['Cultural points'].join('<br/>');
    $('.title').html(title); 
    $('.source').html(source); 
    $('#legendicons').html('<object type="image/svg+xml" data="images/beni_c_cuLegend.svg"></object>');
    $('.legend').html(legend); 
    map.setView(beni_c);
    map.setLayerGroup(beni_c_cuGroup);
    }
    
function beni_q_noneFunction () {
    var title = "City of Beni"
    var source = "Source: <a href='https://www.openstreetmap.org/node/435818462#map=14/0.4939/29.4653&layers=H'>OpenStreetMap</a> and BeniAtlas"
    var legend = ['Health centers', 'Schools', 'Commerce', 'Industry'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('');
    $('.legend').html(legend); //set legend
    map.setView(beni_c);
    map.setLayerGroup(beni_qGroup); //set beni quartier layer group
    }

function beni_q_inFunction () {
    var title = "Infrastructure in Beni"
    var source = "Source: <a href='https://www.openstreetmap.org/node/435818462#map=14/0.4939/29.4653&layers=H'>OpenStreetMap</a> and BeniAtlas"
    var legend = ['Roads', 'Water', 'Wastewater'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('');
    $('.legend').html(legend); //set legend
    map.setView(beni_c);
    map.setLayerGroup(beni_q_inGroup); //set beni quartier infrastructure layer group
    }
    
function beni_q_cuFunction () {
    var title = "Culture in Beni"
    var source = "Source: BeniAtlas"
    var legend = ['Roads', 'Water', 'Wastewater'].join('<br/>');
    $('.title').html(title); //set title
    $('.source').html(source); //set source
    $('#legendicons').html('<object type="image/svg+xml" data="images/beni_c_cuLegend.svg"></object>');
    $('.legend').html(legend); //set legend
    map.setView(beni_c);
    map.setLayerGroup(beni_q_cuGroup);
    }
