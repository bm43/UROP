$(window).on('load', function() {//main
    const
    dom = {

        /*fSwitch:    $("#field-switch input"),*/
        vSlider:    $("input#voltage")
    },
    //plot
        plt = {
        layout : {
            showlegend: false,
            showscale: false,
            margin: {
                l: 1, r: 0, b: 0, t: 1, pad: 5
            },
            scene: {
                aspectmode: "cube",
                xaxis: {range: [-1, 1]},
                yaxis: {range: [-1, 1]},
                zaxis: {range: [-1, 1]},
                camera: { eye: {
                    x: 1.5,
                    y: 1.5,
                    z: 0.7,}
                }
            },
        }
    };


    let old_arrow_number = Math.round(parseFloat($("input#voltage").val())/10);

    /*let old_field = $("input[name = 'field-switch']:checked").val();*/

    $.when().then(function() {//main
        initial();
    });

    function computeData(){

$("#voltage-display").html($("input#voltage").val().toString()+"T");

        /*let c_field     = $("input[name = 'field-switch']:checked").val(),*/
            voltage     = parseFloat($("input#voltage").val());
 let number_of_arrows    = Math.round(voltage/10);
        extra_spacing = (1 / number_of_arrows);

        var data = [
                {//upper
                    color: '#87CEEB',
                    type: "mesh3d",
                    name: "magnet",
                    x: [-1, -1, 1, 1, -1, -1, 1, 1],
                    y: [-1, 1, 1, -1, -1, 1, 1, -1],
                    z: [0.9, 0.9, 0.9, 0.9, 1, 1, 1, 1],
                    i: [1, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                },
                {//lower
                    color: '#87CEEB',
                    type: "mesh3d",
                    name: "magnet",
                    x: [-1, -1, 1, 1, -1, -1, 1, 1],
                    y: [-1, 1, 1, -1, -1, 1, 1, -1],
                    z: [-0.9, -0.9, -0.9, -0.9, -1, -1, -1, -1],
                    i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                },
            ];


            data.push(
                {//A D D    A N I M A T I O N ! !
                    opacity: 0.2,
                    color: '#379F9F',
                    type: "mesh3d",
                    name: "circuit",
                    x: [-0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5],
                    y: [-0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5],
                    z: [-0.02, -0.02, -0.02, -0.02, 0.02, 0.02, 0.02, 0.02],
                    i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                }
            );



        let number_x, number_y, x, y, z, u, v, w;

        let colour, linewidth = 10, top_of_arrow = 0.9, bottom_of_arrow = -0.75;


            for (let i = 0; i < number_of_arrows; i++) {
                for (let q = 0; q < number_of_arrows; q++) {
                    number_x = ((2 * (i / number_of_arrows)) - 1) + extra_spacing;
                    number_y = ((2 * (q / number_of_arrows)) - 1) + extra_spacing;
                    data.push({
                        type: "scatter3d",
                        mode: "lines",
                        name: "field line",
                        line: {width: linewidth, color: colour},
                        x: [number_x, number_x],
                        y: [number_y, number_y],
                        z: [top_of_arrow, bottom_of_arrow]
                    });
                    let [x, y, z, u, v, w] = make_arrows([number_x, number_x], [number_y, number_y], [top_of_arrow, bottom_of_arrow])
                    data.push({
                        type: "cone",
                        colorscale: [[0, colour], [1, colour]],
                        name: "arrow",
                        x: [x],
                        y: [y],
                        z: [z],
                        u: [u],
                        v: [v],
                        w: [w],
                        sizemode: "absolute",
                        sizeref: 0.2,
                        showscale: false,
                    });
                }
            }


        if (data.length < 103) {
            var extensionSize = data.length;
            for (var i = 0; i < (103 - extensionSize); ++i) {
                data.push(
                    {
                        type: "scatter3d",
                        mode: "lines",
                        x: [0],
                        y: [0],
                        z: [0]
                    }
                );
            }
        }
        return data;
    };

    function initial() {
        const maxMag   = 50,//use max magnetic field to set the number of empty traces required
            maxArrows   = (maxMag/10)**2;
        Plotly.purge("graph")
        Plotly.newPlot('graph', computeData(), plt.layout);
        console.log("initialising");

        /*dom.mSwitch.on("change", update_graph);*/
        dom.fSwitch.on("change", update_graph);
        dom.vSlider.on("input", update_graph);
    }
 function update_graph() {

        let new_trace = []

        let new_V = parseFloat($("input#voltage").val());

        /*let new_field = $("input[name = 'field-switch']:checked").val();*/

        new_number_of_arrows  = Math.round(new_V/10);

        old_arrow_number = Math.round(parseFloat($("input#voltage").val())/10);
        /*old_field = $("input[name = 'field-switch']:checked").val();*/

    };

    function make_arrows(pointsx, pointsy, pointsz) {
        /* Returns an arrowhead based on an inputted line */
        var x = pointsx[1],
            y = pointsy[1],
            z = pointsz[[1]],
            u = 0.1 * (pointsx[1] - pointsx[0]),
            v = 0.1 * (pointsy[1] - pointsy[0]),
            w = 0.1 * (pointsz[1] - pointsz[0]);
        return [x, y, z, u, v, w]
    };
});