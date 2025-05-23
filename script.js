function afficherProduitsParCategorie(categorie, idConteneur) {
    const conteneur = document.getElementById(idConteneur);
    if (!conteneur) return; // S'assurer que le conteneur existe

    const produitsFiltres = produits.filter(p => p.categorie === categorie);

    conteneur.innerHTML = ''; // Nettoyer le conteneur avant d'ajouter des produits

    produitsFiltres.forEach(produit => {
        const carteProduit = document.createElement('div');
        carteProduit.classList.add('carte-produit'); // Utiliser la classe générique

        carteProduit.innerHTML = `
            <a href="produit.html?id=${produit.id}"> <img src="${produit.image}" alt="${produit.nom}">
            </a>
            <p><strong>${produit.nom}</strong></p>
            <p><strong>Prix :</strong> ${produit.prix}</p>
        `;
        conteneur.appendChild(carteProduit);
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
    // Si vous avez une page produit séparée avec un ID dynamique
    if (url.includes("produit.html")) {
        const params = new URLSearchParams(location.search);
        const id = parseInt(params.get("id"));
        const produit = produits.find(p => p.id === id);
        const container = document.getElementById("produit-container");

        if (produit) {
            container.innerHTML = `
                <img src="${produit.image}" alt="${produit.nom}">
                <div>
                    <h1>${produit.nom}</h1>
                    <p class="prix"><strong>Prix :</strong> ${produit.prix}</p>
                    <p class="description"><strong>Description :</strong> ${produit.description}</p>
                    <p><strong>Conseils :</strong> ${produit.conseils}</p>
                    <p><strong>Entretien :</strong> ${produit.entretien}</p>
                    <button id="bouton">Ajouter au panier</button> </div>
            `;
        } else {
            container.innerHTML = `<p>Produit non trouvé.</p>`;
        }
        // Si vous voulez aussi afficher des produits similaires sur la page produit
        // afficherProduitsParCategorie("collier", "liste-colliers"); // Exemple, à adapter
    }
});
  





