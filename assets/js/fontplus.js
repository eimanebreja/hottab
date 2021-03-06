/*
 * Copyright (c) SOFTBANK TECHNOLOGY CORP. All rights reserved.
 *
 * @project:	FONTPLUS
 * @version:	1.0
 * @see:		allowed to refer
 *					1. openjs(http://www.openjs.com/)
 *						Copyright (c) 2006-2007, Binny V Abraham
 *
 * 					2. vxjs(http://code.google.com/p/vxjs/)
 */
FontPlus_71a4ed00547e2050d5fd55dd9adcbe51 = function() {
  var FontPlusTools = (function() {
    var q8 = {
      d: document,
      z: 0,
      o: 10,
      u: false,
      req: null,
      s: null,
      aa: 0,
      ab: null,
      llt: 0,
      t: null,
      pm: null,
      cm: 300,
      X: function(Y, F, q, O) {
        q8.req = new (window.XDomainRequest || window.ActiveXObject || XMLHttpRequest)('Microsoft.XMLHTTP');
        q8.req.open(q ? 'POST' : 'GET', Y, 1);
        try {
          q8.req.designate_id = O;
          q8.req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          q8.req.onreadystatechange = function() {
            q8.req.readyState > 3 && F && F(q8.req.responseText, q8.req)
          }
        } catch (e) {
          q8.req.onerror = function() {}
          ;
          q8.req.onprogress = function() {}
          ;
          q8.req.onload = function() {
            F && F(q8.req.responseText, q8.req)
          }
        }
        q8.req.send(q)
      },
      I: function(O, F, q) {
        var Y = O.toLowerCase();
        for (q = F.length; q-- && F[q].toLowerCase() != Y; )
          ;
        return q
      },
      E: function(F, Y, q, O) {
        if (F.attachEvent ? (O ? F.detachEvent('on' + Y, F[Y + q]) : 1) : (O ? F.removeEventListener(Y, q, 0) : F.addEventListener(Y, q, 0))) {
          F['e' + Y + q] = q;
          F[Y + q] = function() {
            F['e' + Y + q](window.event)
          }
          ;
          F.attachEvent('on' + Y, F[Y + q])
        }
      },
      R: function(q, O, Y) {
        if ("\v" != "v" && !window.attachEvent) {
          if (O.n == 'O')
            setTimeout(q, Y);
          else
            q8.E(q8.d, 'DOMContentLoaded', q)
        } else if (O.n == 'O') {
          if (O.v < 11.6)
            window.addEventListener('load', q, false);
          else
            setTimeout(q, Y)
        } else if (q8.d.all)
          q8.E(window, "load", q);
        else
          setTimeout(q, 1000)
      },
      TM: function(Y) {
        return Y.replace(/^\s+|\s+$/g, '')
      },
      ST: function(O, Y) {
        return O.currentStyle ? O.currentStyle[Y] : (q8.d.defaultView ? q8.d.defaultView.getComputedStyle(O, null).getPropertyValue(Y) : null)
      },
      BR: function() {
        var O = ['Edge', 'MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'], agent = navigator.userAgent, name, ver, mode, n, q, os, ext, fd = 'fontplus-unused';
        name = ver = mode = n = '';
        ext = 'w';
        for (q in O) {
          if (!O.hasOwnProperty(q))
            continue;
          if (agent.indexOf(O[q]) != -1) {
            name = O[q];
            n = O[q].substr(0, 1);
            if (name == 'Opera' && agent.match(/; Opera (Mobi|Tablet)\/(.*) Version\/([0-9\.]+)/)) {
              name += ' Mobile';
              ver = RegExp.$3;
              n = 'T'
            } else if (agent.match(/(iPad|iPhone); (.*) OS ([0-9_]+) like /)) {
              name += ' iOS';
              ver = RegExp.$3.replace(/_/g, '.');
              n = 'I';
              os = 'iOS'
            } else if (agent.match(/Android ([0-9\.]+)/)) {
              name = os = 'Android';
              ver = RegExp.$1;
              n = 'A';
              if (agent.match(/Chrome\/([0-9\.]+)/)) {
                name = 'Chrome';
                ver = RegExp.$1
              }
            } else if (agent.match(/Version\/([0-9\.]+)/))
              ver = RegExp.$1;
            else if (agent.match(RegExp(name + "[\/ ]([0-9\.]+)")))
              ver = RegExp.$1;
            break
          }
        }
        if (!name) {
          if (agent.indexOf('Trident') != -1) {
            if (agent.match(/rv:([\d\.]+)/)) {
              name = 'MSIE';
              n = 'M';
              ver = RegExp.$1
            }
          } else if (agent.match(/(iPad|iPhone); (.*) OS ([0-9_]+) like /)) {
            name = 'Safari iOS';
            ver = RegExp.$3.replace(/_/g, '.');
            n = 'I';
            os = 'iOS'
          } else {
            name = 'Unknown:' + agent;
            ver = '99';
            n = 'U'
          }
        }
        if (!os) {
          if (agent.match(/Windows Phone/))
            os = 'Windows Phone';
          else if (agent.match(/Windows/)) {
            if (agent.match(/NT 5.(1|2; (Win|WOW)64)/)) {
              os = 'WindowsXP'
            } else {
              os = 'Windows'
            }
          } else if (agent.match(/Macintosh/))
            os = 'Macintosh';
          else if (agent.match(/Linux/))
            os = 'Linux';
          else
            os = 'Unknown:' + agent
        }
        if (n == 'M') {
          mode = q8.d.documentMode ? q8.d.documentMode : 5;
          if (parseInt(ver) < 9)
            fd = 'Courier New'
        } else if (n == 'O')
          fd = 'Courier New';
        else if (n == 'T')
          fd = 'Droid Sans';
        var Y = ver.split('.');
        for (var q = 0; q < Y.length; q++) {
          Y[q] = parseInt(Y[q])
        }
        if (name == 'MSIE' || name == 'IEMobile') {
          if (Y[0] <= 8) {
            ext = 'e'
          }
        } else if (name == 'Firefox') {
          if (Y[0] == 3 && Y[1] == 5) {
            ext = 'o'
          }
        } else if (name == 'Opera') {
          if (Y[0] >= 10) {
            ext = 'o';
            if (Y[0] >= 12 || Y[0] == 11 && Y[1] >= 10) {
              ext = 'w'
            }
          }
        } else if (name == 'Opera Mobile') {
          if (Y[0] > 9 || Y[0] == 9 && Y[1] >= 7) {
            ext = 'o'
          }
        } else if (name == 'Safari') {
          if (Y[0] == 3 && Y[1] >= 1) {
            ext = 't'
          } else if (Y[0] >= 9) {
            ext = 'o'
          } else if (Y[0] > 5 || (Y[0] == 5 && Y[1] >= 1)) {
            ext = 'w'
          } else if (Y[0] >= 4) {
            ext = 'o'
          }
        } else if (name == 'Safari iOS') {
          if (Y[0] < 4 || Y[0] == 4 && Y[1] < 1) {
            name = 'Unknown:' + agent;
            ver = '99';
            n = 'U'
          } else if (Y[0] < 5) {
            ext = 't'
          }
        } else if (name == 'Android') {
          ext = 'o'
        }
        return {
          'name': name,
          'ver': ver,
          'mode': mode,
          'os': os,
          'fd': fd,
          'n': n,
          'v': parseFloat(ver),
          'ext': ext
        }
      },
      CR: function() {
        return (q8.d.characterSet || q8.d.charset).toUpperCase()
      },
      AB: function(q) {
        q8.g = false;
        if (q8.req)
          q8.req.abort();
        if (q)
          q();
        else {
          if (window.console && window.console.log) {
            console.log('FONTPLUS Timeout abort javascript')
          } else {
            var O = q8.TN(q8.d, 'HEAD')[0] || q8.TN(q8.d, 'BODY')[0];
            var Y = q8.d.createElement("script");
            Y.src = (q8.d.location.protocol == "https:" ? "https://" + q8.s[0] : "http://" + q8.s[1]) + "/accessor/fpabort?lurl=" + encodeURIComponent(q8.d.location.href) + "&" + (new Date().getTime().toString());
            Y.type = "text/javascript";
            O.appendChild(Y)
          }
        }
      },
      CN: function(O) {
        var Y = [O], i, c;
        c = O.childNodes;
        for (i = c.length; i--; ) {
          if (c[i].tagName == undefined)
            continue;
          Y = Y.concat(q8.CN(c[i]))
        }
        ;return Y
      },
      TN: function(Y, q) {
        var O = [], i = 0, a = q === "*", n = Y.firstChild, o;
        while ((Y = n)) {
          if (a ? Y.nodeType === 1 : (q8.l ? Y.nodeName : Y.nodeName.toUpperCase()) === q)
            O[i++] = Y;
          n = Y.firstChild || Y.nextSibling;
          while (!n && (Y = Y.parentNode))
            n = Y.nextSibling
        }
        return O
      },
      QS: function(q, O, Y) {
        O = O ? O : q8.d;
        if (q == '*' || q.match(/^[a-zA-Z]+$/))
          Y = q8.TN(O, q8.l ? q.toUpperCase() : q.toLowerCase());
        else if (q.match(/^#([a-zA-Z0-9_-]+)$/))
          Y = [O.getElementById(RegExp.$1)];
        else if (typeof jQuery != 'undefined') {
          Y = jQuery(q)
        } else if (O.querySelectorAll)
          Y = O.querySelectorAll(q);
        else
          Y = q8.CS(q);
        return Y
      },
      CS: function(p) {
        var q6 = new Array();
        if (!document.getElementsByTagName)
          return q6;
        p = p.replace(/\s*([^\w])\s*/g, "$1");
        var h = p.split(",");
        var C = function(q, F) {
          if (!F)
            F = '*';
          var be = new Array;
          for (var Y = 0, len = q.length; con = q[Y],
          Y < len; Y++) {
            var bh;
            if (F == '*')
              bh = con.all ? con.all : con.getElementsByTagName("*");
            else
              bh = con.getElementsByTagName(F);
            for (var O = 0, leng = bh.length; O < leng; O++)
              be.push(bh[O])
          }
          return be
        };
        COMMA: for (var q0 = 0, len1 = h.length; selector = h[q0],
        q0 < len1; q0++) {
          var B = new Array(document);
          var M = selector.split(" ");
          SPACE: for (var O0 = 0, len2 = M.length; element = M[O0],
          O0 < len2; O0++) {
            var O4 = element.indexOf("[");
            var D = element.indexOf("]");
            var A = element.indexOf("#");
            if (A + 1 && !(A > O4 && A < D)) {
              var q5 = element.split("#");
              var w = q5[0];
              var g = q5[1];
              var q1 = document.getElementById(g);
              if (!q1 || (w && q1.nodeName.toLowerCase() != w)) {
                continue COMMA
              }
              B = new Array(q1);
              continue SPACE
            }
            A = element.indexOf(".");
            if (A + 1 && !(A > O4 && A < D)) {
              var q5 = element.split('.');
              var w = q5[0];
              var bd = q5[1];
              var bm = C(B, w);
              B = new Array;
              if (bd == "fontplus_target_tags") {
                for (var q4 = 0, len = bm.length; fnd = bm[q4],
                q4 < len; q4++) {
                  if (fnd.className) {
                    if (fnd.className.match) {
                      if (fnd.className.match(new RegExp('(^|\s|\x20)' + bd + '(\s|\x20|$)')))
                        B.push(fnd)
                    } else if (fnd.className.baseVal.match) {
                      if (fnd.className.baseVal.match(new RegExp('(^|\s|\x20)' + bd + '(\s|\x20|$)')))
                        B.push(fnd)
                    }
                  }
                }
              } else {
                for (var q4 = 0, len = bm.length; fnd = bm[q4],
                q4 < len; q4++) {
                  if (fnd.className) {
                    if (fnd.className.match) {
                      if (fnd.className.match(new RegExp('(^|\s)' + bd + '(\s|$)')))
                        B.push(fnd)
                    } else if (fnd.className.baseVal.match) {
                      if (fnd.className.baseVal.match(new RegExp('(^|\s)' + bd + '(\s|$)')))
                        B.push(fnd)
                    }
                  }
                }
              }
              continue SPACE
            }
            if (element.indexOf('[') + 1) {
              if (element.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?['"]?([^\]'"]*)['"]?\]$/)) {
                var w = RegExp.$1;
                var x = RegExp.$2;
                var I = RegExp.$3;
                var q2 = RegExp.$4
              }
              var bm = C(B, w);
              B = new Array;
              for (var q4 = 0, len = bm.length; fnd = bm[q4],
              q4 < len; q4++) {
                if (I == '=' && fnd.getAttribute(x) != q2)
                  continue;
                if (I == '~' && !fnd.getAttribute(x).match(new RegExp('(^|\\s)' + q2 + '(\\s|$)')))
                  continue;
                if (I == '|' && !fnd.getAttribute(x).match(new RegExp('^' + q2 + '-?')))
                  continue;
                if (I == '^' && fnd.getAttribute(x).indexOf(q2) != 0)
                  continue;
                if (I == '$' && fnd.getAttribute(x).lastIndexOf(q2) != (fnd.getAttribute(x).length - q2.length))
                  continue;
                if (I == '*' && !(fnd.getAttribute(x).indexOf(q2) + 1))
                  continue;
                else if (!fnd.getAttribute(x))
                  continue;
                B.push(fnd)
              }
              continue SPACE
            }
            var bm = C(B, element);
            B = bm
          }
          for (var q7 = 0, len = B.length; q7 < len; q7++)
            q6.push(B[q7])
        }
        return q6
      },
      DF: function() {
        if (q8.b.os == 'Windows' || q8.b.os == 'WindowsXP')
          return ['MS PGothic', 'Arial'];
        else if (q8.b.os == 'Macintosh')
          return ['Hiragino Kaku Gothic Pro', 'Helvetica'];
        else if (q8.b.os == 'Linux')
          return ['IPAPGothic', 'Century'];
        else if (q8.b.os == 'iOS' || q8.b.os.substr(0, 7) == 'Unknown')
          return ['HiraKakuProN-W3', 'Helvetica'];
        else if (q8.b.os == 'Android')
          return ['Droid Sans'];
        else if (q8.b.os == 'Windows Phone')
          return ['Meiryo UI', 'Arial']
      },
      CM: function(q, be, F) {
        var bh = q8.DF(), F = '_cmp_elm_' + F + '_', j, e, b = q8.TN(q8.d, 'BODY')[0], t = be.replace(/["'&><]/g, function(Y) {
          return '&#' + Y.charCodeAt(0) + ';'
        });
        for (j = 2; j--; ) {
          e = q8.d.createElement('span');
          e.setAttribute('id', F + j);
          var O = q8.d.createElement('span');
          if (O.style.setProperty) {
            O.style.setProperty('font-family', (j == 0 ? "'" + q + "'," : "") + "'fpbf_ac93d8111'", 'important')
          } else {
            O.style.cssText = "font-family: " + (j == 0 ? "'" + q + "'," : "") + "'fpbf_ac93d8111' !important;"
          }
          O.innerHTML = t;
          e.appendChild(O);
          for (var bd = 0; bd < bh.length; bd++) {
            O = q8.d.createElement('span');
            if (O.style.setProperty) {
              O.style.setProperty('font-family', (j == 0 ? "'" + q + "'," : "") + bh[bd], 'important')
            } else {
              O.style.cssText = "font-family: " + (j == 0 ? "'" + q + "'," : "") + bh[bd] + " !important;"
            }
            O.innerHTML = t;
            e.appendChild(O)
          }
          e.style.fontSize = (q8.cm) + 'px';
          e.style.visibility = 'hidden';
          e.style.position = 'absolute';
          e.style.whiteSpace = 'nowrap';
          e.style.lineHeight = 'normal';
          e.style.top = '-500px';
          b.appendChild(e)
        }
      },
      CD: function(Y) {
        var O, r, e0, e1, t, b = q8.TN(q8.d, 'BODY')[0];
        for (O = Y.length; O--; ) {
          t = typeof Y[O];
          if (t == 'string' || t == 'number') {
            r = '_cmp_elm_' + Y[O] + '_';
            e0 = q8.d.getElementById(r + '0');
            e1 = q8.d.getElementById(r + '1');
            if (!e0 || !e1)
              continue;
            b.removeChild(e0);
            b.removeChild(e1)
          } else {
            b.removeChild(Y[O])
          }
        }
      },
      DC: function(Y) {},
      WT: function(be, bd, bh, F) {
        F = F == null ? q8.o * 700 : F;
        bd = typeof bd == 'function' ? bd : q8.DC;
        bh = bh ? [] : bh;
        if (F <= 0) {
          q8.g = false;
          bd({
            'code': be.length,
            'msg': 'timeout',
            'time': -1
          });
          q8.CD(be);
          setTimeout(function() {
            q8.AB()
          }, 0);
          return
        }
        setTimeout(function() {
          for (var q = be.length, z; q--; ) {
            var Y = '_cmp_elm_' + be[q] + '_'
              , e0 = q8.d.getElementById(Y + '0')
              , e1 = q8.d.getElementById(Y + '1');
            if (F == q8.o * 700 && (q8.b.n == 'C' || q8.b.n == 'S')) {
              continue
            }
            if (!e0 || !e1)
              continue;
            if (e0.offsetWidth != e1.offsetWidth || e0.offsetHeight != e1.offsetHeight || q8.u) {
              z = q8.ST(e0, q8.TC('z-index'));
              if (z != 'auto') {
                bh[q] = z
              }
              be.splice(q, 1);
              q8.CD([e0, e1])
            }
          }
          if (!be.length) {
            q8.g = false;
            var O = (+new Date()) - q8.m;
            if (!bh) {
              bd({
                'code': 0,
                'time': O
              })
            } else {
              bd({
                'code': 0,
                'size': bh,
                'time': O
              })
            }
          } else {
            q8.WT(be, bd, bh, F - 500)
          }
        }, q8.u ? 3000 : 500)
      },
      TC: function(Y) {
        if ((q8.b.n == 'M' && (q8.b.v <= 8 || q8.b.mode <= 8)) || q8.b.n == 'O' || q8.b.n == 'T')
          return Y.replace(/-./g, function(m) {
            return m.charAt(1).toUpperCase()
          });
        return Y
      },
      b: null,
      l: document.createElement('p').tagName == 'P',
      g: false,
      m: null
    };
    return q8
  }
  )();
  var FontPlusAccessor = (function() {
    var Z = FontPlusTools
      , use_fonts = []
      , oth_fonts = []
      , nicknames = []
      , liststyletypes = []
      , liststyletypecnts = []
      , str = []
      , par = Z.TN(Z.d, 'HEAD')[0] || Z.TN(Z.d, 'BODY')[0]
      , irregular = null
      , tid = null
      , ifrms = []
      , lclist = []
      , use_rogo = false
      , proxy = false
      , desig = 0
      , selhist = []
      , selidx = 0
      , completefunc = null
      , bgimg = {}
      , font_ext = false
      , font_ext_hist = []
      , font_ext_reload = false
      , options = {
      selector: '*',
      complete: false,
      callbacks: {},
      timeoutfunc: false,
      sync: true,
      size: false
    };
    Z.b = Z.BR();
    var f = {
      init: function() {
        if (!q6())
          return;
        if (!h())
          return;
        l(0);
        F3();
        Z.o = f.timeout;
        Z.u = false;
        Z.s = f.server;
        Z.aa = f.aa;
        Z.ab = f.ab;
        Z.llt = f.llt;
        Z.t = f.t;
        Z.pm = f.pm;
        Z.cm = f.cm;
        if (Z.llt !== 1) {
          if (Z.b.n == 'F' && Z.b.v <= 12 || Z.b.n == 'O' || Z.b.n == 'T' || Z.b.n == 'U') {
            Z.llt = 1
          } else if (Z.b.n == 'M' || Z.b.n == 'I' || Z.b.n == 'A') {
            var Y;
            if (Z.b.n == 'M') {
              if (Z.b.v < 9 || be1()) {
                Y = 2001
              } else {
                Y = 4096
              }
            } else {
              Y = 8207
            }
            if (Z.llt < 1 || Y < Z.llt) {
              Z.llt = Y
            }
          }
        }
        Z.R(function() {
          l(1);
          if (!options.sync)
            return;
          Z.g = true;
          if (f.nolist == 1 && irregular == 1) {
            K();
            setTimeout(function() {
              f.ready()
            }, 2000)
          } else
            f.ready()
        }, Z.b, f.plusf.length)
      },
      ready: function() {
        Z.m = (+new Date());
        font_ext = (Z.b.n == 'M' && Z.b.v <= 8 && parseInt(Z.b.mode) <= 8 ? true : false);
        tid = setTimeout(function() {
          Z.AB()
        }, f.timeout * 1000);
        F2();
        A(Z.d, 1);
        if (d()) {
          q0(true);
          F8()
        } else {
          q0(false);
          irregular || proxy ? q8() : Q()
        }
        l(2)
      },
      receiveOther: function(O) {
        var bh = Z.d.getElementById('fontplus_jsonp'), css;
        if (bh)
          bh.parentNode.removeChild(bh);
        if (Z.z)
          return;
        bh = 'fontplus_' + O.tagid;
        css = Z.d.getElementById(bh);
        if (css && Z.b.n == 'M') {
          css.parentNode.removeChild(css);
          css = null
        }
        if (!css) {
          css = Z.d.createElement('style');
          css.setAttribute('type', 'text/css');
          css.setAttribute('rel', 'stylesheet');
          css.setAttribute('id', bh);
          par.appendChild(css)
        }
        if (irregular == 2 && css.styleSheet) {
          css.styleSheet.cssText = O.data
        } else if (irregular == 2 && css.sheet) {
          css.sheet.cssText = O.data
        } else {
          css.innerHTML = O.data
        }
        for (var bm = ifrms.length; bm--; ) {
          var be = ifrms[bm].contentDocument || ifrms[bm].contentWindow.document;
          q7(be);
          B(be, Z.TN(be, 'HEAD')[0] || Z.TN(be, 'BODY')[0], O.data)
        }
        if (f.rl && f.rl === 2) {
          F0(null)
        }
        clearTimeout(tid);
        U(O.families);
        if (typeof (sessionStorage) != 'undefined' && irregular !== 1 && Z.b.n != 'U') {
          var x = "";
          for (var bm = 0; bm < use_fonts.length; bm++) {
            x += use_fonts[bm] + (nicknames[bm] ? nicknames[bm] : '0') + str[bm]
          }
          try {
            sessionStorage.setItem(x, O.data)
          } catch (e) {}
        } else if (Z.b.n == 'M' && Z.b.v == 7) {
          var Y = Z.d.createElement('input');
          Y.type = 'hidden';
          Y.style.behavior = "url('#default#userData')";
          Z.d.body.appendChild(Y);
          if (typeof (Y.load) != 'undefined') {
            var F = 'fpNum'
              , charSaveKey = 'fpChar'
              , cssSaveKey = 'fpCss'
              , idxKey = 'fp';
            var D = "";
            for (var bm = 0; bm < use_fonts.length; bm++) {
              D += use_fonts[bm] + (nicknames[bm] ? nicknames[bm] : '0') + str[bm]
            }
            Y.load(F);
            var bd = Y.getAttribute('key');
            var q = Y.getAttribute('max');
            if (bd == f.condition) {
              Y.setAttribute('max', q + 1);
              Y.save(F);
              Y.load(charSaveKey);
              Y.setAttribute(idxKey + q, D);
              Y.save(charSaveKey);
              Y.load(cssSaveKey);
              Y.setAttribute(idxKey + q, O.ie_data);
              Y.save(cssSaveKey)
            } else {
              Y.setAttribute('key', f.condition);
              Y.setAttribute('max', 1);
              Y.save(F);
              Y.load(charSaveKey);
              if (bd != null) {
                for (var bm = 0; bm < q; bm++) {
                  if (Y.getAttribute(idxKey + bm) != null)
                    Y.removeAttribute(idxKey + bm)
                }
              }
              Y.setAttribute(idxKey + '0', D);
              Y.save(charSaveKey);
              Y.load(cssSaveKey);
              if (bd != null) {
                for (var bm = 0; bm < q; bm++) {
                  if (Y.getAttribute(idxKey + bm) != null)
                    Y.removeAttribute(idxKey + bm)
                }
              }
              Y.setAttribute(idxKey + '0', O.ie_data);
              Y.save(cssSaveKey)
            }
          }
          Z.d.body.removeChild(Y)
        }
      },
      setting: function(Y) {
        options = Y
      },
      reload: function(Y) {
        if (Z.g) {
          setTimeout(f.reload, 500);
          return
        }
        Z.g = true,
        font_ext_reload = (Z.b.n == 'M' && Z.b.v <= 8 && !Y ? true : false),
        use_fonts = [],
        oth_fonts = [],
        nicknames = [],
        liststyletypes = [],
        liststyletypecnts = [],
        str = [],
        ifrms = [],
        lclist = [];
        if (Y) {
          var O, elm;
          for (O = selhist.length; O--; ) {
            elm = Z.d.getElementById(selhist[O].id);
            if (elm)
              elm.parentNode.removeChild(elm)
          }
          selhist = [],
          selidx = 0
        }
        options.sync = true;
        if (irregular === 1) {
          K();
          setTimeout(function() {
            f.ready()
          }, 1000)
        } else {
          f.ready()
        }
      },
      designate_load: function(q, O, Y) {
        if (Z.g) {
          setTimeout(function() {
            f.designate_load(q, O, Y)
          }, 500);
          return
        }
        Z.g = true;
        Z.m = (+new Date());
        tid = setTimeout(function() {
          Z.AB(options.timeoutfunc)
        }, f.timeout * 1000);
        var F, _id = Y ? Y : q[0].nickname;
        use_fonts = [],
        lclist = [],
        nicknames = [],
        liststyletypes = [],
        liststyletypecnts = [],
        str = [];
        for (var F = q.length; F--; ) {
          use_fonts.push(q[F].fontname);
          nicknames.push(q[F].nickname);
          str.push(q[F].text)
        }
        options.callbacks[_id] = {
          'func': O
        };
        if (irregular === null)
          if (!q6())
            return;
        if (d()) {
          q0(true);
          F8(_id)
        } else {
          q0(false);
          irregular || proxy ? q8(_id) : Q(_id)
        }
      },
      setFonts: function(Y) {
        f.plusf = Y
      },
      isloading: function() {
        return Z.g
      }
    };
    var d = function() {
      if (Z.llt < 1) {
        return true
      } else if (Z.llt < 2) {
        return false
      } else {
        var q = use_fonts.length
          , paramurl = q4('reqf');
        paramurl += '/con=' + encodeURIComponent(f.condition);
        paramurl += '&cha=' + Z.CR();
        paramurl += '&dmode=' + Z.b.mode;
        if (Z.aa)
          paramurl += '&aa=1';
        if (Z.ab != null)
          paramurl += '&ab=' + Z.ab;
        var bh = new RegExp("　| |'|\r|\n|\t",'g');
        for (var bd = 0; bd < q; bd++) {
          if (!str[bd].length)
            continue;
          var O = str[bd].replace(bh, '');
          var Y = null
            , orignalFont = null
            , modeString = null;
          try {
            O = encodeURIComponent(q9(O.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || []).sort().join(''))
          } catch (e) {
            O = encodeURIComponent(O)
          }
          O = E(unescape(O));
          if (Z.t != null) {
            Y = '&t=' + Z.t
          } else if (Z.pm) {
            Y = '&pm=1'
          }
          var F = O4(use_fonts[bd]);
          if (F) {
            orignalFont = F['org'];
            Y = '&' + F['mode'];
            if (F['value']) {
              Y = Y + '=' + F['value']
            } else {
              Y = Y + '=1'
            }
          } else {
            orignalFont = use_fonts[bd]
          }
          var be = paramurl + (Y ? Y : '') + "&fa=" + encodeURIComponent(orignalFont) + "&lst=" + (liststyletypes[bd] ? encodeURIComponent(liststyletypes[bd]) : '0') + "&lsc=" + (liststyletypecnts[bd] ? liststyletypecnts[bd] : '0') + "&s=" + O;
          if (Z.llt <= be.length) {
            return false
          }
        }
      }
      return true
    };
    var F8 = function(bm) {
      if (!str.length) {
        N();
        return
      }
      desig = bm ? bm : 0;
      var q = use_fonts.length
        , logParam = []
        , paramurl = q4('reqf');
      paramurl += '/con=' + encodeURIComponent(f.condition);
      paramurl += '&cha=' + Z.CR();
      paramurl += '&dmode=' + Z.b.mode;
      if (Z.aa)
        paramurl += '&aa=1';
      if (Z.ab != null)
        paramurl += '&ab=' + Z.ab;
      var be = "";
      var x = '';
      var bh = "";
      if (f.exttype) {
        switch (f.exttype) {
        case 'woff':
        case 'woff_by_ttf':
          bh = "') format('woff";
          break;
        case 'otf':
          bh = "') format('opentype";
          break;
        case 'ttf':
          bh = "') format('truetype";
          break;
        case 'svg':
          bh = "#FontPlus') format('svg";
          break
        }
      }
      for (var O0 = 0; O0 < q; O0++) {
        if (!str[O0].length)
          continue;
        var Y = E(unescape(encodeURIComponent(str[O0]).replace("*", "%2A").replace("!", "%21").replace("~", "%7E")));
        var O = null
          , orignalFont = null
          , modeString = null;
        if (Z.t != null) {
          O = '&t=' + Z.t
        } else if (Z.pm) {
          O = '&pm=1'
        }
        var bd = O4(use_fonts[O0]);
        if (bd) {
          orignalFont = bd['org'];
          O = '&' + bd['mode'];
          if (bd['value']) {
            O = O + '=' + bd['value']
          } else {
            O = O + '=1'
          }
        } else {
          orignalFont = use_fonts[O0]
        }
        var D = paramurl + (O ? O : '') + "&fa=" + E(unescape(encodeURIComponent(orignalFont))) + "&lst=" + (liststyletypes[O0] ? encodeURIComponent(liststyletypes[O0]) : '0') + "&lsc=" + (liststyletypecnts[O0] ? liststyletypecnts[O0] : '0') + "&s=" + Y;
        be += "@font-face { font-family: '" + (nicknames[O0] ? nicknames[O0] : use_fonts[O0]) + "'; font-weight: Bold; src: url('" + D + bh + "'); }\n";
        Z.CM(bm || font_ext ? nicknames[O0] : use_fonts[O0], str[O0].substr(0, 2), bm ? bm : O0);
        lclist.push(bm ? bm : O0);
        if (f.rl && f.rl === 1) {
          logParam['fonts[' + O0 + '][fa]'] = E(unescape(encodeURIComponent(use_fonts[O0])));
          logParam['fonts[' + O0 + '][nn]'] = (nicknames[O0] ? encodeURIComponent(nicknames[O0]) : '0');
          logParam['fonts[' + O0 + '][lst]'] = (liststyletypes[O0] ? encodeURIComponent(liststyletypes[O0]) : '0');
          logParam['fonts[' + O0 + '][lsc]'] = (liststyletypecnts[O0] ? liststyletypecnts[O0] : '0');
          logParam['fonts[' + O0 + '][s]'] = Y
        }
        if (x != '') {
          x += ','
        }
        x += use_fonts[O0]
      }
      if (font_ext_reload) {
        S()
      }
      var F = (desig ? desig : selhist[selidx].id)
        , css = Z.d.getElementById(F);
      if (css && Z.b.n == 'M') {
        css.parentNode.removeChild(css);
        css = null
      }
      if (!css) {
        css = Z.d.createElement('style');
        css.setAttribute('type', 'text/css');
        css.setAttribute('rel', 'stylesheet');
        css.setAttribute('id', F);
        par.appendChild(css)
      }
      if (Z.b.n == 'M' && (Z.b.v < 9 || Z.b.mode < 9) && css.styleSheet)
        css.styleSheet.cssText = be;
      else
        css.innerHTML = be;
      F0(logParam);
      if (lclist.length) {
        Z.WT(lclist, desig ? options.callbacks[desig]['func'] : completefunc, options.size, be5())
      }
      clearTimeout(tid);
      U(x);
      bh7()
    };
    var y = function(x) {
      var bd = use_fonts.length
        , keyStr = ""
        , familiesStr = '';
      var be = null;
      if (typeof (sessionStorage) != 'undefined' && Z.b.n != 'U') {
        var I = sessionStorage.getItem(f.condition);
        if (I) {
          for (var C = 0; C < bd; C++) {
            keyStr += use_fonts[C] + (nicknames[C] ? nicknames[C] : '0') + str[C];
            if (familiesStr != '') {
              familiesStr += ','
            }
            familiesStr += use_fonts[C]
          }
          be = sessionStorage.getItem(keyStr)
        } else {
          try {
            sessionStorage.setItem(f.condition, "1")
          } catch (e) {}
        }
      } else if (Z.b.n == 'M' && Z.b.v == 7) {
        var O = Z.d.createElement('input');
        O.type = 'hidden';
        O.style.behavior = "url('#default#userData')";
        Z.d.body.appendChild(O);
        if (typeof (O.load) != 'undefined') {
          var bh = 'fpNum'
            , charSaveKey = 'fpChar'
            , cssSaveKey = 'fpCss'
            , idxKey = 'fp';
          O.load(bh);
          var O0 = O.getAttribute('key');
          var q = O.getAttribute('max');
          if (O0 == f.condition && q != null) {
            for (var C = 0; C < bd; C++) {
              keyStr += use_fonts[C] + (nicknames[C] ? nicknames[C] : '0') + str[C];
              if (familiesStr != '') {
                familiesStr += ','
              }
              familiesStr += use_fonts[C]
            }
            O.load(charSaveKey);
            for (var C = 0; C < q; C++) {
              var F = O.getAttribute(idxKey + C);
              if (F != null && F == keyStr) {
                O.load(cssSaveKey);
                be = O.getAttribute(idxKey + C);
                break
              }
            }
          }
        }
        Z.d.body.removeChild(O)
      }
      if (be) {
        for (var C = 0; C < bd; C++) {
          Z.CM(x || font_ext ? nicknames[C] : use_fonts[C], str[C].substr(0, 2), x ? x : C);
          lclist.push(x ? x : C)
        }
        if (font_ext_reload) {
          S()
        }
        if (be.length > 4 && be.substring(0, 4) == 'http') {
          var Y = Z.d.getElementById(x ? x : 'fontplus_link');
          if (Y) {
            Y.parentNode.removeChild(Y)
          }
          Y = Z.d.createElement('link');
          Y.setAttribute('type', 'text/css');
          Y.setAttribute('rel', 'stylesheet');
          Y.setAttribute('charset', 'utf-8');
          Y.setAttribute('id', x ? x : 'fontplus_link');
          Y.setAttribute('href', be);
          Y.setAttribute('media', 'screen');
          par.appendChild(Y)
        } else {
          if (font_ext) {
            for (var C = 0; C < bd; C++) {
              be = be.replace(use_fonts[C], nicknames[C])
            }
          }
          var D = (x ? x : selhist[selidx].id)
            , css = Z.d.getElementById(D);
          if (css && Z.b.n == 'M') {
            css.parentNode.removeChild(css);
            css = null
          }
          if (!css) {
            css = Z.d.createElement('style');
            css.setAttribute('type', 'text/css');
            css.setAttribute('rel', 'stylesheet');
            css.setAttribute('id', D);
            par.appendChild(css)
          }
          if (css.styleSheet) {
            css.styleSheet.cssText = be
          } else {
            css.innerHTML = be
          }
          for (var C = ifrms.length; C--; ) {
            var bm = ifrms[C].contentDocument || ifrms[C].contentWindow.document;
            q7(bm);
            B(bm, Z.TN(bm, 'HEAD')[0] || Z.TN(bm, 'BODY')[0], be)
          }
        }
        if (lclist.length) {
          Z.WT(lclist, x ? options.callbacks[x]['func'] : completefunc, options.size, be5())
        }
        clearTimeout(tid);
        U(familiesStr);
        bh7();
        var M = [];
        if (f.rl && f.rl === 1) {
          for (var C = 0; C < bd; C++) {
            M['fonts[' + C + '][fa]'] = E(unescape(encodeURIComponent(use_fonts[C])));
            M['fonts[' + C + '][nn]'] = (nicknames[C] ? encodeURIComponent(nicknames[C]) : '0');
            M['fonts[' + C + '][lst]'] = (liststyletypes[C] ? encodeURIComponent(liststyletypes[C]) : '0');
            M['fonts[' + C + '][lsc]'] = (liststyletypecnts[C] ? liststyletypecnts[C] : '0');
            M['fonts[' + C + '][s]'] = E(unescape(encodeURIComponent(str[C])))
          }
        }
        F0(M);
        return true
      }
      return false
    };
    var F0 = function(x) {
      if (!f.rl)
        return;
      if (x) {
        var bd = 0, frame, form, specid, onload;
        x['con'] = f.condition;
        x['cha'] = Z.CR();
        x['dmode'] = Z.b.mode;
        x['tm'] = (new Date().getTime().toString());
        x['size'] = (options.size ? 1 : 0);
        if (Z.aa)
          x['aa'] = 1;
        if (Z.ab != null)
          x['ab'] = Z.ab;
        if (Z.t != null) {
          x['t'] = Z.t
        } else if (Z.pm) {
          x['pm'] = 1
        }
        if (!(Z.b.n == 'F' && Z.b.v >= 51)) {
          form = Z.d.createElement('form');
          specid = Math.floor(Math.random() * 10000) + (new Date().getTime().toString());
          form.action = q4('reql');
          form.method = 'POST';
          form.id = 'form_' + specid;
          Z.d.body.appendChild(form);
          for (var F in x) {
            if (!x.hasOwnProperty(F))
              continue;
            var O = Z.d.createElement('input');
            O.type = 'hidden';
            O.name = F;
            O.value = x[F];
            form.appendChild(O)
          }
          frame = Z.d.createElement('iframe');
          frame.name = form.target = 'fontplus_iframe_' + specid;
          frame.style.display = 'none';
          frame.id = 'frame_' + specid;
          if (be1() && Z.b.n == 'M' && (Z.b.v < 7 || parseInt(Z.b.mode) < 7))
            frame.src = q4('reload');
          else
            frame.src = 'about:blank';
          onload = frame.onload = function() {
            if (bd == 0) {
              form.submit()
            } else if (bd == 1) {
              form.parentNode.removeChild(form);
              setTimeout(function() {
                frame.parentNode.removeChild(frame)
              }, 0)
            }
            bd++
          }
          ;
          if (document.all) {
            frame.onreadystatechange = function() {
              if (this.readyState == 'complete') {
                frame.contentWindow.name = frame.name;
                onload()
              }
            }
          }
          Z.d.body.appendChild(frame)
        } else {
          var q = '';
          for (var F in x) {
            if (!x.hasOwnProperty(F))
              continue;
            q = q + '&' + F + '=' + x[F]
          }
          frame = Z.d.createElement('iframe');
          specid = Math.floor(Math.random() * 10000) + (new Date().getTime().toString());
          frame.id = 'frame_' + specid;
          onload = frame.onload = function() {
            var Y = new XMLHttpRequest();
            Y.open('POST', q4('reql'), true);
            Y.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            Y.overrideMimeType('text/plain; charset=UTF-8');
            Y.send(q);
            frame.parentNode.removeChild(frame)
          }
          ;
          Z.d.body.appendChild(frame)
        }
      } else {
        var be = use_fonts.length;
        var bm = "c=" + encodeURIComponent(f.ukey);
        bm += "&ca=0";
        bm += '&dmode=' + (Z.b.mode ? Z.b.mode : '0');
        if (Z.aa)
          bm += "&aa=1";
        if (Z.ab != null)
          bm += "&ab=" + Z.ab;
        if (Z.t != null) {
          bm += "&t=" + Z.t
        } else if (Z.pm) {
          bm += "&pm=1"
        }
        if (f.exttype) {
          bm += "&type=" + (f.exttype == 'woff_by_ttf' ? 'woff' : f.exttype)
        }
        var D = "";
        for (var O0 = 0; O0 < use_fonts.length; O0++) {
          if (!str[O0].length)
            continue;
          D += "&fn[" + O0 + "]=" + encodeURIComponent(encodeURIComponent(use_fonts[O0]));
          D += "&nn[" + O0 + "]=" + (nicknames[O0] ? encodeURIComponent(encodeURIComponent(nicknames[O0])) : '0');
          D += "&gl[" + O0 + "]=" + str[O0].length
        }
        if (D != "") {
          var bh = document.createElement('img');
          bh.setAttribute('src', f.lsv + bm + D + "&tm=" + Math.floor(Math.random() * 10000) + (new Date().getTime().toString()));
          bh.setAttribute('width', 0);
          bh.setAttribute('height', 0);
          bh.style.display = 'none';
          bh.onerror = function() {
            bh.parentNode.removeChild(bh)
          }
          ;
          bh.onload = function() {
            bh.parentNode.removeChild(bh)
          }
          ;
          Z.d.body.appendChild(bh)
        }
      }
    };
    var F2 = function() {
      var Y;
      selidx = -1;
      for (Y = selhist.length; Y--; ) {
        if (selhist[Y].selector == options.selector) {
          selidx = Y;
          break
        }
      }
      if (selidx < 0) {
        selidx = selhist.length;
        selhist.push({
          'selector': options.selector,
          'id': 'fontplus_css_' + selidx
        })
      }
    };
    var A = function(Y, F) {
      if (!F) {
        var q = Z.TN(Y, 'SCRIPT');
        for (var bh = q.length; bh--; ) {
          if (q[bh].src.match(/\/accessor\/script\/fontplus.js\?/)) {
            F = 1;
            break
          }
        }
        if (!F)
          return F
      }
      var O = Z.QS(options.selector, Y), bh, e = [];
      if (options.selector != '*') {
        for (var bh = O.length; bh--; )
          e = e.concat(Z.CN(O[bh]))
      } else {
        e = O
      }
      q1(e);
      if (options.selector == '*')
        V(Y);
      return F
    };
    var q1 = function(Y) {
      var O, k;
      for (k = Y.length; k--; ) {
        if ((O = g(Y[k])) == null)
          continue;
        w(Y[k], O)
      }
    };
    var q0 = function(O) {
      var Y;
      if (O) {
        Y = new RegExp("　| |'|\r|\n|\t",'g')
      } else {
        Y = new RegExp("　|\r|\n|\t",'g')
      }
      for (var q = use_fonts.length; q--; ) {
        var F = str[q].replace(Y, '');
        str[q] = q9(F.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || []).sort().join('');
        try {
          encodeURIComponent(str[q])
        } catch (e) {
          str[q] = F
        }
        if (Z.b.n == 'M' && str[q].indexOf("'") >= 0) {
          str[q] = str[q].replace("'", "") + "'"
        }
        if (Z.b.n == 'M' && str[q].indexOf(".") >= 0) {
          str[q] = str[q].replace(".", "") + "."
        }
      }
    };
    var q9 = function(Y) {
      var q = {};
      var O = [];
      var F, value;
      for (F = 0; F < Y.length; F++) {
        value = Y[F];
        if (!(value in q)) {
          q[value] = true;
          O.push(value)
        }
      }
      return O
    };
    var V = function(Y) {
      for (var O = Y.styleSheets.length; O--; )
        G(Y.styleSheets[O])
    };
    var G = function(O) {
      var Y, sc, st, act, p_cls;
      try {
        Y = O.cssRules ? O.cssRules : O.rules
      } catch (e) {
        Y = null
      }
      if (!Y)
        return;
      for (var q = Y.length; q--; ) {
        try {
          sc = Y[q].styleSheet
        } catch (e) {
          sc = null
        }
        if (sc)
          G(sc);
        if (!Y[q].selectorText)
          continue;
        var F = Y[q].selectorText.match(/(:link|:visited|:hover|:active)/ig);
        if (F && F.length && Y[q].style.fontFamily.length) {
          act = Y[q].selectorText.replace(/:link|:visited|:hover|:active/ig, "");
          p_cls = Z.CS(act);
          for (var bh = p_cls.length; bh--; ) {
            if ((st = g(p_cls[bh])) == null || Z.TM(st) == Z.TM(Y[q].style.fontFamily)) {
              continue
            }
            w(p_cls[bh], Y[q].style.fontFamily)
          }
        }
      }
    };
    var g = function(Y) {
      return Z.ST(Y, Z.TC('font-family'))
    };
    var q6 = function() {
      var Y = Z.b.n
        , v = Z.b.v;
      irregular = 0;
      if (Y == 'O' || Y == 'T')
        irregular = 1;
      else if (Y == 'M' && v < 8)
        irregular = 2;
      else if (Y == 'S' && v < 5)
        irregular = 3;
      if (Y == 'M' && v >= 6 || Y == 'F' && v >= 3.5 || Y == 'C' && v >= 2 || Y == 'O' && v >= 10 || Y == 'T' && v >= 9.7 || Y == 'S' && v >= 3.1 || Y == 'A' && v >= 2.2 || Y == 'I' || Y == 'U' || Y == 'E')
        return true;
      return false
    };
    var w = function(M, O, Y) {
      var q = O.replace(/\\/g, "").replace(/'/g, "").replace(/"/g, "").split(","), idx, c, n, nst = false, fn, orignalFont;
      var O0;
      for (var be = 0; be < q.length; be++) {
        q[be] = Z.TM(q[be]);
        var bh = O4(q[be]);
        if (bh) {
          orignalFont = bh['org']
        } else {
          orignalFont = q[be]
        }
        if (Z.I(q[be], oth_fonts) >= 0) {
          continue
        }
        if ((idx = Z.I(q[be], use_fonts)) < 0) {
          if ((c = F7(q[be])) >= 0) {
            if ((idx = Z.I(font_ext_hist[c].org, use_fonts)) < 0) {
              idx = use_fonts.length;
              use_fonts.push(font_ext_hist[c].org)
            }
          } else if ((c = Z.I(orignalFont, f.plusf)) >= 0) {
            idx = use_fonts.length;
            use_fonts.push(q[be])
          }
        }
        if (idx < 0) {
          oth_fonts.push(q[be]);
          continue
        }
        O0 = bc(M);
        if (!O0) {
          if (str[idx] == null) {
            use_fonts.splice(idx, 1)
          }
          return
        }
        if (str[idx] == null)
          str[idx] = '';
        str[idx] += O0;
        if (M.nodeName.toLowerCase() == 'ol') {
          var bm = Z.ST(M, Z.TC('list-style-type')).toLowerCase();
          if (bm && bm != 'none' && bm != 'disc' && bm != 'circle' && bm != 'square') {
            var bd = M.getElementsByTagName("li").length;
            if (!liststyletypes[idx]) {
              liststyletypes[idx] = bm;
              liststyletypecnts[idx] = bd
            } else {
              var D = liststyletypes[idx].toString().split("_");
              var F = Z.I(bm, D);
              if (F < 0) {
                liststyletypes[idx] += "_" + bm;
                liststyletypecnts[idx] += "_" + bd
              } else {
                var x = liststyletypecnts[idx].toString().split("_");
                if (x[F] < bd) {
                  x[F] = bd;
                  liststyletypecnts[idx] = x.join("_")
                }
              }
            }
          }
        }
        if (font_ext) {
          if (!nst)
            nst = O.replace(/'/g, "").replace(/"/g, "");
          if (nicknames[idx] == null)
            nicknames[idx] = 'FP-' + F1(16);
          ecp_fa = q[be].replace(/\+/g, "\\+").replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\*/g, "\\*").replace(/\?/g, "\\?").replace(/\./g, "\\.");
          nst = nst.replace(new RegExp(ecp_fa), nicknames[idx])
        }
      }
      if (nst) {
        if (font_ext_reload)
          M.setAttribute('data-fp-tmp-nst', nst);
        else
          M.style.fontFamily = nst
      }
    };
    var bc = function(q, Y) {
      var O = Z.l ? q.tagName : q.tagName.toUpperCase(), s = '', i;
      if (O == 'INPUT' && q.type == 'text' || O == 'TEXTAREA') {
        q.style.fontFamily = Z.b.fd;
        return s
      } else if (O == 'SCRIPT' || O == 'HEAD' || O == 'TITLE' || O == 'STYLE' || O == 'HTML' || O == 'META') {
        return s
      }
      if (q.value && O != 'LI' && O != 'SELECT') {
        s = q.value
      } else if (q.childNodes.length) {
        if (Z.b.n == 'M' && (Z.b.v < 9 || Z.b.mode < 9)) {
          s += P(q, 1);
          if (O == 'TR') {
            for (i = q.cells.length; i--; )
              s += q.cells[i].innerText
          }
        } else
          s += q2(q)
      } else {
        return s
      }
      l(3, q);
      return Z.TM(s)
    };
    var q2 = function(Y, O) {
      if (Y.nodeValue)
        O = Y.nodeValue;
      else if (Y.textContent)
        O = Y.textContent;
      else if (Y.innerText && (Z.l ? Y.tagName : Y.tagName.toUpperCase()) == 'A')
        O = Y.innerText;
      else
        O = '';
      return O
    };
    var P = function(O, Y) {
      var q, s = '';
      for (q = O.childNodes.length; q--; ) {
        if (options.selector != '*' && O.childNodes[q].childNodes.length)
          s += P(O.childNodes[q], Y + 1);
        s += q2(O.childNodes[q])
      }
      return s
    };
    var be1 = function() {
      return typeof (Z.d.location.protocol) == 'unknown' || Z.d.location.protocol == 'https:' ? 1 : 0
    };
    var q4 = function(Y) {
      return (be1() ? 'https://' + f.server[0] : 'http://' + f.server[1]) + '/accessor' + (Y ? '/' + Y : '/mkfont')
    };
    var Q = function(Y) {
      if (!str.length) {
        N();
        return
      }
      desig = Y ? Y : 0;
      if (y(desig) === true) {
        return
      }
      var O = use_fonts.length;
      var q = 'condition=' + encodeURIComponent(f.condition);
      q += '&charset=' + Z.CR();
      q += '&browser[name]=' + Z.b.name;
      if (Z.b.name.substr(0, 7) == 'Unknown')
        q += '&browser[ver]=' + Z.b.name;
      else
        q += '&browser[ver]=' + Z.b.ver;
      q += '&browser[mode]=' + Z.b.mode;
      q += '&browser[os]=' + Z.b.os;
      q += '&location=' + Z.d.location.href;
      q += '&ssl=' + be1();
      q += '&frame=1';
      q += '&tagid=' + (Y ? Y : 'css_' + selidx);
      q += '&tm=' + (new Date().getTime().toString());
      q += '&size=' + (options.size ? 1 : 0);
      if (Z.aa)
        q += '&aa=1';
      if (Z.ab != null)
        q += '&ab=' + Z.ab;
      if (Z.t != null) {
        q += '&t=' + Z.t
      } else if (Z.pm) {
        q += '&pm=1'
      }
      for (var F = 0; F < O; F++) {
        if (!str[F].length)
          continue;
        q += '&fonts[' + F + '][family]=' + E(unescape(encodeURIComponent(use_fonts[F])));
        q += '&fonts[' + F + '][nickname]=' + (nicknames[F] ? nicknames[F] : '0');
        q += '&fonts[' + F + '][lst]=' + (liststyletypes[F] ? liststyletypes[F] : '0');
        q += '&fonts[' + F + '][lsc]=' + (liststyletypecnts[F] ? liststyletypecnts[F] : '0');
        q += '&fonts[' + F + '][str]=' + E(unescape(encodeURIComponent(str[F])));
        Z.CM(Y || font_ext ? nicknames[F] : use_fonts[F], str[F].substr(0, 2), Y ? Y : F);
        lclist.push(Y ? Y : F)
      }
      Z.X(q4(), F4, q, Y)
    };
    var F4 = function(q, Y) {
      if (Z.z)
        return;
      if (q) {
        if (font_ext_reload) {
          S()
        }
        var O = q.split('|');
        var F = (desig ? desig : selhist[selidx].id)
          , css = Z.d.getElementById(F);
        if (css && Z.b.n == 'M') {
          css.parentNode.removeChild(css);
          css = null
        }
        if (!css) {
          css = Z.d.createElement('style');
          css.setAttribute('type', 'text/css');
          css.setAttribute('rel', 'stylesheet');
          css.setAttribute('id', F);
          par.appendChild(css)
        }
        if (css.styleSheet) {
          css.styleSheet.cssText = O[0]
        } else {
          css.innerHTML = O[0]
        }
        if (lclist.length) {
          Z.WT(lclist, desig ? options.callbacks[desig]['func'] : completefunc, options.size, be5())
        }
        clearTimeout(tid);
        U(O[1]);
        if (f.rl && f.rl == 2) {
          F0(null)
        }
        if (typeof (sessionStorage) != 'undefined' && Z.b.n != 'U') {
          var bh = "";
          for (var be = 0; be < use_fonts.length; be++) {
            bh += use_fonts[be] + (nicknames[be] ? nicknames[be] : '0') + str[be]
          }
          try {
            if (font_ext && O[2]) {
              sessionStorage.setItem(bh, O[2])
            } else {
              sessionStorage.setItem(bh, O[0])
            }
          } catch (e) {}
        }
        bh7()
      } else if (Y.status != 200 && (Z.b.n == 'F' || Z.b.n == 'S')) {
        proxy = true;
        Z.CD(lclist);
        lclist = [];
        q8(Y.designate_id)
      }
    };
    var q5 = function(q, bh) {
      var Y = Z.d.getElementById(bh ? bh : 'fontplus_link');
      if (Y) {
        Y.parentNode.removeChild(Y)
      }
      Y = Z.d.createElement('link');
      Y.setAttribute('type', 'text/css');
      Y.setAttribute('rel', 'stylesheet');
      Y.setAttribute('charset', 'utf-8');
      Y.setAttribute('id', bh ? bh : 'fontplus_link');
      var O = '&location=' + encodeURIComponent(Z.d.location.href);
      var F = '';
      if (f.box)
        F = '&box=' + encodeURIComponent(f.box);
      Y.setAttribute('href', q4('stylesheet') + '/' + q + '?' + encodeURIComponent(f.condition) + O + F);
      Y.setAttribute('media', 'screen');
      par.appendChild(Y);
      return Y
    };
    var be6 = function(Y) {
      var O = Z.d.createElement('script');
      O.setAttribute('id', 'fontplus_jsonp');
      O.charset = 'utf-8';
      O.src = q4('jsonp') + '/' + Y + '/receiveOther?' + encodeURIComponent(f.condition);
      par.appendChild(O)
    };
    var N = function() {
      Z.g = false;
      clearTimeout(tid);
      if (completefunc)
        completefunc({
          'code': 0
        })
    };
    var q8 = function(D) {
      if (Z.z)
        return;
      if (!str.length) {
        N();
        return
      }
      var be = use_fonts.length, param = {}, cnt = 0, frame, form, specid, onload;
      desig = D ? D : 0;
      if (irregular !== 1 && y(desig) === true) {
        return
      }
      param['condition'] = f.condition;
      param['charset'] = Z.CR();
      param['browser[name]'] = Z.b.name;
      if (Z.b.name.substr(0, 7) == 'Unknown')
        param['browser[ver]'] = Z.b.name;
      else
        param['browser[ver]'] = Z.b.ver;
      param['browser[mode]'] = Z.b.mode;
      param['browser[os]'] = Z.b.os;
      param['location'] = Z.d.location.href;
      param['ssl'] = be1();
      param['tagid'] = (D ? D : 'css_' + selidx);
      param['frame'] = (Z.b.n == 'M' && Z.b.v == 6 ? ifrms.length + 1 : (Z.b.n == 'S' && Z.b.v < 4 ? 2 : 1));
      param['tm'] = (new Date().getTime().toString());
      param['size'] = (options.size ? 1 : 0);
      if (Z.aa)
        param['aa'] = 1;
      if (Z.ab != null)
        param['ab'] = Z.ab;
      if (Z.t != null) {
        param['t'] = Z.t
      } else if (Z.pm) {
        param['pm'] = 1
      }
      var bd = '';
      for (var x = 0; x < be; x++) {
        if (!str[x].length)
          continue;
        param['fonts[' + x + '][family]'] = E(unescape(encodeURIComponent(use_fonts[x])));
        param['fonts[' + x + '][nickname]'] = (nicknames[x] ? nicknames[x] : '0');
        param['fonts[' + x + '][lst]'] = (liststyletypes[x] ? liststyletypes[x] : '0');
        param['fonts[' + x + '][lsc]'] = (liststyletypecnts[x] ? liststyletypecnts[x] : '0');
        param['fonts[' + x + '][str]'] = E(unescape(encodeURIComponent(str[x])));
        Z.CM(D || font_ext ? nicknames[x] : use_fonts[x], str[x].substr(0, 2), D ? D : x);
        lclist.push(D ? D : x);
        if (bd != '') {
          bd += ','
        }
        bd += use_fonts[x]
      }
      form = Z.d.createElement('form');
      specid = Math.floor(Math.random() * 10000) + (new Date().getTime().toString());
      form.action = q4() + '/' + specid;
      form.method = 'POST';
      form.id = 'form_' + specid;
      Z.d.body.appendChild(form);
      for (var bh in param) {
        if (!param.hasOwnProperty(bh))
          continue;
        var F = Z.d.createElement('input');
        F.type = 'hidden';
        F.name = bh;
        F.value = param[bh];
        form.appendChild(F)
      }
      frame = Z.d.createElement('iframe');
      frame.name = form.target = 'fontplus_iframe_' + specid;
      frame.style.display = 'none';
      frame.id = 'frame_' + specid;
      if (be1() && Z.b.n == 'M' && (Z.b.v < 7 || parseInt(Z.b.mode) < 7))
        frame.src = q4('reload');
      else
        frame.src = 'about:blank';
      onload = frame.onload = function() {
        if (cnt == 0) {
          form.submit()
        } else if (cnt == 1) {
          form.parentNode.removeChild(form);
          frame.parentNode.removeChild(frame);
          q7(Z.d);
          if (font_ext_reload) {
            S()
          }
          if (Z.b.n == 'F' || Z.b.n == 'S') {
            var Y = q5(specid + '.css', D ? D : selhist[selidx].id);
            clearTimeout(tid);
            if (typeof (sessionStorage) != 'undefined') {
              var O = "";
              for (var q = 0; q < use_fonts.length; q++) {
                O += use_fonts[q] + (nicknames[q] ? nicknames[q] : '0') + str[q]
              }
              try {
                sessionStorage.setItem(O, Y.href)
              } catch (e) {}
            }
          } else {
            be6(specid)
          }
          if (lclist.length) {
            Z.WT(lclist, desig ? options.callbacks[desig]['func'] : completefunc, options.size, be5())
          }
          U(bd);
          bh7()
        }
        cnt++
      }
      ;
      if (document.all) {
        frame.onreadystatechange = function() {
          if (this.readyState == 'complete') {
            frame.contentWindow.name = frame.name;
            onload()
          }
        }
      }
      Z.d.body.appendChild(frame)
    };
    var h = function() {
      if (irregular === 0)
        return true;
      if (irregular === 1) {
        if (!f.nolist)
          q5('allfonts.css')
      }
      B(Z.d, par);
      return true
    };
    var B = function(F, O, q) {
      var Y = F.getElementById('fontplus_style');
      if (!Y) {
        Y = Z.d.createElement('style');
        Y.setAttribute('type', 'text/css');
        Y.setAttribute('id', 'fontplus_style')
      }
      if (q) {
        if (irregular == 2 && Y.styleSheet) {
          Y.styleSheet.cssText = q
        } else if (irregular == 2 && Y.sheet) {
          Y.sheet.cssText = q
        } else {
          Y.innerHTML = q
        }
      }
      O.appendChild(Y)
    };
    var K = function() {
      if (f.nolist) {
        var Y = Z.d.createElement('style'), s = '', i;
        var O = '&location=' + encodeURIComponent(Z.d.location.href);
        Y.setAttribute('type', 'text/css');
        Y.setAttribute('id', 'fontplus_link');
        s = "@charset 'utf-8';\n";
        for (i = f.plusf.length; i--; ) {
          s += "@font-face { font-family: '" + f.plusf[i] + "'; font-weight: Bold; src: url('" + q4('download') + "/default." + f.condition + ".ttf" + O + "') format('truetype'); }\n"
        }
        s += "@font-face { font-family: 'FONTPLUS_DUMMY'; font-weight: Bold; src: url('" + q4('download') + "/default." + f.condition + ".ttf" + O + "') format('truetype'); }\n";
        if (irregular == 2 && Y.styleSheet) {
          Y.styleSheet.cssText = s
        } else if (irregular == 2 && Y.sheet) {
          Y.sheet.cssText = s
        } else {
          Y.innerHTML = s
        }
        par.appendChild(Y)
      } else
        q5('allfonts.css')
    };
    var q7 = function(O) {
      var Y = O.getElementById('fontplus_link');
      if (Y)
        Y.parentNode.removeChild(Y)
    };
    var be5 = function() {
      return f.timeout * 1000 - (+new Date() - Z.m)
    };
    var l = function(bh, bd) {
      if (bh == 0 && f.delay > 0) {
        var F = Z.d.createElement('style'), s, i;
        F.setAttribute('type', 'text/css');
        F.setAttribute('id', 'fontplus_delay_css');
        s = '.fontplus_target_tags {visibility:hidden;} body {visibility:hidden}';
        if (Z.b.n == 'M' && (Z.b.v < 9 || Z.b.mode < 9) && F.styleSheet) {
          F.styleSheet.cssText = s
        } else if (Z.b.n == 'M' && (Z.b.v < 9 || Z.b.mode < 9) && F.sheet) {
          F.sheet.cssText = s
        } else {
          F.innerHTML = s
        }
        par.appendChild(F)
      } else if (bh == 1) {
        if (f.delay > 0) {
          bgimg.type = false;
          bgimg.src = Z.ST(Z.TN(Z.d, "BODY")[0], Z.TC('background-image'));
          if (!bgimg.type && bgimg.src != 'none')
            bgimg.type = "BODY";
          if (bgimg.type) {
            Z.TN(Z.d, bgimg.type)[0].style.backgroundImage = 'none'
          }
          completefunc = function(O) {
            var Y = Z.QS(".fontplus_target_tags", document);
            for (var q = Y.length; q--; ) {
              Y[q].style.visibility = '';
              Y[q].className = Y[q].className.replace(/\s*fontplus_target_tags/, "")
            }
            Z.d.body.style.visibility = 'visible';
            if (f.delay == 2) {
              if (bgimg.type)
                Z.TN(Z.d, bgimg.type)[0].style.backgroundImage = bgimg.src
            }
            if (options.complete)
              options.complete(O)
          }
        } else {
          completefunc = function(Y) {
            if (options.complete)
              options.complete(Y)
          }
        }
      } else if (bh == 2 && f.delay == 1) {
        Z.d.body.style.visibility = 'visible';
        if (bgimg.type)
          Z.TN(Z.d, bgimg.type)[0].style.backgroundImage = bgimg.src
      } else if (bh == 3 && f.delay > 0) {
        if (bd.className.match) {
          if (bd.style.visibility != 'hidden' && !bd.className.match(/\s*fontplus_target_tags/)) {
            var be = bd.className;
            be += (be.length > 0 ? ' ' : '') + "fontplus_target_tags";
            bd.className = be
          }
        } else if (bd.className.baseVal.match) {
          if (bd.style.visibility != 'hidden' && !bd.className.baseVal.match(/\s*fontplus_target_tags/)) {
            var be = bd.className;
            be += (be.length > 0 ? ' ' : '') + "fontplus_target_tags";
            bd.className = be
          }
        }
      }
    };
    var F3 = function() {
      var O = "http" + (be1() ? "s" : "") + f.bfurl;
      var bh = f.bfnms;
      var q = "@font-face { font-family: 'fpbf_ac93d8111'; src: url('" + O;
      if (Z.b.n != 'U') {
        var F = bh['w'] + "') format('woff";
        if (Z.b.ext) {
          switch (Z.b.ext) {
          case 'o':
            F = bh['o'] + "') format('opentype";
            break;
          case 't':
            F = bh['t'] + "') format('truetype";
            break;
          case 'e':
            F = bh['e'];
            break
          }
        }
        q += F + "'); }"
      } else {
        q += bh['w'] + "') format('woff'), url('" + O + bh['o'] + "') format('opentype'), url('" + O + bh['t'] + "') format('truetype'); src: url('" + O + bh['e'] + "')\\9; }"
      }
      var Y = Z.d.createElement('style');
      Y.setAttribute('type', 'text/css');
      Y.setAttribute('id', 'fpbf_ac93d8111_css');
      if (Z.b.n == 'M' && (Z.b.v < 9 || Z.b.mode < 9) && Y.styleSheet) {
        par.appendChild(Y);
        Y.styleSheet.cssText = q
      } else {
        Y.innerHTML = q;
        par.appendChild(Y)
      }
    };
    var F1 = function(Y) {
      var O = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', rand = '', i, n = O.length;
      for (i = Y; i--; )
        rand += O.charAt(Math.floor(Math.random() * n));
      return rand
    };
    var S = function() {
      if (!font_ext_reload)
        return -1;
      var Y = Z.QS(options.selector, Z.d);
      for (var O = Y.length; O--; ) {
        if (Y[O].getAttribute('data-fp-tmp-nst')) {
          Y[O].style.fontFamily = Y[O].getAttribute('data-fp-tmp-nst');
          Y[O].removeAttribute('data-fp-tmp-nst')
        }
      }
      font_ext_reload = false
    };
    var bh7 = function() {
      if (!font_ext)
        return -1;
      font_ext_hist = [];
      for (var Y = 0; Y < use_fonts.length; Y++) {
        font_ext_hist.push({
          'org': use_fonts[Y],
          'ext': nicknames[Y]
        })
      }
      font_ext = false
    };
    var F7 = function(O, q) {
      if (!font_ext)
        return -1;
      var Y = O.toLowerCase();
      for (q = font_ext_hist.length; q-- && Y != font_ext_hist[q].ext.toLowerCase(); )
        ;
      return q
    };
    var U = function(O) {
      if (!f.trial)
        return;
      var q = 2, rsp = 2, img = Z.d.createElement('img'), s, fs = O.replace(/,/g, "\r\n");
      img.setAttribute('src', 'http' + (be1() ? 's' : '') + '://' + f.server[0] + '/img/common/banner.gif');
      img.setAttribute('id', 'fontplus-trial-banner');
      img.setAttribute('class', 'fontplus-trial-banner');
      img.setAttribute('title', fs);
      s = img.style;
      s.position = 'fixed';
      s.bottom = q + 'px';
      s.right = rsp + 'px';
      s.cursor = 'pointer';
      s.zIndex = 2147483647;
      s.textDecoration = 'none';
      s.verticalAlign = 'baseline';
      s.outline = s.padding = s.margin = s.border = 0;
      if (Z.b.n == 'M' && (Z.b.v < 7 || parseInt(Z.b.mode) < 7) || Z.b.n == 'I') {
        other_scroll = function() {
          var Y, cw, st, sl;
          if (Z.b.n == 'I') {
            cw = window.innerWidth;
            Y = window.innerHeight;
            st = window.scrollY;
            sl = window.scrollX
          } else {
            Y = Z.d.documentElement.clientHeight || Z.d.body.clientHeight || Z.d.clientHeight || 0;
            cw = Z.d.documentElement.clientWidth || Z.d.body.clientWidth || Z.d.clientWidth || 0;
            st = Z.d.documentElement.scrollTop || Z.d.body.scrollTop || Z.d.scrollTop || 0;
            sl = Z.d.documentElement.scrollLeft || Z.d.body.scrollLeft || Z.d.scrollLeft || 0
          }
          s.top = (Y + st - img.height - rsp) + 'px';
          s.left = (cw + sl - img.width - q) + 'px'
        }
        ;
        s.position = 'absolute';
        window.onscroll = window.onresize = other_scroll
      }
      Z.TN(Z.d, 'BODY')[0].appendChild(img);
      Z.E(img, 'click', function() {
        window.open('http://' + f.server[0] + '/')
      })
    };
    var p = function(Y) {
      if (String(Y).match(/\{pm\}$|---pm$/)) {
        return 1
      } else if (String(Y).match(/\{t=[0-9]+\}$|---t[0-9]+$/)) {
        return 2
      } else {
        return 0
      }
    };
    var O4 = function(q) {
      var O = p(q)
        , orignalFont = null
        , value = null
        , proportionData = new Object();
      if (O == 1) {
        orignalFont = String(q).replace(/\{pm\}$|---pm$/, "");
        O = "pm";
        value = null
      } else if (O == 2) {
        orignalFont = String(q).replace(/\{t=[0-9]+\}$|---t[0-9]+$/, "");
        O = "t";
        var Y = String(q).match(/\{t=[0-9]+\}$|---t[0-9]+$/);
        value = String(Y).match(/[0-9]+/)
      }
      if (orignalFont) {
        proportionData['org'] = orignalFont;
        if (O)
          proportionData['mode'] = O;
        if (value)
          proportionData['value'] = value;
        return proportionData
      }
      return null
    };
    var E = function(Y) {
      var bd = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', String.fromCharCode(43), String.fromCharCode(47)];
      var F = "";
      var q = Y.length;
      var O = 0;
      var bh = 0;
      var D = 0;
      while (D < q) {
        bh = Y.charCodeAt(D);
        if (bh > 0xff) {
          return null
        }
        F += bd[(bh >> 2)];
        O = (bh & 0x03) << 4;
        D++;
        if (D >= q) {
          break
        }
        bh = Y.charCodeAt(D);
        if (bh > 0xff) {
          return null
        }
        F += bd[O | (bh >> 4)];
        O = (bh & 0x0f) << 2;
        D++;
        if (D >= q) {
          break
        }
        bh = Y.charCodeAt(D);
        if (bh > 0xff) {
          return null
        }
        F += bd[O | (bh >> 6)];
        F += bd[(bh & 0x3f)];
        D++
      }
      var be = q % 3;
      if (be) {
        F += bd[O]
      }
      if (be == 1) {
        F += "=="
      } else if (be == 2) {
        F += "="
      }
      return F9(F)
    };
    var F9 = function(Y) {
      return Y.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '')
    };
    return f
  }
  )();
  FontPlusAccessor.condition = 'fp_71a4ed00547e2050d5fd55dd9adcbe51';
  FontPlusAccessor.plusf = ["FP-HiraMinProN-W6", "FP-\u30d2\u30e9\u30ae\u30ce\u660e\u671d ProN W6", "FP-HiraMinProN-W3", "FP-\u30d2\u30e9\u30ae\u30ce\u660e\u671d ProN W3", "FP-HiraMaruProN-W4", "FP-\u30d2\u30e9\u30ae\u30ce\u4e38\u30b4 ProN W4", "FP-HiraKakuStdN-W8", "FP-\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 StdN W8", "FP-HiraKakuProN-W6", "FP-\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN W6", "FP-HiraKakuProN-W3", "FP-\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 ProN W3", "F+UD-NewRodin B", "F+UD-NewRodin\u3000B", "F+UD-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 B", "F+UD-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3\u3000B", "F+UD-NewRodin DB", "F+UD-NewRodin\u3000DB", "F+UD-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 DB", "F+UD-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3\u3000DB", "F+UD-NewRodin M", "F+UD-NewRodin\u3000M", "F+UD-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 M", "F+UD-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3\u3000M", "F+UD-TsukuMin D", "F+UD-TsukuMin\u3000D", "F+UD-\u7b51\u7d2b\u660e\u671d D", "F+UD-\u7b51\u7d2b\u660e\u671d\u3000D", "TsukuMin-D", "F+UD-TsukuMin E", "F+UD-TsukuMin\u3000E", "F+UD-\u7b51\u7d2b\u660e\u671d E", "F+UD-\u7b51\u7d2b\u660e\u671d\u3000E", "TsukuMin-E", "F+UD-TsukuMin R", "F+UD-TsukuMin\u3000R", "F+UD-\u7b51\u7d2b\u660e\u671d R", "F+UD-\u7b51\u7d2b\u660e\u671d\u3000R", "F+UD-Seurat B", "F+UD-Seurat\u3000B", "F+UD-\u30b9\u30fc\u30e9 B", "F+UD-\u30b9\u30fc\u30e9\u3000B", "F+UD-Seurat DB", "F+UD-Seurat\u3000DB", "F+UD-\u30b9\u30fc\u30e9 DB", "F+UD-\u30b9\u30fc\u30e9\u3000DB", "F+UD-Seurat M", "F+UD-Seurat\u3000M", "F+UD-\u30b9\u30fc\u30e9 M", "F+UD-\u30b9\u30fc\u30e9\u3000M", "FOT-Yuruka Std UB", "FOT-\u30e6\u30fc\u30eb\u30ab Std UB", "YurukaStd-UB", "FOT-TsukuAOldMin Pr6 E", "FOT-TsukuAOldMin Pr6 E Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 E", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 E Regular", "TsukuAOldMinPr6-E", "FOT-TsukuBOldMin Pr6N R", "FOT-TsukuBOldMin Pr6N R Regular", "FOT-\u7b51\u7d2bB\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N R", "FOT-\u7b51\u7d2bB\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N R Regular", "TsukuBOldMinPr6N-R", "FOT-TsukuBOldMin Pr6 R", "FOT-TsukuBOldMin Pr6 R Regular", "FOT-\u7b51\u7d2bB\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 R", "FOT-\u7b51\u7d2bB\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 R Regular", "TsukuBOldMinPr6-R", "FOT-TsukuAOldMin Pr6N E", "FOT-TsukuAOldMin Pr6N E Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N E", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N E Regular", "TsukuAOldMinPr6N-E", "FOT-TsukuAOldMin Pr6N B", "FOT-TsukuAOldMin Pr6N B Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N B", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N B Regular", "TsukuAOldMinPr6N-B", "FOT-TsukuAOldMin Pr6N D", "FOT-TsukuAOldMin Pr6N D Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N D", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N D Regular", "TsukuAOldMinPr6N-D", "FOT-TsukuAOldMin Pr6N M", "FOT-TsukuAOldMin Pr6N M Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N M", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N M Regular", "TsukuAOldMinPr6N-M", "FOT-TsukuAOldMin Pr6N R", "FOT-TsukuAOldMin Pr6N R Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N R", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N R Regular", "TsukuAOldMinPr6N-R", "FOT-TsukuAOldMin Pr6N L", "FOT-TsukuAOldMin Pr6N L Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N L", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N L Regular", "TsukuAOldMinPr6N-L", "FOT-TsukuAOldMin Pr6 B", "FOT-TsukuAOldMin Pr6 B Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 B", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 B Regular", "TsukuAOldMinPr6-B", "FOT-TsukuAOldMin Pr6 D", "FOT-TsukuAOldMin Pr6 D Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 D", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 D Regular", "TsukuAOldMinPr6-D", "FOT-TsukuAOldMin Pr6 M", "FOT-TsukuAOldMin Pr6 M Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 M", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 M Regular", "TsukuAOldMinPr6-M", "FOT-TsukuAOldMin Pr6 R", "FOT-TsukuAOldMin Pr6 R Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 R", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 R Regular", "TsukuAOldMinPr6-R", "FOT-TsukuAOldMin Pr6 L", "FOT-TsukuAOldMin Pr6 L Regular", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 L", "FOT-\u7b51\u7d2bA\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 L Regular", "TsukuAOldMinPr6-L", "HakusyuGyosyoExtraBoldFs", "\u767d\u821f\u6975\u592a\u884c\u66f8fs", "HakusyuSousyoExtraBold", "\u767d\u821f\u6975\u592a\u8349\u66f8", "HakusyuKaisyoExtraBold", "\u767d\u821f\u6975\u592a\u6977\u66f8", "Kasumi", "\u82b1\u58a8", "HOT-Sosho Std R", "HOT-Sosho Std R Regular", "HOT-\u767d\u821f\u8349\u66f8 Std R", "HOT-\u767d\u821f\u8349\u66f8 Std R Regular", "SoshoStd-R", "FSoshoStd-B", "HOT-FSosho Std B", "HOT-FSosho Std B Regular", "HOT-\u767d\u821f\u592a\u8349\u66f8 Std B", "HOT-\u767d\u821f\u592a\u8349\u66f8 Std B Regular", "GFSoshoStd-E", "HOT-GFSosho Std E", "HOT-GFSosho Std E Regular", "HOT-\u767d\u821f\u6975\u592a\u8349\u66f8 Std E", "HOT-\u767d\u821f\u6975\u592a\u8349\u66f8 Std E Regular", "HOT-ReishoR Std R", "HOT-ReishoR Std R Regular", "HOT-\u767d\u821f\u96b7\u66f8R Std R", "HOT-\u767d\u821f\u96b7\u66f8R Std R Regular", "ReishoRStd-R", "FReishoRStd-B", "HOT-FReishoR Std B", "HOT-FReishoR Std B Regular", "HOT-\u767d\u821f\u592a\u96b7\u66f8R Std B", "HOT-\u767d\u821f\u592a\u96b7\u66f8R Std B Regular", "FReishoStd-B", "HOT-FReisho Std B", "HOT-FReisho Std B Regular", "HOT-\u767d\u821f\u592a\u96b7\u66f8 Std B", "HOT-\u767d\u821f\u592a\u96b7\u66f8 Std B Regular", "GFReishoStd-E", "HOT-GFReisho Std E", "HOT-GFReisho Std E Regular", "HOT-\u767d\u821f\u6975\u592a\u96b7\u66f8 Std E", "HOT-\u767d\u821f\u6975\u592a\u96b7\u66f8 Std E Regular", "HOT-Kointai Std R", "HOT-Kointai Std R Regular", "HOT-\u767d\u821f\u53e4\u5370\u4f53 Std R", "HOT-\u767d\u821f\u53e4\u5370\u4f53 Std R Regular", "KointaiStd-R", "FKointaiStd-B", "HOT-FKointai Std B", "HOT-FKointai Std B Regular", "HOT-\u767d\u821f\u592a\u53e4\u5370\u4f53 Std B", "HOT-\u767d\u821f\u592a\u53e4\u5370\u4f53 Std B Regular", "GokuhosoInsotaiStd-L", "HOT-GokuhosoInsotai Std L", "HOT-GokuhosoInsotai Std L Regular", "HOT-\u767d\u821f\u6975\u7d30\u5370\u76f8\u4f53 Std L", "HOT-\u767d\u821f\u6975\u7d30\u5370\u76f8\u4f53 Std L Regular", "HOT-Insotai Std R", "HOT-Insotai Std R Regular", "HOT-\u767d\u821f\u5370\u76f8\u4f53 Std R", "HOT-\u767d\u821f\u5370\u76f8\u4f53 Std R Regular", "InsotaiStd-R", "HOT-Ouka Std R", "HOT-Ouka Std R Regular", "HOT-\u685c\u82b1 Std R", "HOT-\u685c\u82b1 Std R Regular", "OukaStd-R", "HOT-Seigetsu Std R", "HOT-Seigetsu Std R Regular", "HOT-\u9759\u6708 Std R", "HOT-\u9759\u6708 Std R Regular", "SeigetsuStd-R", "HOT-Karakusa Std R", "HOT-Karakusa Std R Regular", "HOT-\u5510\u8349 Std R", "HOT-\u5510\u8349 Std R Regular", "KarakusaStd-R", "GeikaisuikoStd-R", "HOT-Geikaisuiko Std R", "HOT-Geikaisuiko Std R Regular", "HOT-\u9be8\u6d77\u9154\u4faf Std R", "HOT-\u9be8\u6d77\u9154\u4faf Std R Regular", "HOT-Tenshin Std R", "HOT-Tenshin Std R Regular", "HOT-\u5929\u771f Std R", "HOT-\u5929\u771f Std R Regular", "TenshinStd-R", "HOT-KyoMadoka Std R", "HOT-KyoMadoka Std R Regular", "HOT-\u4eac\u5186 Std R", "HOT-\u4eac\u5186 Std R Regular", "KyoMadokaStd-R", "HOT-Hakuu Std R", "HOT-Hakuu Std R Regular", "HOT-\u767d\u96e8 Std R", "HOT-\u767d\u96e8 Std R Regular", "HakuuStd-R", "HOT-Samurai Std R", "HOT-Samurai Std R Regular", "HOT-\u3055\u3080\u3089\u3044 Std R", "HOT-\u3055\u3080\u3089\u3044 Std R Regular", "SamuraiStd-R", "HOT-KyoMadokaKanalarge Std R", "HOT-KyoMadokaKanalarge Std R Regular", "HOT-\u4eac\u5186\u304b\u306a\u592a Std R", "HOT-\u4eac\u5186\u304b\u306a\u592a Std R Regular", "KyoMadokaKanalargeStd-R", "HOT-Ninja Std R", "HOT-Ninja Std R Regular", "HOT-\u5fcd\u8005 Std R", "HOT-\u5fcd\u8005 Std R Regular", "NinjaStd-R", "HOT-Shunpu Std R", "HOT-Shunpu Std R Regular", "HOT-\u96bc\u98a8 Std R", "HOT-\u96bc\u98a8 Std R Regular", "ShunpuStd-R", "HOT-Mamekichi Std R", "HOT-Mamekichi Std R Regular", "HOT-\u307e\u3081\u5409 Std R", "HOT-\u307e\u3081\u5409 Std R Regular", "MamekichiStd-R", "HOT-Mameraku Std R", "HOT-Mameraku Std R Regular", "HOT-\u307e\u3081\u697d Std R", "HOT-\u307e\u3081\u697d Std R Regular", "MamerakuStd-R", "HOT-Mamefuku Std R", "HOT-Mamefuku Std R Regular", "HOT-\u307e\u3081\u798f Std R", "HOT-\u307e\u3081\u798f Std R Regular", "MamefukuStd-R", "HOT-Konshin Std R", "HOT-Konshin Std R Regular", "HOT-\u9b42\u5fc3 Std R", "HOT-\u9b42\u5fc3 Std R Regular", "KonshinStd-R", "HOT-Kaisho Std R", "HOT-Kaisho Std R Regular", "HOT-\u767d\u821f\u6977\u66f8 Std R", "HOT-\u767d\u821f\u6977\u66f8 Std R Regular", "KaishoStd-R", "FKaishoStd-B", "HOT-FKaisho Std B", "HOT-FKaisho Std B Regular", "HOT-\u767d\u821f\u592a\u6977\u66f8 Std B", "HOT-\u767d\u821f\u592a\u6977\u66f8 Std B Regular", "GFKaishoStd-E", "HOT-GFKaisho Std E", "HOT-GFKaisho Std E Regular", "HOT-\u767d\u821f\u6975\u592a\u6977\u66f8 Std E", "HOT-\u767d\u821f\u6975\u592a\u6977\u66f8 Std E Regular", "GyoshoStd-R", "HOT-Gyosho Std R", "HOT-Gyosho Std R Regular", "HOT-\u767d\u821f\u884c\u66f8 Std R", "HOT-\u767d\u821f\u884c\u66f8 Std R Regular", "FGyoshoStd-B", "HOT-FGyosho Std B", "HOT-FGyosho Std B Regular", "HOT-\u767d\u821f\u592a\u884c\u66f8 Std B", "HOT-\u767d\u821f\u592a\u884c\u66f8 Std B Regular", "GFGyoshoStd-E", "HOT-GFGyosho Std E", "HOT-GFGyosho Std E Regular", "HOT-\u767d\u821f\u6975\u592a\u884c\u66f8 Std E", "HOT-\u767d\u821f\u6975\u592a\u884c\u66f8 Std E Regular", "Mamefuku_fs", "\u307e\u3081\u798fFS", "Mameraku_fs", "\u307e\u3081\u697dFS", "Mamekichi_fs", "\u307e\u3081\u5409FS", "Mamefuku", "\u307e\u3081\u798f", "Mameraku", "\u307e\u3081\u697d", "Mamekichi", "\u307e\u3081\u5409", "Bukotsu", "\u6b66\u9aa8", "AunM", "\u963f\u543dM", "AunU", "\u963f\u543dU", "Kintoki", "\u91d1\u6642", "Ninja", "\u5fcd\u8005", "Ohhige115", "\u5927\u9aed115", "Ohhige113", "\u5927\u9aed113", "Kasumi_s", "\u82b1\u58a8s", "Tenshin", "\u5929\u771f", "Hakuu", "\u767d\u96e8", "Seigetsu", "\u9759\u6708", "Konshin", "\u9b42\u5fc3", "Ohka", "\u685c\u82b1", "Karakusa", "\u5510\u8349", "Shunpu", "\u96bc\u98a8", "Samurai", "\u3055\u3080\u3089\u3044", "KyoMadokaKanaB", "\u4eac\u5186\u304b\u306a\u592a", "KyoMadoka", "\u4eac\u5186", "GeikaiSuikouSmall", "\u9be8\u6d77\u9154\u4fafS", "GeikaiSuikou", "\u9be8\u6d77\u9154\u4faf", "hkkakuh", "\u767d\u821f\u89d2\u5d29\u767d\u6587", "hkkakus", "\u767d\u821f\u89d2\u5d29\u6731\u6587", "hkkjtl", "\u767d\u821f\u4e5d\u7573\u7bc6\u7d30", "hkkjtr", "\u767d\u821f\u4e5d\u7573\u7bc6\u30e9\u30d5", "HakusyuKoukotu", "\u767d\u821f\u7532\u9aa8", "HakusyuSyouten", "\u767d\u821f\u5c0f\u7bc6", "HakusyuTenkoin", "\u767d\u821f\u7bc6\u53e4\u5370", "HakusyuTensyoLight", "\u767d\u821f\u7d30\u7bc6\u66f8", "HakusyuTensyoBold", "\u767d\u821f\u592a\u7bc6\u66f8", "HakusyuTensyo", "\u767d\u821f\u7bc6\u66f8", "HakusyuSousyoExtraBoldFs", "\u767d\u821f\u6975\u592a\u8349\u66f8fs", "HakusyuSousyoBold_fs", "\u767d\u821f\u592a\u8349\u66f8fs", "HakusyuReisyoExtraBoldFs", "\u767d\u821f\u6975\u592a\u96b7\u66f8fs", "HakusyuReisyoBold_fs", "\u767d\u821f\u592a\u96b7\u66f8fs", "HakusyuKaisyoExtraBoldFs", "\u767d\u821f\u6975\u592a\u6977\u66f8fs", "HkusyuKaisyoBold_fs", "\u767d\u821f\u592a\u6977\u66f8fs", "HakusyuGyosyoBold_fs", "\u767d\u821f\u592a\u884c\u66f8fs", "HakusyuReisyoExtraBold", "\u767d\u821f\u6975\u592a\u96b7\u66f8", "HakusyuGyosyoExtraBold", "\u767d\u821f\u6975\u592a\u884c\u66f8", "HkInsoutaiExtraLight", "\u767d\u821f\u6975\u7d30\u5370\u76f8\u4f53", "HkInsoutai", "\u767d\u821f\u5370\u76f8\u4f53", "HakusyuKointaiBoldPro", "\u767d\u821f\u592a\u53e4\u5370\u4f53Pro", "HakusyuKointaiPro", "\u767d\u821f\u53e4\u5370\u4f53Pro", "HakusyuReisyoBoldPro", "\u767d\u821f\u592a\u96b7\u66f8Pro", "HakusyuReisyoPro", "\u767d\u821f\u96b7\u66f8Pro", "HakusyuSousyoBoldPro", "\u767d\u821f\u592a\u8349\u66f8Pro", "HakusyuSousyoPro", "\u767d\u821f\u8349\u66f8Pro", "HakusyuGyosyoBoldPro", "\u767d\u821f\u592a\u884c\u66f8Pro", "HakusyuGyosyoPro", "\u767d\u821f\u884c\u66f8Pro", "HakusyuKaisyoLightPro", "\u767d\u821f\u7d30\u6977\u66f8Pro", "HakusyuKaisyoExtraBoldPro", "\u767d\u821f\u6975\u592a\u6977\u66f8Pro", "HakusyuKaisyoBoldPro", "\u767d\u821f\u592a\u6977\u66f8Pro", "HakusyuKaisyoPro", "\u767d\u821f\u6977\u66f8Pro", "HakusyuReisyoLight", "\u767d\u821f\u7d30\u96b7\u66f8", "HakusyuReisyoBold", "\u767d\u821f\u592a\u96b7\u66f8", "HakusyuReisyo", "\u767d\u821f\u96b7\u66f8", "HakusyuKointaiLight", "\u767d\u821f\u7d30\u53e4\u5370\u4f53", "HakusyuKointaiBold", "\u767d\u821f\u592a\u53e4\u5370\u4f53", "HakusyuKointai", "\u767d\u821f\u53e4\u5370\u4f53", "HakusyuKaisyoLight", "\u767d\u821f\u7d30\u6977\u66f8", "HakusyuKaisyoBold", "\u767d\u821f\u592a\u6977\u66f8", "HakusyuKaisyo", "\u767d\u821f\u6977\u66f8", "HakusyuGyousyoLight", "\u767d\u821f\u7d30\u884c\u66f8", "HakusyuGyousyoBold", "\u767d\u821f\u592a\u884c\u66f8", "HakusyuGyousyo", "\u767d\u821f\u884c\u66f8", "FOT-TsukuOldMin Pro R", "FOT-TsukuOldMin Pro R Regular", "FOT-\u7b51\u7d2b\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pro R", "FOT-\u7b51\u7d2b\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pro R Regular", "TsukuOldMinPro-R", "FOT-Seurat ProN  EB", "FOT-Seurat ProN  EB Regular", "FOT-\u30b9\u30fc\u30e9 ProN EB", "FOT-\u30b9\u30fc\u30e9 ProN EB Regular", "SeuratProN-EB", "FOT-TsukuGo Pro U", "FOT-TsukuGo Pro U Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro U", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro U Regular", "TsukuGoPro-U", "FOT-KokinHige Std EB", "FOT-KokinHige Std EB Regular", "FOT-\u53e4\u4eca\u9aed Std EB", "FOT-\u53e4\u4eca\u9aed Std EB Regular", "KokinHigeStd-EB", "FOT-KokinEdo Std EB", "FOT-KokinEdo Std EB Regular", "FOT-\u53e4\u4eca\u6c5f\u6238 Std EB", "FOT-\u53e4\u4eca\u6c5f\u6238 Std EB Regular", "KokinEdoStd-EB", "FOT-Kakurei Std M", "FOT-Kakurei Std M Regular", "FOT-\u89d2\u96b7 Std M", "FOT-\u89d2\u96b7 Std M Regular", "KakureiStd-M", "FOT-Kakurei Std L", "FOT-Kakurei Std L Regular", "FOT-\u89d2\u96b7 Std L", "FOT-\u89d2\u96b7 Std L Regular", "KakureiStd-L", "FOT-Kakurei Std EB", "FOT-Kakurei Std EB Regular", "FOT-\u89d2\u96b7 Std EB", "FOT-\u89d2\u96b7 Std EB Regular", "KakureiStd-EB", "FOT-Hourei Std EB", "FOT-Hourei Std EB Regular", "FOT-\u8c4a\u96b7 Std EB", "FOT-\u8c4a\u96b7 Std EB Regular", "HoureiStd-EB", "AnitoStd-Relief", "FOT-Anito Std Relief", "FOT-Anito Std Relief Regular", "FOT-\u30a2\u30cb\u30c8 Std Relief", "FOT-\u30a2\u30cb\u30c8 Std Relief Regular", "AnitoStd-Inline", "FOT-Anito Std Inline", "FOT-Anito Std Inline Regular", "FOT-\u30a2\u30cb\u30c8 Std Inline", "FOT-\u30a2\u30cb\u30c8 Std Inline Regular", "AnitoStd-M", "FOT-Anito Std M", "FOT-Anito Std M Regular", "FOT-\u30a2\u30cb\u30c8 Std M", "FOT-\u30a2\u30cb\u30c8 Std M Regular", "AnitoStd-L", "FOT-Anito Std L", "FOT-Anito Std L Regular", "FOT-\u30a2\u30cb\u30c8 Std L", "FOT-\u30a2\u30cb\u30c8 Std L Regular", "FOT-TsukuBRdGothic Std B", "FOT-TsukuBRdGothic Std B Regular", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std B", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std B Regular", "TsukuBRdGothicStd-B", "FOT-TsukuBMDMin Std E", "FOT-TsukuBMDMin Std E Regular", "FOT-\u7b51\u7d2bB\u898b\u51fa\u30df\u30f3 Std E", "FOT-\u7b51\u7d2bB\u898b\u51fa\u30df\u30f3 Std E Regular", "TsukuBMDMinStd-E", "FOT-TsukuARdGothic Std B", "FOT-TsukuARdGothic Std B Regular", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std B", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std B Regular", "TsukuARdGothicStd-B", "FOT-TsukuARdGothic Std E", "FOT-TsukuARdGothic Std E Regular", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std E", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std E Regular", "TsukuARdGothicStd-E", "FOT-TsukuARdGothic Std D", "FOT-TsukuARdGothic Std D Regular", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std D", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std D Regular", "TsukuARdGothicStd-D", "FOT-TsukuARdGothic Std M", "FOT-TsukuARdGothic Std M Regular", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std M", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std M Regular", "TsukuARdGothicStd-M", "FOT-TsukuARdGothic Std R", "FOT-TsukuARdGothic Std R Regular", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std R", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std R Regular", "TsukuARdGothicStd-R", "FOT-TsukuARdGothic Std L", "FOT-TsukuARdGothic Std L Regular", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std L", "FOT-\u7b51\u7d2bA\u4e38\u30b4\u30b7\u30c3\u30af Std L Regular", "TsukuARdGothicStd-L", "FOT-TsukuAMDMin Std E", "FOT-TsukuAMDMin Std E Regular", "FOT-\u7b51\u7d2bA\u898b\u51fa\u30df\u30f3 Std E", "FOT-\u7b51\u7d2bA\u898b\u51fa\u30df\u30f3 Std E Regular", "TsukuAMDMinStd-E", "FOT-Skip Std B", "FOT-Skip Std B Regular", "FOT-\u30b9\u30ad\u30c3\u30d7 Std B", "FOT-\u30b9\u30ad\u30c3\u30d7 Std B Regular", "SkipStd-B", "FOT-OedKtr Std E", "FOT-OedKtr Std E Regular", "FOT-\u5927\u6c5f\u6238\u52d8\u4ead\u6d41 Std E", "FOT-\u5927\u6c5f\u6238\u52d8\u4ead\u6d41 Std E Regular", "OedKtrStd-E", "FOT-ModeMinB Std B", "FOT-ModeMinB Std B Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB Std B", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB Std B Regular", "ModeMinBStd-B", "FOT-ModeMinA Std B", "FOT-ModeMinA Std B Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA Std B", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA Std B Regular", "ModeMinAStd-B", "FOT-ManyoSosho Std E", "FOT-ManyoSosho Std E Regular", "FOT-\u4e07\u8449\u8349\u66f8 Std E", "FOT-\u4e07\u8449\u8349\u66f8 Std E Regular", "ManyoSoshoStd-E", "FOT-ManyoKoinLarge Std B", "FOT-ManyoKoinLarge Std B Regular", "FOT-\u4e07\u8449\u53e4\u5370\u30e9\u30fc\u30b8 Std B", "FOT-\u4e07\u8449\u53e4\u5370\u30e9\u30fc\u30b8 Std B Regular", "ManyoKoinLargeStd-B", "FOT-ManyoKoin Std B", "FOT-ManyoKoin Std B Regular", "FOT-\u4e07\u8449\u53e4\u5370 Std B", "FOT-\u4e07\u8449\u53e4\u5370 Std B Regular", "ManyoKoinStd-B", "FOT-ManyoGyosho Std E", "FOT-ManyoGyosho Std E Regular", "FOT-\u4e07\u8449\u884c\u66f8 Std E", "FOT-\u4e07\u8449\u884c\u66f8 Std E Regular", "ManyoGyoshoStd-E", "FOT-Humming Std E", "FOT-Humming Std E Regular", "FOT-\u30cf\u30df\u30f3\u30b0 Std E", "FOT-\u30cf\u30df\u30f3\u30b0 Std E Regular", "HummingStd-E", "FOT-Humming Std D", "FOT-Humming Std D Regular", "FOT-\u30cf\u30df\u30f3\u30b0 Std D", "FOT-\u30cf\u30df\u30f3\u30b0 Std D Regular", "HummingStd-D", "FOT-Humming Std M", "FOT-Humming Std M Regular", "FOT-\u30cf\u30df\u30f3\u30b0 Std M", "FOT-\u30cf\u30df\u30f3\u30b0 Std M Regular", "HummingStd-M", "FOT-Humming Std L", "FOT-Humming Std L Regular", "FOT-\u30cf\u30df\u30f3\u30b0 Std L", "FOT-\u30cf\u30df\u30f3\u30b0 Std L Regular", "HummingStd-L", "FOT-Humming Std B", "FOT-Humming Std B Regular", "FOT-\u30cf\u30df\u30f3\u30b0 Std B", "FOT-\u30cf\u30df\u30f3\u30b0 Std B Regular", "HummingStd-B", "AnticCezannePro-M", "FOT-AnticCezanne Pro M", "FOT-AnticCezanne Pro M Regular", "FOT-\u30a2\u30f3\u30c1\u30c3\u30af\u30bb\u30b6\u30f3\u30cc Pro M", "FOT-\u30a2\u30f3\u30c1\u30c3\u30af\u30bb\u30b6\u30f3\u30cc Pro M Regular", "AnticCezannePro-DB", "FOT-AnticCezanne Pro DB", "FOT-AnticCezanne Pro DB Regular", "FOT-\u30a2\u30f3\u30c1\u30c3\u30af\u30bb\u30b6\u30f3\u30cc Pro DB", "FOT-\u30a2\u30f3\u30c1\u30c3\u30af\u30bb\u30b6\u30f3\u30cc Pro DB Regular", "FOT-TsukuMin Pr5N D", "FOT-TsukuMin Pr5N D Regular", "FOT-TsukuMin Pr6N D", "FOT-TsukuMin Pr6N D Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N D", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N D Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N D", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N D Regular", "TsukuMinPr5N-D", "TsukuMinPr6N-D", "FOT-TsukuMin Pr5N M", "FOT-TsukuMin Pr5N M Regular", "FOT-TsukuMin Pr6N M", "FOT-TsukuMin Pr6N M Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N M", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N M Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N M", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N M Regular", "TsukuMinPr5N-M", "TsukuMinPr6N-M", "FOT-TsukuMin Pr5N RB", "FOT-TsukuMin Pr5N RB Regular", "FOT-TsukuMin Pr6N RB", "FOT-TsukuMin Pr6N RB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N RB", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N RB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N RB", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N RB Regular", "TsukuMinPr5N-RB", "TsukuMinPr6N-RB", "FOT-TsukuMin Pr5N R", "FOT-TsukuMin Pr5N R Regular", "FOT-TsukuMin Pr6N R", "FOT-TsukuMin Pr6N R Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N R", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N R Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N R", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N R Regular", "TsukuMinPr5N-R", "TsukuMinPr6N-R", "FOT-TsukuMin Pr5N LB", "FOT-TsukuMin Pr5N LB Regular", "FOT-TsukuMin Pr6N LB", "FOT-TsukuMin Pr6N LB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N LB", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N LB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N LB", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N LB Regular", "TsukuMinPr5N-LB", "TsukuMinPr6N-LB", "FOT-TsukuMin Pr5N L", "FOT-TsukuMin Pr5N L Regular", "FOT-TsukuMin Pr6N L", "FOT-TsukuMin Pr6N L Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N L", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N L Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N L", "FOT-\u7b51\u7d2b\u660e\u671d Pr6N L Regular", "TsukuMinPr5N-L", "TsukuMinPr6N-L", "FOT-TsukuMin Pr5 D", "FOT-TsukuMin Pr5 D Regular", "FOT-TsukuMin Pr6 D", "FOT-TsukuMin Pr6 D Regular", "FOT-TsukuMin Pro D", "FOT-TsukuMin Pro D Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 D", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 D Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 D", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 D Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro D", "FOT-\u7b51\u7d2b\u660e\u671d Pro D Regular", "TsukuMinPr5-D", "TsukuMinPr6-D", "TsukuMinPro-D", "FOT-TsukuMin Pr5 M", "FOT-TsukuMin Pr5 M Regular", "FOT-TsukuMin Pr6 M", "FOT-TsukuMin Pr6 M Regular", "FOT-TsukuMin Pro M", "FOT-TsukuMin Pro M Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 M", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 M Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 M", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 M Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro M", "FOT-\u7b51\u7d2b\u660e\u671d Pro M Regular", "TsukuMinPr5-M", "TsukuMinPr6-M", "TsukuMinPro-M", "FOT-TsukuMin Pr5 RB", "FOT-TsukuMin Pr5 RB Regular", "FOT-TsukuMin Pr6 RB", "FOT-TsukuMin Pr6 RB Regular", "FOT-TsukuMin Pro RB", "FOT-TsukuMin Pro RB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 RB", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 RB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 RB", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 RB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro RB", "FOT-\u7b51\u7d2b\u660e\u671d Pro RB Regular", "TsukuMinPr5-RB", "TsukuMinPr6-RB", "TsukuMinPro-RB", "FOT-TsukuMin Pr5 R", "FOT-TsukuMin Pr5 R Regular", "FOT-TsukuMin Pr6 R", "FOT-TsukuMin Pr6 R Regular", "FOT-TsukuMin Pro R", "FOT-TsukuMin Pro R Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 R", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 R Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 R", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 R Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro R", "FOT-\u7b51\u7d2b\u660e\u671d Pro R Regular", "TsukuMinPr5-R", "TsukuMinPr6-R", "TsukuMinPro-R", "FOT-TsukuMin Pr5 LB", "FOT-TsukuMin Pr5 LB Regular", "FOT-TsukuMin Pr6 LB", "FOT-TsukuMin Pr6 LB Regular", "FOT-TsukuMin Pro LB", "FOT-TsukuMin Pro LB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 LB", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 LB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 LB", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 LB Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro LB", "FOT-\u7b51\u7d2b\u660e\u671d Pro LB Regular", "TsukuMinPr5-LB", "TsukuMinPr6-LB", "TsukuMinPro-LB", "FOT-TsukuMin Pr5 L", "FOT-TsukuMin Pr5 L Regular", "FOT-TsukuMin Pr6 L", "FOT-TsukuMin Pr6 L Regular", "FOT-TsukuMin Pro L", "FOT-TsukuMin Pro L Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 L", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 L Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 L", "FOT-\u7b51\u7d2b\u660e\u671d Pr6 L Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro L", "FOT-\u7b51\u7d2b\u660e\u671d Pro L Regular", "TsukuMinPr5-L", "TsukuMinPr6-L", "TsukuMinPro-L", "FOT-TsukuBRdGothic Std E", "FOT-TsukuBRdGothic Std E Regular", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std E", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std E Regular", "TsukuBRdGothicStd-E", "FOT-TsukuBRdGothic Std D", "FOT-TsukuBRdGothic Std D Regular", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std D", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std D Regular", "TsukuBRdGothicStd-D", "FOT-TsukuBRdGothic Std M", "FOT-TsukuBRdGothic Std M Regular", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std M", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std M Regular", "TsukuBRdGothicStd-M", "FOT-TsukuBRdGothic Std R", "FOT-TsukuBRdGothic Std R Regular", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std R", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std R Regular", "TsukuBRdGothicStd-R", "FOT-TsukuBRdGothic Std L", "FOT-TsukuBRdGothic Std L Regular", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std L", "FOT-\u7b51\u7d2bB\u4e38\u30b4\u30b7\u30c3\u30af Std L Regular", "TsukuBRdGothicStd-L", "FOT-RaglanPunch Std UB", "FOT-RaglanPunch Std UB Regular", "FOT-\u30e9\u30b0\u30e9\u30f3\u30d1\u30f3\u30c1 Std UB", "FOT-\u30e9\u30b0\u30e9\u30f3\u30d1\u30f3\u30c1 Std UB Regular", "RaglanPunchStd-UB", "FOT-Pearl Std L", "FOT-Pearl Std L Regular", "FOT-\u30d1\u30fc\u30eb Std L", "FOT-\u30d1\u30fc\u30eb Std L Regular", "PearlStd-L", "FOT-Stick Std B", "FOT-Stick Std B Regular", "FOT-\u30b9\u30c6\u30c3\u30ad Std", "FOT-\u30b9\u30c6\u30c3\u30ad Std B", "FOT-\u30b9\u30c6\u30c3\u30ad Std Regular", "StickStd-B", "FOT-Steelwork Std B", "FOT-Steelwork Std B Regular", "FOT-\u30b9\u30c6\u30a3\u30fc\u30eb\u30ef\u30fc\u30af Std B", "FOT-\u30b9\u30c6\u30a3\u30fc\u30eb\u30ef\u30fc\u30af Std B Regular", "SteelworkStd-B", "FOT-Slump Std DB", "FOT-Slump Std DB Regular", "FOT-\u30b9\u30e9\u30f3\u30d7 Std DB", "FOT-\u30b9\u30e9\u30f3\u30d7 Std DB Regular", "SlumpStd-DB", "FOT-ShadowTL Std B", "FOT-ShadowTL Std B Regular", "FOT-\u30b7\u30e3\u30c9\u30a6TL Std B", "FOT-\u30b7\u30e3\u30c9\u30a6TL Std B Regular", "ShadowTLStd-B", "FOT-Shadow Std B", "FOT-Shadow Std B Regular", "FOT-\u30b7\u30e3\u30c9\u30a6 Std B", "FOT-\u30b7\u30e3\u30c9\u30a6 Std B Regular", "ShadowStd-B", "FOT-Rowdy Std EB", "FOT-Rowdy Std EB Regular", "FOT-\u30ed\u30a6\u30c7\u30a3 Std EB", "FOT-\u30ed\u30a6\u30c7\u30a3 Std EB Regular", "RowdyStd-EB", "FOT-RocknRoll Std DB", "FOT-RocknRoll Std DB Regular", "FOT-\u30ed\u30c3\u30af\u30f3\u30ed\u30fc\u30eb Std DB", "FOT-\u30ed\u30c3\u30af\u30f3\u30ed\u30fc\u30eb Std DB Regular", "RocknRollStd-DB", "FOT-Reggae Std B", "FOT-Reggae Std B Regular", "FOT-\u30ec\u30b2\u30a8 Std B", "FOT-\u30ec\u30b2\u30a8 Std B Regular", "ReggaeStd-B", "FOT-RampartTL Std EB", "FOT-RampartTL Std EB Regular", "FOT-\u30e9\u30f3\u30d1\u30fc\u30c8TL Std EB", "FOT-\u30e9\u30f3\u30d1\u30fc\u30c8TL Std EB Regular", "RampartTLStd-EB", "FOT-Rampart Std EB", "FOT-Rampart Std EB Regular", "FOT-\u30e9\u30f3\u30d1\u30fc\u30c8 Std EB", "FOT-\u30e9\u30f3\u30d1\u30fc\u30c8 Std EB Regular", "RampartStd-EB", "FOT-Railway Std B", "FOT-Railway Std B Regular", "FOT-\u30ec\u30a4\u30eb\u30a6\u30a7\u30a4 Std B", "FOT-\u30ec\u30a4\u30eb\u30a6\u30a7\u30a4 Std B Regular", "RailwayStd-B", "FOT-Raglan Std UB", "FOT-Raglan Std UB Regular", "FOT-\u30e9\u30b0\u30e9\u30f3 Std UB", "FOT-\u30e9\u30b0\u30e9\u30f3 Std UB Regular", "RaglanStd-UB", "FOT-PopJoy Std B", "FOT-PopJoy Std B Regular", "FOT-Pop\u30b8\u30e7\u30a4 Std B", "FOT-Pop\u30b8\u30e7\u30a4 Std B Regular", "PopJoyStd-B", "FOT-PopHappiness Std EB", "FOT-PopHappiness Std EB Regular", "FOT-Pop\u30cf\u30c3\u30d4\u30cd\u30b9 Std EB", "FOT-Pop\u30cf\u30c3\u30d4\u30cd\u30b9 Std EB Regular", "PopHappinessStd-EB", "FOT-PopFury Std B", "FOT-PopFury Std B Regular", "FOT-Pop\u30d5\u30e5\u30fc\u30ea Std B", "FOT-Pop\u30d5\u30e5\u30fc\u30ea Std B Regular", "PopFuryStd-B", "FOT-Mystery Std DB", "FOT-Mystery Std DB Regular", "FOT-\u30df\u30b9\u30c6\u30ea Std DB", "FOT-\u30df\u30b9\u30c6\u30ea Std DB Regular", "MysteryStd-DB", "FOT-Macaroni Std DB", "FOT-Macaroni Std DB Regular", "FOT-\u30de\u30ab\u30ed\u30cb Std DB", "FOT-\u30de\u30ab\u30ed\u30cb Std DB Regular", "MacaroniStd-DB", "FOT-Lyra Std DB", "FOT-Lyra Std DB Regular", "FOT-\u30e9\u30a4\u30e9 Std DB", "FOT-\u30e9\u30a4\u30e9 Std DB Regular", "LyraStd-DB", "ComicReggaeStd-B", "FOT-ComicReggae Std B", "FOT-ComicReggae Std B Regular", "FOT-\u30b3\u30df\u30c3\u30af\u30ec\u30b2\u30a8 Std B", "FOT-\u30b3\u30df\u30c3\u30af\u30ec\u30b2\u30a8 Std B Regular", "ComicMysteryStd-DB", "FOT-ComicMystery Std DB", "FOT-ComicMystery Std DB Regular", "FOT-\u30b3\u30df\u30c3\u30af\u30df\u30b9\u30c6\u30ea Std DB", "FOT-\u30b3\u30df\u30c3\u30af\u30df\u30b9\u30c6\u30ea Std DB Regular", "CometStd-B", "FOT-Comet Std B", "FOT-Comet Std B Regular", "FOT-\u30b3\u30e1\u30c3\u30c8 Std B", "FOT-\u30b3\u30e1\u30c3\u30c8 Std B Regular", "ChiaroStd-B", "FOT-Chiaro Std B", "FOT-Chiaro Std B Regular", "FOT-\u30ad\u30a2\u30ed Std B", "FOT-\u30ad\u30a2\u30ed Std B Regular", "CaratStd-UB", "FOT-Carat Std UB", "FOT-Carat Std UB Regular", "FOT-\u30ab\u30e9\u30c3\u30c8 Std UB", "FOT-\u30ab\u30e9\u30c3\u30c8 Std UB Regular", "FOT-NewCinemaB Std D", "FOT-NewCinemaB Std D Regular", "FOT-\u30cb\u30e5\u30fc\u30b7\u30cd\u30deB Std D", "FOT-\u30cb\u30e5\u30fc\u30b7\u30cd\u30deB Std D Regular", "NewCinemaBStd-D", "FOT-NewCinemaA Std D", "FOT-NewCinemaA Std D Regular", "FOT-\u30cb\u30e5\u30fc\u30b7\u30cd\u30deA Std D", "FOT-\u30cb\u30e5\u30fc\u30b7\u30cd\u30deA Std D Regular", "NewCinemaAStd-D", "FOT-Kurokane Std EB", "FOT-Kurokane Std EB Regular", "FOT-\u304f\u308d\u304b\u306d Std EB", "FOT-\u304f\u308d\u304b\u306d Std EB Regular", "KurokaneStd-EB", "BudoStd-L", "FOT-Budo Std L", "FOT-Budo Std L Regular", "FOT-\u3076\u3069\u3046 Std L", "FOT-\u3076\u3069\u3046 Std L Regular", "AraletStd-DB", "FOT-Aralet Std DB", "FOT-Aralet Std DB Regular", "FOT-\u3042\u3089\u308c Std DB", "FOT-\u3042\u3089\u308c Std DB Regular", "FOT-SeuratCapie Pro EB", "FOT-SeuratCapie Pro EB Regular", "FOT-\u30b9\u30fc\u30e9\u30ad\u30e3\u30d4\u30fc Pro EB", "FOT-\u30b9\u30fc\u30e9\u30ad\u30e3\u30d4\u30fc Pro EB Regular", "SeuratCapiePro-EB", "FOT-SeuratCapie Pro B", "FOT-SeuratCapie Pro B Regular", "FOT-\u30b9\u30fc\u30e9\u30ad\u30e3\u30d4\u30fc Pro B", "FOT-\u30b9\u30fc\u30e9\u30ad\u30e3\u30d4\u30fc Pro B Regular", "SeuratCapiePro-B", "FOT-SeuratCapie Pro DB", "FOT-SeuratCapie Pro DB Regular", "FOT-\u30b9\u30fc\u30e9\u30ad\u30e3\u30d4\u30fc Pro DB", "FOT-\u30b9\u30fc\u30e9\u30ad\u30e3\u30d4\u30fc Pro DB Regular", "SeuratCapiePro-DB", "FOT-SeuratCapie Pro M", "FOT-SeuratCapie Pro M Regular", "FOT-\u30b9\u30fc\u30e9\u30ad\u30e3\u30d4\u30fc Pro M", "FOT-\u30b9\u30fc\u30e9\u30ad\u30e3\u30d4\u30fc Pro M Regular", "SeuratCapiePro-M", "FOT-RodinWanpaku Pro UB", "FOT-RodinWanpaku Pro UB Regular", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro UB", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro UB Regular", "RodinWanpakuPro-UB", "FOT-RodinWanpaku Pro EB", "FOT-RodinWanpaku Pro EB Regular", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro EB", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro EB Regular", "RodinWanpakuPro-EB", "FOT-RodinWanpaku Pro B", "FOT-RodinWanpaku Pro B Regular", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro B", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro B Regular", "RodinWanpakuPro-B", "FOT-RodinWanpaku Pro DB", "FOT-RodinWanpaku Pro DB Regular", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro DB", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro DB Regular", "RodinWanpakuPro-DB", "FOT-RodinWanpaku Pro M", "FOT-RodinWanpaku Pro M Regular", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro M", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro M Regular", "RodinWanpakuPro-M", "FOT-RodinWanpaku Pro L", "FOT-RodinWanpaku Pro L Regular", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro L", "FOT-\u30ed\u30c0\u30f3\u308f\u3093\u3071\u304f Pro L Regular", "RodinWanpakuPro-L", "FOT-RodinRose Pro EB", "FOT-RodinRose Pro EB Regular", "FOT-\u30ed\u30c0\u30f3\u30ed\u30fc\u30ba Pro EB", "FOT-\u30ed\u30c0\u30f3\u30ed\u30fc\u30ba Pro EB Regular", "RodinRosePro-EB", "FOT-RodinRose Pro B", "FOT-RodinRose Pro B Regular", "FOT-\u30ed\u30c0\u30f3\u30ed\u30fc\u30ba Pro B", "FOT-\u30ed\u30c0\u30f3\u30ed\u30fc\u30ba Pro B Regular", "RodinRosePro-B", "FOT-RodinRose Pro DB", "FOT-RodinRose Pro DB Regular", "FOT-\u30ed\u30c0\u30f3\u30ed\u30fc\u30ba Pro DB", "FOT-\u30ed\u30c0\u30f3\u30ed\u30fc\u30ba Pro DB Regular", "RodinRosePro-DB", "FOT-RodinNTLG Pro UB", "FOT-RodinNTLG Pro UB Regular", "FOT-\u30ed\u30c0\u30f3NTLG Pro UB", "FOT-\u30ed\u30c0\u30f3NTLG Pro UB Regular", "RodinNTLGPro-UB", "FOT-RodinNTLG Pro EB", "FOT-RodinNTLG Pro EB Regular", "FOT-\u30ed\u30c0\u30f3NTLG Pro EB", "FOT-\u30ed\u30c0\u30f3NTLG Pro EB Regular", "RodinNTLGPro-EB", "FOT-RodinNTLG Pro B", "FOT-RodinNTLG Pro B Regular", "FOT-\u30ed\u30c0\u30f3NTLG Pro B", "FOT-\u30ed\u30c0\u30f3NTLG Pro B Regular", "RodinNTLGPro-B", "FOT-RodinNTLG Pro DB", "FOT-RodinNTLG Pro DB Regular", "FOT-\u30ed\u30c0\u30f3NTLG Pro DB", "FOT-\u30ed\u30c0\u30f3NTLG Pro DB  Regular", "RodinNTLGPro-DB", "FOT-RodinNTLG Pro M", "FOT-RodinNTLG Pro M Regular", "FOT-\u30ed\u30c0\u30f3NTLG Pro M", "FOT-\u30ed\u30c0\u30f3NTLG Pro M Regular", "RodinNTLGPro-M", "FOT-RodinNTLG Pro L", "FOT-RodinNTLG Pro L Regular", "FOT-\u30ed\u30c0\u30f3NTLG Pro L", "FOT-\u30ed\u30c0\u30f3NTLG Pro L Regular", "RodinNTLGPro-L", "FOT-RodinMaria Pro EB", "FOT-RodinMaria Pro EB Regular", "FOT-\u30ed\u30c0\u30f3\u30de\u30ea\u30a2 Pro EB", "FOT-\u30ed\u30c0\u30f3\u30de\u30ea\u30a2 Pro EB Regular", "RodinMariaPro-EB", "FOT-RodinMaria Pro B", "FOT-RodinMaria Pro B Regular", "FOT-\u30ed\u30c0\u30f3\u30de\u30ea\u30a2 Pro B", "FOT-\u30ed\u30c0\u30f3\u30de\u30ea\u30a2 Pro B Regular", "RodinMariaPro-B", "FOT-RodinMaria Pro DB", "FOT-RodinMaria Pro DB Regular", "FOT-\u30ed\u30c0\u30f3\u30de\u30ea\u30a2 Pro DB", "FOT-\u30ed\u30c0\u30f3\u30de\u30ea\u30a2 Pro DB Regular", "RodinMariaPro-DB", "FOT-RodinHimawari Pro UB", "FOT-RodinHimawari Pro UB Regular", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro UB", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro UB Regular", "RodinHimawariPro-UB", "FOT-RodinHimawari Pro EB", "FOT-RodinHimawari Pro EB Regular", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro EB", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro EB Regular", "RodinHimawariPro-EB", "FOT-RodinHimawari Pro B", "FOT-RodinHimawari Pro B Regular", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro B", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro B Regular", "RodinHimawariPro-B", "FOT-RodinHimawari Pro DB", "FOT-RodinHimawari Pro DB Regular", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro DB", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro DB Regular", "RodinHimawariPro-DB", "FOT-RodinHimawari Pro M", "FOT-RodinHimawari Pro M Regular", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro M", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro M Regular", "RodinHimawariPro-M", "FOT-RodinHimawari Pro L", "FOT-RodinHimawari Pro L Regular", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro L", "FOT-\u30ed\u30c0\u30f3\u3072\u307e\u308f\u308a Pro L Regular", "RodinHimawariPro-L", "FOT-RodinHappy Pro UB", "FOT-RodinHappy Pro UB Regular", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro UB", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro UB Regular", "RodinHappyPro-UB", "FOT-RodinHappy Pro EB", "FOT-RodinHappy Pro EB Regular", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro EB", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro EB Regular", "RodinHappyPro-EB", "FOT-RodinHappy Pro B", "FOT-RodinHappy Pro B Regular", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro B", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro B Regular", "RodinHappyPro-B", "FOT-RodinHappy Pro DB", "FOT-RodinHappy Pro DB Regular", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro DB", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro DB Regular", "RodinHappyPro-DB", "FOT-RodinHappy Pro M", "FOT-RodinHappy Pro M Regular", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro M", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro M Regular", "RodinHappyPro-M", "FOT-RodinHappy Pro L", "FOT-RodinHappy Pro L Regular", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro L", "FOT-\u30ed\u30c0\u30f3\u30cf\u30c3\u30d4\u30fc Pro L Regular", "RodinHappyPro-L", "FOT-RodinCattleya Pro UB", "FOT-RodinCattleya Pro UB Regular", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro UB", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro UB Regular", "RodinCattleyaPro-UB", "FOT-RodinCattleya Pro EB", "FOT-RodinCattleya Pro EB Regular", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro EB", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro EB Regular", "RodinCattleyaPro-EB", "FOT-RodinCattleya Pro B", "FOT-RodinCattleya Pro B Regular", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro B", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro B Regular", "RodinCattleyaPro-B", "FOT-RodinCattleya Pro DB", "FOT-RodinCattleya Pro DB Regular", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro DB", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro DB Regular", "RodinCattleyaPro-DB", "FOT-RodinCattleya Pro M", "FOT-RodinCattleya Pro M Regular", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro M", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro M Regular", "RodinCattleyaPro-M", "FOT-RodinCattleya Pro L", "FOT-RodinCattleya Pro L Regular", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro L", "FOT-\u30ed\u30c0\u30f3\u30ab\u30c8\u30ec\u30a2 Pro L Regular", "RodinCattleyaPro-L", "FOT-RodinCamille Pro EB", "FOT-RodinCamille Pro EB Regular", "FOT-\u30ed\u30c0\u30f3\u30ab\u30df\u30fc\u30e6 Pro EB", "FOT-\u30ed\u30c0\u30f3\u30ab\u30df\u30fc\u30e6 Pro EB Regular", "RodinCamillePro-EB", "FOT-RodinCamille Pro B", "FOT-RodinCamille Pro B Regular", "FOT-\u30ed\u30c0\u30f3\u30ab\u30df\u30fc\u30e6 Pro B", "FOT-\u30ed\u30c0\u30f3\u30ab\u30df\u30fc\u30e6 Pro B Regular", "RodinCamillePro-B", "FOT-RodinCamille Pro DB", "FOT-RodinCamille Pro DB Regular", "FOT-\u30ed\u30c0\u30f3\u30ab\u30df\u30fc\u30e6 Pro DB", "FOT-\u30ed\u30c0\u30f3\u30ab\u30df\u30fc\u30e6 Pro DB Regular", "RodinCamillePro-DB", "FOT-RodinBokutoh Pro UB", "FOT-RodinBokutoh Pro UB Regular", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro UB", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro UB Regular", "RodinBokutohPro-UB", "FOT-RodinBokutoh Pro EB", "FOT-RodinBokutoh Pro EB Regular", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro EB", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro EB Regular", "RodinBokutohPro-EB", "FOT-RodinBokutoh Pro B", "FOT-RodinBokutoh Pro B Regular", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro B", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro B Regular", "RodinBokutohPro-B", "FOT-RodinBokutoh Pro DB", "FOT-RodinBokutoh Pro DB Regular", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro DB", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro DB Regular", "RodinBokutohPro-DB", "FOT-RodinBokutoh Pro M", "FOT-RodinBokutoh Pro M Regular", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro M", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro M Regular", "RodinBokutohPro-M", "FOT-RodinBokutoh Pro L", "FOT-RodinBokutoh Pro L Regular", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro L", "FOT-\u30ed\u30c0\u30f3\u58a8\u6771 Pro L Regular", "RodinBokutohPro-L", "FOT-MatisseWakaba Pro EB", "FOT-MatisseWakaba Pro EB Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u308f\u304b\u3070\u3084\u307e\u3068Pro EB", "FOT-\u30de\u30c6\u30a3\u30b9\u308f\u304b\u3070\u3084\u307e\u3068Pro EB Regular", "MatisseWakabaPro-EB", "FOT-MatisseWakaba Pro DB", "FOT-MatisseWakaba Pro DB Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u308f\u304b\u3070\u3084\u307e\u3068Pro DB", "FOT-\u30de\u30c6\u30a3\u30b9\u308f\u304b\u3070\u3084\u307e\u3068Pro DB Regular", "MatisseWakabaPro-DB", "FOT-MatisseWakaba Pro M", "FOT-MatisseWakaba Pro M Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u308f\u304b\u3070\u3084\u307e\u3068Pro M", "FOT-\u30de\u30c6\u30a3\u30b9\u308f\u304b\u3070\u3084\u307e\u3068Pro M Regular", "MatisseWakabaPro-M", "FOT-MatisseV Pro UB", "FOT-MatisseV Pro UB Regular", "FOT-\u30de\u30c6\u30a3\u30b9V Pro UB", "FOT-\u30de\u30c6\u30a3\u30b9V Pro UB Regular", "MatisseVPro-UB", "FOT-MatisseV Pro EB", "FOT-MatisseV Pro EB Regular", "FOT-\u30de\u30c6\u30a3\u30b9V Pro EB", "FOT-\u30de\u30c6\u30a3\u30b9V Pro EB Regular", "MatisseVPro-EB", "FOT-MatisseV Pro B", "FOT-MatisseV Pro B Regular", "FOT-\u30de\u30c6\u30a3\u30b9V Pro B", "FOT-\u30de\u30c6\u30a3\u30b9V Pro B Regular", "MatisseVPro-B", "FOT-MatisseV Pro DB", "FOT-MatisseV Pro DB Regular", "FOT-\u30de\u30c6\u30a3\u30b9V Pro DB", "FOT-\u30de\u30c6\u30a3\u30b9V Pro DB Regular", "MatisseVPro-DB", "FOT-MatisseV Pro M", "FOT-MatisseV Pro M Regular", "FOT-\u30de\u30c6\u30a3\u30b9V Pro M", "FOT-\u30de\u30c6\u30a3\u30b9V Pro M Regular", "MatisseVPro-M", "FOT-MatisseV Pro L", "FOT-MatisseV Pro L Regular", "FOT-\u30de\u30c6\u30a3\u30b9V Pro L", "FOT-\u30de\u30c6\u30a3\u30b9V Pro L Regular", "MatisseVPro-L", "FOT-MatisseMinori Pro EB", "FOT-MatisseMinori Pro EB Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u307f\u306e\u308a\u3084\u307e\u3068Pro EB", "FOT-\u30de\u30c6\u30a3\u30b9\u307f\u306e\u308a\u3084\u307e\u3068Pro EB Regular", "MatisseMinoriPro-EB", "FOT-MatisseMinori Pro B", "FOT-MatisseMinori Pro B Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u307f\u306e\u308a\u3084\u307e\u3068Pro B", "FOT-\u30de\u30c6\u30a3\u30b9\u307f\u306e\u308a\u3084\u307e\u3068Pro B Regular", "MatisseMinoriPro-B", "FOT-MatisseMinori Pro DB", "FOT-MatisseMinori Pro DB Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u307f\u306e\u308a\u3084\u307e\u3068Pro DB", "FOT-\u30de\u30c6\u30a3\u30b9\u307f\u306e\u308a\u3084\u307e\u3068Pro DB Regular", "MatisseMinoriPro-DB", "FOT-MatisseMinori Pro M", "FOT-MatisseMinori Pro M Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u307f\u306e\u308a\u3084\u307e\u3068Pro M", "FOT-\u30de\u30c6\u30a3\u30b9\u307f\u306e\u308a\u3084\u307e\u3068Pro M Regular", "MatisseMinoriPro-M", "FOT-MatisseHatsuhi Pro EB", "FOT-MatisseHatsuhi Pro EB Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u306f\u3064\u3072\u3084\u307e\u3068Pro EB", "FOT-\u30de\u30c6\u30a3\u30b9\u306f\u3064\u3072\u3084\u307e\u3068Pro EB Regular", "MatisseHatsuhiPro-EB", "FOT-MatisseHatsuhi Pro B", "FOT-MatisseHatsuhi Pro B Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u306f\u3064\u3072\u3084\u307e\u3068Pro B", "FOT-\u30de\u30c6\u30a3\u30b9\u306f\u3064\u3072\u3084\u307e\u3068Pro B Regular", "MatisseHatsuhiPro-B", "FOT-MatisseHatsuhi Pro DB", "FOT-MatisseHatsuhi Pro DB Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u306f\u3064\u3072\u3084\u307e\u3068Pro DB", "FOT-\u30de\u30c6\u30a3\u30b9\u306f\u3064\u3072\u3084\u307e\u3068Pro DB Regular", "MatisseHatsuhiPro-DB", "FOT-MatisseHatsuhi Pro M", "FOT-MatisseHatsuhi Pro M Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u306f\u3064\u3072\u3084\u307e\u3068Pro M", "FOT-\u30de\u30c6\u30a3\u30b9\u306f\u3064\u3072\u3084\u307e\u3068Pro M Regular", "MatisseHatsuhiPro-M", "FOT-MatisseEleganto Pro UB", "FOT-MatisseEleganto Pro UB Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u3048\u308c\u304c\u3093\u3068 Pro UB", "FOT-\u30de\u30c6\u30a3\u30b9\u3048\u308c\u304c\u3093\u3068 Pro UB Regular", "MatisseElegantoPro-UB", "FOT-MatisseEleganto Pro EB", "FOT-MatisseEleganto Pro EB Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u3048\u308c\u304c\u3093\u3068 Pro EB", "FOT-\u30de\u30c6\u30a3\u30b9\u3048\u308c\u304c\u3093\u3068 Pro EB Regular", "MatisseElegantoPro-EB", "FOT-MatisseEleganto Pro B", "FOT-MatisseEleganto Pro B Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u3048\u308c\u304c\u3093\u3068 Pro B", "FOT-\u30de\u30c6\u30a3\u30b9\u3048\u308c\u304c\u3093\u3068 Pro B Regular", "MatisseElegantoPro-B", "FOT-MatisseEleganto Pro DB", "FOT-MatisseEleganto Pro DB Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u3048\u308c\u304c\u3093\u3068 Pro DB", "FOT-\u30de\u30c6\u30a3\u30b9\u3048\u308c\u304c\u3093\u3068 Pro DB Regular", "MatisseElegantoPro-DB", "FOT-MatisseEleganto Pro M", "FOT-MatisseEleganto Pro M Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u3048\u308c\u304c\u3093\u3068 Pro M", "FOT-\u30de\u30c6\u30a3\u30b9\u3048\u308c\u304c\u3093\u3068 Pro M Regular", "MatisseElegantoPro-M", "CezanneBokutohPro-EB", "FOT-CezanneBokutoh Pro EB", "FOT-CezanneBokutoh Pro EB Regular", "FOT-\u30bb\u30b6\u30f3\u30cc\u58a8\u6771 Pro EB", "FOT-\u30bb\u30b6\u30f3\u30cc\u58a8\u6771 Pro EB Regular", "CezanneBokutohPro-B", "FOT-CezanneBokutoh Pro B", "FOT-CezanneBokutoh Pro B Regular", "FOT-\u30bb\u30b6\u30f3\u30cc\u58a8\u6771 Pro B", "FOT-\u30bb\u30b6\u30f3\u30cc\u58a8\u6771 Pro B Regular", "CezanneBokutohPro-DB", "FOT-CezanneBokutoh Pro DB", "FOT-CezanneBokutoh Pro DB Regular", "FOT-\u30bb\u30b6\u30f3\u30cc\u58a8\u6771 Pro DB", "FOT-\u30bb\u30b6\u30f3\u30cc\u58a8\u6771 Pro DB Regular", "CezanneBokutohPro-M", "FOT-CezanneBokutoh Pro M", "FOT-CezanneBokutoh Pro M Regular", "FOT-\u30bb\u30b6\u30f3\u30cc\u58a8\u6771 Pro M", "FOT-\u30bb\u30b6\u30f3\u30cc\u58a8\u6771 Pro M Regular", "FOT-Utrillo Pro DB", "FOT-Utrillo Pro DB Regular", "FOT-\u30e6\u30c8\u30ea\u30ed Pro DB", "FOT-\u30e6\u30c8\u30ea\u30ed Pro DB Regular", "UtrilloPro-DB", "FOT-Utrillo Pro M", "FOT-Utrillo Pro M Regular", "FOT-\u30e6\u30c8\u30ea\u30ed Pro M", "FOT-\u30e6\u30c8\u30ea\u30ed Pro M Regular", "UtrilloPro-M", "FOT-Seurat ProN  UB", "FOT-Seurat ProN  UB Regular", "FOT-\u30b9\u30fc\u30e9 ProN UB", "FOT-\u30b9\u30fc\u30e9 ProN UB Regular", "SeuratProN-UB", "FOT-Seurat ProN  B", "FOT-Seurat ProN  B Regular", "FOT-\u30b9\u30fc\u30e9 ProN B", "FOT-\u30b9\u30fc\u30e9 ProN B Regular", "SeuratProN-B", "FOT-Seurat ProN  DB", "FOT-Seurat ProN  DB Regular", "FOT-\u30b9\u30fc\u30e9 ProN DB", "FOT-\u30b9\u30fc\u30e9 ProN DB Regular", "SeuratProN-DB", "FOT-Seurat ProN  M", "FOT-Seurat ProN  M Regular", "FOT-\u30b9\u30fc\u30e9 ProN M", "FOT-\u30b9\u30fc\u30e9 ProN M Regular", "SeuratProN-M", "FOT-Seurat ProN  L", "FOT-Seurat ProN  L Regular", "FOT-\u30b9\u30fc\u30e9 ProN L", "FOT-\u30b9\u30fc\u30e9 ProN L Regular", "SeuratProN-L", "FOT-Seurat Pro UB", "FOT-Seurat Pro UB Regular", "FOT-\u30b9\u30fc\u30e9 Pro UB", "FOT-\u30b9\u30fc\u30e9 Pro UB Regular", "SeuratPro-UB", "FOT-Seurat Pro EB", "FOT-Seurat Pro EB Regular", "FOT-\u30b9\u30fc\u30e9 Pro EB", "FOT-\u30b9\u30fc\u30e9 Pro EB Regular", "SeuratPro-EB", "FOT-Seurat Pro B", "FOT-Seurat Pro B Regular", "FOT-\u30b9\u30fc\u30e9 Pro B", "FOT-\u30b9\u30fc\u30e9 Pro B Regular", "SeuratPro-B", "FOT-Seurat Pro DB", "FOT-Seurat Pro DB Regular", "FOT-\u30b9\u30fc\u30e9 Pro DB", "FOT-\u30b9\u30fc\u30e9 Pro DB Regular", "SeuratPro-DB", "FOT-Seurat Pro M", "FOT-Seurat Pro M Regular", "FOT-\u30b9\u30fc\u30e9 Pro M", "FOT-\u30b9\u30fc\u30e9 Pro M Regular", "SeuratPro-M", "FOT-Seurat Pro L", "FOT-Seurat Pro L Regular", "FOT-\u30b9\u30fc\u30e9 Pro L", "FOT-\u30b9\u30fc\u30e9 Pro L Regular", "SeuratPro-L", "FOT-Rodin ProN  UB", "FOT-Rodin ProN  UB Regular", "FOT-\u30ed\u30c0\u30f3 ProN UB", "FOT-\u30ed\u30c0\u30f3 ProN UB Regular", "RodinProN-UB", "FOT-Rodin ProN  EB", "FOT-Rodin ProN  EB Regular", "FOT-\u30ed\u30c0\u30f3 ProN EB", "FOT-\u30ed\u30c0\u30f3 ProN EB Regular", "RodinProN-EB", "FOT-Rodin ProN  B", "FOT-Rodin ProN  B Regular", "FOT-\u30ed\u30c0\u30f3 ProN B", "FOT-\u30ed\u30c0\u30f3 ProN B Regular", "RodinProN-B", "FOT-Rodin ProN  DB", "FOT-Rodin ProN  DB Regular", "FOT-\u30ed\u30c0\u30f3 ProN DB", "FOT-\u30ed\u30c0\u30f3 ProN DB Regular", "RodinProN-DB", "FOT-Rodin ProN  M", "FOT-Rodin ProN  M Regular", "FOT-\u30ed\u30c0\u30f3 ProN M", "FOT-\u30ed\u30c0\u30f3 ProN M Regular", "RodinProN-M", "FOT-Rodin ProN  L", "FOT-Rodin ProN  L Regular", "FOT-\u30ed\u30c0\u30f3 ProN L", "FOT-\u30ed\u30c0\u30f3 ProN L Regular", "RodinProN-L", "FOT-Rodin Pro UB", "FOT-Rodin Pro UB Regular", "FOT-\u30ed\u30c0\u30f3 Pro UB", "FOT-\u30ed\u30c0\u30f3 Pro UB Regular", "RodinPro-UB", "FOT-Rodin Pro EB", "FOT-Rodin Pro EB Regular", "FOT-\u30ed\u30c0\u30f3 Pro EB", "FOT-\u30ed\u30c0\u30f3 Pro EB Regular", "RodinPro-EB", "FOT-Rodin Pro B", "FOT-Rodin Pro B Regular", "FOT-\u30ed\u30c0\u30f3 Pro B", "FOT-\u30ed\u30c0\u30f3 Pro B Regular", "RodinPro-B", "FOT-Rodin Pro DB", "FOT-Rodin Pro DB Regular", "FOT-\u30ed\u30c0\u30f3 Pro DB", "FOT-\u30ed\u30c0\u30f3 Pro DB Regular", "RodinPro-DB", "FOT-Rodin Pro M", "FOT-Rodin Pro M Regular", "FOT-\u30ed\u30c0\u30f3 Pro M", "FOT-\u30ed\u30c0\u30f3 Pro M Regular", "RodinPro-M", "FOT-Rodin Pro L", "FOT-Rodin Pro L Regular", "FOT-\u30ed\u30c0\u30f3 Pro L", "FOT-\u30ed\u30c0\u30f3 Pro L Regular", "RodinPro-L", "FOT-NewRodin ProN  UB", "FOT-NewRodin ProN  UB Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN UB", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN UB Regular", "NewRodinProN-UB", "FOT-NewRodin ProN  EB", "FOT-NewRodin ProN  EB Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN EB", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN EB Regular", "NewRodinProN-EB", "FOT-NewRodin ProN  B", "FOT-NewRodin ProN  B Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN B", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN B Regular", "NewRodinProN-B", "FOT-NewRodin ProN  DB", "FOT-NewRodin ProN  DB Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN DB", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN DB Regular", "NewRodinProN-DB", "FOT-NewRodin ProN  M", "FOT-NewRodin ProN  M Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN M", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN M Regular", "NewRodinProN-M", "FOT-NewRodin ProN  L", "FOT-NewRodin ProN  L Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN L", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 ProN L Regular", "NewRodinProN-L", "FOT-NewRodin Pro UB", "FOT-NewRodin Pro UB Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro UB", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro UB Regular", "NewRodinPro-UB", "FOT-NewRodin Pro EB", "FOT-NewRodin Pro EB Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro EB", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro EB Regular", "NewRodinPro-EB", "FOT-NewRodin Pro B", "FOT-NewRodin Pro B Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro B", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro B Regular", "NewRodinPro-B", "FOT-NewRodin Pro DB", "FOT-NewRodin Pro DB Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro DB", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro DB Regular", "NewRodinPro-DB", "FOT-NewRodin Pro M", "FOT-NewRodin Pro M Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro M", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro M Regular", "NewRodinPro-M", "FOT-NewRodin Pro L", "FOT-NewRodin Pro L Regular", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro L", "FOT-\u30cb\u30e5\u30fc\u30ed\u30c0\u30f3 Pro L Regular", "NewRodinPro-L", "FOT-NewCezanne ProN  EB", "FOT-NewCezanne ProN  EB Regular", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc ProN EB", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc ProN EB Regular", "NewCezanneProN-EB", "FOT-NewCezanne ProN  B", "FOT-NewCezanne ProN  B Regular", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc ProN B", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc ProN B Regular", "NewCezanneProN-B", "FOT-NewCezanne ProN  DB", "FOT-NewCezanne ProN  DB Regular", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc ProN DB", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc ProN DB Regular", "NewCezanneProN-DB", "FOT-NewCezanne ProN  M", "FOT-NewCezanne ProN  M Regular", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc ProN M", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc ProN M Regular", "NewCezanneProN-M", "FOT-NewCezanne Pro EB", "FOT-NewCezanne Pro EB Regular", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc Pro EB", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc Pro EB Regular", "NewCezannePro-EB", "FOT-NewCezanne Pro B", "FOT-NewCezanne Pro B Regular", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc Pro B", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc Pro B Regular", "NewCezannePro-B", "FOT-NewCezanne Pro DB", "FOT-NewCezanne Pro DB Regular", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc Pro DB", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc Pro DB Regular", "NewCezannePro-DB", "FOT-NewCezanne Pro M", "FOT-NewCezanne Pro M Regular", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc Pro M", "FOT-\u30cb\u30e5\u30fc\u30bb\u30b6\u30f3\u30cc Pro M Regular", "NewCezannePro-M", "FOT-Matisse ProN  UB", "FOT-Matisse ProN  UB Regular", "FOT-\u30de\u30c6\u30a3\u30b9 ProN UB", "FOT-\u30de\u30c6\u30a3\u30b9 ProN UB Regular", "MatisseProN-UB", "FOT-Matisse ProN  EB", "FOT-Matisse ProN  EB Regular", "FOT-\u30de\u30c6\u30a3\u30b9 ProN EB", "FOT-\u30de\u30c6\u30a3\u30b9 ProN EB Regular", "MatisseProN-EB", "FOT-Matisse ProN  B", "FOT-Matisse ProN  B Regular", "FOT-\u30de\u30c6\u30a3\u30b9 ProN B", "FOT-\u30de\u30c6\u30a3\u30b9 ProN B Regular", "MatisseProN-B", "FOT-Matisse ProN  DB", "FOT-Matisse ProN  DB Regular", "FOT-\u30de\u30c6\u30a3\u30b9 ProN DB", "FOT-\u30de\u30c6\u30a3\u30b9 ProN DB Regular", "MatisseProN-DB", "FOT-Matisse ProN  M", "FOT-Matisse ProN  M Regular", "FOT-\u30de\u30c6\u30a3\u30b9 ProN M", "FOT-\u30de\u30c6\u30a3\u30b9 ProN M Regular", "MatisseProN-M", "FOT-Matisse ProN  L", "FOT-Matisse ProN  L Regular", "FOT-\u30de\u30c6\u30a3\u30b9 ProN L", "FOT-\u30de\u30c6\u30a3\u30b9 ProN L Regular", "MatisseProN-L", "FOT-Matisse Pro UB", "FOT-Matisse Pro UB Regular", "FOT-\u30de\u30c6\u30a3\u30b9 Pro UB", "FOT-\u30de\u30c6\u30a3\u30b9 Pro UB Regular", "MatissePro-UB", "FOT-Matisse Pro EB", "FOT-Matisse Pro EB Regular", "FOT-\u30de\u30c6\u30a3\u30b9 Pro EB", "FOT-\u30de\u30c6\u30a3\u30b9 Pro EB Regular", "MatissePro-EB", "FOT-Matisse Pro DB", "FOT-Matisse Pro DB Regular", "FOT-\u30de\u30c6\u30a3\u30b9 Pro DB", "FOT-\u30de\u30c6\u30a3\u30b9 Pro DB Regular", "MatissePro-DB", "FOT-Matisse Pro B", "FOT-Matisse Pro B Regular", "FOT-\u30de\u30c6\u30a3\u30b9 Pro B", "FOT-\u30de\u30c6\u30a3\u30b9 Pro B Regular", "MatissePro-B", "FOT-Matisse Pro L", "FOT-Matisse Pro L Regular", "FOT-\u30de\u30c6\u30a3\u30b9 Pro L", "FOT-\u30de\u30c6\u30a3\u30b9 Pro L Regular", "MatissePro-L", "FOT-Matisse Pro M", "FOT-Matisse Pro M Regular", "FOT-\u30de\u30c6\u30a3\u30b9 Pro M", "FOT-\u30de\u30c6\u30a3\u30b9 Pro M Regular", "MatissePro-M", "FOT-Klee Pro DB", "FOT-Klee Pro DB Regular", "FOT-\u30af\u30ec\u30fc Pro DB", "FOT-\u30af\u30ec\u30fc Pro DB Regular", "KleePro-DB", "FOT-Klee Pro M", "FOT-Klee Pro M Regular", "FOT-\u30af\u30ec\u30fc Pro M", "FOT-\u30af\u30ec\u30fc Pro M Regular", "KleePro-M", "FOT-Greco Std B", "FOT-Greco Std B Regular", "FOT-\u30b0\u30ec\u30b3 Std B", "FOT-\u30b0\u30ec\u30b3 Std B Regular", "GrecoStd-B", "FOT-Greco Std DB", "FOT-Greco Std DB Regular", "FOT-\u30b0\u30ec\u30b3 Std DB", "FOT-\u30b0\u30ec\u30b3 Std DB Regular", "GrecoStd-DB", "FOT-Greco Std M", "FOT-Greco Std M Regular", "FOT-\u30b0\u30ec\u30b3 Std M", "FOT-\u30b0\u30ec\u30b3 Std M Regular", "GrecoStd-M", "FOT-GMaruGo Pro B", "FOT-GMaruGo Pro B Regular", "FOT-\u5b66\u53c2\u4e38\u30b4 Pro B", "FOT-\u5b66\u53c2\u4e38\u30b4 Pro B Regular", "GMaruGoPro-B", "FOT-GMaruGo Pro DB", "FOT-GMaruGo Pro DB Regular", "FOT-\u5b66\u53c2\u4e38\u30b4 Pro DB", "FOT-\u5b66\u53c2\u4e38\u30b4 Pro DB Regular", "GMaruGoPro-DB", "FOT-GMaruGo Pro M", "FOT-GMaruGo Pro M Regular", "FOT-\u5b66\u53c2\u4e38\u30b4 Pro M", "FOT-\u5b66\u53c2\u4e38\u30b4 Pro M Regular", "GMaruGoPro-M", "CezanneProN-EB", "FOT-Cezanne ProN  EB", "FOT-Cezanne ProN  EB Regular", "FOT-\u30bb\u30b6\u30f3\u30cc ProN EB", "FOT-\u30bb\u30b6\u30f3\u30cc ProN EB Regular", "CezanneProN-B", "FOT-Cezanne ProN  B", "FOT-Cezanne ProN  B Regular", "FOT-\u30bb\u30b6\u30f3\u30cc ProN B", "FOT-\u30bb\u30b6\u30f3\u30cc ProN B Regular", "CezanneProN-DB", "FOT-Cezanne ProN  DB", "FOT-Cezanne ProN  DB Regular", "FOT-\u30bb\u30b6\u30f3\u30cc ProN DB", "FOT-\u30bb\u30b6\u30f3\u30cc ProN DB Regular", "CezanneProN-M", "FOT-Cezanne ProN  M", "FOT-Cezanne ProN  M Regular", "FOT-\u30bb\u30b6\u30f3\u30cc ProN M", "FOT-\u30bb\u30b6\u30f3\u30cc ProN M Regular", "CezannePro-EB", "FOT-Cezanne Pro EB", "FOT-Cezanne Pro EB Regular", "FOT-\u30bb\u30b6\u30f3\u30cc Pro EB", "FOT-\u30bb\u30b6\u30f3\u30cc Pro EB Regular", "CezannePro-B", "FOT-Cezanne Pro B", "FOT-Cezanne Pro B Regular", "FOT-\u30bb\u30b6\u30f3\u30cc Pro B", "FOT-\u30bb\u30b6\u30f3\u30cc Pro B Regular", "CezannePro-DB", "FOT-Cezanne Pro DB", "FOT-Cezanne Pro DB Regular", "FOT-\u30bb\u30b6\u30f3\u30cc Pro DB", "FOT-\u30bb\u30b6\u30f3\u30cc Pro DB Regular", "CezannePro-M", "FOT-Cezanne Pro M", "FOT-Cezanne Pro M Regular", "FOT-\u30bb\u30b6\u30f3\u30cc Pro M", "FOT-\u30bb\u30b6\u30f3\u30cc Pro M Regular", "FOT-TsukuGo Pro H", "FOT-TsukuGo Pro H Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro H", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro H Regular", "TsukuGoPro-H", "FOT-TsukuGo Pro E", "FOT-TsukuGo Pro E Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro E", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro E Regular", "TsukuGoPro-E", "FOT-TsukuGo Pro B", "FOT-TsukuGo Pro B Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro B", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro B Regular", "TsukuGoPro-B", "FOT-TelopMin ProN  H", "FOT-TelopMin ProN  H Regular", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d ProN H", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d ProN H Regular", "TelopMinProN-HV", "FOT-TelopMin ProN  E", "FOT-TelopMin ProN  E Regular", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d ProN E", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d ProN E Regular", "TelopMinProN-E", "FOT-TelopMin ProN  D", "FOT-TelopMin ProN  D Regular", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d ProN D", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d ProN D Regular", "TelopMinProN-D", "FOT-TelopMin ProN  B", "FOT-TelopMin ProN  B Regular", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d ProN B", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d ProN B Regular", "TelopMinProN-B", "FOT-TelopMin Pro H", "FOT-TelopMin Pro H Regular", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d Pro H", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d Pro H Regular", "TelopMinPro-HV", "FOT-TelopMin Pro E", "FOT-TelopMin Pro E Regular", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d Pro E", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d Pro E Regular", "TelopMinPro-E", "FOT-TelopMin Pro D", "FOT-TelopMin Pro D Regular", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d Pro D", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d Pro D Regular", "TelopMinPro-D", "FOT-TelopMin Pro B", "FOT-TelopMin Pro B Regular", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d Pro B", "FOT-\u30c6\u30ed\u30c3\u30d7\u660e\u671d Pro B Regular", "TelopMinPro-B", "DotGothic16Std-M", "FOT-DotGothic16 Std M", "FOT-DotGothic16 Std M Regular", "FOT-\u30c9\u30c3\u30c8\u30b4\u30b7\u30c3\u30af 16 Std M", "FOT-\u30c9\u30c3\u30c8\u30b4\u30b7\u30c3\u30af 16 Std M Regular", "DotGothic12Std-M", "FOT-DotGothic12 Std M", "FOT-DotGothic12 Std M Regular", "FOT-\u30c9\u30c3\u30c8\u30b4\u30b7\u30c3\u30af 12 Std M", "FOT-\u30c9\u30c3\u30c8\u30b4\u30b7\u30c3\u30af 12 Std M Regular", "DotMincho16Std-M", "FOT-DotMincho16 Std M", "FOT-DotMincho16 Std M Regular", "FOT-\u30c9\u30c3\u30c8\u660e\u671d 16 Std M", "FOT-\u30c9\u30c3\u30c8\u660e\u671d 16 Std M Regular", "DotMincho12Std-M", "FOT-DotMincho12 Std M", "FOT-DotMincho12 Std M Regular", "FOT-\u30c9\u30c3\u30c8\u660e\u671d 12 Std M", "FOT-\u30c9\u30c3\u30c8\u660e\u671d 12 Std M Regular", "FOT-TsukuMin Pr5N HV", "FOT-TsukuMin Pr5N HV Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N H", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N H Regular", "TsukuMinPr5N-HV", "FOT-TsukuMin Pr5N E", "FOT-TsukuMin Pr5N E Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N E", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N E Regular", "TsukuMinPr5N-E", "FOT-TsukuMin Pr5N B", "FOT-TsukuMin Pr5N B Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N B", "FOT-\u7b51\u7d2b\u660e\u671d Pr5N B Regular", "TsukuMinPr5N-B", "FOT-TsukuGo Pr5N D", "FOT-TsukuGo Pr5N D Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5N D", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5N D Regular", "TsukuGoPr5N-D", "FOT-TsukuGo Pr5N M", "FOT-TsukuGo Pr5N M Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5N M", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5N M Regular", "TsukuGoPr5N-M", "FOT-TsukuGo Pr5N R", "FOT-TsukuGo Pr5N R Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5N R", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5N R Regular", "TsukuGoPr5N-R", "FOT-TsukuGo Pr5N L", "FOT-TsukuGo Pr5N L Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5N L", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5N L Regular", "TsukuGoPr5N-L", "FOT-TsukuMin Pr5 HV", "FOT-TsukuMin Pr5 HV Regular", "FOT-TsukuMin Pro H", "FOT-TsukuMin Pro H Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 H", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 H Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro H", "FOT-\u7b51\u7d2b\u660e\u671d Pro H Regular", "TsukuMinPr5-HV", "TsukuMinPro-HV", "FOT-TsukuMin Pr5 E", "FOT-TsukuMin Pr5 E Regular", "FOT-TsukuMin Pro E", "FOT-TsukuMin Pro E Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 E", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 E Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro E", "FOT-\u7b51\u7d2b\u660e\u671d Pro E Regular", "TsukuMinPr5-E", "TsukuMinPro-E", "FOT-TsukuMin Pr5 B", "FOT-TsukuMin Pr5 B Regular", "FOT-TsukuMin Pro B", "FOT-TsukuMin Pro B Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 B", "FOT-\u7b51\u7d2b\u660e\u671d Pr5 B Regular", "FOT-\u7b51\u7d2b\u660e\u671d Pro B", "FOT-\u7b51\u7d2b\u660e\u671d Pro B Regular", "TsukuMinPr5-B", "TsukuMinPro-B", "FOT-TsukuGo Pr5 D", "FOT-TsukuGo Pr5 D Regular", "FOT-TsukuGo Pro D", "FOT-TsukuGo Pro D Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5 D", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5 D Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro D", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro D Regular", "TsukuGoPr5-D", "TsukuGoPro-D", "vultest", "FOT-TsukuGo Pr5 M", "FOT-TsukuGo Pr5 M Regular", "FOT-TsukuGo Pro M", "FOT-TsukuGo Pro M Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5 M", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5 M Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro M", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro M Regular", "TsukuGoPr5-M", "TsukuGoPro-M", "FOT-TsukuGo Pr5 R", "FOT-TsukuGo Pr5 R Regular", "FOT-TsukuGo Pro R", "FOT-TsukuGo Pro R Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5 R", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5 R Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro R", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro R Regular", "TsukuGoPr5-R", "TsukuGoPro-R", "FOT-TsukuGo Pr5 L", "FOT-TsukuGo Pr5 L Regular", "FOT-TsukuGo Pro L", "FOT-TsukuGo Pro L Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5 L", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pr5 L Regular", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro L", "FOT-\u7b51\u7d2b\u30b4\u30b7\u30c3\u30af Pro L Regular", "TsukuGoPr5-L", "TsukuGoPro-L", "NT\u30e2\u30c8\u30e4\u30d0\u30fc\u30c1 Std W3", "NtMotoya Birch Std W3", "NtMotoyaBirchStd-W3", "NT\u30e2\u30c8\u30e4\u4e38\u30a2\u30dd\u30ed Std W4", "NtMotoya MaAporo Std W4", "NtMotoyaMaAporoStd-W4", "NT\u30e2\u30c8\u30e4st\u30a2\u30dd\u30ed Std W4", "NtMotoya StAporo Std W4", "NtMotoyaStAporoStd-W4", "FOTK-YDGothic 120", "FOTK-YDGothic 120 Regular", "FOTK-YDGothic120", "FOTK-YDGothic\u3000120", "FOTK-YDGothic\u3000120\u3000Regular", "FOTKYDGothic120", "FTTK-YDGothic 120", "FTTK-YDGothic120", "FTTK-YDGothic\u3000120", "FOTK-YDGothic 130", "FOTK-YDGothic 130 Regular", "FOTK-YDGothic\u3000130", "FOTK-YDGothic\u3000130\u3000Regular", "FOTKYDGothic130", "FTTK-YDGothic 130", "FTTK-YDGothic130", "FTTK-YDGothic\u3000130", "FOTK-YDGothic 140", "FOTK-YDGothic 140 Regular", "FOTK-YDGothic\u3000140", "FOTK-YDGothic\u3000140\u3000Regular", "FOTKYDGothic140", "FTTK-YDGothic 140", "FTTK-YDGothic140", "FTTK-YDGothic\u3000140", "A-OTF UD Shin Maru Go Pro B", "A-OTF UD\u65b0\u4e38\u30b4 Pro B", "UD Shin Maru Go Bold", "UDShinMGo-Bold", "UD\u3000Shin\u3000Maru\u3000Go\u3000Bold", "UD\u65b0\u4e38\u30b4 B", "UD\u65b0\u4e38\u30b4\u3000B", "A-OTF UD Shin Maru Go Pro M", "A-OTF UD\u65b0\u4e38\u30b4 Pro M", "UD Shin Maru Go Medium", "UDShinMGo-Medium", "UD\u3000Shin\u3000Maru\u3000Go\u3000Medium", "UD\u65b0\u4e38\u30b4 M", "UD\u65b0\u4e38\u30b4\u3000M", "A-OTF UD Shin Maru Go Pro R", "A-OTF UD\u65b0\u4e38\u30b4 Pro R", "UD Shin Maru Go Regular", "UDShinMGo-Regular", "UD\u3000Shin\u3000Maru\u3000Go\u3000Regular", "UD\u65b0\u4e38\u30b4 R", "UD\u65b0\u4e38\u30b4\u3000R", "A-OTF UD Shin Go NT Pro B", "A-OTF UD\u65b0\u30b4NT Pro B", "UD Shin Go NT Bold", "UDShinGoNT-Bold", "UD\u3000Shin\u3000Go\u3000NT\u3000Bold", "UD\u65b0\u30b4NT B", "UD\u65b0\u30b4NT\u3000B", "A-OTF UD Shin Go NT Pro M", "A-OTF UD\u65b0\u30b4NT Pro M", "UD Shin Go NT Medium", "UDShinGoNT-Medium", "UD\u3000Shin\u3000Go\u3000NT\u3000Medium", "UD\u65b0\u30b4NT M", "UD\u65b0\u30b4NT\u3000M", "A-OTF UD Shin Go NT Pro R", "A-OTF UD\u65b0\u30b4NT Pro R", "UD Shin Go NT Regular", "UDShinGoNT-Regular", "UD\u3000Shin\u3000Go\u3000NT\u3000Regular", "UD\u65b0\u30b4NT R", "UD\u65b0\u30b4NT\u3000R", "A-OTF UD Shin Go Pro B", "A-OTF UD\u65b0\u30b4 Pro B", "UD Shin Go Bold", "UDShinGo-Bold", "UD\u3000Shin\u3000Go\u3000Bold", "UD\u65b0\u30b4 B", "UD\u65b0\u30b4\u3000B", "A-OTF UD Shin Go Pro M", "A-OTF UD\u65b0\u30b4 Pro M", "UD Shin Go Medium", "UDShinGo-Medium", "UD\u3000Shin\u3000Go\u3000Medium", "UD\u65b0\u30b4 M", "UD\u65b0\u30b4\u3000M", "A-OTF UD Shin Go Pro R", "A-OTF UD\u65b0\u30b4 Pro R", "UD Shin Go Regular", "UDShinGo-Regular", "UD\u3000Shin\u3000Go\u3000Regular", "UD\u65b0\u30b4 R", "UD\u65b0\u30b4\u3000R", "A-OTF UD Reimin Pro B", "A-OTF UD\u9ece\u30df\u30f3 Pro B", "UD Reimin Bold", "UDReimin-Bold", "UD\u3000Reimin\u3000Bold", "UD\u9ece\u30df\u30f3 B", "UD\u9ece\u30df\u30f3\u3000B", "A-OTF UD Reimin Pro M", "A-OTF UD\u9ece\u30df\u30f3 Pro M", "UD Reimin Medium", "UDReimin-Medium", "UD\u3000Reimin\u3000Medium", "UD\u9ece\u30df\u30f3 M", "UD\u9ece\u30df\u30f3\u3000M", "A-OTF UD Reimin Pro R", "A-OTF UD\u9ece\u30df\u30f3 Pro R", "UD Reimin Regular", "UDReimin-Regular", "UD\u3000Reimin\u3000Regular", "UD\u9ece\u30df\u30f3 R", "UD\u9ece\u30df\u30f3\u3000R", "A-OTF Kakumin Pro B", "A-OTF \u30ab\u30af\u30df\u30f3 Pro B", "Kakumin Bold", "Kakumin-Bold", "Kakumin\u3000Bold", "\u30ab\u30af\u30df\u30f3 B", "\u30ab\u30af\u30df\u30f3\u3000B", "A-OTF Kakumin Pro M", "A-OTF \u30ab\u30af\u30df\u30f3 Pro M", "Kakumin Medium", "Kakumin-Medium", "Kakumin\u3000Medium", "\u30ab\u30af\u30df\u30f3 M", "\u30ab\u30af\u30df\u30f3\u3000M", "A-OTF Kakumin Pro R", "A-OTF \u30ab\u30af\u30df\u30f3 Pro R", "Kakumin Regular", "Kakumin-Regular", "Kakumin\u3000Regular", "\u30ab\u30af\u30df\u30f3 R", "\u30ab\u30af\u30df\u30f3\u3000R", "A-OTF Maru Folk Pro B", "A-OTF \u4e38\u30d5\u30a9\u30fc\u30af Pro B", "Maru Folk Bold", "MaruFo-Bold", "Maru\u3000Folk\u3000Bold", "\u4e38\u30d5\u30a9\u30fc\u30af B", "\u4e38\u30d5\u30a9\u30fc\u30af\u3000B", "A-OTF Maru Folk Pro M", "A-OTF \u4e38\u30d5\u30a9\u30fc\u30af Pro M", "Maru Folk Medium", "MaruFo-Medium", "Maru\u3000Folk\u3000Medium", "\u4e38\u30d5\u30a9\u30fc\u30af M", "\u4e38\u30d5\u30a9\u30fc\u30af\u3000M", "A-OTF Maru Folk Pro R", "A-OTF \u4e38\u30d5\u30a9\u30fc\u30af Pro R", "Maru Folk Regular", "MaruFo-Regular", "Maru\u3000Folk\u3000Regular", "\u4e38\u30d5\u30a9\u30fc\u30af R", "\u4e38\u30d5\u30a9\u30fc\u30af\u3000R", "A-OTF Folk Pro B", "A-OTF \u30d5\u30a9\u30fc\u30af Pro B", "Folk Bold", "Folk-Bold", "Folk\u3000Bold", "\u30d5\u30a9\u30fc\u30af B", "\u30d5\u30a9\u30fc\u30af\u3000B", "A-OTF Folk Pro M", "A-OTF \u30d5\u30a9\u30fc\u30af Pro M", "Folk Medium", "Folk-Medium", "Folk\u3000Medium", "\u30d5\u30a9\u30fc\u30af M", "\u30d5\u30a9\u30fc\u30af\u3000M", "A-OTF Folk Pro R", "A-OTF \u30d5\u30a9\u30fc\u30af Pro R", "Folk Regular", "Folk-Regular", "Folk\u3000Regular", "\u30d5\u30a9\u30fc\u30af R", "\u30d5\u30a9\u30fc\u30af\u3000R", "A-OTF Jun Pro 101", "A-OTF \u3058\u3085\u3093 Pro 101", "Jun 101", "Jun101-Light", "Jun\u3000101", "\u3058\u3085\u3093 101", "\u3058\u3085\u3093\u3000101", "A-OTF Shinsei Kaisho CBSK1 Pr5 CBSK1", "A-OTF \u65b0\u6b63\u6977\u66f8CBSK1 Pr5 CBSK1", "Shinsei Kaisho CBSK1", "ShinseiKai-CBSK1", "Shinsei\u3000Kaisho\u3000CBSK1", "\u65b0\u6b63\u6977\u66f8CBSK1", "A-OTF Midashi Go MB31 Pr6N MB31", "A-OTF \u898b\u51fa\u30b4MB31 Pr6N MB31", "Midashi Go MB31 JIS2004", "MidashiGo-MB31 JIS2004", "Midashi\u3000Go\u3000MB31\u3000JIS2004", "\u898b\u51fa\u30b4MB31 JIS2004", "\u898b\u51fa\u30b4MB31\u3000JIS2004", "A-OTF Midashi Mi MA31 Pr6N MA31", "A-OTF \u898b\u51fa\u30df\u30f3MA31 Pr6N MA31", "Midashi Min MA31 JIS2004", "MidashiMin-MA31 JIS2004", "Midashi\u3000Min\u3000MA31\u3000JIS2004", "\u898b\u51fa\u30df\u30f3MA31 JIS2004", "\u898b\u51fa\u30df\u30f3MA31\u3000JIS2004", "A-OTF Futo Go B101 Pr6N Bold", "A-OTF \u592a\u30b4B101 Pr6N Bold", "Futo Go B101 JIS2004", "FutoGoB101-Bold JIS2004", "Futo\u3000Go\u3000B101\u3000JIS2004", "\u592a\u30b4B101 JIS2004", "\u592a\u30b4B101\u3000JIS2004", "A-OTF Futo Min A101 Pr6N Bold", "A-OTF \u592a\u30df\u30f3A101 Pr6N Bold", "Futo Min A101 JIS2004", "FutoMinA101-Bold JIS2004", "Futo\u3000Min\u3000A101\u3000JIS2004", "\u592a\u30df\u30f3A101 JIS2004", "\u592a\u30df\u30f3A101\u3000JIS2004", "A-OTF Gothic BBB Pr6N Medium", "A-OTF \u4e2d\u30b4\u30b7\u30c3\u30afBBB Pr6N Med", "Gothic Medium BBB JIS2004", "GothicBBB-Medium JIS2004", "Gothic\u3000Medium\u3000BBB\u3000JIS2004", "\u4e2d\u30b4\u30b7\u30c3\u30afBBB JIS2004", "\u4e2d\u30b4\u30b7\u30c3\u30afBBB\u3000JIS2004", "A-OTF Gothic MB101 Pr6N B", "A-OTF \u30b4\u30b7\u30c3\u30afMB101 Pr6N B", "Gothic MB101 Bold JIS2004", "GothicMB101-Bold JIS2004", "Gothic\u3000MB101\u3000Bold\u3000JIS2004", "\u30b4\u30b7\u30c3\u30afMB101 B JIS2004", "\u30b4\u30b7\u30c3\u30afMB101\u3000B\u3000JIS2004", "A-OTF Gothic MB101 Pr6N M", "A-OTF \u30b4\u30b7\u30c3\u30afMB101 Pr6N M", "Gothic MB101 Medium JIS2004", "GothicMB101-Medium JIS2004", "Gothic\u3000MB101\u3000Medium\u3000JIS2004", "\u30b4\u30b7\u30c3\u30afMB101 M JIS2004", "\u30b4\u30b7\u30c3\u30afMB101\u3000M\u3000JIS2004", "A-OTF Gothic MB101 Pr6N R", "A-OTF \u30b4\u30b7\u30c3\u30afMB101 Pr6N R", "Gothic MB101 Regular JIS2004", "GothicMB101-Regular JIS2004", "Gothic\u3000MB101\u3000Regular\u3000JIS2004", "\u30b4\u30b7\u30c3\u30afMB101 R JIS2004", "\u30b4\u30b7\u30c3\u30afMB101\u3000R\u3000JIS2004", "A-OTF Shin Maru Go Pr6N B", "A-OTF \u65b0\u4e38\u30b4 Pr6N B", "Shin Maru Go Bold JIS2004", "ShinMGo-Bold JIS2004", "Shin\u3000Maru\u3000Go\u3000Bold\u3000JIS2004", "\u65b0\u4e38\u30b4 B JIS2004", "\u65b0\u4e38\u30b4\u3000B\u3000JIS2004", "A-OTF Shin Maru Go Pr6N M", "A-OTF \u65b0\u4e38\u30b4 Pr6N M", "Shin Maru Go Medium JIS2004", "ShinMGo-Medium JIS2004", "Shin\u3000Maru\u3000Go\u3000Medium\u3000JIS2004", "\u65b0\u4e38\u30b4 M JIS2004", "\u65b0\u4e38\u30b4\u3000M\u3000JIS2004", "A-OTF Shin Maru Go Pr6N R", "A-OTF \u65b0\u4e38\u30b4 Pr6N R", "Shin Maru Go Regular JIS2004", "ShinMGo-Regular JIS2004", "Shin\u3000Maru\u3000Go\u3000Regular\u3000JIS2004", "\u65b0\u4e38\u30b4 R JIS2004", "\u65b0\u4e38\u30b4\u3000R\u3000JIS2004", "A-OTF Shin Go Pr6N B", "A-OTF \u65b0\u30b4 Pr6N B", "Shin Go Bold JIS2004", "ShinGo-Bold JIS2004", "Shin\u3000Go\u3000Bold\u3000JIS2004", "\u65b0\u30b4 B JIS2004", "\u65b0\u30b4\u3000B\u3000JIS2004", "A-OTF Shin Go Pr6N M", "A-OTF \u65b0\u30b4 Pr6N M", "Shin Go Medium JIS2004", "ShinGo-Medium JIS2004", "Shin\u3000Go\u3000Medium\u3000JIS2004", "\u65b0\u30b4 M JIS2004", "\u65b0\u30b4\u3000M\u3000JIS2004", "A-OTF Shin Go Pr6N R", "A-OTF \u65b0\u30b4 Pr6N R", "Shin Go Regular JIS2004", "ShinGo-Regular JIS2004", "Shin\u3000Go\u3000Regular\u3000JIS2004", "\u65b0\u30b4 R JIS2004", "\u65b0\u30b4\u3000R\u3000JIS2004", "A-OTF Ryumin Pr6N B-KL", "A-OTF \u30ea\u30e5\u30a6\u30df\u30f3 Pr6N B-KL", "Ryumin Bold KL JIS2004", "Ryumin-Bold JIS2004", "Ryumin\u3000Bold\u3000KL\u3000JIS2004", "\u30ea\u30e5\u30a6\u30df\u30f3 B-KL JIS2004", "\u30ea\u30e5\u30a6\u30df\u30f3\u3000B-KL\u3000JIS2004", "A-OTF Ryumin Pr6N M-KL", "A-OTF \u30ea\u30e5\u30a6\u30df\u30f3 Pr6N M-KL", "Ryumin Medium KL JIS2004", "Ryumin-Medium JIS2004", "Ryumin\u3000Medium\u3000KL\u3000JIS2004", "\u30ea\u30e5\u30a6\u30df\u30f3 M-KL JIS2004", "\u30ea\u30e5\u30a6\u30df\u30f3\u3000M-KL\u3000JIS2004", "A-OTF Ryumin Pr6N R-KL", "A-OTF \u30ea\u30e5\u30a6\u30df\u30f3 Pr6N R-KL", "Ryumin Regular KL JIS2004", "Ryumin-Regular JIS2004", "Ryumin\u3000Regular\u3000KL\u3000JIS2004", "\u30ea\u30e5\u30a6\u30df\u30f3 R-KL JIS2004", "\u30ea\u30e5\u30a6\u30df\u30f3\u3000R-KL\u3000JIS2004", "A-OTF Midashi Go MB31 Pr6 MB31", "A-OTF \u898b\u51fa\u30b4MB31 Pr6 MB31", "Midashi Go MB31", "MidashiGo-MB31", "Midashi\u3000Go\u3000MB31", "\u898b\u51fa\u30b4MB31", "A-OTF Midashi Min MA31 Pr6 MA31", "A-OTF \u898b\u51fa\u30df\u30f3MA31 Pr6 MA31", "Midashi Min MA31", "MidashiMin-MA31", "Midashi\u3000Min\u3000MA31", "\u898b\u51fa\u30df\u30f3MA31", "A-OTF Futo Go B101 Pr6 Bold", "A-OTF \u592a\u30b4B101 Pr6 Bold", "Futo Go B101", "FutoGoB101-Bold", "Futo\u3000Go\u3000B101", "\u592a\u30b4B101", "A-OTF Futo Min A101 Pr6 Bold", "A-OTF \u592a\u30df\u30f3A101 Pr6 Bold", "Futo Min A101", "FutoMinA101-Bold", "Futo\u3000Min\u3000A101", "\u592a\u30df\u30f3A101", "A-OTF Gothic BBB Pr6 Medium", "A-OTF \u4e2d\u30b4\u30b7\u30c3\u30afBBB Pr6 Medium", "Gothic Medium BBB", "GothicBBB-Medium", "Gothic\u3000Medium\u3000BBB", "\u4e2d\u30b4\u30b7\u30c3\u30afBBB", "A-OTF Gothic MB101 Pr6 B", "A-OTF \u30b4\u30b7\u30c3\u30afMB101 Pr6 B", "Gothic MB101 Bold", "GothicMB101-Bold", "Gothic\u3000MB101\u3000Bold", "\u30b4\u30b7\u30c3\u30afMB101 B", "\u30b4\u30b7\u30c3\u30afMB101\u3000B", "A-OTF Gothic MB101 Pr6 M", "A-OTF \u30b4\u30b7\u30c3\u30afMB101 Pr6 M", "Gothic MB101 Medium", "GothicMB101-Medium", "Gothic\u3000MB101\u3000Medium", "\u30b4\u30b7\u30c3\u30afMB101 M", "\u30b4\u30b7\u30c3\u30afMB101\u3000M", "A-OTF Gothic MB101 Pr6 R", "A-OTF \u30b4\u30b7\u30c3\u30afMB101 Pr6 R", "Gothic MB101 Regular", "GothicMB101-Regular", "Gothic\u3000MB101\u3000Regular", "\u30b4\u30b7\u30c3\u30afMB101 R", "\u30b4\u30b7\u30c3\u30afMB101\u3000R", "A-OTF Shin Maru Go Pr6 B", "A-OTF \u65b0\u4e38\u30b4 Pr6 B", "Shin Maru Go Bold", "ShinMGo-Bold", "Shin\u3000Maru\u3000Go\u3000Bold", "\u65b0\u4e38\u30b4 B", "\u65b0\u4e38\u30b4\u3000B", "A-OTF Shin Maru Go Pr6 M", "A-OTF \u65b0\u4e38\u30b4 Pr6 M", "Shin Maru Go Medium", "ShinMGo-Medium", "Shin\u3000Maru\u3000Go\u3000Medium", "\u65b0\u4e38\u30b4 M", "\u65b0\u4e38\u30b4\u3000M", "A-OTF Shin Maru Go Pr6 R", "A-OTF \u65b0\u4e38\u30b4 Pr6 R", "Shin Maru Go Regular", "ShinMGo-Regular", "Shin\u3000Maru\u3000Go\u3000Regular", "\u65b0\u4e38\u30b4 R", "\u65b0\u4e38\u30b4\u3000R", "A-OTF Shin Go Pr6 B", "A-OTF \u65b0\u30b4 Pr6 B", "Shin Go Bold", "ShinGo-Bold", "Shin\u3000Go\u3000Bold", "\u65b0\u30b4 B", "\u65b0\u30b4\u3000B", "A-OTF Shin Go Pr6 M", "A-OTF \u65b0\u30b4 Pr6 M", "Shin Go Medium", "ShinGo-Medium", "Shin\u3000Go\u3000Medium", "\u65b0\u30b4 M", "\u65b0\u30b4\u3000M", "A-OTF Shin Go Pr6 R", "A-OTF \u65b0\u30b4 Pr6 R", "Shin Go Regular", "ShinGo-Regular", "Shin\u3000Go\u3000Regular", "\u65b0\u30b4 R", "\u65b0\u30b4\u3000R", "A-OTF Ryumin Pr6 B-KL", "A-OTF \u30ea\u30e5\u30a6\u30df\u30f3 Pr6 B-KL", "Ryumin Bold KL", "Ryumin-Bold", "Ryumin\u3000Bold\u3000KL", "\u30ea\u30e5\u30a6\u30df\u30f3 B-KL", "\u30ea\u30e5\u30a6\u30df\u30f3\u3000B-KL", "A-OTF Ryumin Pr6 M-KL", "A-OTF \u30ea\u30e5\u30a6\u30df\u30f3 Pr6 M-KL", "Ryumin Medium KL", "Ryumin-Medium", "Ryumin\u3000Medium\u3000KL", "\u30ea\u30e5\u30a6\u30df\u30f3 M-KL", "\u30ea\u30e5\u30a6\u30df\u30f3\u3000M-KL", "A-OTF Ryumin Pr6 R-KL", "A-OTF \u30ea\u30e5\u30a6\u30df\u30f3 Pr6 R-KL", "Ryumin Regular KL", "Ryumin-Regular", "Ryumin\u3000Regular\u3000KL", "\u30ea\u30e5\u30a6\u30df\u30f3 R-KL", "\u30ea\u30e5\u30a6\u30df\u30f3\u3000R-KL", "NUD\u30e2\u30c8\u30e4EX\u30a2\u30dd\u30ed6", "NUD\u30e2\u30c8\u30e4\u30a2\u30dd\u30ed Std W6", "NudMotoya Aporo Std W6", "NudMotoyaAporoStd-W6", "NudMotoyaAporoStd-W6-83pv-RKSJ-H", "NudMotoyaExAporo W6", "NudMotoyaExAporo-W6-90msp-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30a2\u30dd\u30ed5", "NUD\u30e2\u30c8\u30e4\u30a2\u30dd\u30ed Std W5", "NudMotoya Aporo Std W5", "NudMotoyaAporoStd-W5", "NudMotoyaAporoStd-W5-83pv-RKSJ-H", "NudMotoyaExAporo W5", "NudMotoyaExAporo-W5-90msp-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30a2\u30dd\u30ed4", "NUD\u30e2\u30c8\u30e4\u30a2\u30dd\u30ed Std W4", "NudMotoya Aporo Std W4", "NudMotoyaAporoStd-W4", "NudMotoyaAporoStd-W4-83pv-RKSJ-H", "NudMotoyaExAporo W4", "NudMotoyaExAporo-W4-90msp-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30a2\u30dd\u30ed3", "NUD\u30e2\u30c8\u30e4\u30a2\u30dd\u30ed Std W3", "NudMotoya Aporo Std W3", "NudMotoyaAporoStd-W3", "NudMotoyaAporoStd-W3-83pv-RKSJ-H", "NudMotoyaExAporo W3", "NudMotoyaExAporo-W3-90msp-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30a2\u30dd\u30ed2B", "NUD\u30e2\u30c8\u30e4\u30a2\u30dd\u30ed Std W2b", "NudMotoya Aporo Std W2b", "NudMotoyaAporoStd-W2b", "NudMotoyaAporoStd-W2b-83pv-RKSJ-H", "NudMotoyaExAporo W2b", "NudMotoyaExAporo-W2b-90msp-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30de\u30eb\u30d9\u30ea6", "NUD\u30e2\u30c8\u30e4\u30de\u30eb\u30d9\u30ea Std W6", "NudMotoya Maru Std W6", "NudMotoyaExMaru W6", "NudMotoyaExMaru-W6-90msp-RKSJ-H", "NudMotoyaMaruStd-W6", "NudMotoyaMaruStd-W6-83pv-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30de\u30eb\u30d9\u30ea5", "NUD\u30e2\u30c8\u30e4\u30de\u30eb\u30d9\u30ea Std W5", "NudMotoya Maru Std W5", "NudMotoyaExMaru W5", "NudMotoyaExMaru-W5-90msp-RKSJ-H", "NudMotoyaMaruStd-W5", "NudMotoyaMaruStd-W5-83pv-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30de\u30eb\u30d9\u30ea4", "NUD\u30e2\u30c8\u30e4\u30de\u30eb\u30d9\u30ea Std W4", "NudMotoya Maru Std W4", "NudMotoyaExMaru W4", "NudMotoyaExMaru-W4-90msp-RKSJ-H", "NudMotoyaMaruStd-W4", "NudMotoyaMaruStd-W4-83pv-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30de\u30eb\u30d9\u30ea3", "NUD\u30e2\u30c8\u30e4\u30de\u30eb\u30d9\u30ea Std W3", "NudMotoya Maru Std W3", "NudMotoyaExMaru W3", "NudMotoyaExMaru-W3-90msp-RKSJ-H", "NudMotoyaMaruStd-W3", "NudMotoyaMaruStd-W3-83pv-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30de\u30eb\u30d9\u30ea2B", "NUD\u30e2\u30c8\u30e4\u30de\u30eb\u30d9\u30ea Std W2b", "NudMotoya Maru Std W2b", "NudMotoyaExMaru W2b", "NudMotoyaExMaru-W2b-90msp-RKSJ-H", "NudMotoyaMaruStd-W2b", "NudMotoyaMaruStd-W2b-83pv-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30b7\u30fc\u30bf\u309b6", "NUD\u30e2\u30c8\u30e4\u30b7\u30fc\u30c0 Std W6", "NudMotoya Cedar Std W6", "NudMotoyaCedarStd-W6", "NudMotoyaCedarStd-W6-83pv-RKSJ-H", "NudMotoyaExCedar W6", "NudMotoyaExCedar-W6-90msp-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30b7\u30fc\u30bf\u309b5", "NUD\u30e2\u30c8\u30e4\u30b7\u30fc\u30c0 Std W5", "NudMotoya Cedar Std W5", "NudMotoyaCedarStd-W5", "NudMotoyaCedarStd-W5-83pv-RKSJ-H", "NudMotoyaExCedar W5", "NudMotoyaExCedar-W5-90msp-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30b7\u30fc\u30bf\u309b4", "NUD\u30e2\u30c8\u30e4\u30b7\u30fc\u30c0 Std W4", "NudMotoya Cedar Std W4", "NudMotoyaCedarStd-W4", "NudMotoyaCedarStd-W4-83pv-RKSJ-H", "NudMotoyaExCedar W4", "NudMotoyaExCedar-W4-90msp-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30b7\u30fc\u30bf\u309b3", "NUD\u30e2\u30c8\u30e4\u30b7\u30fc\u30c0 Std W3", "NudMotoya Cedar Std W3", "NudMotoyaCedarStd-W3", "NudMotoyaCedarStd-W3-83pv-RKSJ-H", "NudMotoyaExCedar W3", "NudMotoyaExCedar-W3-90msp-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u30b7\u30fc\u30bf\u309b2B", "NUD\u30e2\u30c8\u30e4\u30b7\u30fc\u30c0 Std W2b", "NudMotoya Cedar Std W2b", "NudMotoyaCedarStd-W2b", "NudMotoyaCedarStd-W2b-83pv-RKSJ-H", "NudMotoyaExCedar W2b", "NudMotoyaExCedar-W2b-90msp-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u660e\u671d6", "NUD\u30e2\u30c8\u30e4\u660e\u671d Std W6", "NudMotoya Mincho Std W6", "NudMotoyaExMincho W6", "NudMotoyaExMincho-W6-90msp-RKSJ-H", "NudMotoyaMinchoStd-W6", "NudMotoyaMinchoStd-W6-83pv-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u660e\u671d5", "NUD\u30e2\u30c8\u30e4\u660e\u671d Std W5", "NudMotoya Mincho Std W5", "NudMotoyaExMincho W5", "NudMotoyaExMincho-W5-90msp-RKSJ-H", "NudMotoyaMinchoStd-W5", "NudMotoyaMinchoStd-W5-83pv-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u660e\u671d4", "NUD\u30e2\u30c8\u30e4\u660e\u671d Std W4", "NudMotoya Mincho Std W4", "NudMotoyaExMincho W4", "NudMotoyaExMincho-W4-90msp-RKSJ-H", "NudMotoyaMinchoStd-W4", "NudMotoyaMinchoStd-W4-83pv-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u660e\u671d3", "NUD\u30e2\u30c8\u30e4\u660e\u671d Std W3", "NudMotoya Mincho Std W3", "NudMotoyaExMincho W3", "NudMotoyaExMincho-W3-90msp-RKSJ-H", "NudMotoyaMinchoStd-W3", "NudMotoyaMinchoStd-W3-83pv-RKSJ-H", "NUD\u30e2\u30c8\u30e4EX\u660e\u671d2B", "NUD\u30e2\u30c8\u30e4\u660e\u671d Std W2b", "NudMotoya Mincho Std W2b", "NudMotoyaExMincho W2b", "NudMotoyaExMincho-W2b-90msp-RKSJ-H", "NudMotoyaMinchoStd-W2b", "NudMotoyaMinchoStd-W2b-83pv-RKSJ-H", "FZCuHuoYi-M25T", "\u65b9\u6b63\u7c97\u6d3b\u610f\u7e41\u4f53", "FZCuHuoYi-M25S", "\u65b9\u6b63\u7c97\u6d3b\u610f\u7b80\u4f53", "\u65b9\u6b63\u7c97\u6d3b\u610f\u7c21\u4f53", "FZPangTouYu-M24S", "\u65b9\u6b63\u80d6\u5934\u9c7c\u7b80\u4f53", "\u65b9\u6b63\u80d6\u982d\u9b5a\u7c21\u4f53", "FZJianZhi-M23T", "\u65b9\u6b63\u526a\u7d19\u7e41\u4f53", "\u65b9\u6b63\u526a\u7eb8\u7e41\u4f53", "FZJianZhi-M23S", "\u65b9\u6b63\u526a\u7d19\u7c21\u4f53", "\u65b9\u6b63\u526a\u7eb8\u7b80\u4f53", "FZBeiWeiKaiShu-Z15T", "\u65b9\u6b63\u5317\u9b4f\u6977\u4e66\u7e41\u4f53", "\u65b9\u6b63\u5317\u9b4f\u6977\u66f8\u7e41\u4f53", "FZBeiWeiKaiShu-Z15S", "\u65b9\u6b63\u5317\u9b4f\u6977\u4e66\u7b80\u4f53", "\u65b9\u6b63\u5317\u9b4f\u6977\u66f8\u7c21\u4f53", "FZYingBiXingShu-S16T", "\u65b9\u6b63\u786c\u7b14\u884c\u4e66\u7e41\u4f53", "\u65b9\u6b63\u786c\u7b46\u884c\u66f8\u7e41\u4f53", "FZYingBiXingShu-S16S", "\u65b9\u6b63\u786c\u7b14\u884c\u4e66\u7b80\u4f53", "\u65b9\u6b63\u786c\u7b46\u884c\u66f8\u7c21\u4f53", "FZYingBiKaiShu-S15T", "\u65b9\u6b63\u786c\u7b14\u6977\u4e66\u7e41\u4f53", "\u65b9\u6b63\u786c\u7b46\u6977\u66f8\u7e41\u4f53", "FZYingBiKaiShu-S15S", "\u65b9\u6b63\u786c\u7b14\u6977\u4e66\u7b80\u4f53", "\u65b9\u6b63\u786c\u7b46\u6977\u66f8\u7c21\u4f53", "FZXiaoZhuanTi-S13T", "\u65b9\u6b63\u5c0f\u7bc6\u4f53", "FZZhanBiHei-M22T", "\u65b9\u6b63\u6be1\u7b14\u9ed1\u7e41\u4f53", "\u65b9\u6b63\u6be1\u7b46\u9ed2\u7e41\u4f53", "FZZhanBiHei-M22S", "\u65b9\u6b63\u6be1\u7b14\u9ed1\u7b80\u4f53", "\u65b9\u6b63\u6be1\u7b46\u9ed2\u7c21\u4f53", "FZShuiHei-M21T", "\u65b9\u6b63\u6c34\u9ed1\u7e41\u4f53", "\u65b9\u6b63\u6c34\u9ed2\u7e41\u4f53", "FZShuiHei-M21S", "\u65b9\u6b63\u6c34\u9ed1\u7b80\u4f53", "\u65b9\u6b63\u6c34\u9ed2\u7c21\u4f53", "FZKaTong-M19T", "\u65b9\u6b63\u5361\u901a\u7e41\u4f53", "FZKaTong-M19S", "\u65b9\u6b63\u5361\u901a\u7b80\u4f53", "\u65b9\u6b63\u5361\u901a\u7c21\u4f53", "FZShouJinShu-S10T", "\u65b9\u6b63\u75e9\u91d1\u66f8\u7e41\u4f53", "\u65b9\u6b63\u7626\u91d1\u4e66\u7e41\u4f53", "FZShouJinShu-S10S", "\u65b9\u6b63\u75e9\u91d1\u66f8\u7c21\u4f53", "\u65b9\u6b63\u7626\u91d1\u4e66\u7b80\u4f53", "FZHuangCao-S09S", "\u65b9\u6b63\u9ec4\u8349\u7b80\u4f53", "\u65b9\u6b63\u9ec4\u8349\u7c21\u4f53", "FZKangTi-S07T", "\u65b9\u6b63\u5eb7\u4f53\u7e41\u4f53", "FZKangTi-S07S", "\u65b9\u6b63\u5eb7\u4f53\u7b80\u4f53", "\u65b9\u6b63\u5eb7\u4f53\u7c21\u4f53", "FZShuTi-S05T", "\u65b9\u6b63\u8212\u4f53\u7e41\u4f53", "FZShuTi-S05S", "\u65b9\u6b63\u8212\u4f53\u7b80\u4f53", "\u65b9\u6b63\u8212\u4f53\u7c21\u4f53", "FZXingKai-S04T", "\u65b9\u6b63\u884c\u6977\u7e41\u4f53", "FZXingKai-S04S", "\u65b9\u6b63\u884c\u6977\u7b80\u4f53", "\u65b9\u6b63\u884c\u6977\u7c21\u4f53", "FZWeiBei-S03T", "\u65b9\u6b63\u9b4f\u7891\u7e41\u4f53", "FZWeiBei-S03S", "\u65b9\u6b63\u9b4f\u7891\u7b80\u4f53", "\u65b9\u6b63\u9b4f\u7891\u7c21\u4f53", "FZLiShu-S01T", "\u65b9\u6b63\u96b6\u4e66\u7e41\u4f53", "\u65b9\u6b63\u96b7\u66f8\u7e41\u4f53", "FZLiShu-S01S", "\u65b9\u6b63\u96b6\u4e66\u7b80\u4f53", "\u65b9\u6b63\u96b7\u66f8\u7c21\u4f53", "FZPangWa-M18T", "\u65b9\u6b63\u80d6\u5a03\u7e41\u4f53", "FZPangWa-M18S", "\u65b9\u6b63\u80d6\u5a03\u7b80\u4f53", "\u65b9\u6b63\u80d6\u5a03\u7c21\u4f53", "FZZhongQian-M16T", "\u65b9\u6b63\u4e2d\u5029\u7e41\u4f53", "FZZhongQian-M16S", "\u65b9\u6b63\u4e2d\u5029\u7b80\u4f53", "\u65b9\u6b63\u4e2d\u5029\u7c21\u4f53", "FZXiShanHu-M13T", "\u65b9\u6b63\u7d30\u73ca\u745a\u7e41\u4f53", "\u65b9\u6b63\u7ec6\u73ca\u745a\u7e41\u4f53", "FZXiShanHu-M13S", "\u65b9\u6b63\u7d30\u73ca\u745a\u7c21\u4f53", "\u65b9\u6b63\u7ec6\u73ca\u745a\u7b80\u4f53", "FZZhiYi-M12T", "\u65b9\u6b63\u7a1a\u827a\u7e41\u4f53", "\u65b9\u6b63\u7a1a\u82b8\u7e41\u4f53", "FZZhiYi-M12S", "\u65b9\u6b63\u7a1a\u827a\u7b80\u4f53", "\u65b9\u6b63\u7a1a\u82b8\u7c21\u4f53", "FZChaoCuHei-M10T", "\u65b9\u6b63\u8d85\u7c97\u9ed1\u7e41\u4f53", "\u65b9\u6b63\u8d85\u7c97\u9ed2\u7e41\u4f53", "FZChaoCuHei-M10S", "\u65b9\u6b63\u8d85\u7c97\u9ed1\u7b80\u4f53", "\u65b9\u6b63\u8d85\u7c97\u9ed2\u7c21\u4f53", "FZCaiYun-M09T", "\u65b9\u6b63\u5f69\u4e91\u7e41\u4f53", "\u65b9\u6b63\u5f69\u96f2\u7e41\u4f53", "FZCaiYun-M09S", "\u65b9\u6b63\u5f69\u4e91\u7b80\u4f53", "\u65b9\u6b63\u5f69\u96f2\u7c21\u4f53", "FZShuiZhu-M08T", "\u65b9\u6b63\u6c34\u67f1\u7e41\u4f53", "FZShuiZhu-M08S", "\u65b9\u6b63\u6c34\u67f1\u7b80\u4f53", "\u65b9\u6b63\u6c34\u67f1\u7c21\u4f53", "FZYaoTi-M06T", "\u65b9\u6b63\u59da\u4f53\u7e41\u4f53", "FZYaoTi-M06S", "\u65b9\u6b63\u59da\u4f53\u7b80\u4f53", "\u65b9\u6b63\u59da\u4f53\u7c21\u4f53", "FZZongYi-M05T", "\u65b9\u6b63\u7d9c\u82b8\u7e41\u4f53", "\u65b9\u6b63\u7efc\u827a\u7e41\u4f53", "FZZongYi-M05S", "\u65b9\u6b63\u7d9c\u82b8\u7c21\u4f53", "\u65b9\u6b63\u7efc\u827a\u7b80\u4f53", "FZHuPo-M04T", "\u65b9\u6b63\u7425\u73c0\u7e41\u4f53", "FZHuPo-M04S", "\u65b9\u6b63\u7425\u73c0\u7b80\u4f53", "\u65b9\u6b63\u7425\u73c0\u7c21\u4f53", "FZZhunYuan-M02T", "\u65b9\u6b63\u51c6\u5706\u7e41\u4f53", "\u65b9\u6b63\u51c6\u5713\u7e41\u4f53", "FZZhunYuan-M02S", "\u65b9\u6b63\u51c6\u5706\u7b80\u4f53", "\u65b9\u6b63\u51c6\u5713\u7c21\u4f53", "FZXiYuan-M01T", "\u65b9\u6b63\u7d30\u5713\u7e41\u4f53", "\u65b9\u6b63\u7ec6\u5706\u7e41\u4f53", "FZXiYuan-M01S", "\u65b9\u6b63\u7d30\u5713\u7c21\u4f53", "\u65b9\u6b63\u7ec6\u5706\u7b80\u4f53", "FZXiaoBiaoSong-B05T", "\u65b9\u6b63\u5c0f\u6807\u5b8b\u7e41\u4f53", "\u65b9\u6b63\u5c0f\u6a19\u5b8b\u7e41\u4f53", "FZXiaoBiaoSong-B05S", "\u65b9\u6b63\u5c0f\u6807\u5b8b\u7b80\u4f53", "\u65b9\u6b63\u5c0f\u6a19\u5b8b\u7c21\u4f53", "FZFangSong-Z02", "\u65b9\u6b63\u4eff\u5b8b_GBK", "FZKai-Z03", "\u65b9\u6b63\u6977\u4f53_GBK", "FZHei-B01", "\u65b9\u6b63\u9ed1\u4f53_GBK", "\u65b9\u6b63\u9ed2\u4f53_GBK", "FZShuSong-Z01", "\u65b9\u6b63\u4e66\u5b8b_GBK", "\u65b9\u6b63\u66f8\u5b8b_GBK", "Mty SousyokuEmA Jis W6", "MtySousyokuEmA W6", "MtySousyokuEmA-W6-90msp-RKSJ-H", "MtySousyokuEmAJis-W6", "MtySousyokuEmAJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feEM\uff71\uff8e\uff9f\uff9b Jis W6", "\uff93\uff84\uff94\u88c5\u98feEM\uff71\uff8e\uff9f\uff9b6", "Mty SousyokuShMr Jis W6", "MtySousyokuShMr W6", "MtySousyokuShMr-W6-90msp-RKSJ-H", "MtySousyokuShMrJis-W6", "MtySousyokuShMrJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feSH\uff8f\uff99\uff8d\uff9e\uff98 Jis W6", "\uff93\uff84\uff94\u88c5\u98feSH\uff8f\uff99\uff8d\uff9e\uff986", "Mty SousyokuShBc Jis W6", "MtySousyokuShBc W6", "MtySousyokuShBc-W6-90msp-RKSJ-H", "MtySousyokuShBcJis-W6", "MtySousyokuShBcJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feSH\uff8a\uff9e\uff70\uff81 Jis W6", "\uff93\uff84\uff94\u88c5\u98feSH\uff8a\uff9e\uff70\uff816", "Mty SousyokuLiMr Jis W6", "MtySousyokuLiMr W6", "MtySousyokuLiMr-W6-90msp-RKSJ-H", "MtySousyokuLiMrJis-W6", "MtySousyokuLiMrJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feLI\uff8f\uff99\uff8d\uff9e\uff98 Jis W6", "\uff93\uff84\uff94\u88c5\u98feLI\uff8f\uff99\uff8d\uff9e\uff986", "Mty SousyokuShC Jis W6", "MtySousyokuShC W6", "MtySousyokuShC-W6-90msp-RKSJ-H", "MtySousyokuShCJis-W6", "MtySousyokuShCJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feSH\uff7c\uff70\uff80\uff9e Jis W6", "\uff93\uff84\uff94\u88c5\u98feSH\uff7c\uff70\uff80\uff9e6", "Mty SousyokuShA Jis W6", "MtySousyokuShA W6", "MtySousyokuShA-W6-90msp-RKSJ-H", "MtySousyokuShAJis-W6", "MtySousyokuShAJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feSH\uff71\uff8e\uff9f\uff9b Jis W6", "\uff93\uff84\uff94\u88c5\u98feSH\uff71\uff8e\uff9f\uff9b6", "Mty SousyokuLiBc Jis W6", "MtySousyokuLiBc W6", "MtySousyokuLiBc-W6-90msp-RKSJ-H", "MtySousyokuLiBcJis-W6", "MtySousyokuLiBcJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feLI\uff8a\uff9e\uff70\uff81 Jis W6", "\uff93\uff84\uff94\u88c5\u98feLI\uff8a\uff9e\uff70\uff816", "Mty SousyokuLiC Jis W6", "MtySousyokuLiC W6", "MtySousyokuLiC-W6-90msp-RKSJ-H", "MtySousyokuLiCJis-W6", "MtySousyokuLiCJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feLI\uff7c\uff70\uff80\uff9e Jis W6", "\uff93\uff84\uff94\u88c5\u98feLI\uff7c\uff70\uff80\uff9e6", "Mty SousyokuLiA Jis W6", "MtySousyokuLiA W6", "MtySousyokuLiA-W6-90msp-RKSJ-H", "MtySousyokuLiAJis-W6", "MtySousyokuLiAJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feLI\uff71\uff8e\uff9f\uff9b Jis W6", "\uff93\uff84\uff94\u88c5\u98feLI\uff71\uff8e\uff9f\uff9b6", "Mty SousyokuEmC Jis W6", "MtySousyokuEmC W6", "MtySousyokuEmC-W6-90msp-RKSJ-H", "MtySousyokuEmCJis-W6", "MtySousyokuEmCJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feEM\uff7c\uff70\uff80\uff9e Jis W6", "\uff93\uff84\uff94\u88c5\u98feEM\uff7c\uff70\uff80\uff9e6", "Mty SousyokuEmBc Jis W6", "MtySousyokuEmBc W6", "MtySousyokuEmBc-W6-90msp-RKSJ-H", "MtySousyokuEmBcJis-W6", "MtySousyokuEmBcJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feEM\uff8a\uff9e\uff70\uff81 Jis W6", "\uff93\uff84\uff94\u88c5\u98feEM\uff8a\uff9e\uff70\uff816", "Mty SousyokuEmMr Jis W6", "MtySousyokuEmMr W6", "MtySousyokuEmMr-W6-90msp-RKSJ-H", "MtySousyokuEmMrJis-W6", "MtySousyokuEmMrJis-W6-83pv-RKSJ-H", "\uff93\uff84\uff94\u88c5\u98feEM\uff8f\uff99\uff8d\uff9e\uff98 Jis W6", "\uff93\uff84\uff94\u88c5\u98feEM\uff8f\uff99\uff8d\uff9e\uff986", "I-OTF\u4e38\u30dd\u30c3\u30d7 B", "IWAp\u4e38\u30dd\u30c3\u30d7B", "IwaRPOP-Bd", "SRPopIWA-Bd", "I-OTF\u89d2\u30dd\u30c3\u30d7 E", "IWAp\u89d2\u30dd\u30c3\u30d7E", "IwaKPOP-Eb", "SPopIWA-Ed", "I-OTF\u89d2\u30dd\u30c3\u30d7 B", "IWAp\u89d2\u30dd\u30c3\u30d7B", "IwaKPOP-Bd", "SPopIWA-Bd", "I-OTF\u5f18\u9053\u8ed2\u6e05\u671d\u5fa9\u523b\u7248Pro", "IwaSeiFuPro-Bd", "SSeiChoKDO-Dm", "\u5f18\u9053\u8ed2p\u6e05\u671d\u4f53\u5fa9\u523b\u7248Plus", "I-OTF\u5f18\u9053\u8ed2\u6e05\u671d\u73fe\u4ee3\u7248Pro", "IwaSeiGePro-Bd", "SSeiChoIWA-Dm", "\u5f18\u9053\u8ed2p\u6e05\u671d\u4f53\u73fe\u4ee3\u7248Plus", "I-OTF\u52d8\u4ead\u6d41 B", "IWAp\u52d8\u4ead\u6d41", "IwaKANTEI-Bd", "SKanIWA-Bd", "I-OTF\u5b8b\u671dPro M", "IWAp\u5b8b\u671d\u4f53Plus", "IwaSouPro-Md", "PSouChoNKIWA-Md", "I-OTF\u5b8b\u671d\u65b0\u304c\u306aPro M", "IWAp\u5b8b\u671d\u4f53\u65b0\u304c\u306aPlus", "IwaSouNPro-Md", "PSouChoIWA-Md", "I-OTF\u96b7\u66f8Pro M", "IWAp\u96b7\u66f8Plus", "IwaReiPro-Md", "PReiIW-Md", "I-OTF\u65b0\u96b7\u66f8Pro M", "IWAp\u65b0\u96b7\u66f8Plus", "IwaNReiPro-Md", "SNReiIWA-Md", "I-OTF\u6977\u66f8E", "IWAp\u6977\u66f8-\u7279\u592aPlus", "IwaKai-Eb", "PKaiIWA-Hv", "GTxtIWA-Hv-Plus", "I-OTF-G\u6559\u79d1\u66f8Pro H", "IWApG\u6559\u79d1\u66f8H", "IwaGTxtPro-Hv", "GTxtIWA-Bd-Plus", "I-OTF-G\u6559\u79d1\u66f8Pro B", "IWApG\u6559\u79d1\u66f8B", "IwaGTxtPro-Bd", "GTxtIWA-DA", "I-OTF-G\u6559\u79d1\u66f8Pro DA", "IWApG\u6559\u79d1\u66f8DA", "IwaGTxtPro-DA", "GTxtIWA-Dm-Plus", "I-OTF-G\u6559\u79d1\u66f8Pro D", "IWApG\u6559\u79d1\u66f8D", "IwaGTxtPro-Db", "GTxtIWA-Lt-Plus", "I-OTF-G\u6559\u79d1\u66f8Pro L", "IWApG\u6559\u79d1\u66f8L", "IwaGTxtPro-Lt", "I-OTF\u884c\u66f8Pro B", "IWAp\u884c\u66f8-\u592aPlus", "IwaGyoPro-Bd", "PGyoIWA-Bd", "I-OTF\u884c\u66f8Pro M", "IWAp\u884c\u66f8Plus", "IwaGyoPro-Md", "PGyoIWA-Md", "I-OTF\u6977\u66f8Pro D", "IWAp\u6977\u66f8-\u4e2d\u592aPlus", "IwaKaiPro-Db", "PKaiIWA-Dm", "I-OTF\u6977\u66f8Pro M", "IWAp\u6b63\u6977\u66f8Plus", "IwaKaiPro-Md", "PSeKIWA-Md", "I-OTF\u6559\u79d1\u66f8Pro E", "IWAp\u6559\u79d1\u66f8-\u7279\u592aPlus", "IwaTxtPro-Eb", "PTxtIWA-Hv", "I-OTF\u6559\u79d1\u66f8Pro B", "IWAp\u6559\u79d1\u66f8-\u592aPlus", "IwaTxtPro-Bd", "PTxtIWA-Bd", "I-OTF\u6559\u79d1\u66f8Pro D", "IWAp\u6559\u79d1\u66f8-\u4e2d\u592aPlus", "IwaTxtPro-Db", "PTxtIWA-Dm", "I-OTF\u6559\u79d1\u66f8Pro L", "IWAp\u6559\u79d1\u66f8-\u7d30Plus", "IwaTxtPro-Lt", "PTxtIWA-Lt", "Motoya Kyotai Std W4", "MotoyaExKyotai W4", "MotoyaExKyotai-W4-90msp-RKSJ-H", "MotoyaKyotaiStd-W4", "MotoyaKyotaiStd-W4-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u6559\u79d1\u66f84", "\u30e2\u30c8\u30e4\u6559\u79d1\u66f8 Std W4", "Motoya Kyotai Std W3", "MotoyaExKyotai W3", "MotoyaExKyotai-W3-90msp-RKSJ-H", "MotoyaKyotaiStd-W3", "MotoyaKyotaiStd-W3-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u6559\u79d1\u66f83", "\u30e2\u30c8\u30e4\u6559\u79d1\u66f8 Std W3", "Motoya Okai Std W5", "MotoyaExOkai W5", "MotoyaExOkai-W5-90msp-RKSJ-H", "MotoyaOkaiStd-W5", "MotoyaOkaiStd-W5-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u5927\u69775", "\u30e2\u30c8\u30e4\u5927\u6977 Std W5", "Motoya Gyosyo Std W3", "MotoyaExGyosyo W3", "MotoyaExGyosyo-W3-90msp-RKSJ-H", "MotoyaGyosyoStd-W3", "MotoyaGyosyoStd-W3-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u884c\u66f83", "\u30e2\u30c8\u30e4\u884c\u66f8 Std W3", "Motoya Reisyo Std W6", "MotoyaExReisyo W6", "MotoyaExReisyo-W6-90msp-RKSJ-H", "MotoyaReisyoStd-W6", "MotoyaReisyoStd-W6-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u96b7\u66f86", "\u30e2\u30c8\u30e4\u96b7\u66f8 Std W6", "Motoya Reisyo Std W4", "MotoyaExReisyo W4", "MotoyaExReisyo-W4-90msp-RKSJ-H", "MotoyaReisyoStd-W4", "MotoyaReisyoStd-W4-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u96b7\u66f84", "\u30e2\u30c8\u30e4\u96b7\u66f8 Std W4", "Motoya Reisyo Std W2", "MotoyaExReisyo W2", "MotoyaExReisyo-W2-90msp-RKSJ-H", "MotoyaReisyoStd-W2", "MotoyaReisyoStd-W2-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u96b7\u66f82", "\u30e2\u30c8\u30e4\u96b7\u66f8 Std W2", "Motoya Seikai Std W5", "MotoyaExSeikai W5", "MotoyaExSeikai-W5-90msp-RKSJ-H", "MotoyaSeikaiStd-W5", "MotoyaSeikaiStd-W5-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u6b63\u6977\u66f85", "\u30e2\u30c8\u30e4\u6b63\u6977\u66f8 Std W5", "Motoya Seikai Std W3", "MotoyaExSeikai W3", "MotoyaExSeikai-W3-90msp-RKSJ-H", "MotoyaSeikaiStd-W3", "MotoyaSeikaiStd-W3-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u6b63\u6977\u66f83", "\u30e2\u30c8\u30e4\u6b63\u6977\u66f8 Std W3", "FOT-MatisseWakaba Pro B", "FOT-MatisseWakaba Pro B Regular", "FOT-\u30de\u30c6\u30a3\u30b9\u308f\u304b\u3070\u3084\u307e\u3068Pro B", "FOT-\u30de\u30c6\u30a3\u30b9\u308f\u304b\u3070\u3084\u307e\u3068Pro B Regular", "MatisseWakabaPro-B", "GRGothIWA-Bd-Plus", "I-OTF-G\u4e38\u30b4\u30b7\u30c3\u30afPro B", "IWApG\u4e38\u30b4\u30b7\u30c3\u30afB", "IwaGRGoPro-Bd", "GRGothIWA-Md-Plus", "I-OTF-G\u4e38\u30b4\u30b7\u30c3\u30afPro M", "IWApG\u4e38\u30b4\u30b7\u30c3\u30afM", "IwaGRGoPro-Md", "GNGoIWA-Bd-Plus", "I-OTF-G\u65b0\u30b4\u30b7\u30c3\u30afPro B", "IWApG\u65b0\u30b4\u30b7\u30c3\u30afB", "IwaGNGoPro-Bd", "GNGoIWA-Md-Plus", "I-OTF-G\u65b0\u30b4\u30b7\u30c3\u30afPro M", "IWApG\u65b0\u30b4\u30b7\u30c3\u30afM", "IwaGNGoPro-Md", "GGothIWA-Bd-Plus", "I-OTF-G\u30b4\u30b7\u30c3\u30afPro B", "IWApG\u30b4\u30b7\u30c3\u30afB", "IwaGGoPro-Bd", "GGothIWA-Md-Plus", "I-OTF-G\u30b4\u30b7\u30c3\u30afPro M", "IWApG\u30b4\u30b7\u30c3\u30afM", "IwaGGoPro-Md", "GMinIWA-Bd-Plus", "I-OTF-G\u660e\u671dPro B", "IWApG\u660e\u671dB", "IwaGMinPro-Bd", "GMinIWA-Md-Plus", "I-OTF-G\u660e\u671dPro M", "IWApG\u660e\u671dM", "IwaGMinPro-Md", "I-OTF-UD\u65b0\u805e\u30b4\u30b7\u30c3\u30afPro Dp", "IWAUD\u65b0\u805e\u30b4\u30b7\u30c3\u30afDp", "IwaUDNwGPro-Dp", "PUDNewsGIWA-Dp", "I-OTF\u65b0\u805e\u30b4\u30b7\u30c3\u30af\u65b0\u304c\u306aPro D", "IWA\u65b0\u805e\u30b4-\u4e2d\u592aN-Plus", "IwaNGNewsPro-Db", "NPNewsGIWA-Db", "I-OTF\u65b0\u805e\u30b4\u30b7\u30c3\u30afPro D", "IWA\u65b0\u805e\u30b4-\u4e2d\u592aPlus", "IwaGNewsPro-Db", "PNewsGIWA-Db", "I-OTF\u65b0\u805e\u30b4\u30b7\u30c3\u30af\u65b0\u304c\u306aPro Mp", "IWA\u65b0\u805e\u30b4-\u4e2dN-Plus", "IwaNGNewsPro-Mp", "NPNewsGIWA-Mp", "I-OTF\u65b0\u805e\u30b4\u30b7\u30c3\u30afPro Mp", "IWA\u65b0\u805e\u30b4-\u4e2dPlus", "IwaGNewsPro-Mp", "PNewsGIWA-Mp", "I-OTF\u65b0\u805e\u30b4\u30b7\u30c3\u30af\u65b0\u304c\u306aPro M", "IWA\u65b0\u805e\u30b4N-Plus", "IwaNGNewsPro-Md", "NPNewsGIWA-Md", "I-OTF\u65b0\u805e\u30b4\u30b7\u30c3\u30afPro M", "IWA\u65b0\u805e\u30b4Plus", "IwaGNewsPro-Md", "PNewsGIWA-Md", "I-OTF-UD\u65b0\u805e\u660e\u671dPro Mp", "IWAUD\u65b0\u805e\u660e\u671dMp", "IwaUDNwMPro-Mp", "PUDNewsMIWA-Mp", "I-OTF\u65b0\u805e\u660e\u671d\u65b0\u304c\u306aPro M", "IWA\u65b0\u805e\u660e-\u4e2dN-Plus", "IwaNMNewsPro-Md", "NPNewsMIWA-Md", "I-OTF\u65b0\u805e\u660e\u671dPro M", "IWA\u65b0\u805e\u660e-\u4e2dPlus", "IwaMNewsPro-Md", "PNewsMIWA-Md", "I-OTF\u65b0\u805e\u660e\u671d\u65b0\u304c\u306aPro R", "IWA\u65b0\u805e\u660eN-Plus", "IwaNMNewsPro-Th", "NPNewsMIWA-Th", "I-OTF\u65b0\u805e\u660e\u671dPro R", "IWA\u65b0\u805e\u660ePlus", "IwaMNewsPro-Th", "PNewsMIWA-Th", "I-OTF-UD\u660e\u671dKDPro D", "IWAp-UD\u660e\u671dKD-D", "IwaUDMinKDPro-Db", "SUDMinIWAKD-Db", "I-OTF-UD\u660e\u671dKCPro D", "IWAp-UD\u660e\u671dKC-D", "IwaUDMinKCPro-Db", "SUDMinIWAKC-Db", "I-OTF-UD\u660e\u671dKBPro D", "IWAp-UD\u660e\u671dKB-D", "IwaUDMinKBPro-Db", "SUDMinIWAKB-Db", "I-OTF-UD\u660e\u671dKAPro D", "IWAp-UD\u660e\u671dKA-D", "IwaUDMinKAPro-Db", "SUDMinIWAKA-Db", "I-OTF-UD\u660e\u671dPro D", "IWAp-UD\u660e\u671dD", "IwaUDMinPro-Db", "SUDMinIWA-Db", "I-OTF-UD\u660e\u671dKDPro M", "IWAp-UD\u660e\u671dKD-M", "IwaUDMinKDPro-Md", "SUDMinIWAKD-Md", "I-OTF-UD\u660e\u671dKCPro M", "IWAp-UD\u660e\u671dKC-M", "IwaUDMinKCPro-Md", "SUDMinIWAKC-Md", "I-OTF-UD\u660e\u671dKBPro M", "IWAp-UD\u660e\u671dKB-M", "IwaUDMinKBPro-Md", "SUDMinIWAKB-Md", "I-OTF-UD\u660e\u671dKAPro M", "IWAp-UD\u660e\u671dKA-M", "IwaUDMinKAPro-Md", "SUDMinIWAKA-Md", "I-OTF-UD\u660e\u671dPro M", "IWAp-UD\u660e\u671dM", "IwaUDMinPro-Md", "SUDMinIWA-Md", "I-OTF-UD\u660e\u671dKDPro R", "IWAp-UD\u660e\u671dKD-R", "IwaUDMinKDPro-Th", "SUDMinIWAKD-Th", "I-OTF-UD\u660e\u671dKCPro R", "IWAp-UD\u660e\u671dKC-R", "IwaUDMinKCPro-Th", "SUDMinIWAKC-Th", "I-OTF-UD\u660e\u671dKBPro R", "IWAp-UD\u660e\u671dKB-R", "IwaUDMinKBPro-Th", "SUDMinIWAKB-Th", "I-OTF-UD\u660e\u671dKAPro R", "IWAp-UD\u660e\u671dKA-R", "IwaUDMinKAPro-Th", "SUDMinIWAKA-Th", "I-OTF-UD\u660e\u671dPro R", "IWAp-UD\u660e\u671dR", "IwaUDMinPro-Th", "SUDMinIWA-Th", "I-OTF-UD\u4e38\u30b4Pro E", "IWAp-UD\u4e38\u30b4E", "IwaUDRGoPro-Eb", "SUDRGIWA-Eb", "I-OTF-UD\u4e38\u30b4Pro B", "IWAp-UD\u4e38\u30b4B", "IwaUDRGoPro-Bd", "SUDRGIWA-Bd", "I-OTF-UD\u4e38\u30b4Pro M", "IWAp-UD\u4e38\u30b4M", "IwaUDRGoPro-Md", "SUDRGIWA-Md", "I-OTF-UD\u4e38\u30b4Pro R", "IWAp-UD\u4e38\u30b4R", "IwaUDRGoPro-Th", "SUDRGIWA-Th", "I-OTF-UD\u4e38\u30b4Pro L", "IWAp-UD\u4e38\u30b4L", "IwaUDRGoPro-Lt", "SUDRGIWA-Lt", "I-OTF-UD\u30b4\u8868\u793aPro H", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u8868\u793aH", "IwaUDGoDspPro-Hv", "SUDGoDspIWA-Hv", "I-OTF-UD\u30b4\u8868\u793aPro E", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u8868\u793aE", "IwaUDGoDspPro-Eb", "SUDGoDspIWA-Eb", "I-OTF-UD\u30b4\u8868\u793aPro B", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u8868\u793aB", "IwaUDGoDspPro-Bd", "SUDGoDspIWA-Bd", "I-OTF-UD\u30b4\u672c\u6587Pro M", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u672c\u6587M", "IwaUDGoHonPro-Md", "SUDGohonIWA-Md", "I-OTF-UD\u30b4\u8868\u793aPro M", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u8868\u793aM", "IwaUDGoDspPro-Md", "SUDGoDspIWA-Md", "I-OTF-UD\u30b4\u672c\u6587Pro RA", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u672c\u6587RA", "IwaUDGoHonPro-RA", "SUDGohonIWA-RA", "I-OTF-UD\u30b4\u8868\u793aPro RA", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u8868\u793aRA", "IwaUDGoDspPro-RA", "SUDGoDspIWA-RA", "I-OTF-UD\u30b4\u672c\u6587Pro R", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u672c\u6587R", "IwaUDGoHonPro-Th", "SUDGohonIWA-Th", "I-OTF-UD\u30b4\u8868\u793aPro R", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u8868\u793aR", "IwaUDGoDspPro-Th", "SUDGoDspIWA-Th", "I-OTF-UD\u30b4\u672c\u6587Pro L", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u672c\u6587L", "IwaUDGoHonPro-Lt", "SUDGohonIWA-Lt", "I-OTF-UD\u30b4\u8868\u793aPro L", "IWAp-UD\u30b4\u30b7\u30c3\u30af\u8868\u793aL", "IwaUDGoDspPro-Lt", "SUDGoDspIWA-Lt", "I-OTF\u4e38\u30b4\u30b7\u30c3\u30afPro B", "IWAp\u4e38\u30b4-\u592aPlus", "IwaRGoPro-Bd", "PRGothIWA-Bd", "I-OTF\u4e38\u30b4\u30b7\u30c3\u30afPro D", "IWAp\u4e38\u30b4-\u4e2d\u592aPlus", "IwaRGoPro-Db", "PRGothIWA-Dm", "I-OTF\u4e38\u30b4\u30b7\u30c3\u30afPro M", "IWAp\u4e38\u30b4-\u4e2dPlus", "IwaRGoPro-Md", "PRGothIWA-Md", "I-OTF\u4e38\u30b4\u30b7\u30c3\u30afPro L", "IWAp\u4e38\u30b4-\u7d30Plus", "IwaRGoPro-Lt", "PRGothIWA-Lt", "I-OTF\u65b0\u30b4\u30b7\u30c3\u30afPro U", "IWAp\u65b0\u30b4\u30b7\u30c3\u30af\u4f53U-Plus", "IwaNGoPro-Ul", "PNGoIWA-Ul", "I-OTF\u65b0\u30b4\u30b7\u30c3\u30afPro H", "IWAp\u65b0\u30b4\u30b7\u30c3\u30af\u4f53H-Plus", "IwaNGoPro-Hv", "PNGoIWA-Hd", "I-OTF\u65b0\u30b4\u30b7\u30c3\u30afPro E", "IWAp\u65b0\u30b4\u30b7\u30c3\u30af\u4f53E-Plus", "IwaNGoPro-Eb", "PNGoIWA-Eb", "I-OTF\u65b0\u30b4\u30b7\u30c3\u30afPro B", "IWAp\u65b0\u30b4\u30b7\u30c3\u30af\u4f53B-Plus", "IwaNGoPro-Bd", "PNGoIWA-Bd", "I-OTF\u65b0\u30b4\u30b7\u30c3\u30afPro M", "IWAp\u65b0\u30b4\u30b7\u30c3\u30af\u4f53M-Plus", "IwaNGoPro-Md", "PNGoIWA-Md", "I-OTF\u65b0\u30b4\u30b7\u30c3\u30afPro R", "IWAp\u65b0\u30b4\u30b7\u30c3\u30af\u4f53R-Plus", "IwaNGoPro-Th", "PNGoIWA-Th", "I-OTF\u65b0\u30b4\u30b7\u30c3\u30afPro L", "IWAp\u65b0\u30b4\u30b7\u30c3\u30af\u4f53L-Plus", "IwaNGoPro-Lt", "PNGoIWA-Lt", "I-OTF\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9Pro H", "IWAp\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9-\u6975\u592aPlus", "IwaOGoPro-Hv", "POGothIWA-Hv", "I-OTF\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9Pro E", "IWAp\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9-\u7279\u592aPlus", "IwaOGoPro-Eb", "POGothIWA-Eb", "I-OTF\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9Pro B", "IWAp\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9-\u592aPlus", "IwaOGoPro-Bd", "POGothIWA-Bd", "I-OTF\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9Pro D", "IWAp\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9-\u4e2d\u592aPlus", "IwaOGoPro-Db", "POGothIWA-Dm", "I-OTF\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9Pro M", "IWAp\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9-\u4e2dPlus", "IwaOGoPro-Md", "POGothIWA-Md", "I-OTF\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9Pro L", "IWAp\u30b4\u30b7\u30c3\u30af\u30aa\u30fc\u30eb\u30c9-\u7d30Plus", "IwaOGoPro-Lt", "POGothIWA-Lt", "I-OTF\u660e\u671d\u30aa\u30fc\u30eb\u30c9Pro H", "IWAp\u6975\u592a\u660e\u671d\u30aa\u30fc\u30eb\u30c9Plus", "IwaOMinPro-Hv", "POMinIWA-Hv", "I-OTF\u660e\u671d\u30aa\u30fc\u30eb\u30c9Pro E", "IWAp\u7279\u592a\u660e\u671d\u30aa\u30fc\u30eb\u30c9Plus", "IwaOMinPro-Eb", "POMinIWA-Eb", "I-OTF\u660e\u671d\u30aa\u30fc\u30eb\u30c9Pro B", "IWAp\u592a\u660e\u671d\u30aa\u30fc\u30eb\u30c9Plus", "IwaOMinPro-Bd", "POMinIWA-Bd", "I-OTF\u660e\u671d\u30aa\u30fc\u30eb\u30c9Pro M", "IWAp\u4e2d\u660e\u671d\u30aa\u30fc\u30eb\u30c9Plus", "IwaOMinPro-Md", "POMinIWA-Md", "I-OTF\u660e\u671d\u30aa\u30fc\u30eb\u30c9Pro R", "IWAp\u660e\u671d\u30aa\u30fc\u30eb\u30c9Plus", "IwaOMinPro-Th", "POMinIWA-Th", "I-OTF\u660e\u671dPro E", "IWAp\u660e-\u7279\u592aPlus", "IwaMinPro-Eb", "PMinIWA-Hv", "I-OTF\u660e\u671dPro B", "IWAp\u660e-\u592aPlus", "IwaMinPro-Bd", "PMinIWA-Bd", "I-OTF\u660e\u671dPro M", "IWAp\u660e-\u4e2dPlus", "IwaMinPro-Md", "PMinIWA-Md", "I-OTF\u660e\u671dPro R", "IWAp\u660e-\u4e2d\u7d30Plus", "IwaMinPro-Th", "PMinIWA-Th", "I-OTF\u660e\u671dPro L", "IWAp\u660e-\u7d30Plus", "IwaMinPro-Lt", "PMinIWA-Lt", "Motoya Birch Std W6", "MotoyaBirchStd-W6", "MotoyaBirchStd-W6-83pv-RKSJ-H", "MotoyaExBirch W6", "MotoyaExBirch-W6-90msp-RKSJ-H", "\u30e2\u30c8\u30e4EX\u30d0\u30fc\u30c16", "\u30e2\u30c8\u30e4\u30d0\u30fc\u30c1 Std W6", "Motoya Birch Std W5", "MotoyaBirchStd-W5", "MotoyaBirchStd-W5-83pv-RKSJ-H", "MotoyaExBirch W5", "MotoyaExBirch-W5-90msp-RKSJ-H", "\u30e2\u30c8\u30e4EX\u30d0\u30fc\u30c15", "\u30e2\u30c8\u30e4\u30d0\u30fc\u30c1 Std W5", "Motoya Birch Std W3", "MotoyaBirchStd-W3", "MotoyaBirchStd-W3-83pv-RKSJ-H", "MotoyaExBirch W3", "MotoyaExBirch-W3-90msp-RKSJ-H", "\u30e2\u30c8\u30e4EX\u30d0\u30fc\u30c13", "\u30e2\u30c8\u30e4\u30d0\u30fc\u30c1 Std W3", "Motoya MaAporo Std W6", "MotoyaExMaAporo W6", "MotoyaExMaAporo-W6-90msp-RKSJ-H", "MotoyaMaAporoStd-W6", "MotoyaMaAporoStd-W6-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u4e38\u30a2\u30dd\u30ed6", "\u30e2\u30c8\u30e4\u4e38\u30a2\u30dd\u30ed Std W6", "Motoya MaAporo Std W4", "MotoyaExMaAporo W4", "MotoyaExMaAporo-W4-90msp-RKSJ-H", "MotoyaMaAporoStd-W4", "MotoyaMaAporoStd-W4-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EX\u4e38\u30a2\u30dd\u30ed4", "\u30e2\u30c8\u30e4\u4e38\u30a2\u30dd\u30ed Std W4", "MTY MotoyaExStAporo-W6-90msp-RKSJ-H", "Motoya StAporo Std W6", "MotoyaExStAporo W6", "MotoyaStAporoStd-W6", "MotoyaStAporoStd-W6-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EXst\u30a2\u30dd\u30ed6", "\u30e2\u30c8\u30e4st\u30a2\u30dd\u30ed Std W6", "MTY MotoyaExStAporo-W4-90msp-RKSJ-H", "Motoya StAporo Std W4", "MotoyaExStAporo W4", "MotoyaStAporoStd-W4", "MotoyaStAporoStd-W4-83pv-RKSJ-H", "\u30e2\u30c8\u30e4EXst\u30a2\u30dd\u30ed4", "\u30e2\u30c8\u30e4st\u30a2\u30dd\u30ed Std W4", "HOT-Kakukuzusishu Std B", "HOT-Kakukuzusishu Std B Regular", "HOT-\u767d\u821f\u89d2\u5d29\u6731\u6587 Std B", "HOT-\u767d\u821f\u89d2\u5d29\u6731\u6587 Std B Regular", "KakukuzusishuStd-B", "HOT-Kakukuzusihaku Std B", "HOT-Kakukuzusihaku Std B Regular", "HOT-\u767d\u821f\u89d2\u5d29\u767d\u6587 Std B", "HOT-\u767d\u821f\u89d2\u5d29\u767d\u6587 Std B Regular", "KakukuzusihakuStd-B", "HOT-KujotenR Std L", "HOT-KujotenR Std L Regular", "HOT-\u767d\u821f\u4e5d\u7573\u7bc6\u30e9\u30d5 Std L", "HOT-\u767d\u821f\u4e5d\u7573\u7bc6\u30e9\u30d5 Std L Regular", "KujotenRStd-L", "HOT-Kujotenhoso Std EL", "HOT-Kujotenhoso Std EL Regular", "HOT-\u767d\u821f\u4e5d\u7573\u7bc6\u7d30 Std EL", "HOT-\u767d\u821f\u4e5d\u7573\u7bc6\u7d30 Std EL Regular", "KujotenhosoStd-EL", "HOT-Tenkoin Std M", "HOT-Tenkoin Std M Regular", "HOT-\u767d\u821f\u7bc6\u53e4\u5370 Std M", "HOT-\u767d\u821f\u7bc6\u53e4\u5370 Std M Regular", "TenkoinStd-M", "FTenshoStd-D", "HOT-FTensho Std D", "HOT-FTensho Std D Regular", "HOT-\u767d\u821f\u592a\u7bc6\u66f8 Std D", "HOT-\u767d\u821f\u592a\u7bc6\u66f8 Std D Regular", "HOT-Tensho Std M", "HOT-Tensho Std M Regular", "HOT-\u767d\u821f\u7bc6\u66f8 Std M", "HOT-\u767d\u821f\u7bc6\u66f8 Std M Regular", "TenshoStd-M", "HOT-HTensho Std L", "HOT-HTensho Std L Regular", "HOT-\u767d\u821f\u7d30\u7bc6\u66f8 Std L", "HOT-\u767d\u821f\u7d30\u7bc6\u66f8 Std L Regular", "HTenshoStd-L", "HOT-Syoten Std L", "HOT-Syoten Std L Regular", "HOT-\u767d\u821f\u5c0f\u7bc6 Std L", "HOT-\u767d\u821f\u5c0f\u7bc6 Std L Regular", "SyotenStd-L", "HOT-Koukotsu Std M", "HOT-Koukotsu Std M Regular", "HOT-\u767d\u821f\u7532\u9aa8 Std M", "HOT-\u767d\u821f\u7532\u9aa8 Std M Regular", "KoukotsuStd-M", "HOT-Ohige115 Std H", "HOT-Ohige115 Std H Regular", "HOT-\u5927\u9aed115 Std H", "HOT-\u5927\u9aed115 Std H Regular", "Ohige115Std-H", "HOT-Ohige113 Std H", "HOT-Ohige113 Std H Regular", "HOT-\u5927\u9aed113 Std H", "HOT-\u5927\u9aed113 Std H Regular", "Ohige113Std-H", "HOT-KyoMurasaki Std E", "HOT-KyoMurasaki Std E Regular", "HOT-\u4eac\u7d2b Std E", "HOT-\u4eac\u7d2b Std E Regular", "KyoMurasakiStd-E", "HOT-Kintoki Std U", "HOT-Kintoki Std U Regular", "HOT-\u91d1\u6642 Std U", "HOT-\u91d1\u6642 Std U Regular", "KintokiStd-U", "HOT-Kasumi Std U", "HOT-Kasumi Std U Regular", "HOT-\u82b1\u58a8 Std U", "HOT-\u82b1\u58a8 Std U Regular", "KasumiStd-U", "BukotsuStd-U", "HOT-Bukotsu Std U", "HOT-Bukotsu Std U Regular", "HOT-\u6b66\u9aa8 Std U", "HOT-\u6b66\u9aa8 Std U Regular", "FOT-TsukuOldGothic Std B", "FOT-TsukuOldGothic Std B Regular", "FOT-\u7b51\u7d2b\u30aa\u30fc\u30eb\u30c9\u30b4\u30b7\u30c3\u30af Std B", "FOT-\u7b51\u7d2b\u30aa\u30fc\u30eb\u30c9\u30b4\u30b7\u30c3\u30af Std B Regular", "TsukuOldGothicStd-B", "FOT-TsukuCOldMin Pr6N R", "FOT-TsukuCOldMin Pr6N R Regular", "FOT-\u7b51\u7d2bC\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N R", "FOT-\u7b51\u7d2bC\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6N R Regular", "TsukuCOldMinPr6N-R", "FOT-TsukuCOldMin Pr6 R", "FOT-TsukuCOldMin Pr6 R Regular", "FOT-\u7b51\u7d2bC\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 R", "FOT-\u7b51\u7d2bC\u30aa\u30fc\u30eb\u30c9\u660e\u671d Pr6 R Regular", "TsukuCOldMinPr6-R", "FOT-Skip Std M", "FOT-Skip Std M Regular", "FOT-\u30b9\u30ad\u30c3\u30d7 Std M", "FOT-\u30b9\u30ad\u30c3\u30d7 Std M Regular", "SkipStd-M", "FOT-Skip Std L", "FOT-Skip Std L Regular", "FOT-\u30b9\u30ad\u30c3\u30d7 Std L", "FOT-\u30b9\u30ad\u30c3\u30d7 Std L Regular", "SkipStd-L", "FOT-Skip Std E", "FOT-Skip Std E Regular", "FOT-\u30b9\u30ad\u30c3\u30d7 Std E", "FOT-\u30b9\u30ad\u30c3\u30d7 Std E Regular", "SkipStd-E", "FOT-Skip Std D", "FOT-Skip Std D Regular", "FOT-\u30b9\u30ad\u30c3\u30d7 Std D", "FOT-\u30b9\u30ad\u30c3\u30d7 Std D Regular", "SkipStd-D", "FOT-arc Std R", "FOT-arc Std R Regular", "FOT-\u30a2\u30fc\u30af Std R", "FOT-\u30a2\u30fc\u30af Std R Regular", "arcStd-R", "Yamamotoan", "Yamamotoan Regular", "YamamotoanStdN", "YamamotoanStdN R", "YamamotoanStdN-R", "YamamotoanStdN-R-83pv-RKSJ-H", "\u5c71\u672c\u5eb5 StdN R", "\u5c71\u672c\u5eb5StdN R", "MaruminYoshino", "MaruminYoshino Regular", "MaruminYoshino StdN R", "MaruminYoshinoStdN-R", "MaruminYoshinoStdN-R-83pv-RKSJ-H", "\u4e38\u660eYoshino", "\u4e38\u660eYoshino StdN R", "MaruminTikuma", "MaruminTikuma Regular", "MaruminTikuma StdN R", "MaruminTikumaStdN-R", "MaruminTikumaStdN-R-83pv-RKSJ-H", "\u4e38\u660eTikuma", "\u4e38\u660eTikuma StdN R", "MaruminShinano", "MaruminShinano Regular", "MaruminShinano StdN R", "MaruminShinanoStdN-R", "MaruminShinanoStdN-R-83pv-RKSJ-H", "\u4e38\u660eShinano", "\u4e38\u660eShinano StdN R", "MaruminKiso", "MaruminKiso Regular", "MaruminKiso StdN R", "MaruminKisoStdN-R", "MaruminKisoStdN-R-83pv-RKSJ-H", "\u4e38\u660eKiso", "\u4e38\u660eKiso StdN R", "MaruminKatura", "MaruminKatura Regular", "MaruminKatura StdN R", "MaruminKaturaStdN-R", "MaruminKaturaStdN-R-83pv-RKSJ-H", "\u4e38\u660eKatura", "\u4e38\u660eKatura StdN R", "MaruminFuji", "MaruminFuji Regular", "MaruminFuji StdN R", "MaruminFujiStdN-R", "MaruminFujiStdN-R-83pv-RKSJ-H", "\u4e38\u660eFuji", "\u4e38\u660eFuji StdN R", "MaruminOld", "MaruminOld Regular", "MaruminOld StdN R", "MaruminOldStdN", "MaruminOldStdN R", "MaruminOldStdN-R", "MaruminOldStdN-R-83pv-RKSJ-H", "\u4e38\u660e\u30aa\u30fc\u30eb\u30c9", "\u4e38\u660e\u30aa\u30fc\u30eb\u30c9 StdN R", "\u4e38\u660e\u30aa\u30fc\u30eb\u30c9StdN", "\u4e38\u660e\u30aa\u30fc\u30eb\u30c9StdN R", "Yuji Boku Std", "Yuji Boku Std R", "Yuji-boku", "YujiBokuStd-R", "YujiBokuStd-R-83pv-RKSJ-H", "\u4f51\u5b57 \u6734 Std R", "\u4f51\u5b57 \u6734 StdN R", "\u4f51\u5b57\uff0f\u6734", "Yuji Mai Std", "Yuji Mai Std R", "Yuji-mai", "YujiMaiStd-R", "YujiMaiStd-R-83pv-RKSJ-H", "\u4f51\u5b57 \u821e Std R", "\u4f51\u5b57 \u821e StdN R", "\u4f51\u5b57\uff0f\u821e", "Yuji Shuku Std R", "Yuji Syuku Std", "Yuji-syuku", "YujiShukuStd-R", "YujiShukuStd-R-83pv-RKSJ-H", "\u4f51\u5b57 \u8085 Std R", "\u4f51\u5b57 \u8085 StdN R", "\u4f51\u5b57\uff0f\u8085", "Maru Maru Gothic CLr StdN R", "MaruMaruGCLrStdN-R-83pv-RKSJ-H", "MaruMaruGothicCLrStdN-R", "MarumaruGothicC&Lr", "MarumaruGothicC&Lr Regular", "\u4e38\u4e38gothic C&Lr", "\u4e38\u4e38\u30b4\u30b7\u30c3\u30afCLr StdN R", "Maru Maru Gothic CSr StdN R", "MaruMaruGCSrStdN-R-83pv-RKSJ-H", "MaruMaruGothicCSrStdN-R", "MarumaruGothicC&Sr", "MarumaruGothicC&Sr Regular", "\u4e38\u4e38gothic C&Sr", "\u4e38\u4e38\u30b4\u30b7\u30c3\u30afCSr StdN R", "Maru Maru Gothic BLr StdN R", "MaruMaruGBLrStdN-R-83pv-RKSJ-H", "MaruMaruGothicBLrStdN-R", "MarumaruGothicB&Lr", "MarumaruGothicB&Lr Regular", "\u4e38\u4e38gothic B&Lr", "\u4e38\u4e38\u30b4\u30b7\u30c3\u30afBLr StdN R", "Maru Maru Gothic BSr StdN R", "MaruMaruGBSrStdN-R-83pv-RKSJ-H", "MaruMaruGothicBSrStdN-R", "MarumaruGothicB&Sr", "MarumaruGothicB&Sr Regular", "\u4e38\u4e38gothic B&Sr", "\u4e38\u4e38\u30b4\u30b7\u30c3\u30afBSr StdN R", "Maru Maru Gothic ALr StdN R", "MaruMaruGALrStdN-R-83pv-RKSJ-H", "MaruMaruGothicALrStdN-R", "MarumaruGothicA&Lr", "MarumaruGothicA&Lr Regular", "\u4e38\u4e38gothic A&Lr", "\u4e38\u4e38\u30b4\u30b7\u30c3\u30afALr StdN R", "Maru Maru Gothic ASr StdN R", "MaruMaruGASrStdN-R-83pv-RKSJ-H", "MaruMaruGothicASrStdN-R", "MarumaruGothicA&Sr", "MarumaruGothicA&Sr Regular", "\u4e38\u4e38gothic A&Sr", "\u4e38\u4e38\u30b4\u30b7\u30c3\u30afASr StdN R", "Iroha 32sakura", "Iroha32sakuraStdN-R", "iroha 32sakura StdN", "iroha 32sakura StdN R", "iroha-32sakura", "iroha-32sakura Regular", "iroha32sakuraStdN-R-83pv-RKSJ-H", "Iroha 31nire", "Iroha31nireStdN-R", "iroha 31nire StdN", "iroha 31nire StdN R", "iroha-31nire", "iroha-31nire Regular", "iroha31nireStdN-R-83pv-RKSJ-H", "Iroha 30momiji", "Iroha30momijiStdN-R", "iroha 30momiji StdN", "iroha 30momiji StdN R", "iroha-30momiji", "iroha-30momiji Regular", "iroha30momijiStdN-R-83pv-RKSJ-H", "Iroha 29ume", "Iroha29umeStdN-R", "iroha 29ume StdN", "iroha 29ume StdN R", "iroha-29ume", "iroha-29ume Regular", "iroha29umeStdN-R-83pv-RKSJ-H", "Iroha 28kiri", "Iroha28kiriStdN-R", "iroha 28kiri StdN", "iroha 28kiri StdN R", "iroha-28kiri", "iroha-28kiri Regular", "iroha28kiriStdN-R-83pv-RKSJ-H", "Iroha 27keyaki", "Iroha27keyakiStdN-R", "iroha 27keyaki StdN", "iroha 27keyaki StdN R", "iroha-27keyaki", "iroha-27keyaki Regular", "iroha27keyakiStdN-R-83pv-RKSJ-H", "Iroha 26tubaki", "Iroha26tubakiStdN-R", "iroha 26tubaki StdN", "iroha 26tubaki StdN R", "iroha-26tubaki", "iroha-26tubaki Regular", "iroha26tubakiStdN-R-83pv-RKSJ-H", "Iroha 25icho", "Iroha25ichoStdN-R", "iroha 25icho StdN", "iroha 25icho StdN R", "iroha-25icho", "iroha-25icho Regular", "iroha25ichoStdN-R-83pv-RKSJ-H", "Iroha 24matu", "Iroha24matuStdN-R", "iroha 24matu StdN", "iroha 24matu StdN R", "iroha-24matu", "iroha-24matu Regular", "iroha24matuStdN-R-83pv-RKSJ-H", "Iroha 23kaede", "Iroha23kaedeStdN-R", "iroha 23kaede StdN", "iroha 23kaede StdN R", "iroha-23kaede", "iroha-23kaede Regular", "iroha23kaedeStdN-R-83pv-RKSJ-H", "Iroha 22momi", "Iroha22momiStdN-R", "iroha 22momi StdN", "iroha 22momi StdN R", "iroha-22momi", "iroha-22momi Regular", "iroha22momiStdN-R-83pv-RKSJ-H", "Iroha 21popura", "iroha 21popura StdN", "iroha 21popura StdN R", "iroha-21popura", "iroha-21popura Regular", "iroha21popuraStdN-R", "iroha21popuraStdN-R-83pv-RKSJ-H", "AokaneStd-EB", "FOT-Aokane Std EB", "FOT-Aokane Std EB Regular", "FOT-\u3042\u304a\u304b\u306d Std EB", "FOT-\u3042\u304a\u304b\u306d Std EB Regular", "BabyPopStd-EB", "FOT-BabyPop Std EB", "FOT-BabyPop Std EB Regular", "FOT-\u30d9\u30d3\u30dd\u30c3\u30d7 Std EB", "FOT-\u30d9\u30d3\u30dd\u30c3\u30d7 Std EB Regular", "FOT-TsukuAntiqueLMin Std L", "FOT-TsukuAntiqueLMin Std L Regular", "FOT-\u7b51\u7d2b\u30a2\u30f3\u30c6\u30a3\u30fc\u30afL\u660e\u671d Std L", "FOT-\u7b51\u7d2b\u30a2\u30f3\u30c6\u30a3\u30fc\u30afL\u660e\u671d Std L Regular", "TsukuAntiqueLMinStd-L", "FOT-TsukuAntiqueSMin Std L", "FOT-TsukuAntiqueSMin Std L Regular", "FOT-\u7b51\u7d2b\u30a2\u30f3\u30c6\u30a3\u30fc\u30afS\u660e\u671d Std L", "FOT-\u7b51\u7d2b\u30a2\u30f3\u30c6\u30a3\u30fc\u30afS\u660e\u671d Std L Regular", "TsukuAntiqueSMinStd-L", "FOT-TsukuBMin Pr6 L", "FOT-TsukuBMin Pr6 L Regular", "FOT-\u7b51\u7d2bB\u660e\u671d Pr6 L", "FOT-\u7b51\u7d2bB\u660e\u671d Pr6 L Regular", "TsukuBMinPr6-L", "FOT-TsukuBMin Pr6N L", "FOT-TsukuBMin Pr6N L Regular", "FOT-\u7b51\u7d2bB\u660e\u671d Pr6N L", "FOT-\u7b51\u7d2bB\u660e\u671d Pr6N L Regular", "TsukuBMinPr6N-L", "FOT-UDKakugo_Large Pr6 B", "FOT-UDKakugo_Large Pr6 B Regular", "FOT-UDKakugo_Large Pro B", "FOT-UDKakugo_Large Pro B Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 B", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 B Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pro B", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pro B Regular", "UDKakugo_LargePr6-B", "UDKakugo_LargePro-B", "FOT-UDKakugo_Large Pr6 DB", "FOT-UDKakugo_Large Pr6 DB Regular", "FOT-UDKakugo_Large Pro DB", "FOT-UDKakugo_Large Pro DB Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 DB", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 DB Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pro DB", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pro DB Regular", "UDKakugo_LargePr6-DB", "UDKakugo_LargePro-DB", "FOT-UDKakugo_Large Pr6 L", "FOT-UDKakugo_Large Pr6 L Regular", "FOT-UDKakugo_Large Pro L", "FOT-UDKakugo_Large Pro L Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 L", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 L Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pro L", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pro L Regular", "UDKakugo_LargePr6-L", "UDKakugo_LargePro-L", "FOT-UDKakugo_Large Pr6 M", "FOT-UDKakugo_Large Pr6 M Regular", "FOT-UDKakugo_Large Pro M", "FOT-UDKakugo_Large Pro M Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 M", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 M Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pro M", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pro M Regular", "UDKakugo_LargePr6-M", "UDKakugo_LargePro-M", "FOT-UDKakugo_Large Pr6 R", "FOT-UDKakugo_Large Pr6 R Regular", "FOT-UDKakugo_Large Pro R", "FOT-UDKakugo_Large Pro R Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 R", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 R Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pro R", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pro R Regular", "UDKakugo_LargePr6-R", "UDKakugo_LargePro-R", "FOT-UDMarugo_Large Pr6 B", "FOT-UDMarugo_Large Pr6 B Regular", "FOT-UDMarugo_Large Pro B", "FOT-UDMarugo_Large Pro B Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 B", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 B Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pro B", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pro B Regular", "UDMarugo_LargePr6-B", "UDMarugo_LargePro-B", "FOT-UDMarugo_Large Pr6 DB", "FOT-UDMarugo_Large Pr6 DB Regular", "FOT-UDMarugo_Large Pro DB", "FOT-UDMarugo_Large Pro DB Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 DB", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 DB Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pro DB", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pro DB Regular", "UDMarugo_LargePr6-DB", "UDMarugo_LargePro-DB", "FOT-UDMarugo_Large Pr6 L", "FOT-UDMarugo_Large Pr6 L Regular", "FOT-UDMarugo_Large Pro L", "FOT-UDMarugo_Large Pro L Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 L", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 L Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pro L", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pro L Regular", "UDMarugo_LargePr6-L", "UDMarugo_LargePro-L", "FOT-UDMarugo_Large Pr6 M", "FOT-UDMarugo_Large Pr6 M Regular", "FOT-UDMarugo_Large Pro M", "FOT-UDMarugo_Large Pro M Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 M", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 M Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pro M", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pro M Regular", "UDMarugo_LargePr6-M", "UDMarugo_LargePro-M", "FOT-UDMincho Pr6 B", "FOT-UDMincho Pr6 B Regular", "FOT-UDMincho Pro B", "FOT-UDMincho Pro B Regular", "FOT-UD\u660e\u671d Pr6 B", "FOT-UD\u660e\u671d Pr6 B Regular", "FOT-UD\u660e\u671d Pro B", "FOT-UD\u660e\u671d Pro B Regular", "UDMinchoPr6-B", "UDMinchoPro-B", "FOT-UDMincho Pr6 DB", "FOT-UDMincho Pr6 DB Regular", "FOT-UDMincho Pro DB", "FOT-UDMincho Pro DB Regular", "FOT-UD\u660e\u671d Pr6 DB", "FOT-UD\u660e\u671d Pr6 DB Regular", "FOT-UD\u660e\u671d Pro DB", "FOT-UD\u660e\u671d Pro DB Regular", "UDMinchoPr6-DB", "UDMinchoPro-DB", "FOT-UDMincho Pr6 L", "FOT-UDMincho Pr6 L Regular", "FOT-UDMincho Pro L", "FOT-UDMincho Pro L Regular", "FOT-UD\u660e\u671d Pr6 L", "FOT-UD\u660e\u671d Pr6 L Regular", "FOT-UD\u660e\u671d Pro L", "FOT-UD\u660e\u671d Pro L Regular", "UDMinchoPr6-L", "UDMinchoPro-L", "FOT-UDMincho Pr6 M", "FOT-UDMincho Pr6 M Regular", "FOT-UDMincho Pro M", "FOT-UDMincho Pro M Regular", "FOT-UD\u660e\u671d Pr6 M", "FOT-UD\u660e\u671d Pr6 M Regular", "FOT-UD\u660e\u671d Pro M", "FOT-UD\u660e\u671d Pro M Regular", "UDMinchoPr6-M", "UDMinchoPro-M", "DNP ShueiMGoStd B", "DNP ShueiMGoStd B Regular", "DNP \u79c0\u82f1\u4e38\u30b4\u30b7\u30c3\u30af Std B", "DNP \u79c0\u82f1\u4e38\u30b4\u30b7\u30c3\u30af Std B Regular", "DNPShueiMGoStd-B", "\u79c0\u82f1\u4e38\u30b4\u30b7\u30c3\u30af B", "DNP ShueiMGoStd L", "DNP ShueiMGoStd L Regular", "DNP \u79c0\u82f1\u4e38\u30b4\u30b7\u30c3\u30af Std L", "DNP \u79c0\u82f1\u4e38\u30b4\u30b7\u30c3\u30af Std L Regular", "DNPShueiMGoStd-L", "\u79c0\u82f1\u4e38\u30b4\u30b7\u30c3\u30af L", "DNP ShueiGoGinStd B", "DNP ShueiGoGinStd B Regular", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u9280 Std B", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u9280 Std B Regular", "DNPShueiGoGinStd-B", "\u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u9280 B", "DNP ShueiGoGinStd L", "DNP ShueiGoGinStd L Regular", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u9280 Std L", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u9280 Std L Regular", "DNPShueiGoGinStd-L", "\u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u9280 L", "DNP ShueiGoKinStd B", "DNP ShueiGoKinStd B Regular", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u91d1 Std B", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u91d1 Std B Regular", "DNPShueiGoKinStd-B", "\u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u91d1 B", "DNP ShueiGoKinStd L", "DNP ShueiGoKinStd L Regular", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u91d1 Std L", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u91d1 Std L Regular", "DNPShueiGoKinStd-L", "\u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u91d1 L", "DNP \u79c0\u82f1\u521d\u53f7\u660e\u671d Std H", "DNP \u79c0\u82f1\u521d\u53f7\u660e\u671d Std H Bold", "DNPShueiShogoMinStd H", "DNPShueiShogoMinStd H Bold", "DNPShueiShogoMinStd-H", "\u79c0\u82f1\u521d\u53f7\u660e\u671d", "DNP ShueiYMinStd B", "DNP ShueiYMinStd B Regular", "DNP \u79c0\u82f1\u6a2a\u592a\u660e\u671d Std B", "DNP \u79c0\u82f1\u6a2a\u592a\u660e\u671d Std B Regular", "DNPShueiYMinStd-B", "\u79c0\u82f1\u6a2a\u592a\u660e\u671d B", "DNP ShueiYMinStd M", "DNP ShueiYMinStd M Regular", "DNP \u79c0\u82f1\u6a2a\u592a\u660e\u671d Std M", "DNP \u79c0\u82f1\u6a2a\u592a\u660e\u671d Std M Regular", "DNPShueiYMinStd-M", "\u79c0\u82f1\u6a2a\u592a\u660e\u671d M", "DNP \u79c0\u82f1\u660e\u671d Pr6 B", "DNP \u79c0\u82f1\u660e\u671d Pr6 B Regular", "DNPShueiMinPr6 B", "DNPShueiMinPr6 B Regular", "DNPShueiMinPr6-B", "\u79c0\u82f1\u660e\u671d B", "DNP \u79c0\u82f1\u660e\u671d Pr6 M", "DNP \u79c0\u82f1\u660e\u671d Pr6 M Regular", "DNPShueiMinPr6 M", "DNPShueiMinPr6 M Regular", "DNPShueiMinPr6-M", "\u79c0\u82f1\u660e\u671d M", "DNP \u79c0\u82f1\u660e\u671d Pr6 L", "DNP \u79c0\u82f1\u660e\u671d Pr6 L Regular", "DNPShueiMinPr6 L", "DNPShueiMinPr6 L Regular", "DNPShueiMinPr6-L", "\u79c0\u82f1\u660e\u671d L", "FOT-UDKakugoC80 Pro B", "FOT-UDKakugoC80 Pro B Regular", "FOT-UD\u89d2\u30b4C80 Pro B", "FOT-UD\u89d2\u30b4C80 Pro B Regular", "UDKakugoC80Pro-B", "FOT-UDKakugoC80 Pro DB", "FOT-UDKakugoC80 Pro DB Regular", "FOT-UD\u89d2\u30b4C80 Pro DB", "FOT-UD\u89d2\u30b4C80 Pro DB Regular", "UDKakugoC80Pro-DB", "FOT-UDKakugoC80 Pro M", "FOT-UDKakugoC80 Pro M Regular", "FOT-UD\u89d2\u30b4C80 Pro M", "FOT-UD\u89d2\u30b4C80 Pro M Regular", "UDKakugoC80Pro-M", "FOT-UDKakugoC80 Pro R", "FOT-UDKakugoC80 Pro R Regular", "FOT-UD\u89d2\u30b4C80 Pro R", "FOT-UD\u89d2\u30b4C80 Pro R Regular", "UDKakugoC80Pro-R", "FOT-UDKakugoC80 Pro L", "FOT-UDKakugoC80 Pro L Regular", "FOT-UD\u89d2\u30b4C80 Pro L", "FOT-UD\u89d2\u30b4C80 Pro L Regular", "UDKakugoC80Pro-L", "FOT-UDKakugoC70 Pro B", "FOT-UDKakugoC70 Pro B Regular", "FOT-UD\u89d2\u30b4C70 Pro B", "FOT-UD\u89d2\u30b4C70 Pro B Regular", "UDKakugoC70Pro-B", "FOT-UDKakugoC70 Pro DB", "FOT-UDKakugoC70 Pro DB Regular", "FOT-UD\u89d2\u30b4C70 Pro DB", "FOT-UD\u89d2\u30b4C70 Pro DB Regular", "UDKakugoC70Pro-DB", "FOT-UDKakugoC70 Pro M", "FOT-UDKakugoC70 Pro M Regular", "FOT-UD\u89d2\u30b4C70 Pro M", "FOT-UD\u89d2\u30b4C70 Pro M Regular", "UDKakugoC70Pro-M", "FOT-UDKakugoC70 Pro R", "FOT-UDKakugoC70 Pro R Regular", "FOT-UD\u89d2\u30b4C70 Pro R", "FOT-UD\u89d2\u30b4C70 Pro R Regular", "UDKakugoC70Pro-R", "FOT-UDKakugoC70 Pro L", "FOT-UDKakugoC70 Pro L Regular", "FOT-UD\u89d2\u30b4C70 Pro L", "FOT-UD\u89d2\u30b4C70 Pro L Regular", "UDKakugoC70Pro-L", "FOT-UDKakugoC60 Pro B", "FOT-UDKakugoC60 Pro B Regular", "FOT-UD\u89d2\u30b4C60 Pro B", "FOT-UD\u89d2\u30b4C60 Pro B Regular", "UDKakugoC60Pro-B", "FOT-UDKakugoC60 Pro DB", "FOT-UDKakugoC60 Pro DB Regular", "FOT-UD\u89d2\u30b4C60 Pro DB", "FOT-UD\u89d2\u30b4C60 Pro DB Regular", "UDKakugoC60Pro-DB", "FOT-UDKakugoC60 Pro M", "FOT-UDKakugoC60 Pro M Regular", "FOT-UD\u89d2\u30b4C60 Pro M", "FOT-UD\u89d2\u30b4C60 Pro M Regular", "UDKakugoC60Pro-M", "FOT-UDKakugoC60 Pro R", "FOT-UDKakugoC60 Pro R Regular", "FOT-UD\u89d2\u30b4C60 Pro R", "FOT-UD\u89d2\u30b4C60 Pro R Regular", "UDKakugoC60Pro-R", "FOT-UDKakugoC60 Pro L", "FOT-UDKakugoC60 Pro L Regular", "FOT-UD\u89d2\u30b4C60 Pro L", "FOT-UD\u89d2\u30b4C60 Pro L Regular", "UDKakugoC60Pro-L", "DNP \u79c0\u82f1\u660e\u671d Pr6N M", "DNP \u79c0\u82f1\u660e\u671d Pr6N M Regular", "DNPShueiMinPr6N M", "DNPShueiMinPr6N M Regular", "DNPShueiMinPr6N-M", "\u79c0\u82f1\u660e\u671d M JIS2004", "DNP \u79c0\u82f1\u660e\u671d Pr6N B", "DNP \u79c0\u82f1\u660e\u671d Pr6N B Regular", "DNPShueiMinPr6N B", "DNPShueiMinPr6N B Regular", "DNPShueiMinPr6N-B", "\u79c0\u82f1\u660e\u671d B JIS2004", "DNP \u79c0\u82f1\u660e\u671d Pr6N L", "DNP \u79c0\u82f1\u660e\u671d Pr6N L Regular", "DNPShueiMinPr6N L", "DNPShueiMinPr6N L Regular", "DNPShueiMinPr6N-L", "\u79c0\u82f1\u660e\u671d L JIS2004", "Gekai07Std-R", "HOT-Gekai07 Std R", "HOT-Gekai07 Std R Regular", "HOT-\u30b2\u30fc\u30ab\u30a407 Std R", "HOT-\u30b2\u30fc\u30ab\u30a407 Std R Regular", "SBTH-Gekai07-R", "Gekai11Std-R", "HOT-Gekai11 Std R", "HOT-Gekai11 Std R Regular", "HOT-\u30b2\u30fc\u30ab\u30a411 Std R", "HOT-\u30b2\u30fc\u30ab\u30a411 Std R Regular", "SBTH-Gekai11-R", "Gekai15Std-R", "HOT-Gekai15 Std R", "HOT-Gekai15 Std R Regular", "HOT-\u30b2\u30fc\u30ab\u30a415 Std R", "HOT-\u30b2\u30fc\u30ab\u30a415 Std R Regular", "SBTH-Gekai15-R", "Shin StdN 12K", "ShinStdN-12K", "ShinStdN-12K-83pv-RKSJ-H", "\u82af StdN 12K", "Shin StdN 6K", "ShinStdN-6K", "ShinStdN-6K-83pv-RKSJ-H", "\u82af StdN 6K", "Shin StdN 24K", "ShinStdN-24K", "ShinStdN-24K-83pv-RKSJ-H", "\u82af StdN 24K", "FOT-TsukuAntiqueSGo Std B", "FOT-TsukuAntiqueSGo Std B Regular", "FOT-\u7b51\u7d2b\u30a2\u30f3\u30c6\u30a3\u30fc\u30afS\u30b4 Std B", "FOT-\u7b51\u7d2b\u30a2\u30f3\u30c6\u30a3\u30fc\u30afS\u30b4 Std B Regular", "TsukuAntiqueSGoStd-B", "FOT-TsukuAntiqueLGo Std B", "FOT-TsukuAntiqueLGo Std B Regular", "FOT-\u7b51\u7d2b\u30a2\u30f3\u30c6\u30a3\u30fc\u30afL\u30b4 Std B", "FOT-\u7b51\u7d2b\u30a2\u30f3\u30c6\u30a3\u30fc\u30afL\u30b4 Std B Regular", "TsukuAntiqueLGoStd-B", "FOT-Gospel Std EB", "FOT-Gospel Std EB Regular", "FOT-\u30b4\u30b9\u30da\u30eb Std EB", "FOT-\u30b4\u30b9\u30da\u30eb Std EB Regular", "GospelStd-EB", "FOT-UDMincho Pr6N B", "FOT-UDMincho Pr6N B Regular", "FOT-UD\u660e\u671d Pr6N B", "FOT-UD\u660e\u671d Pr6N B Regular", "UDMinchoPr6N-B", "FOT-UDMincho Pr6N DB", "FOT-UDMincho Pr6N DB Regular", "FOT-UD\u660e\u671d Pr6N DB", "FOT-UD\u660e\u671d Pr6N DB Regular", "UDMinchoPr6N-DB", "FOT-UDMincho Pr6N M", "FOT-UDMincho Pr6N M Regular", "FOT-UD\u660e\u671d Pr6N M", "FOT-UD\u660e\u671d Pr6N M Regular", "UDMinchoPr6N-M", "FOT-UDMincho Pr6N L", "FOT-UDMincho Pr6N L Regular", "FOT-UD\u660e\u671d Pr6N L", "FOT-UD\u660e\u671d Pr6N L Regular", "UDMinchoPr6N-L", "FOT-UDMarugo_Small Pr6N B", "FOT-UDMarugo_Small Pr6N B Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N B", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N B Regular", "UDMarugo_SmallPr6N-B", "FOT-UDMarugo_Small Pr6N DB", "FOT-UDMarugo_Small Pr6N DB Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N DB", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N DB Regular", "UDMarugo_SmallPr6N-DB", "FOT-UDMarugo_Small Pr6N M", "FOT-UDMarugo_Small Pr6N M Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N M", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N M Regular", "UDMarugo_SmallPr6N-M", "FOT-UDMarugo_Small Pr6N L", "FOT-UDMarugo_Small Pr6N L Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N L", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N L Regular", "UDMarugo_SmallPr6N-L", "FOT-UDMarugo_Small Pr6 B", "FOT-UDMarugo_Small Pr6 B Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 B", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 B Regular", "UDMarugo_SmallPr6-B", "FOT-UDMarugo_Small Pr6 DB", "FOT-UDMarugo_Small Pr6 DB Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 DB", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 DB Regular", "UDMarugo_SmallPr6-DB", "FOT-UDMarugo_Small Pr6 M", "FOT-UDMarugo_Small Pr6 M Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 M", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 M Regular", "UDMarugo_SmallPr6-M", "FOT-UDMarugo_Small Pr6 L", "FOT-UDMarugo_Small Pr6 L Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 L", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 L Regular", "UDMarugo_SmallPr6-L", "FOT-UDMarugo_Large Pr6N B", "FOT-UDMarugo_Large Pr6N B Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N B", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N B Regular", "UDMarugo_LargePr6N-B", "FOT-UDMarugo_Large Pr6N DB", "FOT-UDMarugo_Large Pr6N DB Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N DB", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N DB Regular", "UDMarugo_LargePr6N-DB", "FOT-UDMarugo_Large Pr6N M", "FOT-UDMarugo_Large Pr6N M Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N M", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N M Regular", "UDMarugo_LargePr6N-M", "FOT-UDMarugo_Large Pr6N L", "FOT-UDMarugo_Large Pr6N L Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N L", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N L Regular", "UDMarugo_LargePr6N-L", "FOT-UDKakugo_Small Pr6N B", "FOT-UDKakugo_Small Pr6N B Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N B", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N B Regular", "UDKakugo_SmallPr6N-B", "FOT-UDKakugo_Small Pr6N DB", "FOT-UDKakugo_Small Pr6N DB Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N DB", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N DB Regular", "UDKakugo_SmallPr6N-DB", "FOT-UDKakugo_Small Pr6N M", "FOT-UDKakugo_Small Pr6N M Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N M", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N M Regular", "UDKakugo_SmallPr6N-M", "FOT-UDKakugo_Small Pr6N R", "FOT-UDKakugo_Small Pr6N R Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N R", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N R Regular", "UDKakugo_SmallPr6N-R", "FOT-UDKakugo_Small Pr6N L", "FOT-UDKakugo_Small Pr6N L Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N L", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N L Regular", "UDKakugo_SmallPr6N-L", "FOT-UDKakugo_Small Pr6 B", "FOT-UDKakugo_Small Pr6 B Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 B", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 B Regular", "UDKakugo_SmallPr6-B", "FOT-UDKakugo_Small Pr6 DB", "FOT-UDKakugo_Small Pr6 DB Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 DB", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 DB Regular", "UDKakugo_SmallPr6-DB", "FOT-UDKakugo_Small Pr6 M", "FOT-UDKakugo_Small Pr6 M Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 M", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 M Regular", "UDKakugo_SmallPr6-M", "FOT-UDKakugo_Small Pr6 R", "FOT-UDKakugo_Small Pr6 R Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 R", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 R Regular", "UDKakugo_SmallPr6-R", "FOT-UDKakugo_Small Pr6 L", "FOT-UDKakugo_Small Pr6 L Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 L", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 L Regular", "UDKakugo_SmallPr6-L", "FOT-UDKakugo_Large Pr6N B", "FOT-UDKakugo_Large Pr6N B Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N B", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N B Regular", "UDKakugo_LargePr6N-B", "FOT-UDKakugo_Large Pr6N DB", "FOT-UDKakugo_Large Pr6N DB Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N DB", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N DB Regular", "UDKakugo_LargePr6N-DB", "FOT-UDKakugo_Large Pr6N M", "FOT-UDKakugo_Large Pr6N M Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N M", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N M Regular", "UDKakugo_LargePr6N-M", "FOT-UDKakugo_Large Pr6N R", "FOT-UDKakugo_Large Pr6N R Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N R", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N R Regular", "UDKakugo_LargePr6N-R", "FOT-UDKakugo_Large Pr6N L", "FOT-UDKakugo_Large Pr6N L Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N L", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N L Regular", "UDKakugo_LargePr6N-L", "DNP ShueiGoGinStd M", "DNP ShueiGoGinStd M Regular", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u9280 Std M", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u9280 Std M Regular", "DNPShueiGoGinStd-M", "\u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u9280 M", "DNP Shuei4goBStd Hv", "DNP Shuei4goBStd Hv Regular", "DNP \u79c0\u82f1\u56db\u53f7\u592a\u304b\u306a Std Hv", "DNP \u79c0\u82f1\u56db\u53f7\u592a\u304b\u306a Std Hv Regular", "DNPShuei4goBStd-Hv", "\u79c0\u82f1\u56db\u53f7\u592a\u304b\u306a", "DNP Shuei4goStd M", "DNP Shuei4goStd M Regular", "DNP \u79c0\u82f1\u56db\u53f7\u304b\u306a Std M", "DNP \u79c0\u82f1\u56db\u53f7\u304b\u306a Std M Regular", "DNPShuei4goStd-M", "\u79c0\u82f1\u56db\u53f7\u304b\u306a", "DNP ShueiAntiStd B", "DNP ShueiAntiStd B Regular", "DNP \u79c0\u82f1\u30a2\u30f3\u30c1\u30c3\u30af Std B", "DNP \u79c0\u82f1\u30a2\u30f3\u30c1\u30c3\u30af Std B Regular", "DNPShueiAntiStd-B", "\u79c0\u82f1\u30a2\u30f3\u30c1\u30c3\u30af", "DNP ShueiGoKinStd M", "DNP ShueiGoKinStd M Regular", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u91d1 Std M", "DNP \u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u91d1 Std M Regular", "DNPShueiGoKinStd-M", "\u79c0\u82f1\u89d2\u30b4\u30b7\u30c3\u30af\u91d1 M", "FP-KoburinaGoStdN-W6", "FP-\u3053\u3076\u308a\u306a\u30b4\u30b7\u30c3\u30af StdN W6", "FP-KoburinaGoStdN-W3", "FP-\u3053\u3076\u308a\u306a\u30b4\u30b7\u30c3\u30af StdN W3", "FP-KoburinaGoStdN-W1", "FP-\u3053\u3076\u308a\u306a\u30b4\u30b7\u30c3\u30af StdN W1", "FP-HiraginoUDSansRStdN-W6", "FP-\u30d2\u30e9\u30ae\u30ceUD\u4e38\u30b4 StdN W6", "FP-HiraginoUDSansRStdN-W5", "FP-\u30d2\u30e9\u30ae\u30ceUD\u4e38\u30b4 StdN W5", "FP-HiraginoUDSansRStdN-W4", "FP-\u30d2\u30e9\u30ae\u30ceUD\u4e38\u30b4 StdN W4", "FP-HiraginoUDSansRStdN-W3", "FP-\u30d2\u30e9\u30ae\u30ceUD\u4e38\u30b4 StdN W3", "FP-HiraginoUDSansFStdN-W6", "FP-\u30d2\u30e9\u30ae\u30ceUD\u89d2\u30b4F StdN W6", "FP-HiraginoUDSansFStdN-W5", "FP-\u30d2\u30e9\u30ae\u30ceUD\u89d2\u30b4F StdN W5", "FP-HiraginoUDSansFStdN-W4", "FP-\u30d2\u30e9\u30ae\u30ceUD\u89d2\u30b4F StdN W4", "FP-HiraginoUDSansFStdN-W3", "FP-\u30d2\u30e9\u30ae\u30ceUD\u89d2\u30b4F StdN W3", "FP-HiraginoUDSansStdN-W6", "FP-\u30d2\u30e9\u30ae\u30ceUD\u89d2\u30b4 StdN W6", "FP-HiraginoUDSansStdN-W5", "FP-\u30d2\u30e9\u30ae\u30ceUD\u89d2\u30b4 StdN W5", "FP-HiraginoUDSansStdN-W4", "FP-\u30d2\u30e9\u30ae\u30ceUD\u89d2\u30b4 StdN W4", "FP-HiraginoUDSansStdN-W3", "FP-\u30d2\u30e9\u30ae\u30ceUD\u89d2\u30b4 StdN W3", "FP-HiraginoUDSerifStdN-W6", "FP-\u30d2\u30e9\u30ae\u30ceUD\u660e\u671d StdN W6", "FP-HiraginoUDSerifStdN-W4", "FP-\u30d2\u30e9\u30ae\u30ceUD\u660e\u671d StdN W4", "FP-HiraMaruStdN-W8", "FP-\u30d2\u30e9\u30ae\u30ce\u4e38\u30b4 StdN W8", "FP-HiraMaruStdN-W6", "FP-\u30d2\u30e9\u30ae\u30ce\u4e38\u30b4 StdN W6", "FP-HiraMaruStdN-W5", "FP-\u30d2\u30e9\u30ae\u30ce\u4e38\u30b4 StdN W5", "FP-HiraMaruStdN-W3", "FP-\u30d2\u30e9\u30ae\u30ce\u4e38\u30b4 StdN W3", "FP-HiraMaruStdN-W2", "FP-\u30d2\u30e9\u30ae\u30ce\u4e38\u30b4 StdN W2", "FP-HiraKakuStdN-W9", "FP-\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 StdN W9", "FP-HiraKakuStdN-W7", "FP-\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 StdN W7", "FP-HiraKakuStdN-W5", "FP-\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 StdN W5", "FP-HiraKakuStdN-W4", "FP-\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 StdN W4", "FP-HiraKakuStdN-W2", "FP-\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 StdN W2", "FP-HiraKakuStdN-W1", "FP-\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 StdN W1", "FP-HiraKakuStdN-W0", "FP-\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 StdN W0", "FP-HiraMinStdN-W8", "FP-\u30d2\u30e9\u30ae\u30ce\u660e\u671d StdN W8", "FP-HiraMinStdN-W7", "FP-\u30d2\u30e9\u30ae\u30ce\u660e\u671d StdN W7", "FP-HiraMinStdN-W5", "FP-\u30d2\u30e9\u30ae\u30ce\u660e\u671d StdN W5", "FP-HiraMinStdN-W4", "FP-\u30d2\u30e9\u30ae\u30ce\u660e\u671d StdN W4", "FP-HiraMinStdN-W2", "FP-\u30d2\u30e9\u30ae\u30ce\u660e\u671d StdN W2", "FOT-Tsubame Std R", "FOT-Tsubame Std R Regular", "FOT-\u3064\u3070\u3081 Std R", "FOT-\u3064\u3070\u3081 Std R Regular", "TsubameStd-R", "FOT-ModeMinBLarge Std H", "FOT-ModeMinBLarge Std H Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std H", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std H Regular", "ModeMinBLargeStd-HV", "FOT-ModeMinBLarge Std E", "FOT-ModeMinBLarge Std E Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std E", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std E Regular", "ModeMinBLargeStd-E", "FOT-ModeMinBLarge Std B", "FOT-ModeMinBLarge Std B Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std B", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std B Regular", "ModeMinBLargeStd-B", "FOT-ModeMinBLarge Std D", "FOT-ModeMinBLarge Std D Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std D", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std D Regular", "ModeMinBLargeStd-D", "FOT-ModeMinBLarge Std M", "FOT-ModeMinBLarge Std M Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std M", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std M Regular", "ModeMinBLargeStd-M", "FOT-ModeMinBLarge Std R", "FOT-ModeMinBLarge Std R Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std R", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std R Regular", "ModeMinBLargeStd-R", "FOT-ModeMinBLarge Std L", "FOT-ModeMinBLarge Std L Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std L", "FOT-\u30e2\u30fc\u30c9\u660e\u671dB\u30e9\u30fc\u30b8 Std L Regular", "ModeMinBLargeStd-L", "FOT-ModeMinALarge Std H", "FOT-ModeMinALarge Std H Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std H", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std H Regular", "ModeMinALargeStd-HV", "FOT-ModeMinALarge Std E", "FOT-ModeMinALarge Std E Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std E", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std E Regular", "ModeMinALargeStd-E", "FOT-ModeMinALarge Std B", "FOT-ModeMinALarge Std B Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std B", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std B Regular", "ModeMinALargeStd-B", "FOT-ModeMinALarge Std D", "FOT-ModeMinALarge Std D Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std D", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std D Regular", "ModeMinALargeStd-D", "FOT-ModeMinALarge Std M", "FOT-ModeMinALarge Std M Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std M", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std M Regular", "ModeMinALargeStd-M", "FOT-ModeMinALarge Std R", "FOT-ModeMinALarge Std R Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std R", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std R Regular", "ModeMinALargeStd-R", "FOT-ModeMinALarge Std L", "FOT-ModeMinALarge Std L Regular", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std L", "FOT-\u30e2\u30fc\u30c9\u660e\u671dA\u30e9\u30fc\u30b8 Std L Regular", "ModeMinALargeStd-L", "SJArabic", "SJThai DB", "SJThai-DB", "SJThai M", "SJThai-M", "Toppan Bunkyu Mincho Pr6N R", "ToppanBunkyuMinchoPr6N-Regular", "\u51f8\u7248\u6587\u4e45\u660e\u671d Pr6N R", "Toppan Bunkyu Gothic Pr6N R", "ToppanBunkyuGothicPr6N-Regular", "\u51f8\u7248\u6587\u4e45\u30b4\u30b7\u30c3\u30af Pr6N R", "Toppan Bunkyu Gothic Pr6N DB", "ToppanBunkyuGothicPr6N-DB", "\u51f8\u7248\u6587\u4e45\u30b4\u30b7\u30c3\u30af Pr6N DB", "Toppan Bunkyu Midashi Mincho Std EB", "ToppanBunkyuMidashiMinchoStd-ExtraBold", "\u51f8\u7248\u6587\u4e45\u898b\u51fa\u3057\u660e\u671d Std EB", "Toppan Bunkyu Midashi Mincho StdN EB", "ToppanBunkyuMidashiMinchoStdN-ExtraBold", "\u51f8\u7248\u6587\u4e45\u898b\u51fa\u3057\u660e\u671d StdN EB", "Toppan Bunkyu Midashi Gothic Std EB", "ToppanBunkyuMidashiGothicStd-ExtraBold", "\u51f8\u7248\u6587\u4e45\u898b\u51fa\u3057\u30b4\u30b7\u30c3\u30af Std EB", "Toppan Bunkyu Midashi Gothic StdN EB", "ToppanBunkyuMidashiGothicStdN-ExtraBold", "\u51f8\u7248\u6587\u4e45\u898b\u51fa\u3057\u30b4\u30b7\u30c3\u30af StdN EB", "FOT-TsukuCMDMin Std E", "FOT-TsukuCMDMin Std E Regular", "FOT-\u7b51\u7d2bC\u898b\u51fa\u30df\u30f3 Std E", "FOT-\u7b51\u7d2bC\u898b\u51fa\u30df\u30f3 Std E Regular", "TsukuCMDMinStd-E", "HOT-HigeRei Std B", "HOT-HigeRei Std B Regular", "HOT-\u767d\u821f\u9aed\u96b7 Std B", "HOT-\u767d\u821f\u9aed\u96b7 Std B Regular", "HigeReiStd-B", "DNP ShueiNMinStd L", "DNP ShueiNMinStd L Regular", "DNP \u79c0\u82f1\u306b\u3058\u307f\u660e\u671d Std L", "DNP \u79c0\u82f1\u306b\u3058\u307f\u660e\u671d Std L Regular", "DNPShueiNMinStd-L", "\u79c0\u82f1\u306b\u3058\u307f\u660e\u671d L", "\u79c0\u82f1\u306b\u3058\u307f\u660e\u671d Std L", "FOT-UDKakugo_Large Pr6 U", "FOT-UDKakugo_Large Pr6 U Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 U", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 U Regular", "UDKakugo_LargePr6-U", "FOT-UDKakugo_Large Pr6 E", "FOT-UDKakugo_Large Pr6 E Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 E", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 E Regular", "UDKakugo_LargePr6-E", "FOT-TsukuNewsMin Pr6N L", "FOT-TsukuNewsMin Pr6N L Regular", "FOT-\u7b51\u7d2b\u65b0\u805e\u660e\u671d Pr6N L", "FOT-\u7b51\u7d2b\u65b0\u805e\u660e\u671d Pr6N L Regular", "TsukuNewsMinPr6N-L", "FOT-TsukuNewsMin Pr6 L", "FOT-TsukuNewsMin Pr6 L Regular", "FOT-\u7b51\u7d2b\u65b0\u805e\u660e\u671d Pr6 L", "FOT-\u7b51\u7d2b\u65b0\u805e\u660e\u671d Pr6 L Regular", "TsukuNewsMinPr6-L", "FOT-PalRamune Std B", "FOT-PalRamune Std B Regular", "FOT-\u30d1\u30eb\u30e9\u30e0\u30cd Std B", "FOT-\u30d1\u30eb\u30e9\u30e0\u30cd Std B Regular", "PalRamuneStd-B", "FOT-UDKakugo_Small Pr6N H", "FOT-UDKakugo_Small Pr6N H Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N H", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N H Regular", "UDKakugo_SmallPr6N-HV", "FOT-UDKakugo_Small Pr6N U", "FOT-UDKakugo_Small Pr6N U Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N U", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N U Regular", "UDKakugo_SmallPr6N-U", "FOT-UDKakugo_Small Pr6N E", "FOT-UDKakugo_Small Pr6N E Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N E", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N E Regular", "UDKakugo_SmallPr6N-E", "FOT-UDKakugo_Small Pr6 H", "FOT-UDKakugo_Small Pr6 H Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 H", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 H Regular", "UDKakugo_SmallPr6-HV", "FOT-UDKakugo_Small Pr6 U", "FOT-UDKakugo_Small Pr6 U Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 U", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 U Regular", "UDKakugo_SmallPr6-U", "FOT-UDKakugo_Small Pr6 E", "FOT-UDKakugo_Small Pr6 E Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 E", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 E Regular", "UDKakugo_SmallPr6-E", "FOT-UDKakugo_Large Pr6N H", "FOT-UDKakugo_Large Pr6N H Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N H", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N H Regular", "UDKakugo_LargePr6N-HV", "FOT-UDKakugo_Large Pr6N U", "FOT-UDKakugo_Large Pr6N U Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N U", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N U Regular", "UDKakugo_LargePr6N-U", "FOT-UDKakugo_Large Pr6N E", "FOT-UDKakugo_Large Pr6N E Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N E", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N E Regular", "UDKakugo_LargePr6N-E", "FOT-UDKakugo_Large Pr6 H", "FOT-UDKakugo_Large Pr6 H Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 H", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 H Regular", "UDKakugo_LargePr6-HV", "FOT-FWHebrew-R", "FOT-FWHebrew-R Regular", "FOTFWHebrew-R", "FOT-FWHebrew-DB", "FOT-FWHebrew-DB Demibold", "FOTFWHebrew-DB", "FOT-FWHebrew-B", "FOT-FWHebrew-B Bold", "FOTFWHebrew-B", "FOT-FWThai-DB", "FOT-FWThai-DB Demibold", "FOTFWThai-DB", "FOT-FWThai-R", "FOT-FWThai-R Regular", "FOTFWThai-R", "FOT-FWThai-B", "FOT-FWThai-B Bold", "FOTFWThai-B", "FOTK-Yoon Mincho 790", "FOTK-Yoon Mincho 790 Regular", "FOTK-YoonMincho 790", "FOTKYoonMinchoPro790", "FOTK-Yoon Mincho 780", "FOTK-Yoon Mincho 780 Regular", "FOTK-YoonMincho 780", "FOTKYoonMinchoPro780", "FOTK-Yoon Mincho 770", "FOTK-Yoon Mincho 770 Regular", "FOTK-YoonMincho 770", "FOTKYoonMinchoPro770", "FOTK-Yoon Mincho 760", "FOTK-Yoon Mincho 760 Regular", "FOTK-YoonMincho 760", "FOTKYoonMinchoPro760", "FOTK-Yoon Mincho 750", "FOTK-Yoon Mincho 750 Regular", "FOTK-YoonMincho 750", "FOTKYoonMinchoPro750", "FOTK-Yoon Mincho 740", "FOTK-Yoon Mincho 740 Regular", "FOTK-YoonMincho 740", "FOTKYoonMinchoPro740", "FOTK-Yoon Mincho 730", "FOTK-Yoon Mincho 730 Regular", "FOTK-YoonMincho 730", "FOTKYoonMinchoPro730", "FOTK-Yoon Mincho 720", "FOTK-Yoon Mincho 720 Regular", "FOTK-YoonMincho 720", "FOTKYoonMinchoPro720", "FOTK-Yoon Mincho 710", "FOTK-Yoon Mincho 710 Regular", "FOTK-YoonMincho 710", "FOTKYoonMinchoPro710", "FOTK-Yoon Gothic 790", "FOTK-Yoon Gothic 790 Regular", "FOTK-YoonGothic 790", "FOTKYoonGothicPro790", "FOTK-Yoon Gothic 780", "FOTK-Yoon Gothic 780 Regular", "FOTK-YoonGothic 780", "FOTKYoonGothicPro780", "FOTK-Yoon Gothic 770", "FOTK-Yoon Gothic 770 Regular", "FOTK-YoonGothic 770", "FOTKYoonGothicPro770", "FOTK-Yoon Gothic 760", "FOTK-Yoon Gothic 760 Regular", "FOTK-YoonGothic 760", "FOTKYoonGothicPro760", "FOTK-Yoon Gothic 750", "FOTK-Yoon Gothic 750 Regular", "FOTK-YoonGothic 750", "FOTKYoonGothicPro750", "FOTK-Yoon Gothic 740", "FOTK-Yoon Gothic 740 Regular", "FOTK-YoonGothic 740", "FOTKYoonGothicPro740", "FOTK-Yoon Gothic 730", "FOTK-Yoon Gothic 730 Regular", "FOTK-YoonGothic 730", "FOTKYoonGothicPro730", "FOTK-Yoon Gothic 720", "FOTK-Yoon Gothic 720 Regular", "FOTK-YoonGothic 720", "FOTKYoonGothicPro720", "FOTK-Yoon Gothic 710", "FOTK-Yoon Gothic 710 Regular", "FOTK-YoonGothic 710", "FOTKYoonGothicPro710", "FOTK-YDWings M", "FOTK-YDWings M Regular", "FOTKYDWingsM", "FOTK-YDWings L", "FOTK-YDWings L Regular", "FOTKYDWingsL", "FOTK-YDSunshine M", "FOTK-YDSunshine M Regular", "FOTKYDSunshineM", "FOTK-YDSunshine L", "FOTK-YDSunshine L Regular", "FOTKYDSunshineL", "FOTK-YDSachungi M", "FOTK-YDSachungi M Regular", "FOTKYDSachungiM", "FOTK-YDSachungi L", "FOTK-YDSachungi L Regular", "FOTKYDSachungiL", "FOTK-YDParansae M", "FOTK-YDParansae M Regular", "FOTKYDParansaeM", "FOTK-YDParansae L", "FOTK-YDParansae L Regular", "FOTKYDParansaeL", "FOTK-YDMincho 140", "FOTK-YDMincho 140 Regular", "FOTKYDMincho140", "FOTK-YDMincho 130", "FOTK-YDMincho 130 Regular", "FOTKYDMincho130", "FOTK-YDMincho 120", "FOTK-YDMincho 120 Regular", "FOTKYDMincho120", "FOTK-YDHope M", "FOTK-YDHope M Regular", "FOTKYDHopeM", "FOTK-YDHope L", "FOTK-YDHope L Regular", "FOTKYDHopeL", "FOTK-YDHeadRound M", "FOTK-YDHeadRound M Regular", "FOTKYDHeadRoundM", "FOTK-YDHeadRound B", "FOTK-YDHeadRound B Regular", "FOTKYDHeadRoundB", "FOTK-YDHead M", "FOTK-YDHead M Regular", "FOTKYDHeadM", "FOTK-YDHead B", "FOTK-YDHead B Regular", "FOTKYDHeadB", "FOTK-YDGogooryo M", "FOTK-YDGogooryo M Regular", "FOTKYDGogooryoM", "FOTK-YDGogooryo L", "FOTK-YDGogooryo L Regular", "FOTKYDGogooryoL", "FOTK-YDCharmingMincho M", "FOTK-YDCharmingMincho M Regular", "FOTKYDCharmingMinchoM", "FOTK-YDCharmingMincho L", "FOTK-YDCharmingMincho L Regular", "FOTKYDCharmingMinchoL", "FOTK-YDBackjae M", "FOTK-YDBackjae M Regular", "FOTKYDBackjaeM", "FOTK-YDBackjae L", "FOTK-YDBackjae L Regular", "FOTKYDBackjaeL", "FOT-UDMarugo_Large Pr6 H", "FOT-UDMarugo_Large Pr6 H Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 H", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 H Regular", "UDMarugo_LargePr6-HV", "FOT-UDMarugo_Large Pr6 E", "FOT-UDMarugo_Large Pr6 E Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 E", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 E Regular", "UDMarugo_LargePr6-E", "FOT-TsukuQMinS Std L", "FOT-TsukuQMinS Std L Regular", "FOT-\u7b51\u7d2bQ\u660e\u671dS Std L", "FOT-\u7b51\u7d2bQ\u660e\u671dS Std L Regular", "TsukuQMinSStd-L", "FOT-TsukuQMinL Std L", "FOT-TsukuQMinL Std L Regular", "FOT-\u7b51\u7d2bQ\u660e\u671dL Std L", "FOT-\u7b51\u7d2bQ\u660e\u671dL Std L Regular", "TsukuQMinLStd-L", "FOT-UDMarugo_Small Pr6N H", "FOT-UDMarugo_Small Pr6N H Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N H", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N H Regular", "UDMarugo_SmallPr6N-HV", "FOT-UDMarugo_Small Pr6N E", "FOT-UDMarugo_Small Pr6N E Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N E", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N E Regular", "UDMarugo_SmallPr6N-E", "FOT-UDMarugo_Small Pr6 U", "FOT-UDMarugo_Small Pr6 U Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 U", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 U Regular", "UDMarugo_SmallPr6-U", "FOT-UDMarugo_Small Pr6 H", "FOT-UDMarugo_Small Pr6 H Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 H", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 H Regular", "UDMarugo_SmallPr6-HV", "FOT-UDMarugo_Small Pr6 E", "FOT-UDMarugo_Small Pr6 E Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 E", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 E Regular", "UDMarugo_SmallPr6-E", "FOT-UDMarugo_Large Pr6N U", "FOT-UDMarugo_Large Pr6N U Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N U", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N U Regular", "UDMarugo_LargePr6N-U", "FOT-UDMarugo_Large Pr6N H", "FOT-UDMarugo_Large Pr6N H Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N H", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N H Regular", "UDMarugo_LargePr6N-HV", "FOT-UDMarugo_Large Pr6N E", "FOT-UDMarugo_Large Pr6N E Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N E", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6N E Regular", "UDMarugo_LargePr6N-E", "FOT-UDMarugo_Large Pr6 U", "FOT-UDMarugo_Large Pr6 U Regular", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 U", "FOT-UD\u4e38\u30b4_\u30e9\u30fc\u30b8 Pr6 U Regular", "UDMarugo_LargePr6-U", "FOT-FWHindi-R", "FOT-FWHindi-R Regular", "FOTFWHindi-R", "FOT-FWHindi-DB", "FOT-FWHindi-DB Demibold", "FOTFWHindi-DB", "FOT-FWHindi-B", "FOT-FWHindi-B Bold", "FOTFWHindi-B", "FOT-UDMarugo_Small Pr6N U", "FOT-UDMarugo_Small Pr6N U Regular", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N U", "FOT-UD\u4e38\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N U Regular", "UDMarugo_SmallPr6N-U", "FOT-KikyouB Std L", "FOT-KikyouB Std L Regular", "FOT-\u6854\u6897B Std L", "FOT-\u6854\u6897B Std L Regular", "KikyouBStd-L", "FOT-KikyouA Std L", "FOT-KikyouA Std L Regular", "FOT-\u6854\u6897A Std L", "FOT-\u6854\u6897A Std L Regular", "KikyouAStd-L", "FOT-UDKakugo_Small Pr6N UL", "FOT-UDKakugo_Small Pr6N UL Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N UL", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N UL Regular", "UDKakugo_SmallPr6N-UL", "FOT-UDKakugo_Small Pr6N EL", "FOT-UDKakugo_Small Pr6N EL Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N EL", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6N EL Regular", "UDKakugo_SmallPr6N-EL", "FOT-UDKakugo_Small Pr6 UL", "FOT-UDKakugo_Small Pr6 UL Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 UL", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 UL Regular", "UDKakugo_SmallPr6-UL", "FOT-UDKakugo_Small Pr6 EL", "FOT-UDKakugo_Small Pr6 EL Regular", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 EL", "FOT-UD\u89d2\u30b4_\u30b9\u30e2\u30fc\u30eb Pr6 EL Regular", "UDKakugo_SmallPr6-EL", "FOT-UDKakugo_Large Pr6N UL", "FOT-UDKakugo_Large Pr6N UL Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N UL", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N UL Regular", "UDKakugo_LargePr6N-UL", "FOT-UDKakugo_Large Pr6N EL", "FOT-UDKakugo_Large Pr6N EL Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N EL", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6N EL Regular", "UDKakugo_LargePr6N-EL", "FOT-UDKakugo_Large Pr6 UL", "FOT-UDKakugo_Large Pr6 UL Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 UL", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 UL Regular", "UDKakugo_LargePr6-UL", "FOT-UDKakugo_Large Pr6 EL", "FOT-UDKakugo_Large Pr6 EL Regular", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 EL", "FOT-UD\u89d2\u30b4_\u30e9\u30fc\u30b8 Pr6 EL Regular", "UDKakugo_LargePr6-EL"];
  FontPlusAccessor.server = ['webfont.fontplus.jp', 'webfont.fontplus.jp'];
  FontPlusAccessor.trial = 0;
  FontPlusAccessor.seq = 1456392954;
  FontPlusAccessor.nolist = 0;
  FontPlusAccessor.delay = 0;
  FontPlusAccessor.timeout = 10;
  FontPlusAccessor.aa = 1;
  FontPlusAccessor.ab = 2;
  FontPlusAccessor.llt = 0;
  FontPlusAccessor.t = null;
  FontPlusAccessor.pm = null;
  FontPlusAccessor.cm = 300;
  FontPlusAccessor.exttype = '';
  FontPlusAccessor.ukey = 'owI8-d2e8Dw';
  FontPlusAccessor.rl = 1;
  FontPlusAccessor.lsv = 'https://s3-ap-northeast-1.amazonaws.com/fontplus-sl/fontplus.gif?';
  FontPlusAccessor.bfurl = '://s3-ap-northeast-1.amazonaws.com/fp-bf/';
  FontPlusAccessor.bfnms = {
    'w': '3d4c80e6',
    'o': '5a348afb',
    't': 'ed60cc0b',
    'e': 'fb73ed3f'
  };
  FontPlusAccessor.init();
  return FontPlusAccessor;
}();
FONTPLUS = (function() {
  var a = FontPlus_71a4ed00547e2050d5fd55dd9adcbe51
    , options = {
    selector: '*',
    complete: false,
    callbacks: {},
    timeoutfunc: false,
    sync: true,
    size: false
  };
  var e = {
    config: function(b) {
      for (var c in b) {
        if (!b.hasOwnProperty(c))
          continue;
        options[c] = b[c]
      }
    },
    reload: function(c) {
      a.reload(c)
    },
    attachCompleteEvent: function(c) {
      options.complete = c
    },
    targetSelector: function(c) {
      options.selector = c
    },
    load: function(d, b, c) {
      a.designate_load(d, b, c)
    },
    isloading: function() {
      return a.isloading()
    },
    setFonts: function(c) {
      a.setFonts(c)
    },
    ontimeout: function(c) {
      options.timeoutfunc = c
    },
    async: function() {
      options.sync = false
    },
    start: function() {
      a.reload(true)
    },
    size: function(c) {
      options.size = c
    }
  };
  a.setting(options);
  return e
}
)();
