!
	function(s) {
		var t, a = '<a href="/{{name}}/" class="package list-group-item" target="_blank"  onclick="_hmt.push([\'_trackEvent\', \'packages\', \'click\', \'{{name}}\'])"><div class="row"><div class="col-md-3"><h4 class="package-name">{{name}}</h4></div><div class="col-md-9 hidden-xs"><p class="package-description">{{description}}</p></div></div></a>',
			i = [];
		(function(t) {
			i = t
		}),
			s(window).scroll(function() {
				100 < s(this).scrollTop() ? s("#back-to-top").fadeIn() : s("#back-to-top").fadeOut()
			}),
			s("#back-to-top").on("click",
				function(t) {
					return t.preventDefault(),
						s("html, body").animate({
								scrollTop: 0
							},
							100),
						!1
				});
		try {

		} catch(t) {

		}
	} (jQuery),
	$(function() {

	});