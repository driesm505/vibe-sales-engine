# VibeSalesEngine 🚀

Een moderne web applicatie voor Vibe Coding Agency - van idee naar app in dagen. Gebouwd met React, TypeScript, en Express.

## ✨ Features

- **🎨 Moderne UI/UX** - Interactieve elementen met hover effecten en animaties
- **🌍 Meertalig** - Volledige ondersteuning voor Nederlands en Engels
- **📱 Responsive** - Werkt perfect op desktop, tablet en mobiel
- **⚡ Snel** - Gebouwd met Vite voor snelle development en productie
- **🔧 TypeScript** - Type-safe development voor betere code kwaliteit

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Vite
- **Backend:** Express.js, Node.js
- **Styling:** Tailwind CSS met custom design system
- **Icons:** Lucide React
- **Internationalization:** Custom i18n solution

## 🚀 Quick Start

### Vereisten
- Node.js 18+ 
- npm of yarn

### Installatie

1. **Clone de repository:**
```bash
git clone https://github.com/[jouw-username]/vibe-sales-engine.git
cd vibe-sales-engine
```

2. **Installeer dependencies:**
```bash
npm install
```

3. **Start de development server:**
```bash
npm run dev
```

4. **Open je browser:**
Ga naar [http://localhost:3005](http://localhost:3005)

## 📁 Project Structuur

```
VibeSalesEngine/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React componenten
│   │   ├── lib/           # Utilities en configuratie
│   │   └── pages/         # Page componenten
│   └── index.html
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   └── routes.ts         # API routes
├── shared/               # Gedeelde types en schema's
└── package.json
```

## 🌍 Internationalization

De applicatie ondersteunt Nederlands en Engels. Alle teksten zijn gedefinieerd in `client/src/lib/i18n.ts`.

### Taal wisselen:
- Gebruik de language switcher in de navigatie
- Of verander de URL parameter: `?lang=nl` of `?lang=en`

## 🎨 Design System

### Kleuren:
- **Vibe Green:** `#00FF88` - Primary brand color
- **Conversion Orange:** `#FF6B35` - Call-to-action
- **Trust Blue:** `#4F46E5` - Trust indicators
- **Sage Green:** `#10B981` - Success states

### Typography:
- **Headings:** Inter (700, 600, 500)
- **Body:** Inter (400, 300)

## 📦 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build voor productie
npm run preview      # Preview productie build
npm run lint         # Run ESLint
```

## 🚀 Deployment

### GitHub Pages
1. Push naar GitHub
2. Ga naar repository Settings > Pages
3. Selecteer "Deploy from a branch"
4. Kies `main` branch en `/docs` folder

### Vercel
1. Verbind je GitHub repository met Vercel
2. Vercel detecteert automatisch de Vite configuratie
3. Deploy automatisch bij elke push

### Netlify
1. Verbind je GitHub repository met Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

## 🤝 Bijdragen

1. Fork de repository
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je wijzigingen (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📄 Licentie

Dit project is gelicenseerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 📞 Contact

- **Website:** [vibe-coding.agency](https://vibe-coding.agency)
- **Email:** info@vibe-coding.agency

---

Gebouwd met ❤️ door Vibe Coding Agency 