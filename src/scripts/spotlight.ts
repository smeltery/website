const spotlight = document.querySelector<HTMLElement>("[data-spotlight]");
if (spotlight) {
  const slides = [...spotlight.querySelectorAll<HTMLElement>("[data-slide]")];
  const buttons = [...spotlight.querySelectorAll<HTMLButtonElement>("[data-project]")];
  const rotation = spotlight.querySelector<HTMLButtonElement>("[data-rotation]")!;
  const position = spotlight.querySelector<HTMLElement>("[data-position]")!;
  const region = spotlight.querySelector<HTMLElement>(".spotlight-slides")!;
  const picker = spotlight.querySelector<HTMLDetailsElement>("[data-project-picker]")!;
  const summary = picker.querySelector("summary")!;
  const filter = picker.querySelector<HTMLInputElement>("input")!;
  const selectedName = spotlight.querySelector<HTMLElement>("[data-selected-name]")!;
  const selectedLogo = spotlight.querySelector<HTMLImageElement>("[data-selected-logo]")!;
  const empty = spotlight.querySelector<HTMLElement>("[data-empty]")!;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let paused = reducedMotion.matches;
  let explicitlyPlaying = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const show = (index: number) => {
    current = index;
    selectedName.textContent = buttons[index]!.dataset.name!;
    selectedLogo.src = buttons[index]!.querySelector("img")!.src;
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
    if (paused || picker.open || document.hidden || (interacting && !explicitlyPlaying)) return;
    timer = setTimeout(() => {
      show((current + 1) % slides.length);
      schedule();
    }, 7000);
  };
  buttons.forEach((button, index) =>
    button.addEventListener("click", () => {
      paused = true;
      show(index);
      picker.open = false;
      summary.focus();
      schedule();
    }),
  );
  filter.addEventListener("input", () => {
    const query = filter.value.trim().toLowerCase();
    buttons.forEach((button) => {
      button.hidden = !`${button.dataset.name} ${button.dataset.keywords}`
        .toLowerCase()
        .includes(query);
    });
    empty.hidden = buttons.some((button) => !button.hidden);
  });
  picker.addEventListener("toggle", () => {
    if (picker.open) {
      filter.value = "";
      buttons.forEach((button) => {
        button.hidden = false;
      });
      empty.hidden = true;
      picker.querySelector(".spotlight-options")!.scrollTop = 0;
      filter.focus({ preventScroll: true });
    }
    schedule();
  });
  picker.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      picker.open = false;
      summary.focus();
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const visible = buttons.filter((button) => !button.hidden);
      const index = visible.indexOf(document.activeElement as HTMLButtonElement);
      const next =
        index < 0
          ? event.key === "ArrowDown"
            ? 0
            : visible.length - 1
          : (index + (event.key === "ArrowDown" ? 1 : -1) + visible.length) % visible.length;
      visible[next]?.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!picker.contains(event.target as Node)) picker.open = false;
  });
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
