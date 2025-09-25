# Maahanmuuttotutkimus - Taloudellisen kannattavuuden analyysi

Kattava tutkimus ei-työperäisen maahanmuuton taloudellisesta kannattavuudesta, joka huomioi perinteiset multiplikaattorivaikutukset sekä aiemmin mallintamattomat "opportunity cost" -vaikutukset.

🌐 **Sivusto:** [https://stochastic-philosophy.github.io/humanitaarisen-maahanmuuton-taloudelliset-vaikutukset/](https://stochastic-philosophy.github.io/humanitaarisen-maahanmuuton-taloudelliset-vaikutukset/)

📧 **Yhteydenotot:** stochasticphilosophy(at)gmail(dot)com

## Tutkimuksen keskeiset havainnot

### 🇫🇮 Suomen tulokset
- **NPV (20v):** 65 400€ per henkilö
- **Takaisinmaksuaika:** 3.2 vuotta
- **ROI (10v):** 340%
- **Keskeinen löydös:** Perinteiset mallit aliarvioivat hyötyjä 130%

### 🔬 Tieteellinen kontribuutio
- Ensimmäinen systemaattinen opportunity cost -analyysi maahanmuuttokontekstissa
- Dynaaminen NPV-malli, joka integroi neljä aiemmin erillään käsiteltyä komponenttia
- Empiirinen validointi Ruotsin kokemusten kautta

## Sivuston rakenne

```
docs/
├── index.html              # Pääsivu kaikille maille
├── css/
│   └── styles.css          # Yhtenäinen tyylitiedosto
├── js/
│   └── main.js             # Teemavaihto ja navigaatio
├── suomi/                  # Suomen tutkimus
│   ├── index.html          # Suomi-kohtainen pääsivu
│   ├── pages/              # Tutkimuksen alasivut
│   │   ├── perusteet.html
│   │   ├── menetelmat.html
│   │   ├── tulokset.html
│   │   ├── johtopäätökset.html
│   │   └── simulaattori.html
│   └── downloads/          # Ladattavat tiedostot
│       └── suomi_tutkimusraportti.pdf
└── usa/                    # USA:n tutkimus (tulossa)
    ├── index.html          # (tulossa)
    └── pages/              # (tulossa)
```

## Tekniset ominaisuudet

### 🎨 Käyttäjäkokemus
- **Responsiivinen design:** Toimii mobiilissa, tabletissa ja työpöydällä
- **Tumma/vaalea teema:** Automaattinen järjestelmäteeman tunnistus + manuaalinen vaihto
- **Sticky navigation:** Navigointipalkki pysyy näkyvissä
- **GDPR-yhteensopiva:** Cookie consent EU-säädösten mukaisesti

### ⚡ Suorituskyky
- **Vanilla JavaScript:** Ei ulkoisia riippuvuuksia
- **LocalStorage:** Teemavalinta tallennetaan käyttäjän suostumuksella
- **Optimoidut kuvat:** Tehokas lataus ja näyttö
- **Semanttinen HTML:** Saavutettava ja hakukoneoptimoitu

### 🧮 Interaktiivinen simulaattori
- **Reaaliaikainen laskenta:** Tulokset päivittyvät parametreja säädettäessä
- **Kolme esiasetusta:** Pessimistinen, Realistinen, Optimistinen
- **Herkkyysanalyysi:** Kaikkien parametrien vaikutus testattavissa
- **Visualisoidut tulokset:** Selkeä esitys kannattavuusindikaattoreista

## Käyttöönotto

### GitHub Pages
1. Kloonaa repositorio
2. Mene Settings > Pages
3. Valitse source: "Deploy from a branch"
4. Valitse branch: `main` ja folder: `/docs`
5. Sivusto on valmis osoitteessa: `https://stochastic-philosophy.github.io/humanitaarisen-maahanmuuton-taloudelliset-vaikutukset/`

### Paikallinen kehitys
```bash
# Kloonaa repo
git clone https://github.com/stochastic-philosophy/humanitaarisen-maahanmuuton-taloudelliset-vaikutukset.git

# Siirry docs-kansioon
cd maahanmuuttotutkimus/docs

# Käynnistä paikallinen serveri
python -m http.server 8000
# tai
npx serve .

# Avaa http://localhost:8000
```

## Tutkimuksen metodologia

### Dynaaminen NPV-malli
Tutkimus kehitti dynaamisen nettonykyarvomallin, joka huomioi:

1. **Todelliset kokonaiskustannukset**
   - Kotoutuspalvelut (KEHA-keskus)
   - Työttömyysturva, asumistuki, toimeentulotuki (Kela, THL)

2. **Realistisen työllistymispolun**
   - Vuodet 1-2: 15% työllisyysaste
   - Vuodet 3-5: 40% työllisyysaste  
   - Vuodet 6-20: 60% työllisyysaste

3. **Perinteiset multiplikaattorivaikutukset**
   - Perustuu kansainväliseen tutkimukseen
   - Hoivapalvelujen korkea kerroin (4.3)

4. **Opportunity cost -vaikutukset** ⭐
   - **Uusi lähestymistapa:** Vältettyjen järjestelmämenetysten mallinnus
   - Perustuu kanadalaiseen tiimityötutkimukseen ja USA:n poissaolokustannustutkimukseen
   - Kerroin 2.5 (konservatiivinen arvio)

### Keskeiset lähteet
- **Suomen viralliset tilastot:** Tilastokeskus, Kela, Verohallinto, KEHA-keskus, VATT
- **Kansainvälinen tutkimus:** Reeves et al. (2013), Zhang et al. (2017), CDC Foundation (2015)
- **Empiirinen validointi:** Ruotsin kokemus (Rothstein 2017)

## Sivuston sisältö

### 🇫🇮 Suomen tutkimus (valmis)
- **Perusteet:** Teoreettinen perusta ja opportunity cost -lähestymistavan kehitys
- **Menetelmät:** Dynaaminen NPV-malli ja aineiston kuvaus
- **Tulokset:** Perusmallin tulokset, herkkyysanalyysi ja skenaariovertailut
- **Johtopäätökset:** Tulosten tulkinta, politiikkasuositukset ja jatkotutkimustarpeet
- **Simulaattori:** Interaktiivinen työkalu parametrien testaamiseen

### 🇺🇸 USA:n tutkimus (tulossa 2025)
- Vertaileva analyysi amerikkalaisen maahanmuuttojärjestelmän kanssa
- Samalla opportunity cost -metodologialla
- Fokus pistejärjestelmän vs. humanitaarisen maahanmuuton eroihin

## Tekninen toteutus

### HTML-rakenne
- **Semanttinen HTML5:** Saavutettavuus ja SEO optimoitu
- **Modulaarinen rakenne:** Helppo laajentaa uusilla mailla
- **Progressive enhancement:** Toimii ilman JavaScriptia

### CSS-arkkitehtuuri
- **CSS Custom Properties:** Teemojen helppo hallinta
- **Grid & Flexbox:** Modernit layout-tekniikat
- **Mobile-first design:** Responsiivinen kaikilla laitteilla

### JavaScript-toiminnallisuus
```javascript
// Teemanhallinta
class SiteManager {
    constructor() {
        this.hasConsent = false;
        this.currentTheme = 'light';
        this.init();
    }
    // ...
}

// Simulaattori
class IntegrationSimulator {
    calculateNPV(params, years = 20) {
        // Dynaaminen NPV-laskenta
        // ...
    }
    // ...
}
```

## Tietosuoja ja GDPR

### Cookie Consent
- **Pakollinen hyväksyntä:** EU-säädösten mukainen toteutus
- **Selkeä informointi:** Mitä tietoja tallennetaan ja miksi
- **Helppoa kieltäytyä:** Yhtä helppo sanoa ei kuin kyllä

### Tallennetut tiedot
- **Ainoa tallennettu tieto:** Käyttäjän teemavalinta (light/dark)
- **Tallennuspaikka:** Selaimen localStorage (ei palvelimelle)
- **Poistaminen:** Helppo poistaa selaimen asetuksista

## Kontribuutio

### Sisällön kehittäminen
- Tutkimuksen laajentaminen uusiin maihin
- Metodologian parantelut
- Simulaattorin lisäominaisuudet

### Tekninen kehittäminen
- Koodin optimointi
- Saavutettavuuden parantaminen
- Suorituskyvyn optimointi

### Yhteystiedot
- **Tutkimuskysymykset:** stochasticphilosophy(at)gmail(dot)com
- **Tekniset ongelmat:** GitHub Issues
- **Ehdotukset:** GitHub Discussions

## Lisenssi

### Tutkimussisältö
- **Tekijänoikeus:** © 2025 Tutkijaryhmä
- **Käyttöoikeus:** Akateeminen ja tutkimuskäyttö sallittu lähdeviittauksella
- **Kaupallinen käyttö:** Vaatii erillisen luvan

### Sivuston koodi
- **Avoin lähdekoodi:** MIT License
- **Vapaasti käytettävissä:** Muokkaaminen ja jakaminen sallittu
- **Ei takuuta:** Käyttö omalla vastuulla

## Versiohistoria

### v1.0.0 (2025-09-XX)
- ✅ Suomen tutkimuksen täydellinen analyysi
- ✅ Interaktiivinen simulaattori
- ✅ Responsiivinen design
- ✅ GDPR-yhteensopiva toteutus

### v1.1.0 (suunnitteilla)
- 🔄 USA:n tutkimusanalyysi
- 🔄 Maiden välinen vertailusivu
- 🔄 Simulaattorin parannukset

## Kiitokset

### Tutkimusyhteistyö
- **Claude Sonnet 4:** Tekninen toteutus ja sisällöntuotanto
- **VATT:** Rekisteriaineistot ja seurantadata
- **Tilastokeskus:** Perustilastot ja työllisyysdata

### Kansainvälinen tutkimusyhteisö
- Zhang et al. (2017) - Kanadalainen tiimityötutkimus
- Reeves et al. (2013) - EU:n terveydenhuoltotutkimus
- Rothstein (2017) - Ruotsin kokemusanalyysi

---

**Huomio:** Tämä sivusto on luotu yhteistyössä Claude Sonnet 4:n kanssa. Kaikki tutkimustulokset perustuvat tieteelliseen kirjallisuuteen ja virallisiin tilastoihin.
