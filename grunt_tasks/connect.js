module.exports = {
    debug: {
		options: {
			port: '<%= configs.port %>',
			open: true,
			target: 'http://localhost:<%= configs.port %>',
			base: 'www'
		}
    },
    release:{
		options: {
			port: '<%= configs.port %>',
			open: true,
			target: 'http://localhost:<%= configs.port %>',
			base: 'build',
			keepalive: true
		}
    }
};