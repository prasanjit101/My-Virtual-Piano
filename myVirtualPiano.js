

document.getElementById("myFrequency").onclick = function() {
    var context = new AudioContext();
    var o = context.createOscillator();
    var frequency = 440.0
    o.type = "sine";
    o.connect(context.destination);
    o.frequency.value = 830.6;
    o.detune.value;
    o.start();
}