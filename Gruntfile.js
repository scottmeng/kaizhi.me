module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            dev: {        
                src: ['routes/*.js']
            }
        },
        nodemon: {
		  dev: {
		    script: './bin/www'
		  }
		}
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');

    // task setup 
    grunt.registerTask('default', ['jshint', 'nodemon']);
};
