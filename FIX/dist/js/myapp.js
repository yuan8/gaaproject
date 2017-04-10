// Initialize your app

var TokenAkses;

if(TokenAkses==null){
    window.location = "./login.html";
}




var view_layer="view-home";

var myApp = new Framework7({
    modalTitle: 'Gaa Project',
    material: true,
    pushState: true,
    swipePanel: 'left',
    materialPageLoadDelay:0,
    cacheIgnoreGetParameters:true,
     onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    },
    materialPreloaderHtml:'<span class="preloader-inner"><span class="preloader-inner-gap"></span><span class="preloader-inner-left"><span class="preloader-inner-half-circle"></span></span><span class="preloader-inner-right"><span class="preloader-inner-half-circle"></span></span></span>'

});

// Export selectors engine
var $$ = Dom7;

// Add views
var viewHome = myApp.addView('#view-home',{
	animatePages:true,
	preloadPreviousPage:true,
	domCache:true

});
var viewNotification = myApp.addView('#view-notification', {
	animatePages:true,
	preloadPreviousPage:true,
	domCache:true
});

var viewProfile = myApp.addView('#view-profile',{
	animatePages:true,
	preloadPreviousPage:true,
	domCache:true
});
var viewOption = myApp.addView('#view-option',{
	animatePages:true,
	preloadPreviousPage:true,
	domCache:true	
});


// load page main
viewOption.router.loadPage('pages/option.html');
viewHome.router.loadPage('pages/home.html');
viewProfile.router.loadPage('pages/profile.html');
viewNotification.router.loadPage('pages/notification.html');



$$('.navigation-main a.tab-link').on('click',function(ev) {
	var id=this.href;
	id=id.split('#')[1];
	view_layer=id;

});



// library function

function reload_pull() {

	var ptrContent = $$('.pull-to-refresh-content');
	ptrContent.on('ptr:refresh', function (e) {
		setTimeout(function (){
		 	myApp.addView('#'+view_layer).url;

		myApp.pullToRefreshDone();
		},2000);

	});
}


myApp.onPageInit('home', function (page) {

	reload_pull();

	for(var i=0;i<=3;i++){
			console.log(i+1 );
	}

});




myApp.onPageInit('notification', function (page) {

	reload_pull();
	$$.post('http://dindinbirthday.esy.es/pesan.php',{},function(data){

	var data_Notiv =JSON.parse(data);
	console.log(data_Notiv);
	for(var i=0;i<data_Notiv.length;i++){

		var dom='<li><a href="#" class="item-link item-content">'+
            '<div class="item-inner">'+
              '<div class="item-title-row">'+
                '<div class="item-title"><h5>Yuan</h5> <p>'+data_Notiv[i].pesan+'</p><p1>15 minutes ago</p1></div>'+
                '<div class="item-after"> <div class="item-media"><img class="lazy" src="http://lorempixel.com/160/160/people/1" width="80"></div>'+
                '</div>'+
              '</div>'+
            '</div>'+     
            '</a>'+
        '</li>';
        $$('#notiv-all ul').prepend(dom);
	}


});
	$$('.tab-notiv .tab-link-notiv').on('click',function(ev){

		var html="check_box";
		$$('.tab-notiv .tab-link-notiv .material-icons').html("check_box_outline_blank");
		// this.innerHTML=html;
		this.innerHTML=this.innerHTML.replace('check_box_outline_blank','check_box');
		var idPageNotiv=this.getAttribute('target');
		if(idPageNotiv!=null){
			$$('.tabs-isi .tab').css('display','none');
		$$(idPageNotiv).css('display','block');
		}
		

	});

});

