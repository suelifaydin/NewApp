## 📱 Proje Genel Bakış

TestApp, React Native

## 🏗️ Proje Mimarisi
Tür	- Adlandırma Biçimi	- Örnek	- Açıklama

📁 Klasörler/ - kebab-case - user-profile/ - Bütün klasörlerde önerilir
📄 Dosyalar/ - kebab-case - auth-store.ts - Tüm dosyalarda önerilir
📦 React Component/	- PascalCase - 	LoginForm.tsx -	Çünkü component bir class/fonksiyon gibi
🧠 Hook/ - 	camelCase -useAuth.ts, useTimer - Çünkü fonksiyon ismiyle birebir örtüşür


### Klasör Yapısı & Detaylar
Yapı: Feature-based 

```
TestApp/
src/
├── assets/                  # Görseller, fontlar , ikonlar
│
├── components/              # Global bileşenler (Button, Modal, Header vs.)
│
├── config/                  # Ortam ayarları, environment değişkenleri
│   ├── env.ts               # .env dosyasını okuyup JS objesine çevirir
│   └── index.ts             # Diğer config dosyaları buradan export edilir
│
├── external/                # Harici servis adapter'ları
│   └── revenuecatService.ts
│
├── features/                # Feature/sayfa bazlı yapı
│   ├── Auth/
│   │   ├── screens/
│   │   │   └── LoginScreen.tsx
│   │   ├── components/
│   │   │   └── LoginForm.tsx
│   │   ├── styles/
│   │   │   └── login.styles.ts
│   │   ├── hooks/
│   │   │   └── useLogin.ts
│   │   └── authStore.ts
│   └── Profile/
│       ├── screens/
│       └── ...
│
├── hooks/                   # Global custom hook’lar
│   └── useDebounce.ts
│
├── localization/            # Çoklu dil desteği
│   ├── locales/
│   │   ├── en.json
│   │   └── tr.json
│   ├── i18n.ts
│   └── languageDetector.ts
│
├── navigation/              # React Navigation yapılandırmaları
│   └── AppNavigator.tsx
│
├── services/                # Backend API çağrıları
│   └── apiService.ts
│
├── stores/                  # Global MobX store’lar
│   ├── RootStore.ts         # Tüm store’ların birleşim noktası
│   └── UserStore.ts
│
├── theme/                   # Tema ayarları (renk, font, spacing)
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── index.ts
│
├── types/                   # Global tip tanımlamaları
│   └── user.d.ts
│
├── utils/                   # Yardımcı fonksiyonlar
│   └── formatDate.ts
│
└── App.tsx                  # Uygulamanın giriş dosyası


## 🔧 Teknoloji Stack'i

### Ana Teknolojiler
- **React Native**: Mobil uygulama geliştirme framework'ü
- **TypeScript**: Tip güvenliği ve gelişmiş geliştirme deneyimi
- **Redux Toolkit**: State yönetimi
- **React Navigation**: Navigasyon yönetimi

### Ek Kütüphaneler
- **Axios**: HTTP istekleri
- **Mobx**: State yönetimi 
- **i18next**: Çoklu dil desteği
- **RevenueCat**: Abonelik ve ödeme yönetimi

## 📁 Modül Detayları

### 1. Components (Bileşenler)
Uygulamada kullanılan ortak bileşenler burada yer alır:
- **Button.tsx**: Yeniden kullanılabilir buton bileşeni
- **Input.tsx**: Form girdi bileşeni
- **Modal.tsx**: Modal pencere bileşeni

### 2. Navigation (Navigasyon)
Uygulama navigasyon yapısını yönetir:
- **RootNavigator.tsx**: Ana navigasyon yapısı
- **AppNavigator.tsx**: Uygulama içi navigasyon

### 3. Store (Durum Yönetimi)
Redux Toolkit kullanılarak state yönetimi:
- **authSlice.ts**: Kimlik doğrulama durumu
- **userSlice.ts**: Kullanıcı bilgileri durumu

### 4. Theme (Tema)
Uygulamanın görsel teması:
- Açık/koyu tema desteği
- Renk paleti yönetimi
- Tipografi ayarları
- Boşluk değerleri

### 5. Localization (Yerelleştirme)
Çoklu dil desteği:
- İngilizce ve Türkçe dil dosyaları
- i18next entegrasyonu

### 6. Services (Servisler)
API ve harici servis entegrasyonları:
- Axios HTTP client yapılandırması
- API endpoint yönetimi
- Kimlik doğrulama servisleri

### 7. Features (Özellikler)
Modüler özellik yapısı:
- **Auth**: Giriş/çıkış işlemleri
- **Profile**: Kullanıcı profil yönetimi
- **Home**: Ana sayfa işlevleri

## 🚀 Kurulum ve Çalıştırma

### Ön Gereksinimler
```bash
Node.js (v14 veya üzeri)
React Native CLI
Android Studio (Android için)
Xcode (iOS için)
```


## 📝 Geliştirme Standartları

### Kod Organizasyonu
- Her özellik kendi klasöründe organize edilir
- Bileşenler, stiller ve hook'lar ayrı dosyalarda tutulur
- Export/import yapısı tutarlı olarak uygulanır

### TypeScript Kullanımı
- Tüm dosyalar TypeScript ile yazılır
- Tip tanımları `types/` klasöründe merkezi olarak yönetilir
- Interface ve type'lar açık şekilde tanımlanır

### Stil Yönetimi
- Her özellik için ayrı stil dosyaları
- Tema sistemi kullanılarak tutarlı tasarım
- Responsive tasarım prensipleri

## 🔐 Güvenlik

### API Güvenliği
- Axios interceptor'ları ile token yönetimi
- API endpoint'lerinin güvenli yapılandırması

### Veri Güvenliği
- Hassas verilerin güvenli saklanması
- Kimlik doğrulama token'larının güvenli yönetimi

## 📱 Platform Özellikleri

### Android
- Android-specific konfigürasyonlar
- Gradle yapılandırması

### iOS
- iOS-specific konfigürasyonlar
- CocoaPods entegrasyonu

### Geliştirici
- Teknik lider Efekan EFE

### Dokümantasyon Güncellemeleri
Bu dokümantasyon düzenli olarak güncellenmekte olup, proje geliştikçe yeni bölümler eklenmektedir.

---

**Son Güncelleme**: Haziran 28 2025
**Versiyon**: 1.0.0
**Durum**: Aktif Geliştirme