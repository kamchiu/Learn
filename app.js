var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
var bodyParser = require('body-parser');


app.set('views','./views/pages');
app.set('view engine','jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('bower_components'));

// app.use(express.static(__dirname + '/views'));
// app.use('/bower_components', express.static(__dirname + '/bower_components'));
 console.info('__dirname',__dirname,path.join(__dirname, 'bower_components'));
app.listen(port);

console.log('server started at ' + port);

//index page
app.get('/',function(req,res){
	res.render('index',{
		title: "index page",
		movies: [{
			title:'Iron Man 3',
			_id: 0,
			poster:'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=d9d212a28c82b90129a0cb6112e4c212/63d9f2d3572c11dfbfc286a6652762d0f703c227.jpg'
		},{
			title:'Iron Man 3',
			_id: 1,
			poster:'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=d9d212a28c82b90129a0cb6112e4c212/63d9f2d3572c11dfbfc286a6652762d0f703c227.jpg'
		},{
			title:'Iron Man 3',
			_id: 2,
			poster:'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=d9d212a28c82b90129a0cb6112e4c212/63d9f2d3572c11dfbfc286a6652762d0f703c227.jpg'
		},{
			title:'Iron Man 3',
			_id: 3,
			poster:'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=d9d212a28c82b90129a0cb6112e4c212/63d9f2d3572c11dfbfc286a6652762d0f703c227.jpg'
		},{
			title:'Iron Man 3',
			_id: 4,
			poster:'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=d9d212a28c82b90129a0cb6112e4c212/63d9f2d3572c11dfbfc286a6652762d0f703c227.jpg'
		}]
	})
});

//detail for movies
app.get('/detail/:id',function(req,res){
	res.render('detail',{
		title: "detail page",
		movie: {
			title: 'Iron Man 3',
			director: 'Shane Black',
			country: 'USA',
			year: 2013,
			language: 'Enlish',
			poster: 'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=d9d212a28c82b90129a0cb6112e4c212/63d9f2d3572c11dfbfc286a6652762d0f703c227.jpg',
			flash: 'http://player.video.qiyi.com/94dd4579b4d049a697046fdbdd4c184b/0/7836/dianying/20130705/d1d302060cb5312.swf-albumId=460709-tvId=635033-isPurchase=1-cnId=1',
			summary: 'Tony Stark to encounter enemy challenge, the people destroy the life of Tony Stark. Stark is beset with unprecedented anxiety disorders. At the same time, the infamous terrorist leader with adults (Ben Kingsley Ben Kingsley). Shebeginstofall made a series of bomb attacks, Tony the year\'s most loyal bodyguard that in a recent attack wounded. Not long after, Tony, pepper and had and he had one side of the edge of the female botanist Maya (Rebecca hall Rebecca hall decorated) at home was under heavy gunfire, nearly died, and all this are with 13 years ago the casual encounters with scientists Aldrich giren (Guy Pearce Guy Pearce ornaments) and the ultimate biological research.'
		}
	})
});

//root
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title: "admin page",
		movie: {
			title: '',
			director: '',
			country: '',
			year: '',
			language: '',
			poster: '',
			flash: '',
			summary: ''
		}
	})
});

//list of films
app.get('/admin/list',function(req,res){
	res.render('list',{
		title: "list page",
		movies: [{
			name:'Iron Man 3',
			_id: 0,
			director: 'Shane Black',
			country: 'USA',
			year: 2013,
			language: 'Enlish',
			poster: 'http://g.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=d9d212a28c82b90129a0cb6112e4c212/63d9f2d3572c11dfbfc286a6652762d0f703c227.jpg',
			flash: 'http://player.video.qiyi.com/94dd4579b4d049a697046fdbdd4c184b/0/7836/dianying/20130705/d1d302060cb5312.swf-albumId=460709-tvId=635033-isPurchase=1-cnId=1',
			summary: 'Tony Stark to encounter enemy challenge, the people destroy the life of Tony Stark. Stark is beset with unprecedented anxiety disorders. At the same time, the infamous terrorist leader with adults (Ben Kingsley Ben Kingsley). Shebeginstofall made a series of bomb attacks, Tony the year\'s most loyal bodyguard that in a recent attack wounded. Not long after, Tony, pepper and had and he had one side of the edge of the female botanist Maya (Rebecca hall Rebecca hall decorated) at home was under heavy gunfire, nearly died, and all this are with 13 years ago the casual encounters with scientists Aldrich giren (Guy Pearce Guy Pearce ornaments) and the ultimate biological research.'
		}]
	})
});
