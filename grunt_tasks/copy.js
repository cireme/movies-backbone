module.exports = {
	vendors: {
	  files: [
	  	// bower vendors
	    {src: '<%= configs.bower %>/bootstrap/dist/js/bootstrap.js', dest: '<%= configs.vendors %>/bootstrap.js'},
	    {src: '<%= configs.bower %>/jquery/jquery.js', dest: '<%= configs.vendors %>/jquery.js'},
	    {src: '<%= configs.bower %>/requirejs/require.js', dest: '<%= configs.vendors %>/require.js'},
	    {src: '<%= configs.bower %>/backbone/backbone.js', dest: '<%= configs.vendors %>/backbone.js'},
	    {src: '<%= configs.bower %>/backbone-validation/dist/backbone-validation-amd.js', dest: '<%= configs.vendors %>/backbone-validation.js'},
	    {src: '<%= configs.bower %>/backbone.stickit/backbone.stickit.js', dest: '<%= configs.vendors %>/backbone.stickit.js'},
	    {src: '<%= configs.bower %>/marionette/lib/backbone.marionette.js', dest: '<%= configs.vendors %>/marionette.js'},
	    {src: '<%= configs.bower %>/underscore/underscore.js', dest: '<%= configs.vendors %>/underscore.js'},
	    {src: '<%= configs.bower %>/handlebars/handlebars.js', dest: '<%= configs.vendors %>/handlebars.js'},
	    {src: '<%= configs.bower %>/requirejs-hbs/hbs.js', dest: '<%= configs.vendors %>/hbs.js'},
	    {src: '<%= configs.bower %>/text/text.js', dest: '<%= configs.vendors %>/text.js'},
	    {src: '<%= configs.bower %>/moment/moment.js', dest: '<%= configs.vendors %>/moment.js'},
	    
	    // bower assets
	    {src: '<%= configs.bower %>/bootstrap/dist/css/bootstrap.css', dest: '<%= configs.wwwFolder %>/styles/bootstrap.css'},
	    {expand: true, cwd: '<%= configs.bower %>/bootstrap/dist/fonts/', src: ['**'], dest: '<%= configs.wwwFolder %>/fonts/'},
	    {src: '<%= configs.bower %>/animate.css/animate.css', dest: '<%= configs.wwwFolder %>/styles/animate.css'}
	  ]
	},
	src:{
		files:[
			// application scripts
	  		{expand: true, cwd: 'src/scripts/',src: ['**'], dest: '<%= configs.wwwFolder %>/scripts/'},
		]
	},
	assets:{
		files:[
			// application assets
	    	{expand: true, cwd: '<%= configs.assetsFolder %>/', src: ['**'], dest: '<%= configs.wwwFolder %>/'}
		]
	},
	production:{
		files:[
			// application assets
			{expand: true, cwd: '<%= configs.bower %>/bootstrap/dist/fonts/', src: ['**'], dest: 'build/fonts/'},
	    	{expand: true, cwd: '<%= configs.assetsFolder %>/', src: ['**'], dest: 'build/'},
	    	{src: '<%= configs.bower %>/animate.css/animate.css', dest: '<%= configs.wwwFolder %>/styles/animate.css'}
		]
	}
};