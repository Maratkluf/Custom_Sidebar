const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')

            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')


// const linkColor = document.querySelectorAll('.nav__link')

// function colorLink(){
//     linkColor.forEach(l => l.classList.remove('active'))
//     this.classList.add('active')
// }

// linkColor.forEach(l => l.addEventListener('click', colorLink))

function getBrowserInfo() {
    var t,v = undefined;
    if (window.chrome) t = 'Chrome';
    else if (window.opera) t = 'Opera';
    else if (document.all) {
        t = 'IE';
        var nv = navigator.appVersion;
        var s = nv.indexOf('MSIE')+5;
        v = nv.substring(s,s+1);
    }
    else if (navigator.appName) t = 'Netscape';
    return {type:t,version:v};
}
function bookmark(a){
    var url = window.document.location;
    var title = window.document.title;
    var b = getBrowserInfo();
    if (b.type == 'IE' && 8 >= b.version && b.version >= 4) window.external.AddFavorite(url,title);
    else if (b.type == 'Opera') {
        a.href = url;
        a.rel = "sidebar";
        a.title = url+','+title;
        return true;
    }
    else if (b.type == "Netscape") window.sidebar.addPanel(title,url,"");
    else alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
    return false;
}