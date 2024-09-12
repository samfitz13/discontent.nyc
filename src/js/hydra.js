import Hydra from "hydra-synth";

const hydra = new Hydra({
  detectAudio: false,
  canvas: document.createElement("canvas"),
});

document.body.appendChild(hydra.canvas);

const smoothFreq =
  (speed = 4) =>
  (time) => {
    const frequencies = [1, 3, 6, 15];
    const t = time * speed;
    const index = math.floor(time * 0.1) % frequencies.length;
    const nextIndex = (index + 1) % frequencies.length;
    const frac = t % 1;
    return (
      Math.sin(Math.PI * frac) * frequencies[index] +
      Math.sin(Math.PI * (1 - frac)) * frequencies[nextIndex]
    );
  };

osc(smoothFreq(), 0.01, 0.8)
  .mult(osc(20, -0.1, 1).modulate(noise(3, 1)).rotate(0.7))
  .hue(120, 0.5, 0.05)
  .contrast(1.2)
  .brightness(-0.6)
  .out();
