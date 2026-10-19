/* =====================================================
   CONFIGURAÇÃO — edite apenas esta parte
   ===================================================== */
const CONFIG = {
  nome: "Orlando",
  descricao: "Desenvolvedor Front-end no Programa Trilhas",
  foto: "img/foto.jpg", // coloque sua foto em img/foto.jpg
  github: "https://github.com/SEU-USUARIO",
  linkedin: "https://www.linkedin.com/in/SEU-PERFIL/",
  certificados: "https://drive.google.com/drive/folders/SEU-LINK", // pasta do Drive
};

// Para adicionar um projeto novo, inclua um objeto nesta lista.
const PROJETOS = [
  {
    titulo: "Lógica de Programação",
    imagem: "img/projeto1.png",
    link: "https://github.com/SEU-USUARIO/SEU-REPOSITORIO",
  },
  { titulo: "Projeto 2", imagem: "", link: "#" },
  { titulo: "Projeto 3", imagem: "", link: "#" },
  { titulo: "Projeto 4", imagem: "", link: "#" },
];

/* =====================================================
   Código da página
   ===================================================== */
const ICONE_GITHUB =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>';
const ICONE_LINKEDIN =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>';

// Perfil (foto, nome e descrição) — repetido em todas as páginas
document.querySelectorAll("[data-perfil]").forEach((el) => {
  el.innerHTML = `
    <img class="perfil__foto" src="${CONFIG.foto}" alt="Foto de ${CONFIG.nome}">
    <h1 class="perfil__nome">${CONFIG.nome}</h1>
    <p class="perfil__descricao">${CONFIG.descricao}</p>
  `;
  // se a foto não existir, mostra só o círculo com degradê
  el.querySelector("img").addEventListener("error", (e) => {
    e.target.removeAttribute("src");
  });
});

// Ícones de redes sociais
document.querySelectorAll("[data-redes]").forEach((el) => {
  el.innerHTML = `
    <a href="${CONFIG.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONE_GITHUB}</a>
    <a href="${CONFIG.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONE_LINKEDIN}</a>
  `;
});

// Botão de certificados
const btnCertificados = document.getElementById("certificados");
if (btnCertificados) btnCertificados.href = CONFIG.certificados;

// Cards de projetos
const listaProjetos = document.getElementById("lista-projetos");
if (listaProjetos) {
  PROJETOS.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "card__imagem";
    img.alt = `Imagem do projeto ${p.titulo}`;
    if (p.imagem) {
      img.src = p.imagem;
      img.addEventListener("error", () => img.removeAttribute("src"));
    }

    const link = document.createElement("a");
    link.className = "card__link";
    link.href = p.link;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Acessar projeto →";

    card.append(img, link);
    listaProjetos.appendChild(card);
  });
}
