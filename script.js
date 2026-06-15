document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function () {
            hamburgerBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            hamburgerBtn.setAttribute('aria-expanded', hamburgerBtn.classList.contains('active'));
        });

        // Close menu when a link is clicked
        if (navLinks) {
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function () {
                    hamburgerBtn.classList.remove('active');
                    navLinks.classList.remove('active');
                    hamburgerBtn.setAttribute('aria-expanded', false);
                });
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!hamburgerBtn.contains(event.target) && !navLinks.contains(event.target)) {
                hamburgerBtn.classList.remove('active');
                navLinks.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', false);
            }
        });
    }

    const repairFamilySelect = document.getElementById("repair-family");
    const repairModelSelect = document.getElementById("repair-model");
    const repairImage = document.getElementById("repair-phone-image");
    const repairPriceList = document.getElementById("repair-price-list");

    if (repairFamilySelect && repairModelSelect && repairImage && repairPriceList) {
        const repairCatalog = {
            iphone: {
                "iPhone 17 Pro Max": { image: "17promax.png" },
                "iPhone 17 Pro": { image: "17promax.png" },
                "iPhone 17 Air": { image: "17ait.png" },
                "iPhone 17": { image: "17.png" },

                "iPhone 16 Pro Max": { image: "16 pro promax.png" },
                "iPhone 16 Pro": { image: "16 pro promax.png" },
                "iPhone 16 Plus": { image: "16e.png" },
                "iPhone 16": { image: "16.png" },

                "iPhone 15 Pro Max": { image: "15pro promax.png" },
                "iPhone 15 Pro": { image: "15pro promax.png" },
                "iPhone 15 Plus": { image: "15.png" },
                "iPhone 15": { image: "15.png" },

                "iPhone 14 Pro Max": { image: "14pro promax.png" },
                "iPhone 14 Pro": { image: "14pro promax.png" },
                "iPhone 14 Plus": { image: "14.png" },
                "iPhone 14": { image: "14.png" },

                "iPhone 13 Pro Max": { image: "13pro promax.png" },
                "iPhone 13 Pro": { image: "13pro promax.png" },
                "iPhone 13": { image: "13min 13.png" },
                "iPhone 13 mini": { image: "13min 13.png" },

                "iPhone 12 Pro Max": { image: "12 pro promax.png" },
                "iPhone 12 Pro": { image: "12 pro promax.png" },
                "iPhone 12": { image: "12.png" },

                "iPhone 11 Pro Max": { image: "11 pro pro max.png" },
                "iPhone 11 Pro": { image: "11 pro pro max.png" },
                "iPhone 11": { image: "11.png" },

                "iPhone XS Max": { image: "xs xsmax.png" },
                "iPhone XS": { image: "xs xsmax.png" },
                "iPhone XR": { image: "XR.png" },
                "iPhone X": { image: "X.png" },

                "iPhone 8 Plus": { image: "8plus.png" },
                "iPhone 8": { image: "8.png" },
                "iPhone SE 2e Génération": { image: "se 2emegen.png" },
                "iPhone SE 3e Génération": { image: "se 3emegen.png" }
            }
        };

        const serviceLabels = [
            "Remplacement de batterie",
            "Réparation écran",
            "Réparation caméra",
            "Réparation du dos",
            "Problème de charge",
            "Autres pannes"
        ];

        function populateRepairModels(family) {
            const models = Object.keys(repairCatalog[family] || {});
            repairModelSelect.innerHTML = "";

            models.forEach(function (model) {
                const option = document.createElement("option");
                option.value = model;
                option.textContent = model;
                repairModelSelect.appendChild(option);
            });
        }

        function renderRepairServices(family, model) {
            const familyData = repairCatalog[family];
            if (!familyData) return;

            const data = familyData[model];
            if (!data) return;

            // Si le chemin ne commence pas par images/, ajoute le chemin relatif si besoin
            let imgSrc = data.image;
            if (!imgSrc.startsWith("images/") && !imgSrc.startsWith("/")) {
                imgSrc = imgSrc;
            }
            repairImage.src = imgSrc;
            repairImage.alt = model;

            repairPriceList.innerHTML = "";

            serviceLabels.forEach(function (label) {
                const row = document.createElement("div");
                row.className = "repair-price-row";
                row.innerHTML = `<span>${label}</span><strong>Sur devis</strong>`;
                repairPriceList.appendChild(row);
            });
        }

        function initializeRepairSelector() {
            const family = repairFamilySelect.value;
            populateRepairModels(family);

            if (repairModelSelect.options.length > 0) {
                repairModelSelect.selectedIndex = 0;
                renderRepairServices(family, repairModelSelect.value);
            }
        }

        initializeRepairSelector();

        repairFamilySelect.addEventListener("change", function () {
            initializeRepairSelector();
        });

        repairModelSelect.addEventListener("change", function () {
            renderRepairServices(repairFamilySelect.value, repairModelSelect.value);
        });
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nom = document.getElementById("nom")?.value?.trim() || "";
            const email = document.getElementById("email")?.value?.trim() || "";
            const message = document.getElementById("message")?.value?.trim() || "";

            const subject = encodeURIComponent(`Nouveau message depuis le site - ${nom}`);
            const body = encodeURIComponent(`Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`);

            window.location.href = `mailto:mitech.rouen@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    document.querySelectorAll(".eco-close").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const bar = btn.closest(".eco-bar");
            if (bar) bar.style.display = "none";
        });
    });

    document.querySelectorAll("[data-year]").forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });

    const revealElements = document.querySelectorAll(".reveal");
    if (revealElements.length) {
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealElements.forEach(function (el) {
            observer.observe(el);
        });
    }
});