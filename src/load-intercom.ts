declare var intercomSettings: any;
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

export default function loadIntercom(appId: any) {
  id = appId;
  var w = <any>window;
  var ic = w.Intercom;
  if (typeof ic === 'function') {
    ic('reattach_activator');
    ic('update', intercomSettings);
  } else {
    let i: any = function () {
      i.c(arguments);
    };
    i.q = [];
    i.c = function (args: any) {
      i.q.push(args);
    };
    w.Intercom = i;
    if (w.attachEvent) {
      w.attachEvent('onload', l);
    } else {
      w.addEventListener('load', l, false);
    }
  }
};
