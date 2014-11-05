module.exports = function(grunt) {

	grunt.initConfig({
		//  ================================================
		//  This merges separate files into one .html file.
		//  ================================================
		concat: {
	    dist: {
	      src: ['inc/header.html','inc/body.html','inc/footer.html'],
	      dest: 'index.html'
	    },
	  },
	});

	// Loading tasks
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Registering tasks to run
	grunt.registerTask('default', ['concat']);

};



//  ================================================
//  SASS task information
//
//	This will get copy/pasted above.
//  ================================================
// sass: {
//   dist: {
//     files: {
//       'css/main.css': 'sass/main.scss'
//     }
//   }
// }

// grunt.loadNpmTasks('grunt-contrib-sass');





