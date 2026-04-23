document.addEventListener("DOMContentLoaded", function () {
    const repairFamilySelect = document.getElementById("repair-family");
    const repairModelSelect = document.getElementById("repair-model");
    const repairImage = document.getElementById("repair-phone-image");
    const repairPriceList = document.getElementById("repair-price-list");

    if (repairFamilySelect && repairModelSelect && repairImage && repairPriceList) {
        const repairCatalog = {
            iphone: {
                "iPhone 17 Pro Max": { image: "images/iphone-17-pro-max.jpg" },
                "iPhone 17 Pro": { image: "images/iphone-17-pro.jpg" },
                "iPhone 17 Plus": { image: "images/iphone-17-plus.jpg" },
                "iPhone 17": { image: "images/iphone-17.jpg" },

                "iPhone 16 Pro Max": { image: "images/iphone-16-pro-max.jpg" },
                "iPhone 16 Pro": { image: "images/iphone-16-pro.jpg" },
                "iPhone 16 Plus": { image: "images/iphone-16-plus.jpg" },
                "iPhone 16": { image: "images/iphone-16.jpg" },

                "iPhone 15 Pro Max": { image: "images/iphone-15-pro-max.jpg" },
                "iPhone 15 Pro": { image: "images/iphone-15-pro.jpg" },
                "iPhone 15 Plus": { image: "images/iphone-15-plus.jpg" },
                "iPhone 15": { image: "images/iphone-15.jpg" },

                "iPhone 14 Pro Max": { image: "images/iphone-14-pro-max.jpg" },
                "iPhone 14 Pro": { image: "images/iphone-14-pro.jpg" },
                "iPhone 14 Plus": { image: "images/iphone-14-plus.jpg" },
                "iPhone 14": { image: "images/iphone-14.jpg" },

                "iPhone 13 Pro Max": { image: "images/iphone-13-pro-max.jpg" },
                "iPhone 13 Pro": { image: "images/iphone-13-pro.jpg" },
                "iPhone 13": { image: "images/iphone-13.jpg" },
                "iPhone 13 mini": { image: "images/iphone-13-mini.jpg" },

                "iPhone 12 Pro Max": { image: "images/iphone-12-pro-max.jpg" },
                "iPhone 12 Pro": { image: "images/iphone-12-pro.jpg" },
                "iPhone 12": { image: "images/iphone-12.jpg" },
                "iPhone 12 mini": { image: "images/iphone-12-mini.jpg" },

                "iPhone 11 Pro Max": { image: "images/iphone-11-pro-max.jpg" },
                "iPhone 11 Pro": { image: "images/iphone-11-pro.jpg" },
                "iPhone 11": { image: "images/iphone-11.jpg" },

                "iPhone XS Max": { image: "images/iphone-xs-max.jpg" },
                "iPhone XS": { image: "images/iphone-xs.jpg" },
                "iPhone XR": { image: "images/iphone-xr.jpg" },
                "iPhone X": { image: "images/iphone-x.jpg" },

                "iPhone 8 Plus": { image: "images/iphone-8-plus.jpg" },
                "iPhone 8": { image: "images/iphone-8.jpg" }
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