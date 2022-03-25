

const root = document.documentElement;

const $ = (q) => {
    return document.querySelector(q);
}
function show(e, dt) {
    if (dt != undefined) {
        document.getElementById(e).style.display = dt;
    }
    else {
        document.getElementById(e).style.display = 'block';
    }
}

const d1_r = (nvb) => {
    return Math.round(nvb * 100) / 100;
}

function log(val) {
    // console.log(val);
}

function hide(e) {
    document.getElementById(e).style.display = 'none';
}
