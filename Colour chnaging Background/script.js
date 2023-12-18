let index = 0;

function hello(){
    let colors=["Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Orange",
        "Pink",
        "Brown",
        "Black",
        "White"]

    document.getElementsByTagName("body")[0].style.background=colors[index++];

    if(index>colors.length - 1){
        index = 0;
    }
}