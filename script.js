document.addEventListener("DOMContentLoaded", function () {
    const repairFamilySelect = document.getElementById("repair-family");
    const repairModelSelect = document.getElementById("repair-model");
    const repairImage = document.getElementById("repair-phone-image");
    const repairPriceList = document.getElementById("repair-price-list");

    if (repairFamilySelect && repairModelSelect && repairImage && repairPriceList) {
        const repairCatalog = {
            iphone: {
                "iPhone 17 Pro Max": { image: "17promax.png" },
                "iPhone 17 Pro": { image: "17PRO.png" },
                "iPhone 17 Air": { image: "17air.png" },
                "iPhone 17": { image: "17.png" },

                "iPhone 16 Pro Max": { image: "16pro promax.png" },
                "iPhone 16 Pro": { image: "16PRO.png" },
                "iPhone 16 plus": { image: "16.png" },
                "iPhone 16": { image: "16.png" },
                "iPhone 16e": { image: "16e.png" },

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
                "iPhone 13": { image: "13.png" },
                "iPhone 13 mini": { image: "13.png" },

                "iPhone 12 Pro Max": { image: "12pro promax.png" },
                "iPhone 12 Pro": { image: "12pro promax.png" },
                "iPhone 12": { image: "12.png" },
                "iPhone 12 mini": { image: "12.png" },

                "iPhone 11 Pro Max": { image: "11pro promax.png" },
                "iPhone 11 Pro": { image: "11pro promax.png" },
                "iPhone 11": { image: "11.png   " },

                "iPhone XS Max": { image: "xs xsmax.png" },
                "iPhone XS": { image: "xs xsmax.png" },
                "iPhone XR": { image: "xr.png" },
                "iPhone X": { image: "x.png" },

                "iPhone 8 Plus": { image: "8plus.png" },
                "iPhone 8": { image: "8.png" }

                "iPhone SE 2éme génération": { image: "se 2emegen.png" }
                "iPhone SE 3éme génération": { image: "se 3emegen.png" }
            },

            samsung: {
                "Galaxy S26 Ultra": { image: "images/galaxy-s26-ultra.jpg" },
                "Galaxy S26+": { image: "images/galaxy-s26-plus.jpg" },
                "Galaxy S26": { image: "images/galaxy-s26.jpg" },

                "Galaxy S25 Ultra": { image: "images/galaxy-s25-ultra.jpg" },
                "Galaxy S25+": { image: "images/galaxy-s25-plus.jpg" },
                "Galaxy S25": { image: "images/galaxy-s25.jpg" },

                "Galaxy S24 Ultra": { image: "images/galaxy-s24-ultra.jpg" },
                "Galaxy S24+": { image: "images/galaxy-s24-plus.jpg" },
                "Galaxy S24": { image: "images/galaxy-s24.jpg" },

                "Galaxy S23 Ultra": { image: "images/galaxy-s23-ultra.jpg" },
                "Galaxy S23+": { image: "images/galaxy-s23-plus.jpg" },
                "Galaxy S23": { image: "images/galaxy-s23.jpg" },

                "Galaxy S22 Ultra": { image: "images/galaxy-s22-ultra.jpg" },
                "Galaxy S22+": { image: "images/galaxy-s22-plus.jpg" },
                "Galaxy S22": { image: "images/galaxy-s22.jpg" },

                "Galaxy S21 Ultra": { image: "images/galaxy-s21-ultra.jpg" },
                "Galaxy S21+": { image: "images/galaxy-s21-plus.jpg" },
                "Galaxy S21": { image: "images/galaxy-s21.jpg" },

                "Galaxy A55": { image: "images/galaxy-a55.jpg" },
                "Galaxy A54": { image: "images/galaxy-a54.jpg" },
                "Galaxy A34": { image: "images/galaxy-a34.jpg" }
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

            repairImage.src = data.image;
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