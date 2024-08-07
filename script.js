$(document).ready(function(){
    $(".btn").click(function(){
        $("#hhhh").val($("#hhhh").val()+$(this).html())});
    $(".result").click(function(){
        let res=eval($(".mytext").val());
        $(".mytext").val(res); });
});