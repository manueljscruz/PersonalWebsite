// Switch tab pages and active navigation 
function openPage(pageName, element){
    var tab, tablinks, tablink;

    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablink");

    // for each tabcontent
    for (var i = 0; i < tabcontent.length; i++) {
        // check all classes
        for(var j = 0; j < tabcontent[i].classList.length; j++){
            // remove current tab active
            if(tabcontent[i].classList[j] == "tab-active"){
                tabcontent[i].classList.remove("tab-active");
            }
        }
    }
    
    // for each tab link
    for(var i = 0; i < tablinks.length; i++){
        // check all classes
        for(var j = 0; j < tablinks[i].classList.length; j++){
            // remove current tab link active
            if(tablinks[i].classList[j] == "link-active"){
                tablinks[i].classList.remove("link-active");
            }
        }
    }

    tab = document.getElementById(pageName);
    tablink = document.getElementById(pageName+"-link");
    if(tab != null && tablink != null){
        tab.classList.add("tab-active");
        tablink.classList.add("link-active");
    } 
}

// Twitch player embedded - responsive
var embed = new Twitch.Embed("twitch-embed", {
    width: "100%",
    height: "100%",
    channel: "mcthewhite",
    layout: "video",
    parent: ["localhost", "manueljscruz.online"]
});

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    var player = embed.getPlayer();
    player.play();
});

 
