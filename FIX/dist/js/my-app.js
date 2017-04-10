// Init App


var TokenAkses;

if(TokenAkses==null){
    window.location = "./login.html";
}



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

// Expose Internal DOM library
var $$ = Dom7;

// // Add main view
var mainView = myApp.addView('.view-main', {
    animatePages:true,
    preloadPreviousPage:true,
    domCache:true

});


function closeFunctionPopover(){
		// popover close if click

	$$('.popover a').on('click', function () {
	    myApp.closeModal('.popover');
	});
}



// data page 


myApp.onPageInit('detail-project', function (page) {

	$$('.button-popover-detail-project').on('click', function () {
    var clickedLink = this;
    myApp.popover('.popover-detail-project', clickedLink);
	});  
	
	closeFunctionPopover();

	$$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
    });

	// close panel left
    $$('.panel-left a').on('click',function (e) {
    	myApp.closePanel('left');
    });




});

myApp.onPageInit('people-on-project', function (page) {

  
    


    $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
    });

    // close panel left
    $$('.panel-left a').on('click',function (e) {
        myApp.closePanel('left');
    });




});

myApp.onPageInit('complaint', function (page) {

  
    


    $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
    });

    // close panel left
    $$('.panel-left a').on('click',function (e) {
        myApp.closePanel('left');
    });




});

myApp.onPageInit('panel-design', function (page) {
	$$('.open-left-panel').on('click', function (e) {
	// 'left' position to open Left panel
	myApp.openPanel('left');
    });

	// close panel left
    $$('.panel-left a').on('click',function (e) {
    	myApp.closePanel('left');
    });

	$$('.button-new-folder').on('click', function () {
	    myApp.prompt('', 'CREATE NEW FOLDER', function (value) {
	       
	   });
	});
 

});

myApp.onPageInit('detail-folder', function (page) {
	$$('.button-popover-detail-folder').on('click', function () {
    var clickedLink = this;
    myApp.popover('.popover-detail-folder', clickedLink);
	});  

	$$('.open-left-panel').on('click', function (e) {
	// 'left' position to open Left panel
	myApp.openPanel('left');
    });

	// close panel left
    $$('.panel-left a').on('click',function (e) {
    	myApp.closePanel('left');
    });

	closeFunctionPopover();


});


myApp.onPageInit('project-update', function (page) {
	$$('.button-popover-project-update').on('click', function () {
    var clickedLink = this;
    myApp.popover('.popover-project-update', clickedLink);
	});  

	$$('.open-left-panel').on('click', function (e) {
	// 'left' position to open Left panel
	myApp.openPanel('left');
    });

	// close panel left
    $$('.panel-left a').on('click',function (e) {
    	myApp.closePanel('left');
    });

	closeFunctionPopover();


});



myApp.onPageInit('budget', function (page) {
	$$('.button-popover-project-update').on('click', function () {
    var clickedLink = this;
    myApp.popover('.popover-project-update', clickedLink);
	});  

	$$('.open-left-panel').on('click', function (e) {
	// 'left' position to open Left panel
	myApp.openPanel('left');
    });

	// close panel left
    $$('.panel-left a').on('click',function (e) {
    	myApp.closePanel('left');
    });

	closeFunctionPopover();


});


myApp.onPageInit('picture', function (page) {
    $$('.button-share').on('click', function () {
    var clickedLink = this;
    myApp.popover('.popover-share', clickedLink);
    });  

    $$('.open-left-panel').on('click', function (e) {
    // 'left' position to open Left panel
    myApp.openPanel('left');
    });

    // close panel left
    $$('.panel-left a').on('click',function (e) {
        myApp.closePanel('left');
    });

    closeFunctionPopover();


});
myApp.onPageInit('partners', function (page) {

var pickerDevice = myApp.picker({
        input: '#category-partner',
        cols: [
            {
                textAlign: 'center',
                values: ['Category 1','Category 2','Category 3','Category 4','Category 5' ]
            }
        ]
    });


 // Init slider and store its instance in mySwiper variable
  var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination'
  });


});



