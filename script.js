// Словарь локализации (Русский и Кыргызский)
const translations = {
    ru: {
        acc_version: "Версия для слабовидящих",
        font_size: "Размер шрифта:",
        contrast: "Контраст:",
        c_normal: "Обычный",
        c_high: "Высокий",
        c_dark: "Тёмный",
        letter_spacing: "Интервал:",
        s_normal: "Обычный",
        s_medium: "Средний",
        s_large: "Большой",
        line_height: "Межстрочный:",
        toggle_imgs: "Изображения",
        toggle_lnks: "Подчеркнуть ссылки",
        reset: "Сбросить",
        logo_text: "МОЙ ГОРОД",
        login_btn: "Вход / Регистрация",
        hero_title: "СДЕЛАЕМ НАШ ГОРОД ЛУЧШЕ ВМЕСТЕ!",
        search_placeholder: "Поиск проектов...",
        view_projects: "Просмотреть Проекты",
        suggest_idea_btn: "Предложить Идею",
        actual_projects: "АКТУАЛЬНЫЕ ПРОЕКТЫ ДЛЯ ГОЛОСОВАНИЯ",
        suggest_title: "ПРЕДЛОЖИТЬ НОВУЮ ИДЕЮ",
        form_project_title: "Название проекта *",
        form_title_ph: "Введите название инициативы",
        form_your_name: "Ваше имя *",
        form_name_ph: "Кадыралиев Эрнис",
        form_desc: "Описание идеи",
        form_desc_ph: "Опишите ваши предложения...",
        form_submit: "Подать идею",
        approved_ideas_title: "ОДОБРЕННЫЕ ИДЕИ ЖИТЕЛЕЙ",
        admin_panel_title: "🔒 ПАНЕЛЬ МОДЕРАЦИИ (АДМИНИСТРАТОР)",
        admin_tip: "Ниже находятся идеи, которые предложили пользователи. Одобрите их, чтобы они появились на сайте.",
        queue_empty: "Очередь модерации пуста.",
        latest_activity: "Последние Активности",
        tab_login: "Вход",
        tab_register: "Регистрация",
        field_login: "Логин",
        field_password: "Пароль",
        field_fullname: "Имя и Фамилия",
        reg_name_ph: "Кадыралиев Эрнис",
        field_login_email: "Логин / Email",
        btn_register_submit: "Зарегистрироваться",
        edit_modal_title: "Редактирование проекта",
        edit_field_desc: "Описание проекта",
        edit_field_votes: "Количество голосов",
        save_changes: "Сохранить изменения",
        footer_text: "Выпускная квалификационная работа. Автор: Кадыралиев Эрнис. © 2026",
        about_platform: "О платформе",
        contacts: "Контакты",
        role_admin: "👮 Админ",
        role_user: "👤 Житель",
        logout: "Выйти",
        vote_btn: "Голосовать",
        voted_btn: "Поддержано ✓",
        alert_auth: "Для того чтобы проголосовать, необходимо войти.",
        alert_suggest: "Ваша идея отправлена на модерацию администратору портала!",
        confirm_delete: "Вы уверены, что хотите удалить проект?",
        act_delete: "Удалено админом",
        act_edit: "Изменено админом",
        votes_count_txt: "голосов",
        author_txt: "Автор",
        desc_txt: "Описание",
        btn_approve_act: "Одобрить",
        btn_reject_act: "Отклонить",
        btn_edit_act: "✏️ Изменить",
        btn_delete_act: "🗑️ Удалить"
    },
    ky: {
        acc_version: "Азиздер жана начар көргөндөр үчүн версия",
        font_size: "Ариптин өлчөмү:",
        contrast: "Контраст:",
        c_normal: "Кадимки",
        c_high: "Жогорку",
        c_dark: "Караңгы",
        letter_spacing: "Интервал:",
        s_normal: "Кадимки",
        s_medium: "Орточо",
        s_large: "Чоң",
        line_height: "Саптардын ортосу:",
        toggle_imgs: "Сүрөттөр",
        toggle_lnks: "Шилтемелердин астын сызуу",
        reset: "Калыбына келтирүү",
        logo_text: "МЕНИН ШААРЫМ",
        login_btn: "Кирүү / Каттоо",
        hero_title: "ШААРЫБЫЗДЫ БИРГЕ ЖАКШЫРТАБЫЗ!",
        search_placeholder: "Долбоорлорду издөө...",
        view_projects: "Долбоорлорду көрүү",
        suggest_idea_btn: "Идея сунуштоо",
        actual_projects: "ДОБУШ БЕРҮҮ ҮЧҮН АКТУАЛДУУ ДОЛБООРЛОР",
        suggest_title: "ЖАҢЫ ИДЕЯ СУНУШТОО",
        form_project_title: "Долбоордун аталышы *",
        form_title_ph: "Демилгенин аталышын киргизиңиз",
        form_your_name: "Сиздин ысымыңыз *",
        form_name_ph: "Кадыралиев Эрнис",
        form_desc: "Идеянын сыпаттамасы",
        form_desc_ph: "Сунуштарыңызды жазыңыз...",
        form_submit: "Идеяны жөнөтүү",
        approved_ideas_title: "ЖАШООЧУЛАРДЫН ЖАКТЫРЫЛГАН ИДЕЯЛАРЫ",
        admin_panel_title: "🔒 МОДЕРАЦИЯ ПАНЕЛИ (АДМИНИСТРАТОР)",
        admin_tip: "Төмөндө колдонуучулар сунуштаган идеялар жайгашкан. Аларды сайтта көрсөтүү үчүн жактырыңыз.",
        queue_empty: "Модерация кезеги бош.",
        latest_activity: "Aкыркы аракеттер",
        tab_login: "Кирүү",
        tab_register: "Каттоо",
        field_login: "Логин",
        field_password: "Сөз айкашы (Пароль)",
        field_fullname: "Аты-жөнү",
        reg_name_ph: "Кадыралиев Эрнис",
        field_login_email: "Логин / Email",
        btn_register_submit: "Катталуу",
        edit_modal_title: "Долбоорду түзөтүү",
        edit_field_desc: "Долбоордун сыпаттамасы",
        edit_field_votes: "Добуштардын саны",
        save_changes: "Өзгөртүүлөрдү сактоо",
        footer_text: "Выпускная квалификационная работа. Автор: Кадыралиев Эрнис. © 2026",
        about_platform: "Платформа жөнүндө",
        contacts: "Байланыштар",
        role_admin: "👮 Админ",
        role_user: "👤 Жашоочу",
        logout: "Чыгуу",
        vote_btn: "Добуш берүү",
        voted_btn: "Колдоого алынды ✓",
        alert_auth: "Добуш берүү үчүн системага кирүү керек.",
        alert_suggest: "Сиздин идеяңыз порталдын администраторуна модерацияга жөнөтүлдү!",
        confirm_delete: "Бул долбоорду өчүрүүнү каалайсызбы?",
        act_delete: "Админ тарабынан өчүрүлдү",
        act_edit: "Админ тарабынан өзгөртүлдү",
        votes_count_txt: "добуш",
        author_txt: "Автор",
        desc_txt: "Сыпаттама",
        btn_approve_act: "Жактыруу",
        btn_reject_act: "Четке кагуу",
        btn_edit_act: "✏️ Түзөтүү",
        btn_delete_act: "🗑️ Өчүрүү"
    }
};

const defaultProjects = [
    { id: 1, titleRu: "Реконструкция Центрального Парка", titleKy: "Борбордук паркты реконструкциялоо", descRu: "Обновление пешеходных дорожек, установка освещения и урн.", descKy: "Жөө жүрүүчү жолдорду жаңылоо, жарыктандыруу жана таштанды челектерин орнотуу.", votes: 1520, image: "1.jpg" },
    { id: 2, titleRu: "Велодорожки на пр. Манаса", titleKy: "Манас проспектисиндеги веложолдор", descRu: "Организация безопасных и выделенных велодорожек по проспекту Манаса.", descKy: "Манас проспектиси боюнча коопсур жана атайын бөлүнгөн веложолдорду уюштуруу.", votes: 960, image: "2.jpg" },
    { id: 3, titleRu: "Озеленение спальных районов", titleKy: "Турак жай конуштарын жашылдандыруу", descRu: "Высадка более 500 саженцев клёна и липы во дворах жилых домов.", descKy: "Турак үйлөрдүн короолоруна 500дөн ашык чегиртке жана липа көчөттөрүн отургузуу.", votes: 420, image: "3.jpg" },
    { id: 4, titleRu: "Светофоры на перекрестках", titleKy: "Көчө кесилиштерине светофорлор", descRu: "Установка умных светофоров для снижения автомобильных пробок.", descKy: "Унаа тыгындарын азайтуу үчүн акылдуу светофорлорду орнотуу.", votes: 310, image: "4.jpg" },
    { id: 5, titleRu: "Детские эко-площадки", titleKy: "Балаты эко-аянтчалары", descRu: "Создание безопасных игровых зон из натурального дерева во дворах.", descKy: "Короолордо табигый жыгачтан жасалган коопсуз оюн аянтчаларын түзүү.", votes: 680, image: "5.jpg" },
    { id: 6, titleRu: "Освещение окраин города", titleKy: "Шаардын четин жарыктандыруу", descRu: "Установка современных светодиодных фонарей на неосвещенных улицах.", descKy: "Жарыктандырылбаган көчөлөргө заманбап светодиоддук чырактарды орнотуу.", votes: 890, image: "6.jpg" }
];

const sliderImages = [
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
    "6.jpg"
];

let currentLang = localStorage.getItem('siteLang') || 'ru';
let projectsData = JSON.parse(localStorage.getItem('dynamicProjects')) || defaultProjects;
let approvedIdeas = JSON.parse(localStorage.getItem('approvedIdeas')) || [];
let moderationQueue = JSON.parse(localStorage.getItem('moderationQueue')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let votedProjects = JSON.parse(localStorage.getItem('votedProjects')) || {};
let currentSlideIdx = 0;

document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
    initAuthUI();
    initModalEvents();
    initEditFormEvent();
    initAccessibilityEvents();
    initLangDropdown();
    initHeroSlider();
    
    if(document.getElementById('projectsContainer')) {
        renderProjects();
        renderIdeas();
        renderModerationQueue();
        initFormEvents();
    }
});

function initHeroSlider() {
    const hero = document.getElementById('heroSlider');
    if (!hero) return;
    
    hero.style.backgroundImage = `linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(59, 130, 246, 0.7) 100%), url('${sliderImages[0]}')`;
    
    setInterval(() => {
        currentSlideIdx = (currentSlideIdx + 1) % sliderImages.length;
        hero.style.backgroundImage = `linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(59, 130, 246, 0.7) 100%), url('${sliderImages[currentSlideIdx]}')`;
    }, 12000);
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang);

    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (translations[lang][key]) elem.innerText = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
        const key = elem.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) elem.setAttribute('placeholder', translations[lang][key]);
    });

    const flagBtn = document.getElementById('currentLangFlag');
    const textBtn = document.getElementById('currentLangText');
    if (flagBtn && textBtn) {
        flagBtn.innerText = lang === 'ru' ? '🇷🇺' : '🇰🇬';
        textBtn.innerText = lang.toUpperCase();
    }

    renderProjects();
    renderIdeas();
    renderModerationQueue();
    initAuthUI();
}

function initLangDropdown() {
    const btn = document.getElementById('langDropdownBtn');
    const menu = document.getElementById('langDropdownMenu');
    if(!btn || !menu) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('open');
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            switchLanguage(this.getAttribute('data-lang'));
            menu.classList.remove('open');
        });
    });

    document.addEventListener('click', () => menu.classList.remove('open'));
}

function initAccessibilityEvents() {
    const togglePanelBtn = document.getElementById('toggleAccPanelBtn');
    const panel = document.getElementById('accessibilityPanel');
    const closePanelBtn = document.getElementById('acc-close');
    const resetBtn = document.getElementById('acc-reset');

    if(!panel || !togglePanelBtn) return;

    togglePanelBtn.addEventListener('click', () => {
        panel.classList.toggle('hidden');
        togglePanelBtn.classList.toggle('active');
    });

    closePanelBtn.addEventListener('click', () => {
        panel.classList.add('hidden');
        togglePanelBtn.classList.remove('active');
    });

    document.getElementById('font-normal').addEventListener('click', function() { setActiveAccBtn(this); document.body.style.fontSize = '16px'; });
    document.getElementById('font-medium').addEventListener('click', function() { setActiveAccBtn(this); document.body.style.fontSize = '20px'; });
    document.getElementById('font-large').addEventListener('click', function() { setActiveAccBtn(this); document.body.style.fontSize = '24px'; });

    document.getElementById('contrast-normal').addEventListener('click', function() { setActiveAccBtn(this); document.body.className = ''; });
    document.getElementById('contrast-high').addEventListener('click', function() { setActiveAccBtn(this); document.body.className = 'acc-high-contrast'; });
    document.getElementById('contrast-dark').addEventListener('click', function() { setActiveAccBtn(this); document.body.className = 'acc-dark-contrast'; });

    document.getElementById('spacing-normal').addEventListener('click', function() { setActiveAccBtn(this); document.body.style.letterSpacing = 'normal'; });
    document.getElementById('spacing-medium').addEventListener('click', function() { setActiveAccBtn(this); document.body.style.letterSpacing = '2px'; });
    document.getElementById('spacing-large').addEventListener('click', function() { setActiveAccBtn(this); document.body.style.letterSpacing = '4px'; });

    document.getElementById('lh-normal').addEventListener('click', function() { setActiveAccBtn(this); document.body.style.lineHeight = '1.6'; });
    document.getElementById('lh-medium').addEventListener('click', function() { setActiveAccBtn(this); document.body.style.lineHeight = '2'; });
    document.getElementById('lh-large').addEventListener('click', function() { setActiveAccBtn(this); document.body.style.lineHeight = '2.5'; });

    document.getElementById('toggle-images').addEventListener('click', function() { this.classList.toggle('active'); document.body.classList.toggle('acc-hide-images'); });
    document.getElementById('toggle-links').addEventListener('click', function() { this.classList.toggle('active'); document.body.classList.toggle('acc-underline-links'); });

    resetBtn.addEventListener('click', () => {
        document.body.style = ''; document.body.className = '';
        document.querySelectorAll('.acc-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('font-normal').classList.add('active');
        document.getElementById('contrast-normal').classList.add('active');
        document.getElementById('spacing-normal').classList.add('active');
        document.getElementById('lh-normal').classList.add('active');
    });
}

function setActiveAccBtn(btn) {
    btn.parentElement.querySelectorAll('.acc-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function initAuthUI() {
    const authZone = document.getElementById('authZone');
    const adminPanel = document.getElementById('adminPanel');
    if (!authZone) return;

    if (currentUser) {
        let roleBadge = currentUser.role === 'admin' ? translations[currentLang].role_admin : translations[currentLang].role_user;
        authZone.innerHTML = `
            <div class="user-badge">
                <span><strong>${roleBadge}:</strong> ${currentUser.name}</span>
                <button class="btn-logout" id="logoutBtn">${translations[currentLang].logout}</button>
            </div>
        `;
        document.getElementById('logoutBtn').addEventListener('click', logoutUser);
        if (currentUser.role === 'admin' && adminPanel) adminPanel.classList.remove('hidden');
    } else {
        authZone.innerHTML = `<button class="btn btn-auth" id="openAuthBtnGlobal">${translations[currentLang].login_btn}</button>`;
        document.getElementById('openAuthBtnGlobal').addEventListener('click', openModal);
        if (adminPanel) adminPanel.classList.add('hidden');
    }
}

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    container.innerHTML = '';

    projectsData.forEach(project => {
        const hasVoted = currentUser && votedProjects[currentUser.name] && votedProjects[currentUser.name].includes(project.id);
        const card = document.createElement('div');
        card.className = 'project-card';
        
        let adminToolsHtml = '';
        if (currentUser && currentUser.role === 'admin') {
            adminToolsHtml = `
                <div class="project-admin-tools">
                    <button class="btn-card-edit" onclick="openEditProjectModal(${project.id})">${translations[currentLang].btn_edit_act}</button>
                    <button class="btn-card-delete" onclick="deleteProject(${project.id})">${translations[currentLang].btn_delete_act}</button>
                </div>
            `;
        }

        const title = currentLang === 'ru' ? project.titleRu : (project.titleKy || project.titleRu);
        const desc = currentLang === 'ru' ? project.descRu : (project.descKy || project.descRu);

        card.innerHTML = `
            <img src="${project.image}" alt="${title}" class="project-img">
            <div class="project-body">
                <span class="project-status">• Голосование</span>
                <h3 class="project-title">${title}</h3>
                <p class="project-desc">${desc}</p>
                <div class="project-footer">
                    <span class="vote-count" id="votes-${project.id}">${project.votes} ${translations[currentLang].votes_count_txt}</span>
                    <button class="btn ${hasVoted ? 'btn-secondary' : 'btn-primary'}" id="btn-vote-${project.id}" onclick="castVote(${project.id})">
                        ${hasVoted ? translations[currentLang].voted_btn : translations[currentLang].vote_btn}
                    </button>
                </div>
            </div>
            ${adminToolsHtml}
        `;
        container.appendChild(card);
    });
}

function castVote(projectId) {
    if (!currentUser) { alert(translations[currentLang].alert_auth); openModal(); return; }
    const username = currentUser.name;
    if (!votedProjects[username]) votedProjects[username] = [];
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    if (votedProjects[username].includes(projectId)) {
        project.votes--; votedProjects[username] = votedProjects[username].filter(id => id !== projectId);
    } else {
        project.votes++; votedProjects[username].push(projectId);
    }
    localStorage.setItem('votedProjects', JSON.stringify(votedProjects));
    localStorage.setItem('dynamicProjects', JSON.stringify(projectsData)); 
    renderProjects();
}

window.deleteProject = function(id) {
    if(!confirm(translations[currentLang].confirm_delete)) return;
    projectsData = projectsData.filter(p => p.id !== id);
    localStorage.setItem('dynamicProjects', JSON.stringify(projectsData));
    renderProjects();
}

window.openEditProjectModal = function(id) {
    const project = projectsData.find(p => p.id === id);
    if(!project) return;
    document.getElementById('editProjectId').value = project.id;
    document.getElementById('editProjectTitle').value = currentLang === 'ru' ? project.titleRu : (project.titleKy || project.titleRu);
    document.getElementById('editProjectDesc').value = currentLang === 'ru' ? project.descRu : (project.descKy || project.descRu);
    document.getElementById('editProjectVotes').value = project.votes;
    document.getElementById('editModal').classList.add('open');
}

window.closeEditModal = function() { document.getElementById('editModal').classList.remove('open'); }

function initEditFormEvent() {
    const form = document.getElementById('editProjectForm');
    if(!form) return;
    form.onsubmit = function(e) {
        e.preventDefault();
        const id = parseInt(document.getElementById('editProjectId').value);
        const title = document.getElementById('editProjectTitle').value;
        const desc = document.getElementById('editProjectDesc').value;
        const votes = parseInt(document.getElementById('editProjectVotes').value);
        const idx = projectsData.findIndex(p => p.id === id);
        if(idx > -1) {
            if(currentLang === 'ru') { projectsData[idx].titleRu = title; projectsData[idx].descRu = desc; } 
            else { projectsData[idx].titleKy = title; projectsData[idx].descKy = desc; }
            projectsData[idx].votes = votes;
            localStorage.setItem('dynamicProjects', JSON.stringify(projectsData));
            renderProjects(); closeEditModal();
        }
    };
}

function initFormEvents() {
    const form = document.getElementById('ideaForm');
    if(!form) return;
    form.onsubmit = function(e) {
        e.preventDefault();
        const title = document.getElementById('ideaTitle').value;
        const author = document.getElementById('authorNameField').value;
        const desc = document.getElementById('ideaDesc').value;
        const newRequest = { id: Date.now(), author };
        if(currentLang === 'ru') { newRequest.titleRu = title; newRequest.descRu = desc; } 
        else { newRequest.titleKy = title; newRequest.descKy = desc; }
        moderationQueue.push(newRequest);
        localStorage.setItem('moderationQueue', JSON.stringify(moderationQueue));
        renderModerationQueue(); this.reset(); initAuthUI();
        alert(translations[currentLang].alert_suggest);
    };
}

window.approveIdea = function(id) {
    const idx = moderationQueue.findIndex(item => item.id === id);
    if (idx > -1) {
        const item = moderationQueue.splice(idx, 1)[0];
        const newProject = {
            id: item.id, titleRu: item.titleRu || item.titleKy, titleKy: item.titleKy || item.titleRu,
            descRu: item.descRu || item.descKy || "Описание инициативы.", descKy: item.descKy || item.descRu || "Демилге.",
            votes: 0, image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=400&auto=format&fit=crop"
        };
        projectsData.unshift(newProject);
        approvedIdeas.unshift({ titleRu: item.titleRu || item.titleKy, titleKy: item.titleKy || item.titleRu, author: item.author });
        localStorage.setItem('moderationQueue', JSON.stringify(moderationQueue));
        localStorage.setItem('dynamicProjects', JSON.stringify(projectsData));
        localStorage.setItem('approvedIdeas', JSON.stringify(approvedIdeas));
        renderProjects(); renderIdeas(); renderModerationQueue();
    }
}

window.rejectIdea = function(id) {
    moderationQueue = moderationQueue.filter(item => item.id !== id);
    localStorage.setItem('moderationQueue', JSON.stringify(moderationQueue));
    renderModerationQueue();
}

function renderIdeas() {
    const stack = document.getElementById('ideasStack'); if(!stack) return; stack.innerHTML = '';
    approvedIdeas.forEach(idea => {
        const title = currentLang === 'ru' ? idea.titleRu : (idea.titleKy || idea.titleRu);
        stack.innerHTML += `<div class="idea-item"><h4>${title}</h4><span>${translations[currentLang].author_txt}: ${idea.author}</span></div>`;
    });
}

function renderModerationQueue() {
    const queueContainer = document.getElementById('moderationQueue'); if (!queueContainer) return; queueContainer.innerHTML = '';
    if (moderationQueue.length === 0) { queueContainer.innerHTML = `<p class="no-ideas">${translations[currentLang].queue_empty}</p>`; return; }
    moderationQueue.forEach(item => {
        const title = currentLang === 'ru' ? item.titleRu : (item.titleKy || item.titleRu);
        const div = document.createElement('div'); div.className = 'mod-item';
        div.innerHTML = `<div><h4>${title}</h4><p>${item.author}</p></div>
            <div><button class="btn btn-approve" onclick="approveIdea(${item.id})">✓</button>
            <button class="btn btn-reject" onclick="rejectIdea(${item.id})">&times;</button></div>`;
        queueContainer.appendChild(div);
    });
}

function initModalEvents() {
    const modal = document.getElementById('authModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabLoginBtn = document.getElementById('tabLoginBtn');
    const tabRegisterBtn = document.getElementById('tabRegisterBtn');
    const closeAuthBtn = document.getElementById('closeAuthBtn');

    if(!modal || !loginForm || !registerForm) return;

    closeAuthBtn.onclick = () => modal.classList.remove('open');

    // Переключение вкладок «Вход» и «Регистрация»
    tabLoginBtn.onclick = () => {
        tabLoginBtn.classList.add('active');
        tabRegisterBtn.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    };

    tabRegisterBtn.onclick = () => {
        tabRegisterBtn.classList.add('active');
        tabLoginBtn.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    };

    // Обработка Входа
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const loginVal = document.getElementById('loginEmail').value.trim();
        const passwordVal = document.getElementById('loginPassword').value;

        if (loginVal === 'admin') {
            currentUser = { name: "Администратор", role: "admin" };
        } else {
            const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
            const foundUser = users.find(u => u.login === loginVal && u.password === passwordVal);

            if (foundUser) {
                currentUser = { name: foundUser.name, role: "user" };
            } else {
                // Демо-вход, если пользователя нет в базе
                currentUser = { name: loginVal, role: "user" };
            }
        }

        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        initAuthUI(); 
        renderProjects(); 
        renderModerationQueue(); 
        modal.classList.remove('open'); 
        e.target.reset();
    };

    // Обработка Регистрации
    registerForm.onsubmit = (e) => {
        e.preventDefault();
        const regName = document.getElementById('regName').value.trim();
        const regEmail = document.getElementById('regEmail').value.trim();
        const regPassword = document.getElementById('regPassword').value;

        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        
        if (users.some(u => u.login === regEmail) || regEmail === 'admin') {
            alert("Этот логин уже занят!");
            return;
        }

        users.push({ name: regName, login: regEmail, password: regPassword });
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        currentUser = { name: regName, role: "user" };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        initAuthUI();
        renderProjects();
        modal.classList.remove('open');
        e.target.reset();
        alert("Регистрация успешна!");
    };
}

window.openModal = function() { 
    document.getElementById('authModal').classList.add('open'); 
}

function logoutUser() { 
    currentUser = null; 
    localStorage.removeItem('currentUser'); 
    initAuthUI(); 
    renderProjects(); 
}