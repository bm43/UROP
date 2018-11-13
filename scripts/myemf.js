//declaring variables using in plotting function

var layout = {

    hovermode: "closest",
    showlegend: false,
    xaxis: {range: [0, 1], zeroline: true, title: "x"},
    yaxis: {range: [-0.5, 1.5], zeroline: true, title: "y"},
    zaxis: {range: [0, 1], zeroline: true, title: "z"}
};

var data = [
    //plate 1
    {
        x: [0, 0, 1, 1, 0, 0, 1, 1],
        y: [0, 1, 1, 0, 0, 1, 1, 0],
        z: [0, 0, 0, 0, 0.1, 0.1, 0.1, 0.1],
        i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
        j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
        k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
        color: 'rgb(0, 200, 200)',
        type: 'mesh3d'
    },

    //plate 2
    {
        x: [0, 0, 1, 1, 0, 0, 1, 1],
        y: [0, 1, 1, 0, 0, 1, 1, 0],
        z: [0.9, 0.9, 0.9, 0.9, 1, 1, 1, 1],
        i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
        j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
        k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
        color: 'rgb(0, 200, 200)',
        type: 'mesh3d'
    },
    //the circuit
    {
        x: [0.4, 0.4, 0.6, 0.6, 0.4, 0.4, 0.6, 0.6],
        y: [0.4, 0.6, 0.6, 0.4, 0.4, 0.6, 0.6, 0.4],
        z: [0.49, 0.49, 0.49, 0.49, 0.51, 0.51, 0.51, 0.51],
        i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
        j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
        k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
        color: 'rgba(255, 0, 0, 0.3)',
        type: 'mesh3d'
    }
];

//initial plot
Plotly.plot('myDiv', data, layout);

//one function = add frames and then animate

function startAnimation() {
    //add frames to animate
    Plotly.addFrames('myDiv', [
        {
            data: [
               {
                    x: [0, 0, 1, 1, 0, 0, 1, 1],
                    y: [0, 1, 1, 0, 0, 1, 1, 0],
                    z: [0, 0, 0, 0, 0.1, 0.1, 0.1, 0.1],
                    i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    color: 'rgb(0, 200, 200)',
                    type: 'mesh3d'
                },
                {
                    x: [0, 0, 1, 1, 0, 0, 1, 1],
                    y: [0, 1, 1, 0, 0, 1, 1, 0],
                    z: [0.9, 0.9, 0.9, 0.9, 1, 1, 1, 1],
                    i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    color: 'rgb(0, 200, 200)',
                    type: 'mesh3d'
                },
                {
                    x: [0.4, 0.4, 0.6, 0.6, 0.4, 0.4, 0.6, 0.6],
                    y: [-0.1, 0.1, 0.1, -0.1, -0.1, 0.1, 0.1, -0.1],
                    z: [0.49, 0.49, 0.49, 0.49, 0.51, 0.51, 0.51, 0.51],
                    i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    color: 'rgba(255, 0, 0, 0.3)',
                    type: 'mesh3d'
                }
            ],
            name: 'frame1'
        },
        {
            data: [
                {
                    x: [0, 0, 1, 1, 0, 0, 1, 1],
                    y: [0, 1, 1, 0, 0, 1, 1, 0],
                    z: [0, 0, 0, 0, 0.1, 0.1, 0.1, 0.1],
                    i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    color: 'rgb(0, 200, 200)',
                    type: 'mesh3d'
                },
                {
                    x: [0, 0, 1, 1, 0, 0, 1, 1],
                    y: [0, 1, 1, 0, 0, 1, 1, 0],
                    z: [0.9, 0.9, 0.9, 0.9, 1, 1, 1, 1],
                    i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    color: 'rgb(0, 200, 200)',
                    type: 'mesh3d'
                },
                {
                    x: [0.4, 0.4, 0.6, 0.6, 0.4, 0.4, 0.6, 0.6],
                    y: [0.9, 1.1, 1.1, 0.9, 0.9, 1.1, 1.1, 0.9],
                    z: [0.49, 0.49, 0.49, 0.49, 0.51, 0.51, 0.51, 0.51],
                    i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    color: 'rgba(255, 0, 0, 0.3)',
                    type: 'mesh3d'
                }
            ], name:'frame2'
        }
        ]);


//starting animation and repeat
    for (var i = 0; i < 20; i++) {
        Plotly.animate('myDiv', ['frame1', 'frame2'], {
            frame: [
                {duration: 500, redraw: false},
                {duration: 500, redraw: false},
            ],
            transition: [
                {duration: 2000},
                {duration: 2000},
            ],
            mode: 'afterall'
        });
    }
};

/*function Line(points) {
    this.x = [];
    this.y = [];
    this.z = [];
    for (var i = 0; i  < points.length; ++i) {
        this.x.push(points[i][0]);
        this.y.push(points[i][1]);
        this.z.push(points[i][2]);
    }

    this.gObject = function(color, width=7, dash="solid") {
        var lineObject = {
            type: "scatter3d",
            mode: "lines",
            x: this.x,
            y: this.y,
            z: this.z,
            line: {color: color, width: width, dash:dash}
        }
        return lineObject;
    }

    this.arrowHead = function(color, width=7, wingLen=0.1, dash="solid") {
        var lastElm = this.x.length - 1;
        var [r, theta, phi] = c2sp(this.x[lastElm]-this.x[0], this.y[lastElm]-this.y[0], this.z[lastElm]-this.z[0]);
        var offset = [this.x[0], this.y[0], this.z[0]];
        var frac = wingLen*r;
        var sin45 = Math.sin(Math.PI/4);
        var d = r - frac * sin45;
        var wingLength = Math.sqrt(Math.pow(frac*sin45,2) + d*d);
        var wingAngle = Math.acos(d/wingLength);

        var wings = {
            type: "scatter3d",
            mode: "lines",
            x: [wings_xyz[0][0], this.x[lastElm], wings_xyz[1][0]],
            y: [wings_xyz[0][1], this.y[lastElm], wings_xyz[1][1]],
            z: [wings_xyz[0][2], this.z[lastElm], wings_xyz[1][2]],
            line: {color: color, width: width}
        }

        return wings;
    }
}*/