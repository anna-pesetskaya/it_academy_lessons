const url = {
    baseUrl:' https://www.a1.by/ru/',
    companyUrl: 'https://www.a1.by/ru/company/',
    shopsUrl: "https://www.a1.by/ru/company/company-centers",
    phonesUrl: "https://www.a1.by/ru/shop/c/phones",
};    

const testData = {
    smartphones: 'Смартфоны',
    support: 'поддержка',
    subscriptionEmail: "testbscs@testbscs.com",
    fio: "Тест Тест Тест", 
    phoneNumber: "296000411", 
    contactEmail: "testbscs@testbscs.com",
    validSearchValue: 'Драйв Актив',
    invalidSearchValue: "oirutoqiu",
    phoneSearch: "Xiaomi",
    unsubscribeUrl: `https://www.a1.by/ru/company/subscriptions/unsubscribe?token=${('testbscs@testbscs.com'.split('@')[0])}&utm_source=newspromoletter&utm_medium=email`,

};

const authData = {
    validLogin: '445840923', 
    validPassword: "11111111Qq",
    invalidPassword: "22222222Qq",
}

const phoneModelsLanguageVariants = {
    "эппл": "Apple",
    "самсунг": "Samsung",
    "ксяоми": "Xiaomi",
    "сяоми": "Xiaomi",
    "хонор": "HONOR",
    "хуавэй": "Huawei"
  };

const links = [
    { name: 'Тарифы и услуги', selector: '//a[@href="/ru/tarify-uslugi"]', href: '/ru/tarify-uslugi'}, 
    { name: 'Роуминг', selector: '//li[@class="header-main-item"]//a[@href="https://roaming.a1.by/b2c"]', href: 'https://roaming.a1.by/b2c'|'https://roaming.a1.by/b2c?_gl=1*10mhci4*_gcl_au*MzQxNTkxNTUxLjE3Mjc4NjcyOTI.*_ga*MTM4MDA4Mzc5My4xNzI3ODY3Mjkx*_ga_B1TB6FBMCH*MTcyNzg2NzI5Mi4xLjAuMTcyNzg2NzI5Mi42MC4wLjEzMzUyNTAyODQ.'},
    { name: 'Интернет-магазин', selector: '//a[@href="/ru/c/shop"]', href: '/ru/c/shop'},
    { name: 'Финансовые сервисы', selector: '//ul[@class="header-main-list cd-dropdown-content dropdown-menu"]//div[@class="yCmsComponent"]/li[5]/a[@href="/ru/services/c/Fin_uslugi"]', href: '/ru/services/c/Fin_uslugi'},
    { name: 'Онлайн-кинотеатр VOKA', selector: '//a[@href="https://internet.a1.by/minsk/iptv"]', href: 'https://internet.a1.by/minsk/iptv'},
    ];

const expectedUrls = {
    'Онлайн-кинотеатр VOKA': 'https://internet.a1.by/minsk/iptv',
    'Роуминг': 'https://roaming.a1.by/b2c?_gl=1*1ammk1*_gcl_au*MTM2NjQ4MDU0My4xNzI3MzYzNzMw*_ga*NzIwMDczNC4xNzI3MzYzNzI5*_ga_B1TB6FBMCH*MTcyNzM2MzczMC4xLjAuMTcyNzM2MzczMC42MC4wLjExNTc0MjE4NDI.',
    };



module.exports = {
    url,
    testData,
    authData,
    phoneModelsLanguageVariants,
    links,
    expectedUrls
};