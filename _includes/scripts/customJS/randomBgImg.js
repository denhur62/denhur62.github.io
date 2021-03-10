const bg = document.querySelector(".random_BG");

const bgList = [
  "https://user-images.githubusercontent.com/59393359/74718667-0adb8a80-5276-11ea-8bc3-0e36c67cf28a.jpg",
  "https://user-images.githubusercontent.com/59393359/74718765-30689400-5276-11ea-8a91-dd7ce797074b.jpg",
  "https://user-images.githubusercontent.com/59393359/74718795-3f4f4680-5276-11ea-9f52-58bb99cb2db0.jpg",
  "https://user-images.githubusercontent.com/59393359/74720865-cb16a200-5279-11ea-9318-05e4f75b1106.jpg",
  "https://user-images.githubusercontent.com/59393359/74720904-e2ee2600-5279-11ea-9440-3b3eb9904c22.jpg",
  "https://user-images.githubusercontent.com/59393359/74720910-e41f5300-5279-11ea-9c63-ff84698e3c7f.jpg",
  "https://user-images.githubusercontent.com/59393359/74720914-e4b7e980-5279-11ea-9532-c262caf64f00.jpg",
  "https://user-images.githubusercontent.com/59393359/93015653-0d2c7a00-f5f6-11ea-9e2f-300be0889f76.jpg",
  "https://user-images.githubusercontent.com/59393359/93015655-0e5da700-f5f6-11ea-820f-a98f9ee273fd.jpg",
  "https://user-images.githubusercontent.com/59393359/93015656-0ef63d80-f5f6-11ea-90b2-3bb960158672.jpg",
  "https://user-images.githubusercontent.com/59393359/93015663-11589780-f5f6-11ea-9083-23c3fc70e1cb.jpg",
  "https://user-images.githubusercontent.com/59393359/93015664-11f12e00-f5f6-11ea-8ae2-f7ea24961462.jpg",
  "https://user-images.githubusercontent.com/63595768/110084991-e9433780-7dd3-11eb-835d-43b34f48515e.jpg",
  "https://user-images.githubusercontent.com/63595768/110084998-eb0cfb00-7dd3-11eb-86bd-6d5416a17f5b.jpg",
  "https://user-images.githubusercontent.com/63595768/110085005-ec3e2800-7dd3-11eb-8976-33d913495815.jpg",
  "https://user-images.githubusercontent.com/63595768/110085012-ed6f5500-7dd3-11eb-9687-145fa20eb877.jpg",
  "https://user-images.githubusercontent.com/63595768/110085014-ef391880-7dd3-11eb-9f2f-9f5f710ea0cb.jpg",
  "https://user-images.githubusercontent.com/63595768/110085024-f102dc00-7dd3-11eb-97f9-8dd28bfc770d.jpg",
  "https://user-images.githubusercontent.com/63595768/110085149-18f23f80-7dd4-11eb-9687-5ca319969ac6.jpg",
  "https://user-images.githubusercontent.com/63595768/110085153-1abc0300-7dd4-11eb-9343-019af8966b6f.jpg",
  "https://user-images.githubusercontent.com/63595768/110085156-1bed3000-7dd4-11eb-970f-90fb57d63a4b.jpg",
  "https://user-images.githubusercontent.com/63595768/110085157-1d1e5d00-7dd4-11eb-86a3-49c24751feb5.jpg",
  "https://user-images.githubusercontent.com/63595768/110085159-1e4f8a00-7dd4-11eb-8a8e-50d039adb693.jpg",
  "https://user-images.githubusercontent.com/63595768/110085165-1f80b700-7dd4-11eb-8cbf-4166abd47bec.jpg"
];

const randNum = Math.floor(Math.random() * bgList.length);

bg.style.backgroundImage = `url(${bgList[randNum]})`;
