

const root = document.documentElement;

///General Purpose Functions [ gg ]///

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
function hide(e) {
    document.getElementById(e).style.display = 'none';
}

function hide_projects_overview(){
    hide('project_details_cover');
    hide('projects_cotnainer');
    hide('overview_ln_0_h');
    $('#overview_ln_0_c').style.width = '0.546875%';
    show('project_details_container_acx');
}

function hide_project_details(){
    show('project_details_cover');
    show('projects_cotnainer');
    show('overview_ln_0_h');
    $('#overview_ln_0_c').style.width = '1.09375%';
    hide('project_details_container_acx');
}

$('#project_details_back_btn').addEventListener('click', () => {
    hide_project_details();
});

$('#project_dolores_container').addEventListener('click', () => {
    hide_projects_overview();
    hide('ring_relay_details_acx');
    hide('ring_relay_tech_tools_list');
    show('project_dolores_details_acx');
    show('project_dolores_tech_tools_list');
    $('#project_details_title_l').innerText = 'Project Dolores';
});

$('#ring_relay_container').addEventListener('click', () => {
    hide_projects_overview();
    hide('project_dolores_details_acx');
    hide('project_dolores_tech_tools_list');
    show('ring_relay_details_acx');
    show('ring_relay_tech_tools_list');
    $('#project_details_title_l').innerText = 'Ring Relay';
});