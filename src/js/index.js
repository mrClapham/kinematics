import KinematicDisplay from '../js/kinematics/KinematicDisplay'
import 'core-js';

require  ("../sass/entry.scss");

document.addEventListener("DOMContentLoaded", function(){
    init();
});

function init(){
    let kd = KinematicDisplay.create('content');
};




