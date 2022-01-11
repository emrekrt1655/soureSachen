// import { PrismaClient, Prisma } from "@prisma/client";

// import bcrypt from "bcrypt";

// const prisma = new PrismaClient();

// const userData: Prisma.UserCreateInput[] = [
//   {
//     id: "10001",
//     userName: "emrekrt16",
//     email: "e@e.com",
//     password: "12345678",
//   },
//   {
//     id: "10002",
//     userName: "reci41",
//     email: "r@r.com",
//     password: "12345678",
//   },
//   {
//     id: "10003",
//     userName: "fkanbur5016",
//     email: "f@f.com",
//     password: "12345678",
//   },
//   {
//     id: "10004",
//     userName: "musab32",
//     email: "m@m.com",
//     password: "12345678",
//   },
//   {
//     id: "10005",
//     userName: "hg5216",
//     email: "h@h.com",
//     password: "12345678",
//   },
// ];

// const topicData: Prisma.TopicCreateInput[] = [
//   {
//     id: "1",
//     text: "trt müzik game of thrones cover'ı",
//   },
//   {
//     id: "2",
//     text: "fenerbahçe",
//   },
//   {
//     id: "3",
//     text: "almanya'da fabrikada robotun işçiyi öldürmesi",
//   },
//   {
//     id: "4",
//     text: "buse terim",
//   },
//   {
//     id: "5",
//     text: "bir şirketin kalitesiz olduğunu gösteren detaylar",
//   },
//   {
//     id: "6",
//     text: "komedi dizilerinin bitme sebebi",
//   },
// ];

// const postData: Prisma.PostCreateInput[] = [
//   {
//     id: "1",
//     text: "efsane olmuş. bu gözler bunu da mı görecekti.trt'ye giden vergiler ilk defa bir işe yaramış oldu, eğlendirdi.",
//     userId: "10001",
//     topicId: "1",
//   },
//   {
//     id: "2",
//     text: "programın adı 'son mevsim türküler'dir.",
//     userId: "10002",
//     topicId: "1",
//   },
//   {
//     id: "3",
//     text: "kesinlikle çok güzel olmuş cover. sanatçıların eline, koluna, yüreğine sağlık.",
//     userId: "10003",
//     topicId: "1",
//   },
//   {
//     id: "4",
//     text: "video altındaki yorum güldürmüştür.",
//     userId: "10004",
//     topicId: "1",
//   },
//   {
//     id: "5",
//     text: "kargalar da sever.",
//     userId: "10005",
//     topicId: "1",
//   },
//   {
//     id: "6",
//     text: "acilarin takimi",
//     userId: "10001",
//     topicId: "2",
//   },
//   {
//     id: "7",
//     text: "kendini zaman zaman fenerbahçe cumhuriyeti diye de adlandıran güzide kulübümüz...",
//     userId: "10002",
//     topicId: "2",
//   },
//   {
//     id: "8",
//     text: "geri donusum kutusuna taktıgım isim",
//     userId: "10003",
//     topicId: "2",
//   },
//   {
//     id: "9",
//     text: "'fenerbahce kulubunun her tarafta mazhar-i takdir olmus bulunan aseri mesaisini isitmis ve bu kulubu ziyaret ve erbab-i himmeti tebrik etmeyi vazife edinmistim. bu vazifenin ifadesi ancak bugun muyesser olabilmistir. takdirat ve tabrikatimi buraya kayd ile mubahiyim.'m.k. ataturk",
//     userId: "10004",
//     topicId: "2",
//   },
//   {
//     id: "10",
//     text: "2000-2001 sezonu türkiye 1.futbol ligi $ampiyonu olan bir futbol takımı.",
//     userId: "10005",
//     topicId: "2",
//   },
//   {
//     id: "11",
//     text: "volkswagen'in yüksek miktarda tazminata mahkum edileceği olaydır.",
//     userId: "10001",
//     topicId: "3",
//   },
//   {
//     id: "12",
//     text: "vw ninde onun hücrelerini yapan otomasyon firmasının başı yanacaktır.",
//     userId: "10002",
//     topicId: "3",
//   },
//   {
//     id: "13",
//     text: "vw golf yüzünden olmuştur. en nihayetinde tok kapı sesi...",
//     userId: "10003",
//     topicId: "3",
//   },
//   {
//     id: "14",
//     text: "asimov'un kehanetinin birinci adımıdır.",
//     userId: "10004",
//     topicId: "3",
//   },
//   {
//     id: "15",
//     text: "evimi mini bir üs haline getirdim kıyamet gününü bekliyorum.",
//     userId: "10005",
//     topicId: "3",
//   },
//   {
//     id: "16",
//     text: "kayakla ugrastıgını bu aralar gazetelerin boyuna yazdıgı kisi.alın sozlugede yazdım,kesin artık su haberleri.tamam dereceleride vardır.gecen sene turkiye dorduncusu olmus.",
//     userId: "10001",
//     topicId: "4",
//   },
//   {
//     id: "17",
//     text: "merve terim'in küçük kız kardeşi.",
//     userId: "10002",
//     topicId: "4",
//   },
//   {
//     id: "18",
//     text: "samimi bir dille yazılan,modayı yansıtan ,müthiş bir blogu vardır kendisinin.bugün keşfetmeme rağmen 1 saattir siteden çıkamıyorum.",
//     userId: "10003",
//     topicId: "4",
//   },
//   {
//     id: "19",
//     text: "emre belözoğlu' nun kuzeni ile birlikte olan babadan zengin insan",
//     userId: "10004",
//     topicId: "4",
//   },
//   {
//     id: "20",
//     text: "evinde ekmege hello kitty resmi basan tost makinasi bulunan sahsiyet.",
//     userId: "10005",
//     topicId: "4",
//   },
//   {
//     id: "21",
//     text: "ilanında 'takım arkadaşları arıyoruz.' diyorsa bilin ki köle arıyor ama utandığından söyleyemiyordur, dikkatli olun.",
//     userId: "10001",
//     topicId: "5",
//   },
//   {
//     id: "22",
//     text: "'talep edilen ücret'i soruyorsa kesin kalitesizdir. işe alınacak elemanda aranılan tek özellik az maaş istemesi olacaktır.",
//     userId: "10002",
//     topicId: "5",
//   },
//   {
//     id: "23",
//     text: "maaş günü hafta sonuna geliyorsa paraya takip eden ilk iş günü yatırması. oysa ki cumadan yatmalı.",
//     userId: "10003",
//     topicId: "5",
//   },
//   {
//     id: "24",
//     text: "ilgili firmanın müşteri hizmetlerinin vermiş olduğu hizmetten anlaşılır.",
//     userId: "10004",
//     topicId: "5",
//   },
//   {
//     id: "25",
//     text: "bazi sirketlerde ,calisan kisilerden daha fazla sayida mudurluk pozisyonu mevcut. ayni anda birkac birimin basinda olan kisiler bile var.",
//     userId: "10005",
//     topicId: "5",
//   },
//   {
//     id: "26",
//     text: "çünkü gülmeyi unuttuk.",
//     userId: "10001",
//     topicId: "6",
//   },
//   {
//     id: "27",
//     text: "bu ülkede gülmek senin neyine. hep kahır.",
//     userId: "10002",
//     topicId: "6",
//   },
//   {
//     id: "28",
//     text: "çünkü komedi dizilerini yapan(yapabilen) insanlar ya öldüler yada siyasi görüşlerine göre yargılandıkları için televizyondan men edildiler",
//     userId: "10003",
//     topicId: "6",
//   },
//   {
//     id: "29",
//     text: "komedi dizisini yazmak öyle her baba yiğidin harcı değil. ayrıca 3 saat komedi dizisi de yazmak imkansız televizyon için. o yüzden bu tür içerikler artık online platformlara kaymaya başladı. en son ne zaman türkiye'de televizyonda yayınlanan bir diziyi izledim hatırlamıyorum.",
//     userId: "10004",
//     topicId: "6",
//   },
//   {
//     id: "30",
//     text: "halk bunu istiyor. kendi dramlarini unutmak için, baskalarinin dramini, trajedisini, entrikalarini izlemek istiyor. kim kimi dürtmüş en onemli husus. eğer dürtmüyorlarsa silahlar konuşuyor. racon kesmek bunu gerektirir.",
//     userId: "10005",
//     topicId: "6",
//   },
// ];

// const commentData: Prisma.CommentCreateInput[] = [
//   {
//     id: "10001",
//     text: "Lorem Ipsum",
//     postId: "1",
//     userId: "10001",
//   },
//   {
//     id: "10002",
//     text: "Lorem Ipsum",
//     postId: "2",
//     userId: "10002",
//   },
//   {
//     id: "10003",
//     text: "Lorem Ipsum",
//     postId: "3",
//     userId: "10003",
//   },
//   {
//     id: "10004",
//     text: "Lorem Ipsum",
//     postId: "4",
//     userId: "10004",
//   },
//   {
//     id: "10005",
//     text: "Lorem Ipsum",
//     postId: "5",
//     userId: "10005",
//   },
//   {
//     id: "10006",
//     text: "Lorem Ipsum",
//     postId: "6",
//     userId: "10001",
//   },
//   {
//     id: "10007",
//     text: "Lorem Ipsum",
//     postId: "6",
//     userId: "10001",
//   },
//   {
//     id: "10008",
//     text: "Lorem Ipsum",
//     postId: "7",
//     userId: "10002",
//   },
//   {
//     id: "10009",
//     text: "Lorem Ipsum",
//     postId: "7",
//     userId: "10003",
//   },
// ];

// const likeData: Prisma.LikeCreateInput[] = [
//   {
//     id: "1",
//     postId: "1",
//     userId: "10001",
//   },
//   {
//     id: "2",
//     postId: "2",
//     userId: "10002",
//   },
//   {
//     id: "3",
//     postId: "1",
//     userId: "10004",
//   },
//   {
//     id: "4",
//     postId: "3",
//     userId: "10005",
//   },
//   {
//     id: "5",
//     commentId: "10001",
//     userId: "10002",
//   },
//   {
//     id: "6",
//     commentId: "10002",
//     userId: "10004",
//   },
// ];

// const followerData: Prisma.FollowerCreateInput[] = [
//   {
//     id: "1",
//     followerId: "10001",
//     followedId: "10002",
//   },
//   {
//     id: "2",
//     followerId: "10002",
//     followedId: "10001",
//   },
//   {
//     id: "3",
//     followerId: "10001",
//     followedId: "10003",
//   },
//   {
//     id: "4",
//     followerId: "10002",
//     followedId: "10004",
//   },
// ];

// async function user() {
//   console.log("Start seeding user...");
//   for (let u of userData) {
//     const hashedPassword = await bcrypt.hash(u.password, 12);
//     await prisma.user.create({
//       data: {
//         id: u.id,
//         userName: u.userName,
//         email: u.email,
//         password: hashedPassword,
//       },
//     });
//   }
//   console.log("Seeding user finished.");
// }

// async function topic() {
//   console.log("Start seeding topic...");
//   for (let t of topicData) {
//     await prisma.topic.create({
//       data: {
//         id: t.id,
//         text: t.text,
//       },
//     });
//   }
//   console.log("Seeding topic finished.");
// }

// async function post() {
//   console.log("Start seeding post...");
//   for (let p of postData) {
//     await prisma.post.create({
//       data: {
//         id: p.id,
//         text: p.text,
//         userId: p.userId,
//         topicId: p.topicId,
//       },
//     });
//   }
//   console.log("Seeding post finished.");
// }

// async function comment() {
//   console.log("Start seeding comment...");
//   for (let c of commentData) {
//     await prisma.comment.create({
//       data: {
//         id: c.id,
//         text: c.text,
//         userId: c.userId,
//         postId: c.postId,
//       },
//     });
//   }
//   console.log("Seeding comment finished.");
// }

// async function like() {
//   console.log("Start seeding like...");
//   for (let l of likeData) {
//     await prisma.like.create({
//       data: {
//         id: l.id,
//         postId: l.postId,
//         commentId: l.commentId,
//         userId: l.userId,
//       },
//     });
//   }
//   console.log("Seeding like finished.");
// }

// async function follower() {
//   console.log("Start seeding follower...");
//   for (let f of followerData) {
//     await prisma.follower.create({
//       data: {
//         id: f.id,
//         followerId: f.followerId,
//         followedId: f.followedId,
//       },
//     });
//   }
//   console.log("Seeding follower finished.");
// }

// user()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// topic()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// post()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// comment()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// like()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// follower()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
