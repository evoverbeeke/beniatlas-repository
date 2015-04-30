/* var data=[{"crimeType":"mip","totalCrimes":24},
    {"crimeType":"theft","totalCrimes":558},
    {"crimeType":"drugs","totalCrimes":81},
    {"crimeType":"arson","totalCrimes":3},
    {"crimeType":"assault","totalCrimes":80},
    {"crimeType":"burglary","totalCrimes":49},
    {"crimeType":"disorderlyConduct","totalCrimes":63},
    {"crimeType":"mischief","totalCrimes":189},
    {"crimeType":"dui","totalCrimes":107},
    {"crimeType":"resistingArrest","totalCrimes":11},
    {"crimeType":"sexCrimes","totalCrimes":24},
    {"crimeType":"other","totalCrimes":58}];

    var width = 250;
    var height = 250;
    var radius = Math.min(width, height) / 2;
    var color = d3.scale.ordinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);
        
    //declare arc generator function
    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(radius - 70);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function (d) {
        return d.crimeType;
        });
        
    var svg = d3.select("#chart").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        
    //select paths, use arc generator to draw
        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");
            
        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) {
                return color(d.data.crimeType);
            });
            
    //add the text
        g.append("text")
            .attr("transform", function (d) {
            return "translate(" + arc.centroid(d) + ")";
            })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .text(function (d) {
            return d.data.crimeType;
            });
    


var vis = d3.select('#chart').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
var pie = d3.layout.pie().value(function(d){return d.value;});

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
arcs.append("svg:path")
    .attr("fill", function(d, i){
        return color(i);
    })
    .attr("d", function (d) {
        // log the result of the arc generator to show how cool it is :)
        console.log(arc(d));
        return arc(d);
    });

// add the text
arcs.append("svg:text").attr("transform", function(d){
			d.innerRadius = 0;
			d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
    return data[i].label;}
		);*/
                
var data = [20, 30, 80];
var width = 300;
var height = 150;
var radius = 50;

var color = d3.scale.category20();

var canvas = d3.select("#chart").append("svg")
    .attr("width", width)
    .attr("height", height);
    
var group = canvas.append("g")
    .attr("transform", "translate(150, 50)");
    
var arc = d3.svg.arc()
    .innerRadius(radius-20)
    .outerRadius(radius);
    
var pie = d3.layout.pie()
    .value(function (d) { return d; })
    .sort(null);
    
    var arcs = group.selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");
    
    arcs.append("path")
        .attr("d", arc)
        .attr("fill", function (d) { return color(d.data); });

