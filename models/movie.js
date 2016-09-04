/**
 * Created by Hualy on 2016/9/3.
 */
var mongoose = require('mongoose');
var MovieSchema = require('../schemas/movie');
//(模型的名字，模式)
var Movie = mongoose.model('Movie',MovieSchema);
module.exports = Movie;//Movie 是构造函数