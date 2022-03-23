

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

document.addEventListener('mousemove', e => {
    $('#cursor_acx').style.left = `${d1_r((e.clientX * 100) / root.clientWidth)}%`;
    $('#cursor_acx').style.top = `${d1_r((e.clientY * 100) / root.clientHeight)}%`;
});

$('#about_me_container').addEventListener('mouseenter', () => {
    $('#about_me_content_container').style.backgroundColor = '#2400FF30';
    $('#about_me_title_container').style.backgroundColor = '#2400FF30';
});
$('#about_me_container').addEventListener('mouseleave', () => {
    $('#about_me_content_container').style.backgroundColor = '#2400FF20';
    $('#about_me_title_container').style.backgroundColor = '#2400FF20';
});