
/**
 * Language selector and translations module
 * Contains all text translations for multi-language support
 */

/* Translation object with all supported languages and their text mappings */
const translations = {
  'pt-BR': {
    'nav.inicio': 'Início',
    'nav.cursos': 'Cursos',
    'nav.gamificacao': 'Gamificação',
    'nav.videoaulas': 'Videoaulas',
    
    'language.current': 'Sua região atual é:',
    'language.select': 'Selecione uma região diferente:',
    
    'login.welcome': 'Bem-vindo de volta!',
    'login.subtitle': 'Entre com suas Credentials para acessar sua conta.',
    'login.email': 'E-mail',
    'login.email.placeholder': 'seu@email.com',
    'login.password': 'Senha',
    'login.password.placeholder': 'Digite sua senha',
    'login.remember': 'Lembrar de mim',
    'login.forgot': 'Esqueceu a senha?',
    'login.button': 'Entrar',
    'login.signup': 'Não tem uma conta?',
    'login.signup.link': 'Cadastre-se aqui',
    'login.divider': 'OU CONTINUE COM',
    
    'login.error.invalid_email': 'Por favor, insira um e-mail válido',
    'login.error.invalid_password': 'A senha deve ter pelo menos 6 dígitos numéricos',
    'login.error.invalid_password_format': 'A senha deve conter apenas números',
    'login.error.page_not_developed': 'Esta página não foi desenvolvida',
    'login.loading_text': 'Entrando...',
    'login.email.title': 'Digite seu e-mail no formato: exemplo@email.com',
    'login.password.title': 'A senha deve conter apenas números',
    
    'section.title': 'Comece Aqui Sua Jornada de Aprendizagem',
    'section.subtitle': 'Do começo ao básico: tudo que você precisa para aprender com calma e confiança.',
    
    'course.view': 'VER CURSO',
    'course1.title': 'Primeiros Passos',
    'course1.desc': 'Um primeiro contato para quem está começando agora. Aqui você vai aprender, de forma tranquila e online, como reconhecer letras e números no seu ritmo.',
    'course2.title': 'Português Básico',
    'course2.desc': 'Aulas a distância para ajudar você a ler e escrever palavras simples do dia a dia. Tudo explicado de maneira fácil, para que consiga formar frases e se comunicar melhor.',
    'course3.title': 'Matemática Básica',
    'course3.desc': 'Um curso online para aprender a lidar com os números. Você vai praticar contar, somar e subtrair de um jeito leve, pensando em situações que aparecem na vida de todos os dias.',
    
    'footer.rights': '© 2025 Saber+. Todos os direitos reservados.',
    
    'dashboard.nav.home': 'Início',
    'dashboard.nav.lessons': 'Videoaulas',
    'dashboard.nav.games': 'Jogos',
    'dashboard.nav.user': 'Usuário',
    'dashboard.nav.hello': 'Olá',
    'dashboard.hero.title': 'Educação de Qualidade',
    'dashboard.hero.highlight': 'para Todos os Brasileiros',
    'dashboard.hero.subtitle': 'Plataforma completa de ensino de Português e Matemática, com videoaulas interativas e jogos educativos.',
    'dashboard.hero.start': 'Começar a Estudar',
    'dashboard.hero.explore': 'Explorar Jogos',
    'dashboard.features.title': 'Por que escolher o Saber+?',
    'dashboard.features.subtitle': 'Uma plataforma completa e inovadora que revoluciona a forma de aprender',
    'dashboard.features.videos.title': 'Videoaulas Interativas',
    'dashboard.features.videos.desc': 'Aulas dinâmicas com os melhores professores, organizadas por disciplina e nível.',
    'dashboard.features.games.title': 'Jogos Educativos',
    'dashboard.features.games.desc': 'Aprenda brincando com jogos desafiadores, ideais para reforçar o aprendizado.',
    'dashboard.features.points.title': 'Sistema de Pontuação',
    'dashboard.features.points.desc': 'Ganhe pontos, badges e recompensas de forma gamificada e motivadora.',
    'dashboard.subjects.title': 'Disciplinas em Foco',
    'dashboard.subjects.subtitle': 'Conteúdo especializado nas áreas mais importantes da educação básica',
    'dashboard.subjects.portuguese.title': 'Português',
    'dashboard.subjects.portuguese.desc': 'Gramática, interpretação de texto, redação e literatura brasileira com metodologia moderna e interativa.',
    'dashboard.subjects.math.title': 'Matemática',
    'dashboard.subjects.math.desc': 'Aritmética, álgebra, geometria e estatística explicadas de forma clara e com exercícios práticos.',
    'dashboard.cta.title': 'Pronto para Transformar seu Aprendizado?',
    'dashboard.cta.subtitle': 'Junte-se a milhares de estudantes que já estão aprendendo de forma mais eficiente',
    'dashboard.cta.button': 'Começar Agora',
    'dashboard.footer.text': 'Transformando a educação brasileira com tecnologia e qualidade.',
    'dashboard.footer.rights': '© 2025 Saber+. Todos os direitos reservados.',
    
    'lessons.title': 'Videoaulas',
    'lessons.subtitle': 'Aprenda com os melhores professores do país',
    'lessons.progress': 'Progresso em Português',
    'lessons.progress.math': 'Progresso em Matemática',
    'lessons.progress.count': '0/2 aulas (0%)',
    'lessons.portuguese': 'Português',
    'lessons.mathematics': 'Matemática',
    'lessons.portuguese.video1.title': 'Introdução à Gramática Portuguesa',
    'lessons.portuguese.video1.desc': 'Conceitos básicos da gramática portuguesa: classes gramaticais e estrutura da língua.',
    'lessons.portuguese.video2.title': 'Substantivos e Adjetivos',
    'lessons.portuguese.video2.desc': 'Você vai aprender a identificar e usar substantivos e adjetivos corretamente.',
    'lessons.math.video1.title': 'Números Naturais',
    'lessons.math.video1.desc': 'Introdução aos números naturais: contagem, ordem e operações básicas.',
    'lessons.math.video2.title': 'Adição e Subtração',
    'lessons.math.video2.desc': 'Como realizar operações de adição e subtração com números naturais.',
    'lessons.footer.text': 'Transformando a educação brasileira com tecnologia e qualidade.',
    'lessons.footer.rights': '© 2025 Saber+. Todos os direitos reservados.',
    
    'games.title': 'Jogos Educativos',
    'games.subtitle': 'Aprenda brincando e ganhe pontos!',
    'games.points': 'Seus Pontos',
    'games.portuguese': 'Português',
    'games.mathematics': 'Matemática',
    'games.play': 'Jogar',
    'games.portuguese.quiz.title': 'Quiz de Interpretação',
    'games.portuguese.quiz.desc': 'Teste sua compreensão de textos com perguntas de múltipla escolha e explicações passo a passo.',
    'games.portuguese.writing.title': 'Oficina de Redação',
    'games.portuguese.writing.desc': 'Pratique escrever textos curtos com prompts guiados e receba dicas de estrutura e vocabulário.',
    'games.math.table.title': 'Tabuada Mágica',
    'games.math.table.desc': 'Pratique multiplicação de forma divertida com nossa tabuada interativa.',
    'games.math.operations.title': 'Desafio das Operações',
    'games.math.operations.desc': 'Resolva problemas de adição, subtração, multiplicação e divisão.',
    'games.popular.title': 'Jogos Populares',
    'games.popular.grammar.title': 'Quiz de Gramática',
    'games.popular.grammar.desc': 'Teste seus conhecimentos de gramática portuguesa',
    'games.popular.grammar.tag': 'Português',
    'games.popular.table.title': 'Tabuada Mágica',
    'games.popular.table.desc': 'Pratique multiplicação de forma divertida',
    'games.popular.table.tag': 'Matemática',
    'games.quiz': 'Quiz',
    'games.pts': 'pts',
    'games.footer.text': 'Transformando a educação brasileira com tecnologia e qualidade.',
    'games.footer.rights': '© 2025 Saber+. Todos os direitos reservados.'
  },
  
  'en-US': {
    'nav.inicio': 'Home',
    'nav.cursos': 'Courses',
    'nav.gamificacao': 'Gamification',
    'nav.videoaulas': 'Video Classes',
    
    'language.current': 'Your current region is:',
    'language.select': 'Select a different region:',
    
    'login.welcome': 'Welcome back!',
    'login.subtitle': 'Enter your credentials to access your account.',
    'login.email': 'Email',
    'login.email.placeholder': 'your@email.com',
    'login.password': 'Password',
    'login.password.placeholder': 'Enter your password',
    'login.remember': 'Remember me',
    'login.forgot': 'Forgot password?',
    'login.button': 'Sign In',
    'login.signup': "Don't have an account?",
    'login.signup.link': 'Sign up here',
    'login.divider': 'OR CONTINUE WITH',
    
    'login.error.invalid_email': 'Please enter a valid email',
    'login.error.invalid_password': 'Password must have at least 6 numeric digits',
    'login.error.invalid_password_format': 'Password must contain only numbers',
    'login.error.page_not_developed': 'This page has not been developed',
    'login.loading_text': 'Signing in...',
    'login.email.title': 'Enter your email in the format: example@email.com',
    'login.password.title': 'Password must contain only numbers',
    
    'section.title': 'Start Your Learning Journey Here',
    'section.subtitle': 'From start to basics: everything you need to learn calmly and confidently.',
    
    'course.view': 'VIEW COURSE',
    'course1.title': 'First Steps',
    'course1.desc': 'A first contact for those who are just starting. Here you will learn, calmly and online, how to recognize letters and numbers at your own pace.',
    'course2.title': 'Basic Portuguese',
    'course2.desc': 'Distance classes to help you read and write simple everyday words. Everything explained in an easy way, so you can form sentences and communicate better.',
    'course3.title': 'Basic Mathematics',
    'course3.desc': 'An online course to learn how to deal with numbers. You will practice counting, adding and subtracting in a light way, thinking about situations that appear in everyday life.',
    
    'footer.rights': '© 2025 Saber+. All rights reserved.',
    
    'dashboard.nav.home': 'Home',
    'dashboard.nav.lessons': 'Video Classes',
    'dashboard.nav.games': 'Games',
    'dashboard.nav.user': 'User',
    'dashboard.nav.hello': 'Hello',
    'dashboard.hero.title': 'Quality Education',
    'dashboard.hero.highlight': 'for All Brazilians',
    'dashboard.hero.subtitle': 'Complete Portuguese and Mathematics teaching platform with interactive video classes and educational games.',
    'dashboard.hero.start': 'Start Studying',
    'dashboard.hero.explore': 'Explore Games',
    'dashboard.features.title': 'Why choose Saber+?',
    'dashboard.features.subtitle': 'A complete and innovative platform that revolutionizes the way to learn',
    'dashboard.features.videos.title': 'Interactive Video Classes',
    'dashboard.features.videos.desc': 'Dynamic classes with the best teachers, organized by subject and level.',
    'dashboard.features.games.title': 'Educational Games',
    'dashboard.features.games.desc': 'Learn by playing with challenging games, ideal for reinforcing learning.',
    'dashboard.features.points.title': 'Scoring System',
    'dashboard.features.points.desc': 'Earn points, badges and rewards in a gamified and motivating way.',
    'dashboard.subjects.title': 'Focused Subjects',
    'dashboard.subjects.subtitle': 'Specialized content in the most important areas of basic education',
    'dashboard.subjects.portuguese.title': 'Portuguese',
    'dashboard.subjects.portuguese.desc': 'Grammar, text interpretation, writing and Brazilian literature with modern and interactive methodology.',
    'dashboard.subjects.math.title': 'Mathematics',
    'dashboard.subjects.math.desc': 'Arithmetic, algebra, geometry and statistics explained clearly and with practical exercises.',
    'dashboard.cta.title': 'Ready to Transform Your Learning?',
    'dashboard.cta.subtitle': 'Join thousands of students who are already learning more efficiently',
    'dashboard.cta.button': 'Start Now',
    'dashboard.footer.text': 'Transforming Brazilian education with technology and quality.',
    'dashboard.footer.rights': '© 2025 Saber+. All rights reserved.',
    
    'lessons.title': 'Video Classes',
    'lessons.subtitle': 'Learn with the best teachers in the country',
    'lessons.progress': 'Progress in Portuguese',
    'lessons.progress.math': 'Progress in Mathematics',
    'lessons.progress.count': '0/2 classes (0%)',
    'lessons.portuguese': 'Portuguese',
    'lessons.mathematics': 'Mathematics',
    'lessons.portuguese.video1.title': 'Introduction to Portuguese Grammar',
    'lessons.portuguese.video1.desc': 'Basic concepts of Portuguese grammar: grammatical classes and language structure.',
    'lessons.portuguese.video2.title': 'Nouns and Adjectives',
    'lessons.portuguese.video2.desc': 'You will learn to identify and use nouns and adjectives correctly.',
    'lessons.math.video1.title': 'Natural Numbers',
    'lessons.math.video1.desc': 'Introduction to natural numbers: counting, order and basic operations.',
    'lessons.math.video2.title': 'Addition and Subtraction',
    'lessons.math.video2.desc': 'How to perform addition and subtraction operations with natural numbers.',
    'lessons.footer.text': 'Transforming Brazilian education with technology and quality.',
    'lessons.footer.rights': '© 2025 Saber+. All rights reserved.',
    
    'games.title': 'Educational Games',
    'games.subtitle': 'Learn by playing and earn points!',
    'games.points': 'Your Points',
    'games.portuguese': 'Portuguese',
    'games.mathematics': 'Mathematics',
    'games.play': 'Play',
    'games.portuguese.quiz.title': 'Reading Comprehension Quiz',
    'games.portuguese.quiz.desc': 'Test your text comprehension with multiple choice questions and step-by-step explanations.',
    'games.portuguese.writing.title': 'Writing Workshop',
    'games.portuguese.writing.desc': 'Practice writing short texts with guided prompts and receive structure and vocabulary tips.',
    'games.math.table.title': 'Magic Multiplication Table',
    'games.math.table.desc': 'Practice multiplication in a fun way with our interactive multiplication table.',
    'games.math.operations.title': 'Operations Challenge',
    'games.math.operations.desc': 'Solve addition, subtraction, multiplication and division problems.',
    'games.popular.title': 'Popular Games',
    'games.popular.grammar.title': 'Grammar Quiz',
    'games.popular.grammar.desc': 'Test your Portuguese grammar knowledge',
    'games.popular.grammar.tag': 'Portuguese',
    'games.popular.table.title': 'Magic Multiplication Table',
    'games.popular.table.desc': 'Practice multiplication in a fun way',
    'games.popular.table.tag': 'Mathematics',
    'games.quiz': 'Quiz',
    'games.pts': 'pts',
    'games.footer.text': 'Transforming Brazilian education with technology and quality.',
    'games.footer.rights': '© 2025 Saber+. All rights reserved.'
  },
  
  'es-ES': {
    'nav.inicio': 'Inicio',
    'nav.cursos': 'Cursos',
    'nav.gamificacao': 'Gamificación',
    'nav.videoaulas': 'Videoclases',
    
    'language.current': 'Su región actual es:',
    'language.select': 'Seleccione una región diferente:',
    
    'login.welcome': '¡Bienvenido de vuelta!',
    'login.subtitle': 'Ingrese sus credenciales para acceder a su cuenta.',
    'login.email': 'Correo electrónico',
    'login.email.placeholder': 'su@email.com',
    'login.password': 'Contraseña',
    'login.password.placeholder': 'Ingrese su contraseña',
    'login.remember': 'Recuérdame',
    'login.forgot': '¿Olvidó la contraseña?',
    'login.button': 'Ingresar',
    'login.signup': '¿No tienes una cuenta?',
    'login.signup.link': 'Regístrate aquí',
    'login.divider': 'O CONTINÚA CON',
    
    'login.error.invalid_email': 'Por favor, ingrese un email válido',
    'login.error.invalid_password': 'La contraseña debe tener al menos 6 dígitos numéricos',
    'login.error.invalid_password_format': 'La contraseña debe contener solo números',
    'login.error.page_not_developed': 'Esta página no ha sido desarrollada',
    'login.loading_text': 'Ingresando...',
    'login.email.title': 'Ingrese su email en el formato: ejemplo@email.com',
    'login.password.title': 'La contraseña debe contener solo números',
    
    'section.title': 'Comienza Aquí Tu Viaje de Aprendizaje',
    'section.subtitle': 'Desde el principio hasta lo básico: todo lo que necesitas para aprender con calma y confianza.',
    
    'course.view': 'VER CURSO',
    'course1.title': 'Primeros Pasos',
    'course1.desc': 'Un primer contacto para quienes están comenzando ahora. Aquí aprenderás, de forma tranquila y en línea, cómo reconocer letras y números a tu ritmo.',
    'course2.title': 'Portugués Básico',
    'course2.desc': 'Clases a distancia para ayudarte a leer y escribir palabras simples del día a día. Todo explicado de manera fácil, para que puedas formar oraciones y comunicarte mejor.',
    'course3.title': 'Matemáticas Básicas',
    'course3.desc': 'Un curso en línea para aprender a manejar números. Practicarás contar, sumar y restar de manera sencilla, pensando en situaciones de la vida cotidiana.',
    
    'footer.rights': '© 2025 Saber+. Todos los derechos reservados.',
    
    'dashboard.nav.home': 'Inicio',
    'dashboard.nav.lessons': 'Videoclases',
    'dashboard.nav.games': 'Juegos',
    'dashboard.nav.user': 'Usuario',
    'dashboard.nav.hello': 'Hola',
    'dashboard.hero.title': 'Educación de Calidad',
    'dashboard.hero.highlight': 'para Todos los Brasileños',
    'dashboard.hero.subtitle': 'Plataforma completa de enseñanza de Portugués y Matemáticas, con videoclases interactivas y juegos educativos.',
    'dashboard.hero.start': 'Comenzar a Estudiar',
    'dashboard.hero.explore': 'Explorar Juegos',
    'dashboard.features.title': '¿Por qué elegir Saber+?',
    'dashboard.features.subtitle': 'Una plataforma completa e innovadora que revoluciona la forma de aprender',
    'dashboard.features.videos.title': 'Videoclases Interactivas',
    'dashboard.features.videos.desc': 'Clases dinámicas con los mejores profesores, organizadas por disciplina y nivel.',
    'dashboard.features.games.title': 'Juegos Educativos',
    'dashboard.features.games.desc': 'Aprende jugando con juegos desafiantes, ideales para reforzar el aprendizaje.',
    'dashboard.features.points.title': 'Sistema de Puntuación',
    'dashboard.features.points.desc': 'Gana puntos, insignias y recompensas de forma gamificada y motivadora.',
    'dashboard.subjects.title': 'Disciplinas en Foco',
    'dashboard.subjects.subtitle': 'Contenido especializado en las áreas más importantes de la educación básica',
    'dashboard.subjects.portuguese.title': 'Portugués',
    'dashboard.subjects.portuguese.desc': 'Gramática, interpretación de texto, redacción y literatura brasileña con metodología moderna e interactiva.',
    'dashboard.subjects.math.title': 'Matemáticas',
    'dashboard.subjects.math.desc': 'Aritmética, álgebra, geometría y estadística explicadas de forma clara y con ejercicios prácticos.',
    'dashboard.cta.title': '¿Listo para Transformar tu Aprendizaje?',
    'dashboard.cta.subtitle': 'Únete a miles de estudiantes que ya están aprendiendo de forma más eficiente',
    'dashboard.cta.button': 'Comenzar Ahora',
    'dashboard.footer.text': 'Transformando la educación brasileña con tecnología y calidad.',
    'dashboard.footer.rights': '© 2025 Saber+. Todos los derechos reservados.',
    
    'lessons.title': 'Videoclases',
    'lessons.subtitle': 'Aprende con los mejores profesores del país',
    'lessons.progress': 'Progreso en Portugués',
    'lessons.progress.math': 'Progreso en Matemáticas',
    'lessons.progress.count': '0/2 clases (0%)',
    'lessons.portuguese': 'Portugués',
    'lessons.mathematics': 'Matemáticas',
    'lessons.portuguese.video1.title': 'Introducción a la Gramática Portuguesa',
    'lessons.portuguese.video1.desc': 'Conceptos básicos de gramática portuguesa: clases gramaticales y estructura del idioma.',
    'lessons.portuguese.video2.title': 'Sustantivos y Adjetivos',
    'lessons.portuguese.video2.desc': 'Aprenderás a identificar y usar sustantivos y adjetivos correctamente.',
    'lessons.math.video1.title': 'Números Naturales',
    'lessons.math.video1.desc': 'Introducción a los números naturales: conteo, orden y operaciones básicas.',
    'lessons.math.video2.title': 'Suma y Resta',
    'lessons.math.video2.desc': 'Cómo realizar operaciones de suma y resta con números naturales.',
    'lessons.footer.text': 'Transformando la educación brasileña con tecnología y calidad.',
    'lessons.footer.rights': '© 2025 Saber+. Todos los derechos reservados.',
    
    'games.title': 'Juegos Educativos',
    'games.subtitle': '¡Aprende jugando y gana puntos!',
    'games.points': 'Tus Puntos',
    'games.portuguese': 'Portugués',
    'games.mathematics': 'Matemáticas',
    'games.play': 'Jugar',
    'games.portuguese.quiz.title': 'Quiz de Comprensión Lectora',
    'games.portuguese.quiz.desc': 'Pon a prueba tu comprensión de textos con preguntas de opción múltiple y explicaciones paso a paso.',
    'games.portuguese.writing.title': 'Taller de Redacción',
    'games.portuguese.writing.desc': 'Practica escribir textos cortos con instrucciones guiadas y recibe consejos de estructura y vocabulario.',
    'games.math.table.title': 'Tabla de Multiplicar Mágica',
    'games.math.table.desc': 'Practica multiplicación de forma divertida con nuestra tabla interactiva.',
    'games.math.operations.title': 'Desafío de Operaciones',
    'games.math.operations.desc': 'Resuelve problemas de suma, resta, multiplicación y división.',
    'games.popular.title': 'Juegos Populares',
    'games.popular.grammar.title': 'Quiz de Gramática',
    'games.popular.grammar.desc': 'Pon a prueba tus conocimientos de gramática portuguesa',
    'games.popular.grammar.tag': 'Portugués',
    'games.popular.table.title': 'Tabla de Multiplicar Mágica',
    'games.popular.table.desc': 'Practica multiplicación de forma divertida',
    'games.popular.table.tag': 'Matemáticas',
    'games.quiz': 'Quiz',
    'games.pts': 'pts',
    'games.footer.text': 'Transformando la educación brasileña con tecnología y calidad.',
    'games.footer.rights': '© 2025 Saber+. Todos los derechos reservados.'
  },
  
  'fr-FR': {
    'nav.inicio': 'Accueil',
    'nav.cursos': 'Cours',
    'nav.gamificacao': 'Gamification',
    'nav.videoaulas': 'Vidéos',
    
    'language.current': 'Votre région actuelle est:',
    'language.select': 'Sélectionnez une région différente:',
    
    'login.welcome': 'Bon retour!',
    'login.subtitle': 'Entrez vos identifiants pour accéder à votre compte.',
    'login.email': 'E-mail',
    'login.email.placeholder': 'votre@email.com',
    'login.password': 'Mot de passe',
    'login.password.placeholder': 'Entrez votre mot de passe',
    'login.remember': 'Se souvenir de moi',
    'login.forgot': 'Mot de passe oublié?',
    'login.button': 'Se connecter',
    'login.signup': "Vous n'avez pas de compte?",
    'login.signup.link': 'Inscrivez-vous ici',
    'login.divider': 'OU CONTINUEZ AVEC',
    
    'login.error.invalid_email': 'Veuillez saisir un e-mail valide',
    'login.error.invalid_password': 'Le mot de passe doit contenir au moins 6 chiffres',
    'login.error.invalid_password_format': 'Le mot de passe ne doit contenir que des chiffres',
    'login.error.page_not_developed': 'Cette page n\'a pas été développée',
    'login.loading_text': 'Connexion...',
    'login.email.title': 'Saisissez votre e-mail au format: exemple@email.com',
    'login.password.title': 'Le mot de passe ne doit contenir que des chiffres',
    
    'section.title': 'Commencez Votre Parcours d\'Apprentissage Ici',
    'section.subtitle': 'Du début aux bases: tout ce dont vous avez besoin pour apprendre calmement et en toute confiance.',
    
    'course.view': 'VOIR LE COURS',
    'course1.title': 'Premiers Pas',
    'course1.desc': 'Un premier contact pour ceux qui commencent maintenant. Ici vous apprendrez, calmement et en ligne, comment reconnaître les lettres et les chiffres à votre rythme.',
    'course2.title': 'Portugais de Base',
    'course2.desc': 'Cours à distance pour vous aider à lire et écrire des mots simples du quotidien. Tout expliqué de manière facile, pour que vous puissiez former des phrases et mieux communiquer.',
    'course3.title': 'Mathématiques de Base',
    'course3.desc': 'Un cours en ligne pour apprendre à gérer les nombres. Vous pratiquerez compter, additionner et soustraire de manière légère, en pensant aux situations de la vie quotidienne.',
    
    'footer.rights': '© 2025 Saber+. Tous droits réservés.',
    
    'dashboard.nav.home': 'Accueil',
    'dashboard.nav.lessons': 'Vidéos',
    'dashboard.nav.games': 'Jeux',
    'dashboard.nav.user': 'Utilisateur',
    'dashboard.nav.hello': 'Bonjour',
    'dashboard.hero.title': 'Éducation de Qualité',
    'dashboard.hero.highlight': 'pour Tous les Brésiliens',
    'dashboard.hero.subtitle': 'Plateforme complète d\'enseignement du portugais et des mathématiques, avec des vidéos interactives et des jeux éducatifs.',
    'dashboard.hero.start': 'Commencer à Étudier',
    'dashboard.hero.explore': 'Explorer les Jeux',
    'dashboard.features.title': 'Pourquoi choisir Saber+?',
    'dashboard.features.subtitle': 'Une plateforme complète et innovante qui révolutionne la façon d\'apprendre',
    'dashboard.features.videos.title': 'Vidéos Interactives',
    'dashboard.features.videos.desc': 'Cours dynamiques avec les meilleurs enseignants, organisés par discipline et niveau.',
    'dashboard.features.games.title': 'Jeux Éducatifs',
    'dashboard.features.games.desc': 'Apprenez en jouant avec des jeux stimulants, idéaux pour renforcer l\'apprentissage.',
    'dashboard.features.points.title': 'Système de Points',
    'dashboard.features.points.desc': 'Gagnez des points, des badges et des récompenses de manière ludique et motivante.',
    'dashboard.subjects.title': 'Matières en Focus',
    'dashboard.subjects.subtitle': 'Contenu spécialisé dans les domaines les plus importants de l\'éducation de base',
    'dashboard.subjects.portuguese.title': 'Portugais',
    'dashboard.subjects.portuguese.desc': 'Grammaire, interprétation de texte, rédaction et littérature brésilienne avec une méthodologie moderne et interactive.',
    'dashboard.subjects.math.title': 'Mathématiques',
    'dashboard.subjects.math.desc': 'Arithmétique, algèbre, géométrie et statistiques expliquées clairement avec des exercices pratiques.',
    'dashboard.cta.title': 'Prêt à Transformer Votre Apprentissage?',
    'dashboard.cta.subtitle': 'Rejoignez des milliers d\'étudiants qui apprennent déjà plus efficacement',
    'dashboard.cta.button': 'Commencer Maintenant',
    'dashboard.footer.text': 'Transformer l\'éducation brésilienne avec la technologie et la qualité.',
    'dashboard.footer.rights': '© 2025 Saber+. Tous droits réservés.',
    
    'lessons.title': 'Vidéos',
    'lessons.subtitle': 'Apprenez avec les meilleurs enseignants du pays',
    'lessons.progress': 'Progrès en Portugais',
    'lessons.progress.math': 'Progrès en Mathématiques',
    'lessons.progress.count': '0/2 cours (0%)',
    'lessons.portuguese': 'Portugais',
    'lessons.mathematics': 'Mathématiques',
    'lessons.portuguese.video1.title': 'Introduction à la Grammaire Portugaise',
    'lessons.portuguese.video1.desc': 'Concepts de base de la grammaire portugaise: classes grammaticales et structure de la langue.',
    'lessons.portuguese.video2.title': 'Noms et Adjectifs',
    'lessons.portuguese.video2.desc': 'Vous apprendrez à identifier et utiliser correctement les noms et adjectifs.',
    'lessons.math.video1.title': 'Nombres Naturels',
    'lessons.math.video1.desc': 'Introduction aux nombres naturels: comptage, ordre et opérations de base.',
    'lessons.math.video2.title': 'Addition et Soustraction',
    'lessons.math.video2.desc': 'Comment effectuer des opérations d\'addition et de soustraction avec des nombres naturels.',
    'lessons.footer.text': 'Transformer l\'éducation brésilienne avec la technologie et la qualité.',
    'lessons.footer.rights': '© 2025 Saber+. Tous droits réservés.',
    
    'games.title': 'Jeux Éducatifs',
    'games.subtitle': 'Apprenez en jouant et gagnez des points!',
    'games.points': 'Vos Points',
    'games.portuguese': 'Portugais',
    'games.mathematics': 'Mathématiques',
    'games.play': 'Jouer',
    'games.portuguese.quiz.title': 'Quiz de Compréhension de Lecture',
    'games.portuguese.quiz.desc': 'Testez votre compréhension de texte avec des questions à choix multiples et des explications étape par étape.',
    'games.portuguese.writing.title': 'Atelier d\'Écriture',
    'games.portuguese.writing.desc': 'Pratiquez l\'écriture de textes courts avec des instructions guidées et recevez des conseils de structure et de vocabulaire.',
    'games.math.table.title': 'Table de Multiplication Magique',
    'games.math.table.desc': 'Pratiquez la multiplication de manière amusante avec notre table interactive.',
    'games.math.operations.title': 'Défi des Opérations',
    'games.math.operations.desc': 'Résolvez des problèmes d\'addition, soustraction, multiplication et division.',
    'games.popular.title': 'Jeux Populaires',
    'games.popular.grammar.title': 'Quiz de Grammaire',
    'games.popular.grammar.desc': 'Testez vos connaissances en grammaire portugaise',
    'games.popular.grammar.tag': 'Portugais',
    'games.popular.table.title': 'Table de Multiplication Magique',
    'games.popular.table.desc': 'Pratiquez la multiplication de manière amusante',
    'games.popular.table.tag': 'Mathématiques',
    'games.quiz': 'Quiz',
    'games.pts': 'pts',
    'games.footer.text': 'Transformer l\'éducation brésilienne avec la technologie et la qualité.',
    'games.footer.rights': '© 2025 Saber+. Tous droits réservés.'
  },
  
  'de-DE': {
    'nav.inicio': 'Startseite',
    'nav.cursos': 'Kurse',
    'nav.gamificacao': 'Gamification',
    'nav.videoaulas': 'Videos',
    
    'language.current': 'Ihre aktuelle Region ist:',
    'language.select': 'Wählen Sie eine andere Region:',
    
    'login.welcome': 'Willkommen zurück!',
    'login.subtitle': 'Geben Sie Ihre Anmeldedaten ein, um auf Ihr Konto zuzugreifen.',
    'login.email': 'E-Mail',
    'login.email.placeholder': 'ihre@email.com',
    'login.password': 'Passwort',
    'login.password.placeholder': 'Geben Sie Ihr Passwort ein',
    'login.remember': 'Angemeldet bleiben',
    'login.forgot': 'Passwort vergessen?',
    'login.button': 'Anmelden',
    'login.signup': 'Haben Sie kein Konto?',
    'login.signup.link': 'Hier registrieren',
    'login.divider': 'ODER FORTFAHREN MIT',
    
    'login.error.invalid_email': 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    'login.error.invalid_password': 'Das Passwort muss mindestens 6 Ziffern enthalten',
    'login.error.invalid_password_format': 'Das Passwort darf nur Zahlen enthalten',
    'login.error.page_not_developed': 'Diese Seite wurde noch nicht entwickelt',
    'login.loading_text': 'Anmelden...',
    'login.email.title': 'Geben Sie Ihre E-Mail im Format ein: beispiel@email.com',
    'login.password.title': 'Das Passwort darf nur Zahlen enthalten',
    
    'section.title': 'Beginnen Sie Hier Ihre Lernreise',
    'section.subtitle': 'Vom Anfang zu den Grundlagen: Alles was Sie brauchen, um ruhig und selbstbewusst zu lernen.',
    
    'course.view': 'KURS ANSEHEN',
    'course1.title': 'Erste Schritte',
    'course1.desc': 'Ein erster Kontakt für Anfänger. Hier lernen Sie ruhig und online, wie Sie Buchstaben und Zahlen in Ihrem eigenen Tempo erkennen.',
    'course2.title': 'Grundlagen Portugiesisch',
    'course2.desc': 'Fernkurse, um Ihnen beim Lesen und Schreiben einfacher Alltagswörter zu helfen. Alles einfach erklärt, damit Sie Sätze bilden und besser kommunizieren können.',
    'course3.title': 'Grundlagen Mathematik',
    'course3.desc': 'Ein Online-Kurs zum Umgang mit Zahlen. Sie üben das Zählen, Addieren und Subtrahieren auf leichte Art und denken an Alltagssituationen.',
    
    'footer.rights': '© 2025 Saber+. Alle Rechte vorbehalten.',
    
    'dashboard.nav.home': 'Startseite',
    'dashboard.nav.lessons': 'Videos',
    'dashboard.nav.games': 'Spiele',
    'dashboard.nav.user': 'Benutzer',
    'dashboard.nav.hello': 'Hallo',
    'dashboard.hero.title': 'Qualitätsbildung',
    'dashboard.hero.highlight': 'für Alle Brasilianer',
    'dashboard.hero.subtitle': 'Komplette Portugiesisch- und Mathematik-Lehrplattform mit interaktiven Videos und Lernspielen.',
    'dashboard.hero.start': 'Mit dem Lernen Beginnen',
    'dashboard.hero.explore': 'Spiele Erkunden',
    'dashboard.features.title': 'Warum Saber+ wählen?',
    'dashboard.features.subtitle': 'Eine vollständige und innovative Plattform, die die Art des Lernens revolutioniert',
    'dashboard.features.videos.title': 'Interaktive Videos',
    'dashboard.features.videos.desc': 'Dynamische Kurse mit den besten Lehrern, nach Fach und Niveau organisiert.',
    'dashboard.features.games.title': 'Lernspiele',
    'dashboard.features.games.desc': 'Lernen Sie spielend mit herausfordernden Spielen, ideal zur Lernverstärkung.',
    'dashboard.features.points.title': 'Punktesystem',
    'dashboard.features.points.desc': 'Sammeln Sie Punkte, Abzeichen und Belohnungen auf spielerische und motivierende Weise.',
    'dashboard.subjects.title': 'Fokus-Fächer',
    'dashboard.subjects.subtitle': 'Spezialisierte Inhalte in den wichtigsten Bereichen der Grundbildung',
    'dashboard.subjects.portuguese.title': 'Portugiesisch',
    'dashboard.subjects.portuguese.desc': 'Grammatik, Textinterpretation, Schreiben und brasilianische Literatur mit moderner und interaktiver Methodik.',
    'dashboard.subjects.math.title': 'Mathematik',
    'dashboard.subjects.math.desc': 'Arithmetik, Algebra, Geometrie und Statistik klar erklärt mit praktischen Übungen.',
    'dashboard.cta.title': 'Bereit, Ihr Lernen zu Transformieren?',
    'dashboard.cta.subtitle': 'Schließen Sie sich Tausenden von Studenten an, die bereits effizienter lernen',
    'dashboard.cta.button': 'Jetzt Beginnen',
    'dashboard.footer.text': 'Transformation der brasilianischen Bildung mit Technologie und Qualität.',
    'dashboard.footer.rights': '© 2025 Saber+. Alle Rechte vorbehalten.',
    
    'lessons.title': 'Videos',
    'lessons.subtitle': 'Lernen Sie mit den besten Lehrern des Landes',
    'lessons.progress': 'Fortschritt in Portugiesisch',
    'lessons.progress.math': 'Fortschritt in Mathematik',
    'lessons.progress.count': '0/2 Kurse (0%)',
    'lessons.portuguese': 'Portugiesisch',
    'lessons.mathematics': 'Mathematik',
    'lessons.portuguese.video1.title': 'Einführung in die portugiesische Grammatik',
    'lessons.portuguese.video1.desc': 'Grundkonzepte der portugiesischen Grammatik: Wortarten und Sprachstruktur.',
    'lessons.portuguese.video2.title': 'Substantive und Adjektive',
    'lessons.portuguese.video2.desc': 'Sie werden lernen, Substantive und Adjektive korrekt zu identifizieren und zu verwenden.',
    'lessons.math.video1.title': 'Natürliche Zahlen',
    'lessons.math.video1.desc': 'Einführung in natürliche Zahlen: Zählen, Ordnung und Grundoperationen.',
    'lessons.math.video2.title': 'Addition und Subtraktion',
    'lessons.math.video2.desc': 'Wie man Additions- und Subtraktionsoperationen mit natürlichen Zahlen durchführt.',
    'lessons.footer.text': 'Transformation der brasilianischen Bildung mit Technologie und Qualität.',
    'lessons.footer.rights': '© 2025 Saber+. Alle Rechte vorbehalten.',
    
    'games.title': 'Lernspiele',
    'games.subtitle': 'Lernen Sie spielend und sammeln Sie Punkte!',
    'games.points': 'Ihre Punkte',
    'games.portuguese': 'Portugiesisch',
    'games.mathematics': 'Mathematik',
    'games.play': 'Spielen',
    'games.portuguese.quiz.title': 'Leseverständnis-Quiz',
    'games.portuguese.quiz.desc': 'Testen Sie Ihr Textverständnis mit Multiple-Choice-Fragen und schrittweisen Erklärungen.',
    'games.portuguese.writing.title': 'Schreibwerkstatt',
    'games.portuguese.writing.desc': 'Üben Sie das Schreiben kurzer Texte mit geführten Anleitungen und erhalten Sie Struktur- und Vokabeltipps.',
    'games.math.table.title': 'Magische Multiplikationstabelle',
    'games.math.table.desc': 'Üben Sie Multiplikation auf unterhaltsame Weise mit unserer interaktiven Tabelle.',
    'games.math.operations.title': 'Rechenoperationen-Herausforderung',
    'games.math.operations.desc': 'Lösen Sie Additions-, Subtraktions-, Multiplikations- und Divisionsaufgaben.',
    'games.popular.title': 'Beliebte Spiele',
    'games.popular.grammar.title': 'Grammatik-Quiz',
    'games.popular.grammar.desc': 'Testen Sie Ihr Wissen der portugiesischen Grammatik',
    'games.popular.grammar.tag': 'Portugiesisch',
    'games.popular.table.title': 'Magische Multiplikationstabelle',
    'games.popular.table.desc': 'Üben Sie Multiplikation auf unterhaltsame Weise',
    'games.popular.table.tag': 'Mathematik',
    'games.quiz': 'Quiz',
    'games.pts': 'Pkt',
    'games.footer.text': 'Transformation der brasilianischen Bildung mit Technologie und Qualität.',
    'games.footer.rights': '© 2025 Saber+. Alle Rechte vorbehalten.'
  },
  
  'it-IT': {
    'nav.inicio': 'Home',
    'nav.cursos': 'Corsi',
    'nav.gamificacao': 'Gamification',
    'nav.videoaulas': 'Video',
    
    'language.current': 'La tua regione attuale è:',
    'language.select': 'Seleziona una regione diversa:',
    
    'login.welcome': 'Bentornato!',
    'login.subtitle': 'Inserisci le tue credenziali per accedere al tuo account.',
    'login.email': 'Email',
    'login.email.placeholder': 'tua@email.com',
    'login.password': 'Password',
    'login.password.placeholder': 'Inserisci la tua password',
    'login.remember': 'Ricordami',
    'login.forgot': 'Password dimenticata?',
    'login.button': 'Accedi',
    'login.signup': 'Non hai un account?',
    'login.signup.link': 'Registrati qui',
    'login.divider': 'O CONTINUA CON',
    
    'login.error.invalid_email': 'Inserisci un indirizzo email valido',
    'login.error.invalid_password': 'La password deve contenere almeno 6 cifre',
    'login.error.invalid_password_format': 'La password deve contenere solo numeri',
    'login.error.page_not_developed': 'Questa pagina non è stata ancora sviluppata',
    'login.loading_text': 'Accesso in corso...',
    'login.email.title': 'Inserisci la tua email nel formato: esempio@email.com',
    'login.password.title': 'La password deve contenere solo numeri',
    
    'section.title': 'Inizia Qui il Tuo Viaggio di Apprendimento',
    'section.subtitle': 'Dall\'inizio alle basi: tutto ciò di cui hai bisogno per imparare con calma e fiducia.',
    
    'course.view': 'VISUALIZZA CORSO',
    'course1.title': 'Primi Passi',
    'course1.desc': 'Un primo contatto per chi sta iniziando ora. Qui imparerai, con calma e online, come riconoscere lettere e numeri al tuo ritmo.',
    'course2.title': 'Portoghese Base',
    'course2.desc': 'Lezioni a distanza per aiutarti a leggere e scrivere parole semplici della vita quotidiana. Tutto spiegato in modo facile, per formare frasi e comunicare meglio.',
    'course3.title': 'Matematica Base',
    'course3.desc': 'Un corso online per imparare a gestire i numeri. Praticherai contare, sommare e sottrarre in modo leggero, pensando a situazioni della vita quotidiana.',
    
    'footer.rights': '© 2025 Saber+. Tutti i diritti riservati.',
    
    'dashboard.nav.home': 'Home',
    'dashboard.nav.lessons': 'Video',
    'dashboard.nav.games': 'Giochi',
    'dashboard.nav.user': 'Utente',
    'dashboard.nav.hello': 'Ciao',
    'dashboard.hero.title': 'Educazione di Qualità',
    'dashboard.hero.highlight': 'per Tutti i Brasiliani',
    'dashboard.hero.subtitle': 'Piattaforma completa di insegnamento di portoghese e matematica, con video interattivi e giochi educativi.',
    'dashboard.hero.start': 'Iniziare a Studiare',
    'dashboard.hero.explore': 'Esplorare Giochi',
    'dashboard.features.title': 'Perché scegliere Saber+?',
    'dashboard.features.subtitle': 'Una piattaforma completa e innovativa che rivoluziona il modo di imparare',
    'dashboard.features.videos.title': 'Video Interattivi',
    'dashboard.features.videos.desc': 'Lezioni dinamiche con i migliori insegnanti, organizzate per disciplina e livello.',
    'dashboard.features.games.title': 'Giochi Educativi',
    'dashboard.features.games.desc': 'Impara giocando con giochi stimolanti, ideali per rafforzare l\'apprendimento.',
    'dashboard.features.points.title': 'Sistema di Punti',
    'dashboard.features.points.desc': 'Guadagna punti, badge e ricompense in modo gamificato e motivante.',
    'dashboard.subjects.title': 'Materie in Focus',
    'dashboard.subjects.subtitle': 'Contenuti specializzati nelle aree più importanti dell\'educazione di base',
    'dashboard.subjects.portuguese.title': 'Portoghese',
    'dashboard.subjects.portuguese.desc': 'Grammatica, interpretazione del testo, scrittura e letteratura brasiliana con metodologia moderna e interattiva.',
    'dashboard.subjects.math.title': 'Matematica',
    'dashboard.subjects.math.desc': 'Aritmetica, algebra, geometria e statistica spiegate chiaramente con esercizi pratici.',
    'dashboard.cta.title': 'Pronto a Trasformare il Tuo Apprendimento?',
    'dashboard.cta.subtitle': 'Unisciti a migliaia di studenti che stanno già imparando più efficacemente',
    'dashboard.cta.button': 'Inizia Ora',
    'dashboard.footer.text': 'Trasformando l\'educazione brasiliana con tecnologia e qualità.',
    'dashboard.footer.rights': '© 2025 Saber+. Tutti i diritti riservati.',
    
    'lessons.title': 'Video',
    'lessons.subtitle': 'Impara con i migliori insegnanti del paese',
    'lessons.progress': 'Progresso in Portoghese',
    'lessons.progress.math': 'Progresso in Matematica',
    'lessons.progress.count': '0/2 lezioni (0%)',
    'lessons.portuguese': 'Portoghese',
    'lessons.mathematics': 'Matematica',
    'lessons.portuguese.video1.title': 'Introduzione alla Grammatica Portoghese',
    'lessons.portuguese.video1.desc': 'Concetti di base della grammatica portoghese: classi grammaticali e struttura della lingua.',
    'lessons.portuguese.video2.title': 'Sostantivi e Aggettivi',
    'lessons.portuguese.video2.desc': 'Imparerai a identificare e usare correttamente sostantivi e aggettivi.',
    'lessons.math.video1.title': 'Numeri Naturali',
    'lessons.math.video1.desc': 'Introduzione ai numeri naturali: conteggio, ordine e operazioni di base.',
    'lessons.math.video2.title': 'Addizione e Sottrazione',
    'lessons.math.video2.desc': 'Come eseguire operazioni di addizione e sottrazione con numeri naturali.',
    'lessons.footer.text': 'Trasformando l\'educazione brasiliana con tecnologia e qualità.',
    'lessons.footer.rights': '© 2025 Saber+. Tutti i diritti riservati.',
    
    'games.title': 'Giochi Educativi',
    'games.subtitle': 'Impara giocando e guadagna punti!',
    'games.points': 'I Tuoi Punti',
    'games.portuguese': 'Portoghese',
    'games.mathematics': 'Matematica',
    'games.play': 'Gioca',
    'games.portuguese.quiz.title': 'Quiz di Comprensione del Testo',
    'games.portuguese.quiz.desc': 'Testa la tua comprensione del testo con domande a scelta multipla e spiegazioni passo dopo passo.',
    'games.portuguese.writing.title': 'Laboratorio di Scrittura',
    'games.portuguese.writing.desc': 'Pratica la scrittura di testi brevi con indicazioni guidate e ricevi consigli su struttura e vocabolario.',
    'games.math.table.title': 'Tavola Pitagorica Magica',
    'games.math.table.desc': 'Pratica la moltiplicazione in modo divertente con la nostra tavola interattiva.',
    'games.math.operations.title': 'Sfida delle Operazioni',
    'games.math.operations.desc': 'Risolvi problemi di addizione, sottrazione, moltiplicazione e divisione.',
    'games.popular.title': 'Giochi Popolari',
    'games.popular.grammar.title': 'Quiz di Grammatica',
    'games.popular.grammar.desc': 'Testa le tue conoscenze di grammatica portoghese',
    'games.popular.grammar.tag': 'Portoghese',
    'games.popular.table.title': 'Tavola Pitagorica Magica',
    'games.popular.table.desc': 'Pratica la moltiplicazione in modo divertente',
    'games.popular.table.tag': 'Matematica',
    'games.quiz': 'Quiz',
    'games.pts': 'pts',
    'games.footer.text': 'Trasformando l\'educazione brasiliana con tecnologia e qualità.',
    'games.footer.rights': '© 2025 Saber+. Tutti i diritti riservati.'
  },
  
  'zh-CN': {
    'nav.inicio': '首页',
    'nav.cursos': '课程',
    'nav.gamificacao': '游戏化',
    'nav.videoaulas': '视频课',
    
    'language.current': '您当前的地区是：',
    'language.select': '选择不同的地区：',
    
    'login.welcome': '欢迎回来！',
    'login.subtitle': '输入您的凭据以访问您的帐户。',
    'login.email': '邮箱',
    'login.email.placeholder': '您的@邮箱.com',
    'login.password': '密码',
    'login.password.placeholder': '输入您的密码',
    'login.remember': '记住我',
    'login.forgot': '忘记密码？',
    'login.button': '登录',
    'login.signup': '没有帐户？',
    'login.signup.link': '在此注册',
    'login.divider': '或继续使用',
    
    'login.error.invalid_email': '请输入有效的电子邮件地址',
    'login.error.invalid_password': '密码必须至少包含6个数字',
    'login.error.invalid_password_format': '密码只能包含数字',
    'login.error.page_not_developed': '此页面尚未开发',
    'login.loading_text': '登录中...',
    'login.email.title': '请输入电子邮件格式：例子@email.com',
    'login.password.title': '密码只能包含数字',
    
    'section.title': '在这里开始您的学习之旅',
    'section.subtitle': '从开始到基础：您需要的一切，以便平静而自信地学习。',
    
    'course.view': '查看课程',
    'course1.title': '第一步',
    'course1.desc': '为刚开始的人准备的第一次接触。在这里您将平静地在线学习，按照自己的节奏识别字母和数字。',
    'course2.title': '基础葡萄牙语',
    'course2.desc': '远程课程帮助您阅读和书写日常简单单词。一切都用简单的方式解释，以便您能够组成句子并更好地交流。',
    'course3.title': '基础数学',
    'course3.desc': '学习处理数字的在线课程。您将以轻松的方式练习计数、加法和减法，思考日常生活中的情况。',
    
    'footer.rights': '© 2025 Saber+. 版权所有。',
    
    'dashboard.nav.home': '首页',
    'dashboard.nav.lessons': '视频课',
    'dashboard.nav.games': '游戏',
    'dashboard.nav.user': '用户',
    'dashboard.nav.hello': '您好',
    'dashboard.hero.title': '优质教育',
    'dashboard.hero.highlight': '为所有巴西人',
    'dashboard.hero.subtitle': '完整的葡萄牙语和数学教学平台，提供互动视频课程和教育游戏。',
    'dashboard.hero.start': '开始学习',
    'dashboard.hero.explore': '探索游戏',
    'dashboard.features.title': '为什么选择Saber+？',
    'dashboard.features.subtitle': '一个完整而创新的平台，革命性地改变学习方式',
    'dashboard.features.videos.title': '互动视频课',
    'dashboard.features.videos.desc': '与最优秀的教师一起上动态课程，按学科和水平组织。',
    'dashboard.features.games.title': '教育游戏',
    'dashboard.features.games.desc': '通过富有挑战性的游戏学习，是强化学习的理想选择。',
    'dashboard.features.points.title': '积分系统',
    'dashboard.features.points.desc': '以游戏化和激励的方式赚取积分、徽章和奖励。',
    'dashboard.subjects.title': '重点学科',
    'dashboard.subjects.subtitle': '基础教育最重要领域的专业内容',
    'dashboard.subjects.portuguese.title': '葡萄牙语',
    'dashboard.subjects.portuguese.desc': '语法、文本解释、写作和巴西文学，采用现代互动方法。',
    'dashboard.subjects.math.title': '数学',
    'dashboard.subjects.math.desc': '算术、代数、几何和统计学的清晰解释和实际练习。',
    'dashboard.cta.title': '准备好改变你的学习了吗？',
    'dashboard.cta.subtitle': '加入数千名已经更高效学习的学生',
    'dashboard.cta.button': '现在开始',
    'dashboard.footer.text': '用技术和质量改变巴西教育。',
    'dashboard.footer.rights': '© 2025 Saber+. 版权所有。',
    
    'lessons.title': '视频课',
    'lessons.subtitle': '与国内最优秀的老师一起学习',
    'lessons.progress': '葡萄牙语进度',
    'lessons.progress.math': '数学进度',
    'lessons.progress.count': '0/2 课程 (0%)',
    'lessons.portuguese': '葡萄牙语',
    'lessons.mathematics': '数学',
    'lessons.portuguese.video1.title': '葡萄牙语语法入门',
    'lessons.portuguese.video1.desc': '葡萄牙语语法基本概念：语法类别和语言结构。',
    'lessons.portuguese.video2.title': '名词和形容词',
    'lessons.portuguese.video2.desc': '您将学会正确识别和使用名词和形容词。',
    'lessons.math.video1.title': '自然数',
    'lessons.math.video1.desc': '自然数入门：计数、顺序和基本运算。',
    'lessons.math.video2.title': '加法和减法',
    'lessons.math.video2.desc': '如何进行自然数的加法和减法运算。',
    'lessons.footer.text': '用技术和质量改变巴西教育。',
    'lessons.footer.rights': '© 2025 Saber+. 版权所有。',
    
    'games.title': '教育游戏',
    'games.subtitle': '边玩边学，赚取积分！',
    'games.points': '您的积分',
    'games.portuguese': '葡萄牙语',
    'games.mathematics': '数学',
    'games.play': '开始游戏',
    'games.portuguese.quiz.title': '阅读理解测验',
    'games.portuguese.quiz.desc': '通过选择题和逐步解释测试您的文本理解能力。',
    'games.portuguese.writing.title': '写作工作坊',
    'games.portuguese.writing.desc': '通过引导提示练习写短文，并获得结构和词汇建议。',
    'games.math.table.title': '神奇乘法表',
    'games.math.table.desc': '通过我们的互动表格以有趣的方式练习乘法。',
    'games.math.operations.title': '运算挑战',
    'games.math.operations.desc': '解决加法、减法、乘法和除法问题。',
    'games.popular.title': '热门游戏',
    'games.popular.grammar.title': '语法测验',
    'games.popular.grammar.desc': '测试您的葡萄牙语语法知识',
    'games.popular.grammar.tag': '葡萄牙语',
    'games.popular.table.title': '神奇乘法表',
    'games.popular.table.desc': '以有趣的方式练习乘法',
    'games.popular.table.tag': '数学',
    'games.quiz': '测验',
    'games.pts': '分',
    'games.footer.text': '用技术和质量改变巴西教育。',
    'games.footer.rights': '© 2025 Saber+. 版权所有。'
  },
  
  'ja-JP': {
    'nav.inicio': 'ホーム',
    'nav.cursos': 'コース',
    'nav.gamificacao': 'ゲーミフィケーション',
    'nav.videoaulas': 'ビデオ',
    
    'language.current': '現在の地域：',
    'language.select': '別の地域を選択：',
    
    'login.welcome': 'お帰りなさい！',
    'login.subtitle': 'アカウントにアクセスするために資格情報を入力してください。',
    'login.email': 'メール',
    'login.email.placeholder': 'あなたの@email.com',
    'login.password': 'パスワード',
    'login.password.placeholder': 'パスワードを入力',
    'login.remember': 'ログイン状態を保持',
    'login.forgot': 'パスワードをお忘れですか？',
    'login.button': 'ログイン',
    'login.signup': 'アカウントをお持ちでないですか？',
    'login.signup.link': 'こちらで登録',
    'login.divider': 'または次で続行',
    
    'login.error.invalid_email': '有効なメールアドレスを入力してください',
    'login.error.invalid_password': 'パスワードは6桁以上の数字である必要があります',
    'login.error.invalid_password_format': 'パスワードは数字のみを含む必要があります',
    'login.error.page_not_developed': 'このページはまだ開発されていません',
    'login.loading_text': 'ログイン中...',
    'login.email.title': 'メールを次の形式で入力してください：例@email.com',
    'login.password.title': 'パスワードは数字のみを含む必要があります',
    
    'section.title': 'ここで学習の旅を始めましょう',
    'section.subtitle': '始めから基礎まで：落ち着いて自信を持って学ぶために必要なすべて。',
    
    'course.view': 'コースを見る',
    'course1.title': '最初のステップ',
    'course1.desc': '今始める人のための最初の接触。ここでは落ち着いてオンラインで、自分のペースで文字と数字を認識することを学びます。',
    'course2.title': '基礎ポルトガル語',
    'course2.desc': '日常の簡単な単語の読み書きを手伝う遠隔授業。すべて簡単な方法で説明され、文章を作ってより良くコミュニケーションできます。',
    'course3.title': '基礎数学',
    'course3.desc': '数字を扱うことを学ぶオンラインコース。日常生活の状況を考えながら、軽い方法で数える、足す、引くを練習します。',
    
    'footer.rights': '© 2025 Saber+. 全著作権所有。',
    
    'dashboard.nav.home': 'ホーム',
    'dashboard.nav.lessons': 'ビデオ',
    'dashboard.nav.games': 'ゲーム',
    'dashboard.nav.user': 'ユーザー',
    'dashboard.nav.hello': 'こんにちは',
    'dashboard.hero.title': '質の高い教育',
    'dashboard.hero.highlight': '全ブラジル人のための',
    'dashboard.hero.subtitle': 'インタラクティブなビデオクラスと教育ゲームを備えた完全なポルトガル語と数学の教育プラットフォーム。',
    'dashboard.hero.start': '勉強を始める',
    'dashboard.hero.explore': 'ゲームを探索',
    'dashboard.features.title': 'なぜSaber+を選ぶのか？',
    'dashboard.features.subtitle': '学習方法を革新する完全で革新的なプラットフォーム',
    'dashboard.features.videos.title': 'インタラクティブビデオ',
    'dashboard.features.videos.desc': '最高の教師による動的クラス、科目とレベル別に整理。',
    'dashboard.features.games.title': '教育ゲーム',
    'dashboard.features.games.desc': '学習を強化するのに理想的な挑戦的なゲームで遊びながら学ぶ。',
    'dashboard.features.points.title': 'ポイントシステム',
    'dashboard.features.points.desc': 'ゲーミフィケーションされた動機付けの方法でポイント、バッジ、報酬を獲得。',
    'dashboard.subjects.title': '重点科目',
    'dashboard.subjects.subtitle': '基礎教育の最も重要な分野の専門コンテンツ',
    'dashboard.subjects.portuguese.title': 'ポルトガル語',
    'dashboard.subjects.portuguese.desc': '現代的でインタラクティブな方法論による文法、テキスト解釈、作文、ブラジル文学。',
    'dashboard.subjects.math.title': '数学',
    'dashboard.subjects.math.desc': '実践的な演習で明確に説明された算術、代数、幾何学、統計学。',
    'dashboard.cta.title': '学習を変革する準備はできましたか？',
    'dashboard.cta.subtitle': 'すでにより効率的に学んでいる何千人もの学生に加わる',
    'dashboard.cta.button': '今すぐ始める',
    'dashboard.footer.text': 'テクノロジーと品質でブラジルの教育を変革。',
    'dashboard.footer.rights': '© 2025 Saber+. 全著作権所有。',
    
    'lessons.title': 'ビデオ',
    'lessons.subtitle': '国内最高の教師から学ぶ',
    'lessons.progress': 'ポルトガル語の進捗',
    'lessons.progress.math': '数学の進捗',
    'lessons.progress.count': '0/2 レッスン (0%)',
    'lessons.portuguese': 'ポルトガル語',
    'lessons.mathematics': '数学',
    'lessons.portuguese.video1.title': 'ポルトガル語文法入門',
    'lessons.portuguese.video1.desc': 'ポルトガル語文法の基本概念：文法クラスと言語構造。',
    'lessons.portuguese.video2.title': '名詞と形容詞',
    'lessons.portuguese.video2.desc': '名詞と形容詞を正しく識別して使用する方法を学習します。',
    'lessons.math.video1.title': '自然数',
    'lessons.math.video1.desc': '自然数の紹介：数え方、順序、基本演算。',
    'lessons.math.video2.title': '足し算と引き算',
    'lessons.math.video2.desc': '自然数で足し算と引き算の演算を行う方法。',
    'lessons.footer.text': 'テクノロジーと品質でブラジルの教育を変革。',
    'lessons.footer.rights': '© 2025 Saber+. 全著作権所有。',
    
    'games.title': '教育ゲーム',
    'games.subtitle': '遊びながら学んでポイントを獲得！',
    'games.points': 'あなたのポイント',
    'games.portuguese': 'ポルトガル語',
    'games.mathematics': '数学',
    'games.play': 'プレイ',
    'games.portuguese.quiz.title': '読解クイズ',
    'games.portuguese.quiz.desc': '選択問題とステップバイステップの解説でテキスト理解力をテストします。',
    'games.portuguese.writing.title': 'ライティングワークショップ',
    'games.portuguese.writing.desc': 'ガイド付きプロンプトで短いテキストの書き方を練習し、構造と語彙のヒントを受け取ります。',
    'games.math.table.title': 'マジック掛け算表',
    'games.math.table.desc': 'インタラクティブな表で楽しく掛け算を練習します。',
    'games.math.operations.title': '四則演算チャレンジ',
    'games.math.operations.desc': '足し算、引き算、掛け算、割り算の問題を解きます。',
    'games.popular.title': '人気ゲーム',
    'games.popular.grammar.title': '文法クイズ',
    'games.popular.grammar.desc': 'ポルトガル語の文法知識をテストします',
    'games.popular.grammar.tag': 'ポルトガル語',
    'games.popular.table.title': 'マジック掛け算表',
    'games.popular.table.desc': '楽しく掛け算を練習します',
    'games.popular.table.tag': '数学',
    'games.quiz': 'クイズ',
    'games.pts': 'ポイント',
    'games.footer.text': 'テクノロジーと品質でブラジルの教育を変革。',
    'games.footer.rights': '© 2025 Saber+. 全著作権所有。'
  },
  
  'ko-KR': {
    'nav.inicio': '홈',
    'nav.cursos': '강의',
    'nav.gamificacao': '게임화',
    'nav.videoaulas': '비디오',
    
    'language.current': '현재 지역:',
    'language.select': '다른 지역 선택:',
    
    'login.welcome': '다시 오신 것을 환영합니다!',
    'login.subtitle': '계정에 액세스하려면 자격 증명을 입력하세요.',
    'login.email': '이메일',
    'login.email.placeholder': '당신의@email.com',
    'login.password': '비밀번호',
    'login.password.placeholder': '비밀번호를 입력하세요',
    'login.remember': '로그인 상태 유지',
    'login.forgot': '비밀번호를 잊으셨나요?',
    'login.button': '로그인',
    'login.signup': '계정이 없으신가요?',
    'login.signup.link': '여기서 가입',
    'login.divider': '또는 계속하기',
    
    'login.error.invalid_email': '유효한 이메일 주소를 입력해주세요',
    'login.error.invalid_password': '비밀번호는 최소 6자리 숫자여야 합니다',
    'login.error.invalid_password_format': '비밀번호는 숫자만 포함해야 합니다',
    'login.error.page_not_developed': '이 페이지는 아직 개발되지 않았습니다',
    'login.loading_text': '로그인 중...',
    'login.email.title': '이메일을 다음 형식으로 입력하세요: 예시@email.com',
    'login.password.title': '비밀번호는 숫자만 포함해야 합니다',
    
    'section.title': '여기서 학습 여정을 시작하세요',
    'section.subtitle': '시작부터 기초까지: 차분하고 자신 있게 배우기 위해 필요한 모든 것.',
    
    'course.view': '강의 보기',
    'course1.title': '첫 걸음',
    'course1.desc': '지금 시작하는 사람들을 위한 첫 접촉. 여기서는 차분하게 온라인으로 자신만의 속도로 글자와 숫자를 인식하는 것을 배웁니다.',
    'course2.title': '기초 포르투갈어',
    'course2.desc': '일상의 간단한 단어 읽기와 쓰기를 도와주는 원격 수업. 모든 것이 쉬운 방식으로 설명되어 문장을 만들고 더 잘 소통할 수 있습니다.',
    'course3.title': '기초 수학',
    'course3.desc': '숫자를 다루는 것을 배우는 온라인 강의. 일상생활의 상황을 생각하며 가벼운 방식으로 세기, 더하기, 빼기를 연습합니다.',
    
    'footer.rights': '© 2025 Saber+. 모든 권리 보유.',
    
    'dashboard.nav.home': '홈',
    'dashboard.nav.lessons': '비디오',
    'dashboard.nav.games': '게임',
    'dashboard.nav.user': '사용자',
    'dashboard.nav.hello': '안녕하세요',
    'dashboard.hero.title': '질 높은 교육',
    'dashboard.hero.highlight': '모든 브라질인을 위한',
    'dashboard.hero.subtitle': '인터랙티브 비디오 클래스와 교육 게임을 갖춘 완전한 포르투갈어 및 수학 교육 플랫폼.',
    'dashboard.hero.start': '공부 시작하기',
    'dashboard.hero.explore': '게임 탐색하기',
    'dashboard.features.title': '왜 Saber+를 선택하나요?',
    'dashboard.features.subtitle': '학습 방법을 혁신하는 완전하고 혁신적인 플랫폼',
    'dashboard.features.videos.title': '인터랙티브 비디오',
    'dashboard.features.videos.desc': '최고의 교사들과 함께하는 동적 수업, 과목과 레벨별로 구성.',
    'dashboard.features.games.title': '교육 게임',
    'dashboard.features.games.desc': '학습 강화에 이상적인 도전적인 게임으로 놀면서 배우세요.',
    'dashboard.features.points.title': '포인트 시스템',
    'dashboard.features.points.desc': '게임화되고 동기 부여적인 방식으로 포인트, 배지, 보상을 획득하세요.',
    'dashboard.subjects.title': '중점 과목',
    'dashboard.subjects.subtitle': '기초 교육의 가장 중요한 분야의 전문 콘텐츠',
    'dashboard.subjects.portuguese.title': '포르투갈어',
    'dashboard.subjects.portuguese.desc': '현대적이고 인터랙티브한 방법론으로 문법, 텍스트 해석, 작문, 브라질 문학.',
    'dashboard.subjects.math.title': '수학',
    'dashboard.subjects.math.desc': '실용적인 연습과 함께 명확하게 설명된 산수, 대수, 기하학, 통계학.',
    'dashboard.cta.title': '학습을 변화시킬 준비가 되셨나요?',
    'dashboard.cta.subtitle': '이미 더 효율적으로 학습하고 있는 수천 명의 학생들과 함께하세요',
    'dashboard.cta.button': '지금 시작하기',
    'dashboard.footer.text': '기술과 품질로 브라질 교육을 변화시키고 있습니다.',
    'dashboard.footer.rights': '© 2025 Saber+. 모든 권리 보유.',
    
    'lessons.title': '비디오',
    'lessons.subtitle': '국내 최고의 선생님들과 함께 배우세요',
    'lessons.progress': '포르투갈어 진행률',
    'lessons.progress.math': '수학 진행률',
    'lessons.progress.count': '0/2 수업 (0%)',
    'lessons.portuguese': '포르투갈어',
    'lessons.mathematics': '수학',
    'lessons.portuguese.video1.title': '포르투갈어 문법 입문',
    'lessons.portuguese.video1.desc': '포르투갈어 문법의 기본 개념: 문법 클래스와 언어 구조.',
    'lessons.portuguese.video2.title': '명사와 형용사',
    'lessons.portuguese.video2.desc': '명사와 형용사를 올바르게 식별하고 사용하는 방법을 배웁니다.',
    'lessons.math.video1.title': '자연수',
    'lessons.math.video1.desc': '자연수 소개: 계산, 순서, 기본 연산.',
    'lessons.math.video2.title': '덧셈과 뺄셈',
    'lessons.math.video2.desc': '자연수로 덧셈과 뺄셈 연산을 수행하는 방법.',
    'lessons.footer.text': '기술과 품질로 브라질 교육을 변화시키고 있습니다.',
    'lessons.footer.rights': '© 2025 Saber+. 모든 권리 보유.',
    
    'games.title': '교육 게임',
    'games.subtitle': '놀면서 배우고 포인트를 획득하세요!',
    'games.points': '당신의 포인트',
    'games.portuguese': '포르투갈어',
    'games.mathematics': '수학',
    'games.play': '플레이',
    'games.portuguese.quiz.title': '독해 퀴즈',
    'games.portuguese.quiz.desc': '선택형 문제와 단계별 설명으로 텍스트 이해력을 테스트하세요.',
    'games.portuguese.writing.title': '작문 워크숍',
    'games.portuguese.writing.desc': '가이드된 프롬프트로 짧은 텍스트 쓰기를 연습하고 구조와 어휘 팁을 받으세요.',
    'games.math.table.title': '마법 구구단',
    'games.math.table.desc': '인터랙티브 표로 재미있게 곱셈을 연습하세요.',
    'games.math.operations.title': '연산 도전',
    'games.math.operations.desc': '덧셈, 뺄셈, 곱셈, 나눗셈 문제를 해결하세요.',
    'games.popular.title': '인기 게임',
    'games.popular.grammar.title': '문법 퀴즈',
    'games.popular.grammar.desc': '포르투갈어 문법 지식을 테스트하세요',
    'games.popular.grammar.tag': '포르투갈어',
    'games.popular.table.title': '마법 구구단',
    'games.popular.table.desc': '재미있게 곱셈을 연습하세요',
    'games.popular.table.tag': '수학',
    'games.quiz': '퀴즈',
    'games.pts': '포인트',
    'games.footer.text': '기술과 품질로 브라질 교육을 변화시키고 있습니다.',
    'games.footer.rights': '© 2025 Saber+. 모든 권리 보유.'
  }
};

function translateDashboardTexts(translation) {

  const userEl = document.querySelector('.navbar-user');
  if (userEl) {
    const userName = localStorage.getItem('userName');
    const span = userEl.querySelector('span');
    
    if (userName && span) {
      span.textContent = `${translation['dashboard.nav.hello'] || 'Olá'}, ${userName}`;
    } else if (!userName) {
      const textNode = userEl.childNodes[0];
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = translation['dashboard.nav.user'] || 'Usuário';
      }
    }
  }

  const heroButtons = document.querySelectorAll('.hero-actions a');
  if (heroButtons.length >= 2) {
    const buttonTexts = [
      translation['dashboard.hero.start'] || 'Começar a Estudar',
      translation['dashboard.hero.explore'] || 'Explorar Jogos'
    ];
    
    heroButtons.forEach((button, index) => {
      const textNode = button.childNodes[button.childNodes.length - 1];
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        textNode.textContent = ' ' + buttonTexts[index];
      }
    });
  }

  const ctaButton = document.querySelector('.cta .btn');
  if (ctaButton) {
    ctaButton.textContent = translation['dashboard.cta.button'] || 'Começar Agora';
  }
}

function translateLessonsTexts(translation) {
  
  const userEl = document.querySelector('.navbar-user');
  if (userEl) {
    const userName = localStorage.getItem('userName');
    const span = userEl.querySelector('span');
    
    if (userName && span) {
      span.textContent = `${translation['dashboard.nav.hello'] || 'Olá'}, ${userName}`;
    }
  }
}

function translateGamesTexts(translation) {
  
  const userEl = document.querySelector('.navbar-user');
  if (userEl) {
    const userName = localStorage.getItem('userName');
    const span = userEl.querySelector('span');
    
    if (userName && span) {
      span.textContent = `${translation['dashboard.nav.hello'] || 'Olá'}, ${userName}`;
    }
  }
}

function translatePage(langCode) {
  const translation = translations[langCode];
  if (!translation) return;
  
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translation[key]) {
      if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email' || element.type === 'password')) {
        element.placeholder = translation[key];
      } else {
        element.textContent = translation[key];
      }
    }
  });

  document.querySelectorAll('[data-translate-title]').forEach(element => {
    const key = element.getAttribute('data-translate-title');
    if (translation[key]) {
      element.title = translation[key];
    }
  });

  if (window.location.pathname.includes('dashboard.html')) {
    translateDashboardTexts(translation);
  } else if (window.location.pathname.includes('lessons.html')) {
    translateLessonsTexts(translation);
  } else if (window.location.pathname.includes('games.html')) {
    translateGamesTexts(translation);
  }
  
  if (typeof Login !== 'undefined' && Login.updateMessages) {
    Login.updateMessages();
  }
  
  document.documentElement.lang = langCode.toLowerCase();
}

document.addEventListener('DOMContentLoaded', function() {
  const languageBtn = document.getElementById('languageBtn');
  const languageDropdown = document.getElementById('languageDropdown');
  const languageOptions = document.querySelectorAll('.language-option');
  const currentLanguageSpan = document.querySelector('.current-language');

  languageBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    languageDropdown.classList.toggle('show');
    languageBtn.classList.toggle('active');
  });

  document.addEventListener('click', function(e) {
    if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
      languageDropdown.classList.remove('show');
      languageBtn.classList.remove('active');
    }
  });

  languageOptions.forEach(option => {
    option.addEventListener('click', function() {
      languageOptions.forEach(opt => opt.classList.remove('active'));
      
      this.classList.add('active');
      
      const langCode = this.getAttribute('data-lang');
      currentLanguageSpan.textContent = langCode;
      
      const langName = this.getAttribute('data-name');
      document.querySelector('.dropdown-header h3').textContent = langName;
      
      translatePage(langCode);
      
      languageDropdown.classList.remove('show');
      languageBtn.classList.remove('active');
      
      console.log('Idioma selecionado:', langCode);
      
      localStorage.setItem('selectedLanguage', langCode);
    });
  });

  const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt-BR';
  const savedOption = document.querySelector(`[data-lang="${savedLanguage}"]`);
  if (savedOption) {
    savedOption.click();
  }
});
