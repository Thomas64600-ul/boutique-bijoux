

        //Début de la page Homme et Femme

       
        function afficherProduitsParCategorie(categorie, idConteneur) {
       
            const conteneur = document.getElementById(idConteneur);
          
          
            const produitsFiltres = produits.filter(p => p.categorie === categorie);
          
          
            produitsFiltres.forEach(produit => {
              conteneur.innerHTML += `
                <div class="carte-produit">
                 <a href="${produit.lien}">
                <img src="${produit.image}" alt="${produit.nom}">
                    </a>
                    <p><strong>${produit.nom}</strong></p>
                  <p><strong>Prix :</strong> ${produit.prix}</p>
                  `
            });
          }
          
          document.addEventListener("DOMContentLoaded", () => {
            const url = location.href;
          
            if (url.includes("homme.html")) {
              afficherProduitsParCategorie("chaine-homme", "liste-chaines-homme");
              afficherProduitsParCategorie("pendentif-homme", "liste-pendentifs-homme");
              afficherProduitsParCategorie("bague-homme", "liste-bagues-homme");
              afficherProduitsParCategorie("montre-homme", "liste-montres-homme");
            }
          
            if (url.includes("femme.html")) {
              afficherProduitsParCategorie("collier-femme", "liste-colliers-femme");
              afficherProduitsParCategorie("pendentif-femme", "liste-pendentifs-femme");
              afficherProduitsParCategorie("anneau-femme", "liste-anneaux-femme");
              afficherProduitsParCategorie("boucle-femme", "liste-boucles-femme");
            }
            if (url.includes("produit.html")) {
                afficherProduitsParCategorie("collier", "liste-colliers");}

          });
          //Fin de la page Homme et Femmme

          // Debut de la page produit

const params = new URLSearchParams(location.search);
const id = parseInt(params.get("id"));


const produit = produits.find(p => p.id === id);


const container = document.getElementById("produit-container");




if (produit) {
  container.innerHTML = `
  <img src="${produit.image}" alt="${produit.nom}">
    <h1>${produit.nom}</h1>
    <p><strong>Prix :</strong> ${produit.prix}</p>
    <p><strong>Description :</strong> ${produit.description}</p>
    <p><strong>Conseils :</strong> ${produit.conseils}</p>
    <p><strong>Entretien :</strong> ${produit.entretien}</p>
  `;
} else {
  container.innerHTML = `<p>Produit non trouvé.</p>`;
}

// Fin de la page produit

  





