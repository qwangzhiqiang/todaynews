$(function() {
    $('#ul').on('click', '.remove', function() {
        var id = $(this).closest('li').attr('data-id');
        // delete.php
        $.ajax({
            url: 'admin1.php',
            data: {
                c:'news',
                m:'delete',
                id: id
            },
            success: function(data) {
                if (data == '1') {
                    alert('删除成功')
                    location.reload();
                } else {
                    alert('网络出了点问题')
                }
            }
        })
    });

    $('#ul').on('blur', 'input', function() {
        var title = $(this).val();
        var id = $(this).closest('li').attr('data-id');
        // update.php
        $.ajax({
            url: 'admin1.php',
            data: {
                c:'news',
                m:'update',
                id: id,
                title: title
            },
            success:function(data){
                console.log(data);
            }
        })
    })

    $("#submit").on('click',function(){
        // insert.php
        $.ajax({
            url:'admin1.php',
            data:{
                c:'news',
                m:'insert',
                title:$('#title').val(),
                dsc:$('#dsc').val(),
                con:$('#content').val()
            },
            success:function(data){
                if (data == '1') {
                    alert('添加成功')
                    location.reload();
                } else {
                    alert('网络出了点问题')
                }
            }
        })
    })

})