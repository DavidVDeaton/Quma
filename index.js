$("#goldBackground").mouseover(function() {

    $("#qumaEmail").addClass("whiteA2");
    $("#qumaEmail").removeClass("goldA");
});

$("#goldBackground").mouseleave(function() {

    $("#qumaEmail").addClass("goldA");
    $("#qumaEmail").removeClass("whiteA2");
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
    }, 11000);

});

$("#osMore").click(() => {

    $("#osSummary").removeClass("summary");
    $("#osSummary").addClass("full");

    $("#os").removeClass("full");
    $("#os").addClass("summary");

});

$("#osHide").click(() => {

    $("#os").addClass("full");
    $("#os").removeClass("summary");

    $("#osSummary").addClass("summary");
    $("#osSummary").removeClass("full");

});

$("#dtMore").click(() => {

    $("#dtSummary").removeClass("summary");
    $("#dtSummary").addClass("full");

    $("#dt").removeClass("full");
    $("#dt").addClass("summary");

});

$("#dtHide").click(() => {

    $("#dt").addClass("full");
    $("#dt").removeClass("summary");

    $("#dtSummary").addClass("summary");
    $("#dtSummary").removeClass("full");

});

$("#vMore").click(() => {

    $("#vSummary").removeClass("summary");
    $("#vSummary").addClass("full");

    $("#v").removeClass("full");
    $("#v").addClass("summary");

});

$("#vHide").click(() => {

    $("#v").addClass("full");
    $("#v").removeClass("summary");

    $("#vSummary").addClass("summary");
    $("#vSummary").removeClass("full");

});