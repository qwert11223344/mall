import { myJsonp } from './jsonp';

export function getHomeData(){
  return myJsonp({
    url:'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
	cbkey: 'jsonpCallback',
	data: {
		g_tk: 1928093487,
		inCharset: 'utf-8',
		outCharset: 'utf-8',
		notice: 0,
		format: 'jsonp',
		platform: 'h5',
		uin: 0,
		needNewCode: 1
  }
})
}