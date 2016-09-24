var arr0 = JSON.parse(localStorage.myData);

var str = (window.location.href);
// console.dir(str.split('?'));
var classID = str.split('?')[1];
console.log(classID);
console.log(arr0);

var obj = {};
if (classID == 'add') {
    obj.id = arr0.length + 1;
} else {
    obj.id = classID;
}


var num = document.querySelector('.num');
var mon = document.querySelector('.mon');
var tue = document.querySelector('.tue');
var wed = document.querySelector('.wed');
var thu = document.querySelector('.thu');
var fri = document.querySelector('.fri');


arr0.filter(function (item) {
    if (classID == item.id) {
        num.value = item.num;
        mon.value = item.mon;
        tue.value = item.tue;
        wed.value = item.wed;
        thu.value = item.thu;
        fri.value = item.fri;

    }
})



function sumbit() {
    if (classID == 'add') {
        obj.num = num.value;
        obj.mon = mon.value;
        obj.tue = tue.value;
        obj.wed = wed.value;
        obj.thu = thu.value;
        obj.fri = fri.value;
        console.log(obj);
        console.log('添加成功');
        var arr = JSON.parse(localStorage.myData);
        arr.push(obj);
        localStorage.myData = JSON.stringify(arr);
        Location.href = 'index.html';

    }
    else {
        var arr = JSON.parse(localStorage.myData);
        arr.filter(function (item) {
            if (classID == item.id) {
                item.num = num.value;
                item.mon = mon.value;
                item.tue = tue.value;
                item.wed = wed.value;
                item.thu = thu.value;
                item.fri = fri.value;
            }
        })
        console.log('修改成功');
       

        localStorage.myData = JSON.stringify(arr);
        Location.href = 'index.html';
    }


}





