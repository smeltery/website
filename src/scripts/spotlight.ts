const spotlight = document.querySelector<HTMLElement>("[data-spotlight]");
if (spotlight) {
  const slides = [...spotlight.querySelectorAll<HTMLElement>("[data-slide]")];
  const buttons = [...spotlight.querySelectorAll<HTMLButtonElement>("[data-project]")];
  const rotation = spotlight.querySelector<HTMLButtonElement>("[data-rotation]")!;
  const position = spotlight.querySelector<HTMLElement>("[data-position]")!;
  const region = spotlight.querySelector<HTMLElement>(".slides")!;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let paused = reducedMotion.matches;
  let explicitlyPlaying = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const show = (index: number) => {
    current = index;
    slides.forEach((slide, i) => {
      slide.hidden = i !== index;
    });
    buttons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    position.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  };
  const schedule = () => {
    clearTimeout(timer);
    rotation.textContent = paused ? "Play" : "Pause";
    rotation.setAttribute(
      "aria-label",
      paused ? "Start project rotation" : "Pause project rotation",
    );
    region.setAttribute("aria-live", paused ? "polite" : "off");
    const interacting =
      spotlight.contains(document.activeElement) &&
      document.activeElement?.matches(":focus-visible");
    if (paused || document.hidden || (interacting && !explicitlyPlaying)) return;
    timer = setTimeout(() => {
      show((current + 1) % slides.length);
      schedule();
    }, 7000);
  };
  buttons.forEach((button, index) =>
    button.addEventListener("click", () => {
      show(index);
      schedule();
    }),
  );
  rotation.addEventListener("click", () => {
    paused = !paused;
    explicitlyPlaying = !paused;
    schedule();
  });
  spotlight.addEventListener("focusin", (event) => {
    if (event.target !== rotation) explicitlyPlaying = false;
    schedule();
  });
  spotlight.addEventListener("focusout", () => setTimeout(schedule, 0));
  document.addEventListener("visibilitychange", schedule);
  reducedMotion.addEventListener("change", () => {
    paused = reducedMotion.matches;
    explicitlyPlaying = false;
    schedule();
  });
  schedule();
}
