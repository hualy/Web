
/**
 * Created by Hualy on 2016/9/4.
 */
$(function () {
    $('.del').click(function (e) {
        var target = $(e.target);//拿到当前点的是哪个按钮
        var id = target.data('id');
        var tr = $('.item-id-'+id);

        $.ajax({
            type:'DELETE',
            url:'/admin/list?id='+id
        })
        .done(function (results) {
            if(results.success===1){
                if(tr.length>0){//当前这行有
                    tr.remove()
                }
            }
        })
    })
})