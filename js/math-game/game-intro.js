(jQuery)(document).ready(function(){
    (jQuery)('img.level-icons').hover(function(){
        el = (jQuery)(this);
        newsrc = el.attr('src').replace(el.attr('rel'),el.attr('rel')+'-over');
        el.attr('src',newsrc);
       },
       function(){
        el = (jQuery)(this);
        newsrc = el.attr('src').replace(el.attr('rel')+'-over',el.attr('rel'));
        el.attr('src',newsrc);
       }
    );
});