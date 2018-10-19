$(document).ready(function() {
    getData();
});

function getData() {
    $.ajax({
        method: 'GET',
        url: 'https://www.jasonbase.com/things/r4Je.json',
        success: function(res) {
            var listLiked = JSON.parse(localStorage.getItem('listLiked'));
            if (listLiked == null) {
                listLiked = [];
            }
            var html = "";
            for (var i = 0; i < res.data.length; i++) {
                var inArray = "";
                /* Kiểm tra xem item đã like hay chưa, nếu đã like thì button cần có class liked */
                if (listLiked.indexOf(res.data[i].code) >= 0 && listLiked.indexOf(res.data[i].code) < listLiked.length) {
                    inArray = "liked";
                }
                html += "<div class=\"item animation-6\">" +
                    "<a href='./details.html?id=" + res.data[i].code + "'>" +
                        "<div class=\"animation-wrapper\">" +
                            "<div class=\"image-background\" style=\"background-image: url('" + res.data[i].image + "');\"></div>" +
                                "<div class=\"effect\">" +
                                    "<span>" + res.data[i].sub + "</span>" +
                                "</div>" +
                            "</div>" +
                        "<h4>" + res.data[i].title + "</h4>" +
                        "<p>" + res.data[i].author +
                            "<span>11" +
                                "<sup>th</sup> July, 2018</span>" +
                        "</p>" +
                    "</a>" +
                    "<p><button class='" + inArray +  
                        "' name='" + res.data[i].code + "' onclick='like(\"" + res.data[i].code + "\")'>Like !</button></p>" +
                "</div>";
            }
            $('.loading').remove();
            $('.list').prepend(html);
        },
        error: function(err) {
            console.log(err);
        }
    });
};

function like(id) {
    /* Lấy listLiked từ localStorage lưu vào biến listLiked */
    var listLiked = JSON.parse(localStorage.getItem('listLiked'));
    if (listLiked == null) {
        listLiked = [];
    }
    var existed = listLiked.indexOf(id);
    if (existed >= 0 && existed < listLiked.length) {
        listLiked.splice(existed, 1);
    } else {
        listLiked.push(id);
    }
    /* Thêm class liked vào button tương ứng */
    $('button[name=' + id + ']').toggleClass('liked');
    /* Lưu biếtn listLiked lại vào trong localStorage */
    localStorage.setItem('listLiked', JSON.stringify(listLiked));
}