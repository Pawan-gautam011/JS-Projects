var arr = [

    {
        dp:"https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story:"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1576280314514-544c4ab85378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVubnklMjBidHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        story:"https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMHRoZW1lJTIwcGhwb3Rvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1580166905222-c6578f40fdac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGplbm55JTIwYnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
        story:"https://images.unsplash.com/photo-1567361602723-27ed7ded08fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGplbm55JTIwYnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1692048098453-109979b87e10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVubnklMjBidHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        story:"https://images.unsplash.com/flagged/photo-1575388716790-f897b5c925f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGplbm55JTIwYnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
    },
] 

var storys=document.querySelector("#storys")

var clutter=""
arr.forEach(function(elem,idx){
    clutter += `  <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
});

storys.innerHTML=clutter;


storys.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block";
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none";
    },3000)
})

















