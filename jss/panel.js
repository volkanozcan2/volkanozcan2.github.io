let params = {
    r: innerHeight / 4 - 10,
    N: 10,
    X: 2
};
let options = {
    r: 1,
    N: 1,
    X: .01
}
var panel = QuickSettings.create(10, 10, "Panel");
panel.bindRange("r", 20, innerHeight / 2 - 10, 100, 1, params);
panel.bindRange("N", 3, 500, 10, 1, params);
panel.bindRange("X", 1, 99, 2, .01, params);
panel.addButton(" Save image ", () => {
    stroke("white");
    saveCanvas(mycanvas, `r(${params.r}) N(${params.N}) X(${params.X})`, 'jpg');
    stroke("black");
});
panel.saveInLocalStorage("settings");
$('.qs_range').bind('mousewheel', function(e) {
    let me = $(this.id).attr("step");
    let value = panel.getValue(this.id);
    let opt = options[this.id]
    if (e.originalEvent.wheelDelta / 120 > 0) {
        value += opt;
        panel.setValue(this.id, value);
    } else {
        value -= opt;
        panel.setValue(this.id, value);
    }
});
