const bb8 = document.querySelector('.bb8');
const ball = document.querySelector('.ball');
const antennas = document.querySelector('.antennas');
const eyes = document.querySelector('.eyes');
const h2 = document.querySelector('h2');

let dPos = 0;
let dSpeed = 1;
const dMinSpeed = 1;
const dMaxSpeed = 4;
const dAccel = 1.04;
let dRot = 0;
let movingRight = false;
let mPos = window.innerWidth * 0.8;
const slowOffset = 120;

function moveDroid() {
    if (mPos > dPos + 35) {
        if (!movingRight) { movingRight = true; antennas.classList.add('right'); eyes.classList.add('right'); }
        if (mPos - dPos > slowOffset) { if (dSpeed < dMaxSpeed) dSpeed *= dAccel; }
        else if (mPos - dPos < slowOffset) { if (dSpeed > dMinSpeed) dSpeed /= dAccel; }
        dPos += dSpeed;
        dRot += dSpeed;
    } else if (mPos < dPos - 35) {
        if (movingRight) { movingRight = false; antennas.classList.remove('right'); eyes.classList.remove('right'); }
        if (dPos - mPos > slowOffset) { if (dSpeed < dMaxSpeed) dSpeed *= dAccel; }
        else if (dPos - mPos < slowOffset) { if (dSpeed > dMinSpeed) dSpeed /= dAccel; }
        dPos -= dSpeed;
        dRot -= dSpeed;
    }
    bb8.style.left = `${dPos}px`;
    ball.style.transform = `rotate(${dRot}deg)`;
    requestAnimationFrame(moveDroid);
}

document.addEventListener('mousemove', e => { h2.classList.add('hide'); mPos = e.pageX; });
document.addEventListener('touchmove', e => { h2.classList.add('hide'); mPos = e.touches[0].pageX; });

moveDroid();