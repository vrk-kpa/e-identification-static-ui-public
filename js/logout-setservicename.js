        function setServiceName() {
            var SERVER_LANG_COOKIE_NAME = 'E-Identification-Lang';
            var USER_LANG_COOKIE_NAME = 'E-Identification-Lang-User';
            var userDefinedLang = Cookies.get(USER_LANG_COOKIE_NAME);
            var serverDefinedLang = Cookies.get(SERVER_LANG_COOKIE_NAME);
            var definedLang = userDefinedLang ? userDefinedLang : serverDefinedLang;
            if (definedLang == 'sv') {
                document.getElementById("serviceDisplayName").textContent=document.getElementById("serviceDisplayNameSv").textContent;
                document.getElementById("serviceDisplayNameReturn").textContent=document.getElementById("serviceDisplayNameSv").textContent;
                $('.localizationsv').show();
            } else if (definedLang == 'en') {
                document.getElementById("serviceDisplayName").textContent=document.getElementById("serviceDisplayNameEn").textContent;
                document.getElementById("serviceDisplayNameReturn").textContent=document.getElementById("serviceDisplayNameEn").textContent;
                $('.localizationen').show();
            } else {
                document.getElementById("serviceDisplayName").textContent=document.getElementById("serviceDisplayNameFi").textContent;
                document.getElementById("serviceDisplayNameReturn").textContent=document.getElementById("serviceDisplayNameFi").textContent;
                $('.localizationfi').show();
            }
        }
