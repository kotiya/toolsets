var result = {};
var nav = navigator;
result.OS = "unknown OS";
    if((osIndex = nav.appVersion.indexOf('Mac')) != -1) {
      result.OS = 'Mac';
    }
    else if((osIndex = nav.appVersion.indexOf('Win')) != -1) {
      result.OS = 'Windows';
    }

    // Browser detection
    navigator.sayswho= (function(){
      var N= navigator.appName, ua= navigator.userAgent, tem;
      var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
      M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
      return M;
    })();
    result.clientDevice = navigator.sayswho[0] + " " + navigator.sayswho[1];

    result.version = config.version;

    result.OSVersion = 'unknown OS version';
    if((osIndexEnds = nav.appVersion.indexOf(')'),osIndex) != -1) {
      result..OSVersion = nav.appVersion.substring(osIndex, osIndexEnds);
    }

console.log(result);
