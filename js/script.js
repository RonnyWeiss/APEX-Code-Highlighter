var codeHighlighter = (function () {
    "use strict";
    var scriptVersion = "1.0";
    var util = {
        version: "1.0.8",
        isAPEX: function () {
            if (typeof (apex) !== 'undefined') {
                return true;
            } else {
                return false;
            }
        },
        debug: {
            info: function (str) {
                if (util.isAPEX()) {
                    apex.debug.info(str);
                }
            },
            error: function (str) {
                if (util.isAPEX()) {
                    apex.debug.error(str);
                } else {
                    console.error(str);
                }
            }
        },
        isStringaJSON: function (pString) {
            try {
                JSON.parse(pString);
            } catch (e) {
                return false;
            }
            return true;
        }
    };

    return {
        initialize: function (elemetSelector) {

            $(elemetSelector).each(function (i, obj) {
                var curObj = $(obj).html();

                if (util.isStringaJSON(curObj)) {
                    var tJSON;
                    try {
                        tJSON = JSON.parse(curObj);
                        var tStr = JSON.stringify(tJSON, null, 2);
                        $(obj).html(tStr)
                    } catch (e) {
                        util.debug.error("Error while try to handle JSON");
                        util.debug.error(e);
                    }
                }
                hljs.highlightBlock(obj);
            });
        }
    }

})();
