/**
 * Created by linas on 5/28/15.
 */
$(document).ready(function () {

    checkOrientation();

    var nav1 = $("#nav_about_me");
    var nav2 = $("#nav_resume");
    var nav3 = $("#nav_portfolio");
    var nav4 = $("#nav_contact");
    var marker = $("#header_marker");

    var section1 = $("#body_section1");
    var section2 = $("#body_section2");
    var section3 = $("#body_section3");
    var section4 = $("#body_section4");

    $(".fancybox").fancybox();
    $(".fancybox2").fancybox();
    $(".fancybox3").fancybox();
    $(".fancybox4").fancybox();
    undefinedCheck();
    checkContentScroll();
    checkContentScroll2();

    var nav_pos_1 = nav1.position().left;
    var nav_pos_2 = nav2.position().left;
    var nav_pos_3 = nav3.position().left;
    var nav_pos_4 = nav4.position().left;

    var nav_width_1 = nav1.css("width");
    var nav_width_2 = nav2.css("width");
    var nav_width_3 = nav3.css("width");
    var nav_width_4 = nav4.css("width");

    var section1_top = section1.position().top - 50;
    var section2_top = section2.position().top - 50;
    var section3_top = section3.position().top - 50;
    var section4_top = section4.position().top - 50;

    function undefinedCheck() {
        if (typeof nav1 === 'undefined') {
            nav1 = $("#nav_about_me");
        }
        if (typeof nav2 === 'undefined') {
            nav2 = $("#nav_about_me");
        }
        if (typeof nav3 === 'undefined') {
            nav3 = $("#nav_about_me");
        }
        if (typeof nav4 === 'undefined') {
            nav4 = $("#nav_about_me");
        }
        if (typeof marker === 'undefined') {
            marker = $("#header_marker");
        }
        if (typeof section1 === 'undefined') {
            section1 = $("#body_section1");
        }
        if (typeof section1 === 'undefined') {
            section2 = $("#body_section2");
        }
        if (typeof section3 === 'undefined') {
            section3 = $("#body_section3");
        }
        if (typeof section4 === 'undefined') {
            section4 = $("#body_section4");
        }
    }

    moveMarker(nav_pos_1, nav_width_1);


    $(".nav_button").click(function (e) {
        var clicked = $(this).attr("id");
        switch (clicked) {
            case "nav_about_me":
                moveMarker(nav_pos_1, nav_width_1);
                scrollTop(section1_top);
                break;
            case "nav_resume":
                moveMarker(nav_pos_2, nav_width_2);
                scrollTop(section2_top);
                break;
            case "nav_portfolio":
                moveMarker(nav_pos_3, nav_width_3);
                scrollTop(section3_top);
                break;
            case "nav_contact":
                moveMarker(nav_pos_4, nav_width_4);
                scrollTop(section4_top);
                break;
            default :
                moveMarker(nav_pos_1, nav_width_1);
                break;
        }
    });

    function moveMarker(to, width) {
        marker.animate({'left': to}, {queue: false});
        marker.animate({'width': width}, {queue: false});
    }

    function scrollTop(fromTop) {
        $('html, body').animate({scrollTop: fromTop}, {duration: 1000});
    }

    var step = 100;
    var scrolling = false;

    $("#content_scroll_up").bind("click", function (event) {
        event.preventDefault();
        $("#body_section2_content").animate({
            scrollTop: "-=" + step + "px"
        });
    }).bind("mouseover", function () {
        scrolling = true;
        scrollContent("up");
    }).bind("mouseout", function () {
        scrolling = false;
    });

    $("#content_scroll_down").bind("click", function (event) {
        event.preventDefault();
        $("#body_section2_content").animate({
            scrollTop: "+=" + step + "px"
        });
    }).bind("mouseover", function (event) {
        scrolling = true;
        scrollContent("down");
    }).bind("mouseout", function (event) {
        scrolling = false;
    });


    function scrollContent(direction) {
        var amount = (direction === "up" ? "-=1px" : "+=1px");
        checkContentScroll();
        $("#body_section2_content").animate({
            scrollTop: amount
        }, 1, function () {
            if (scrolling) {
                scrollContent(direction);
            }
        });

    }

    function checkContentScroll() {
        var scrollTop = $("#body_section2_content").scrollTop();
        var height = $("#body_section2_content").height();
        var content_height = $("#body_section2_content")[0].scrollHeight;

        if (scrollTop <= 0) {
            $("#content_scroll_up").animate({opacity: "0"}, {queue: false});
        } else {
            $("#content_scroll_up").animate({opacity: "1"}, {queue: false});
        }

        if ((scrollTop + height) >= content_height) {
            $("#content_scroll_down").animate({opacity: "0"}, {queue: false});
        } else {
            $("#content_scroll_down").animate({opacity: "1"}, {queue: false});
        }
    }

    /** ************* **/
    /**PROJECTS SCROLL**/
    /** ************* **/
    var step2 = 100;
    var scrolling2 = false;

    $("#projects_scroll_up").bind("click", function (event) {
        event.preventDefault();
        $("#body_section3_content").animate({
            scrollTop: "-=" + step2 + "px"
        });
    }).bind("mouseover", function () {
        scrolling2 = true;
        scrollContent2("up");
    }).bind("mouseout", function () {
        scrolling2 = false;
    });

    $("#projects_scroll_down").bind("click", function (event) {
        event.preventDefault();
        $("#body_section3_content").animate({
            scrollTop: "+=" + step2 + "px"
        });
    }).bind("mouseover", function (event) {
        scrolling2 = true;
        scrollContent2("down");
    }).bind("mouseout", function (event) {
        scrolling2 = false;
    });


    function scrollContent2(direction) {
        var amount = (direction === "up" ? "-=1px" : "+=1px");
        checkContentScroll2();
        $("#body_section3_content").animate({
            scrollTop: amount
        }, 1, function () {
            if (scrolling2) {
                scrollContent2(direction);
            }
        });

    }

    function checkContentScroll2() {
        var scrollTop2 = $("#body_section3_content").scrollTop();
        var height2 = $("#body_section3_content").height();
        var content_height2 = $("#body_section3_content")[0].scrollHeight;

        if (scrollTop2 <= 0) {
            $("#projects_scroll_up").animate({opacity: "0"}, {queue: false});
        } else {
            $("#projects_scroll_up").animate({opacity: "1"}, {queue: false});
        }

        if ((scrollTop2 + height2) >= content_height2) {
            $("#projects_scroll_down").animate({opacity: "0"}, {queue: false});
        } else {
            $("#projects_scroll_down").animate({opacity: "1"}, {queue: false});
        }
    }

    function checkOrientation() {
        var wWidth = $(window).width();
        var wHeight = $(window).height();

        if (wWidth > wHeight && wWidth < 992) {
            alert("Please use Portrait! \n" +
                " the website is under construction and does not support a landscape resolution under 992px wide!");
        }
    }


});