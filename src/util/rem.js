(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 75) + 'px';
            // 根据750px设计稿  所以除以375 本来  20 * (clientWidth / 375) + 'px'; fontsize= 20px = 1rem
            // 为了便于计算 在iphone中 得到视图宽度 clientWidth 为375 应该除以75 才会 换算fontsize= 100px = 1rem
            console.log("打印docEl.style.fontSize")
            console.log(docEl.style.fontSize)
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);