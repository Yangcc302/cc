require(['jquery', 'handlebars'], function($, handlebars) {
    $.ajax({
        url: "/api/list",
        dataType: "json",
        success: function(res) {
            console.log(res)

            var tpl = $('#tpl').html();

            var templaste = handlebars.compile(tpl);

            var html = templaste(res);

            $('#list').html(html)
        },
        error: function(error) {
            console.log(error)
        }
    })
})