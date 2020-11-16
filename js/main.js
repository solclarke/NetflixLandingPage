// Individual tab border and content:
// Define variables
const tabItems = $(".tab-item");
const tabContentItems = $('.tab-content-item');

// Select tab content item
function selectItem(e) {
	removeBorder();
	removeShow();
	// Add border to current tab
	$(this).addClass('tab-border');
	// Grab content item from DOM
	const tabContentItem = $(`#${this.id}-content`);
	// Add show class
	tabContentItem.addClass('show');
}

function removeBorder() {
	tabItems.removeClass('tab-border');
}

function removeShow() {
	tabContentItems.removeClass('show');
}

// Listen for tab click
tabItems.click(selectItem);


// Homepage scroller icon:
// Get the button
const mybutton = $('#chevronUp');

// When the user scrolls down 20px from the top of the document, show the button
	$(window).scroll(function() {
	scrollFunction()
});

function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  if (document.documentElement.scrollTop > 20) 

  {
	mybutton.css("display", "block");
  } else {
	mybutton.css("display", "none");
  }
}