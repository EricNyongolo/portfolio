const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_projects: "Projets",
        nav_contact: "Contact",
        hero_welcome: "Bienvenue sur mon portfolio",
        hero_desc: "Expert en support IT et développeur frontend passionné par la création d'expériences numériques fluides.",
        btn_projects: "Mes Projets",
        btn_contact: "Me Contacter",
        titles: ["Spécialiste Support IT", "Développeur Web", "Expert Administratif"],
        // Section About
        about_title: "À Propos de Moi",
        about_subtitle: "Un pont entre l'efficacité administrative et l'expertise technique.",
        who_am_i: "Qui suis-je ?",
        my_skills: "Mes Compétences",
        experience: "Expérience Professionnelle",
        education: "Formation",
        // Section Contact
        contact_title: "Travaillons ensemble",
        send_btn: "Envoyer le Message"
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_welcome: "Welcome to my portfolio",
        hero_desc: "IT Support Expert and Frontend Developer passionate about building seamless digital experiences.",
        btn_projects: "My Projects",
        btn_contact: "Contact Me",
        titles: ["IT Support Specialist", "Web Developer", "Administrative Expert"],
        // Section About
        about_title: "About Me",
        about_subtitle: "Bridging administrative efficiency and technical expertise.",
        who_am_i: "Who am I?",
        my_skills: "My Skills",
        experience: "Professional Experience",
        education: "Education",
        // Section Contact
        contact_title: "Let's work together",
        send_btn: "Send Message"
    },
    sw: {
        nav_home: "Nyumbani",
        nav_about: "Kuhusu",
        nav_projects: "Miradi",
        nav_contact: "Wasiliana",
        hero_welcome: "Karibu kwenye kwingineko yangu",
        hero_desc: "Mtaalamu wa msaada wa IT na msanidi wa tovuti anayependa kuunda uzoefu wa kidijitali usio na mshono.",
        btn_projects: "Miradi Yangu",
        btn_contact: "Wasiliana Nami",
        titles: ["Mtaalamu wa IT", "Msanidi Wavuti", "Mtaalamu wa Utawala"],
        // Section About
        about_title: "Kuhusu Mimi",
        about_subtitle: "Kiungo kati ya ufanisi wa utawala na utaalamu wa kiufundi.",
        who_am_i: "Mimi ni nani?",
        my_skills: "Ujuzi Wangu",
        experience: "Uzoefu wa Kazi",
        education: "Elimu",
        // Section Contact
        contact_title: "Tufanye kazi pamoja",
        send_btn: "Tuma Ujumbe"
    }
};

// Fonction pour appliquer la traduction (à appeler au chargement et au changement de langue)
function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Mise à jour spécifique pour l'effet typing si présent sur la page
    if (typeof words !== 'undefined') {
        words = translations[lang].titles;
    }
    
    localStorage.setItem('preferredLang', lang);
}

