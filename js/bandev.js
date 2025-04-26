((function() {var callbacks = [],timeLimit = 50,open = false;setInterval(loop, 1);return {addListener: function(fn) {callbacks.push(fn);},cancleListenr: function(fn) {callbacks = callbacks.filter(function(v) {return v !== fn;});}}
    function loop() {var startTime = new Date();debugger;if (new Date() - startTime > timeLimit) {if (!open) {callbacks.forEach(function(fn) {fn.call(null);});}open = true;window.stop();alert('此处添加关掉调试时提示的文字');document.body.innerHTML = "";} else {open = false;}}})()).addListener(function() {window.location.reload();});


function toDevtools(){
    let num = 0;
    let devtools = new Date();
    devtools.toString = function() {
        num++;
        if (num > 1) {
            window.location.href = "about:blank"
            blast();
        }
    }
    console.log('', devtools);
}
toDevtools();


document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && (e.keyCode == 123)) {
        e.keyCode = 0;
        e.returnValue = false;
        btf.snackbarShow('破网站就不要扒了！');
        return (false);
    }
}
$(document).keydown(function(e){
    if( e.ctrlKey  == true && e.keyCode == 83 ){
        console.log('ctrl+s');
        return false;
    }
});


// 作者: Gabriel
// 链接: https://pochacco.top/articles/1d2825e1/
//     来源: 鹿啵包の小窝
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。