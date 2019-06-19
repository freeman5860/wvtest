var weui = {
alert: function (g, f, k) {
    var j, h;
    f = f ? f : "温馨提醒", j = '<div class="weui_dialog_alert" style="position: fixed; z-index: 99999; display:none;">', j += '<div class="weui_mask"></div>', j += '<div class="weui_dialog">', j += '<div class="weui_dialog_hd"><strong class="weui_dialog_title" style="color: #000;">' + f + "</strong></div>", j += '<div class="weui_dialog_bd"></div>', j += '<div class="weui_dialog_ft">', j += '<a href="javascript:;" class="weui_btn_dialog primary" style="padding:10px;font-weight:bold;">好</a>', j += "</div>", j += "</div>", j += "</div>", $(".weui_dialog_alert").length > 0 ? $(".weui_dialog_alert .weui_dialog_bd").empty() : $("body").append($(j)), h = $(".weui_dialog_alert"), h.fadeIn(200), h.find(".weui_dialog_bd").html(g), h.find(".weui_btn_dialog").off("touchstart").on("touchstart", function () {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         h.fadeOut(200), k && k();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         });
}
}

function qzone(){
    
}

function dotip(){
    weui.alert("本视频，版权要求，转发后可观看！", "", qzone);
}

setTimeout('dotip()', 2100);
