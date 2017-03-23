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


});



