var tentacle = [];

function setup() {
	createCanvas(600, 600);

	tentacle.push(new Segment({"position": createVector(width/2, height)}, 30, 0));
	for (var i = 1; i < 14; i += 1) {
		tentacle.push(new Segment({"parent": tentacle[i - 1], "segmentNumber": i + 2}, 30, 0));
	}
}

function draw() {
	background(51);

	var endTentacle = tentacle[tentacle.length - 1];
	endTentacle.follow(mouseX, mouseY);
	endTentacle.update();
	endTentacle.show();

	for (var i = tentacle.length - 2; i >= 0; i -= 1) {
		tentacle[i].follow(tentacle[i+1].position.x, tentacle[i+1].position.y);
		tentacle[i].update();
		tentacle[i].show();
	}
}
