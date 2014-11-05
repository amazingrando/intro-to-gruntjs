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
	  //  ================================================
		//  Creates CSS from a SCSS file.
		//  ================================================
		 sass: {
		  dist: {
		    files: {
		      'css/main.css': 'sass/main.scss'
		    }
		  }
		},
		//	Advanced SCSS task
		//  ================================================
		// sass: {
		//   dist: {
		//     files: [{
		//       expand: true,
		//       cwd: 'sass',
		//       src: ['*.scss'],
		//       dest: 'css',
		//       ext: '.css'
		//     }]
		//   }
		// },
	});

	// Loading tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Registering tasks to run
	grunt.registerTask('default', ['concat','sass']);

};




//  ================================================
//  Watch task.
//  ================================================
// watch: {
// 	options: {
//     livereload: true,
//   },
// 	scripts: {
// 		files: ['inc/*.html','sass/*.scss','sass/*/*.scss','sass/*/*/*.scss','js/*.js','js/*/*.js'],
// 		tasks: ['default'],
// 		options: {
// 			spawn: false,
// 		},
// 	}
// },

// grunt.loadNpmTasks('grunt-contrib-watch');


//  ================================================
//  Includes for JS.
//  ================================================
// includes: {
// 	options: {
// 		includeRegexp: /^(\s*)gruntImport\(['"]([^'"]+)['"]\);/
// 	},
// 	debug: {
// 		options: {
// 			debug: true
// 		},
// 		files: [{
// 			src  : 'js/main.js',
// 			dest : 'js/main.min.js',
// 			flatten: true
// 		}]
// 	}
// },

// grunt.loadNpmTasks('grunt-includes');


//  ================================================
//  Variables!
//  ================================================
// includereplace: {
//   vars: {
//     options: {
//       globals: {
// 				feeling : 'love',
// 				group: 'Dev Workshop Indy'
//       },
//     },
// 		expand : true,
// 		src    : 'index.html'
//   }
// }

// grunt.loadNpmTasks('grunt-include-replace');






