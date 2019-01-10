$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("ol li:first-child").click(function(){
      $("#content").css("font-size","120%");
    })

    /* On click: Decrease the font size (80%) */
    $("ol li:nth-child(2)").click(function(){
      $("#content").css("font-size","-=80%");
    })

    /* On click: Bold or normalize the green words */
    $("ol li:nth-child(3)").click(function(){
      $(".green").css("font-weight","bold");
    })

    /* On click: Bold or normalize the green words */
    $("ol li:nth-child(4)").click(function(){
      $(".red").css("text-decoration","underline");
    })

    /* On click: Replace the logo with another image */
    $("ol li:nth-child(5)").mouseover(function(){
      $("img").attr("src","images/koala.jpg");
    })

    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $("a").mouseover(function(){
      $(this).attr('title', $(this).attr("href"));
    })

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $("ol li:nth-child(7)").click(function(){
      $("<h1>Chapter 1</h1>").insertBefore("h2:first");
      $("<h1>Chapter 2</h1>").insertBefore("h2:eq(1)");
    })
});
