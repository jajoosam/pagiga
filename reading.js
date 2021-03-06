(function() {
    function r(a) {
        var b;
        void 0 === a.target ? b = a : (p().classList.remove("active"), k(a.target) ? (b = a.target, b.classList.add("active")) : a.target.classList.contains("all") ? (b = document.getElementsByTagName(a.target.parentElement.tagName), a.target.parentElement.classList.add("active")) : (b = a.target.parentElement, b.classList.add("active")));
        if (void 0 === b.length && k(b)) l(b);
        else if (a = p(), "H1" === a.tagName)
            if (b = document.getElementsByTagName("H1"), l(a), f(a))
                for (var c = 0; c < b.length; c++) b[c] === a || f(b[c]) || l(b[c]);
            else
                for (c = 0; c < b.length; c++) b[c] !== a && f(b[c]) && l(b[c]);
        else if (k(a))
            for (l(a), b = m(a), c = 0; c < e.length; c++)
                if (e[c] === a) {
                    for (var d = c - 1; m(e[d]) >= b;) {
                        var h = m(e[d]);
                        f(a) ? f(e[d]) || h !== b || l(e[d]) : f(e[d]) && h === b && l(e[d]);
                        d--
                    }
                    for (c += 1; m(e[c]) >= b;) d = m(e[c]), f(a) ? f(e[c]) || d !== b || l(e[c]) : f(e[c]) && d === b && l(e[c]), c++;
                    break
                }
        a = p();
        n(a);
        e = s(!0, u, !0);
        g = s(!1, v, !0)
    }

    function l(a) {
        for (var b = 0; b < d.length; b++)
            if (d[b] === a) {
                var c = m(a),
                    c = w(b, d, c);
                if (f(a))
                    for (a.classList.toggle("collapsed"), a = b + 1; d[a] !== c && void 0 !== d[a];)
                        if (k(d[a]))
                            if (f(d[a]))
                                for (b =
                                    m(d[a]), b = w(a, d, b), d[a].classList.remove("hidden"); d[a] !== b && void 0 !== d[a];) a++;
                            else d[a].classList.remove("hidden"), a++;
                else d[a].classList.remove("hidden"), a++;
                else
                    for (a.classList.toggle("collapsed"), a = b + 1; d[a] !== c && void 0 !== d[a];) d[a].classList.add("hidden"), a++;
                break
            }
    }

    function w(a, b, c) {
        for (a += 1; a < b.length; a++) {
            if (a === b.length - 1) return d[d.length];
            if (k(b[a]) && b[a].tagName.slice(1) <= c) return b[a]
        }
    }

    function f(a) {
        return a.classList.contains("collapsed")
    }

    function m(a) {
        if (void 0 !== a) return void 0 !==
            a.length ? a[0].tagName.slice(1) : a.tagName.slice(1)
    }

    function p() {
        return document.getElementsByClassName("active")[0]
    }

    function A(a) {
        if (void 0 === a.length) return a.classList.contains("collapsed");
        for (var b = 0, c = 0; c < a.length; c++) a[c].classList.contains("collapsed") && b++;
        return 0 < b ? !0 : !1
    }

    function x(a, b, c) {
        for (var d = 0; d < a.length; d++)
            if (a[d].classList.contains("active")) {
                if (b && d < a.length - 1) return a[d + c];
                if (!b && 0 < d) return a[d - c];
                break
            }
    }

    function y(a) {
        for (var b = p(), c = 0; c < g.length; c++)
            if (g[c] === b) {
                for (c = a ? c + 1 :
                    c - 1; a ? c < g.length : 0 <= c; a ? c++ : c--)
                    if (k(g[c]) && (m(b) > m(g[c]) || !k(b))) return g[c];
                break
            }
    }

    function n(a) {
        if (void 0 !== a) {
            p().classList.remove("active");
            a.classList.add("active");
            var b = a.getAttribute("id");
            null !== b && window.location.replace(q + "#" + b);
            a.scrollIntoView()
        }
    }

    function t(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }

    function s(a, b, c) {
        for (var e = 0, g = [], f = 0; f < d.length; f++) d[f].parentElement.classList.contains("js-infobox") || d[f].classList.contains("js-infobox") ||
            !(a && z(d[f].tagName, b) || !a && !z(d[f].tagName, b)) || c && (!c || d[f].classList.contains("hidden")) || (g[e] = d[f], e++);
        return g
    }

    function k(a) {
        a = a.tagName;
        return "H1" === a || "H2" === a || "H3" === a || "H4" === a || "H5" === a || "H6" === a
    }

    function z(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a === b[c]) return !0
    }
    var h = [ "dark", "high", "light",],
        u = "H1 H2 H3 H4 H5 H6".split(" "),
        v = ["HEADER", "HR"],
        d = [],
        e = [],
        g = [],
        q;
    t(window, "load", function() {
        document.documentElement.classList.add(h[0]);
        d = document.body.children;
        g = s(!1, v, !0);
        e = s(!0, u, !1);
        e[0].classList.add("active");
        for (var a = 0; a < e.length; a++) e[a].innerHTML += " <button class='this' title='Collapse this section'>←</button> <button class='all' title='Collapse all sections at this level'>↕</button>", t(e[a], "click", r);
        a = e[0].getAttribute("id");
        null === a && (e[0].setAttribute("id", "startOfContent"), a = "startOfContent");
        q = window.location.toString();
        var b = q.indexOf("#");
        if (-1 !== b) {
            var c = q.slice(b + 1);
            q = q.slice(0, b);
            b = document.getElementById(c);
            k(b) && n(b)
        }
        a = '<p><a href="#' + a + '" title="Skip to content">Skip to content</a></p><aside><h3>Keyboard shortcuts</h3><ul><li><span class="key">' +
            String.fromCharCode(106) + " / " + String.fromCharCode(107) + '</span> next/previous</li><li><span class="key">enter</span> toggle active header</li><li><span class="key">' + String.fromCharCode(111) + " / " + String.fromCharCode(105) + '</span> next/previous header (one level up)</li><li><span class="key">' + String.fromCharCode(117) + " / " + String.fromCharCode(109) + '</span> start/end of document</li><li><span class="key">' + String.fromCharCode(97) + '</span> toggle everything in this section</li><li><span class="key">' +
            String.fromCharCode(102) + '</span> expand everything (do this before you search)</li><li><span class="key">' + String.fromCharCode(115) + "</span> change theme</li></ul></aside>";
        b = document.body.children[0];
        c = document.createElement("div");
        c.classList.add("js-infobox");
        document.body.insertBefore(c, b);
        c.innerHTML = a
    });
    t(window, "keypress", function(a) {
        a = a || window.event;
        switch (a.which || a.keyCode) {
            case 13:
                r(p());
                break;
            case 97:
                a = p();
                k(a) && r(document.getElementsByTagName(a.tagName));
                break;
            case 106:
                n(x(g, !0, 1));
                break;
            case 107:
                n(x(g, !1, 1));
                break;
            case 117:
                n(g[0]);
                break;
            case 109:
                n(g[g.length - 1]);
                break;
            case 105:
                n(y(!1));
                break;
            case 111:
                n(y(!0));
                break;
            case 102:
                for (; A(g);)
                    for (a = 0; a < g.length; a++) g[a].classList.contains("collapsed") && r(g[a]);
                break;
            case 115:
                a = document.documentElement.classList;
                for (var b = 0; b < h.length; b++)
                    if (a.contains(h[b]))
                        if (a.toggle(h[b]), b < h.length - 1) {
                            a.toggle(h[b + 1]);
                            break
                        } else a.toggle(h[0])
        }
    })
})();