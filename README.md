# Vite Projesi İçin Adımlar

- `npm create vite klasör_ismi` > belirttiğimiz isimde bir klasör oluşturur ve içerisne vite projesi kurar

- `npm create vite@latest .` > terminalin bulunduğu klasöre vite projesi kurar

- npm intall > node modules indir

- npm run dev > projeyi ayağa kaldır

# Vite Artıları

- Proje oluşturma / Ayağa Kaladırma gibi işlemleri daha hızlı geçekleştirir.

- Gereksiz kodlardan / dosylardan arınmış bbir react projesi oluşturur

- Build işlemi çok daha hızldır.

# Değişenler

- App.js ve index.js dosyları App.jsx ve main.jsx isimlerini aldı.

- Projeyi ayağa kadlırırken kullandığımız npm start komutunun yerini npm run dev aldı.

# JSON-SERVER

- Kendi bilgisayarımızda çalışan fake API oluşturmaya yarar.

- Kendimizi geliştirmek için yazdığımız basit projelerin backend ihityacını karşılar (proje yayınlanamaz çünkü api fake ve sadeece bizim bilgisayarımızda çalışıyor).

- Hızlı Prototipleme: Örn Backend dev. api'ı oluşturdğu sürede frontende tarafında geliştrmeler yapabilmek için hızlı bir şekilde fake api prototipi oluşturup frontend ilerletebilir.

- Json-server ile oluştruğuğumuz api'a büttün http methodları ile istek atılabilir.

- Yaptığımız istek sonucunda eğer verilerde bir değişim olursa anlık olarak veilerin tutulduğu db.json dosyası güncellenir.

# Kurulum

- npm install json-server
- proje klasöründe db.json dosysı oluştur ve güncelle
- package.json'a server'ı ayağa kaldırma komutunu ekle

# Axios

- HTTP istekleri için modern çözüm
- Yerlesik degil pakedini indirmek gerekli
- isteklerde fetche göre daha az kod yazariz
- hatalari ve istek detaylarini daha detayli bir sekilde gösterir
- body kisminda alinan verileri otomatik olarak isler.
- veri gönderiken otomatk olrak js verisini json verisine cevirir
- istegi iptal etme özelligi
- zaman asimi eklenebilir

  //\* Bilesenin ekrana yuklenme olayini izle
  useEffect(() => {
  // API'ya todo'lar icin GET istegi at
  fetch("http://localhost:3000/todos")
  // Istek basarili olursa js formatina cevir
  .then((res) => res.json())
  // Veri js formatina cevrilince calistir
  .then((data) => setTodos(data))
  // Istek olumsuz olursa calistir
  .catch((err) => console.log(err));
  }, []);
