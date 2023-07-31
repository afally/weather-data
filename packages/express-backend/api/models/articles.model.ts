export interface ArticleTypes {
  title: string;
  author: string;
  imageUrl: string;
  description: string;
  source: {
    Id: string | null;
    name: string;
  };
  publishedAt: string;
  url: string;
}

export const articleOptions: ArticleTypes[] = [
  {
    title:
      "Fed raises rates, Powell leaves door open to hike in September - Reuters",
    author: "Howard Schneider, Michael Derby",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "reuters",
      name: "Reuters",
    },
    publishedAt: "2023-07-26T20:29:00Z",
    url: "https://www.reuters.com/markets/rates-bonds/fed-poised-hike-rates-markets-anticipate-inflation-endgame-2023-07-26/",
  },
  {
    title:
      "3 Marines found dead in vehicle in North Carolina died from carbon monoxide poisoning: Sheriff - ABC News",
    author: "Teddy Grant",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "abc-news",
      name: "ABC News",
    },
    publishedAt: "2023-07-26T20:15:00Z",
    url: "https://abcnews.go.com/US/3-marines-found-dead-vehicle-north-carolina-identified/story?id=101646428",
  },
  {
    title:
      "Prosecutors want Sam Bankman-Fried sent to jail after witness-tampering allegations. Judge issues gag order - CNN",
    author: "Allison Morrow, Kara Scannell",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "cnn",
      name: "CNN",
    },
    publishedAt: "2023-07-26T19:54:00Z",
    url: "https://www.cnn.com/2023/07/26/investing/sbf-hearing-gag-order/index.html",
  },
  {
    title: "Giants sign left tackle Andrew Thomas to extension - Giants.com",
    author: "Michael Eisen",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: null,
      name: "Giants.com",
    },
    publishedAt: "2023-07-26T19:52:30Z",
    url: "https://www.giants.com/news/andrew-thomas-contract-extension-left-tackle-georgia-bulldogs-daniel-jones-2023",
  },
  {
    title:
      "Police K-9 handler who released dog that attacked an unarmed Black man in Ohio has been fired, department says - CNN",
    author: "Polo Sandoval, Emma Tucker",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "cnn",
      name: "CNN",
    },
    publishedAt: "2023-07-26T19:50:00Z",
    url: "https://www.cnn.com/2023/07/26/us/circleville-ohio-police-dog-black-man-attack-fired/index.html",
  },
  {
    title:
      "Rudy Giuliani admits making false claims of Georgia voter fraud - BBC",
    author: "https://www.facebook.com/bbcnews",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: null,
      name: "BBC News",
    },
    publishedAt: "2023-07-26T19:18:45Z",
    url: "https://www.bbc.com/news/world-us-canada-66318528",
  },
  {
    title:
      "Watch Live: Fed Chair Jerome Powell Speaks on Interest-Rate Decision at 2:30 p.m. ET - The Wall Street Journal",
    author:
      "Karen Langley, WSJ Staff, Hannah Miao, Hardika Singh, David Uberti, Justin Lahart, Matt Grossman, Gunjan Banerji, Harriet Torry",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    publishedAt: "2023-07-26T19:08:00Z",
    url: "https://www.wsj.com/livecoverage/fed-meeting-interest-rate-decision-today-july-2023",
  },
  {
    title:
      "Mitch McConnell escorted away from press conference after falling silent - Yahoo News",
    author: "Christopher Wilson",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: null,
      name: "Yahoo Entertainment",
    },
    publishedAt: "2023-07-26T19:00:17Z",
    url: "https://news.yahoo.com/mitch-mcconnell-escorted-away-from-press-conference-after-falling-silent-190017841.html",
  },
  {
    title:
      "Giants GM Joe Schoen on Saquon Barkley talks - No hard feelings - ESPN - ESPN",
    author: "Jordan Raanan",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "espn",
      name: "ESPN",
    },
    publishedAt: "2023-07-26T18:39:00Z",
    url: "https://www.espn.com/nfl/story/_/id/38075609/giants-gm-joe-schoen-saquon-barkley-talks-no-hard-feelings",
  },
  {
    title: "Irish singer Sinéad O'Connor dies aged 56 - BBC",
    author: "https://www.facebook.com/bbcnews",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: null,
      name: "BBC News",
    },
    publishedAt: "2023-07-21T18:34:14Z",
    url: "https://www.bbc.com/news/entertainment-arts-66318626",
  },
  {
    title:
      "Twisted Metal First Reviews: 'Scrappy,' 'Blood-Soaked Blast,' Critics Say - Rotten Tomatoes",
    author: "Debbie Day",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: null,
      name: "Rottentomatoes.com",
    },
    publishedAt: "2023-07-26T18:33:45Z",
    url: "https://editorial.rottentomatoes.com/article/twisted-metal-first-reviews/",
  },
  {
    title:
      "Miami-Dade police chief shot himself after offering resignation, mayor says - Yahoo News",
    author: "FREIDA FRISARO",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: null,
      name: "Yahoo Entertainment",
    },
    publishedAt: "2023-07-22T17:48:07Z",
    url: "https://news.yahoo.com/miami-dade-police-chief-shot-163403427.html",
  },
  {
    title:
      "Israel's top court will hear challenges to a law that weakens its power, escalating political crisis - The Associated Press",
    author: "ISABEL DEBRE",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "associated-press",
      name: "Associated Press",
    },
    publishedAt: "2023-07-23T17:32:00Z",
    url: "https://apnews.com/article/israel-netanyahu-judicial-reform-protest-supreme-court-88593d00c3033c650d171abc619ecd79",
  },
  {
    title:
      "Stability AI releases its latest image-generating model, Stable Diffusion XL 1.0 - TechCrunch",
    author: "Kyle Wiggers",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "techcrunch",
      name: "TechCrunch",
    },
    publishedAt: "2023-07-24T17:15:00Z",
    url: "https://techcrunch.com/2023/07/26/stability-ai-releases-its-latest-image-generating-model-stable-diffusion-xl-1-0/",
  },
  {
    title:
      "UFO congressional hearing: Whistleblower says US concealing 'multi-decade' UFO program - The Associated Press",
    author: "NOMAAN MERCHANT",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "associated-press",
      name: "Associated Press",
    },
    publishedAt: "2023-07-26T17:08:00Z",
    url: "https://apnews.com/article/ufos-uaps-congress-whistleblower-spy-aliens-ba8a8cfba353d7b9de29c3d906a69ba7",
  },
  {
    title: "‘Ultra-rare’ Apple sneakers on sale for $50,000 - CNN",
    author: "Issy Ronald",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "cnn",
      name: "CNN",
    },
    publishedAt: "2023-07-25T16:49:00Z",
    url: "https://www.cnn.com/style/article/apple-sneakers-sale-intl-scli/index.html",
  },
  {
    title:
      "'UnIslamic services': Taliban closes beauty salons in Afghanistan despite public protest - USA TODAY",
    author: "Associated Press",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "usa-today",
      name: "USA Today",
    },
    publishedAt: "2023-07-25T16:48:13Z",
    url: "https://www.usatoday.com/story/news/world/2023/07/26/afghanistan-beauty-salons-closed-by-taliban/70469710007/",
  },
  {
    title:
      "Two pilots killed in Greece plane crash as wildfires batter Sicily - The Washington Post",
    author: "Ellen Francis",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: "the-washington-post",
      name: "The Washington Post",
    },
    publishedAt: "2023-07-26T16:48:00Z",
    url: "https://www.washingtonpost.com/world/2023/07/26/greece-plane-crash-wildfires-sicily/",
  },
  {
    title:
      "Company involved in NYC crane collapse tied to previous disasters, shady 'King of Crane' - New York Post ",
    author: "Olivia Land",
    imageUrl:
      "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    description: "The way of the community is very nice ",
    source: {
      Id: null,
      name: "New York Post",
    },
    publishedAt: "2023-07-26T16:39:00Z",
    url: "https://nypost.com/2023/07/26/company-behind-hells-kitchen-crane-collapse-tied-to-previous-disasters/",
  },
];
