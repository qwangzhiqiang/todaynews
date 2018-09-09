$(function() {
    $('.del').on('click', '.con', function () {
        var id = $(this).attr("type");
        console.log($(this));
        var val = $(this).context.innerText;
        $.ajax({
            url: '/index.php?c=page&m=category',
            data: {
                s:'0',
                id: id,
            },
            success: function () {
                location.reload();
            }
        })
    })

    $('.add').on('click', '.con', function () {
        var id = $(this).attr("type");
        var val = $(this).context.innerText;
        $.ajax({
            url: '/index.php?c=page&m=category',
            data: {
                s:'1',
                id: id,
            },
            success: function () {
                location.reload();
            }
        })
    })

})