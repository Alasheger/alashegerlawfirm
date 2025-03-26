document.addEventListener('DOMContentLoaded', function () {
    // تفاعل مع نموذج الاتصال
    const contactForm = document.querySelector('#contact-form');
    const formMessage = document.querySelector('#form-message');
    
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // استخراج البيانات من النموذج
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name && email && message) {
            formMessage.textContent = "تم إرسال رسالتك بنجاح!";
            formMessage.style.color = "green";
            formMessage.style.textAlign = "center";
            
            // إرسال البيانات باستخدام AJAX أو الفعالية المناسبة في المستقبل
            console.log("البيانات المرسلة:", { name, email, message });
        } else {
            formMessage.textContent = "يرجى ملء جميع الحقول.";
            formMessage.style.color = "red";
            formMessage.style.textAlign = "center";
        }
    });

    // تحسين التنقل باستخدام الأزرار
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // الانتقال السلس إلى القسم المطلوب
            window.scrollTo({
                top: targetSection.offsetTop - 50, // المسافة بين الأعلى والنص
                behavior: 'smooth'
            });
        });
    });

    // إضافة تأثيرات تفاعلية على الأزرار
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        button.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // إضافة تأثيرات ظهور ديناميكي للأقسام
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            if (window.scrollY + window.innerHeight > section.offsetTop + 100) {
                section.classList.add('visible');
            }
        });
    });

    // تطبيق تأثيرات الفتح عند التمرير
    sections.forEach(section => {
        section.classList.add('hidden');  // إضافة class مخفي مسبقًا
    });

    // إضافة تأثيرات الانتقال عند التمرير
    const style = document.createElement('style');
    style.innerHTML = `
        section.hidden {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});

// دالة لتغيير اللغةdocument.addEventListener('DOMContentLoaded', function () {
    // دالة لتغيير اللغة
    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang]');
        const langData = {
            ar: {
                title: "شركة الدكتور محمد الأشيقر للمحاماة والتحكيم والاستشارات القانونية",
                welcome: "مرحبًا بكم في شركة الدكتور محمد الأشيقر",
                description: "نحن نقدم خدمات قانونية متميزة في مجالات المحاماة والتحكيم والاستشارات القانونية.",
                explore: "اكتشف خدماتنا",
                home: "الصفحة الرئيسية",
                services: "خدماتنا",
                contact: "اتصل بنا",
                about: "من نحن",
                clients: "بعض عملائنا",
                footer: "© 2025 شركة الدكتور محمد الأشيقر. جميع الحقوق محفوظة."
            },
            en: {
                title: "Dr. Mohammed Al-Asheqir Law Firm for Law, Arbitration, and Legal Consultations",
                welcome: "Welcome to Dr. Mohammed Al-Asheqir Law Firm",
                description: "We provide distinguished legal services in the fields of law, arbitration, and legal consultations.",
                explore: "Explore Our Services",
                home: "Home",
                services: "Our Services",
                contact: "Contact Us",
                about: "About Us",
                clients: "Our Clients",
                footer: "© 2025 Dr. Mohammed Al-Asheqir Law Firm. All Rights Reserved."
            }
        };

        // تغيير المحتوى بناءً على اللغة المختارة
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (langData[lang][key]) {
                element.textContent = langData[lang][key];
            }
        });

        // تغيير اتجاه النصوص بناءً على اللغة
        if (lang === 'en') {
            document.body.classList.add('en');
            document.body.classList.remove('ar');
        } else {
            document.body.classList.add('ar');
            document.body.classList.remove('en');
        }
    }

    // افتراضيًا تفعيل اللغة العربية عند تحميل الصفحة
    changeLanguage('ar');
});

