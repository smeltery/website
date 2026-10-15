const dialog = document.querySelector<HTMLDialogElement>("#site-search");
const input = document.querySelector<HTMLInputElement>("#search-input");
if (dialog && input) {
  const entries = [...dialog.querySelectorAll<HTMLAnchorElement>("[data-search-entry]")];
  const filters = [...dialog.querySelectorAll<HTMLButtonElement>("[data-search-filter]")];
  const status = dialog.querySelector<HTMLElement>("[data-search-status]")!;
  const empty = dialog.querySelector<HTMLElement>("[data-search-empty]")!;
  let category = "Everything";
  let opener: HTMLElement | null = null;
  const visibleEntries = () => entries.filter((entry) => !entry.hidden);
  const filterResults = () => {
    const words = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    for (const entry of entries) {
      entry.hidden =
        (category !== "Everything" && entry.dataset.category !== category) ||
        !words.every((word) => entry.dataset.searchText?.includes(word));
    }
    const count = visibleEntries().length;
    empty.hidden = count > 0;
    status.textContent = `${count} result${count === 1 ? "" : "s"}${input.value.trim() ? ` for “${input.value.trim()}”` : ""}`;
  };
  const openSearch = () => {
    if (dialog.open) {
      input.focus();
      return;
    }
    opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    input.value = "";
    category = "Everything";
    filters.forEach((button) =>
      button.setAttribute("aria-pressed", String(button.dataset.searchFilter === category)),
    );
    filterResults();
    dialog.showModal();
    input.focus();
  };
  document
    .querySelectorAll("[data-open-search]")
    .forEach((button) => button.addEventListener("click", openSearch));
  dialog.querySelector("[data-close-search]")?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => opener?.focus({ preventScroll: true }));
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
  input.addEventListener("input", filterResults);
  filters.forEach((button) =>
    button.addEventListener("click", () => {
      category = button.dataset.searchFilter ?? "Everything";
      filters.forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
      filterResults();
    }),
  );
  entries.forEach((entry) =>
    entry.addEventListener("click", () => {
      dialog.close();
      document.querySelector<HTMLDialogElement>("#mobile-menu[open]")?.close();
    }),
  );
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k" && !event.altKey) {
      event.preventDefault();
      openSearch();
    }
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.isComposing) return;
    const results = visibleEntries();
    const index = results.indexOf(document.activeElement as HTMLAnchorElement);
    if (
      ["ArrowDown", "ArrowUp"].includes(event.key) &&
      (document.activeElement === input || index >= 0)
    ) {
      event.preventDefault();
      if (!results.length) return;
      const next =
        index < 0
          ? event.key === "ArrowDown"
            ? 0
            : results.length - 1
          : (index + (event.key === "ArrowDown" ? 1 : -1) + results.length) % results.length;
      results[next]?.focus();
    }
    if (event.key === "Enter" && document.activeElement === input) {
      event.preventDefault();
      results[0]?.click();
    }
  });
  const shortcut = /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘ K" : "Ctrl K";
  document.querySelectorAll("[data-search-shortcut]").forEach((label) => {
    label.textContent = shortcut;
  });
}
