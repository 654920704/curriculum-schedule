var first = { id:'1', num: '第一节', mon: '数学', tue: '数学', wed: '英语', thu: '物理', fri: '英语' };
var second = { id:'2',num: '第二节', mon: '数学', tue: '地理', wed: '英语', thu: '生物', fri: '英语' };
var third = { id:'3',num: '第三节', mon: '数学', tue: '数学', wed: '化学', thu: '历史', fri: '语文', };

var arr0 = [first,second,third];

if (localStorage.myData){
    arr0 = JSON.parse(localStorage.myData);
}else{
    localStorage.myData = JSON.stringify(arr0);
}
console.log(arr0);


// var html = template('table', { list: arr0,title:'class' });

// document.querySelector('#content').innerHTML = html;

// var arr = JSON.parse(localStorage.myData);

var html = template('table',{list:arr0,title:'class'});

document.querySelector('#content').innerHTML = html;

