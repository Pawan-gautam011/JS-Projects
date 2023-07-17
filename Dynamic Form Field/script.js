let surevy_options=document.getElementById('survey_options');
let add_fields=document.getElementById('add_fields');
let remove_fields=document.getElementById('remove_fields');


add_fields.onclick = function () {
    let newFiels=document.createElement('input');
    newFiels.setAttribute('type','text');
    newFiels.setAttribute('name','survey_options[]');
    newFiels.setAttribute('class','survey_options');
    newFiels.setAttribute('size','50');
    newFiels.setAttribute('placeholder','Another Fields');

    surevy_options.appendChild(newFiels);  

};
remove_fields.onclick= function (){
    let input_tags= surevy_options.getElementsByTagName('input');
    if(input_tags.length >2 ){
        surevy_options.removeChild(input_tags[(input_tags.length) -1]);
    }
}







