import js.Browser;

class Main {
    static function main() {
        var css = "
        @font-face {
            font-family: 'FriskFont';
            src: url('myfont.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
        }
        * {
            font-family: 'FriskFont' !important;
        }";

        var style = Browser.document.createStyleElement();
        style.innerHTML = css;
        Browser.document.head.appendChild(style);
    }
}
