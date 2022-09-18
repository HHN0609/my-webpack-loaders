const parseString = require('xml2js').parseString;

// 一个把XML文件转换为JSON格式的loader
function xmlToJsonLoader (content) {
    // 如果是一个异步的loader，就不能直接用this.callback或者return返回处理好的数据了
    // 应该先用this.async();函数返回的一个回调函数来代替callback
    // const callback = this.async();
    // setTimeout(() => {
    //      callback(err, result);
    // }, 1000) 
    parseString(content, {}, (err, result) => {
        // 这里返回的时候就要带上"module.exports = "，要不然就会报错
        this.callback(err, !err && "module.exports = " + JSON.stringify(result));
    })
    return;
}

module.exports = xmlToJsonLoader;