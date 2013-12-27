define([
	'handlebars',
	'moment'
	], function(Handlebars, moment){

		Handlebars.registerHelper('datetime', function(value, options) {
			var format = 'D MMMM, YYYY [at] HH:mm';
			if(options.hash.format) {
				format = options.hash.format;
			}
		 	if(value) {
				var time = moment(value).format(format);
				return new Handlebars.SafeString(time);
			}
		});

});