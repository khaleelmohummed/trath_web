// Language switching functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ar';
        this.translations = {};
        this.init();
    }
    
    init() {
        this.loadTranslations();
        this.setupEventListeners();
        this.applyLanguage(this.currentLang);
    }
    
    loadTranslations() {
        this.translations = {
            ar: {
                // Navigation
                'nav.home': 'الرئيسية',
                'nav.login': 'تسجيل الدخول',
                'nav.contact': 'تواصل معنا',
                'nav.heritage-types': 'أنواع التراث',
                
                // Hero Section
                'hero.title': 'اكتشف عظمة التراث اليمني',
                'hero.subtitle': 'رحلة عبر التاريخ والثقافة والحضارة اليمنية العريقة',
                'hero.explore': 'استكشف التراث',
                'hero.join': 'انضم إلينا',
                'hero.discover': 'اكتشف المزيد',
                
                // Heritage Types
                'heritage.title': 'أنواع التراث اليمني',
                'heritage.subtitle': 'اكتشف ثراء وتنوع التراث اليمني عبر العصور',
                'heritage.architectural': 'التراث المعماري',
                'heritage.architectural.desc': 'اكتشف روائع العمارة اليمنية التقليدية',
                'heritage.cultural': 'التراث الثقافي والفني',
                'heritage.cultural.desc': 'الرقصات والفنون الشعبية اليمنية',
                'heritage.clothing': 'الأزياء التقليدية',
                'heritage.clothing.desc': 'الملابس والحلي التراثية اليمنية',
                'heritage.food': 'التراث الغذائي',
                'heritage.food.desc': 'الأطباق والمشروبات التقليدية',
                'heritage.music': 'التراث الموسيقي',
                'heritage.music.desc': 'الألحان والآلات الموسيقية التراثية',
                'heritage.natural': 'التراث الطبيعي',
                'heritage.natural.desc': 'الطبيعة والبيئة اليمنية الفريدة',
                'heritage.explore': 'استكشف',
                'heritage.view-all': 'عرض جميع أنواع التراث',
                
                // Architectural Heritage
                'architectural.title': 'التراث المعماري اليمني',
                'architectural.subtitle': 'اكتشف روائع العمارة اليمنية التي تحكي قصة حضارة عريقة',
                'architectural.main-title': 'أنواع العمارة اليمنية التقليدية',
                'architectural.tower-houses': 'البيوت البرجية',
                'architectural.tower-houses.desc': 'البيوت البرجية في صنعاء القديمة تمثل تحفة معمارية فريدة، حيث تصل إلى 8 طوابق وتتميز بنوافذها المزخرفة والقمريات الملونة.',
                'architectural.palaces': 'القصور والحصون',
                'architectural.palaces.desc': 'قصور وحصون اليمن التاريخية مثل قصر دار الحجر وحصن ثولا تعكس عظمة الحضارة اليمنية وبراعة المعماريين القدماء.',
                'architectural.mosques': 'المساجد التاريخية',
                'architectural.mosques.desc': 'المساجد اليمنية التاريخية مثل الجامع الكبير في صنعاء تجمع بين الطراز المعماري الإسلامي والطابع اليمني المميز.',
                'architectural.markets': 'الأسواق التقليدية',
                'architectural.markets.desc': 'الأسواق اليمنية التقليدية بأقواسها وممراتها المسقوفة تمثل نموذجاً فريداً للعمارة التجارية التراثية.',
                'architectural.features-title': 'خصائص العمارة اليمنية',
                'architectural.features-desc': 'تتميز العمارة اليمنية بخصائص فريدة تجمع بين الجمال والوظيفية، حيث تم تطويرها عبر قرون لتتناسب مع المناخ والبيئة اليمنية.',
                'architectural.feature1': 'المواد المحلية',
                'architectural.feature1.desc': 'استخدام الحجر البازلتي والطين والخشب المحلي في البناء',
                'architectural.feature2': 'التكيف المناخي',
                'architectural.feature2.desc': 'تصميم يراعي المناخ المداري مع التهوية الطبيعية',
                'architectural.feature3': 'الزخارف التقليدية',
                'architectural.feature3.desc': 'النقوش والقمريات الملونة والزخارف الهندسية المميزة',
                'architectural.feature4': 'التخطيط العمراني',
                'architectural.feature4.desc': 'تخطيط المدن والأحياء بما يحافظ على الخصوصية والتماسك الاجتماعي',
                
                // Cultural Heritage
                'cultural.title': 'التراث الثقافي والفني اليمني',
                'cultural.subtitle': 'اكتشف ثراء الفنون والثقافة اليمنية التي تعكس هوية شعب عريق',
                'cultural.main-title': 'أشكال التراث الثقافي والفني',
                'cultural.dances': 'الرقصات الشعبية',
                'cultural.dances.desc': 'الرقصات اليمنية التقليدية مثل البرع والشرح تعبر عن فرح الشعب اليمني وتراثه العريق في المناسبات والاحتفالات.',
                'cultural.crafts': 'الحرف التقليدية',
                'cultural.crafts.desc': 'الحرف اليدوية اليمنية مثل صناعة الفخار والنسيج والخناجر تمثل إبداع الحرفيين اليمنيين عبر التاريخ.',
                'cultural.poetry': 'الشعر والأدب',
                'cultural.poetry.desc': 'الشعر اليمني الشعبي والفصيح يحمل في طياته حكمة الأجداد وتجاربهم في الحياة والحب والوطن.',
                'cultural.stories': 'الحكايات الشعبية',
                'cultural.stories.desc': 'الحكايات والأساطير اليمنية التي تنقل القيم والحكم من جيل إلى جيل عبر التراث الشفهي.',
                'cultural.importance-title': 'أهمية التراث الثقافي والفني',
                'cultural.importance-desc': 'يمثل التراث الثقافي والفني اليمني ذاكرة الشعب وهويته الحضارية، حيث يحمل في طياته قيم وتقاليد وخبرات تراكمت عبر آلاف السنين.',
                'cultural.feature1': 'التعبير الفني',
                'cultural.feature1.desc': 'أشكال متنوعة من التعبير الفني تعكس روح الشعب اليمني',
                'cultural.feature2': 'الحفظ والنقل',
                'cultural.feature2.desc': 'نقل المعرفة والقيم من جيل إلى جيل عبر الفنون',
                'cultural.feature3': 'التماسك الاجتماعي',
                'cultural.feature3.desc': 'تعزيز الروابط الاجتماعية والهوية الجماعية',
                'cultural.feature4': 'الإبداع والابتكار',
                'cultural.feature4.desc': 'مصدر إلهام للإبداع الفني والثقافي المعاصر',
                
                // Traditional Clothing
                'clothing.title': 'الأزياء التقليدية اليمنية',
                'clothing.subtitle': 'اكتشف جمال وأناقة الملابس التراثية اليمنية عبر التاريخ',
                'clothing.main-title': 'أنواع الأزياء التقليدية اليمنية',
                'clothing.women': 'الزي النسائي التقليدي',
                'clothing.women.desc': 'الأزياء النسائية اليمنية التقليدية تتميز بألوانها الزاهية وتطريزها الجميل والحلي الفضية التي تزينها.',
                'clothing.men': 'الزي الرجالي التقليدي',
                'clothing.men.desc': 'الأزياء الرجالية اليمنية مثل الفوطة والجنبية تعكس الهوية اليمنية الأصيلة والكرامة والعزة.',
                'clothing.jewelry': 'الحلي والمجوهرات',
                'clothing.jewelry.desc': 'الحلي اليمنية التقليدية من الفضة والذهب تحمل رموزاً ثقافية وتراثية عميقة.',
                'clothing.occasions': 'أزياء المناسبات',
                'clothing.occasions.desc': 'الأزياء الخاصة بالمناسبات والأعراس اليمنية تتميز بفخامتها وجمال تفاصيلها.',
                'clothing.significance-title': 'أهمية الأزياء التقليدية',
                'clothing.significance-desc': 'تمثل الأزياء التقليدية اليمنية جزءاً لا يتجزأ من الهوية الثقافية للشعب اليمني، حيث تحمل في طياتها تاريخاً عريقاً من الحرفية والإبداع.',
                'clothing.feature1': 'الفن والإبداع',
                'clothing.feature1.desc': 'تطريز وزخارف تعكس الحس الفني الرفيع للحرفيين اليمنيين',
                'clothing.feature2': 'الحرفية التقليدية',
                'clothing.feature2.desc': 'تقنيات صناعة وتطريز متوارثة عبر الأجيال',
                'clothing.feature3': 'الهوية الثقافية',
                'clothing.feature3.desc': 'تعبير عن الانتماء والهوية اليمنية الأصيلة',
                'clothing.feature4': 'القيمة التراثية',
                'clothing.feature4.desc': 'كنوز تراثية تحمل قيمة تاريخية وثقافية عالية',
                
                // Food Heritage
                'food.title': 'التراث الغذائي اليمني',
                'food.subtitle': 'اكتشف نكهات وأطباق اليمن التقليدية التي تحكي قصة الحضارة والثقافة',
                'food.main-title': 'الأطباق والمشروبات التقليدية',
                'food.mandi': 'المندي والكبسة',
                'food.mandi.desc': 'أطباق الأرز الشهيرة مع اللحم المطبوخ بالطريقة التقليدية في التنور، تمثل قمة فن الطبخ اليمني.',
                'food.tea': 'الشاهي الأدني',
                'food.tea.desc': 'الشاي اليمني التقليدي بالحليب والهيل والسكر، مشروب الضيافة الأول في البيوت اليمنية.',
                'food.sweets': 'الحلويات التقليدية',
                'food.sweets.desc': 'حلويات يمنية تقليدية مثل البنت الشام والمعمول تحضر في المناسبات والأعياد.',
                'food.bread': 'الخبز التقليدي',
                'food.bread.desc': 'أنواع مختلفة من الخبز اليمني مثل الملوح والكماج التي تخبز في الأفران التقليدية.',
                'food.heritage-title': 'تراث الطعام اليمني',
                'food.heritage-desc': 'يعكس التراث الغذائي اليمني تنوع البيئة الجغرافية والثقافية للبلاد، حيث تمتزج النكهات العربية والأفريقية والآسيوية لتخلق مطبخاً فريداً.',
                'food.feature1': 'التوابل والبهارات',
                'food.feature1.desc': 'استخدام التوابل المحلية والمستوردة لإضافة نكهات مميزة',
                'food.feature2': 'طرق الطبخ التقليدية',
                'food.feature2.desc': 'استخدام التنور والمواقد التقليدية في الطبخ',
                'food.feature3': 'الضيافة والكرم',
                'food.feature3.desc': 'تقاليد الضيافة اليمنية الأصيلة في تقديم الطعام',
                'food.feature4': 'المكونات المحلية',
                'food.feature4.desc': 'الاعتماد على المنتجات الزراعية المحلية الطازجة',
                
                // Music Heritage
                'music.title': 'التراث الموسيقي اليمني',
                'music.subtitle': 'اكتشف ألحان وإيقاعات اليمن التي تعبر عن روح الشعب وتاريخه العريق',
                'music.main-title': 'الآلات والألحان التراثية',
                'music.oud': 'العود اليمني',
                'music.oud.desc': 'العود اليمني التقليدي بصوته المميز وصناعته الحرفية الدقيقة، يعتبر ملك الآلات الموسيقية اليمنية.',
                'music.drums': 'الطبول التقليدية',
                'music.drums.desc': 'الطبول اليمنية مثل المرواس والدف تضفي الإيقاع والحيوية على الرقصات والاحتفالات الشعبية.',
                'music.songs': 'الأغاني الشعبية',
                'music.songs.desc': 'الأغاني اليمنية التراثية التي تحكي قصص الحب والبطولة والحياة اليومية للشعب اليمني.',
                'music.maqams': 'المقامات الموسيقية',
                'music.maqams.desc': 'المقامات الموسيقية اليمنية التقليدية التي تشكل أساس الألحان والإيقاعات المحلية.',
                'music.heritage-title': 'أهمية التراث الموسيقي',
                'music.heritage-desc': 'يمثل التراث الموسيقي اليمني لغة عالمية تعبر عن مشاعر وأحاسيس الشعب اليمني عبر التاريخ.',
                'music.feature1': 'التنوع الموسيقي',
                'music.feature1.desc': 'تنوع الأنماط الموسيقية حسب المناطق والمناسبات',
                'music.feature2': 'صناعة الآلات',
                'music.feature2.desc': 'حرفية عالية في صناعة الآلات الموسيقية التقليدية',
                'music.feature3': 'الحفظ الشفهي',
                'music.feature3.desc': 'نقل الألحان والأغاني عبر التراث الشفهي',
                'music.feature4': 'الارتباط بالمناسبات',
                'music.feature4.desc': 'ارتباط الموسيقى بالمناسبات الاجتماعية والدينية',
                
                // Common
                'common.learn-more': 'اعرف المزيد',
                
                // Statistics
                'stats.types': 'نوع من التراث',
                'stats.images': 'صورة تراثية',
                'stats.years': 'سنة من التاريخ',
                'stats.creativity': 'من الإبداع',
                
                // Contact Page
                'contact_title': 'تواصل معنا - التراث اليمني',
                'contact_us': 'تواصل معنا',
                'contact_subtitle': 'نحن هنا للإجابة على استفساراتكم ومساعدتكم',
                'send_message': 'أرسل لنا رسالة',
                'full_name': 'الاسم الكامل',
                'email_address': 'البريد الإلكتروني',
                'phone_number': 'رقم الهاتف',
                'subject': 'الموضوع',
                'select_subject': 'اختر الموضوع',
                'general_inquiry': 'استفسار عام',
                'heritage_info': 'معلومات عن التراث',
                'collaboration': 'تعاون',
                'technical_issue': 'مشكلة تقنية',
                'message': 'الرسالة',
                'send_message_btn': 'إرسال الرسالة',
                'contact_info': 'معلومات التواصل',
                'address': 'العنوان',
                'address_details': 'صنعاء، اليمن<br>شارع الزبيري، المدينة القديمة',
                'phone': 'الهاتف',
                'phone_details': '+967 123 456 789<br>+967 987 654 321',
                'email': 'البريد الإلكتروني',
                'email_details': 'info@yemeni-heritage.com<br>contact@yemeni-heritage.com',
                'working_hours': 'ساعات العمل',
                'working_hours_details': 'السبت - الخميس: 8:00 ص - 4:00 م<br>الجمعة: مغلق',
                'follow_us': 'تابعنا على',
                'fill_all_fields': 'يرجى ملء جميع الحقول المطلوبة',
                'enter_valid_email': 'يرجى إدخال بريد إلكتروني صحيح',
                'message_sent_success': 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً',
                
                // Login Page
                'login.title': 'تسجيل الدخول',
                'login.subtitle': 'مرحباً بك في موقع التراث اليمني',
                'login.email': 'البريد الإلكتروني',
                'login.password': 'كلمة المرور',
                'login.remember': 'تذكرني',
                'login.forgot': 'نسيت كلمة المرور؟',
                'login.submit': 'تسجيل الدخول',
                'login.no-account': 'ليس لديك حساب؟',
                'login.register': 'إنشاء حساب جديد',
                'login.language': 'اللغة',
                
                // Footer
                'footer.description': 'موقع متخصص في عرض وحفظ التراث اليمني العريق بجميع أشكاله وألوانه.',
                'footer.quick-links': 'روابط سريعة',
                'footer.contact-us': 'تواصل معنا',
                'footer.rights': 'جميع الحقوق محفوظة.',
                
                // Common
                'common.choose': 'اختر',
                'common.general': 'استفسار عام',
                'common.heritage-info': 'معلومات عن التراث',
                'common.collaboration': 'تعاون',
                'common.technical': 'مشكلة تقنية'
            },
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.login': 'Login',
                'nav.contact': 'Contact Us',
                'nav.heritage-types': 'Heritage Types',
                
                // Hero Section
                'hero.title': 'Discover the Greatness of Yemeni Heritage',
                'hero.subtitle': 'A journey through Yemeni history, culture, and ancient civilization',
                'hero.explore': 'Explore Heritage',
                'hero.join': 'Join Us',
                'hero.discover': 'Discover More',
                
                // Heritage Types
                'heritage.title': 'Types of Yemeni Heritage',
                'heritage.subtitle': 'Discover the richness and diversity of Yemeni heritage through the ages',
                'heritage.architectural': 'Architectural Heritage',
                'heritage.architectural.desc': 'Discover the masterpieces of traditional Yemeni architecture',
                'heritage.cultural': 'Cultural and Artistic Heritage',
                'heritage.cultural.desc': 'Yemeni folk dances and arts',
                'heritage.clothing': 'Traditional Clothing',
                'heritage.clothing.desc': 'Traditional Yemeni clothing and jewelry',
                'heritage.food': 'Culinary Heritage',
                'heritage.food.desc': 'Traditional dishes and beverages',
                'heritage.music': 'Musical Heritage',
                'heritage.music.desc': 'Traditional melodies and musical instruments',
                'heritage.natural': 'Natural Heritage',
                'heritage.natural.desc': 'Yemen\'s unique nature and environment',
                'heritage.explore': 'Explore',
                'heritage.view-all': 'View All Heritage Types',
                
                // Architectural Heritage
                'architectural.title': 'Yemeni Architectural Heritage',
                'architectural.subtitle': 'Discover the architectural masterpieces that tell the story of an ancient civilization',
                'architectural.main-title': 'Types of Traditional Yemeni Architecture',
                'architectural.tower-houses': 'Tower Houses',
                'architectural.tower-houses.desc': 'The tower houses in Old Sana\'a represent a unique architectural masterpiece, reaching up to 8 floors and featuring decorated windows and colored stained glass.',
                'architectural.palaces': 'Palaces and Fortresses',
                'architectural.palaces.desc': 'Yemen\'s historical palaces and fortresses like Dar al-Hajar Palace and Thula Fortress reflect the greatness of Yemeni civilization and the skill of ancient architects.',
                'architectural.mosques': 'Historical Mosques',
                'architectural.mosques.desc': 'Yemeni historical mosques like the Great Mosque of Sana\'a combine Islamic architectural style with distinctive Yemeni character.',
                'architectural.markets': 'Traditional Markets',
                'architectural.markets.desc': 'Traditional Yemeni markets with their arches and covered passages represent a unique model of heritage commercial architecture.',
                'architectural.features-title': 'Characteristics of Yemeni Architecture',
                'architectural.features-desc': 'Yemeni architecture is characterized by unique features that combine beauty and functionality, developed over centuries to suit the Yemeni climate and environment.',
                'architectural.feature1': 'Local Materials',
                'architectural.feature1.desc': 'Use of basalt stone, clay, and local wood in construction',
                'architectural.feature2': 'Climate Adaptation',
                'architectural.feature2.desc': 'Design that considers tropical climate with natural ventilation',
                'architectural.feature3': 'Traditional Decorations',
                'architectural.feature3.desc': 'Distinctive engravings, colored stained glass, and geometric decorations',
                'architectural.feature4': 'Urban Planning',
                'architectural.feature4.desc': 'Planning cities and neighborhoods to maintain privacy and social cohesion',
                
                // Cultural Heritage
                'cultural.title': 'Yemeni Cultural and Artistic Heritage',
                'cultural.subtitle': 'Discover the richness of Yemeni arts and culture that reflect the identity of an ancient people',
                'cultural.main-title': 'Forms of Cultural and Artistic Heritage',
                'cultural.dances': 'Folk Dances',
                'cultural.dances.desc': 'Traditional Yemeni dances like Bara and Sharh express the joy of the Yemeni people and their ancient heritage in occasions and celebrations.',
                'cultural.crafts': 'Traditional Crafts',
                'cultural.crafts.desc': 'Yemeni handicrafts like pottery, weaving, and dagger making represent the creativity of Yemeni craftsmen throughout history.',
                'cultural.poetry': 'Poetry and Literature',
                'cultural.poetry.desc': 'Yemeni folk and classical poetry carries the wisdom of ancestors and their experiences in life, love, and homeland.',
                'cultural.stories': 'Folk Tales',
                'cultural.stories.desc': 'Yemeni tales and legends that transmit values and wisdom from generation to generation through oral tradition.',
                'cultural.importance-title': 'Importance of Cultural and Artistic Heritage',
                'cultural.importance-desc': 'Yemeni cultural and artistic heritage represents the memory of the people and their civilizational identity, carrying values, traditions, and experiences accumulated over thousands of years.',
                'cultural.feature1': 'Artistic Expression',
                'cultural.feature1.desc': 'Diverse forms of artistic expression reflecting the spirit of the Yemeni people',
                'cultural.feature2': 'Preservation and Transmission',
                'cultural.feature2.desc': 'Transmitting knowledge and values from generation to generation through arts',
                'cultural.feature3': 'Social Cohesion',
                'cultural.feature3.desc': 'Strengthening social bonds and collective identity',
                'cultural.feature4': 'Creativity and Innovation',
                'cultural.feature4.desc': 'Source of inspiration for contemporary artistic and cultural creativity',
                
                // Traditional Clothing
                'clothing.title': 'Yemeni Traditional Clothing',
                'clothing.subtitle': 'Discover the beauty and elegance of Yemeni heritage clothing throughout history',
                'clothing.main-title': 'Types of Yemeni Traditional Clothing',
                'clothing.women': 'Traditional Women\'s Clothing',
                'clothing.women.desc': 'Traditional Yemeni women\'s clothing is characterized by bright colors, beautiful embroidery, and silver jewelry that adorns it.',
                'clothing.men': 'Traditional Men\'s Clothing',
                'clothing.men.desc': 'Yemeni men\'s clothing like the Futa and Janbiya reflect authentic Yemeni identity, dignity, and pride.',
                'clothing.jewelry': 'Jewelry and Ornaments',
                'clothing.jewelry.desc': 'Traditional Yemeni jewelry made of silver and gold carries deep cultural and heritage symbols.',
                'clothing.occasions': 'Occasion Clothing',
                'clothing.occasions.desc': 'Special clothing for Yemeni occasions and weddings is characterized by its luxury and beautiful details.',
                'clothing.significance-title': 'Importance of Traditional Clothing',
                'clothing.significance-desc': 'Traditional Yemeni clothing represents an integral part of the cultural identity of the Yemeni people, carrying an ancient history of craftsmanship and creativity.',
                'clothing.feature1': 'Art and Creativity',
                'clothing.feature1.desc': 'Embroidery and decorations reflecting the refined artistic sense of Yemeni craftsmen',
                'clothing.feature2': 'Traditional Craftsmanship',
                'clothing.feature2.desc': 'Manufacturing and embroidery techniques inherited through generations',
                'clothing.feature3': 'Cultural Identity',
                'clothing.feature3.desc': 'Expression of belonging and authentic Yemeni identity',
                'clothing.feature4': 'Heritage Value',
                'clothing.feature4.desc': 'Heritage treasures carrying high historical and cultural value',
                
                // Food Heritage
                'food.title': 'Yemeni Culinary Heritage',
                'food.subtitle': 'Discover the flavors and traditional dishes of Yemen that tell the story of civilization and culture',
                'food.main-title': 'Traditional Dishes and Beverages',
                'food.mandi': 'Mandi and Kabsa',
                'food.mandi.desc': 'Famous rice dishes with meat cooked in the traditional way in the tandoor, representing the pinnacle of Yemeni culinary art.',
                'food.tea': 'Adeni Tea',
                'food.tea.desc': 'Traditional Yemeni tea with milk, cardamom, and sugar, the first hospitality drink in Yemeni homes.',
                'food.sweets': 'Traditional Sweets',
                'food.sweets.desc': 'Traditional Yemeni sweets like Bint al-Sahn and Ma\'amoul prepared for occasions and holidays.',
                'food.bread': 'Traditional Bread',
                'food.bread.desc': 'Different types of Yemeni bread like Mallouh and Kamaj baked in traditional ovens.',
                'food.heritage-title': 'Yemeni Food Heritage',
                'food.heritage-desc': 'Yemeni culinary heritage reflects the geographical and cultural diversity of the country, where Arab, African, and Asian flavors blend to create a unique cuisine.',
                'food.feature1': 'Spices and Seasonings',
                'food.feature1.desc': 'Use of local and imported spices to add distinctive flavors',
                'food.feature2': 'Traditional Cooking Methods',
                'food.feature2.desc': 'Use of tandoor and traditional stoves in cooking',
                'food.feature3': 'Hospitality and Generosity',
                'food.feature3.desc': 'Authentic Yemeni hospitality traditions in serving food',
                'food.feature4': 'Local Ingredients',
                'food.feature4.desc': 'Reliance on fresh local agricultural products',
                
                // Music Heritage
                'music.title': 'Yemeni Musical Heritage',
                'music.subtitle': 'Discover the melodies and rhythms of Yemen that express the spirit of the people and their ancient history',
                'music.main-title': 'Traditional Instruments and Melodies',
                'music.oud': 'Yemeni Oud',
                'music.oud.desc': 'The traditional Yemeni oud with its distinctive sound and precise craftsmanship is considered the king of Yemeni musical instruments.',
                'music.drums': 'Traditional Drums',
                'music.drums.desc': 'Yemeni drums like Mirwas and Duff add rhythm and vitality to folk dances and celebrations.',
                'music.songs': 'Folk Songs',
                'music.songs.desc': 'Traditional Yemeni songs that tell stories of love, heroism, and daily life of the Yemeni people.',
                'music.maqams': 'Musical Maqams',
                'music.maqams.desc': 'Traditional Yemeni musical maqams that form the basis of local melodies and rhythms.',
                'music.heritage-title': 'Importance of Musical Heritage',
                'music.heritage-desc': 'Yemeni musical heritage represents a universal language expressing the feelings and emotions of the Yemeni people throughout history.',
                'music.feature1': 'Musical Diversity',
                'music.feature1.desc': 'Diversity of musical styles according to regions and occasions',
                'music.feature2': 'Instrument Making',
                'music.feature2.desc': 'High craftsmanship in making traditional musical instruments',
                'music.feature3': 'Oral Preservation',
                'music.feature3.desc': 'Transmitting melodies and songs through oral tradition',
                'music.feature4': 'Connection to Occasions',
                'music.feature4.desc': 'Connection of music to social and religious occasions',
                
                // Common
                'common.learn-more': 'Learn More',
                
                // Statistics
                'stats.types': 'Heritage Types',
                'stats.images': 'Heritage Images',
                'stats.years': 'Years of History',
                'stats.creativity': 'of Creativity',
                
                // Contact Page
                'contact_title': 'Contact Us - Yemeni Heritage',
                'contact_us': 'Contact Us',
                'contact_subtitle': 'We are here to answer your questions and help you',
                'send_message': 'Send us a message',
                'full_name': 'Full Name',
                'email_address': 'Email Address',
                'phone_number': 'Phone Number',
                'subject': 'Subject',
                'select_subject': 'Select Subject',
                'general_inquiry': 'General Inquiry',
                'heritage_info': 'Heritage Information',
                'collaboration': 'Collaboration',
                'technical_issue': 'Technical Issue',
                'message': 'Message',
                'send_message_btn': 'Send Message',
                'contact_info': 'Contact Information',
                'address': 'Address',
                'address_details': 'Sana\'a, Yemen<br>Zubairi Street, Old City',
                'phone': 'Phone',
                'phone_details': '+967 123 456 789<br>+967 987 654 321',
                'email': 'Email',
                'email_details': 'info@yemeni-heritage.com<br>contact@yemeni-heritage.com',
                'working_hours': 'Working Hours',
                'working_hours_details': 'Saturday - Thursday: 8:00 AM - 4:00 PM<br>Friday: Closed',
                'follow_us': 'Follow Us',
                'fill_all_fields': 'Please fill in all required fields',
                'enter_valid_email': 'Please enter a valid email address',
                'message_sent_success': 'Your message has been sent successfully! We will contact you soon',
                
                // Login Page
                'login.title': 'Login',
                'login.subtitle': 'Welcome to Yemeni Heritage Website',
                'login.email': 'Email Address',
                'login.password': 'Password',
                'login.remember': 'Remember Me',
                'login.forgot': 'Forgot Password?',
                'login.submit': 'Login',
                'login.no-account': 'Don\'t have an account?',
                'login.register': 'Create New Account',
                'login.language': 'Language',
                
                // Footer
                'footer.description': 'A specialized website for displaying and preserving the ancient Yemeni heritage in all its forms and colors.',
                'footer.quick-links': 'Quick Links',
                'footer.contact-us': 'Contact Us',
                'footer.rights': 'All rights reserved.',
                
                // Common
                'common.choose': 'Choose',
                'common.general': 'General Inquiry',
                'common.heritage-info': 'Heritage Information',
                'common.collaboration': 'Collaboration',
                'common.technical': 'Technical Issue'
            }
        };
    }
    
    setupEventListeners() {
        // Language switcher buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-switch')) {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            }
        });
    }
    
    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.applyLanguage(lang);
        
        // Show notification
        if (typeof toastr !== 'undefined') {
            const message = lang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language changed to English';
            toastr.success(message);
        }
    }
    
    applyLanguage(lang) {
        // Update HTML lang and dir attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update all translatable elements
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (this.translations[lang] && this.translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.type !== 'submit') {
                    element.placeholder = this.translations[lang][key];
                } else {
                    element.innerHTML = this.translations[lang][key];
                }
            }
        });
        
        // Update language switcher buttons
        const langButtons = document.querySelectorAll('.lang-switch');
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });
        
        // Update page title
        const titleKey = document.body.dataset.pageTitle;
        if (titleKey && this.translations[lang][titleKey]) {
            document.title = this.translations[lang][titleKey] + ' - التراث اليمني';
        }
        
        // Update CSS for RTL/LTR
        this.updateLayoutDirection(lang);
    }
    
    updateLayoutDirection(lang) {
        const body = document.body;
        
        if (lang === 'ar') {
            body.classList.add('rtl');
            body.classList.remove('ltr');
        } else {
            body.classList.add('ltr');
            body.classList.remove('rtl');
        }
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    translate(key) {
        return this.translations[this.currentLang][key] || key;
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.languageSwitcher = new LanguageSwitcher();
});

// Helper function for translations
window.t = function(key) {
    return window.languageSwitcher ? window.languageSwitcher.translate(key) : key;
};

