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
                aggregateFunction();
                if (scale == 'world') {
                    worldFunction();
                    if (layer == 'layer_co') {
                        world_coFunction();
                    } else if (layer == 'layer_cu') {
                        world_cuFunction();
                    } else {
                        world_noneFunction();
                    }
                } else if (scale == 'drc') {
                    drcFunction();
                    if (layer == 'layer_co') {
                        drc_coFunction();
                    } else if (layer == 'layer_cu') {
                        drc_cuFunction();
                    } else {
                        drc_noneFunction();
                    }
                } else if (scale == 'nkivu') {
                    nkivuFunction();
                    nkivu_noneFunction();
                } else if (scale == 'beni_r') {
                    beni_rFunction();
                    beni_r_noneFunction();
                } else if (scale == 'beni_c') {
                    beni_cFunction();
                    if (layer == 'layer_in') {
                        beni_c_inFunction();
                    } else if (layer == 'layer_cu') {
                        beni_c_cuFunction();
                    } else {
                        beni_c_noneFunction();
                    }
                } else if (scale == 'beni_q') {
                    beni_qFunction();
                    if (layer == 'layer_in') {
                        beni_q_inFunction();
                    } else if (layer == 'layer_cu') {
                        beni_q_cuFunction();
                    } else {
                    beni_q_noneFunction();
                    }
                }
                break;
            case "method_collect":
                document.getElementById("method_collect").src = "images/method_collect_on.svg";
                method = 'collect'
                collectFunction();
                if (scale == 'world') {
                    worldFunction();
                    world_noneFunction();
                } else if (scale == 'drc') {
                    drcFunction();
                    drc_noneFunction();
                } else if (scale == 'nkivu') {
                    nkivuFunction();
                    nkivu_noneFunction();
                } else if (scale == 'beni_r') {
                    beni_rFunction();
                    beni_r_noneFunction();
                } else if (scale == 'beni_c') {
                    beni_cFunction();
                    if (layer == 'layer_in') {
                        beni_c_inFunction();
                    } else if (layer == 'layer_cu') {
                        beni_c_cuFunction();
                    } else {
                        beni_c_noneFunction();
                    }
                } else if (scale == 'beni_q') {
                    beni_qFunction();
                    if (layer == 'layer_in') {
                        beni_q_inFunction();
                    } else if (layer == 'layer_cu') {
                        beni_q_cuFunction();
                    } else {
                        beni_q_noneFunction();
                    }
                }
                break;
            case "method_play":
                document.getElementById("method_play").src = "images/method_play_on.svg";
                method = 'play'
                playFunction();
                if (scale == 'world') {
                    worldFunction();
                    world_noneFunction();
                } else if (scale == 'drc') {
                    drcFunction();
                    drc_noneFunction();
                } else if (scale == 'nkivu') {
                    nkivuFunction();
                    if (layer == 'layer_fo') {
                        nkivu_foFunction();
                    } else {
                        nkivu_noneFunction();
                    }
                } else if (scale == 'beni_r') {
                    beni_rFunction();
                    if (layer == 'layer_fo') {
                        beni_r_foFunction();
                    } else {
                        beni_r_noneFunction();
                    }
                } else if (scale == 'beni_c') {
                    beni_cFunction();
                    beni_c_noneFunction();
                } else if (scale == 'beni_q') {
                    beni_qFunction();
                    beni_q_noneFunction();
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
                worldFunction();
                if (method == 'aggregate') {
                    aggregateFunction();
                    if (layer == 'layer_co') {
                        world_coFunction();
                    } else if (layer == 'layer_cu') {
                        world_cuFunction();
                    } else {
                        world_noneFunction();
                    }
                } else {
                    world_noneFunction();
                }
                break;
            case "place_drc":
                document.getElementById("place_drc").src = "images/place_drc_on.svg";
                scale = 'drc';
                drcFunction();
                if (method == 'aggregate') {
                    aggregateFunction();
                    if (layer == 'layer_co') {
                        drc_coFunction();
                    } else if (layer == 'layer_cu') {
                        drc_cuFunction();
                    } else {
                        drc_noneFunction();
                    }
                } else {
                    drc_noneFunction();
                }
                break;
            case "place_nkivu":
                document.getElementById("place_nkivu").src = "images/place_nkivu_on.svg";
                scale = 'nkivu';
                nkivuFunction();
                if (method == 'play') {
                    playFunction();
                    if (layer == 'layer_fo') {
                        nkivu_foFunction();
                    } else {
                        nkivu_noneFunction();
                    }
                } else {
                    nkivu_noneFunction();
                }
                break;
            case "place_beni_r":
                document.getElementById("place_beni_r").src = "images/place_beni_r_on.svg";
                scale = 'beni_r';
                beni_rFunction();
                if (method == 'play') {
                    playFunction();
                    if (layer == 'layer_fo') {
                        beni_r_foFunction();
                    } else {
                        beni_r_noneFunction();
                    }
                } else {
                    beni_r_noneFunction();
                }
                break;
            case "place_beni_c":
                document.getElementById("place_beni_c").src = "images/place_beni_c_on.svg";
                scale = 'beni_c';
                beni_cFunction();
                map.addInteraction(selectInteraction);
                if (method == 'aggregate') {
                    aggregateFunction();
                    if (layer == 'layer_in') {
                        beni_c_inFunction();
                    } else if (layer == 'layer_cu') {
                        beni_c_cuFunction();
                    } else {
                        beni_c_noneFunction();
                    }
                } else if (method == 'collect') {
                    collectFunction();
                    if (layer == 'layer_in') {
                        beni_c_inFunction();
                    } else if (layer == 'layer_cu') {
                        beni_c_cuFunction();
                    } else {
                        beni_c_noneFunction();
                    }
                } else {
                    beni_c_noneFunction();
                }
                break;
            case "place_beni_q":
                document.getElementById("place_beni_q").src = "images/place_beni_q_on.svg";
                scale = 'beni_q';
                beni_qFunction();
                map.addInteraction(selectInteraction);
                if (method == 'aggregate') {
                    aggregateFunction();
                    if (layer == 'layer_in') {
                        beni_q_inFunction();
                    } else if (layer == 'layer_cu') {
                        beni_q_cuFunction();
                    } else {
                        beni_q_noneFunction();
                    }
                } else if (method == 'collect') {
                    collectFunction();
                    if (layer == 'layer_in') {
                        beni_q_inFunction();
                    } else if (layer == 'layer_cu') {
                        beni_q_cuFunction();
                    } else {
                        beni_q_noneFunction();
                    }
                } else {
                    beni_q_noneFunction();
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
                        aggregateFunction();
                        if (scale == 'beni_c') {
                            beni_cFunction();
                            beni_c_inFunction();
                        } else if (scale == 'beni_q') {
                            beni_qFunction();
                            beni_q_inFunction();
                        }
                    } else if (method == 'collect') {
                        collectFunction();
                        if (scale == 'beni_c') {
                            beni_cFunction();
                            beni_c_inFunction();
                        } else if (scale == 'beni_q') {
                            beni_qFunction();
                            beni_q_inFunction();
                        }
                    }
                } else if (layer == 'layer_in') {
                    document.getElementById("layer_in").src = "images/layer_in_off.png";
                    layer = 'none';
                    if (method == 'aggregate') {
                        aggregateFunction();
                        if (scale == 'beni_c') {
                            beni_cFunction();
                            beni_c_noneFunction();
                        } else if (scale == 'beni_q') {
                            beni_qFunction();
                            beni_q_noneFunction();
                        }
                    } else if (method == 'collect') {
                        collectFunction();
                        if (scale == 'beni_c') {
                            beni_cFunction();
                            beni_c_noneFunction();
                        } else if (scale == 'beni_q') {
                            beni_qFunction();
                            beni_q_noneFunction();
                        }
                    }
                }
                break;
            case "layer_fo":
                if (layer !== 'layer_fo') {
                    document.getElementById("layer_fo").src = "images/layer_fo_on.png";
                    layer = 'layer_fo';
                    if (method == 'play') {
                        playFunction();
                        if (scale == 'nkivu') {
                            nkivuFunction();
                            nkivu_foFunction();
                        } else if (scale == 'beni_r') {
                            beni_rFunction();
                            beni_r_foFunction();
                        }
                    }
                } else if (layer == 'layer_fo') {
                    document.getElementById("layer_fo").src = "images/layer_fo_off.png";
                    layer = 'none';
                    if (method == 'play') {
                        playFunction();
                        if (scale == 'nkivu') {
                            nkivuFunction();
                            nkivu_noneFunction();
                        } else if (scale == 'beni_r') {
                            beni_rFunction();
                            beni_r_noneFunction();
                        }
                    }
                }
                break;
            case "layer_co":
                if (layer !== 'layer_co') {
                    document.getElementById("layer_co").src = "images/layer_co_on.png";
                    layer = 'layer_co';
                    if (method == 'aggregate') {
                        aggregateFunction();
                        if (scale == 'world') {
                            worldFunction();
                            world_coFunction();
                        } else if (scale == 'drc') {
                            drcFunction();
                            drc_coFunction();
                        }
                    }
                } else if (layer == 'layer_co') {
                    document.getElementById("layer_co").src = "images/layer_co_off.png";
                    layer = 'none';
                    if (method == 'aggregate') {
                        aggregateFunction();
                        if (scale == 'world') {
                            worldFunction();
                            world_noneFunction();
                        } else if (scale == 'drc') {
                            drcFunction();
                            drc_noneFunction();
                        }
                    }
                }
                break;
            case "layer_cu":
                if (layer !== 'layer_cu') { //confirming that layer has not been previously clicked
                    document.getElementById("layer_cu").src = "images/layer_cu_on.png"; //turn button on
                    layer = 'layer_cu'; //change layer variable to culture
                    if (method == 'aggregate') {
                        aggregateFunction();
                        if (scale == 'world') {
                            worldFunction();
                            world_cuFunction();
                        } else if (scale == 'drc') {
                            drcFunction();
                            drc_cuFunction();
                        } else if (scale == 'beni_c') {
                            beni_cFunction();
                            beni_c_cuFunction();
                        } else if (scale == 'beni_q') {
                            beni_qFunction();
                            beni_q_cuFunction();
                        }
                    } else if (method == 'collect') {
                        collectFunction();
                        if (scale == 'beni_c') {
                            beni_cFunction();
                            beni_c_cuFunction();
                        } else if (scale == 'beni_q') {
                            beni_qFunction();
                            beni_q_cuFunction();
                        }
                    }
                } else if (layer == 'layer_cu') { //allows layer to toggle off if has already been clicked
                    document.getElementById("layer_cu").src = "images/layer_cu_off.png"; //turn button off
                    layer = 'none'; //change layer variable to none
                    if (method == 'aggregate') {
                        aggregateFunction();
                        if (scale == 'world') {
                            worldFunction();
                            world_noneFunction();
                        } else if (scale == 'drc') {
                            drcFunction();
                            drc_noneFunction();
                        } else if (scale == 'beni_c') {
                            beni_cFunction();
                            beni_c_noneFunction();
                        } else if (scale == 'beni_q') {
                            beni_qFunction();
                            beni_q_noneFunction();
                        }
                    } else if (method == 'collect') {
                        collectFunction();
                        if (scale == 'beni_c') {
                            beni_cFunction();
                            beni_c_noneFunction();
                        } else if (scale == 'beni_q') {
                            beni_qFunction();
                            beni_q_noneFunction();
                        }
                    }
                }
                break;
            default:
                layer = 'none'
                    if (scale == 'world') {
                        worldFunction();
                        world_noneFunction();
                    } else if (scale == 'drc') {
                        drcFunction();
                        drc_noneFunction();
                    } else if (scale == 'nkivu') {
                        nkivuFunction();
                        nkivu_noneFunction();
                    } else if (scale == 'beni_r') {
                        beni_rFunction();
                        beni_r_noneFunction();
                    } else if (scale == 'beni_c') {
                        beni_cFunction();
                        beni_c_noneFunction();
                    } else if (scale == 'beni_q') {
                        beni_qFunction();
                        beni_q_noneFunction();
                    }
                break;
            }
        });
    });


 