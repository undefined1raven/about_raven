

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

function hide(e) {
    document.getElementById(e).style.display = 'none';
}

function hide_projects_overview() {
    hide('project_details_cover');
    hide('projects_cotnainer');
    hide('overview_ln_0_h');
    $('#overview_ln_0_c').style.width = '0.546875%';
    show('project_details_container_acx');
}


document.addEventListener('keyup', (e) => {
    if (e.key == 'Escape') {
        project_details_back_btn_click_reflex();
    }
});

function hide_project_details() {
    show('project_details_cover');
    show('projects_cotnainer');
    show('overview_ln_0_h');
    $('#overview_ln_0_c').style.width = '1.09375%';
    hide('project_details_container_acx');
}

function project_details_back_btn_click_reflex() {
    hide_project_details();
    hide('ring_relay_details_acx');
    hide('ring_relay_tech_tools_list');
    hide('project_eagle_details_acx');
    hide('project_eagle_tech_tools_list');
    hide('project_dolores_details_acx');
    hide('project_dolores_tech_tools_list');
}

$('#project_details_back_btn').addEventListener('click', () => {
    project_details_back_btn_click_reflex();
});

function enable_live_deployment_btn() {
    $('#view_live_deployment_btn').innerText = 'View Live Deployment';
    $('#view_live_deployment_btn').style.display = 'flex';
    $('#view_live_deployment_btn').style.color = '#FFF';
    $('#view_live_deployment_btn').style.borderColor = '#000AFF';
    $('#view_live_deployment_btn').style.backgroundColor = '#000AFF20';
    $('#view_live_deployment_btn').addEventListener('mouseenter', () => {
        $('#view_live_deployment_btn').style.backgroundColor = '#000AFF40';
    });
    $('#view_live_deployment_btn').addEventListener('mouseleave', () => {
        $('#view_live_deployment_btn').style.backgroundColor = '#000AFF20';
    });
}

function disable_live_deployment_btn() {
    $('#view_live_deployment_btn').addEventListener('mouseenter', () => {

    });
    $('#view_live_deployment_btn').addEventListener('mouseleave', () => {

    });
}

const removeAllListeners = (targetNode, event) => {
    // remove listeners from the matching nodes
    _eventHandlers[event]
        .filter(({ node }) => node === targetNode)
        .forEach(({ node, handler, capture }) => node.removeEventListener(event, handler, capture))

    // update _eventHandlers global
    _eventHandlers[event] = _eventHandlers[event].filter(
        ({ node }) => node !== targetNode,
    )
}

$('#project_dolores_container').addEventListener('click', () => {
    hide_projects_overview();
    show('project_dolores_details_acx');
    show('project_dolores_tech_tools_list');
    $('#project_details_title_l').innerText = 'Project Dolores';
    $('#view_live_deployment_btn').innerText = 'No Live Deployment Available';
    $('#view_live_deployment_btn').style.display = 'none';
    $('#view_live_deployment_btn').style.borderColor = '#333';
    $('#view_live_deployment_btn').style.backgroundColor = '#000AFF00';
});

$('#project_eagle_container').addEventListener('click', () => {
    hide_projects_overview();
    show('project_eagle_tech_tools_list');
    show('project_eagle_details_acx');
    $('#project_details_title_l').innerText = 'Project Eagle';
    enable_live_deployment_btn();
    $('#view_live_deployment_btn').addEventListener('click', () => {
        window.location = 'https://vulture-uplink.com/showcase-advanced_telemetry';
        $('#view_live_deployment_btn').innerText = 'Redirecting...';
    });
});

$('#ring_relay_container').addEventListener('click', () => {
    hide_projects_overview();
    show('ring_relay_details_acx');
    show('ring_relay_tech_tools_list');
    $('#project_details_title_l').innerText = 'Ring Relay';
    enable_live_deployment_btn();
    $('#view_live_deployment_btn').addEventListener('click', () => {
        window.location = 'https://ring-relay.herokuapp.com';
        $('#view_live_deployment_btn').innerText = 'Redirecting...';
    });
});