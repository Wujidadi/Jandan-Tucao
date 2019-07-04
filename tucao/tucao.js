/*
* by yellow(yellow.as@gmail.com)
*/
function yellow () {
    var comments = document.getElementById('comments').getElementsByTagName('li');
    for (var i = 0; i < comments.length; i++) {
        if (comments[i].id.slice(0, 8) == "comment-") {
            var div = comments[i].getElementsByTagName('div')[comments[i].getElementsByTagName('div').length - 1];
            var divs = comments[i].getElementsByTagName('div');
            for (var j = 0; j < divs.length; j++) {
                if (divs[j].getAttribute('class') == "vote") {
                    div = divs[j];
                    break;
                }
            }

            if (div.innerHTML.indexOf('吐槽') > 1) {
                var sps = div.getElementsByTagName('span');
                for (var j = 0; j < sps.length; j++) {
                    if (sps[j].getAttribute('class') == "time") {
                        sps[j].innerHTML = '';
                        div.removeChild(sps[j]);
                        break;
                    }
                }
            }

            div.innerHTML = div.innerHTML + '<span class="time"><a href="javascript:void(0);" onclick="loadComment(\'' + comments[i].id + '\');"> ↓吐槽</a></span>';

            if (document.getElementById('comment-box-' + comments[i].id) == undefined) {
                var cb = document.createElement('div');
                cb.id = 'comment-box-' + comments[i].id;
                cb.name = 'hide';
                comments[i].appendChild(cb);
            }

        }
    };

    var isT = false
    if (document.URL.toLowerCase().indexOf('jandan.net/t/') > -1) {
        isT = true
    }
    var ds = document.createElement('div');
    ds.id = "lv-container";
    ds.setAttribute('data-id', 'city');
    ds.setAttribute('data-uid', 'MTAyMC80NTA0MS8yMTU1OQ==');
    if (!isT) {
        ds.setAttribute('style', 'display:none;visibility:hidden;');
        ds.innerHTML = '';
    } else {
        ds.innerHTML = '正在载入评论，请稍候... （这句话不会消失）';
    }
    ds.charset = 'UTF-8';

    (document.getElementById('content')).appendChild(ds);



    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true
    ds.innerHTML = "(function(d,s){var j,e=d.getElementsByTagName(s)[0];if(typeof LivereTower==='function'){return}j=d.createElement(s);j.src='https://cdn-city.livere.com/js/embed.dist.js';j.async=true;e.parentNode.insertBefore(j,e)})(document,'script');";
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0]
        || document.getElementsByTagName('body')[0]).appendChild(ds);

    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.innerHTML = "var tempsi=setInterval(()=>{if(LivereTower!=null){console.log('LivereTower INITED');clearInterval(tempsi)}},500);function loadComment(theid){console.log('点解我这么靓仔要掉头发，你们这么样衰却不掉头发？');var refer='jandan.net/yellow'+theid;var meta=document.querySelector('meta[property=\"og:url\"]');if(meta&&meta.parentElement){meta.parentElement.removeChild(meta)}if(theid.split('-').length==2){var ds=document.createElement('meta');ds.setAttribute('property','og:url');ds.setAttribute('content','http://jandan.net/t/'+theid.split('-')[1]);(document.getElementsByTagName('head')[0]).appendChild(ds)}meta=document.querySelector('meta[property=\"og:title\"]');if(meta&&meta.parentElement){meta.parentElement.removeChild(meta)}if(theid.split('-').length==2){var ds=document.createElement('meta');ds.setAttribute('property','og:title');ds.setAttribute('content','无聊图-'+theid.split('-')[1]);(document.getElementsByTagName('head')[0]).appendChild(ds)}window.refer=refer;var lvchild=document.getElementById('lv-container');if(lvchild&&lvchild.parentElement){lvchild.parentElement.removeChild(lvchild)}var ds=document.createElement('div');ds.id='lv-container';ds.setAttribute('data-id','city');ds.setAttribute('data-uid','MTAyMC80NTA0MS8yMTU1OQ==');ds.setAttribute('style','min-height:100px;');ds.charset='UTF-8';ds.innerHTML='<span>正在载入，请稍候，不要重复点击！（这行字不会消失）</span>';(document.getElementById('comment-box-'+theid)).appendChild(ds);LivereTower.init()}console.log('document.URL',window.location.href);if(window.location.href.toLowerCase().indexOf('jandan.net/t/')>-1){var theid=window.location.href.toLowerCase().match(/[0-9]+/g)[0];var refer='jandan.net/yellowcomment-'+theid;window.refer=refer;console.log('window.refer',window.refer)}setTimeout(function(){$('.comment-like, .comment-unlike').click(function(){ooxx_action($(this),'comment')});$('.comment-report').click(function(){var m=$(this);var l=prompt('请输入投诉原因');if(l===null){return}if($.trim(l)===''){jandan_show_msg('请输入投诉原因');return}$.ajax({url:'/jandan-tucao-opt.php',method:'POST',data:{action:'report',comment_id:$(this).data('id'),reason:l,type:'1'},dataType:'json',success:function(n){if(n.code!=0){jandan_show_msg(n.msg);return}alert(n.msg);m.velocity('fadeOut',{complete:function(o){m.remove()}})},error:function(n){jandan_show_msg('hmmm, something wrong')}})})},1000);";
    (document.getElementsByTagName('head')[0]
        || document.getElementsByTagName('body')[0]).appendChild(ds);

    document.querySelectorAll('span.time').forEach(function(dom) {
        dom.addEventListener('click', function() {
            let scroll = document.documentElement.scrollTop;
            let intv = setInterval(function() {
                if (document.querySelector('#lv-container > iframe[title=livere]') !== null && document.querySelector('#lv-container > iframe[title=livere]').style.display !== 'none') {
                    clearInterval(intv);
                    document.querySelector('#lv-container').removeChild(document.querySelector('#lv-container').firstChild);
                    let collapse = document.createElement('span');
                    collapse.setAttribute('id', 'collapse');
                    collapse.setAttribute('style', 'color: #d60036; cursor: pointer; font-size: 14px; margin-left: calc(601px - 14px * 4)');
                    collapse.textContent = '收起吐槽';
                    collapse.addEventListener('click', function() {
                        document.querySelector('#lv-container').parentNode.removeChild(document.querySelector('#lv-container'));
                        window.scrollTo(0, scroll);
                    })
                    document.querySelector('#lv-container').appendChild(collapse);
                }
            }, 200);
        });
        dom.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            if (document.querySelector('#lv-container') !== null) {
                document.querySelector('#lv-container').parentNode.removeChild(document.querySelector('#lv-container'));
            }
        });
    });
}

// setTimeout("yellow();", 2000);
let waitComment = setInterval(function() {
    if (document.getElementById('comments') !== null) {
        clearInterval(waitComment);
        yellow();
    }
}, 200);
