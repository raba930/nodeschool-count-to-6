function html(array, ...args) {
    var string = array[0];
    for (var i = 0; i < args.length; ++i) {
        string += escape(args[i]) + array[i + 1];
    }
    return string;
}
function escape(s) {
    return s.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;");
}
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
