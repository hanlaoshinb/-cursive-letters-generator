function convertText() {
    try {
        const inputText = document.getElementById('inputText').value;
        const selectedFont = document.getElementById('fontSelect').value;
        const outputText = document.getElementById('outputText');
        
        outputText.style.fontFamily = `'${selectedFont}', cursive`;
        outputText.textContent = inputText || 'Sample Text';
    } catch (error) {
        console.error('转换错误：', error);
    }
}

function updateBackground(color) {
    const outputSection = document.getElementById('outputSection');
    const buttons = document.querySelectorAll('.bg-btn');
    
    // 更新按钮状态
    buttons.forEach(btn => {
        if (btn.getAttribute('data-bg') === color) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // 更新背景颜色
    if (color === 'black') {
        outputSection.classList.add('dark');
    } else {
        outputSection.classList.remove('dark');
    }
}

function updateSize() {
    const size = document.getElementById('sizeSlider').value;
    const outputText = document.getElementById('outputText');
    const sizeValue = document.getElementById('sizeValue');
    
    outputText.style.fontSize = `${size}px`;
    sizeValue.textContent = `${size}px`;
}

// 语言配置
const translations = {
    ja: {
        title: "AI搭載英語の筆記体ジェネレーター | AIで美しい英文筆記体を生成",
        description: "AIを活用した英語の筆記体生成ツール。様々な筆記体フォントから選択でき、サイズ調整も可能。英語の署名、メッセージカード、招待状などに最適な筆記体を簡単に生成できます。",
        fontLabel: "フォント：",
        sampleLink: "（筆記体フォントの見本）",
        backgroundLabel: "背景：",
        sizeLabel: "サイズ：",
        placeholder: "ここに英文を入力してください...",
        showcaseTitle: "人気の筆記体フォント一覧"
    },
    es: {
        title: "Generador AI de Letra Cursiva | Crea Texto Cursivo con Inteligencia Artificial",
        description: "Generador de letra cursiva potenciado por IA. Convierte texto normal en elegante letra cursiva usando tecnología de inteligencia artificial. Ideal para firmas, invitaciones y tarjetas.",
        fontLabel: "Tipo de letra:",
        sampleLink: "(Ver ejemplos de letra cursiva)",
        backgroundLabel: "Fondo:",
        sizeLabel: "Tamaño:",
        placeholder: "Escriba aquí...",
        showcaseTitle: "Tipos de Letra Cursiva Populares"
    },
    en: {
        title: "AI Cursive Letters Generator | Create Beautiful Cursive with Generative AI",
        description: "AI-powered cursive letters generator. Transform your text into beautiful cursive writing using advanced AI technology. Perfect for signatures, invitations, and social media content.",
        fontLabel: "Cursive Style:",
        sampleLink: "(View Cursive Samples)",
        backgroundLabel: "Background:",
        sizeLabel: "Letter Size:",
        placeholder: "Enter text to convert to cursive...",
        showcaseTitle: "Popular Cursive Letter Styles"
    }
};

function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    const t = translations[lang];
    
    document.documentElement.lang = lang;
    
    // 更新页面标题和描述
    document.title = t.title;
    
    // 更新meta描述
    document.querySelector('meta[name="description"]').content = t.description;
    
    // 当切换到西班牙语时更新meta关键词
    if (lang === 'es') {
        document.querySelector('meta[name="keywords"]').content = 'letra cursiva, letra cursiva online, generador letra cursiva, caligrafía inglesa, letra cursiva elegante, escribir en cursiva, convertidor texto cursiva';
        
        // 更新OGP标签
        document.querySelector('meta[property="og:title"]').content = t.title;
        document.querySelector('meta[property="og:description"]').content = t.description;
        
        // 更新结构化数据
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Generador de Letra Cursiva Online",
            "description": "Herramienta gratuita para convertir texto normal en letra cursiva elegante",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
            },
            "keywords": "letra cursiva, caligrafía, texto elegante"
        };
        
        document.querySelector('script[type="application/ld+json"]').textContent = JSON.stringify(structuredData);
    }
    
    // 当切换到英文时更新meta信息
    if (lang === 'en') {
        document.querySelector('meta[name="keywords"]').content = 'cursive letters, cursive letters generator, cursive writing, convert to cursive, cursive text converter, handwriting generator, signature font';
        
        // 更新OGP标签
        document.querySelector('meta[property="og:title"]').content = t.title;
        document.querySelector('meta[property="og:description"]').content = t.description;
        
        // 更新结构化数据
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Cursive Letters Generator",
            "description": "Free online tool to convert text into cursive letters",
            "applicationCategory": "TextConverter",
            "operatingSystem": "Web",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "keywords": "cursive letters, cursive writing, text to cursive, handwriting generator",
            "audience": {
                "@type": "Audience",
                "audienceType": "students, teachers, designers, social media users"
            },
            "featureList": [
                "Convert text to cursive letters",
                "Multiple cursive writing styles",
                "Adjustable letter size",
                "Perfect for signatures and invitations",
                "Free to use"
            ]
        };
        
        document.querySelector('script[type="application/ld+json"]').textContent = JSON.stringify(structuredData);
    }
    
    // 更新HTML语言标签
    document.documentElement.lang = lang;
    
    // 更新页面文本
    document.querySelector('h1').textContent = t.title;
    document.querySelector('.service-description').textContent = t.description;
    document.querySelector('.font-control label').textContent = t.fontLabel;
    document.querySelector('.sample-link').textContent = t.sampleLink;
    document.querySelector('.background-control label').textContent = t.backgroundLabel;
    document.querySelector('.size-control label').textContent = t.sizeLabel;
    document.querySelector('#inputText').placeholder = t.placeholder;
    document.querySelector('.showcase-title').textContent = t.showcaseTitle;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 预加载字体
    const fonts = ['Dancing Script', 'Great Vibes', 'Pacifico'];
    fonts.forEach(font => {
        document.body.style.fontFamily = `'${font}', cursive`;
    });
    
    // 初始化显示
    convertText();
}); 