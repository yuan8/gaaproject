// Init App
var myApp = new Framework7({
    modalTitle: 'Framework7',
    // Enable Material theme
    material: true,
});

// Expose Internal DOM library
var $$ = Dom7;

// // Add main view
var mainView = myApp.addView('.view-main', {reloadPages:true
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




