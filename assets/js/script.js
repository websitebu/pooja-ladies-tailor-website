    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      }
    });

    document.querySelector("#year").textContent = new Date().getFullYear();

    document.querySelector("#enquiry-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const message = [
        "Hello Pooja, I'd like to enquire about your tailoring services.",
        `Name: ${formData.get("name")}`,
        `Phone: ${formData.get("phone")}`,
        `Service: ${formData.get("service")}`,
        formData.get("message") ? `Details: ${formData.get("message")}` : ""
      ].filter(Boolean).join("\n");
      window.open(`https://wa.me/918459392824?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      document.querySelector("#form-status").textContent =
        "WhatsApp should open with your enquiry. If it doesn't, use the direct WhatsApp link above.";
    });
