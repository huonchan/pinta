console.log('Hello Google Plugin by background.js!');

//https://developer.chrome.com/extensions/downloads
//https://stackoverflow.com/questions/10423670/chrome-extension-that-copies-image-url-on-click
chrome.contextMenus.create({
    title: "画像を取得",
    contexts:["image"],
    onclick: function(info, tab) {
        
        info.url ;

        console.log("画像を取得：" + info.srcUrl);
        
        console.log("画像を取得：" + info.linkUrl);
        //var url = info.pageUrl;
        //var host = url.replace(/https?:\/\/([^\/]+).*/, "$1");
        /*var tree = host.split(".");
        var parts = tree.length;

        var domain;
        if (parts == 1) {
            alert("ドメイン名を取得できません。");
            return;
        } else if (parts == 2) {
            domain = host;
        } else if (tree[parts - 1].length >= 3) {
            domain = tree[parts - 2] + '.' + tree[parts - 1];
        } else if (tree[parts - 2].length == 2) {
            domain = tree[parts - 3] + '.' + tree[parts - 2] + '.' + tree[parts - 1];
        } else {
            domain = tree[parts - 2] + '.' + tree[parts - 1];;
        }

        chrome.tabs.create({
            url: "http://akagi.jp/whois/?#!/key=" + domain
        });
        */
    }
});