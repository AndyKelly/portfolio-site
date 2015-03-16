jQuery(document).ready(function($){
	var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

	//open team-project bio
	$('.cd-team').find('ul a').on('click', function(event){
		event.preventDefault();
		var selected_project = $(this).data('type');
		$('.cd-project-bio.'+selected_project+'').addClass('slide-in');
		$('.cd-project-bio-close').addClass('is-visible');

		// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( is_firefox ) {
			$('main').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
		} else {
			$('main').addClass('slide-out');
			$('body').addClass('overflow-hidden');
		}

	});

	//close team-project bio
	$(document).on('click', '.cd-overlay, .cd-project-bio-close', function(event){
		event.preventDefault();
		$('.cd-project-bio').removeClass('slide-in');
		$('.cd-project-bio-close').removeClass('is-visible');

		if( is_firefox ) {
			$('main').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('main').removeClass('slide-out');
			$('body').removeClass('overflow-hidden');
		}
	});
});

var filenames = ['nodejs.png', 'nodejs.png', 'nodejs.png', 'nodejs.png', 'nodejs.png', 'nodejs.png', ]


function addElementsToSkillsGrid(){
	for (var i = filenames.length - 1; i >= 0; i--) {
		$('skillsGrid').

		filenames[i]
	};
}