module.exports = function(grunt) {
  var jsFiles = "src/*.js",
	coffeeFiles = "src/*.coffee",
	coffeeDest = "coffee/dest/";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '/*file end*/;'
      },
      dist: {
        src: [jsFiles],
        dest: 'dist/app.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/app.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['gruntfile.js', jsFiles],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
	coffee:{
		dist:{
			expand: true, 
			cwd: "coffee/",
			src: [coffeeFiles],
			dest: coffeeDest,
			//flatten:true,若为true,没有层次结构~
			ext: '.js'
		}
	},
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

/*   grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat'); */
  //loadTask so easy ~
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'concat', 'uglify','coffee']);
  grunt.registerTask('runcoffee', ['coffee']);//warn:任务名不能和后面的某个名字一致，如不能叫coffee


};