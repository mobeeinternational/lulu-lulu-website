import { mkdir, writeFile } from "fs/promises";
import { join } from "path";

const imageIds = [
  "5914422e-ca7f-4470-9e09-41454bcc5e26",
  "9ea4942b-9388-48f5-9a1b-40cd304ccb6e",
  "8f0d12f1-5b9d-4b43-990c-9a9a8ed2206d",
  "3cdc3a07-c54c-44f2-aa8d-0bca57b59281",
  "8897d8f1-05e4-4593-8310-876261248845",
  "ef0fde47-e2c2-4ee0-bb6e-699a64454508",
  "04e5491b-b112-44b4-b299-8c03beeb1c21",
  "edd37c33-c5aa-4fe5-aa2e-13020042a93c",
  "4e972564-1630-4291-8025-7db8fb662f24",
  "768b8b69-9818-4598-babd-301edb9db17d",
  "2aa0ff2b-a486-4500-8254-63db102f5b54",
  "44c13cc8-52dd-4c55-a10f-1566ae31b962",
  "e406414b-6651-43a0-9859-917b2e69acea",
  "2713648d-7bb4-4e12-8245-e69c1644f068",
  "2098cace-043f-4ea8-b8f3-acce7050aa4d",
  "c9979014-3aa5-4685-80ab-97363dfac7fc",
  "e9fa2c64-aa90-43e4-b439-86f8437066fd",
  "3923b6fd-84f4-4301-ab6d-773841b0446f",
  "62dab28e-94b7-44fc-9571-35ad899f19ed",
  "f8981a2d-7e8c-41ab-a385-d53a47758fce",
  "04933059-13dc-4a64-a506-164a156fd301",
  "7af8dc95-01b9-4b2a-a140-ecda570997f3",
  "96cd30ef-132c-4d35-9602-dc34df362134",
  "2dbcefe5-55f2-4719-b1b9-2350415c3ddf",
  "c2232795-eadf-453a-a631-461454044972",
  "719c8fa9-84b2-407f-99ef-e617990495e1",
  "0edceaa5-6c1b-40b9-8d11-3e79da77492f",
  "9e9ebdea-4b1f-4f89-b7f3-898825d67ac8",
  "7048c76b-9d6a-4bbc-bbc3-6aa0b9d454c6",
  "0ffd5925-7e7e-40f5-8e6a-6e17e81f1f5f",
  "bd4ffc07-347b-4463-80d3-6fcec42af30c",
  "43d869e5-f7f5-4a04-b3a4-dcb48f74b60c",
  "e5e9826e-4de6-4fd4-a560-a5611f92ade4",
  "699aeb21-7ccc-4bfd-875b-5658e76075de",
  "f4fc738a-2a80-4bc0-b718-14f7813c849f",
  "bc80d5c5-8be3-4344-a8a5-f0856ecb78d7",
  "83113dc2-4e88-4295-a34e-52fc8dc5d278",
  "0d30aa8f-ce8c-41de-8a73-5f98c8769810",
  "23013c2b-0b65-4e13-bd1a-19aa893188da",
  "ee1125ed-d778-41a3-9711-87ed1687a19a",
  "914a47b9-8b25-4256-a86d-1b8841bd0853",
  "2874a5d1-38f4-4de9-b4e2-f15180d5b1c7",
  "98ccb1cc-99eb-40a2-802a-21be07fc1a08",
  "42002fc1-47f9-4af3-8fb2-acfb57f4c446",
  "96ccf380-127b-4165-ad69-44e50deedcf2",
  "f95e54ef-6d85-4fd1-a554-dcf7345aee0a",
  "f16779c3-d072-44a1-8d4f-914500214c93",
  "0a2d3f32-b4de-4198-a1dd-a2e6589f2f2e",
  "291bd3a5-791c-472f-a2f8-227c42a99649",
  "41f5c1d9-c2d9-4df4-9a56-585e8dd55fef",
  "8647deed-cbfd-42f8-9220-116d08aa3a88",
  "4541646b-766e-4a4e-8422-af707fc27e6b",
  "8f18e262-beaf-4846-991c-79c13fd7011b",
  "8087d670-16c6-43b1-8198-835e6b2122a4",
  "6c3e73a0-3b85-4f39-83aa-a3e2983007c4",
  "9add49b4-88e8-45ba-9afd-060b1561cf91",
  "839004db-c4eb-4d77-b70a-c79abfddf0ce",
  "d0a51dd0-db79-4d58-b8dd-31a9de31f182",
  "1ce6192f-13f1-4b8f-ae90-a801b75cdcde",
  "51ed87e5-a8f6-46c6-9a42-72f695bb22a0",
  "2962e72f-3baf-4278-a619-fd575483d978",
  "62bf7aa9-19ad-43e0-9bb5-95c52c604fee",
  "3d821b5f-0097-43df-95ae-3211aa9ee372",
  "590aa563-3bf5-4e20-9b88-f947e509fbdb",
  "5c08da4d-e28d-4683-8412-214e3dac5752",
  "a6985896-77d7-4fc6-9699-6ba1eaf6c8d7",
  "2c2f6da5-2d80-4353-a08e-c7bd554a7b62",
  "280042ec-05b2-4a4c-a6b2-5d931dc728a8",
  "352d23f3-b612-4d76-bbb7-955b6c109437",
  "d2b2336d-db26-400d-8e7c-5112fc362e93",
  "8536c858-1565-4a1d-bc57-28c26434843e",
  "6d37e191-60d9-4e4a-9988-9dc5d6755f1c",
  "c6ec3232-0fd1-4e33-a075-5862b1f114a6",
  "ba55cbf3-0fb4-4753-b8ed-ea04b255875a",
  "f5c1ac45-36d6-4260-9689-2a02df90f49c",
  "edbc6968-d004-4637-8406-79903eeda608",
  "3381d8a0-213f-4652-a344-f97dc5618995",
  "53240e30-1cb0-410b-a335-fae8b3a9d428",
  "1acf520b-2ced-4bda-9574-d3afca53163f",
  "960f1284-d047-4f15-97c0-22706d9d8e51",
  "d7d6c336-85b9-4e3e-974c-78e9002a4d55",
  "dadb7a08-f1f7-42cf-92d3-53a45d61d5fb",
  "981f587f-3fc9-43ac-87d1-e7d433441189",
  "8924a841-3270-43b1-ba4a-5bcbe5980e99",
  "387d720a-2bfc-4ee1-bbe2-9c635691c99a",
  "1382fd9b-6e8b-4027-a93a-88bbd64149de",
  "936775a5-27e5-4fd8-a72d-54c8c03b303a",
  "9cfa4493-4283-4b40-9aa8-c9f5b900dfeb",
  "f284a961-f571-4591-b4e9-c33924e11110"
];

const outputDir = join("public", "product_images");
await mkdir(outputDir, { recursive: true });

async function downloadImage(id: string) {
  try {
    const res = await fetch(`https://api.luluetlulu.com/assets/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = await res.arrayBuffer();
    await writeFile(join(outputDir, `${id}.jpg`), Buffer.from(buffer));
    console.log(`✅ ${id}.jpg`);
  } catch (err) {
    console.error(`❌ ${id}:`, err);
  }
}

for (const id of imageIds) {
  await downloadImage(id);
}
