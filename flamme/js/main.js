  // Basculement entre les formulaires (déclaration des variables)
  const postulerLink = document.getElementById('postuler-link');
  const commandeLink = document.getElementById('commande-link');
  const postulerForm = document.getElementById('postuler-form');
  const commandeForm = document.getElementById('commande-form');
  const emailField = document.getElementById('email');
  const confirmEmailField = document.getElementById('confirm_email');
  const emailError = document.getElementById('email-error');
  const telField = document.getElementById('telephone');
  const telError = document.getElementById('tel-error');
  const motivationField = document.getElementById('motivation');
  const motivationCount = document.getElementById('motivation-count');
  const problemeSelect = document.getElementById('probleme');
  const autresProbleme = document.getElementById('autres-probleme');
  const autreDetail = document.getElementById('autre-detail');
  const autreCount = document.getElementById('autre-count');
  const commandeField = document.getElementById('commande');
  const commandeError = document.getElementById('commande-error');

  // Validation du champ confirmation d'email
  confirmEmailField.addEventListener('input', () => {
      if (emailField.value !== confirmEmailField.value) {
          emailError.classList.remove('hidden');
      } else {
          emailError.classList.add('hidden');
      }
  });

  // Validation du numéro de téléphone
  telField.addEventListener('input', () => {
      if (telField.value.length !== 10 || !/^\d+$/.test(telField.value)) {
          telError.classList.remove('hidden');
      } else {
          telError.classList.add('hidden');
      }
  });

  // Compteur de caractères pour la lettre de motivation
  motivationField.addEventListener('input', () => {
      motivationCount.textContent = `${motivationField.value.length} / 3000 caractères`;
  });

  // Affichage du champ texte "autres" dans le problème de commande
  problemeSelect.addEventListener('change', () => {
      if (problemeSelect.value === 'autres') {
          autresProbleme.classList.remove('hidden');
      } else {
          autresProbleme.classList.add('hidden');
      }
  });

  // Compteur de caractères pour le champ "autres"
  autreDetail.addEventListener('input', () => {
      autreCount.textContent = `${autreDetail.value.length} / 1000 caractères`;
  });

  // Validation du numéro de commande
  commandeField.addEventListener('input', () => {
      if (commandeField.value.length !== 6 || !/^\d+$/.test(commandeField.value)) {
          commandeError.classList.remove('hidden');
      } else {
          commandeError.classList.add('hidden');
      }
  });

  // Basculement entre les formulaires
  postulerLink.addEventListener('click', function (e) {
      e.preventDefault();
      postulerForm.classList.remove('hidden');
      commandeForm.classList.add('hidden');
      postulerLink.classList.add('active');
      commandeLink.classList.remove('active');
      postulerLink.setAttribute('aria-current', 'page');
      commandeLink.removeAttribute('aria-current');
  });

  commandeLink.addEventListener('click', function (e) {
      e.preventDefault();
      commandeForm.classList.remove('hidden');
      postulerForm.classList.add('hidden');
      commandeLink.classList.add('active');
      postulerLink.classList.remove('active');
      commandeLink.setAttribute('aria-current', 'page');
      postulerLink.removeAttribute('aria-current');
  });