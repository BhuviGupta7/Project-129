song = "";
leftWristY = "";
leftWristX = "";

function preload()
{
    song = loadSound("music.mp3");
    song = loadSound("golden.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCanvas(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

function draw()
{
    Image(video, 0, 0, 600, 500);
    
    fill("#FF0000");
	stroke("#FF0000");

  if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);
		InNumberleftWristY = Number(leftWristY);
		new_leftWristY = floor(InNumberleftWristY *2);
		leftWristY_divide_1000 = new_leftWristY/1000;
		document.getElementById("volume").innerHTML = "Volume = " + leftWristY_divide_1000;		
		song.setVolume(leftWristY_divide_1000);	
	}

}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}