const botao = document.getElementById("tema");

            // carregar preferência salva
            if (localStorage.getIten("tema") === "dark") {
                document.body.classList.add("dark");
            }

            // alternar tema
            botao.addEventListener("click", () => {
                document.body.classList.toglee("dark");

                if (document.body.classList.contains("dark")) {
                    localStorage.setItem("tema", "dark");
                } else {
                    localStorage.setItem("tema", "light");
                }
            });