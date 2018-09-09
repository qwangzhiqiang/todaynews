const request = require('request');
const mysql = require('mysql');
const async = require('async');
const cheerio = require('cheerio');
const filter = require('bloom-filter-x');
const iconv = require('iconv-lite');
const con = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'wzq'
});

function feedFilter() {
    console.log('开始喂布隆过滤器');
    con.query('select * from news', (err, results) => {
        results.forEach(v => filter.add(v.url));
    console.log('喂完了');
    fetch();
})
}

// 请求 news.zol.com.cn 找到你要的东西  放进数据库
function fetch() {
    console.log('开始抓取数据');
    let data = [];
    request(
        // 第一个参数
        {
            url: 'http://news.zol.com.cn',
            encoding: null,
        },
        // 第二个参数
        (err, res, body) => {
        console.log('总页面拿到了');
    body = iconv.decode(body, 'gb2312');
    let $ = cheerio.load(body);
    console.log('取出页面中的所有新闻开始过滤');
    $('.content-list li').each((k, v) => {
        let url = $(v).find('a').attr('href');
    let title = $(v).find('.info-head').find('a').text();
    let image = $(v).find('img').attr('.src');
    let dsc = $('.content-list-item p').text();
    let create_time = $(v).find('.foot-date').text();
    if (filter.add(url)) {
        data.push({
            cid: 1,
            title: title,
            dsc: dsc,
            image: image,
            url: url,
            create_time: create_time,
            content:'aaa'
        })
    }
});
    // console.log(`过滤完成,还剩${data.length}条数据,开始插入数据库`);
    async.eachLimit(
        data, 1, (v, next) => {
        con.query(
        'INSERT INTO `news` ( `cid`, `title`, `dsc`, `image`, `url`, `create_time`, `content`) VALUES (?,?,?,?,?,?,?)',
        [v.cid, v.title, v.dsc, v.image, v.url, v.create_time, v.content],
        (err, result) => {
        console.log(result.insertId);
    next(null);
}
)
}
    ( ) => {
        console.log('全部插入完成');
        setTimeout(fetch, 60 * 1000)
    }
)
}
)
}

feedFilter();




