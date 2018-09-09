$(function () {
    var tbody = $("#tbody");
    var add = $('#add');
    var progress = $('#progress');
    $(document).ajaxStart(function () {
        progress.show();
    })
    $(document).ajaxStart(function () {
        progress.hide();
    })
    $("table").on('blur','input',function () {
        var id =$(this).closest('tr').attr('data-id');
        var k = $(this).attr('data-type');
        var v = $(this).val();
        $.ajax({
            url:'/admin.php?c=news',
            data:{
                m:'update',
                id:id,
                k:k,
                v:v
            }
        })

    })
    // console.log($('.remove'))
    $('table').on('click','.remove', function () {
        // alert(1);
    var id = $(this).closest('tr').attr("data-id");
    $.ajax({
        url:'/admin.php?c=news&m=delete&id='+ id,
        success:function (data) {
            if (data == 1){
                location.reload();
            }else{
                alert('error');
            }

        }
    })
})
    // tbody.on('click', '.del', function() {
    //     var id = $(this).closest('tr').attr('data-id');
    //     // delete.php
    //     $.ajax({
    //         url: 'admin1.php?c=news&m=delete&id=' +  id,
    //
    //         success: function(data) {
    //             if (data == '1') {
    //                 alert('删除成功')
    //                 location.reload();
    //             } else {
    //                 alert('网络出了点问题')
    //             }
    //         }
    //     })
    // });
    add.on('click',function () {
        $.ajax({
            url:'/admin.php?c=news&m=insert',
            success:function (data) {
                if (data == 1){
                    location.reload();
                }else{
                    alert('error');
                }

            }
        })
    })

})