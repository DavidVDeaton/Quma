$("#goldBackground").mouseover(function() {

    $("#qumaEmail").addClass("whiteA");
    $("#qumaEmail").removeClass("goldA");
});

$("#goldBackground").mouseleave(function() {

    $("#qumaEmail").addClass("goldA");
    $("#qumaEmail").removeClass("whiteA");
});

$("#noClick").click(() => {

    $("#qumaLearning").removeClass("smallerLogo");
    $("#qumaLearning").addClass("smallestLogo");

    $("#noClick").removeClass("display");
    $("#noClick").addClass("none");

    $("#onClick").removeClass("none");
    $("#onClick").addClass("display");

    setTimeout(() => {
        $("#noClick").removeClass("none");
        $("#noClick").addClass("display");
    
        $("#onClick").removeClass("display");
        $("#onClick").addClass("none");

        $("#qumaLearning").removeClass("smallestLogo");
        $("#qumaLearning").addClass("smallerLogo");
    }, 12000);

});
