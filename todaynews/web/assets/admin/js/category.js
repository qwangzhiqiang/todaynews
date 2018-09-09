$(function () {
    var tbody = $("#tbody");
    var add = $('#add');
    var progress = $('#progress');
    $(document).ajaxStart(function () {
        console.log(1);
        progress.show();
    })
    $(document).ajaxStart(function () {
        console.log(2);
        progress.hide();
    })
    $("table").on('blur','input',function () {
        var id =$(this).closest('tr').attr('data-id');
        var k = $(this).attr('data-type');
        var v = $(this).val();
        $.ajax({
            url:'admin.php?c=category',
            data:{
                m:'update',
                id:id,
                k:k,
                v:v
            }
        })

    })
    console.log($('.remove'))
    $('table').on('click','.remove', function () {
        // alert(1);
        var id = $(this).closest('tr').attr("data-id");
        $.ajax({
            url:'admin.php?c=category&m=delete&id='+ id,
            success:function (data) {
                if (data == 1){
                    location.reload();
                }else{
                    alert('error');
                }

            }
        })
    })
    add.on('click',function () {
        $.ajax({
            url:'admin.php?c=category&m=insert',
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