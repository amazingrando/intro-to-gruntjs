module.exports = function(grunt) {

	// 	=======================================================
	//	Configuration
	// 	=======================================================
	var cfg = grunt.file.readJSON('wr-config.json');


	// 	=======================================================
	//	Project configuration
	// 	=======================================================
	grunt.initConfig({

	//	SWIG builds templates
	// 	=======================================================
		swig: {
			compile: {
				generateSitemap   : false,
				generateRobotstxt : false,
				expand            : true,
				src               : [ cfg.projectPath + '/<%= grunt.option(\"target\") %>/**/*.swig' ],
				dest              : cfg.projectPath
			}
		},

	//	Watch for changes to .swig, .tpl
	// 	=======================================================
		watch: {
			templates: {
				files : [ cfg.projectPath + '/<%= grunt.option(\"target\") %>/**/*.swig', cfg.projectPath + '/<%= grunt.option(\"target\") %>/**/**/*.tpl'],
				tasks : [ 'swig:compile','includereplace:'+'<%= grunt.option(\"deploy\") %>' ],
			}
		},

	//	Replace variables with real paths, depending on
	//	if we are deploying to dev or live.
	//
	//	@@variable is the pattern.
	//
	//	dev  = local; live = live
	// 	=======================================================
		includereplace: {
		  dev: {
		    options: {
		      globals: {
						font_css_path : '../_shared/css',
						img_path      : 'img/'
		      },
		    },
				expand : true,
				src    : [ cfg.projectPath + '/<%= grunt.option(\"target\") %>/*.html' ]
		  },
		  live: {
		    options: {
		      globals: {
						font_css_path : 'http://editor.ne16.com/indiana-state-university/webfonts',
						img_path      : 'http://editor.ne16.com/indiana-state-university/<%= grunt.option(\"target\") %>'
		      },
		    },
				expand : true,
				src    : [ cfg.projectPath + '/<%= grunt.option(\"target\") %>/*.html' ],
				dest   : ''
		  }
		}
	});


	// 	=======================================================
	//	Load plugins
	// 	=======================================================
	grunt.loadNpmTasks('grunt-swig');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-include-replace');


	// 	=======================================================
	//	Grunt default requires a target folder. (We don't want
	//	to regenerate all templates all the time.)
	//
	//
	//	use 'grunt --target=folder' to target "emails/folder".
	//
	//
	//	use 'grunt --target=folder --deploy=dev'
	//	to target "emails/folder" and use local assets.
	// 	=======================================================

	// We need a target folder for tasks to run on.
	var target = grunt.option('target');
	if (target == undefined) {
		grunt.fail.fatal("You need to specify a targer folder. 'grunt --target=folder'.");
	}
	grunt.log.writeln("Target folder is \""+target+"\"");

	// In case we need to review locally we have that option
	var deploy = grunt.option('deploy') == 'dev' ? 'dev' : 'live';
	grunt.log.writeln("Resources path is \""+deploy+"\"");

	// Remember to list a target folder or this will fail.
	grunt.registerTask('default', 	[ 'swig', 'includereplace:'+deploy, 'watch' ]);

};








