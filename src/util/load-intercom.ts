
let id: string;
let d = document;

function l() {
  var s = d.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = `https://widget.intercom.io/widget/${id}`;
  var x = d.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);
}

export function loadIntercom(appId: any) {
  (<any>window).Intercom = intercomBootstrap();
  createScript(appId);
};
function createScript(appId: string) {
  var scriptTag = document.createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.async = true;
  scriptTag.src = 'https://widget.intercom.io/widget/' + appId;
  var s = document.getElementsByTagName('head')[0];
  s.appendChild(scriptTag);
};

function intercomBootstrap() {
  let Intercom: any = function () {
    Intercom.c(arguments)
  };
  Intercom.q = [];
  Intercom.c = function (args: any) {
    Intercom.q.push(args)
  };
  return Intercom;
};
