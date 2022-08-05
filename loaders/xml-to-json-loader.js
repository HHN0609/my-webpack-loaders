const parseString = require('xml2js').parseString;

// 一个把XML文件转换为JSON格式的loader
function xmlToJsonLoader (content) {
    parseString(content, {}, (err, result) => {
        // 这里返回的时候就要带上"module.exports = "，要不然就会报错
        this.callback(err, !err && "module.exports = " + JSON.stringify(result));
    })
    return;
}

module.exports = xmlToJsonLoader;