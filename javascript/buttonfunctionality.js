$(document).ready(function() {

    var method = 'aggregate'//sets aggregate as default method
    var scale = 'beni_c' //sets beni city as default place
    var layer = 'none' //sets no default layer
    
    var int_general; //sets empty general interaction
    var int_layer; //sets empty layer interaction
    
    document.getElementById("method_aggregate").src = "images/method_aggregate_on.svg"; //turns aggregate button on as default
    document.getElementById("place_beni_c").src = "images/place_beni_c_on.svg"; //turns beni city button on as default

    $('div.method_group').on('click', function(event) {
        document.getElementById("method_aggregate").src = "images/method_aggregate_off.svg"; //turns aggregate button off if it was on
        document.getElementById("method_collect").src = "images/method_collect_off.svg"; //turns collect button off if it was on
        document.getElementById("method_play").src = "images/method_play_off.svg"; //turns play putton off if it was on
        //map.removeInteraction(int_general); //removes general interaction if it was added
        //map.removeInteraction(int_layer); //removes general interaction if it was added
        switch(event.target.id) {
            case "method_aggregate":
                document.getElementById("method_aggregate").src = "images/method_aggregate_on.svg"; //turns aggregate button on
                method = 'aggregate' //sets aggregate as method
                if (scale == 'world') {
                    map.setView(world);
                    if (layer == 'layer_co') {
                        map.setLayerGroup(world_coGroup);
                    } else if (layer == 'layer_cu') {
                        map.setLayerGroup(world_cuGroup);
                    } else {
                        map.setLayerGroup(worldGroup);
                    }
                } else if (scale == 'drc') {
                    map.setView(drc);
                    if (layer == 'layer_co') {
                        map.setLayerGroup(drc_coGroup);
                    } else if (layer == 'layer_cu') {
                        map.setLayerGroup(drc_cuGroup);
                    } else {
                        map.setLayerGroup(drcGroup);
                    }
                } else if (scale == 'nkivu') {
                    map.setView(nkivu);
                    map.setLayerGroup(nkivuGroup);
                } else if (scale == 'beni_r') {
                    map.setView(beni_r);
                    map.setLayerGroup(beni_rGroup);
                } else if (scale == 'beni_c') {
                    map.setView(beni_c);
                    if (layer == 'layer_in') {
                        map.setLayerGroup(beni_c_inGroup);
                    } else {
                        map.setLayerGroup(beni_cGroup);
                    }
                } else if (scale == 'beni_q') {
                    map.setView(beni_q);
                    if (layer == 'layer_in') {
                        map.setLayerGroup(beni_c_inGroup);
                    } else {
                    map.setLayerGroup(beni_qGroup);
                    }
                }
                break;
            case "method_collect":
                document.getElementById("method_collect").src = "images/method_collect_on.svg";
                method = 'collect'
                if (scale == 'world') {
                    map.setView(world);
                    map.setLayerGroup(worldGroup);
                } else if (scale == 'drc') {
                    map.setView(drc);
                    map.setLayerGroup(drcGroup);
                } else if (scale == 'nkivu') {
                    map.setView(nkivu);
                    map.setLayerGroup(nkivuGroup);
                } else if (scale == 'beni_r') {
                    map.setView(beni_r);
                    map.setLayerGroup(beni_rGroup);
                } else if (scale == 'beni_c') {
                    map.setView(beni_c);
                    if (layer == 'layer_in') {
                        map.setLayerGroup(beni_c_inGroup);
                    } else if (layer == 'layer_cu') {
                        map.setLayerGroup(beni_c_cuGroup);
                    } else {
                        map.setLayerGroup(beni_cGroup);
                    }
                } else if (scale == 'beni_q') {
                    map.setView(beni_q);
                    if (layer == 'layer_in') {
                        map.setLayerGroup(beni_c_inGroup);
                    } else if (layer == 'layer_cu') {
                        map.setLayerGroup(beni_c_cuGroup);
                    } else {
                        map.setLayerGroup(beni_qGroup);
                    }
                }
                break;
            case "method_play":
                document.getElementById("method_play").src = "images/method_play_on.svg";
                method = 'play'
                if (scale == 'world') {
                    map.setView(world);
                    map.setLayerGroup(worldGroup);
                } else if (scale == 'drc') {
                    map.setView(drc);
                    map.setLayerGroup(drcGroup);
                } else if (scale == 'nkivu') {
                    map.setView(nkivu);
                    if (layer == 'layer_fo') {
                        map.setLayerGroup(nkivu_foGroup);
                    } else {
                        map.setLayerGroup(drcGroup);
                    }
                } else if (scale == 'beni_r') {
                    map.setView(beni_r);
                    if (layer == 'layer_fo') {
                        map.setLayerGroup(beni_r_foGroup);
                    } else {
                        map.setLayerGroup(beni_rGroup);
                    }
                } else if (scale == 'beni_c') {
                    map.setView(beni_c);
                    map.setLayerGroup(beni_cGroup);
                } else if (scale == 'beni_q') {
                    map.setView(beni_c);
                    map.setLayerGroup(beni_qGroup);
                }
                break;
            default:
                break;
            }
        });

    $('div.place_group').on('click', function(event) {
        document.getElementById("place_world").src = "images/place_world_off.svg";
        document.getElementById("place_drc").src = "images/place_drc_off.svg";
        document.getElementById("place_nkivu").src = "images/place_nkivu_off.svg";
        document.getElementById("place_beni_r").src = "images/place_beni_r_off.svg";
        document.getElementById("place_beni_c").src = "images/place_beni_c_off.svg";
        document.getElementById("place_beni_q").src = "images/place_beni_q_off.svg";
        //map.removeInteraction(int_general);
        //map.removeInteraction(int_layer);
        switch(event.target.id) {
            case "place_world":
                document.getElementById("place_world").src = "images/place_world_on.svg";
                scale = 'world';
                map.setView(world);
                if (method == 'aggregate') {
                    if (layer == 'layer_co') {
                        map.setLayerGroup(world_coGroup);
                    } else if (layer == 'layer_cu') {
                        map.setLayerGroup(world_cuGroup);
                    } else {
                        map.setLayerGroup(worldGroup);
                    }
                } else {
                    map.setLayerGroup(worldGroup);
                }
                break;
            case "place_drc":
                document.getElementById("place_drc").src = "images/place_drc_on.svg";
                scale = 'drc';
                map.setView(drc);
                if (method == 'aggregate') {
                    if (layer == 'layer_co') {
                        map.setLayerGroup(drc_coGroup);
                    } else if (layer == 'layer_cu') {
                        map.setLayerGroup(drc_cuGroup);
                    } else {
                        map.setLayerGroup(drcGroup);
                    }
                } else {
                    map.setLayerGroup(drcGroup);
                }
                break;
            case "place_nkivu":
                document.getElementById("place_nkivu").src = "images/place_nkivu_on.svg";
                scale = 'nkivu';
                map.setView(nkivu);
                if (method == 'play') {
                    if (layer == 'layer_fo') {
                        map.setLayerGroup(nkivu_foGroup);
                    } else {
                        map.setLayerGroup(nkivuGroup);
                    }
                } else {
                    map.setLayerGroup(nkivuGroup);
                }
                break;
            case "place_beni_r":
                document.getElementById("place_beni_r").src = "images/place_beni_r_on.svg";
                scale = 'beni_r';
                map.setView(beni_r);
                if (method == 'play') {
                    if (layer == 'layer_fo') {
                        map.setLayerGroup(beni_r_foGroup);
                    } else {
                        map.setLayerGroup(beni_rGroup);
                    }
                } else {
                    map.setLayerGroup(beni_rGroup);
                }
                break;
            case "place_beni_c":
                document.getElementById("place_beni_c").src = "images/place_beni_c_on.svg";
                scale = 'beni_c';
                map.setView(beni_c);
                map.addInteraction(selectInteraction);
                if (method == 'collect') {
                    if (layer == 'layer_in') {
                        map.setLayerGroup(beni_c_inGroup);
                    } else if (layer == 'layer_cu') {
                        map.setLayerGroup(beni_c_cuGroup);
                    } else {
                        map.setLayerGroup(beni_cGroup);
                    }
                } else {
                    map.setLayerGroup(beni_cGroup);
                }
                break;
            case "place_beni_q":
                document.getElementById("place_beni_q").src = "images/place_beni_q_on.svg";
                scale = 'beni_q';
                map.setView(beni_q);
                map.addInteraction(selectInteraction);
                if (method == 'collect') {
                    if (layer == 'layer_in') {
                        map.setLayerGroup(beni_c_inGroup);
                    } else if (layer == 'layer_cu') {
                        map.setLayerGroup(beni_c_cuGroup);
                    } else {
                        map.setLayerGroup(beni_qGroup);
                    }
                } else {
                    map.setLayerGroup(beni_qGroup);
                }
                break;
            default:
                break;
            }
        });

    $('div.layer_group').on('click', function(event) {
        document.getElementById("layer_in").src = "images/layer_in_off.png";
        document.getElementById("layer_fo").src = "images/layer_fo_off.png";
        document.getElementById("layer_co").src = "images/layer_co_off.png";
        document.getElementById("layer_cu").src = "images/layer_cu_off.png";
        //map.removeInteraction(int_general);
        //map.removeInteraction(int_layer);
        switch(event.target.id) {
            case "layer_in":
                if (layer !== 'layer_in') {
                    document.getElementById("layer_in").src = "images/layer_in_on.png";
                    layer = 'layer_in';
                    if (method == 'aggregate') {
                        if (scale == 'beni_c') {
                            map.setLayerGroup(beni_c_inGroup);
                            document.getElementById('legend').innerHTML = beni_c_inLegend; 
                        }
                    }
                } else if (layer == 'layer_in') {
                    document.getElementById("layer_in").src = "images/layer_in_off.png";
                    layer = 'none';
                    if (method == 'aggregate') {
                        if (scale == 'beni_c') {
                            map.setLayerGroup(beni_cGroup);
                            document.getElementById('legend').innerHTML = noneLegend; 

                        }
                    }
                }
                break;
            case "layer_fo":
                if (layer !== 'layer_fo') {
                    document.getElementById("layer_fo").src = "images/layer_fo_on.png";
                    layer = 'layer_fo';
                    if (method == 'play') {
                        if (scale == 'nkivu') {
                            map.setLayerGroup(nkivu_foGroup);
                        } else if (scale == 'beni_r') {
                            map.setLayerGroup(beni_r_foGroup);
                        }
                    }
                } else if (layer == 'layer_fo') {
                    document.getElementById("layer_fo").src = "images/layer_fo_off.png";
                    layer = 'none';
                    if (method == 'play') {
                        if (scale == 'nkivu') {
                            map.setLayerGroup(nkivuGroup);
                        } else if (scale == 'beni_r') {
                            map.setLayerGroup(beni_rGroup);
                        }
                    }
                }
                break;
            case "layer_co":
                if (layer !== 'layer_co') {
                    document.getElementById("layer_co").src = "images/layer_co_on.png";
                    layer = 'layer_co';
                    if (method == 'aggregate') {
                        if (scale == 'world') {
                            map.setLayerGroup(world_coGroup);
                        } else if (scale == 'drc') {
                            map.setLayerGroup(drc_coGroup);
                        }
                    }
                } else if (layer == 'layer_co') {
                    document.getElementById("layer_co").src = "images/layer_co_off.png";
                    layer = 'none';
                    if (method == 'aggregate') {
                        if (scale == 'world') {
                            map.setLayerGroup(worldGroup);
                        } else if (scale == 'drc') {
                            map.setLayerGroup(drcGroup);
                        }
                    }
                }
                break;
            case "layer_cu":
                if (layer !== 'layer_cu') { //confirming that layer has not been previously clicked
                    document.getElementById("layer_cu").src = "images/layer_cu_on.png"; //turn button on
                    layer = 'layer_cu'; //change layer variable to culture
                    if (method == 'aggregate') {
                        if (scale == 'world') {
                            map.setLayerGroup(world_cuGroup);
                        } else if (scale == 'drc') {
                            map.setLayerGroup(drc_cuGroup);
                        }
                    } else if (method == 'collect') {
                        if (scale == 'world') {
                            map.setLayerGroup(world_cuGroup);
                        }
                    }
                } else if (layer == 'layer_cu') { //allows layer to toggle off if has already been clicked
                    document.getElementById("layer_cu").src = "images/layer_cu_off.png"; //turn button off
                    layer = 'none'; //change layer variable to none
                    if (method == 'aggregate') {
                        if (scale == 'world') {
                            map.setLayerGroup(worldGroup);
                        } else if (scale == 'drc') {
                            map.setLayerGroup(drcGroup);
                        }
                    } else if (method == 'collect') {
                        if (scale == 'world') {
                            map.setLayerGroup(worldGroup);
                        }
                    }
                }
                break;
            default:
                layer = 'none'
                    if (scale == 'world') {
                        map.setLayerGroup(worldGroup);
                    } else if (scale == 'drc') {
                        map.setLayerGroup(drcGroup);
                    } else if (scale == 'nkivu') {
                        map.setLayerGroup(nkivuGroup);
                    } else if (scale == 'beni_r') {
                        map.setLayerGroup(beni_rGroup);
                    } else if (scale == 'beni_c') {
                        map.setLayerGroup(beni_cGroup);
                    } else if (scale == 'beni_q') {
                        map.setLayerGroup(beni_qGroup);
                    }
                break;
            }
        });
    });


 