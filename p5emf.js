let x = -40,
i = 0;

function setup() {
var canvas = createCanvas(453, 400, WEBGL)
background(200);
canvas.parent('field');
frameRate(40);
}

    function draw() {
    var y = 0;
        var W = document.getElementById('width').value*1.6;
        var H = document.getElementById('height').value*1.6/1.1;

        background(255, 255, 255);

//magnetic field
        var m1 = 300;
        var m2 = 300;
        fill('rgba(0, 0, 220, 0.4)');
        stroke('rgba(0, 0, 250, 0.4)');
        rectMode(CENTER);
        rect(0, 0, m1, m2);
        push();
        stroke('black');
        strokeWeight(2);
        ellipse(115, -115, 14, -14);
        line(109, -121, 121, -109);
        line(121, -121, 109, -109);
        pop();

/////////////////////////////////loop////////////////////////////////////
        push();
        fill('rgba(0,0,0,0)');
        strokeWeight(2);
        stroke('red');
        rectMode(CENTER);
        var x = mouseX - 227;

        if(mouseY>32 && mouseY<360) {
            if (x > -m1 && x < m1) {
                rect(x, y, W, H);
                computeVvector(mouseX, pmouseX);
                dl(x);
                computeEMF();
            }
            else if (x < -m1) {
                rect(-m1, y, W, H);
                dl(-m1);
            }
            else {
                rect(m1, y, W, H);
                dl(m1);
            }
        }
        pop();
        //////////////////////////////////////////////////////////////

        function computeVvector(x, px) {
            var v = x - px;
            stroke('red');
            strokeWeight(2);
            if (v > 0) {
                line(mouseX - 227 + W / 2, 0, mouseX - 227 + W / 2 + 3 * v, 0);
                fill('red');
                triangle(mouseX - 227 + W / 2 + 3 * v, 0, mouseX - 232 + W / 2 + 3 * v, 4, mouseX - 232 + W / 2 + 3 * v, -4);
            }
            else if (v < 0) {
                line(mouseX - 227 - W / 2, 0, mouseX - 227 - W / 2 + 3 * v, 0);
                fill('red');
                triangle(mouseX - 227 - W / 2 + 3 * v, 0, mouseX - 222 - W / 2 + 3 * v, 4, mouseX - 222 - W / 2 + 3 * v, -4);
            }
            else {
                line(0, 0, 0, 0);
            }
        }

        function computeEMF() {
            var B = document.getElementById('magnet').value,
                dx = mouseX - pmouseX,
                emf = B * dx * H,
                text = "emf = "+emf;
                document.getElementById('demo').innerHTML = text;

            if( (mouseX>75-W/2 && mouseX<75+W/2) || (mouseX>375-W/2 && mouseX<375+W/2) ){
                return emf;
            }
            else{
                text = "emf = 0";
                document.getElementById('demo').innerHTML = text;
                return 0;
            }
        }

        function dl(x) {
            push();
            stroke('black');
            strokeWeight(2);
            line(x + W / 2, 25 / 6, x + W / 2, -25 / 6);
            line(x + W / 2, -25 / 6, x + W / 2 - 4, 25 / 6 - 4);
            line(x + W / 2, -25 / 6, x + W / 2 + 4, 25 / 6 - 4);
            pop();
        }



/*var x = [],
    y= [];
var layout = {
     xaxis: {range: [0, 30]}
}

++i;

    x.push(i);

    var W = document.getElementById('width').value,
        B = document.getElementById('magnet').value,
        dx = mouseX - pmouseX;

    y.push(B*W*dx);

    if (x.length<30){
        x = x.slice(1);
        y = y.slice(1);
    }


var trace = {
    x: x,
    y: y,
    type: 'scatter'
};

    var data = [trace];

Plotly.react('graph',data,layout,{displayModeBar: false);*/



}//end draw
