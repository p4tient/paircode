/*
  Paircode question list. This is the only file you need to edit.

  EDITING RULES (they keep codes made earlier working):
  1. Never change or reuse an id. Ids are whole numbers from 1 to 255.
  2. To remove a question, set  retired: true  on it. Don't delete it.
  3. Each question has 2 to 4 options. Add new options only at the end,
     never reorder them. If an option's meaning changes, make a new
     question with a new id and retire the old one.
  4. Display order is the order in this file. Move questions freely.
  5. Wording and typo fixes are fine as long as the meaning stays the same.
  6. Every language must have the same number of options.

  Fields:
    id         permanent number, see rule 1
    pack       key of a pack from the "packs" list below
    sensitive  true shows a warning badge next to the question
    showIf     { id: X, answer: N } shows the question only when question X
               is answered with option N (options count from 0)
    text       the question in each language
    options    one list per language, or the name of a shared scale

  The page checks this file on load and lists any mistakes at the top.
  Next free id: 54
*/
window.PAIRCODE_DATA = {
  languages: ["en", "uk", "pl"],

  packs: [
    { key: "core",      title: { en: "Must-knows",          uk: "Головне",                   pl: "Najważniejsze" } },
    { key: "lifestyle", title: { en: "Lifestyle",           uk: "Спосіб життя",              pl: "Styl życia" } },
    { key: "dating",    title: { en: "Dating",              uk: "Побачення",                 pl: "Randki" } },
    { key: "together",  title: { en: "Together",            uk: "Разом",                     pl: "Razem" } },
    { key: "trust",     title: { en: "Privacy and trust",   uk: "Довіра й приватність",      pl: "Zaufanie i prywatność" } },
    { key: "beliefs",   title: { en: "Beliefs and personal", uk: "Погляди й особисте",       pl: "Poglądy i sprawy osobiste" } },
    { key: "hottakes",  title: { en: "Hot takes",           uk: "Гарячі теми",               pl: "Gorące tematy" } }
  ],

  scales: {
    agree: {
      en: ["Agree", "Rather agree", "Rather disagree", "Disagree"],
      uk: ["Згоден(-на)", "Радше так", "Радше ні", "Не згоден(-на)"],
      pl: ["Zgadzam się", "Raczej tak", "Raczej nie", "Nie zgadzam się"]
    },
    care: {
      en: ["Words", "Time together", "Help", "Touch"],
      uk: ["Слова", "Спільний час", "Допомога", "Дотики"],
      pl: ["Słowa", "Wspólny czas", "Pomoc", "Dotyk"]
    }
  },

  questions: [
    /* ---------- Must-knows ---------- */
    { id: 1, pack: "core",
      text: { en: "What are you looking for?", uk: "Що шукаєш?", pl: "Czego szukasz?" },
      options: {
        en: ["Marriage", "Long-term relationship", "See where it goes", "Something casual"],
        uk: ["Шлюб", "Довгі стосунки", "Подивимось, як піде", "Щось легке"],
        pl: ["Małżeństwa", "Stałego związku", "Zobaczymy, co wyjdzie", "Czegoś niezobowiązującego"] } },

    { id: 2, pack: "core",
      text: { en: "Your age", uk: "Твій вік", pl: "Twój wiek" },
      options: {
        en: ["18–25", "26–32", "33–40", "41+"],
        uk: ["18–25", "26–32", "33–40", "41+"],
        pl: ["18–25", "26–32", "33–40", "41+"] } },

    { id: 3, pack: "core",
      text: { en: "Do you have children?", uk: "Маєш дітей?", pl: "Masz dzieci?" },
      options: { en: ["Yes", "No"], uk: ["Так", "Ні"], pl: ["Tak", "Nie"] } },

    { id: 48, pack: "core", showIf: { id: 3, answer: 0 },
      text: { en: "Your children:", uk: "Твої діти:", pl: "Twoje dzieci:" },
      options: {
        en: ["Live with me", "I see them often", "I see them rarely"],
        uk: ["Живуть зі мною", "Бачу їх часто", "Бачу їх рідко"],
        pl: ["Mieszkają ze mną", "Widuję je często", "Widuję je rzadko"] } },

    { id: 4, pack: "core",
      text: { en: "Do you want (more) children?", uk: "Хочеш дітей (ще)?", pl: "Chcesz (mieć więcej) dzieci?" },
      options: {
        en: ["Yes, within ~2 years", "Yes, someday", "Open to it", "No"],
        uk: ["Так, протягом ~2 років", "Так, колись", "Відкритий(-а) до цього", "Ні"],
        pl: ["Tak, w ciągu ~2 lat", "Tak, kiedyś", "Jestem otwarty/a", "Nie"] } },

    { id: 5, pack: "core",
      text: { en: "Smoking", uk: "Куріння", pl: "Palenie" },
      options: {
        en: ["No", "Vape only", "Rarely, at parties", "Regularly"],
        uk: ["Не курю", "Лише вейп", "Рідко, на вечірках", "Регулярно"],
        pl: ["Nie palę", "Tylko e-papieros", "Rzadko, na imprezach", "Regularnie"] } },

    { id: 6, pack: "core",
      text: { en: "Alcohol", uk: "Алкоголь", pl: "Alkohol" },
      options: {
        en: ["Never", "Rarely", "Moderately, on weekends", "Often"],
        uk: ["Ніколи", "Рідко", "Помірно, на вихідних", "Часто"],
        pl: ["Nigdy", "Rzadko", "Umiarkowanie, w weekendy", "Często"] } },

    { id: 14, pack: "core",
      text: { en: "How often should you text early on?", uk: "Як часто переписуватися на початку стосунків?", pl: "Jak często pisać do siebie na początku znajomości?" },
      options: {
        en: ["Daily is a must", "Most days", "A few times a week", "When there's something to say"],
        uk: ["Щодня обов'язково", "Майже щодня", "Кілька разів на тиждень", "Коли є що сказати"],
        pl: ["Codziennie, koniecznie", "Prawie codziennie", "Kilka razy w tygodniu", "Kiedy jest coś do powiedzenia"] } },

    { id: 21, pack: "core",
      text: { en: "With money you are", uk: "З грошима ти", pl: "Z pieniędzmi jesteś" },
      options: {
        en: ["A saver", "Mostly a saver", "Mostly a spender", "A spender"],
        uk: ["Ощадливий(-а)", "Радше ощадливий(-а)", "Радше транжира", "Транжира"],
        pl: ["Oszczędny/a", "Raczej oszczędny/a", "Raczej rozrzutny/a", "Rozrzutny/a"] } },

    { id: 27, pack: "core",
      text: { en: "Before the first date", uk: "Перед першим побаченням", pl: "Przed pierwszą randką" },
      options: {
        en: ["Meet as soon as possible", "Text for about a week", "Text for a few weeks", "Friends first"],
        uk: ["Зустрітися якнайшвидше", "Переписка десь тиждень", "Переписка кілька тижнів", "Спершу дружба"],
        pl: ["Spotkać się jak najszybciej", "Pisać ok. tygodnia", "Pisać kilka tygodni", "Najpierw przyjaźń"] } },

    /* ---------- Lifestyle ---------- */
    { id: 7, pack: "lifestyle",
      text: { en: "Social life", uk: "Соціальне життя", pl: "Życie towarzyskie" },
      options: {
        en: ["Homebody", "Small circle", "Balanced", "Out most weekends"],
        uk: ["Домосід(-ка)", "Вузьке коло", "Збалансовано", "Більшість вихідних на людях"],
        pl: ["Domator/ka", "Wąskie grono", "Pół na pół", "Większość weekendów poza domem"] } },

    { id: 8, pack: "lifestyle",
      text: { en: "Personal space", uk: "Особистий простір", pl: "Przestrzeń osobista" },
      options: {
        en: ["I need lots of time alone", "Some", "A little", "Together as much as possible"],
        uk: ["Потрібно багато часу наодинці", "Трохи", "Небагато", "Разом якомога більше"],
        pl: ["Potrzebuję dużo czasu dla siebie", "Trochę", "Niewiele", "Razem jak najwięcej"] } },

    { id: 9, pack: "lifestyle",
      text: { en: "Your rhythm", uk: "Твій ритм", pl: "Twój rytm" },
      options: {
        en: ["Early bird", "Night owl", "Shift work", "Flexible"],
        uk: ["Жайворонок", "Сова", "Змінна робота", "Гнучкий графік"],
        pl: ["Skowronek", "Sowa", "Praca zmianowa", "Elastycznie"] } },

    { id: 10, pack: "lifestyle",
      text: { en: "Ideal weekend", uk: "Ідеальні вихідні", pl: "Idealny weekend" },
      options: {
        en: ["Rest at home", "Hobbies and projects", "Trips and nature", "Events and parties"],
        uk: ["Відпочинок вдома", "Хобі та проєкти", "Поїздки й природа", "Події та вечірки"],
        pl: ["Odpoczynek w domu", "Hobby i projekty", "Wycieczki i natura", "Wydarzenia i imprezy"] } },

    { id: 11, pack: "lifestyle",
      text: { en: "Physical activity", uk: "Фізична активність", pl: "Aktywność fizyczna" },
      options: {
        en: ["Very active", "Moderate", "Light", "Not active"],
        uk: ["Дуже активний(-а)", "Помірно", "Трохи", "Неактивний(-а)"],
        pl: ["Bardzo aktywny/a", "Umiarkowanie", "Trochę", "Nieaktywny/a"] } },

    { id: 12, pack: "lifestyle",
      text: { en: "Pets", uk: "Тварини", pl: "Zwierzęta" },
      options: {
        en: ["Have one", "Want one", "Either way", "No pets"],
        uk: ["Маю", "Хочу", "Без різниці", "Без тварин"],
        pl: ["Mam", "Chcę", "Obojętne", "Bez zwierząt"] } },

    { id: 13, pack: "lifestyle",
      text: { en: "Social media", uk: "Соцмережі", pl: "Media społecznościowe" },
      options: {
        en: ["Post often", "Sometimes", "Rarely", "Not on it"],
        uk: ["Викладаю часто", "Іноді", "Рідко", "Не користуюсь"],
        pl: ["Publikuję często", "Czasem", "Rzadko", "Nie korzystam"] } },

    { id: 40, pack: "lifestyle",
      text: { en: "Getting around", uk: "Пересування", pl: "Poruszanie się" },
      options: {
        en: ["Own car", "Licence, no car", "No licence"],
        uk: ["Є машина", "Є права, без машини", "Без прав"],
        pl: ["Mam auto", "Prawo jazdy, bez auta", "Bez prawa jazdy"] } },

    { id: 24, pack: "lifestyle",
      text: { en: "Moving", uk: "Переїзд", pl: "Przeprowadzka" },
      options: {
        en: ["Staying where I am", "Open to moving within the country", "Open to moving abroad", "Planning to move"],
        uk: ["Залишаюсь, де є", "Готовий(-а) в межах країни", "Готовий(-а) за кордон", "Планую переїхати"],
        pl: ["Zostaję tam, gdzie jestem", "Mogę w obrębie kraju", "Mogę za granicę", "Planuję się przenieść"] } },

    { id: 43, pack: "lifestyle",
      text: { en: "Goals", uk: "Цілі", pl: "Cele" },
      options: {
        en: ["Clear goals, working on them", "Clear goals, not started yet", "Still figuring it out", "Happy as things are"],
        uk: ["Чіткі цілі, працюю над ними", "Чіткі цілі, ще не почав(-ла)", "Ще шукаю себе", "Мене все влаштовує"],
        pl: ["Jasne cele, pracuję nad nimi", "Jasne cele, jeszcze nie zacząłem/zaczęłam", "Wciąż szukam", "Jest dobrze, jak jest"] } },

    /* ---------- Dating ---------- */
    { id: 28, pack: "dating",
      text: { en: "Who should write first?", uk: "Хто має писати першим?", pl: "Kto powinien napisać pierwszy?" },
      options: {
        en: ["The man", "Either", "The woman"],
        uk: ["Чоловік", "Будь-хто", "Жінка"],
        pl: ["Mężczyzna", "Ktokolwiek", "Kobieta"] } },

    { id: 22, pack: "dating",
      text: { en: "The bill on a first date", uk: "Рахунок на першому побаченні", pl: "Rachunek na pierwszej randce" },
      options: {
        en: ["The man pays", "Whoever invited", "Split", "Take turns"],
        uk: ["Платить чоловік", "Хто запросив", "Навпіл", "По черзі"],
        pl: ["Płaci mężczyzna", "Kto zaprosił", "Po połowie", "Na zmianę"] } },

    { id: 29, pack: "dating",
      text: { en: "Flowers and small gifts", uk: "Квіти й дрібні подарунки", pl: "Kwiaty i drobne prezenty" },
      options: {
        en: ["Often", "On occasions", "Rarely", "Not needed"],
        uk: ["Часто", "З нагоди", "Рідко", "Не потрібно"],
        pl: ["Często", "Od święta", "Rzadko", "Niepotrzebne"] } },

    { id: 30, pack: "dating", sensitive: true,
      text: { en: "Going to each other's place", uk: "Піти одне до одного додому", pl: "Wizyta u siebie w domu" },
      options: {
        en: ["Fine early on", "After a few dates", "Once we're a couple"],
        uk: ["Нормально одразу", "Після кількох побачень", "Коли вже пара"],
        pl: ["Od początku OK", "Po kilku randkach", "Gdy jesteśmy parą"] } },

    { id: 31, pack: "dating", sensitive: true,
      text: { en: "Flirting by text", uk: "Флірт у переписці", pl: "Flirt w wiadomościach" },
      options: {
        en: ["Bold from the start", "Builds gradually", "Mostly after meeting", "Keep it light"],
        uk: ["Сміливо з самого початку", "Поступово", "Здебільшого після зустрічі", "Легко, без натяків"],
        pl: ["Odważnie od początku", "Stopniowo", "Głównie po spotkaniu", "Lekko, bez podtekstów"] } },

    /* ---------- Together ---------- */
    { id: 15, pack: "together",
      text: { en: "Moving in together", uk: "Жити разом", pl: "Wspólne mieszkanie" },
      options: {
        en: ["Within a year", "After 1–2 years", "After marriage", "Prefer separate places"],
        uk: ["Протягом року", "Через 1–2 роки", "Після шлюбу", "Краще окремо"],
        pl: ["W ciągu roku", "Po 1–2 latach", "Po ślubie", "Wolę osobno"] } },

    { id: 16, pack: "together",
      text: { en: "Visiting parents", uk: "Візити до батьків", pl: "Wizyty u rodziców" },
      options: {
        en: ["Weekly", "Every 2 weeks", "Monthly", "Rarely"],
        uk: ["Щотижня", "Раз на 2 тижні", "Раз на місяць", "Рідко"],
        pl: ["Co tydzień", "Co 2 tygodnie", "Raz w miesiącu", "Rzadko"] } },

    { id: 17, pack: "together",
      text: { en: "In a conflict", uk: "У конфлікті", pl: "W konflikcie" },
      options: {
        en: ["Talk right away", "Cool down, then talk", "Talk the next day or later", "Let it go"],
        uk: ["Говорю одразу", "Охолону, тоді говорю", "Говорю наступного дня чи пізніше", "Відпускаю"],
        pl: ["Rozmawiam od razu", "Ochłonę, potem rozmawiam", "Rozmawiam następnego dnia lub później", "Odpuszczam"] } },

    { id: 18, pack: "together",
      text: { en: "You show care through", uk: "Турботу проявляєш через", pl: "Troskę okazujesz przez" },
      options: "care" },

    { id: 42, pack: "together",
      text: { en: "You most want to receive", uk: "Найбільше хочеш отримувати", pl: "Najbardziej chcesz dostawać" },
      options: "care" },

    { id: 19, pack: "together",
      text: { en: "Your humour", uk: "Твій гумор", pl: "Twoje poczucie humoru" },
      options: {
        en: ["Dry", "Silly", "Dark", "Gentle"],
        uk: ["Сухий", "Дурнуватий", "Чорний", "М'який"],
        pl: ["Suche", "Głupkowate", "Czarne", "Łagodne"] } },

    { id: 20, pack: "together",
      text: { en: "Planning", uk: "Планування", pl: "Planowanie" },
      options: {
        en: ["Plan everything", "Mostly plan", "Mostly spontaneous", "Fully spontaneous"],
        uk: ["Планую все", "Здебільшого планую", "Здебільшого спонтанно", "Повністю спонтанно"],
        pl: ["Planuję wszystko", "Raczej planuję", "Raczej spontanicznie", "Całkiem spontanicznie"] } },

    { id: 32, pack: "together",
      text: { en: "Roles in a couple", uk: "Ролі в парі", pl: "Role w związku" },
      options: {
        en: ["Traditional", "Mostly traditional", "Split by strengths", "Strictly equal"],
        uk: ["Традиційні", "Радше традиційні", "За сильними сторонами", "Строго порівну"],
        pl: ["Tradycyjne", "Raczej tradycyjne", "Według mocnych stron", "Ściśle po równo"] } },

    { id: 33, pack: "together",
      text: { en: "Housework", uk: "Домашні справи", pl: "Obowiązki domowe" },
      options: {
        en: ["50/50", "By preference", "Mostly one partner", "Outsource what we can"],
        uk: ["50/50", "Хто що любить", "Здебільшого один", "Делегувати, що можна"],
        pl: ["50/50", "Kto co lubi", "Głównie jedna osoba", "Zlecać, co się da"] } },

    { id: 34, pack: "together",
      text: { en: "After a hard day you want", uk: "Після важкого дня хочеш", pl: "Po ciężkim dniu chcesz" },
      options: {
        en: ["To talk it through", "Quiet time alone", "A distraction together", "Support, no advice"],
        uk: ["Проговорити", "Тиші наодинці", "Відволіктися разом", "Підтримки без порад"],
        pl: ["Przegadać to", "Ciszy w samotności", "Oderwać się razem", "Wsparcia bez rad"] } },

    { id: 23, pack: "together",
      text: { en: "Money in a couple", uk: "Гроші в парі", pl: "Pieniądze w związku" },
      options: {
        en: ["Fully shared", "Shared plus personal", "Separate, split 50/50", "Separate, split by income"],
        uk: ["Повністю спільні", "Спільні плюс особисті", "Окремо, навпіл", "Окремо, пропорційно доходу"],
        pl: ["Całkiem wspólne", "Wspólne plus osobiste", "Osobno, po połowie", "Osobno, według dochodu"] } },

    { id: 41, pack: "together", sensitive: true,
      text: { en: "Physical affection", uk: "Тактильність", pl: "Czułość fizyczna" },
      options: {
        en: ["Lots, in public too", "Lots, in private", "Moderate", "Little"],
        uk: ["Багато, і на людях", "Багато, наодинці", "Помірно", "Мало"],
        pl: ["Dużo, także publicznie", "Dużo, prywatnie", "Umiarkowanie", "Mało"] } },

    /* ---------- Privacy and trust ---------- */
    { id: 35, pack: "trust",
      text: { en: "The relationship on social media", uk: "Стосунки в соцмережах", pl: "Związek w social mediach" },
      options: {
        en: ["Post openly", "Occasionally", "Keep it private", "No photos of me online"],
        uk: ["Викладаю відкрито", "Іноді", "Не виставляю", "Жодних моїх фото в мережі"],
        pl: ["Pokazuję otwarcie", "Czasem", "Nie pokazuję", "Żadnych moich zdjęć w sieci"] } },

    { id: 36, pack: "trust",
      text: { en: "Talking about us with friends", uk: "Розповідати друзям про нас", pl: "Opowiadanie znajomym o nas" },
      options: {
        en: ["Share a lot", "Some", "Basics only", "Nothing private"],
        uk: ["Багато ділюсь", "Дещо", "Лише загальне", "Нічого особистого"],
        pl: ["Dużo opowiadam", "Trochę", "Tylko ogólnie", "Nic prywatnego"] } },

    { id: 37, pack: "trust",
      text: { en: "Phones", uk: "Телефони", pl: "Telefony" },
      options: {
        en: ["Open to each other", "Private, nothing to hide", "Fully private"],
        uk: ["Відкриті одне для одного", "Особисті, але нічого не приховую", "Повністю особисті"],
        pl: ["Otwarte dla siebie", "Prywatne, nic do ukrycia", "Całkiem prywatne"] } },

    { id: 38, pack: "trust",
      text: { en: "Close friends of the opposite sex", uk: "Близькі друзі протилежної статі", pl: "Bliscy przyjaciele płci przeciwnej" },
      options: {
        en: ["Fine", "Fine, if it's open", "Casual friends only", "Not OK"],
        uk: ["Нормально", "Нормально, якщо відкрито", "Лише знайомі", "Неприйнятно"],
        pl: ["W porządku", "W porządku, jeśli otwarcie", "Tylko znajomi", "Nie do przyjęcia"] } },

    { id: 39, pack: "trust",
      text: { en: "Contact with exes", uk: "Контакт з колишніми", pl: "Kontakt z byłymi" },
      options: {
        en: ["Friends is fine", "Only if no feelings are left", "Minimal", "None"],
        uk: ["Дружити нормально", "Лише якщо почуттів не лишилось", "Мінімальний", "Жодного"],
        pl: ["Przyjaźń jest OK", "Tylko jeśli nie ma uczuć", "Minimalny", "Żaden"] } },

    /* ---------- Beliefs and personal ---------- */
    { id: 25, pack: "beliefs", sensitive: true,
      text: { en: "Religion", uk: "Релігія", pl: "Religia" },
      options: {
        en: ["Not religious", "Spiritual, not religious", "Practising, not pushy", "Central to my life"],
        uk: ["Нерелігійний(-а)", "Духовність без конфесії", "Практикую, але не нав'язую", "Центральне в житті"],
        pl: ["Niereligijny/a", "Duchowość bez instytucji", "Praktykuję, nie narzucam", "Centrum mojego życia"] } },

    { id: 26, pack: "beliefs", sensitive: true,
      text: { en: "Politics", uk: "Політика", pl: "Polityka" },
      options: {
        en: ["Left", "Centre", "Right", "Not interested"],
        uk: ["Ліві", "Центр", "Праві", "Не цікавлюсь"],
        pl: ["Lewica", "Centrum", "Prawica", "Nie interesuję się"] } },

    { id: 46, pack: "beliefs",
      text: { en: "Astrology, tarot, family constellations", uk: "Астрологія, таро, розстановки", pl: "Astrologia, tarot, ustawienia rodzinne" },
      options: {
        en: ["Into it", "Curious", "Sceptical", "Hard no"],
        uk: ["Захоплююсь", "Цікаво", "Скептично", "Категорично ні"],
        pl: ["Interesuję się", "Ciekawi mnie", "Sceptycznie", "Zdecydowanie nie"] } },

    { id: 44, pack: "beliefs", sensitive: true,
      text: { en: "Attachment style (your own guess)", uk: "Тип прив'язаності (як сам(а) вважаєш)", pl: "Styl przywiązania (jak sądzisz)" },
      options: {
        en: ["Secure", "Anxious", "Avoidant", "Don't know"],
        uk: ["Надійний", "Тривожний", "Уникаючий", "Не знаю"],
        pl: ["Bezpieczny", "Lękowy", "Unikający", "Nie wiem"] } },

    { id: 45, pack: "beliefs", sensitive: true,
      text: { en: "Therapy", uk: "Психолог", pl: "Terapia" },
      options: {
        en: ["Going or went, it helped", "Went, it didn't help", "Never, open to it", "Never, not for me"],
        uk: ["Ходжу чи ходив(-ла), допомогло", "Ходив(-ла), не допомогло", "Не ходив(-ла), але відкритий(-а)", "Не ходив(-ла), не моє"],
        pl: ["Chodzę lub chodziłem/am, pomogło", "Chodziłem/am, nie pomogło", "Nigdy, ale jestem otwarty/a", "Nigdy, nie dla mnie"] } },

    { id: 47, pack: "beliefs", sensitive: true,
      text: { en: "Over your last relationship?", uk: "Відпустив(-ла) минулі стосунки?", pl: "Poprzedni związek masz za sobą?" },
      options: {
        en: ["Fully", "Mostly", "Still processing"],
        uk: ["Повністю", "Здебільшого", "Ще переживаю"],
        pl: ["Całkowicie", "W większości", "Wciąż przeżywam"] } },

    /* ---------- Hot takes ---------- */
    { id: 49, pack: "hottakes",
      text: { en: "“His salary is the family budget, hers is her own.”",
              uk: "«Зарплата чоловіка — сімейний бюджет, зарплата жінки — її зарплата.»",
              pl: "„Pensja mężczyzny to budżet rodziny, pensja kobiety to jej pensja.”" },
      options: "agree" },

    { id: 50, pack: "hottakes",
      text: { en: "“The man creates the conditions, the woman creates the calm.”",
              uk: "«Чоловік створює умови, жінка створює спокій.»",
              pl: "„Mężczyzna tworzy warunki, kobieta tworzy spokój.”" },
      options: "agree" },

    { id: 51, pack: "hottakes",
      text: { en: "“Looking for friends on a dating app is fine.”",
              uk: "«Шукати друзів у додатку для знайомств — нормально.»",
              pl: "„Szukanie przyjaciół w aplikacji randkowej jest OK.”" },
      options: "agree" },

    { id: 52, pack: "hottakes",
      text: { en: "“Not having Instagram is a red flag.”",
              uk: "«Немає інстаграму — червоний прапорець.»",
              pl: "„Brak Instagrama to czerwona flaga.”" },
      options: "agree" },

    { id: 53, pack: "hottakes",
      text: { en: "“Sending a list of questions before a first date is normal.”",
              uk: "«Надіслати список питань перед першим побаченням — нормально.»",
              pl: "„Wysłanie listy pytań przed pierwszą randką to normalne.”" },
      options: "agree" }
  ]
};
